import type { Metadata } from "next";
import TopMenu from "@/components/TopMenu";
import GameCourses from "@/components/pages/unity-dev-basic/GameCourses";
import SiteFooter from "@/components/SiteFooter";
import { shareMetadata } from "@/lib/share";

export const generateMetadata = (): Promise<Metadata> => shareMetadata({
  path: "/game-courses/",
  title: "Game Courses – SaiGame",
  description: "Unity video courses from SaiGame, from C# basics to complete 2D and 3D game projects.",
});

// The Kubio nav keeps the site chrome (this page's scoped Kubio CSS, slug "unity-dev-basic");
// the content is its own design (components/pages/unity-dev-basic/GameCourses.tsx) and the footer is the shared SiteFooter.
export default function GameCoursesPage() {
  return (
    <div data-wp-page="unity-dev-basic" style={{ display: "contents" }}>
      <div className="wp-site-blocks">
        <div className="wp-block wp-block-kubio-header position-relative wp-block-kubio-header__container style-RW_QAhu4iL-container" data-kubio="kubio/header">
          <TopMenu page="unity-dev-basic" active="game-courses" />
        </div>
        <GameCourses />
        <SiteFooter />
      </div>
    </div>
  );
}
