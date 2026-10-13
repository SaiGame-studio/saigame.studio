import type { Metadata } from "next";
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
  alternates: { canonical: "/" },
};

// The display:contents wrapper adds no box; it scopes this page's Kubio CSS (tools/build_global_styles.py).
export default function HomePage() {
  return (
    <div data-wp-page="home" style={{ display: "contents" }}>
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
    </div>
  );
}
