import type { Metadata } from "next";
import Navigation from "@/components/pages/co-ban-sai-server/Navigation";
import Hero from "@/components/pages/co-ban-sai-server/Hero";
import SaiServerContent from "@/components/pages/co-ban-sai-server/SaiServerContent";
import Footer from "@/components/pages/co-ban-sai-server/Footer";

export const metadata: Metadata = {
  title: "Basic Sai Server \u2013 SaiGame",
  alternates: { canonical: "/co-ban-sai-server/", languages: { "en-US": "/co-ban-sai-server/", vi: "/vi/co-ban-sai-server/" } },
};

// The display:contents wrapper adds no box; it scopes this page's Kubio CSS (tools/build_global_styles.py).
export default function CoBanSaiServerPage() {
  return (
    <div data-wp-page="co-ban-sai-server" style={{ display: "contents" }}>
      <div className="wp-site-blocks">
        <div className="wp-block wp-block-kubio-header position-relative wp-block-kubio-header__container style-p1i1IV2M0u-container" data-kubio="kubio/header">
          <Navigation />
          <Hero />
        </div>
        <SaiServerContent />
        <Footer />
      </div>
    </div>
  );
}
