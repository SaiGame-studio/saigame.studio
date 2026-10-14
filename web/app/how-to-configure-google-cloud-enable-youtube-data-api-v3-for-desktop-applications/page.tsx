import type { Metadata } from "next";
import Navigation from "@/components/pages/post-google-cloud-youtube-api/Navigation";
import Hero from "@/components/pages/post-google-cloud-youtube-api/Hero";
import PostContent from "@/components/pages/post-google-cloud-youtube-api/PostContent";
import Footer from "@/components/pages/post-google-cloud-youtube-api/Footer";

export const metadata: Metadata = {
  title: "How to Configure Google Cloud & Enable YouTube Data API v3 (for Desktop Applications) \u2013 SaiGame",
  alternates: { canonical: "/how-to-configure-google-cloud-enable-youtube-data-api-v3-for-desktop-applications/" },
};

// The display:contents wrapper adds no box; it scopes this page's Kubio CSS (tools/build_global_styles.py).
export default function PostGoogleCloudYoutubeApiPage() {
  return (
    <div data-wp-page="post-google-cloud-youtube-api" style={{ display: "contents" }}>
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
