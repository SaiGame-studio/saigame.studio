import type { BlogPost } from "./posts";
import { LOCALE, type Lang } from "@/lib/lang";

/** a post date in the visitor's language, e.g. "1 February 2026" / "1 tháng 2, 2026" */
export function formatDate(iso: string, lang: string) {
  return new Intl.DateTimeFormat(lang === "en" ? "en-GB" : LOCALE[lang as Lang], { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" }).format(new Date(iso));
}

export const postHref = (post: BlogPost) => `/blog/${post.slug}/`;
