import type { Metadata } from "next";
import TopMenu from "@/components/TopMenu";
import Home from "@/components/pages/home/Home";
import SiteFooter from "@/components/SiteFooter";
import { shareMetadata } from "@/lib/share";

export const metadata: Metadata = shareMetadata({
  path: "/",
  title: "SaiGame – Sai Server, the backend for your game",
  description: "SaiGame builds Sai Server, the game backend platform: accounts, cloud save, inventory, in-game economy, quests, leaderboards and server-side Lua, managed from one web admin. We make our own games on it too.",
});

// The Kubio nav keeps the site chrome (this page's scoped Kubio CSS);
// the content is its own design (components/pages/home/Home.tsx) and the footer is the shared SiteFooter.
export default function HomePage() {
  return (
    <div data-wp-page="home" style={{ display: "contents" }}>
      <div className="wp-site-blocks">
        <div className="wp-block wp-block-kubio-header position-relative wp-block-kubio-header__container style-RW_QAhu4iL-container" data-kubio="kubio/header">
          <TopMenu page="home" active="home" />
        </div>
        <Home />
        <SiteFooter />
      </div>
    </div>
  );
}
