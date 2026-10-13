import type { Metadata } from "next";
import Navigation from "@/components/pages/courses/Navigation";
import Hero from "@/components/pages/courses/Hero";
import CoursesContent from "@/components/pages/courses/CoursesContent";
import Footer from "@/components/pages/courses/Footer";

export const metadata: Metadata = {
  title: "Courses \u2013 SaiGame",
  alternates: { canonical: "/courses/", languages: { "en-US": "/courses/", vi: "/vi/courses/" } },
};

// The display:contents wrapper adds no box; it scopes this page's Kubio CSS (tools/build_global_styles.py).
export default function CoursesPage() {
  return (
    <div data-wp-page="courses" style={{ display: "contents" }}>
      <div className="wp-site-blocks">
        <div className="wp-block wp-block-kubio-header position-relative wp-block-kubio-header__container style-p1i1IV2M0u-container" data-kubio="kubio/header">
          <Navigation />
          <Hero />
        </div>
        <CoursesContent />
        <Footer />
      </div>
    </div>
  );
}
