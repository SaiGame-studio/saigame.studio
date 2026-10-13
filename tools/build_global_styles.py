"""Build one global, cascade-ordered stylesheet list for all converted pages (client-side navigation).

Each WordPress page ships its own inline Kubio CSS (style-local-N numbering + per-page overrides of shared
block styles). To navigate without reloads, every page's CSS must be loadable at the same time, so:

  * inline blocks identical on every page  -> public/css/shared/<ident>.css (one copy)
  * inline blocks that differ between pages -> public/css/scoped/<slug>--<ident>.css, every selector scoped
    to that page's wrapper with :where([data-wp-page="<slug>"]) (zero specificity, so the cascade is unchanged)
  * linked stylesheets                      -> kept as-is, deduplicated

The merged order respects each page's original order. Output: web/app/wp-styles.json (rendered by the layout).

usage: python tools/build_global_styles.py <web_dir>
"""
import json, os, re, sys, hashlib
from collections import OrderedDict

WEB = sys.argv[1]
PAGES_DIR = os.path.join(WEB, "components", "pages")
PUBLIC = os.path.join(WEB, "public")
SKIP_LEADING = re.compile(r"^(#kubio|html|body|:root)(?![\w-])|^\.kubio-attachment-fixed-support-fallback(?![\w-])")


def split_top(s, seps):
    """split s on any char in seps at paren/bracket depth 0; keeps separators when seps is a combinator set"""
    out, cur, depth = [], "", 0
    for ch in s:
        if ch in "([":
            depth += 1
        elif ch in ")]":
            depth -= 1
        if depth == 0 and ch in seps:
            out.append(cur)
            out.append(ch)
            cur = ""
        else:
            cur += ch
    out.append(cur)
    return out


def scope_selector(sel, scope):
    sel = sel.strip()
    if not sel:
        return sel
    # tokens: compound, combinator, compound, ...
    parts = split_top(sel, " >+~")
    tokens, pending = [], ""
    for p in parts:
        if p in (" ", ">", "+", "~"):
            if p != " ":
                pending = p
            elif not pending:
                pending = " "
            continue
        if p == "":
            continue
        if tokens:
            tokens.append(pending.strip() or " ")
        tokens.append(p)
        pending = ""
    # find first compound that is page content (not html/body/#kubio)
    i = 0
    while i < len(tokens) and (tokens[i] in (" ", ">", "+", "~") or SKIP_LEADING.match(tokens[i])):
        i += 1
    if i >= len(tokens):
        return None  # selector only targets html/body/:root -> cannot scope
    lead = tokens[:i]
    rest = tokens[i:]
    join = lambda ts: "".join(t if t in (" ",) else (f" {t} " if t in (">", "+", "~") else t) for t in ts)
    lead_s = join(lead).strip()
    prefix = (lead_s + " " if lead_s else "")
    page, owner = scope
    first, tail = rest[0], join(rest[1:])
    if lead and lead[-1] in (">", "+", "~"):
        # e.g. "body > .x": the scope cannot sit in between -> scope the first content compound itself
        return f"{lead_s} {first}:where({page}, {page} *, {owner}, {owner} *){tail}"
    # 1) inside the page wrapper, or inside an element Kubio moved to <body> (off-canvas menu)
    # 2) the moved element itself is the first content compound
    return (f"{prefix}:where({page}, {owner}) {join(rest).strip()}, "
            f"{prefix}{first}:where({owner}){tail}")


def strip_comments(css):
    return re.sub(r"/\*[\s\S]*?\*/", "", css)


def scope_css(css, scope, unscoped):
    css = strip_comments(css)
    out, i, n = [], 0, len(css)
    while i < n:
        j = css.find("{", i)
        if j < 0:
            out.append(css[i:])
            break
        prelude = css[i:j].strip()
        depth, k = 1, j + 1
        while k < n and depth:
            if css[k] == "{":
                depth += 1
            elif css[k] == "}":
                depth -= 1
            k += 1
        block = css[j + 1:k - 1]
        if prelude.startswith(("@media", "@supports", "@container", "@layer")):
            out.append(f"{prelude}{{{scope_css(block, scope, unscoped)}}}")
        elif prelude.startswith("@"):
            out.append(f"{prelude}{{{block}}}")
        else:
            sels = [s for s in split_top(prelude, ",") if s != ","]
            scoped = []
            for s in sels:
                r = scope_selector(s, scope)
                if r is None:
                    unscoped.append(s.strip())
                    scoped.append(s.strip())
                else:
                    scoped.append(r)
            out.append(f"{','.join(scoped)}{{{block}}}")
        i = k
    return "\n".join(out)


def ident_of(href):
    m = re.match(r"^/css/[^/]+/inline-\d+-(.+)\.css$", href)
    return ("inline", m.group(1)) if m else ("link", href)


# ---- load every page's ordered list
pages = sorted(os.listdir(PAGES_DIR), key=lambda p: (p != "home", p))
lists = {p: json.load(open(os.path.join(PAGES_DIR, p, "styles.json"))) for p in pages}

# ---- merge orders (insert unseen keys right after the previous key of that page)
order = []
for p in pages:
    prev = None
    for s in lists[p]:
        key = ident_of(s["href"])
        if key not in order:
            order.insert(order.index(prev) + 1 if prev in order else 0, key)
        prev = key

# ---- collect contents of inline blocks per page
inline = {}  # ident -> {page: (href, css)}
media = {}
for p in pages:
    for s in lists[p]:
        kind, ident = ident_of(s["href"])
        media[(kind, ident)] = s.get("media", "all")
        if kind == "inline":
            css = open(os.path.join(PUBLIC, s["href"].lstrip("/")), encoding="utf8").read()
            inline.setdefault(ident, OrderedDict())[p] = css

os.makedirs(os.path.join(PUBLIC, "css", "shared"), exist_ok=True)
os.makedirs(os.path.join(PUBLIC, "css", "scoped"), exist_ok=True)
result, report = [], []
for kind, ident in order:
    if kind == "link":
        result.append({"href": ident, "media": media[(kind, ident)]})
        continue
    versions = inline[ident]
    if len(set(versions.values())) == 1:
        rel = f"/css/shared/{ident}.css"
        open(os.path.join(PUBLIC, rel.lstrip("/")), "w", encoding="utf8").write(next(iter(versions.values())))
        result.append({"href": rel, "media": media[(kind, ident)]})
        report.append(f"shared  {ident} ({len(versions)} pages)")
        continue
    # differs between pages -> scope each version
    unscoped_by_page = {}
    for p, css in versions.items():
        unscoped = []
        scoped = scope_css(css, (f'[data-wp-page="{p}"]', f'[data-wp-owner="{p}"]'), unscoped)
        rel = f"/css/scoped/{p}--{ident}.css"
        open(os.path.join(PUBLIC, rel.lstrip("/")), "w", encoding="utf8").write(scoped)
        result.append({"href": rel, "media": media[(kind, ident)]})
        unscoped_by_page[p] = unscoped
    report.append(f"scoped  {ident} ({', '.join(versions)})")
    # rules that could not be scoped must be identical everywhere, otherwise pages still conflict
    for p, u in unscoped_by_page.items():
        report.append(f"        {p}: {len(u)} global-only selectors: {sorted(set(u))[:6]}")

json.dump(result, open(os.path.join(WEB, "app", "wp-styles.json"), "w"), indent=1)
print("\n".join(report))
print("stylesheets:", len(result))
