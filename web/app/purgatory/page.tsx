import type { Metadata } from "next";
import Navigation from "@/components/pages/purgatory/Navigation";
import Hero from "@/components/pages/purgatory/Hero";
import GameOverview from "@/components/pages/purgatory/GameOverview";
import GameFeatures from "@/components/pages/purgatory/GameFeatures";
import Spacer from "@/components/pages/purgatory/Spacer";
import Footer from "@/components/pages/purgatory/Footer";

export const metadata: Metadata = {
  title: "Purgatory \u2013 SaiGame",
  alternates: { canonical: "/purgatory/", languages: { "en-US": "/purgatory/", vi: "/vi/purgatory/" } },
};

// The display:contents wrapper adds no box; it scopes this page's Kubio CSS (tools/build_global_styles.py).
export default function PurgatoryPage() {
  return (
    <div data-wp-page="purgatory" style={{ display: "contents" }}>
      <div className="wp-site-blocks">
        <div className="wp-block wp-block-kubio-header position-relative wp-block-kubio-header__container style-RW_QAhu4iL-container" data-kubio="kubio/header">
          <Navigation />
          <Hero />
        </div>
        <div className="entry-content wp-block-post-content style--container style-local--container wp-block-kubio-core-post-content__container is-layout-flow wp-block-post-content-is-layout-flow">
          <GameOverview />
          <GameFeatures />
          <Spacer />
        </div>
        <Footer />
      </div>
    </div>
  );
}
