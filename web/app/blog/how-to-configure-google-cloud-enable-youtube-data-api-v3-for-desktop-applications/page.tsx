import type { Metadata } from "next";
import Navigation from "@/components/pages/post-google-cloud-youtube-api/Navigation";
import PostBody from "@/components/pages/post-google-cloud-youtube-api/PostBody";
import BlogPostLayout from "@/components/pages/blog/BlogPostLayout";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "How to Configure Google Cloud & Enable YouTube Data API v3 (for Desktop Applications) \u2013 SaiGame",
  alternates: { canonical: "/blog/how-to-configure-google-cloud-enable-youtube-data-api-v3-for-desktop-applications/" },
};

// The display:contents wrapper scopes this page's Kubio CSS (nav only); the post itself uses the shared dark BlogPostLayout.
export default function PostGoogleCloudYoutubeApiPage() {
  return (
    <div data-wp-page="post-google-cloud-youtube-api" style={{ display: "contents" }}>
      <div className="wp-site-blocks">
        <div className="wp-block wp-block-kubio-header position-relative wp-block-kubio-header__container style-single-theme-Zam-Tq5W3-container" data-kubio="kubio/header">
          <Navigation />
        </div>
        <BlogPostLayout slug="how-to-configure-google-cloud-enable-youtube-data-api-v3-for-desktop-applications">
          <PostBody />
        </BlogPostLayout>
        <SiteFooter />
      </div>
    </div>
  );
}
