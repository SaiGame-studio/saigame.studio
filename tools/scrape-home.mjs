// Mirror a saigame.studio page (HTML + CSS + JS + images + fonts) into ./_mirror
// Usage: node tools/scrape-home.mjs [path]   (default "/")
import fs from "node:fs/promises";
import path from "node:path";

const ORIGIN = "https://saigame.studio";
const OUT = path.resolve("_mirror");
const pagePath = process.argv[2] || "/";
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const done = new Map();
const failed = [];

async function get(url, asText) {
  for (let i = 0; i < 8; i++) {
    const r = await fetch(url, { headers: { "User-Agent": "Mozilla/5.0 (owner mirror)" } });
    if (r.status === 429) { await sleep(8000 + i * 4000); continue; }
    if (!r.ok) throw new Error(r.status + " " + url);
    return asText ? await r.text() : Buffer.from(await r.arrayBuffer());
  }
  throw new Error("429 giving up " + url);
}

function localPath(u) {
  const url = new URL(u);
  let p = decodeURIComponent(url.pathname);
  if (url.host !== "saigame.studio") p = "/_ext/" + url.host + p;
  if (p.endsWith("/")) p += "index";
  if (url.search && !path.extname(p)) p += "_" + url.search.replace(/[^a-z0-9]/gi, "") + ".css";
  return p;
}

async function save(u, kind) {
  u = u.replace(/&amp;/g, "&").replace(/^\/\//, "https://");
  if (u.startsWith("data:")) return null;
  let abs;
  try { abs = new URL(u, ORIGIN).href; } catch { return null; }
  if (done.has(abs)) return done.get(abs);
  const rel = localPath(abs);
  done.set(abs, rel);
  try {
    await sleep(900);
    let body = await get(abs, kind === "css");
    if (kind === "css") body = await processCss(body, abs);
    const file = path.join(OUT, "public", rel);
    await fs.mkdir(path.dirname(file), { recursive: true });
    await fs.writeFile(file, body);
    console.log("ok", kind, rel);
  } catch (e) { failed.push(String(e.message || e)); console.log("FAIL", abs, e.message); }
  return rel;
}

async function processCss(css, base) {
  const urls = [...css.matchAll(/url\(\s*['"]?([^'")]+)['"]?\s*\)/g)].map((m) => m[1]);
  for (const u of new Set(urls)) {
    if (u.startsWith("data:") || u.startsWith("#")) continue;
    let abs; try { abs = new URL(u, base).href; } catch { continue; }
    const rel = await save(abs, /\.css(\?|$)/.test(abs) ? "css" : "asset");
    if (rel) css = css.split(u).join(rel);
  }
  for (const m of css.matchAll(/@import\s+['"]([^'"]+)['"]/g)) {
    const rel = await save(new URL(m[1], base).href, "css");
    if (rel) css = css.split(m[1]).join(rel);
  }
  return css;
}

const html = await get(ORIGIN + pagePath, true);
await fs.mkdir(OUT, { recursive: true });
const slug = pagePath === "/" ? "home" : pagePath.replace(/\//g, "_");
await fs.writeFile(path.join(OUT, slug + ".orig.html"), html);

let out = html;
const replace = (from, to) => { if (to) out = out.split(from).join(to); };

for (const m of html.matchAll(/<link[^>]+rel=['"]stylesheet['"][^>]*>/g)) {
  const href = (m[0].match(/href=['"]([^'"]+)['"]/) || [])[1];
  if (href) replace(href, await save(href, "css"));
}
for (const m of html.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/g)) {
  replace(m[1], await processCss(m[1], ORIGIN + pagePath));
}
for (const m of html.matchAll(/<script[^>]+src=['"]([^'"]+)['"]/g)) {
  if (/saigame\.studio|^\/(?!\/)/.test(m[1])) replace(m[1], await save(m[1], "js"));
}
const imgUrls = new Set();
for (const m of html.matchAll(/(?:src|data-src|data-lazy-src|poster|href)=['"]([^'"]+\.(?:png|jpe?g|gif|webp|svg|avif|ico|mp4|webm)(?:\?[^'"]*)?)['"]/gi)) imgUrls.add(m[1]);
for (const m of html.matchAll(/srcset=['"]([^'"]+)['"]/gi)) m[1].split(",").forEach((s) => imgUrls.add(s.trim().split(/\s+/)[0]));
for (const m of html.matchAll(/url\(\s*(?:&quot;|['"])?([^'")&]+)(?:&quot;|['"])?\s*\)/g)) imgUrls.add(m[1]);
for (const u of imgUrls) if (u && !u.startsWith("data:")) replace(u, await save(u, "asset"));

await fs.writeFile(path.join(OUT, slug + ".local.html"), out);
await fs.writeFile(path.join(OUT, slug + ".manifest.json"), JSON.stringify({ files: Object.fromEntries(done), failed }, null, 2));
console.log("DONE files:", done.size, "failed:", failed.length);
