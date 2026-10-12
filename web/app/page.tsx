import type { Metadata } from "next";
import WpStyles from "@/components/WpStyles";
import styles from "@/components/pages/home/styles.json";
import Navigation from "@/components/pages/home/Navigation";
import Hero from "@/components/pages/home/Hero";
import TopGames from "@/components/pages/home/TopGames";
import YoutubeCta from "@/components/pages/home/YoutubeCta";
import GameDevCourses from "@/components/pages/home/GameDevCourses";
import DiscordAndCourses from "@/components/pages/home/DiscordAndCourses";
import GithubCta from "@/components/pages/home/GithubCta";
import Footer from "@/components/pages/home/Footer";

export const metadata: Metadata = {
  title: "SaiGame",
  alternates: { canonical: "/", languages: { "en-US": "/", vi: "/vi/" } },
};

export default function HomePage() {
  return (
    <>
      <WpStyles styles={styles} />
      <div className="wp-site-blocks">
        <div className="wp-block wp-block-kubio-header position-relative wp-block-kubio-header__container style-RW_QAhu4iL-container" data-kubio="kubio/header">
          <Navigation />
          <Hero />
        </div>
        <div className="entry-content wp-block-post-content style--container style-local--container wp-block-kubio-core-post-content__container is-layout-flow wp-block-post-content-is-layout-flow">
          <TopGames />
          <YoutubeCta />
          <GameDevCourses />
          <DiscordAndCourses />
          <GithubCta />
        </div>
        <Footer />
      </div>
    </>
  );
}
