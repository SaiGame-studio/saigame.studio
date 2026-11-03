import type { Metadata } from "next";
import Navigation from "@/components/pages/products/Navigation";
import ProductsJourney from "@/components/pages/products/ProductsJourney";
import Footer from "@/components/pages/products/Footer";

export const metadata: Metadata = {
  title: "Products – SaiGame",
  description: "Sai Server runs your game. Sai Play gives your players one account and one sGem balance across every game on the platform.",
  alternates: { canonical: "/products/" },
};

// The Kubio nav and footer keep the site chrome (CSS copied from the games page, tools/build_global_styles.py);
// the content between them is its own design (components/pages/products/ProductsJourney.tsx).
export default function ProductsPage() {
  return (
    <div data-wp-page="products" style={{ display: "contents" }}>
      <div className="wp-site-blocks">
        <div className="wp-block wp-block-kubio-header position-relative wp-block-kubio-header__container style-RW_QAhu4iL-container" data-kubio="kubio/header">
          <Navigation />
        </div>
        <ProductsJourney />
        <Footer />
      </div>
    </div>
  );
}
