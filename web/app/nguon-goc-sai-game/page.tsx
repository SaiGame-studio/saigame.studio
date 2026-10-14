import type { Metadata } from "next";
import Navigation from "@/components/pages/post-nguon-goc-sai-game/Navigation";
import Hero from "@/components/pages/post-nguon-goc-sai-game/Hero";
import PostContent from "@/components/pages/post-nguon-goc-sai-game/PostContent";
import Footer from "@/components/pages/post-nguon-goc-sai-game/Footer";

export const metadata: Metadata = {
  title: "Ngu\u1ed3n g\u1ed1c Sai Game \u2013 Nh\u1eadt K\u00fd \u2013 E1 \u2013 SaiGame",
  alternates: { canonical: "/nguon-goc-sai-game/" },
};

// The display:contents wrapper adds no box; it scopes this page's Kubio CSS (tools/build_global_styles.py).
export default function PostNguonGocSaiGamePage() {
  return (
    <div data-wp-page="post-nguon-goc-sai-game" style={{ display: "contents" }}>
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
