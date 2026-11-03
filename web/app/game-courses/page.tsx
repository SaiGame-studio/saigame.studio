import type { Metadata } from "next";
import Navigation from "@/components/pages/unity-dev-basic/Navigation";
import GameCourses from "@/components/pages/unity-dev-basic/GameCourses";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Game Courses – SaiGame",
  description: "Free Unity video courses from SaiGame on YouTube, from C# basics to complete 2D and 3D game projects.",
  alternates: { canonical: "/game-courses/" },
};

// The Kubio nav keeps the site chrome (this page's scoped Kubio CSS, slug "unity-dev-basic");
// the content is its own design (components/pages/unity-dev-basic/GameCourses.tsx) and the footer is the shared SiteFooter.
export default function GameCoursesPage() {
  return (
    <div data-wp-page="unity-dev-basic" style={{ display: "contents" }}>
      <div className="wp-site-blocks">
        <div className="wp-block wp-block-kubio-header position-relative wp-block-kubio-header__container style-RW_QAhu4iL-container" data-kubio="kubio/header">
          <Navigation />
        </div>
        <GameCourses />
        <SiteFooter />
      </div>
    </div>
  );
}
