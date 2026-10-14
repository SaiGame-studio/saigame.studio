import type { Metadata } from "next";
import Navigation from "@/components/pages/post-sai-rewind-2024/Navigation";
import Hero from "@/components/pages/post-sai-rewind-2024/Hero";
import PostContent from "@/components/pages/post-sai-rewind-2024/PostContent";
import Footer from "@/components/pages/post-sai-rewind-2024/Footer";

export const metadata: Metadata = {
  title: "Sai Rewind 2024 \u2013 Nh\u1eadt k\u00fd E3 \u2013 SaiGame",
  alternates: { canonical: "/sai-rewind-2024-nhat-ky-e3/" },
};

// The display:contents wrapper adds no box; it scopes this page's Kubio CSS (tools/build_global_styles.py).
export default function PostSaiRewind2024Page() {
  return (
    <div data-wp-page="post-sai-rewind-2024" style={{ display: "contents" }}>
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
