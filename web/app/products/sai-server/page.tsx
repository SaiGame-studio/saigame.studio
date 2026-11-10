import type { Metadata } from "next";
import TopMenu from "@/components/TopMenu";
import SaiServerProduct from "@/components/pages/product-sai-server/SaiServerProduct";
import { COPY } from "@/components/pages/product-sai-server/content";
import SiteFooter from "@/components/SiteFooter";
import { getI18n } from "@/lib/i18n";

const SITE_URL = "https://saigame.studio";
const PATH = "/products/sai-server/";

// title and description follow the visitor's language, like the page content
export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getI18n();
  const title = t(COPY.metaTitle);
  const description = t(COPY.metaDescription);
  return {
    title,
    description,
    alternates: { canonical: PATH },
    openGraph: { type: "website", url: `${SITE_URL}${PATH}`, siteName: "SaiGame", title, description },
    twitter: { card: "summary", title, description },
  };
}

// Same chrome as /products/infinite-book-shelf: data-wp-page gives the page its own slug (off-canvas menu cleanup in
// KubioScripts); data-wp-owner="products" borrows the /products page's scoped Kubio CSS for the header.
export default function Page() {
  return (
    <div data-wp-page="products-sai-server" style={{ display: "contents" }}>
      <div data-wp-owner="products" style={{ display: "contents" }}>
        <div className="wp-site-blocks">
          <div className="wp-block wp-block-kubio-header position-relative wp-block-kubio-header__container style-RW_QAhu4iL-container" data-kubio="kubio/header">
            <TopMenu page="products-sai-server" active="products" />
          </div>
          <SaiServerProduct />
          <SiteFooter />
        </div>
      </div>
    </div>
  );
}
