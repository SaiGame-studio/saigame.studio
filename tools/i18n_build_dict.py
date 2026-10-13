"""Build the EN -> VI dictionary from the mirrored WordPress pages (TranslatePress output).

For every page we have the English mirror (_mirror/<page>.local.html) and the Vietnamese one
(_mirror/_vi_<page>.local.html). TranslatePress keeps the DOM and only swaps texts, so the two DOMs are
aligned element by element and the texts of matching elements give the translation pairs. Texts are
normalised and split the same way tools/convert_page.py writes them into JSX (HTML whitespace collapsed,
&nbsp; kept, split around <br> and emoji), so the keys match the JSX text of the components.

usage: python tools/i18n_build_dict.py <mirror_dir> <out_json> [<extra_json> ...]
  extra_json: hand-written {en: vi} entries merged on top (for content added in the Next.js site)
"""
import difflib, json, re, sys
from collections import Counter, defaultdict
from bs4 import BeautifulSoup, Comment, NavigableString

MIRROR, OUT = sys.argv[1], sys.argv[2]
EXTRA = sys.argv[3:]
PAGES = ["home", "_games_", "_purgatory_", "_the-immortal_", "_the-watcher_", "_courses_", "_unity-dev-basic_", "_co-ban-sai-server_"]
WS = re.compile(r"[ \t\n\r\f\v]+")
EMOJI_RE = re.compile("(?:[☀-➿⬀-⯿\U0001F000-\U0001FAFF](?:️)?(?:‍[☀-➿\U0001F000-\U0001FAFF]️?)*)")
ATTRS = ("alt", "title", "aria-label", "placeholder")


def norm(t):
    return WS.sub(" ", t).strip()


def pieces(t):
    """text pieces as the converter emits them (emoji become <img>, so they split the text)"""
    return [p for p in (norm(x) for x in EMOJI_RE.split(t)) if p]


def vi_path(p):
    return "_vi_" if p == "home" else "_vi" + p


def elements(root):
    out = []
    for d in root.descendants:
        if isinstance(d, NavigableString) or d.name in ("script", "style", "svg", "path"):
            continue
        if d.find_parent(["svg", "script", "style"]):
            continue
        if d.find_parent("li", class_="menu-item-object-language_switcher") or "menu-item-object-language_switcher" in d.get("class", []):
            continue  # language switcher is handled by the Next.js app
        out.append(d)
    return out


def key(el):
    cls = " ".join(c for c in el.get("class", []) if not c.startswith(("trp", "current", "menu-item-")))
    return (el.name, cls)


def direct_texts(el):
    """direct child text runs of el, split at <br> (a <br> starts a new run)"""
    runs, cur = [], ""
    for c in el.children:
        if isinstance(c, Comment):
            continue
        if isinstance(c, NavigableString):
            cur += str(c)
        elif c.name == "br":
            runs.append(cur)
            cur = ""
        else:
            runs.append(cur)
            cur = ""
            runs.append(None)  # child element boundary
    runs.append(cur)
    return [r for r in runs if r is None or norm(r)]


votes = defaultdict(Counter)


def add(en, vi):
    if en and vi and en != vi:
        votes[en][vi] += 1


for page in PAGES:
    E = BeautifulSoup(open(f"{MIRROR}/{page}.local.html", encoding="utf8").read(), "lxml").select_one(".wp-site-blocks")
    V = BeautifulSoup(open(f"{MIRROR}/{vi_path(page)}.local.html", encoding="utf8").read(), "lxml").select_one(".wp-site-blocks")
    ee, ve = elements(E), elements(V)
    sm = difflib.SequenceMatcher(a=[key(x) for x in ee], b=[key(x) for x in ve], autojunk=False)
    for op, i1, i2, j1, j2 in sm.get_opcodes():
        if op != "equal":
            continue
        for a, b in zip(ee[i1:i2], ve[j1:j2]):
            for at in ATTRS:
                if a.get(at) and b.get(at):
                    add(norm(a[at]), norm(b[at]))
            ta, tb = direct_texts(a), direct_texts(b)
            # group runs between child elements, compare group by group
            def groups(runs):
                g, cur = [], []
                for r in runs:
                    if r is None:
                        g.append(cur); cur = []
                    else:
                        cur.append(r)
                g.append(cur)
                return g
            ga, gb = groups(ta), groups(tb)
            if len(ga) != len(gb):
                continue
            for ra, rb in zip(ga, gb):
                if not ra or not rb:
                    continue
                pa = [p for r in ra for p in pieces(r)]
                pb = [p for r in rb for p in pieces(r)]
                if len(pa) == len(pb):
                    for x, y in zip(pa, pb):
                        add(x, y)
                elif len(pa) == 1:  # e.g. EN one line, VI split with <br>
                    add(pa[0], " ".join(pb))

dictionary = {en: c.most_common(1)[0][0] for en, c in sorted(votes.items())}
for extra in EXTRA:
    dictionary.update(json.load(open(extra, encoding="utf8")))
json.dump(dictionary, open(OUT, "w", encoding="utf8"), ensure_ascii=False, indent=1, sort_keys=True)
conflicts = {en: dict(c) for en, c in votes.items() if len(c) > 1}
print(f"entries: {len(dictionary)}  (conflicting translations resolved by majority: {len(conflicts)})")
for en, c in list(conflicts.items())[:5]:
    print("  conflict:", en[:50], "->", list(c)[:2])
