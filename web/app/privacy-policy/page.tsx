import type { Metadata } from "next";
import Navigation from "@/components/pages/privacy-policy/Navigation";
import Hero from "@/components/pages/privacy-policy/Hero";
import PrivacyPolicyContent from "@/components/pages/privacy-policy/PrivacyPolicyContent";
import Spacer from "@/components/pages/privacy-policy/Spacer";
import Footer from "@/components/pages/privacy-policy/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy \u2013 SaiGame",
  alternates: { canonical: "/privacy-policy/" },
};

// The display:contents wrapper adds no box; it scopes this page's Kubio CSS (tools/build_global_styles.py).
export default function PrivacyPolicyPage() {
  return (
    <div data-wp-page="privacy-policy" style={{ display: "contents" }}>
      <div className="wp-site-blocks">
        <div className="wp-block wp-block-kubio-header position-relative wp-block-kubio-header__container style-RW_QAhu4iL-container" data-kubio="kubio/header">
          <Navigation />
          <Hero />
        </div>
        <div className="entry-content wp-block-post-content style--container style-local--container wp-block-kubio-core-post-content__container is-layout-flow wp-block-post-content-is-layout-flow">
          <PrivacyPolicyContent />
          <Spacer />
        </div>
        <Footer />
      </div>
    </div>
  );
}
