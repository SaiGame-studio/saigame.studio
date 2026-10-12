// Self-host every Google Fonts stylesheet referenced by the mirrored pages (_mirror/*.orig.html).
// Output: _mirror/public/fonts/css_<md5(query)>.css + the woff2 files it references,
//         _mirror/public/fonts/map.json  { "<page>.orig.html": "/fonts/css_<hash>.css" }
import fs from "node:fs/promises";
import path from "node:path";
import crypto from "node:crypto";

const UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36";
const outDir = path.resolve("_mirror/public/fonts");
await fs.mkdir(outDir, { recursive: true });

const pageToHref = {};
for (const f of await fs.readdir("_mirror")) {
  if (!f.endsWith(".orig.html")) continue;
  const html = await fs.readFile(path.join("_mirror", f), "utf8");
  const m = html.match(/href=['"](https:\/\/fonts\.googleapis\.com\/css[^'"]+)['"]/);
  if (m) pageToHref[f] = m[1].replace(/&amp;/g, "&").replace(/&#038;/g, "&");
}

const done = {};
const map = {};
for (const [page, href] of Object.entries(pageToHref)) {
  const name = "css_" + crypto.createHash("md5").update(new URL(href).search).digest("hex").slice(0, 10) + ".css";
  map[page] = "/fonts/" + name;
  if (done[name]) continue;
  done[name] = true;
  let css = await (await fetch(href, { headers: { "User-Agent": UA } })).text();
  const urls = [...new Set([...css.matchAll(/url\((https:[^)]+)\)/g)].map((m) => m[1]))];
  for (const u of urls) {
    const file = u.split("/").slice(-2).join("-");
    try { await fs.access(path.join(outDir, file)); } catch {
      await fs.writeFile(path.join(outDir, file), Buffer.from(await (await fetch(u)).arrayBuffer()));
    }
    css = css.split(u).join("/fonts/" + file);
  }
  await fs.writeFile(path.join(outDir, name), css);
  console.log(name, "font files:", urls.length);
}
await fs.writeFile(path.join(outDir, "map.json"), JSON.stringify(map, null, 2));
console.log(map);
