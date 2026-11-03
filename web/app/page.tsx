import type { Metadata } from "next";
import TopMenu from "@/components/TopMenu";
import Home from "@/components/pages/home/Home";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "SaiGame",
  description: "SaiGame makes games, teaches game development, and builds Sai Server, the platform to run them.",
  alternates: { canonical: "/" },
};

// The Kubio nav keeps the site chrome (this page's scoped Kubio CSS);
// the content is its own design (components/pages/home/Home.tsx) and the footer is the shared SiteFooter.
export default function HomePage() {
  return (
    <div data-wp-page="home" style={{ display: "contents" }}>
      <div className="wp-site-blocks">
        <div className="wp-block wp-block-kubio-header position-relative wp-block-kubio-header__container style-RW_QAhu4iL-container" data-kubio="kubio/header">
          <TopMenu page="home" active="home" />
        </div>
        <Home />
        <SiteFooter />
      </div>
    </div>
  );
}
