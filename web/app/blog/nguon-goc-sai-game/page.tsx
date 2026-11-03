import type { Metadata } from "next";
import Navigation from "@/components/pages/post-nguon-goc-sai-game/Navigation";
import PostBody from "@/components/pages/post-nguon-goc-sai-game/PostBody";
import BlogPostLayout from "@/components/pages/blog/BlogPostLayout";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Ngu\u1ed3n g\u1ed1c Sai Game \u2013 Nh\u1eadt K\u00fd \u2013 E1 \u2013 SaiGame",
  alternates: { canonical: "/blog/nguon-goc-sai-game/" },
};

// The display:contents wrapper scopes this page's Kubio CSS (nav only); the post itself uses the shared dark BlogPostLayout.
export default function PostNguonGocSaiGamePage() {
  return (
    <div data-wp-page="post-nguon-goc-sai-game" style={{ display: "contents" }}>
      <div className="wp-site-blocks">
        <div className="wp-block wp-block-kubio-header position-relative wp-block-kubio-header__container style-single-theme-Zam-Tq5W3-container" data-kubio="kubio/header">
          <Navigation />
        </div>
        <BlogPostLayout slug="nguon-goc-sai-game">
          <PostBody />
        </BlogPostLayout>
        <SiteFooter />
      </div>
    </div>
  );
}
