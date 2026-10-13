"""Convert a mirrored WordPress/Kubio page into Next.js App Router files.

usage: python tools/convert_page.py <page.local.html> <slug> <route> <out_dir> <fontmap.json> <orig_name>
  slug  : folder name for components/css (home, games, purgatory, ...)
  route : app route ('' for /, 'games', 'purgatory', ...)
Output (inside out_dir):
  components/pages/<slug>/*.tsx       one component per section (navigation, hero, sections, footer)
  components/pages/<slug>/styles.json stylesheet list in the original cascade order (input of build_global_styles.py)
  public/css/<slug>/inline-*.css      the page's inline <style> blocks
  app/<route>/page.tsx                the route, composing the sections
"""
import json, re, sys, os
from bs4 import BeautifulSoup, Comment, NavigableString, Doctype

SRC, SLUG, ROUTE, OUT, FONTMAP, ORIG = sys.argv[1:7]
html = open(SRC, encoding="utf8").read()
soup = BeautifulSoup(html, "lxml")
FONT_CSS = json.load(open(FONTMAP))[ORIG]
VOID = {"area", "base", "br", "col", "embed", "hr", "img", "input", "link", "meta", "source", "track", "wbr"}
ATTR_MAP = {
    "class": "className", "for": "htmlFor", "tabindex": "tabIndex", "srcset": "srcSet",
    "fetchpriority": "fetchPriority", "readonly": "readOnly", "maxlength": "maxLength",
    "crossorigin": "crossOrigin", "autocomplete": "autoComplete", "autoplay": "autoPlay",
    "playsinline": "playsInline", "frameborder": "frameBorder", "allowfullscreen": "allowFullScreen",
    "colspan": "colSpan", "rowspan": "rowSpan", "enctype": "encType", "novalidate": "noValidate",
    "datetime": "dateTime", "referrerpolicy": "referrerPolicy", "viewbox": "viewBox",
    "xlink:href": "xlinkHref", "xmlns:xlink": "xmlnsXlink", "xml:space": "xmlSpace",
    "accept-charset": "acceptCharset", "http-equiv": "httpEquiv", "contenteditable": "contentEditable",
    "spellcheck": "spellCheck", "itemprop": "itemProp", "itemscope": "itemScope", "itemtype": "itemType",
}
BOOL = {"allowfullscreen", "autoplay", "playsinline", "muted", "loop", "controls", "disabled", "checked",
        "readonly", "required", "hidden", "novalidate", "itemscope", "async", "defer", "selected", "multiple"}
DROP_ATTR = re.compile(r"^on[a-z]+$")

def camel(prop):
    if prop.startswith("--"):
        return prop
    prop = re.sub(r"^-ms-", "ms-", prop)
    return re.sub(r"-([a-z])", lambda m: m.group(1).upper(), prop)

def style_obj(s):
    parts = []
    for decl in re.split(r";(?![^(]*\))", s):
        if ":" not in decl:
            continue
        k, v = decl.split(":", 1)
        k, v = k.strip(), v.strip()
        if not k:
            continue
        parts.append((camel(k), v))
    seen = {}
    for k, v in parts:  # duplicate declarations: last one wins, like in CSS
        seen.pop(k, None)
        seen[k] = v
    body = ", ".join(f"{json.dumps(k)}: {json.dumps(v)}" for k, v in seen.items())
    return "{{ " + body + " } as React.CSSProperties}"

def svg_attr(name):
    if name in ATTR_MAP:
        return ATTR_MAP[name]
    if name.startswith(("data-", "aria-")):
        return name
    if "-" in name or ":" in name:
        return re.sub(r"[-:]([a-z])", lambda m: m.group(1).upper(), name)
    return name

def rewrite_url(v):
    # internal absolute links -> relative so they resolve on local.saigame.studio
    v = re.sub(r"^https?://saigame\.studio(?=/|$)", "", v)
    return v or "/"

inline_scripts = []

def attrs_to_jsx(tag):
    out = []
    in_svg = tag.find_parent("svg") is not None or tag.name == "svg"
    for k, v in tag.attrs.items():
        if DROP_ATTR.match(k):
            continue
        if isinstance(v, list):
            v = " ".join(v)
        if k in ("href", "src", "action") and isinstance(v, str):
            v = rewrite_url(v)
        if k == "style":
            out.append(f"style={style_obj(v)}")
            continue
        name = svg_attr(k) if in_svg else ATTR_MAP.get(k, k)
        if k == "name" and tag.name not in ("input", "select", "textarea", "button", "form", "iframe", "meta", "map", "object", "output", "fieldset", "param", "slot"):
            out.append("{...{ name: " + json.dumps(v) + " }}")  # non-standard attribute kept for Kubio JS
            continue
        if k in BOOL and (v == "" or v == k):
            out.append(name)
            continue
        out.append(f"{name}={jsx_str(v)}")
    return (" " + " ".join(out)) if out else ""

def jsx_str(v):
    # JSX string attributes cannot contain escapes; use an expression when needed
    if re.search(r'["\\\n{}]', v):
        return "{" + json.dumps(v) + "}"
    return '"' + v + '"'

WS = r"[ \t\n\r\f\v]+"  # collapse HTML whitespace only — NOT \u00a0 (&nbsp;), which is layout-significant

# WordPress' emoji script swaps emoji characters for Twemoji SVGs (img.emoji). Reproduce that statically.
EMOJI_RE = re.compile("(?:[\u2600-\u27BF\u2B00-\u2BFF\U0001F000-\U0001FAFF](?:\uFE0F)?(?:\u200D[\u2600-\u27BF\U0001F000-\U0001FAFF]\uFE0F?)*)")
EMOJI_USED = set()

def emoji_file(ch):
    cps = [f"{ord(c):x}" for c in ch if ord(c) != 0xFE0F]
    return "-".join(cps) + ".svg"

def plain_text_jsx(t):
    t = re.sub(WS, " ", t)
    t = t.replace("\u00a0", "\u00a0")
    if re.search(r"[{}<>\u00a0]", t):
        return "{" + json.dumps(t) + "}"
    return t

def text_jsx(t):
    if not re.sub(WS, "", t):
        return " " if t else ""
    out, pos = [], 0
    for m in EMOJI_RE.finditer(t):
        out.append(plain_text_jsx(t[pos:m.start()]))
        f = emoji_file(m.group(0))
        EMOJI_USED.add(f)
        out.append(f'<img draggable="false" role="img" className="emoji" alt={json.dumps(m.group(0))} src="/wp-emoji/{f}" />')
        pos = m.end()
    out.append(plain_text_jsx(t[pos:]))
    return "".join(out)

def node(el, depth=0):
    ind = "  " * depth
    if isinstance(el, (Comment, Doctype)):
        return ""
    if isinstance(el, NavigableString):
        t = text_jsx(str(el))
        return t
    if el.name == "script":
        if el.string and el.string.strip():
            inline_scripts.append(el.string)
        return ""
    if el.name == "style":
        css = el.string or ""
        return f"{ind}<style dangerouslySetInnerHTML={{{{ __html: {json.dumps(css)} }}}} />\n"
    if el.name == "template":
        return ""
    a = attrs_to_jsx(el)
    if el.name in VOID:
        return f"{ind}<{el.name}{a} />\n"
    kids = [node(c, depth + 1) for c in el.children]
    inner = "".join(kids)
    if not inner.strip():
        return f"{ind}<{el.name}{a}></{el.name}>\n"
    if all(not k.endswith("\n") for k in kids):  # only text
        return f"{ind}<{el.name}{a}>{inner.strip()}</{el.name}>\n"
    return f"{ind}<{el.name}{a}>\n{inner}{ind}</{el.name}>\n"

def component(name, el, comment):
    body = node(el, 2)
    return (f"// {comment}\n// Auto-converted from the original saigame.studio markup (Kubio). Keep classNames: the original CSS depends on them.\n"
            f"export default function {name}() {{\n  return (\n{body}  );\n}}\n")

def pascal(s):
    return "".join(p[:1].upper() + p[1:] for p in re.split(r"[^A-Za-z0-9]+", s) if p)

def first_heading(el):
    h = el.find(["h1", "h2", "h3", "h4", "h5"])
    return re.sub(r"\s+", " ", h.get_text(" ", strip=True))[:60] if h else ""

COMP_DIR = f"{OUT}/components/pages/{SLUG}"
os.makedirs(COMP_DIR, exist_ok=True)
site = soup.select_one(".wp-site-blocks")
header = site.select_one(":scope > .wp-block-kubio-header")
footer = site.select_one(":scope > .wp-block-kubio-footer")
# Most pages wrap their sections in .entry-content; template-based pages (e.g. Brizy blank template)
# put the Kubio sections directly under .wp-site-blocks.
content = site.select_one(":scope > .entry-content")
middle = content.find_all(recursive=False) if content else [c for c in site.find_all(recursive=False) if c is not header and c is not footer]
nav = header.select_one(":scope > #navigation")
hero = header.select_one(":scope > #hero")

HOME_NAMES = {"features": "TopGames", "call-to-action-3": "YoutubeCta", "content-2": "GameDevCourses",
              "call-to-action": "DiscordAndCourses", "call-to-action-2": "GithubCta"}
NAMES = {("games", 1): "PurgatoryCard", ("games", 2): "TheImmortalCard", ("games", 3): "TheWatcherCard",
         ("courses", 1): "CoursesContent", ("unity-dev-basic", 1): "CourseModules",
         ("co-ban-sai-server", 1): "SaiServerContent"}
for g in ("purgatory", "the-immortal", "the-watcher"):
    NAMES[(g, 1)] = "GameOverview"
    NAMES[(g, 2)] = "GameFeatures"
files = {"Navigation": component("Navigation", nav, "Top navigation bar (logo, menu with dropdowns, language switcher)"),
         "Hero": component("Hero", hero, "Hero: " + first_heading(hero))}
order = []
for i, sec in enumerate(middle, 1):
    if not sec.get_text(strip=True) and not sec.find(["img", "iframe", "video"]):
        name = "Spacer"
    elif SLUG == "home" and sec.get("id") in HOME_NAMES:
        name = HOME_NAMES[sec["id"]]
    elif (SLUG, i) in NAMES:
        name = NAMES[(SLUG, i)]
    else:
        name = f"Section{i}" + (pascal(first_heading(sec))[:32] if first_heading(sec) else "")
    files[name] = component(name, sec, f"Section {i}: {first_heading(sec) or sec.get('id') or 'spacer'}")
    order.append(name)
files["Footer"] = component("Footer", footer, "Footer")
# Site decision: drop the "Created with ❤ using WordPress and Kubio" credit from the footer
files["Footer"] = re.sub(r' Created with <img[^>]*/> using WordPress and\s*<a[^>]*>Kubio</a>', "", files["Footer"])
for n, src in files.items():
    open(f"{COMP_DIR}/{n}.tsx", "w", encoding="utf8").write(src)

# ---- stylesheets in original cascade order
css_dir = f"{OUT}/public/css/{SLUG}"
os.makedirs(css_dir, exist_ok=True)
styles, i = [], 0
for el in soup.head.find_all(["link", "style"]):
    if el.name == "link":
        rel = " ".join(el.get("rel", []))
        href = el.get("href", "")
        if not ("stylesheet" in rel or (rel == "preload" and el.get("as") == "style")):
            continue
        if "fonts.googleapis" in href:
            href = FONT_CSS
        href = href.replace("/themes/kubio//", "/themes/kubio/")
        if any(s["href"] == href for s in styles):
            continue
        styles.append({"href": href, "media": el.get("media", "all")})
    else:
        css = el.string or ""
        if not css.strip():
            continue
        i += 1
        ident = el.get("id") or (el.get("class") or ["style"])[0]
        name = re.sub(r"[^a-zA-Z0-9_.-]", "-", f"inline-{i:02d}-{ident}.css")
        css = re.sub(r"https?://saigame\.studio(?=/)", "", css)
        open(f"{css_dir}/{name}", "w", encoding="utf8").write(css)
        styles.append({"href": f"/css/{SLUG}/{name}", "media": "all"})
json.dump(styles, open(f"{COMP_DIR}/styles.json", "w"), indent=1)

# ---- route
title = soup.title.get_text().strip().replace("–", "–")
canonical = (soup.find("link", rel="canonical") or {}).get("href", "")
canonical = re.sub(r"^https?://saigame\.studio", "", canonical) or "/"
vi = soup.find("link", attrs={"hreflang": "vi"})
vi = re.sub(r"^https?://saigame\.studio", "", vi["href"]) if vi else None
content_attrs = attrs_to_jsx(content) if content is not None else None
header_attrs = attrs_to_jsx(header)
imp = lambda n: f'import {n} from "@/components/pages/{SLUG}/{n}";'
lines = ['import type { Metadata } from "next";', imp("Navigation"), imp("Hero")]
lines += [imp(n) for n in order] + [imp("Footer"), "",
          "export const metadata: Metadata = {",
          f"  title: {json.dumps(title)},",
          f"  alternates: {{ canonical: {json.dumps(canonical)}" + (f", languages: {{ \"en-US\": {json.dumps(canonical)}, vi: {json.dumps(vi)} }}" if vi else "") + " },",
          "};", "",
          "// The display:contents wrapper adds no box; it scopes this page's Kubio CSS (tools/build_global_styles.py).",
          f"export default function {pascal(SLUG)}Page() {{", "  return (",
          f'    <div data-wp-page="{SLUG}" style={{{{ display: "contents" }}}}>', '      <div className="wp-site-blocks">',
          f"        <div{header_attrs}>", "          <Navigation />", "          <Hero />", "        </div>"]
if content is not None:
    lines += [f"        <div{content_attrs}>"] + [f"          <{n} />" for n in order] + ["        </div>"]
else:
    lines += [f"        <{n} />" for n in order]
lines += ["        <Footer />", "      </div>", "    </div>", "  );", "}", ""]
route_dir = f"{OUT}/app/{ROUTE}" if ROUTE else f"{OUT}/app"
os.makedirs(route_dir, exist_ok=True)
open(f"{route_dir}/page.tsx", "w", encoding="utf8").write("\n".join(lines))
print("next: python tools/build_global_styles.py web   (rebuilds the global, page-scoped stylesheet list)")
print(SLUG, "->", "/" + ROUTE, "| components:", list(files), "| styles:", len(styles), "| title:", title)
os.makedirs(f"{OUT}/emoji", exist_ok=True)
open(f"{OUT}/emoji/{SLUG}.txt", "w").write("\n".join(sorted(EMOJI_USED)))
print("   emoji:", sorted(EMOJI_USED))
