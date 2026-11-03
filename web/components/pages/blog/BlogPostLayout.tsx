// Shared layout for /blog/<slug>/ posts: same dark style as the /blog/ list.
// The post body (components/pages/post-*/PostBody.tsx) is passed as children and styled by BlogPost.module.css.
import { getI18n } from "@/lib/i18n";
import { BLOG_POSTS } from "./posts";
import { formatDate, postHref } from "./format";
import s from "./BlogPost.module.css";

function Arrow({ back = false }: { back?: boolean }) {
  return (
    <svg className={s.arrow} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={back ? "M13 8H3M7 4 3 8l4 4" : "M3 8h10M9 4l4 4-4 4"} />
    </svg>
  );
}

export default async function BlogPostLayout({ slug, children }: { slug: string; children: React.ReactNode }) {
  const { t, lang } = await getI18n();
  const index = BLOG_POSTS.findIndex((post) => post.slug === slug);
  const post = BLOG_POSTS[index];
  // the list is newest first: "newer" is the previous entry, "older" the next one
  const newer = BLOG_POSTS[index - 1];
  const older = BLOG_POSTS[index + 1];

  return (
    <div className={s.page}>
      <article className="h-navigation-padding" aria-labelledby="post-title">
        <header className={`${s.wrap} ${s.header}`}>
          <a className={s.back} href="/blog/">
            <Arrow back /> Blog
          </a>
          <time className={s.date} dateTime={post.date}>{formatDate(post.date, lang)}</time>
          <h1 id="post-title" className={s.title}>{post.title}</h1>
        </header>

        {post.image && !post.video && (
          <div className={`${s.wrap} ${s.cover}`}>
            <img className={s.coverImage} src={post.image} alt="" decoding="async" />
          </div>
        )}

        <div className={`${s.wrap} ${s.body}`}>{children}</div>
      </article>

      {(newer || older) && (
        <nav className={s.pager} aria-label={t("More posts")}>
          <div className={`${s.wrap} ${s.pagerGrid}`}>
            {older ? (
              <a className={s.pagerLink} href={postHref(older)}>
                <span className={s.pagerLabel}><Arrow back /> {t("Older post")}</span>
                <span className={s.pagerTitle}>{older.title}</span>
              </a>
            ) : <span />}
            {newer && (
              <a className={`${s.pagerLink} ${s.pagerNext}`} href={postHref(newer)}>
                <span className={s.pagerLabel}>{t("Newer post")} <Arrow /></span>
                <span className={s.pagerTitle}>{newer.title}</span>
              </a>
            )}
          </div>
        </nav>
      )}
    </div>
  );
}
