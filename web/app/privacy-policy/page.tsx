import type { Metadata } from "next";
import TopMenu from "@/components/TopMenu";
import PrivacyPolicy from "@/components/pages/privacy-policy/PrivacyPolicy";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Privacy Policy – SaiGame",
  alternates: { canonical: "/privacy-policy/" },
};

// The shared TopMenu keeps the site chrome; the content is its own design
// (components/pages/privacy-policy/PrivacyPolicy.tsx) and the footer is the shared SiteFooter.
export default function PrivacyPolicyPage() {
  return (
    <div data-wp-page="privacy-policy" style={{ display: "contents" }}>
      <div className="wp-site-blocks">
        <div className="wp-block wp-block-kubio-header position-relative wp-block-kubio-header__container style-RW_QAhu4iL-container" data-kubio="kubio/header">
          <TopMenu page="privacy-policy" />
        </div>
        <PrivacyPolicy />
        <SiteFooter />
      </div>
    </div>
  );
}
