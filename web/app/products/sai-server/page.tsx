import type { Metadata } from "next";
import TopMenu from "@/components/TopMenu";
import SaiServerProduct from "@/components/pages/product-sai-server/SaiServerProduct";
import { COPY } from "@/components/pages/product-sai-server/content";
import SiteFooter from "@/components/SiteFooter";
import { getI18n } from "@/lib/i18n";
import { shareMetadata } from "@/lib/share";

// title and description follow the visitor's language, like the page content; the share card is tools/build-og-images.mjs
export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getI18n();
  return shareMetadata({ path: "/products/sai-server/", title: t(COPY.metaTitle), description: t(COPY.metaDescription), image: "/images/products/sai-server/og-image.png" });
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
