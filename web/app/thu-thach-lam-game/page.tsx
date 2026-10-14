import type { Metadata } from "next";
import Navigation from "@/components/pages/post-thu-thach-lam-game/Navigation";
import Hero from "@/components/pages/post-thu-thach-lam-game/Hero";
import PostContent from "@/components/pages/post-thu-thach-lam-game/PostContent";
import Footer from "@/components/pages/post-thu-thach-lam-game/Footer";

export const metadata: Metadata = {
  title: "Th\u1eed Th\u00e1ch L\u00e0m Game \u2013 SaiGame",
  alternates: { canonical: "/thu-thach-lam-game/" },
};

// The display:contents wrapper adds no box; it scopes this page's Kubio CSS (tools/build_global_styles.py).
export default function PostThuThachLamGamePage() {
  return (
    <div data-wp-page="post-thu-thach-lam-game" style={{ display: "contents" }}>
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
