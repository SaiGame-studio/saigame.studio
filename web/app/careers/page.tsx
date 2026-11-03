import type { Metadata } from "next";
import TopMenu from "@/components/TopMenu";
import Careers from "@/components/pages/careers/Careers";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Careers – SaiGame",
  description: "Sai Game Studio is hiring Intern Game Devs to make an online game with Sai Server. Remote.",
  alternates: { canonical: "/careers/" },
};

// The Kubio nav keeps the site chrome (CSS copied from the contact page, tools/build_global_styles.py),
// the footer is the shared SiteFooter.
export default function CareersPage() {
  return (
    <div data-wp-page="careers" style={{ display: "contents" }}>
      <div className="wp-site-blocks">
        <div className="wp-block wp-block-kubio-header position-relative wp-block-kubio-header__container style-RW_QAhu4iL-container" data-kubio="kubio/header">
          <TopMenu page="careers" active="careers" />
        </div>
        <Careers />
        <SiteFooter />
      </div>
    </div>
  );
}
