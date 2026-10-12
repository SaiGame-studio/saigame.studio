import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // allow the dev server to be opened through http://local.saigame.studio
  allowedDevOrigins: ["local.saigame.studio", "*.saigame.studio"],
  reactStrictMode: true,
};

export default nextConfig;
