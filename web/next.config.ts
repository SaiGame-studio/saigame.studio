import type { NextConfig } from "next";

// Game pages live under /games/<slug>/; WordPress served them at the root (/purgatory/).
const GAME_PAGES: string[] = ["purgatory", "the-immortal", "the-watcher"];
// Blog posts live under /blog/<slug>/; WordPress served them at the root.
const BLOG_POSTS: string[] = [
  "thu-thach-lam-game",
  "sai-game-lore-1",
  "purgatory-game-tutorial",
  "ss05-backend-tutorial",
  "how-to-configure-google-cloud-enable-youtube-data-api-v3-for-desktop-applications",
  "sai-rewind-2024-nhat-ky-e3",
  "cu-phot-unity-2023-nhat-ky-e2",
  "nguon-goc-sai-game",
];

const nextConfig: NextConfig = {
  // allow the dev server to be opened through http://local.saigame.studio
  allowedDevOrigins: ["local.saigame.studio", "*.saigame.studio"],
  reactStrictMode: true,
  // WordPress URLs end with a slash (/games/, /purgatory/)
  trailingSlash: true,
  async redirects() {
    return [
      ...GAME_PAGES.map((slug) => ({ source: `/${slug}`, destination: `/games/${slug}/`, permanent: true })),
      ...BLOG_POSTS.map((slug) => ({ source: `/${slug}`, destination: `/blog/${slug}/`, permanent: true })),
      // the Unity Dev Basic course moved to /game-courses/ (old WordPress URLs included)
      { source: "/unity-dev-basic", destination: "/game-courses/", permanent: true },
      { source: "/courses/unity-dev-basic", destination: "/game-courses/", permanent: true },
      // the Basic Sai Server page was removed; Sai Server is presented on /products/
      { source: "/co-ban-sai-server", destination: "/products/", permanent: true },
      // the Infinite Book Shelf page first shipped at /products/infinity-book-shelf/
      { source: "/products/infinity-book-shelf", destination: "/products/infinite-book-shelf/", permanent: true },
    ];
  },
};

export default nextConfig;
