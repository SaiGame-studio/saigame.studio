// Make the converted page components language-aware (run after tools/convert_page.py or after updating
// web/i18n/vi.json). Uses the TypeScript compiler to find, in web/components/pages/*/*.tsx:
//   - JSX texts / string children found in the dictionary      -> {t("English text")}
//   - alt / title / aria-label / placeholder found in it        -> ={t("...")}
//   - TranslatePress flag images (language switcher)            -> current/other language flag
//     and their links                                           -> href="#" data-lang={...} (handled client-side)
// and adds `const { t, flags } = await getI18n();` to the component. Idempotent; manual edits are kept.
//
// usage: node tools/i18n_apply.mjs [web_dir]
import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";

const WEB = path.resolve(process.argv[2] ?? "web");
const ts = createRequire(path.join(WEB, "package.json"))("typescript");
const dict = JSON.parse(fs.readFileSync(path.join(WEB, "i18n", "vi.json"), "utf8"));
const WS = /[ \t\n\r\f\v]+/g;
const norm = (s) => s.replace(WS, " ").trim();
const ATTRS = new Set(["alt", "title", "aria-label", "placeholder"]);
const q = (s) => JSON.stringify(s);

const attrsOf = (el) => (ts.isJsxElement(el) ? el.openingElement : el).attributes.properties;
const tagOf = (el) => (ts.isJsxElement(el) ? el.openingElement : el).tagName.getText();
function attrValue(el, name) {
  const a = attrsOf(el).find((p) => ts.isJsxAttribute(p) && p.name.getText() === name);
  if (!a || !a.initializer) return null;
  if (ts.isStringLiteral(a.initializer)) return a.initializer.text;
  const e = a.initializer.expression;
  return e && ts.isStringLiteral(e) ? e.text : null;
}
const isEl = (n) => ts.isJsxElement(n) || ts.isJsxSelfClosingElement(n);
function ancestors(node) {
  const out = [];
  for (let p = node.parent; p; p = p.parent) if (isEl(p)) out.push(p);
  return out;
}

const files = fs.readdirSync(path.join(WEB, "components", "pages")).flatMap((slug) =>
  fs.readdirSync(path.join(WEB, "components", "pages", slug)).filter((f) => f.endsWith(".tsx")).map((f) => path.join(WEB, "components", "pages", slug, f)));

let totals = { texts: 0, attrs: 0, flags: 0, files: 0 };
for (const file of files) {
  let src = fs.readFileSync(file, "utf8");
  const sf = ts.createSourceFile(file, src, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
  const edits = [];
  const c = { texts: 0, attrs: 0, flags: 0 };

  const visit = (node) => {
    if (ts.isJsxText(node) && !node.containsOnlyTriviaWhiteSpaces) {
      const raw = node.getFullText(sf);
      const key = norm(raw);
      if (dict[key]) {
        const lead = raw.match(/^[ \t\n\r\f\v]*/)[0];
        const trail = raw.match(/[ \t\n\r\f\v]*$/)[0];
        const keep = (ws) => (ws && !ws.includes("\n") ? '{" "}' : ws);
        edits.push([node.pos, node.end, `${keep(lead)}{t(${q(key)})}${keep(trail)}`]);
        c.texts++;
      }
    } else if (ts.isJsxExpression(node) && node.expression && ts.isStringLiteral(node.expression) && (ts.isJsxElement(node.parent))) {
      const key = norm(node.expression.text);
      if (dict[key]) {
        edits.push([node.expression.getStart(sf), node.expression.end, `t(${q(key)})`]);
        c.texts++;
      }
    } else if (ts.isJsxAttribute(node) && node.initializer) {
      const name = node.name.getText(sf);
      const el = node.parent.parent; // JsxAttributes -> opening/self-closing element
      const isFlag = /\btrp-flag-image\b/.test(attrValue(el, "className") ?? "");
      if (isFlag && ["src", "alt", "title"].includes(name)) {
        // the flag in the top-level switcher item = current language; inside its sub-menu = the other one
        const inSubMenu = ancestors(el).some((a) => tagOf(a) === "ul" && /\bsub-menu\b/.test(attrValue(a, "className") ?? ""));
        const which = inSubMenu ? "other" : "current";
        edits.push([node.initializer.getStart(sf), node.initializer.end, `{flags.${which}.${name}}`]);
        if (name === "src") {
          const link = ancestors(el).find((a) => tagOf(a) === "a");
          if (link) {
            const href = attrsOf(link).find((p) => ts.isJsxAttribute(p) && p.name.getText() === "href");
            if (href && href.initializer && !/flags\./.test(href.initializer.getText(sf))) {
              edits.push([href.getStart(sf), href.end, `href="#" data-lang={flags.${which}.code}`]);
            }
          }
          c.flags++;
        }
      } else if (ATTRS.has(name)) {
        const lit = ts.isStringLiteral(node.initializer) ? node.initializer
          : node.initializer.expression && ts.isStringLiteral(node.initializer.expression) ? node.initializer.expression : null;
        if (lit && dict[norm(lit.text)]) {
          edits.push([node.initializer.getStart(sf), node.initializer.end, `{t(${q(norm(lit.text))})}`]);
          c.attrs++;
        }
      }
    }
    ts.forEachChild(node, visit);
  };
  visit(sf);
  if (!edits.length) continue;

  // apply edits from the end (dedupe identical ranges)
  const seen = new Set();
  edits.sort((a, b) => b[0] - a[0]).forEach(([s, e, txt]) => {
    const k = s + ":" + e;
    if (seen.has(k)) return;
    seen.add(k);
    src = src.slice(0, s) + txt + src.slice(e);
  });

  // wire getI18n into the component
  const needs = [/\bt\(/.test(src) && "t", /\bflags\./.test(src) && "flags"].filter(Boolean);
  if (!src.includes('from "@/lib/i18n"')) {
    const firstCode = src.search(/^export default/m);
    src = src.slice(0, firstCode) + 'import { getI18n } from "@/lib/i18n";\n\n' + src.slice(firstCode);
  }
  src = src.replace(/^export default function /m, "export default async function ");
  const decl = `  const { ${needs.join(", ")} } = await getI18n();\n`;
  if (/^\s*const \{[^}]*\} = await getI18n\(\);\n/m.test(src)) {
    src = src.replace(/^\s*const \{[^}]*\} = await getI18n\(\);\n/m, decl);
  } else {
    src = src.replace(/(^export default async function \w+\([^)]*\) \{\n)/m, `$1${decl}`);
  }
  fs.writeFileSync(file, src);
  totals.files++;
  for (const k of ["texts", "attrs", "flags"]) totals[k] += c[k];
  console.log(path.relative(WEB, file).padEnd(52), `texts ${c.texts}  attrs ${c.attrs}  flags ${c.flags}`);
}

// page metadata: drop hreflang alternates that pointed to /vi/... (the language is no longer in the URL)
for (const slug of fs.readdirSync(path.join(WEB, "app"))) {
  const f = path.join(WEB, "app", slug, "page.tsx");
  for (const file of [f, path.join(WEB, "app", "page.tsx")]) {
    if (!fs.existsSync(file)) continue;
    const s = fs.readFileSync(file, "utf8");
    const out = s.replace(/, languages: \{ "en-US": "[^"]*", vi: "[^"]*" \}/, "");
    if (out !== s) fs.writeFileSync(file, out);
  }
}
console.log("total:", totals);
