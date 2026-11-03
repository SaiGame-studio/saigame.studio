"""Check that every English key passed to t() (plus the data files run through t()) has a VI and a JA translation.

usage: python tools/i18n_check.py web [keys.json]   -> prints the counts and the missing keys; exit 1 when any is missing
"""
import glob, json, re, sys

WEB = sys.argv[1]
OUT = sys.argv[2] if len(sys.argv) > 2 else None
T_CALL = re.compile(r'\bt\(\s*"((?:[^"\\]|\\.)*)"\s*\)')
DATA_FIELD = re.compile(r'(?:title|summary|text|label|value):\s*"((?:[^"\\]|\\.)*)"')
DATA_FILES = ["components/pages/games/games.ts", "components/pages/sai-server/SaiServerLanding.tsx"]

keys = set()
files = glob.glob(f"{WEB}/components/**/*.tsx", recursive=True) + glob.glob(f"{WEB}/app/**/*.tsx", recursive=True)
for f in files:
    s = open(f, encoding="utf8").read()
    keys.update(m.group(1) for m in T_CALL.finditer(s))
for data_file in DATA_FILES:
    s = open(f"{WEB}/{data_file}", encoding="utf8").read()
    keys.update(m.group(1) for m in DATA_FIELD.finditer(re.sub(r"\n\s+", " ", s)))
# not real text: the sGem/email/brand labels and URL-ish values
keys -= {"Sai Server", "Sai Play", "simon@saigame.studio", "Discord", "YouTube", "GitHub", "1,200+", "24/7"}
keys = {json.loads(f'"{k}"') for k in keys}

vi = json.load(open(f"{WEB}/i18n/vi.json", encoding="utf8"))
ja_path = f"{WEB}/i18n/ja.json"
try:
    ja = json.load(open(ja_path, encoding="utf8"))
except FileNotFoundError:
    ja = {}
missing = {"vi": sorted(k for k in keys if k not in vi), "ja": sorted(k for k in keys if k not in ja)}
print("keys used:", len(keys), "| missing vi:", len(missing["vi"]), "| missing ja:", len(missing["ja"]))
for lang, items in missing.items():
    for k in items:
        print(f"  [{lang}] {k}".encode("ascii", "backslashreplace").decode())
if OUT:
    json.dump(sorted(keys), open(OUT, "w", encoding="utf8"), ensure_ascii=False, indent=1)
sys.exit(1 if missing["vi"] or missing["ja"] else 0)
