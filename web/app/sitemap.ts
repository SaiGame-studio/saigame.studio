import type { MetadataRoute } from "next";
import { LANGS, localizePath } from "@/lib/lang";
import { SITE_URL } from "@/lib/share";
import { BLOG_POSTS } from "@/components/pages/blog/posts";
import { GAMES, gameHref } from "@/components/pages/games/games";

// Every public page. Add a new page here when it is added under app/.
// /sai-server/ is left out: /products/sai-server/ is the main Sai Server page.
const PAGES = [
  "/",
  "/products/",
  "/products/sai-server/",
  "/products/sai-play/",
  "/games/",
  "/game-courses/",
  "/courses/",
  "/blog/",
  "/careers/",
  "/contact-us/",
  "/privacy-policy/",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const latestPost = BLOG_POSTS[0]?.date;
  const pages = [...PAGES, ...GAMES.map(gameHref)].map((path) => ({
    url: `${SITE_URL}${path}`,
    ...(path === "/blog/" && latestPost && { lastModified: latestPost }),
  }));
  const posts = BLOG_POSTS.map((post) => ({ url: `${SITE_URL}/blog/${post.slug}/`, lastModified: post.date }));
  return [...pages, ...posts].flatMap((entry) => {
    const path = entry.url.slice(SITE_URL.length);
    const languages = Object.fromEntries(LANGS.map((lang) => [lang, `${SITE_URL}${localizePath(lang, path)}`]));
    return LANGS.map((lang) => ({ ...entry, url: languages[lang], alternates: { languages: { ...languages, "x-default": entry.url } } }));
  });
}
