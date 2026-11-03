// SaiGame's games, shown on /games/ and on each /games/<slug>/ page. Text values are English keys for t().
export type Game = {
  slug: string;
  title: string;
  platform: string;
  /** vertical Steam capsule or key art */
  cover: string;
  summary: string;
  tags: { title: string; text?: string }[];
  steamUrl: string;
  steamAppId: string;
  community?: { label: string; href: string }[];
};

export const GAMES: Game[] = [
  {
    slug: "purgatory",
    title: "Purgatory",
    platform: "Steam PC",
    cover: "/wp-content/uploads/2025/11/store_capsule_vertical.jpg",
    summary:
      "a next-generation interactive game designed specifically to connect Streamers and Viewers like never before. This is not just a game; it is a stage for your community to stand shoulder to shoulder, building and fighting for a common goal.",
    tags: [{ title: "Offline Standard Edition" }, { title: "Online Expansion Pack" }],
    steamUrl: "https://store.steampowered.com/app/3983490/Purgatory",
    steamAppId: "3983490",
    community: [
      { label: "Discord", href: "https://discord.gg/eRb2qMDAnP" },
    ],
  },
  {
    slug: "the-immortal",
    title: "The Immortal",
    platform: "Steam PC",
    cover: "/wp-content/uploads/2025/02/hero_capsule-edited.jpg",
    summary:
      "This is running game in 2D Platform, enemies will appear on the way, kill them all if you want to reach the end of the land. You have to focus on the game 100%, just one hit of enemy everything will back to the beginning.",
    tags: [
      { title: "2D", text: "A side-scrolling video game is a video game viewed from a side-view camera angle where the screen follows the player as they move left or right." },
      { title: "Pixel Art" },
    ],
    steamUrl: "https://store.steampowered.com/app/1952270/The_Immortal/",
    steamAppId: "1952270",
  },
  {
    slug: "the-watcher",
    title: "The Watcher",
    platform: "Steam PC",
    cover: "/wp-content/uploads/2025/02/the-watcher-edited.jpg",
    summary:
      "Our heroes catch wind of a mysterious land teeming with monsters, compelling them to uncover the truth behind its turmoil. Venture deep into this perilous realm and journey as far as you can to discover the origin of the monsters.",
    tags: [
      { title: "Incremental game", text: "An incremental game, also known as a clicker game, tap game or idle game, is a video game whose gameplay consists of the player performing simple actions such as clicking on the screen repeatedly." },
      { title: "Pixel Art" },
    ],
    steamUrl: "https://store.steampowered.com/app/1900830/The_Watcher/",
    steamAppId: "1900830",
  },
];

export const gameHref = (game: Game) => `/games/${game.slug}/`;
