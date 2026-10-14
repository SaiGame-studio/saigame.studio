import type { Metadata } from "next";
import Navigation from "@/components/pages/post-ss05-backend-tutorial/Navigation";
import Hero from "@/components/pages/post-ss05-backend-tutorial/Hero";
import PostContent from "@/components/pages/post-ss05-backend-tutorial/PostContent";
import Footer from "@/components/pages/post-ss05-backend-tutorial/Footer";

export const metadata: Metadata = {
  title: "Purgatory \u2013 Backend Tutorial \u2013 SaiGame",
  alternates: { canonical: "/ss05-backend-tutorial/" },
};

// The display:contents wrapper adds no box; it scopes this page's Kubio CSS (tools/build_global_styles.py).
export default function PostSs05BackendTutorialPage() {
  return (
    <div data-wp-page="post-ss05-backend-tutorial" style={{ display: "contents" }}>
      <div className="wp-site-blocks">
        <div className="wp-block wp-block-kubio-header position-relative wp-block-kubio-header__container style-single-theme-Zam-Tq5W3-container" data-kubio="kubio/header">
          <Navigation />
          <Hero />
        </div>
        <PostContent />
        <Footer />
      </div>
    </div>
  );
}
