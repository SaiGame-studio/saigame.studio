// Builds the 1200x630 social share cards (Open Graph / Twitter) of the Sai Server and Sai Play web apps.
// usage (from saigame.studio/): node tools/build-app-og-images.mjs
// Same brand as tools/build-og-images.mjs (landing pages), with the app's "S" logo and its own domain.
// Outputs go to the apps' public folders, where their root layouts point; re-run after changing a card below.
import { createRequire } from "node:module";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const REPO = path.resolve(ROOT, "..");
const PUBLIC = path.join(ROOT, "web/public");
const sharp = createRequire(path.join(ROOT, "web/package.json"))("sharp");

const W = 1200;
const H = 630;
const FONT = "Segoe UI, Mulish, Helvetica, Arial, sans-serif";

/** title: one entry per line, each a list of [text, colour]; sub: one entry per line */
const CARDS = [
  {
    out: path.join(REPO, "server.saigame.studio/public/og-image.png"),
    logo: path.join(REPO, "server.saigame.studio/public/logo.png"),
    name: "Sai Server",
    domain: "server.saigame.studio",
    tint: "#0b1120",
    glow: "#2563eb",
    kicker: "GAME BACKEND PLATFORM",
    title: [[["Code games,", "#ffffff"]], [["not infra.", "#5f9bff"]]],
    sub: ["Accounts, cloud save, inventory, economy,", "quests, leaderboards and Lua on the server."],
    art: screenshotArt("images/products/sai-server/web-admin.webp"),
  },
  {
    out: path.join(REPO, "play.saigame.studio/public/og-image.png"),
    logo: path.join(REPO, "play.saigame.studio/public/logo.png"),
    name: "Sai Play",
    domain: "play.saigame.studio",
    tint: "#0e0d1d",
    glow: "#3b5bdb",
    kicker: "PLAYER SITE",
    title: [[["One account", "#ffffff"]], [["for every game.", "#9cc0ff"]]],
    sub: ["Your games, progress, items, game shops", "and one sGem balance."],
    art: gemArt,
  },
];

const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const svg = (body) => Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">${body}</svg>`);

/** Dark field with a soft glow behind the art and a faint dot grid. */
function background(card) {
  return svg(`
  <defs>
    <radialGradient id="glow" cx="0.78" cy="0.5" r="0.6">
      <stop offset="0" stop-color="${card.glow}" stop-opacity="0.55"/>
      <stop offset="1" stop-color="${card.tint}" stop-opacity="0"/>
    </radialGradient>
    <pattern id="dots" width="28" height="28" patternUnits="userSpaceOnUse">
      <circle cx="2" cy="2" r="1.4" fill="#ffffff" fill-opacity="0.06"/>
    </pattern>
  </defs>
  <rect width="${W}" height="${H}" fill="${card.tint}"/>
  <rect width="${W}" height="${H}" fill="url(#dots)"/>
  <rect width="${W}" height="${H}" fill="url(#glow)"/>`);
}

/** Left column: product name, kicker, two-line title, subtitle and a domain chip. */
function textLayer(card) {
  const title = card.title
    .map((parts, i) => `<text x="64" y="${290 + i * 82}" font-size="74" font-weight="800" xml:space="preserve">${parts.map(([t, c]) => `<tspan fill="${c}">${esc(t)}</tspan>`).join("")}</text>`)
    .join("");
  const sub = card.sub.map((line, i) => `<text x="64" y="${450 + i * 38}" font-size="27" fill="#c3c8d8">${esc(line)}</text>`).join("");
  const chipWidth = 30 + card.domain.length * 12.6;
  return svg(`
  <g font-family="${FONT}">
    <text x="136" y="103" font-size="38" font-weight="800" fill="#ffffff">${esc(card.name)}</text>
    <text x="64" y="200" font-size="22" font-weight="800" letter-spacing="3" fill="#f0b45e">${esc(card.kicker)}</text>
    ${title}
    ${sub}
    <rect x="64" y="540" width="${chipWidth}" height="44" rx="22" fill="#ffffff" fill-opacity="0.07" stroke="#ffffff" stroke-opacity="0.16"/>
    <text x="${64 + chipWidth / 2}" y="569" font-size="21" font-weight="700" text-anchor="middle" fill="#dfe3ee">${esc(card.domain)}</text>
  </g>`);
}

/** A real screenshot in a browser-style frame, bleeding off the right edge. */
function screenshotArt(file) {
  return async () => {
    const frameW = 760;
    const barH = 38;
    const shot = await sharp(path.join(PUBLIC, file)).resize({ width: frameW }).toBuffer();
    const shotH = (await sharp(shot).metadata()).height;
    const frameH = barH + shotH;
    const radius = 16;
    const chrome = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${frameW}" height="${frameH}">
      <rect width="${frameW}" height="${frameH}" fill="#0a0a0a"/>
      <rect width="${frameW}" height="${barH}" fill="#1b1f2a"/>
      <circle cx="22" cy="19" r="6" fill="#ff5f57"/><circle cx="42" cy="19" r="6" fill="#febc2e"/><circle cx="62" cy="19" r="6" fill="#28c840"/>
    </svg>`);
    const mask = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${frameW}" height="${frameH}"><rect width="${frameW}" height="${frameH}" rx="${radius}" fill="#fff"/></svg>`);
    const border = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${frameW}" height="${frameH}"><rect x="0.75" y="0.75" width="${frameW - 1.5}" height="${frameH - 1.5}" rx="${radius}" fill="none" stroke="#ffffff" stroke-opacity="0.18" stroke-width="1.5"/></svg>`);
    const frame = await sharp(chrome)
      .composite([{ input: shot, top: barH, left: 0 }, { input: mask, blend: "dest-in" }, { input: border }])
      .png()
      .toBuffer();
    const left = 610;
    const top = Math.round((H - frameH) / 2) + 6;
    const shadow = svg(`<defs><filter id="s" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="22"/></filter></defs>
      <rect x="${left + 10}" y="${top + 26}" width="${frameW}" height="${frameH}" rx="${radius}" fill="#000000" fill-opacity="0.65" filter="url(#s)"/>`);
    return [{ input: shadow }, { input: frame, left, top }];
  };
}

/** Sai Play has no screenshot: a large glowing sGem with a few smaller ones around it. */
async function gemArt() {
  const gem = (size) => sharp(path.join(PUBLIC, "images/products/sgem.svg"), { density: 600 }).resize(size, size).png().toBuffer();
  const faded = async (size, opacity) =>
    sharp(await gem(size)).composite([{ input: Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}"><rect width="${size}" height="${size}" fill="#fff" fill-opacity="${opacity}"/></svg>`), blend: "dest-in" }]).png().toBuffer();
  const ring = svg(`<g fill="none" stroke="#9cc0ff" stroke-opacity="0.16" stroke-width="1.5">
      <ellipse cx="925" cy="318" rx="230" ry="230"/><ellipse cx="925" cy="318" rx="170" ry="170" stroke-opacity="0.1"/></g>`);
  return [
    { input: ring },
    { input: await gem(300), left: 775, top: 163 },
    { input: await faded(78, 0.75), left: 700, top: 120 },
    { input: await faded(56, 0.55), left: 1080, top: 150 },
    { input: await faded(64, 0.6), left: 1060, top: 440 },
    { input: await faded(42, 0.45), left: 720, top: 470 },
  ];
}

for (const card of CARDS) {
  // Pixel-art logo: nearest-neighbour keeps its edges crisp.
  const logo = await sharp(card.logo).resize({ height: 64, kernel: "nearest" }).png().toBuffer();
  await sharp(background(card))
    .composite([...(await card.art()), { input: textLayer(card) }, { input: logo, left: 60, top: 54 }])
    .png({ compressionLevel: 9 })
    .toFile(card.out);
  console.log("wrote", path.relative(REPO, card.out));
}
