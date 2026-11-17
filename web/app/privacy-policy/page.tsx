import type { Metadata } from "next";
import TopMenu from "@/components/TopMenu";
import PrivacyPolicy from "@/components/pages/privacy-policy/PrivacyPolicy";
import SiteFooter from "@/components/SiteFooter";
import { shareMetadata } from "@/lib/share";

export const metadata: Metadata = shareMetadata({
  path: "/privacy-policy/",
  title: "Privacy Policy – SaiGame",
  description: "How SaiGame collects, uses, shares and protects personal data on its website, in its games and online services, and in its community and courses.",
});

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
