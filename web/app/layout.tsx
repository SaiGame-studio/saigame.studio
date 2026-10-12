import type { Metadata } from "next";
import Script from "next/script";
import KubioScripts from "@/components/KubioScripts";
import styles from "./wp-styles.json";
import meta from "./wp-meta.json";

export const metadata: Metadata = {
  title: "SaiGame",
  icons: {
    icon: [
      { url: "/wp-content/uploads/2025/02/SAI_no_light-100x100.png", sizes: "32x32" },
      { url: "/wp-content/uploads/2025/02/SAI_no_light-300x300.png", sizes: "192x192" },
    ],
    apple: "/wp-content/uploads/2025/02/SAI_no_light-300x300.png",
  },
  alternates: {
    canonical: "/",
    languages: { "en-US": "/", vi: "/vi/" },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={meta.html.lang} id={meta.html.id} suppressHydrationWarning>
      <head>
        {/* Same stylesheets, same cascade order as the original WordPress page */}
        {styles.map((s) => (
          <link key={s.href} rel="stylesheet" href={s.href} media={s.media} />
        ))}
        <Script src="/js/kubio-attachment-check.js" strategy="beforeInteractive" />
      </head>
      <body className={meta.bodyClass} suppressHydrationWarning>
        <div id="page-top" tabIndex={-1}></div>
        {children}
        <KubioScripts />
      </body>
    </html>
  );
}
