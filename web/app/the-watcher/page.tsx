import type { Metadata } from "next";
import WpStyles from "@/components/WpStyles";
import styles from "@/components/pages/the-watcher/styles.json";
import Navigation from "@/components/pages/the-watcher/Navigation";
import Hero from "@/components/pages/the-watcher/Hero";
import GameOverview from "@/components/pages/the-watcher/GameOverview";
import GameFeatures from "@/components/pages/the-watcher/GameFeatures";
import Spacer from "@/components/pages/the-watcher/Spacer";
import Footer from "@/components/pages/the-watcher/Footer";

export const metadata: Metadata = {
  title: "The Watcher \u2013 SaiGame",
  alternates: { canonical: "/the-watcher/", languages: { "en-US": "/the-watcher/", vi: "/vi/the-watcher/" } },
};

export default function TheWatcherPage() {
  return (
    <>
      <WpStyles styles={styles} />
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
    </>
  );
}
