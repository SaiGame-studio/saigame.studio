import type { Metadata } from "next";
import Navigation from "@/components/pages/the-immortal/Navigation";
import Hero from "@/components/pages/the-immortal/Hero";
import GameOverview from "@/components/pages/the-immortal/GameOverview";
import GameFeatures from "@/components/pages/the-immortal/GameFeatures";
import Spacer from "@/components/pages/the-immortal/Spacer";
import Footer from "@/components/pages/the-immortal/Footer";

export const metadata: Metadata = {
  title: "The Immortal \u2013 SaiGame",
  alternates: { canonical: "/the-immortal/", languages: { "en-US": "/the-immortal/", vi: "/vi/the-immortal/" } },
};

// The display:contents wrapper adds no box; it scopes this page's Kubio CSS (tools/build_global_styles.py).
export default function TheImmortalPage() {
  return (
    <div data-wp-page="the-immortal" style={{ display: "contents" }}>
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
