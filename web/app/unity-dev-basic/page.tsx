import type { Metadata } from "next";
import Navigation from "@/components/pages/unity-dev-basic/Navigation";
import Hero from "@/components/pages/unity-dev-basic/Hero";
import CourseModules from "@/components/pages/unity-dev-basic/CourseModules";
import Spacer from "@/components/pages/unity-dev-basic/Spacer";
import Footer from "@/components/pages/unity-dev-basic/Footer";

export const metadata: Metadata = {
  title: "Courses Unity Dev Basic \u2013 SaiGame",
  alternates: { canonical: "/unity-dev-basic/" },
};

// The display:contents wrapper adds no box; it scopes this page's Kubio CSS (tools/build_global_styles.py).
export default function UnityDevBasicPage() {
  return (
    <div data-wp-page="unity-dev-basic" style={{ display: "contents" }}>
      <div className="wp-site-blocks">
        <div className="wp-block wp-block-kubio-header position-relative wp-block-kubio-header__container style-RW_QAhu4iL-container" data-kubio="kubio/header">
          <Navigation />
          <Hero />
        </div>
        <div className="entry-content wp-block-post-content style--container style-local--container wp-block-kubio-core-post-content__container is-layout-flow wp-block-post-content-is-layout-flow">
          <CourseModules />
          <Spacer />
        </div>
        <Footer />
      </div>
    </div>
  );
}
