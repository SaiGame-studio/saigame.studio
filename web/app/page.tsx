import SiteNavigation from "@/components/home/SiteNavigation";
import Hero from "@/components/home/Hero";
import TopGames from "@/components/home/TopGames";
import YoutubeCta from "@/components/home/YoutubeCta";
import GameDevCourses from "@/components/home/GameDevCourses";
import DiscordAndCourses from "@/components/home/DiscordAndCourses";
import GithubCta from "@/components/home/GithubCta";
import SiteFooter from "@/components/home/SiteFooter";

export default function HomePage() {
  return (
    <div className="wp-site-blocks">
      <div className="wp-block wp-block-kubio-header position-relative wp-block-kubio-header__container style-RW_QAhu4iL-container" data-kubio="kubio/header">
        <SiteNavigation />
        <Hero />
      </div>
      <div className="entry-content wp-block-post-content style--container style-local--container wp-block-kubio-core-post-content__container is-layout-flow wp-block-post-content-is-layout-flow">
        <TopGames />
        <YoutubeCta />
        <GameDevCourses />
        <DiscordAndCourses />
        <GithubCta />
      </div>
      <SiteFooter />
    </div>
  );
}
