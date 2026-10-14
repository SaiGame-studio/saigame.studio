import type { Metadata } from "next";
import Navigation from "@/components/pages/blog/Navigation";
import Hero from "@/components/pages/blog/Hero";
import BlogPosts from "@/components/pages/blog/BlogPosts";
import Footer from "@/components/pages/blog/Footer";

export const metadata: Metadata = {
  title: "Blog \u2013 SaiGame",
  alternates: { canonical: "/" },
};

// The display:contents wrapper adds no box; it scopes this page's Kubio CSS (tools/build_global_styles.py).
export default function BlogPage() {
  return (
    <div data-wp-page="blog" style={{ display: "contents" }}>
      <div className="wp-site-blocks">
        <div className="wp-block wp-block-kubio-header position-relative wp-block-kubio-header__container style-theme-Zam-Tq5W3-container" data-kubio="kubio/header">
          <Navigation />
          <Hero />
        </div>
        <BlogPosts />
        <Footer />
      </div>
    </div>
  );
}
