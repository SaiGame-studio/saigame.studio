// All copy for /products/sai-server. Facts come from the Sai Server studio site (server.saigame.studio/why-sai-server,
// lib/i18n/translations/en.json "whySaiServer") and saigame.studio/PRODUCT.md: engine-neutral wording ("the SDK"),
// engines only in the SDK list, no invented pricing, customers or performance numbers.
// Strings are English source text passed through t(); vi/ja live in i18n/vi.json, i18n/vi.extra.json and i18n/ja.json.
// **text** marks bold words (keep the markers when translating).
import type { Shot } from "../product-landing/shared";

export const IMAGE_DIR = "/images/products/sai-server";

export const SHOTS = {
  admin: { file: "web-admin.webp", width: 1529, height: 747, alt: "The Sai Server web admin: a game's Item Catalogue with tabs for items, presets, containers, gacha, generators, shops, equipment, crafting and gift codes" },
  sdk: { file: "sdk-integration.webp", width: 1026, height: 959, alt: "The SaiServer component in the Unity Inspector with the server endpoint and game ID, and the Console showing the player signed in and their data loaded" },
  lua: { file: "lua-script-manager.webp", width: 784, height: 851, alt: "The Lua Script Manager in the Unity Inspector: buttons to create battle scripts from templates and the list of loaded .lua files, each with an Upload New button" },
} satisfies Record<string, Shot>;

/** the Infinite Book Shelf showcase, a game built on Sai Server */
export const SHOWCASE = {
  href: "/products/infinite-book-shelf/",
  image: { file: "/images/products/infinite-book-shelf/hero.webp", width: 1400, height: 788 },
};

export const COPY = {
  metaTitle: "Sai Server – The backend for your game",
  metaDescription:
    "Accounts, cloud save, inventory, in-game economy, quests, leaderboards, analytics and server-side Lua logic: prebuilt, managed from one web admin and connected to your game through the SDK.",

  hero: {
    eyebrow: "Game backend platform",
    title: "Code games, not infra. {server} runs the backend.",
    lead: "Accounts, cloud save, inventory, in-game economy, quests, leaderboards, analytics and server-side Lua logic: prebuilt, managed from one web admin, and connected to your game through the SDK.",
    start: "Start with Sai Server",
    tutorial: "Read the get-started tutorial",
    adminCaption: "Every feature lives in one web admin and can be changed without rebuilding the game.",
  },

  facts: {
    title: "At a glance",
    items: ["Web admin", "REST API", "Server-side Lua", "SDK for Unity"],
  },

  steps: {
    kicker: "Integration",
    title: "Three steps to connect your game",
    items: [
      { title: "Create a studio and a game", text: "In the web admin, create a studio, a team and a game, then copy the Game ID. Invite teammates by User ID." },
      { title: "Add the SDK to your game", text: "Import the SDK and connect it with the Game ID. In Unity it is one SaiServer prefab, with auth, items, quests, battle and more already wired inside." },
      { title: "Configure and test", text: "Set up content in the web admin and test it right away in your game, with no backend of your own to host." },
    ],
    sdkCaption: "The SaiServer component in Unity: set the endpoint and Game ID, press Play, and the Console shows the player signed in and their data loaded.",
  },

  features: {
    kicker: "Features",
    title: "One platform for the whole LiveOps lifecycle",
    lead: "Everything is built on one idea, the **Item Definition**. Weapons, currencies, characters, chests and gacha keys are all items, so every system fits together from day one.",
    groups: [
      {
        title: "Players & data",
        items: [
          { name: "Accounts & sign-in", text: "Register, log in, refresh tokens and Google login. One account across every game." },
          { name: "Cross-platform cloud save", text: "Progress lives on the server, so players continue on another device. Free-form JSON data with delta updates." },
          { name: "Mailbox", text: "Send gifts, compensation and event rewards with item attachments. Claiming stays safe even when the inventory is full." },
          { name: "Two-factor sign-in", text: "Google Authenticator with one-time recovery codes protects studio and player accounts." },
        ],
      },
      {
        title: "Economy & items",
        items: [
          { name: "Grid inventory & containers", text: "Main inventory, vaults and custom chests up to 1,000 cells. Move, split, merge and swap, every action validated by the server." },
          { name: "Gacha / lootbox", text: "Weighted pools, min/max quantities and key requirements. Every open is an atomic transaction." },
          { name: "Shops", text: "Permanent or event shops, any item as currency, per-player or global purchase limits, and restocks." },
          { name: "Crafting & generators", text: "Recipes with consumed or kept materials and bonus rates, plus resources produced over time for idle mechanics." },
        ],
      },
      {
        title: "Retention & insight",
        items: [
          { name: "Quests", text: "One-time and daily quests, branching quest chains on a story graph, and daily pools by weight or weekly schedule." },
          { name: "Seasonal leaderboards", text: "Sum, max, min or latest scoring, automatic daily, weekly or monthly resets, and archived seasons." },
          { name: "Analytics & journeys", text: "Send events from your game and map them into player journeys to see funnels, drop-off points and economy flow." },
          { name: "Equipment, squads & decks", text: "Equipment slots with item restrictions, presets for squads, parties and decks, and tags to group items." },
        ],
      },
    ],
  },

  lua: {
    kicker: "Server-side Lua scripting",
    title: "Your game's own logic, running on the server",
    lead: "When your game needs something that is not built in, such as a combat system, special rewards or a damage formula, your team writes it in Lua. Scripts work directly with the player's items, gacha, presets, equipment and battle sessions.",
    points: [
      "A template library, from Hello World to a complete battle.",
      "Runs in a sandbox limited to 500 ms per execution, keeping the server safe.",
      "Called from your game with one component; the script name is the trigger keyword.",
    ],
    caption: "The Lua Script Manager in Unity: create a script from a template, then upload each .lua file to Sai Server with one click.",
  },

  trust: {
    kicker: "Reliability",
    title: "Built for a serious in-game economy",
    items: [
      { title: "The server decides", text: "Full bags, occupied cells, missing materials, expired shops: the server rejects the request with a clear error. The client never edits data on its own." },
      { title: "No double transactions", text: "Purchases, crafting and gacha opens use idempotency keys. Resend the same request and the server returns the original result instead of running it again." },
      { title: "Transparent odds", text: "Probability is weight divided by total weight, applied the same way to gacha, quest pools and enemy pools." },
      { title: "Run it from the web admin", text: "Your LiveOps team views player profiles, sends gifts, opens seasons and edits shops without rebuilding the game." },
    ],
  },

  sdks: {
    title: "Available SDKs",
    lead: "More game engines are planned.",
  },

  play: {
    kicker: "For your players",
    title: "Every game on Sai Server gets a home on Sai Play",
    text: "Sai Play is the player site shared by every game on Sai Server. Players use the same Sai account, see their games, progress and items, buy from the shops you choose to show there, and keep one sGem balance.",
    link: "Discover Sai Play",
  },

  showcase: {
    kicker: "Built on Sai Server",
    title: "Infinite Book Shelf",
    text: "A 3D puzzle for browser, PC and Android. Sign-in and cloud saves run on Sai Server, so every book, shelf and flower is kept across devices.",
    link: "See the tech showcase",
    alt: "Wooden bookshelves packed with colored books, flowers blooming above each sorted compartment, and a magic wand cursor picking up a yellow book",
  },

  close: {
    title: "Let your team get back to making games.",
    lead: "Talk with the Sai Server team about what your game needs and ask about the 6-month sponsored infrastructure program.",
    start: "Create your studio on Sai Server",
    discord: "Talk to us on Discord",
  },
};
