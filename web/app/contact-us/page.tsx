import type { Metadata } from "next";
import TopMenu from "@/components/TopMenu";
import ContactContent from "@/components/pages/contact-us/ContactContent";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Contact Us – SaiGame",
  description: "Contact SaiGame by email or on Discord.",
  alternates: { canonical: "/contact-us/" },
};

// The Kubio nav keeps the site chrome (CSS copied from the products page, tools/build_global_styles.py),
// the footer is the shared SiteFooter.
export default function ContactUsPage() {
  return (
    <div data-wp-page="contact-us" style={{ display: "contents" }}>
      <div className="wp-site-blocks">
        <div className="wp-block wp-block-kubio-header position-relative wp-block-kubio-header__container style-RW_QAhu4iL-container" data-kubio="kubio/header">
          <TopMenu page="contact-us" />
        </div>
        <ContactContent />
        <SiteFooter />
      </div>
    </div>
  );
}
