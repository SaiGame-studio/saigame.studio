import type { Metadata } from "next";
import TopMenu from "@/components/TopMenu";
import PostBody from "@/components/pages/post-ss05-backend-tutorial/PostBody";
import BlogPostLayout from "@/components/pages/blog/BlogPostLayout";
import { postMetadata } from "@/components/pages/blog/meta";
import SiteFooter from "@/components/SiteFooter";

export const generateMetadata = (): Promise<Metadata> => postMetadata("ss05-backend-tutorial");

// The display:contents wrapper scopes this page's Kubio CSS (nav only); the post itself uses the shared dark BlogPostLayout.
export default function PostSs05BackendTutorialPage() {
  return (
    <div data-wp-page="post-ss05-backend-tutorial" style={{ display: "contents" }}>
      <div className="wp-site-blocks">
        <div className="wp-block wp-block-kubio-header position-relative wp-block-kubio-header__container style-single-theme-Zam-Tq5W3-container" data-kubio="kubio/header">
          <TopMenu page="post-ss05-backend-tutorial" active="blog" />
        </div>
        <BlogPostLayout slug="ss05-backend-tutorial">
          <PostBody />
        </BlogPostLayout>
        <SiteFooter />
      </div>
    </div>
  );
}
