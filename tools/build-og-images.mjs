// Builds the 1200x630 social share cards (Open Graph / Twitter) of the product landing pages.
// usage (from saigame.studio/): node tools/build-og-images.mjs
// Each card: the page's own key art (cover-cropped), a dark gradient, the SaiGame logo, a kicker, title and subtitle.
// Output paths are the ones the pages' metadata point to; re-run after changing a card below.
import { createRequire } from "node:module";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const PUBLIC = path.join(ROOT, "web/public");
const sharp = createRequire(path.join(ROOT, "web/package.json"))("sharp");

const W = 1200;
const H = 630;
const LOGO = "wp-content/uploads/2025/12/LogoSaiGame_shadown.png";

/** title parts: [text, colour]; one entry per line. shadeEnd = how dark the gradient stays on the right (art side) */
const CARDS = [
  {
    out: "images/products/og-products.png",
    art: { file: "images/products/cozy-sai-server.jpg", position: "centre" },
    tint: "#1d1e27",
    kicker: "SAIGAME PRODUCTS",
    lines: [
      [["Build on ", "#ffffff"], ["Sai Server.", "#5f9bff"]],
      [["Your players", "#f5c451"], [" land on ", "#ffffff"], ["Sai Play.", "#9cc0ff"]],
    ],
    sub: "A game backend for studios and one player account for every game.",
  },
  {
    out: "images/products/sai-server/og-image.png",
    art: { file: "images/products/sai-server/web-admin.webp", position: "left" },
    tint: "#0d1320",
    kicker: "GAME BACKEND PLATFORM",
    lines: [[["Sai Server", "#5f9bff"]], [["Code games, not infra.", "#ffffff"]]],
    sub: "Accounts, cloud save, inventory, economy, quests, leaderboards and Lua on the server.",
  },
  {
    out: "images/products/sai-play/og-image.png",
    art: null,
    tint: "#100f1f",
    shadeEnd: 0,
    kicker: "PLAYER SITE",
    lines: [[["Sai Play", "#9cc0ff"]], [["One account for every game.", "#ffffff"]]],
    sub: "Your games, progress, items, game shops and one sGem balance.",
  },
  {
    out: "images/products/infinite-book-shelf/og-image.png",
    art: { file: "images/products/infinite-book-shelf/hero.webp", position: "centre" },
    tint: "#121a12",
    shadeEnd: 0.1,
    kicker: "TECH SHOWCASE",
    lines: [[["Infinite Book Shelf", "#84b842"]], [["powered by ", "#ffffff"], ["Sai Server.", "#5f9bff"]]],
    sub: "A 3D puzzle for browser, PC and Android with every level saved to the cloud.",
  },
];

const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

function overlaySvg(card) {
  const font = "Segoe UI, Mulish, Helvetica, Arial, sans-serif";
  const title = card.lines
    .map((parts, i) => `<text x="64" y="${330 + i * 78}" font-size="66" font-weight="800" xml:space="preserve">${parts.map(([t, c]) => `<tspan fill="${c}">${esc(t)}</tspan>`).join("")}</text>`)
    .join("");
  return Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  <defs>
    <linearGradient id="shade" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="${card.tint}" stop-opacity="0.97"/>
      <stop offset="0.5" stop-color="${card.tint}" stop-opacity="0.82"/>
      <stop offset="1" stop-color="${card.tint}" stop-opacity="${card.shadeEnd ?? 0.3}"/>
    </linearGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#shade)"/>
  <g font-family="${font}">
    <text x="64" y="232" font-size="24" font-weight="800" letter-spacing="3" fill="#f0b45e">${esc(card.kicker)}</text>
    ${title}
    <text x="64" y="${330 + card.lines.length * 78 + 12}" font-size="28" fill="#c9ccd8">${esc(card.sub)}</text>
    <text x="${W - 64}" y="${H - 48}" font-size="22" font-weight="700" text-anchor="end" fill="#8d93a8">saigame.studio</text>
  </g>
</svg>`);
}

/** Sai Play has no screenshot yet: an indigo field with a large glowing sGem on the right */
async function playArt() {
  const gem = await sharp(path.join(PUBLIC, "images/products/sgem.svg"), { density: 600 }).resize(340, 340).png().toBuffer();
  const glow = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
    <defs><radialGradient id="g" cx="0.83" cy="0.5" r="0.45"><stop offset="0" stop-color="#3b5bdb" stop-opacity="0.75"/><stop offset="1" stop-color="#100f1f" stop-opacity="0"/></radialGradient></defs>
    <rect width="${W}" height="${H}" fill="#100f1f"/><rect width="${W}" height="${H}" fill="url(#g)"/></svg>`);
  return sharp(glow).composite([{ input: gem, left: 830, top: 145 }]).png().toBuffer();
}

for (const card of CARDS) {
  const base = card.art
    ? await sharp(path.join(PUBLIC, card.art.file)).resize(W, H, { fit: "cover", position: card.art.position }).toBuffer()
    : await playArt();
  const shade = overlaySvg(card);
  const logo = await sharp(path.join(PUBLIC, LOGO)).resize({ height: 110 }).png().toBuffer();
  const out = path.join(PUBLIC, card.out);
  fs.mkdirSync(path.dirname(out), { recursive: true });
  await sharp(base)
    .composite([{ input: shade }, { input: logo, left: 56, top: 48 }])
    .png({ compressionLevel: 9, palette: false })
    .toFile(out);
  console.log("wrote", card.out);
}
