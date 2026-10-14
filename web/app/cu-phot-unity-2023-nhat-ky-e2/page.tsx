import type { Metadata } from "next";
import Navigation from "@/components/pages/post-cu-phot-unity-2023/Navigation";
import Hero from "@/components/pages/post-cu-phot-unity-2023/Hero";
import PostContent from "@/components/pages/post-cu-phot-unity-2023/PostContent";
import Footer from "@/components/pages/post-cu-phot-unity-2023/Footer";

export const metadata: Metadata = {
  title: "C\u00fa ph\u1ed1t Unity 2023 \u2013 Nh\u1eadt K\u00fd \u2013 E2 \u2013 SaiGame",
  alternates: { canonical: "/cu-phot-unity-2023-nhat-ky-e2/" },
};

// The display:contents wrapper adds no box; it scopes this page's Kubio CSS (tools/build_global_styles.py).
export default function PostCuPhotUnity2023Page() {
  return (
    <div data-wp-page="post-cu-phot-unity-2023" style={{ display: "contents" }}>
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
