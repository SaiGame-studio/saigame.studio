import type { Metadata } from "next";
import TopMenu from "@/components/TopMenu";
import PostBody from "@/components/pages/post-thu-thach-lam-game/PostBody";
import BlogPostLayout from "@/components/pages/blog/BlogPostLayout";
import { postMetadata } from "@/components/pages/blog/meta";
import SiteFooter from "@/components/SiteFooter";

export const generateMetadata = (): Promise<Metadata> => postMetadata("game-making-challenge");

// The display:contents wrapper scopes this page's Kubio CSS (nav only); the post itself uses the shared dark BlogPostLayout.
// "post-thu-thach-lam-game" is the page's scoped-CSS id from the WordPress conversion (tools/), so it keeps the old slug.
export default function PostGameMakingChallengePage() {
  return (
    <div data-wp-page="post-thu-thach-lam-game" style={{ display: "contents" }}>
      <div className="wp-site-blocks">
        <div className="wp-block wp-block-kubio-header position-relative wp-block-kubio-header__container style-single-theme-Zam-Tq5W3-container" data-kubio="kubio/header">
          <TopMenu page="post-thu-thach-lam-game" active="blog" />
        </div>
        <BlogPostLayout slug="game-making-challenge">
          <PostBody />
        </BlogPostLayout>
        <SiteFooter />
      </div>
    </div>
  );
}
