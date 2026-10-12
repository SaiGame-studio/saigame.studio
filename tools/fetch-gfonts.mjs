// Download the Google Fonts CSS used by the homepage + all woff2 files, self-hosted under _mirror/public/fonts
import fs from "node:fs/promises";
import path from "node:path";

const html = await fs.readFile("_mirror/home.orig.html", "utf8");
const href = (html.match(/href=['"](https:\/\/fonts\.googleapis\.com\/css[^'"]+)['"]/) || [])[1].replace(/&amp;/g, "&").replace(/&#038;/g, "&");
console.log("css:", href);
const UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36";
let css = await (await fetch(href, { headers: { "User-Agent": UA } })).text();
const outDir = path.resolve("_mirror/public/fonts");
await fs.mkdir(outDir, { recursive: true });
const urls = [...new Set([...css.matchAll(/url\((https:[^)]+)\)/g)].map((m) => m[1]))];
for (const u of urls) {
  const name = u.split("/").slice(-2).join("-");
  const buf = Buffer.from(await (await fetch(u)).arrayBuffer());
  await fs.writeFile(path.join(outDir, name), buf);
  css = css.split(u).join("/fonts/" + name);
}
await fs.writeFile(path.join(outDir, "google-fonts.css"), css);
console.log("fonts:", urls.length, "families:", [...new Set([...css.matchAll(/font-family: '([^']+)'/g)].map((m) => m[1]))].join(", "));
