# Landing Page Brief: Infinite Book Shelf (tech showcase)

> For the agent building the page. Read all of this before you start. Lines marked **[TODO]** must be confirmed with the owner. Do not make up a value for them.

## 1. Goal

Build a one-page landing site for **Infinite Book Shelf**. It is a 3D puzzle game where players sort books on tropical bookshelves, and it runs in the browser (Unity WebGL).

The page has two jobs, in this order:

1. **Tech showcase (main):** show developers and studios what can be built with **Sai Server** (the SaiGame backend + Unity SDK) and **Sai Play** (**[TODO]** confirm exactly what Sai Play is, e.g. the web game portal or player platform, and get its URL). The game is the proof.
2. **Game teaser (secondary):** make a gamer want to press Play.

Audience: indie Unity developers, small studios, technical decision makers. They are technical, skim fast, and trust numbers over adjectives.

## 2. Tone and style

- Calm, confident and concrete. Measured numbers, short sentences, no hype words ("revolutionary", "next-gen").
- Visuals: warm tropical garden (leaves, hibiscus, plywood shelves, stone walls) combined with clean technical panels (diagrams, code snippets, metric cards). Think "botanical journal meets engineering blog".
- Palette from the game's flower colors: green `#84B842`, hibiscus red `#EF3A38`, plus warm wood and deep leaf green. Use a dark mode with leaf-dark backgrounds.
- Languages: the game ships in English, Vietnamese and Japanese. Build the page in English first, with the structure ready for vi/ja.

## 3. Page structure

### 3.1 Hero
- Headline idea: "An infinite library, powered by Sai Server." (The name ties directly to the streamed, endless-feeling levels in 3.4. Use that link.)
- Sub: "A browser 3D puzzle where every book, shelf and flower is saved to the cloud, with no install and no lost progress."
- CTAs: **Play now on Sai Play** (primary, link **[TODO]**) and **Build with Sai Server** (secondary, link to https://admin.saigame.studio/tutorials).
- Image: `hero.webp` (see section 5).

### 3.2 The game in 15 seconds (short, for gamers)
Three cards:
- Drag books back to the shelf compartment of their color.
- Each correct book makes a flower bloom (hibiscus, frangipani, lotus, orchid...).
- Use the tray, the empty compartment and Fuzzy Fruit (an auto-sort helper) to clear huge, randomly generated levels. Relax Mode or Hardcore Mode.

### 3.3 Powered by Sai Server (core section)
Explain each feature the game actually uses:

| Feature | What the game does with it |
| --- | --- |
| **SaiAuth** | Google sign-in through the backend, token sessions with auto refresh, auto-login on return. A session guard sends the player back to login safely when the refresh token expires. |
| **GamerProgress (custom game_data)** | The whole level is stored in the cloud: seed, the position of every moved book, tray contents, Fuzzy Fruit count. |
| **Smart auto-save** | A cheap fingerprint of the level is checked on an interval. The game saves only when data changed, after it settles (debounce), with a maximum delay cap. Also force-save on logout or exit and device-save on mobile. Few requests, no lost progress. |
| **Seed-based restore** | A saved level is rebuilt deterministically from its seed and only the differences are applied, so saves stay small. |
| **Release-safe config** | Release builds take the GAME_ID from build config, strip dev credentials and allow only Google sign-in. Dev builds keep the debug login and debug info. |

Show a simple architecture diagram (`diagram-architecture.svg`, section 5):
`Unity WebGL client → SaiServer prefab (SaiAuth, GamerProgress) → REST API → Sai backend`, with an arrow `Sai Play → hosts / launches the WebGL build` **[TODO]** confirm this relationship.

Also mention what else the SDK offers (not used by this game, phrase it as "also available"): Mailbox, Inventory/Items, Crafting, Gacha, Shop, Quests, Leaderboards, Journey analytics, Battle sessions, Lua scripting. One drop-in prefab, modular, event-driven.

Optional code snippet (keep it short, real API style):
```csharp
// Drop the SaiServer prefab in the scene, set Game ID, then:
SaiServer.Instance.SaiAuth.OnLoginSuccess += LoadLevelFromCloud;
```

### 3.4 Engineering highlights (numbers section)
Metric cards. The numbers were measured in the Unity Editor on Windows on November 3, 2026. Label them as "Editor measurements" and do not claim they are device FPS.

- **4,177 → 55 draw calls** with 4,000 books on screen (GPU instancing + one shared 4K cover atlas).
- **~36% less texture memory** (35.1 MB → 22.4 MB).
- **Book picking batch ~245 ms → ~19 ms** (1,514 rays, zero mismatches).
- **588 books / 28 shelves** in a normal view, with 100% pool reuse (84/84 objects, zero runtime allocation of GameObjects).

Then short bullets:
- **Endless-feeling levels:** a grid of shelves split into clusters. Shelves are generated ("digitized") only when the camera needs them and streamed in and out as you pan.
- **Procedural shelves:** each shelf is built from rules (rows of 10 books, compartments of 2–7, stepped boards, one empty compartment) and validated over 20,000 seeds.
- **Cross-shelf shuffle:** books swap between shelves inside a cluster, fully reproducible from the seed.
- **Startup work budget:** loading is spread across frames so the browser never freezes.
- **Per-platform rendering:** desktop and mobile feature profiles (mobile render pipeline asset, BC7 on desktop, ASTC on mobile).
- **Pooling everywhere:** books, shelves, flowers and effects come from one scene-authored pool.

### 3.5 Polish details (small grid)
Leaf particles gather when you drag over a slot and burst when you drop. The level-finish leaf transition. A magic wand cursor. An AFK easter egg: a "book bird" flies across the screen. Localized UI in EN/VI/JA.

### 3.6 Final CTA
"Play it on Sai Play" + "Start your game on Sai Server" + a SaiGame logo (`Assets/_sg01/Images/Branding/LogoSaiGame_shadown.png`; ask the owner for a clean SVG or PNG version **[TODO]**).

## 4. Facts you must not change or inflate
- Platform: browser (Unity WebGL), built with Unity 6 (6000.3) and URP. Mobile builds exist for testing. Do not claim app store availability.
- Sign-in on release: Google only.
- Monetization: an optional "Easy Mode" purchase raises the max number of tray slots you can unlock. Mention it only if the owner agrees **[TODO]**.
- All performance numbers come from the Editor (section 3.4). Never present them as phone FPS.

## 5. Images needed

The owner will capture images from inside Unity. Placeholders are fine until then: use grey boxes with the file name and the size printed on them. Use WebP for screenshots, SVG for diagrams and icons, and always write alt text.

| # | File | Size / ratio | Where | What it shows |
|---|---|---|---|---|
| 1 | `hero.webp` | 1920×1080 (16:9), plus a 1080×1350 mobile crop | Hero | A wide shot of many tropical shelves, flowers in bloom, warm light, one book mid-drag with leaf particles. |
| 2 | `gameplay-drag.webp` | 1200×800 | 3.2 | Close-up: a book dragged over a compartment, leaf particles gathering, slot highlight. |
| 3 | `gameplay-bloom.webp` | 1200×800 | 3.2 | A full compartment with all flowers bloomed (before/after pair, bud → bloom, if possible). |
| 4 | `gameplay-tray.webp` | 1200×800 | 3.2 | The book tray with open slots and locked (black chained) slots. |
| 5 | `login-google.webp` | 1200×800 | 3.3 | The login screen with Google sign-in and the language picker. |
| 6 | `diagram-architecture.svg` | vector | 3.3 | Agent draws it: client → SaiServer prefab → REST → backend, with Sai Play hosting. |
| 7 | `diagram-autosave.svg` | vector | 3.3 | Agent draws it: timeline of fingerprint checks → change → quiet period → save, with a max-delay cap. |
| 8 | `stress-4000-books.webp` | 1600×900 | 3.4 | The stress scene with 4,000 instanced books on screen. |
| 9 | `streaming-overview.webp` | 1600×900 | 3.4 | Zoomed-out camera over the level grid, showing shelf clusters (ideally with a debug overlay or F3 debug info). |
| 10 | `procedural-shelves.webp` | 1600×900 | 3.4 | 3–4 different generated shelf layouts side by side. |
| 11 | `polish-leaves.gif` or `.webm` | 800×600, max 5 s, max 3 MB | 3.5 | Leaf burst on drop / level-finish leaf transition. |
| 12 | `easter-egg-bird.webp` | 800×600 | 3.5 | The book bird flying across the screen. |
| 13 | `logo-saigame.svg` | vector | Footer / CTA | SaiGame logo (owner provides). |
| 14 | `og-image.png` | 1200×630 | Meta tags | Social share card: hero shot + title + "Powered by Sai Server". |

Optional: a short gameplay video `trailer.webm` (≤ 30 s) to autoplay muted in the hero instead of image 1.

## 6. Technical requirements for the page
- Static, single page, responsive (works at 360 px wide), fast (Lighthouse ≥ 90), lazy-load images below the fold.
- Dark and light theme, accessible contrast, real alt text.
- SEO: title, description, Open Graph / Twitter cards using `og-image.png`.
- Keep all copy in one data file (e.g. `content.en.json`) so vi/ja can be added later.
- No tracking scripts unless the owner asks.

## 7. Open questions for the owner **[TODO]**
1. Tagline (the game name is final: Infinite Book Shelf).
2. What exactly is Sai Play, and what are its URL and logo?
3. Play URL for the WebGL build.
4. Can Easy Mode (paid) be mentioned?
5. Where will the page be hosted (domain)?
