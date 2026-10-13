import type { Metadata } from "next";
import Script from "next/script";
import KubioScripts from "@/components/KubioScripts";

export const metadata: Metadata = {
  title: "SaiGame",
  icons: {
    icon: [
      { url: "/wp-content/uploads/2025/02/SAI_no_light-100x100.png", sizes: "32x32" },
      { url: "/wp-content/uploads/2025/02/SAI_no_light-300x300.png", sizes: "192x192" },
    ],
    apple: "/wp-content/uploads/2025/02/SAI_no_light-300x300.png",
  },
};

// Stylesheets are rendered per page (see components/WpStyles.tsx): every WordPress page
// has its own inline Kubio CSS.
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-US" id="kubio" suppressHydrationWarning>
      <head>
        <Script src="/js/kubio-attachment-check.js" strategy="beforeInteractive" />
      </head>
      <body className="wp-singular page wp-custom-logo wp-theme-kubio theme-kubio woocommerce-js translatepress-en_US" suppressHydrationWarning>
        <div id="page-top" tabIndex={-1}></div>
        {children}
        <KubioScripts />
      </body>
    </html>
  );
}
