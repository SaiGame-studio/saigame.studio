import type { Metadata } from "next";
import Navigation from "@/components/pages/the-watcher/Navigation";
import GameLayout from "@/components/pages/games/GameLayout";
import TheWatcherContent from "@/components/pages/the-watcher/TheWatcherContent";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "The Watcher \u2013 SaiGame",
  alternates: { canonical: "/games/the-watcher/" },
};

// The display:contents wrapper scopes this page's Kubio CSS (nav only); the game page itself uses the shared dark GameLayout.
export default function TheWatcherPage() {
  return (
    <div data-wp-page="the-watcher" style={{ display: "contents" }}>
      <div className="wp-site-blocks">
        <div className="wp-block wp-block-kubio-header position-relative wp-block-kubio-header__container style-RW_QAhu4iL-container" data-kubio="kubio/header">
          <Navigation />
        </div>
        <GameLayout slug="the-watcher">
          <TheWatcherContent />
        </GameLayout>
        <SiteFooter />
      </div>
    </div>
  );
}
