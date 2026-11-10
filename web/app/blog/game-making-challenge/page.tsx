import type { Metadata } from "next";
import TopMenu from "@/components/TopMenu";
import PostBody, { POST_TITLE } from "@/components/pages/post-thu-thach-lam-game/PostBody";
import BlogPostLayout from "@/components/pages/blog/BlogPostLayout";
import SiteFooter from "@/components/SiteFooter";
import { getI18n } from "@/lib/i18n";

// the title follows the visitor's language, like the post content
export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getI18n();
  return {
    title: `${t(POST_TITLE)} – SaiGame`,
    alternates: { canonical: "/blog/game-making-challenge/" },
  };
}

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
