import type { Metadata } from "next";
import TopMenu from "@/components/TopMenu";
import PostBody from "@/components/pages/post-cu-phot-unity-2023/PostBody";
import BlogPostLayout from "@/components/pages/blog/BlogPostLayout";
import { postMetadata } from "@/components/pages/blog/meta";
import SiteFooter from "@/components/SiteFooter";

export const generateMetadata = (): Promise<Metadata> => postMetadata("cu-phot-unity-2023-nhat-ky-e2");

// The display:contents wrapper scopes this page's Kubio CSS (nav only); the post itself uses the shared dark BlogPostLayout.
export default function PostCuPhotUnity2023Page() {
  return (
    <div data-wp-page="post-cu-phot-unity-2023" style={{ display: "contents" }}>
      <div className="wp-site-blocks">
        <div className="wp-block wp-block-kubio-header position-relative wp-block-kubio-header__container style-single-theme-Zam-Tq5W3-container" data-kubio="kubio/header">
          <TopMenu page="post-cu-phot-unity-2023" active="blog" />
        </div>
        <BlogPostLayout slug="cu-phot-unity-2023-nhat-ky-e2">
          <PostBody />
        </BlogPostLayout>
        <SiteFooter />
      </div>
    </div>
  );
}
