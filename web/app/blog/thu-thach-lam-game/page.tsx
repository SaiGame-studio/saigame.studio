import type { Metadata } from "next";
import Navigation from "@/components/pages/post-thu-thach-lam-game/Navigation";
import PostBody from "@/components/pages/post-thu-thach-lam-game/PostBody";
import BlogPostLayout from "@/components/pages/blog/BlogPostLayout";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Th\u1eed Th\u00e1ch L\u00e0m Game \u2013 SaiGame",
  alternates: { canonical: "/blog/thu-thach-lam-game/" },
};

// The display:contents wrapper scopes this page's Kubio CSS (nav only); the post itself uses the shared dark BlogPostLayout.
export default function PostThuThachLamGamePage() {
  return (
    <div data-wp-page="post-thu-thach-lam-game" style={{ display: "contents" }}>
      <div className="wp-site-blocks">
        <div className="wp-block wp-block-kubio-header position-relative wp-block-kubio-header__container style-single-theme-Zam-Tq5W3-container" data-kubio="kubio/header">
          <Navigation />
        </div>
        <BlogPostLayout slug="thu-thach-lam-game">
          <PostBody />
        </BlogPostLayout>
        <SiteFooter />
      </div>
    </div>
  );
}
