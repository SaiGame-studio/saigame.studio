import type { Metadata } from "next";
import TopMenu from "@/components/TopMenu";
import JsonLd from "@/components/JsonLd";
import InfiniteBookShelf from "@/components/pages/infinite-bookshelf/InfiniteBookShelf";
import { COPY, IMAGE_DIR, OG_IMAGE } from "@/components/pages/infinite-bookshelf/content";
import { getGame } from "@/components/pages/games/games";
import SiteFooter from "@/components/SiteFooter";
import { getI18n } from "@/lib/i18n";
import { shareMetadata } from "@/lib/share";
import { breadcrumbJsonLd, videoGameJsonLd } from "@/lib/structured-data";

const PATH = "/products/infinite-bookshelf/";
const game = getGame("infinite-bookshelf");

// title and description follow the visitor's language, like the page content; the share card is tools/build-og-images.mjs
export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getI18n();
  return shareMetadata({ path: PATH, title: t(COPY.metaTitle), description: t(COPY.metaDescription), image: `${IMAGE_DIR}/${OG_IMAGE.file}` });
}

// data-wp-page gives the page its own slug (off-canvas menu cleanup in KubioScripts); data-wp-owner="products"
// borrows the /products page's scoped Kubio CSS for the header chrome, since this page has no styles.json of its own.
export default function InfiniteBookShelfPage() {
  return (
    <div data-wp-page="infinite-bookshelf" style={{ display: "contents" }}>
      <div data-wp-owner="products" style={{ display: "contents" }}>
        <JsonLd data={videoGameJsonLd(game, PATH, game.description)} />
        <JsonLd data={breadcrumbJsonLd([["Games", "/games/"], [game.title, PATH]])} />
        <div className="wp-site-blocks">
          <div className="wp-block wp-block-kubio-header position-relative wp-block-kubio-header__container style-RW_QAhu4iL-container" data-kubio="kubio/header">
            <TopMenu page="infinite-bookshelf" active="games" />
          </div>
          <InfiniteBookShelf />
          <SiteFooter />
        </div>
      </div>
    </div>
  );
}
