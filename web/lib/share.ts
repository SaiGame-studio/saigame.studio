// Page metadata: description, canonical URL, Open Graph and Twitter card, so search engines, AI crawlers
// and pasted links all get the same title, summary and image.
// Cards are 1200x630 PNGs built by tools/build-og-images.mjs. URLs are absolute: crawlers do not resolve relative ones.
import type { Metadata } from "next";
import { getI18n } from "@/lib/i18n";
import { LANGS, localizePath } from "@/lib/lang";

/** the site's one canonical origin (no www); app/layout.tsx uses it as metadataBase */
export const SITE_URL = "https://saigame.studio";
export const SITE_NAME = "SaiGame";
/** site-wide share card for pages without their own */
export const DEFAULT_OG_IMAGE = "/images/og-default.png";

type ShareInput = {
  path: string;
  title: string;
  description: string;
  /** a 1200x630 share card; defaults to the site-wide card */
  image?: string;
  /** set false when the image is not a 1200x630 card (e.g. a game cover or a post's own picture) */
  card?: boolean;
  /** blog posts: Open Graph article with its publish date */
  publishedTime?: string;
};

export const absoluteUrl = (path: string) => (path.startsWith("http") ? path : `${SITE_URL}${path}`);

export async function shareMetadata({ path, title, description, image = DEFAULT_OG_IMAGE, card = true, publishedTime }: ShareInput): Promise<Metadata> {
  const { lang, t } = await getI18n();
  title = t(title);
  description = t(description);
  const localized = localizePath(lang, path);
  const images = [card ? { url: absoluteUrl(image), width: 1200, height: 630, alt: title } : { url: absoluteUrl(image), alt: title }];
  const openGraph = { url: `${SITE_URL}${localized}`, locale: lang === "en" ? "en_US" : lang === "vi" ? "vi_VN" : "ja_JP", siteName: SITE_NAME, title, description, images };
  return {
    title,
    description,
    alternates: { canonical: localized, languages: { ...Object.fromEntries(LANGS.map((code) => [code, absoluteUrl(localizePath(code, path))])), "x-default": absoluteUrl(path) } },
    openGraph: publishedTime ? { ...openGraph, type: "article", publishedTime } : { ...openGraph, type: "website" },
    twitter: { card: "summary_large_image", title, description, images },
  };
}
