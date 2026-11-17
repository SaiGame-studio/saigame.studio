// schema.org structured data (JSON-LD), rendered by components/JsonLd.tsx.
// It tells Google and AI answer engines who SaiGame is and what each page is: a game, a post, a product.
// Sai Server is the studio's main product: the organization points to it and it gets the richest description.
// Text is the English source: crawlers see the English site (the language is a client choice, not part of the URL).
import { SITE_NAME, SITE_URL, absoluteUrl } from "@/lib/share";
import type { Game } from "@/components/pages/games/games";
import type { BlogPost } from "@/components/pages/blog/posts";
import { COPY, IMAGE_DIR, SHOTS, STUDIO_URL, TIERS, USD_PER_SCOIN } from "@/components/pages/product-sai-server/content";
import { SDKS, TUTORIAL_URL } from "@/components/pages/product-landing/shared";

const ORG_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;
const SAI_SERVER_PATH = "/products/sai-server/";
const SAI_SERVER_ID = `${SITE_URL}${SAI_SERVER_PATH}#software`;
const LOGO = "/wp-content/uploads/2025/02/SAI_no_light-300x300.png";

const org = { "@id": ORG_ID };

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": ORG_ID,
      name: SITE_NAME,
      alternateName: "Sai Game",
      url: `${SITE_URL}/`,
      logo: absoluteUrl(LOGO),
      email: "simon@saigame.studio",
      description: "SaiGame is a game studio that builds Sai Server, a game backend platform with accounts, cloud save, inventory, in-game economy, quests, leaderboards and server-side Lua, and makes its own games on it.",
      makesOffer: { "@type": "Offer", itemOffered: { "@id": SAI_SERVER_ID } },
      sameAs: ["https://www.youtube.com/@SaiGame", "https://github.com/SaiGame-studio", "https://saigame.itch.io"],
    },
    {
      "@type": "WebSite",
      "@id": WEBSITE_ID,
      name: SITE_NAME,
      url: `${SITE_URL}/`,
      inLanguage: "en",
      publisher: org,
    },
  ],
};

/** Home > ... > current page; each crumb is [name, path] */
export function breadcrumbJsonLd(crumbs: [string, string][]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [["Home", "/"] as [string, string], ...crumbs].map(([name, path], i) => ({
      "@type": "ListItem",
      position: i + 1,
      name,
      item: absoluteUrl(path),
    })),
  };
}

export function videoGameJsonLd(game: Game, path: string, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    name: game.title,
    url: absoluteUrl(path),
    description,
    image: absoluteUrl(game.cover),
    gamePlatform: game.platform,
    keywords: game.tags.map((tag) => tag.title).join(", "),
    sameAs: [game.store.url],
    author: org,
    publisher: org,
  };
}

export function blogPostingJsonLd(post: BlogPost, description: string) {
  const url = absoluteUrl(`/blog/${post.slug}/`);
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description,
    url,
    mainEntityOfPage: url,
    datePublished: post.date,
    ...(post.image && { image: absoluteUrl(post.image) }),
    author: org,
    publisher: org,
  };
}

export function softwareJsonLd(app: { name: string; description: string; path: string; url?: string; category: string; image: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: app.name,
    description: app.description,
    url: app.url ?? absoluteUrl(app.path),
    image: absoluteUrl(app.image),
    applicationCategory: app.category,
    operatingSystem: "Web",
    publisher: org,
  };
}

/** Sai Server as a product: features, free base and Materia pricing come from the /products/sai-server/ copy */
export function saiServerJsonLd() {
  const features = COPY.features.groups.flatMap((group) => group.items.map((item) => `${item.name}: ${item.text}`));
  const prices = TIERS.map((tier) => tier.price * USD_PER_SCOIN);
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": SAI_SERVER_ID,
    name: "Sai Server",
    alternateName: "SaiServer",
    description: `Sai Server is a game backend platform. ${COPY.metaDescription}`,
    url: absoluteUrl(SAI_SERVER_PATH),
    applicationCategory: "DeveloperApplication",
    applicationSubCategory: "Game backend (BaaS) and LiveOps platform",
    operatingSystem: "Web",
    image: absoluteUrl(`${IMAGE_DIR}/og-image.png`),
    screenshot: Object.values(SHOTS).map((shot) => ({ "@type": "ImageObject", url: absoluteUrl(`${IMAGE_DIR}/${shot.file}`), caption: shot.alt })),
    featureList: [...COPY.facts.items, ...features],
    installUrl: STUDIO_URL,
    softwareHelp: { "@type": "CreativeWork", url: TUTORIAL_URL },
    sameAs: ["https://server.saigame.studio/why-sai-server", ...SDKS.map((sdk) => sdk.href)],
    offers: [
      { "@type": "Offer", name: "Free base", price: 0, priceCurrency: "USD", description: "Included in every game." },
      {
        "@type": "AggregateOffer",
        name: "Materia capacity stacks",
        description: "Each stack adds capacity on top of the free base for one month, paid in sCoin (100 sCoin = $1).",
        lowPrice: Math.min(...prices),
        highPrice: Math.max(...prices),
        priceCurrency: "USD",
        offerCount: TIERS.length,
      },
    ],
    author: org,
    publisher: org,
  };
}
