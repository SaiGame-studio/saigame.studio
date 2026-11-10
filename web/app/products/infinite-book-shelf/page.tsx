import type { Metadata } from "next";
import TopMenu from "@/components/TopMenu";
import InfiniteBookShelf from "@/components/pages/infinite-book-shelf/InfiniteBookShelf";
import { COPY, IMAGE_DIR, OG_IMAGE } from "@/components/pages/infinite-book-shelf/content";
import SiteFooter from "@/components/SiteFooter";
import { getI18n } from "@/lib/i18n";

const SITE_URL = "https://saigame.studio";
const PATH = "/products/infinite-book-shelf/";
// #14 social share card: only advertised once the file exists
const ogImages = OG_IMAGE.ready
  ? [{ url: `${SITE_URL}${IMAGE_DIR}/${OG_IMAGE.file}`, width: OG_IMAGE.width, height: OG_IMAGE.height }]
  : undefined;

// title and description follow the visitor's language, like the page content
export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getI18n();
  const title = t(COPY.metaTitle);
  const description = t(COPY.metaDescription);
  return {
    title,
    description,
    alternates: { canonical: PATH },
    openGraph: { type: "website", url: `${SITE_URL}${PATH}`, siteName: "SaiGame", title, description, images: ogImages },
    twitter: { card: OG_IMAGE.ready ? "summary_large_image" : "summary", title, description, images: ogImages },
  };
}

// data-wp-page gives the page its own slug (off-canvas menu cleanup in KubioScripts); data-wp-owner="products"
// borrows the /products page's scoped Kubio CSS for the header chrome, since this page has no styles.json of its own.
export default function InfiniteBookShelfPage() {
  return (
    <div data-wp-page="infinite-book-shelf" style={{ display: "contents" }}>
      <div data-wp-owner="products" style={{ display: "contents" }}>
        <div className="wp-site-blocks">
          <div className="wp-block wp-block-kubio-header position-relative wp-block-kubio-header__container style-RW_QAhu4iL-container" data-kubio="kubio/header">
            <TopMenu page="infinite-book-shelf" active="products" />
          </div>
          <InfiniteBookShelf />
          <SiteFooter />
        </div>
      </div>
    </div>
  );
}
