import type { Metadata } from "next";
import Navigation from "@/components/pages/products/Navigation";
import Hero from "@/components/pages/products/Hero";
import ProductCard, { type Product } from "@/components/pages/products/ProductCard";
import Footer from "@/components/pages/products/Footer";
import { getI18n } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Products – SaiGame",
  alternates: { canonical: "/products/" },
};

// Same layout as /games: one section per product. Kubio CSS is a copy of the games page (tools/build_global_styles.py).
export default async function ProductsPage() {
  const { t } = await getI18n();
  const products: Product[] = [
    {
      id: "product-sai-server",
      label: t("For game studios"),
      title: "Sai Server",
      text: t("Sai Server is an all-in-one solution that helps game studios manage servers, monitor players, and operate their games professionally, all within a single interface."),
      href: "/sai-server/",
      buttonText: t("Learn more"),
      image: { src: "/wp-content/uploads/2026/04/Gemini_Generated_Image_vmtnw6vmtnw6vmtn.png", width: 1024, height: 1024 },
    },
    {
      id: "product-sai-play",
      label: t("For players"),
      title: "Sai Play",
      text: t("Sai Play is the home for players: one Sai account to sign in, follow the games you have played and manage your sGem balance."),
      href: "https://play.saigame.studio/",
      buttonText: t("Visit Sai Play"),
      image: { src: "/wp-content/uploads/2025/12/LogoSaiGame_shadown.png", width: 549, height: 425 },
    },
  ];
  return (
    <div data-wp-page="products" style={{ display: "contents" }}>
      <div className="wp-site-blocks">
        <div className="wp-block wp-block-kubio-header position-relative wp-block-kubio-header__container style-RW_QAhu4iL-container" data-kubio="kubio/header">
          <Navigation />
          <Hero />
        </div>
        <div className="entry-content wp-block-post-content style--container style-local--container wp-block-kubio-core-post-content__container is-layout-flow wp-block-post-content-is-layout-flow">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <Footer />
      </div>
    </div>
  );
}
