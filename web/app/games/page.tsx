import type { Metadata } from "next";
import Navigation from "@/components/pages/games/Navigation";
import GamesList from "@/components/pages/games/GamesList";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Games – SaiGame",
  description: "Games made by the SaiGame team, available on Steam.",
  alternates: { canonical: "/games/" },
};

// The Kubio nav keeps the site chrome (this page's scoped Kubio CSS);
// the list is its own design (components/pages/games/GamesList.tsx) and the footer is the shared SiteFooter.
export default function GamesPage() {
  return (
    <div data-wp-page="games" style={{ display: "contents" }}>
      <div className="wp-site-blocks">
        <div className="wp-block wp-block-kubio-header position-relative wp-block-kubio-header__container style-RW_QAhu4iL-container" data-kubio="kubio/header">
          <Navigation />
        </div>
        <GamesList />
        <SiteFooter />
      </div>
    </div>
  );
}
