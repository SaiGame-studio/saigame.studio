import type { NextConfig } from "next";

// Game pages live at the root like on WordPress (/purgatory/); the menu links to /games/<slug>,
// which WordPress redirected — keep the same 301s.
const GAME_PAGES: string[] = ["purgatory", "the-immortal", "the-watcher"];

const nextConfig: NextConfig = {
  // allow the dev server to be opened through http://local.saigame.studio
  allowedDevOrigins: ["local.saigame.studio", "*.saigame.studio"],
  reactStrictMode: true,
  // WordPress URLs end with a slash (/games/, /purgatory/)
  trailingSlash: true,
  async redirects() {
    return GAME_PAGES.map((slug) => ({ source: `/games/${slug}`, destination: `/${slug}/`, permanent: true }));
  },
};

export default nextConfig;
