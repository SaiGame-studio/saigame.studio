import type { Metadata } from "next";
import Navigation from "@/components/pages/post-sai-rewind-2024/Navigation";
import PostBody from "@/components/pages/post-sai-rewind-2024/PostBody";
import BlogPostLayout from "@/components/pages/blog/BlogPostLayout";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Sai Rewind 2024 \u2013 Nh\u1eadt k\u00fd E3 \u2013 SaiGame",
  alternates: { canonical: "/blog/sai-rewind-2024-nhat-ky-e3/" },
};

// The display:contents wrapper scopes this page's Kubio CSS (nav only); the post itself uses the shared dark BlogPostLayout.
export default function PostSaiRewind2024Page() {
  return (
    <div data-wp-page="post-sai-rewind-2024" style={{ display: "contents" }}>
      <div className="wp-site-blocks">
        <div className="wp-block wp-block-kubio-header position-relative wp-block-kubio-header__container style-single-theme-Zam-Tq5W3-container" data-kubio="kubio/header">
          <Navigation />
        </div>
        <BlogPostLayout slug="sai-rewind-2024-nhat-ky-e3">
          <PostBody />
        </BlogPostLayout>
        <SiteFooter />
      </div>
    </div>
  );
}
