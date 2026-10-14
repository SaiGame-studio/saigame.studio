import type { Metadata } from "next";
import Navigation from "@/components/pages/post-sai-game-lore-1/Navigation";
import Hero from "@/components/pages/post-sai-game-lore-1/Hero";
import PostContent from "@/components/pages/post-sai-game-lore-1/PostContent";
import Footer from "@/components/pages/post-sai-game-lore-1/Footer";

export const metadata: Metadata = {
  title: "Sai Game Lore #1 \u2013 SaiGame",
  alternates: { canonical: "/sai-game-lore-1/" },
};

// The display:contents wrapper adds no box; it scopes this page's Kubio CSS (tools/build_global_styles.py).
export default function PostSaiGameLore1Page() {
  return (
    <div data-wp-page="post-sai-game-lore-1" style={{ display: "contents" }}>
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
