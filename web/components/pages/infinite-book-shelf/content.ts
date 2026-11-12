// All copy for /products/infinite-book-shelf (brief: saigame.studio/sg01-LandingPageBrief.md).
// Strings are English source text: the page passes each one through t(), so vi/ja only need dictionary
// entries in i18n/vi.json and i18n/ja.json, with no change here. **text** marks bold words (keep the markers when translating).
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
  { id: "itch-io", name: "Itch.io", platform: "Browser / PC", url: "https://saigame.itch.io/infinite-bookshelf" },
  { id: "steam", name: "Steam", platform: "PC", url: null },
  { id: "google-play", name: "Google Play", platform: "Android", url: null },
];

/** where the screenshots live once the owner adds them (public/images/products/infinite-book-shelf/) */
export const IMAGE_DIR = "/images/products/infinite-book-shelf";

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
  hero: { n: 1, file: "hero.webp", width: 1400, height: 788, ready: true, alt: "Wooden bookshelves packed with colored books, flowers blooming above each sorted compartment, and a magic wand cursor picking up a yellow book" },
  login: { n: 5, file: "login-google.webp", width: 752, height: 492, ready: true, alt: "The game's login panel with a single Sign in with Google button and the build version" },
  inspector: { n: 15, file: "sdk-inspector.webp", width: 648, height: 831, ready: true, alt: "The SaiServer prefab in the Unity Inspector: Sai Auth settings for persisted tokens, auto login and auto refresh, with the Google Backend Login, Gamer Progress and other module components below" },
  engineering: { n: 8, file: "engineering-800b-books.webp", width: 1918, height: 957, ready: true, alt: "A level in play: shelves packed with colored books framed by tropical flowers, the book counter in the corner, a magic wand cursor and the book tray with its chained slots" },
} satisfies Record<string, Shot>;

/** #14 social share card, built by tools/build-og-images.mjs */
export const OG_IMAGE = { n: 14, file: "og-image.png", width: 1200, height: 630, ready: true };

export const COPY = {
  metaTitle: "Infinite Book Shelf – Built on Sai Server",
  metaDescription:
    "A 3D puzzle for browser, PC and Android where every book, shelf and flower is saved to the cloud. Built with Unity and Sai Server. Out now on Unity Play and Itch.io, coming to Steam and Google Play.",

  hero: {
    eyebrow: "Tech showcase",
    title: "{game} powered by {server}.",
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
    kicker: "Gameplay",
    title: "Infinite books. Endless shelves.",
    tagline: "Never run out of books.",
    /** YouTube video id (https://youtu.be/0u0mkD7qBFY) */
    videoId: "0u0mkD7qBFY",
    videoTitle: "Infinite Book Shelf gameplay video",
  },

  server: {
    kicker: "Powered by Sai Server",
    title: "What the game asks of its backend",
    lead: "Infinite Book Shelf uses two Sai Server modules for **sign-in** and **cloud saves**. Here is what each one does in the game.",
    features: [
      { name: "SaiAuth", text: "Google sign-in through the backend, token sessions with auto refresh, and auto-login on return. A session guard sends the player back to login safely when the refresh token expires." },
      { name: "GamerProgress", tag: "custom game_data", text: "The whole level is stored in the cloud: the seed, the position of every moved book, the tray contents and the Fuzzy Fruit count." },
      { name: "Smart auto-save", text: "A cheap fingerprint of the level is checked on an interval. The game saves only when data changed, after it settles, with a maximum delay cap. It also force-saves on logout or exit, and saves to the device on mobile. Few requests, no lost progress." },
      { name: "Seed-based restore", text: "A saved level is rebuilt deterministically from its seed and only the differences are applied, so saves stay small." },
      { name: "Release-safe config", text: "Release builds take the GAME_ID from build config, strip dev credentials and allow only Google sign-in. Dev builds keep the debug login and debug info." },
      {
        name: "Web store on Sai Play",
        text: "The game's shop also opens on Sai Play, the player site shared by every game on Sai Server. Players sign in with the same account and buy in the browser; purchases arrive in the game's mailbox or inventory.",
        link: { href: "https://play.saigame.studio/games/01a192d6-94e1-7715-9ae7-1703a46851d0/shops/01a1973a-776b-7da1-bbb0-253a0ad0f427", label: "Open the shop on Sai Play" },
      },
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
    alsoTitle: "Also available in the SDK",
    alsoLead: "Not used by this game. One drop-in prefab, modular and event-driven.",
    also: ["Mailbox", "Inventory / Items", "Crafting", "Gacha", "Shop", "Quests", "Leaderboards", "Journey analytics", "Battle sessions", "Lua scripting"],
  },

  engineering: {
    kicker: "Engineering highlights",
    title: "Measured in the final build",
    imageCaption: "Tested with 800 billion books.",
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
      { title: "Startup work budget", text: "Loading is spread across frames, so the game never freezes while a level loads, on any platform." },
      { title: "Per-platform rendering", text: "Desktop and mobile feature profiles: a mobile render pipeline asset, BC7 textures on desktop and ASTC on mobile." },
      { title: "Pooling everywhere", text: "Books, shelves, flowers and effects come from one scene-authored pool." },
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
