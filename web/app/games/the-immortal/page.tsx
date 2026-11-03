import type { Metadata } from "next";
import TopMenu from "@/components/TopMenu";
import GameLayout from "@/components/pages/games/GameLayout";
import TheImmortalContent from "@/components/pages/the-immortal/TheImmortalContent";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "The Immortal \u2013 SaiGame",
  alternates: { canonical: "/games/the-immortal/" },
};

// The display:contents wrapper scopes this page's Kubio CSS (nav only); the game page itself uses the shared dark GameLayout.
export default function TheImmortalPage() {
  return (
    <div data-wp-page="the-immortal" style={{ display: "contents" }}>
      <div className="wp-site-blocks">
        <div className="wp-block wp-block-kubio-header position-relative wp-block-kubio-header__container style-RW_QAhu4iL-container" data-kubio="kubio/header">
          <TopMenu page="the-immortal" active="games" />
        </div>
        <GameLayout slug="the-immortal">
          <TheImmortalContent />
        </GameLayout>
        <SiteFooter />
      </div>
    </div>
  );
}
