import type { Metadata } from "next";
import TopMenu from "@/components/TopMenu";
import GameLayout from "@/components/pages/games/GameLayout";
import PurgatoryContent from "@/components/pages/purgatory/PurgatoryContent";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Purgatory \u2013 SaiGame",
  alternates: { canonical: "/games/purgatory/" },
};

// The display:contents wrapper scopes this page's Kubio CSS (nav only); the game page itself uses the shared dark GameLayout.
export default function PurgatoryPage() {
  return (
    <div data-wp-page="purgatory" style={{ display: "contents" }}>
      <div className="wp-site-blocks">
        <div className="wp-block wp-block-kubio-header position-relative wp-block-kubio-header__container style-RW_QAhu4iL-container" data-kubio="kubio/header">
          <TopMenu page="purgatory" active="games" />
        </div>
        <GameLayout slug="purgatory">
          <PurgatoryContent />
        </GameLayout>
        <SiteFooter />
      </div>
    </div>
  );
}
