// Metadata of a /blog/<slug>/ page, built from its entry in posts.ts. The post's JSON-LD is rendered by BlogPostLayout.
import type { Metadata } from "next";
import { getI18n } from "@/lib/i18n";
import { shareMetadata } from "@/lib/share";
import { BLOG_POSTS } from "./posts";

export const getPost = (slug: string) => BLOG_POSTS.find((post) => post.slug === slug)!;

/** title and description follow the visitor's language, like the post content */
export async function postMetadata(slug: string): Promise<Metadata> {
  const { t } = await getI18n();
  const post = getPost(slug);
  return shareMetadata({
    path: `/blog/${slug}/`,
    title: `${t(post.title)} – SaiGame`,
    description: t(post.description),
    // a post's own picture is not a 1200x630 card; posts without one use the site card
    ...(post.image && { image: post.image, card: false }),
    publishedTime: post.date,
  });
}
