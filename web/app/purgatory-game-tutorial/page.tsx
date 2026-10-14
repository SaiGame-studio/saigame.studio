import type { Metadata } from "next";
import Navigation from "@/components/pages/post-purgatory-game-tutorial/Navigation";
import Hero from "@/components/pages/post-purgatory-game-tutorial/Hero";
import PostContent from "@/components/pages/post-purgatory-game-tutorial/PostContent";
import Footer from "@/components/pages/post-purgatory-game-tutorial/Footer";

export const metadata: Metadata = {
  title: "Purgatory \u2013 Game Tutorial \u2013 SaiGame",
  alternates: { canonical: "/purgatory-game-tutorial/" },
};

// The display:contents wrapper adds no box; it scopes this page's Kubio CSS (tools/build_global_styles.py).
export default function PostPurgatoryGameTutorialPage() {
  return (
    <div data-wp-page="post-purgatory-game-tutorial" style={{ display: "contents" }}>
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
