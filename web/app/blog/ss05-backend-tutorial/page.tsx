import type { Metadata } from "next";
import Navigation from "@/components/pages/post-ss05-backend-tutorial/Navigation";
import PostBody from "@/components/pages/post-ss05-backend-tutorial/PostBody";
import BlogPostLayout from "@/components/pages/blog/BlogPostLayout";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Purgatory \u2013 Backend Tutorial \u2013 SaiGame",
  alternates: { canonical: "/blog/ss05-backend-tutorial/" },
};

// The display:contents wrapper scopes this page's Kubio CSS (nav only); the post itself uses the shared dark BlogPostLayout.
export default function PostSs05BackendTutorialPage() {
  return (
    <div data-wp-page="post-ss05-backend-tutorial" style={{ display: "contents" }}>
      <div className="wp-site-blocks">
        <div className="wp-block wp-block-kubio-header position-relative wp-block-kubio-header__container style-single-theme-Zam-Tq5W3-container" data-kubio="kubio/header">
          <Navigation />
        </div>
        <BlogPostLayout slug="ss05-backend-tutorial">
          <PostBody />
        </BlogPostLayout>
        <SiteFooter />
      </div>
    </div>
  );
}
