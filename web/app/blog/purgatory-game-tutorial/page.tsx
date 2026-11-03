import type { Metadata } from "next";
import TopMenu from "@/components/TopMenu";
import PostBody from "@/components/pages/post-purgatory-game-tutorial/PostBody";
import BlogPostLayout from "@/components/pages/blog/BlogPostLayout";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Purgatory \u2013 Game Tutorial \u2013 SaiGame",
  alternates: { canonical: "/blog/purgatory-game-tutorial/" },
};

// The display:contents wrapper scopes this page's Kubio CSS (nav only); the post itself uses the shared dark BlogPostLayout.
export default function PostPurgatoryGameTutorialPage() {
  return (
    <div data-wp-page="post-purgatory-game-tutorial" style={{ display: "contents" }}>
      <div className="wp-site-blocks">
        <div className="wp-block wp-block-kubio-header position-relative wp-block-kubio-header__container style-single-theme-Zam-Tq5W3-container" data-kubio="kubio/header">
          <TopMenu page="post-purgatory-game-tutorial" active="blog" />
        </div>
        <BlogPostLayout slug="purgatory-game-tutorial">
          <PostBody />
        </BlogPostLayout>
        <SiteFooter />
      </div>
    </div>
  );
}
