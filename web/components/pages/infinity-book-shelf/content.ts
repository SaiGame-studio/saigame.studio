// All copy for /products/infinity-book-shelf (brief: saigame.studio/sg01-LandingPageBrief.md).
// Strings are English source text: the page passes each one through t(), so vi/ja only need dictionary
// entries in i18n/vi.json and i18n/ja.json, with no change here.
// Facts and numbers follow section 4 of the brief, except platforms: the game ships to the stores in STORES.
// Do not inflate the numbers.

export const GAME_NAME = "Infinite Book Shelf";

export type Store = {
  id: string;
  /** store name, shown as is (not translated) */
  name: string;
  /** where the build runs, translated */
  platform: string;
  /** the game's page on this store; null shows "Coming soon" until the link is added */
  url: string | null;
};

/** where the game is published; paste each store link into `url` when the page goes live */
export const STORES: Store[] = [
  { id: "unity-play", name: "Unity Play", platform: "Browser", url: "https://play.unity.com/en/games/b66579aa-f8f3-47af-8671-1fc194efaaeb/infinite-bookshelf" },
  { id: "itch-io", name: "Itch.io", platform: "Browser / PC", url: null },
  { id: "steam", name: "Steam", platform: "PC", url: null },
  { id: "google-play", name: "Google Play", platform: "Android", url: null },
];

/** where the screenshots live once the owner adds them (public/images/products/infinity-book-shelf/) */
export const IMAGE_DIR = "/images/products/infinity-book-shelf";

export type Shot = {
  /** number from the brief's image table (section 5): the owner's file list refers to it */
  n: number;
  file: string;
  width: number;
  height: number;
  alt: string;
  /** set to true once the file is in IMAGE_DIR; until then a numbered placeholder is shown */
  ready: boolean;
};

export const SHOTS = {
  hero: { n: 1, file: "hero.webp", width: 1920, height: 1080, ready: false, alt: "Tropical bookshelves under warm light with flowers in bloom, one book being dragged with leaf particles around it" },
  drag: { n: 2, file: "gameplay-drag.webp", width: 1200, height: 800, ready: false, alt: "A book dragged over a shelf compartment, with leaf particles gathering and the slot highlighted" },
  bloom: { n: 3, file: "gameplay-bloom.webp", width: 1200, height: 800, ready: false, alt: "A full compartment with all of its flowers in bloom" },
  tray: { n: 4, file: "gameplay-tray.webp", width: 1200, height: 800, ready: false, alt: "The book tray with open slots and locked, chained slots" },
  login: { n: 5, file: "login-google.webp", width: 1200, height: 800, ready: false, alt: "The login screen with Google sign-in and the language picker" },
  stress: { n: 8, file: "stress-4000-books.webp", width: 1600, height: 900, ready: false, alt: "The stress-test scene with 4,000 instanced books on screen" },
  streaming: { n: 9, file: "streaming-overview.webp", width: 1600, height: 900, ready: false, alt: "Zoomed-out view over the level grid, showing the shelf clusters" },
  procedural: { n: 10, file: "procedural-shelves.webp", width: 1600, height: 900, ready: false, alt: "Four different generated shelf layouts side by side" },
  leaves: { n: 11, file: "polish-leaves.webm", width: 800, height: 600, ready: false, alt: "Leaves burst from a shelf when a book is dropped into place" },
  bird: { n: 12, file: "easter-egg-bird.webp", width: 800, height: 600, ready: false, alt: "The book bird flying across the screen" },
} satisfies Record<string, Shot>;

/** #14 social share card; added to the page metadata once it exists */
export const OG_IMAGE = { n: 14, file: "og-image.png", width: 1200, height: 630, ready: false };

export const COPY = {
  metaTitle: "Infinite Book Shelf – Built on Sai Server",
  metaDescription:
    "A 3D puzzle for browser, PC and Android where every book, shelf and flower is saved to the cloud. Built with Unity and Sai Server. Coming to Unity Play, Itch.io, Steam and Google Play.",

  hero: {
    eyebrow: "Tech showcase",
    title: "{game}, powered by {server}.",
    lead: "A 3D puzzle for browser, PC and Android where every book, shelf and flower is saved to the cloud, so no progress is lost.",
    play: "Where to play",
    build: "Build with Sai Server",
  },

  stores: {
    kicker: "Where to play",
    title: "One game, four stores",
    lead: "The same game and the same cloud saves, in the browser, on PC and on Android.",
    open: "Play on {store}",
    soon: "Coming soon",
  },

  game: {
    kicker: "The game in 15 seconds",
    title: "Sort the books. Grow the garden.",
    cards: [
      { title: "Sort by color", text: "Drag books back to the shelf compartment of their color." },
      { title: "Make it bloom", text: "Each correct book makes a flower bloom: hibiscus, frangipani, lotus, orchid and more." },
      { title: "Clear huge levels", text: "Use the tray, the empty compartment and Fuzzy Fruit, an auto-sort helper, to clear huge, randomly generated levels. Play in Relax Mode or Hardcore Mode." },
    ],
  },

  server: {
    kicker: "Powered by Sai Server",
    title: "What the game asks of its backend",
    lead: "Infinite Book Shelf uses two Sai Server modules for sign-in and cloud saves. Here is what each one does in the game.",
    features: [
      { name: "SaiAuth", text: "Google sign-in through the backend, token sessions with auto refresh, and auto-login on return. A session guard sends the player back to login safely when the refresh token expires." },
      { name: "GamerProgress", tag: "custom game_data", text: "The whole level is stored in the cloud: the seed, the position of every moved book, the tray contents and the Fuzzy Fruit count." },
      { name: "Smart auto-save", text: "A cheap fingerprint of the level is checked on an interval. The game saves only when data changed, after it settles, with a maximum delay cap. It also force-saves on logout or exit, and saves to the device on mobile. Few requests, no lost progress." },
      { name: "Seed-based restore", text: "A saved level is rebuilt deterministically from its seed and only the differences are applied, so saves stay small." },
      { name: "Release-safe config", text: "Release builds take the GAME_ID from build config, strip dev credentials and allow only Google sign-in. Dev builds keep the debug login and debug info." },
    ],
    archTitle: "Architecture",
    arch: {
      client: "Unity client (WebGL · PC · Android)",
      prefab: "SaiServer prefab",
      modules: "SaiAuth · GamerProgress",
      api: "REST API",
      backend: "Sai backend",
      stores: "Stores",
      ships: "ship the WebGL, PC and Android builds",
    },
    archAlt: "Architecture: the game client (WebGL, PC or Android) talks to the SaiServer prefab (SaiAuth, GamerProgress), which calls the Sai backend over a REST API. Unity Play, Itch.io, Steam and Google Play ship the builds.",
    saveTitle: "How auto-save decides",
    save: {
      check: "fingerprint check",
      change: "change",
      quiet: "quiet period",
      save: "save",
      cap: "max delay cap",
    },
    saveAlt: "Auto-save timeline: fingerprint checks run on an interval; after a change, the game waits for a quiet period and then saves. A maximum delay cap forces a save if changes keep coming.",
    codeTitle: "Drop in the prefab",
    code: "// Drop the SaiServer prefab in the scene, set Game ID, then:\nSaiServer.Instance.SaiAuth.OnLoginSuccess += LoadLevelFromCloud;",
    alsoTitle: "Also available in the SDK",
    alsoLead: "Not used by this game. One drop-in prefab, modular and event-driven.",
    also: ["Mailbox", "Inventory / Items", "Crafting", "Gacha", "Shop", "Quests", "Leaderboards", "Journey analytics", "Battle sessions", "Lua scripting"],
  },

  engineering: {
    kicker: "Engineering highlights",
    title: "Measured, not promised",
    note: "Editor measurements: Unity Editor on Windows, November 3, 2026. These are not device FPS numbers.",
    metrics: [
      { from: "4,177", to: "55", unit: "draw calls", text: "with 4,000 books on screen: GPU instancing and one shared 4K cover atlas." },
      { from: "35.1 MB", to: "22.4 MB", unit: "texture memory", text: "about 36% less." },
      { from: "~245 ms", to: "~19 ms", unit: "book picking batch", text: "1,514 rays, zero mismatches." },
      { from: null, to: "588 / 28", unit: "books / shelves", text: "in a normal view, with 100% pool reuse: 84/84 objects, no runtime GameObject allocation." },
    ],
    points: [
      { title: "Endless-feeling levels", text: "A grid of shelves is split into clusters. Shelves are generated only when the camera needs them and streamed in and out as you pan." },
      { title: "Procedural shelves", text: "Each shelf is built from rules: rows of 10 books, compartments of 2–7, stepped boards and one empty compartment. The rules are validated over 20,000 seeds." },
      { title: "Cross-shelf shuffle", text: "Books swap between shelves inside a cluster, fully reproducible from the seed." },
      { title: "Startup work budget", text: "Loading is spread across frames, so the browser never freezes." },
      { title: "Per-platform rendering", text: "Desktop and mobile feature profiles: a mobile render pipeline asset, BC7 textures on desktop and ASTC on mobile." },
      { title: "Pooling everywhere", text: "Books, shelves, flowers and effects come from one scene-authored pool." },
    ],
  },

  polish: {
    kicker: "Polish details",
    title: "The small things",
    items: [
      { title: "Leaf particles", text: "Leaves gather when you drag over a slot and burst when you drop." },
      { title: "Leaf transition", text: "A wave of leaves closes each finished level." },
      { title: "Magic wand cursor", text: "The cursor is a small magic wand." },
      { title: "Book bird", text: "Stay idle for a while and a book bird flies across the screen." },
      { title: "Three languages", text: "The UI is localized in English, Vietnamese and Japanese." },
    ],
  },

  facts: {
    title: "Built with",
    items: ["Unity 6 (6000.3)", "URP", "WebGL · PC · Android", "Google sign-in"],
  },

  close: {
    title: "Play it, then build your own.",
    play: "Get the game",
    build: "Start your game on Sai Server",
  },

  placeholder: "Image placeholder",
};
