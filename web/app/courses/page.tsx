import type { Metadata } from "next";
import TopMenu from "@/components/TopMenu";
import Hero from "@/components/pages/courses/Hero";
import CoursesContent from "@/components/pages/courses/CoursesContent";
import SiteFooter from "@/components/SiteFooter";
import { shareMetadata } from "@/lib/share";

export const metadata: Metadata = shareMetadata({
  path: "/courses/",
  title: "Courses – SaiGame",
  description: "Game development courses from SaiGame: Unity Dev Basic for beginners and Unity Dev Advance for developers building complex, immersive games with Unity.",
});

// The display:contents wrapper adds no box; it scopes this page's Kubio CSS (tools/build_global_styles.py).
export default function CoursesPage() {
  return (
    <div data-wp-page="courses" style={{ display: "contents" }}>
      <div className="wp-site-blocks">
        <div className="wp-block wp-block-kubio-header position-relative wp-block-kubio-header__container style-p1i1IV2M0u-container" data-kubio="kubio/header">
          <TopMenu page="courses" />
          <Hero />
        </div>
        <CoursesContent />
        <SiteFooter />
      </div>
    </div>
  );
}
