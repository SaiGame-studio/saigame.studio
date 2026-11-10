// Social share metadata (Open Graph + Twitter card) for a page, so a pasted link shows a large thumbnail.
// Cards are 1200x630 PNGs built by tools/build-og-images.mjs. URLs are absolute: crawlers do not resolve relative ones.
import type { Metadata } from "next";

export const SITE_URL = "https://saigame.studio";

export function shareMetadata({ path, title, description, image }: { path: string; title: string; description: string; image: string }): Metadata {
  const images = [{ url: `${SITE_URL}${image}`, width: 1200, height: 630, alt: title }];
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { type: "website", url: `${SITE_URL}${path}`, siteName: "SaiGame", title, description, images },
    twitter: { card: "summary_large_image", title, description, images },
  };
}
