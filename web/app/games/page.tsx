import type { Metadata } from "next";
import WpStyles from "@/components/WpStyles";
import styles from "@/components/pages/games/styles.json";
import Navigation from "@/components/pages/games/Navigation";
import Hero from "@/components/pages/games/Hero";
import PurgatoryCard from "@/components/pages/games/PurgatoryCard";
import TheImmortalCard from "@/components/pages/games/TheImmortalCard";
import TheWatcherCard from "@/components/pages/games/TheWatcherCard";
import Footer from "@/components/pages/games/Footer";

export const metadata: Metadata = {
  title: "Games \u2013 SaiGame",
  alternates: { canonical: "/games/", languages: { "en-US": "/games/", vi: "/vi/games/" } },
};

export default function GamesPage() {
  return (
    <>
      <WpStyles styles={styles} />
      <div className="wp-site-blocks">
        <div className="wp-block wp-block-kubio-header position-relative wp-block-kubio-header__container style-RW_QAhu4iL-container" data-kubio="kubio/header">
          <Navigation />
          <Hero />
        </div>
        <div className="entry-content wp-block-post-content style--container style-local--container wp-block-kubio-core-post-content__container is-layout-flow wp-block-post-content-is-layout-flow">
          <PurgatoryCard />
          <TheImmortalCard />
          <TheWatcherCard />
        </div>
        <Footer />
      </div>
    </>
  );
}
