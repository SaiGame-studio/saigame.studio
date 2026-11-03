import type { Metadata } from "next";
import Navigation from "@/components/pages/blog/Navigation";
import BlogList from "@/components/pages/blog/BlogList";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Blog – SaiGame",
  description: "Devlogs, lore and tutorials from the SaiGame team.",
  alternates: { canonical: "/blog/" },
};

// The Kubio nav keeps the site chrome (this page's scoped Kubio CSS, tools/build_global_styles.py);
// the post list is its own design (components/pages/blog/BlogList.tsx) and the footer is the shared SiteFooter.
export default function BlogPage() {
  return (
    <div data-wp-page="blog" style={{ display: "contents" }}>
      <div className="wp-site-blocks">
        <div className="wp-block wp-block-kubio-header position-relative wp-block-kubio-header__container style-theme-Zam-Tq5W3-container" data-kubio="kubio/header">
          <Navigation />
        </div>
        <BlogList />
        <SiteFooter />
      </div>
    </div>
  );
}
