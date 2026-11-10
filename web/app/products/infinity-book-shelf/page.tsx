import type { Metadata } from "next";
import TopMenu from "@/components/TopMenu";
import InfinityBookShelf from "@/components/pages/infinity-book-shelf/InfinityBookShelf";
import { COPY, IMAGE_DIR, OG_IMAGE } from "@/components/pages/infinity-book-shelf/content";
import SiteFooter from "@/components/SiteFooter";

const SITE_URL = "https://saigame.studio";
const PATH = "/products/infinity-book-shelf/";
// #14 social share card: only advertised once the file exists
const ogImages = OG_IMAGE.ready
  ? [{ url: `${SITE_URL}${IMAGE_DIR}/${OG_IMAGE.file}`, width: OG_IMAGE.width, height: OG_IMAGE.height }]
  : undefined;

export const metadata: Metadata = {
  title: COPY.metaTitle,
  description: COPY.metaDescription,
  alternates: { canonical: PATH },
  openGraph: {
    type: "website",
    url: `${SITE_URL}${PATH}`,
    siteName: "SaiGame",
    title: COPY.metaTitle,
    description: COPY.metaDescription,
    images: ogImages,
  },
  twitter: {
    card: OG_IMAGE.ready ? "summary_large_image" : "summary",
    title: COPY.metaTitle,
    description: COPY.metaDescription,
    images: ogImages,
  },
};

// data-wp-page gives the page its own slug (off-canvas menu cleanup in KubioScripts); data-wp-owner="products"
// borrows the /products page's scoped Kubio CSS for the header chrome, since this page has no styles.json of its own.
export default function InfinityBookShelfPage() {
  return (
    <div data-wp-page="infinity-book-shelf" style={{ display: "contents" }}>
      <div data-wp-owner="products" style={{ display: "contents" }}>
        <div className="wp-site-blocks">
          <div className="wp-block wp-block-kubio-header position-relative wp-block-kubio-header__container style-RW_QAhu4iL-container" data-kubio="kubio/header">
            <TopMenu page="infinity-book-shelf" active="products" />
          </div>
          <InfinityBookShelf />
          <SiteFooter />
        </div>
      </div>
    </div>
  );
}
