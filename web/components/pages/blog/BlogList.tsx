// /blog/ content: the newest post as a lead story, the rest as a dated list. Dark style shared with /products.
// Not Kubio markup: styled by Blog.module.css; the page keeps the site's Kubio nav and the shared footer.
import { getI18n } from "@/lib/i18n";
import { BLOG_POSTS } from "./posts";
import { formatDate, postHref as href } from "./format";
import s from "./Blog.module.css";


export default async function BlogList() {
  const { t, lang } = await getI18n();
  const [lead, ...rest] = BLOG_POSTS;

  return (
    <div className={s.page}>
      <section className={`${s.hero} h-navigation-padding`} aria-labelledby="blog-title">
        <div className={s.wrap}>
          <h1 id="blog-title" className={s.title}>{t("Blog")}</h1>
          <p className={s.lead}>{t("Devlogs, lore and tutorials from the SaiGame team.")}</p>

          <article className={lead.image ? s.leadPost : `${s.leadPost} ${s.leadPostText}`}>
            {lead.image && (
              <a className={s.leadMedia} href={href(lead)} tabIndex={-1} aria-hidden="true">
                <img className={s.leadImage} src={lead.image} alt="" decoding="async" />
              </a>
            )}
            <div className={s.leadBody}>
              <time className={s.date} dateTime={lead.date}>{formatDate(lead.date, lang)}</time>
              <h2 className={s.leadTitle}>
                <a className={s.titleLink} href={href(lead)}>{lead.title}</a>
              </h2>
              {lead.excerpt && <p className={s.excerpt}>{lead.excerpt}</p>}
              <a className={s.readMore} href={href(lead)}>
                {t("Read the post")}
                <svg className={s.arrow} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </a>
            </div>
          </article>
        </div>
      </section>

      <section className={s.archive} aria-labelledby="blog-archive">
        <div className={s.wrap}>
          <h2 id="blog-archive" className={s.archiveTitle}>{t("All posts")}</h2>
          <ol className={s.list}>
            {rest.map((post) => (
              <li key={post.slug} className={s.row}>
                <time className={s.rowDate} dateTime={post.date}>{formatDate(post.date, lang)}</time>
                <div className={s.rowBody}>
                  <h3 className={s.rowTitle}>
                    <a className={s.titleLink} href={href(post)}>{post.title}</a>
                  </h3>
                  {post.excerpt && <p className={s.rowExcerpt}>{post.excerpt}</p>}
                </div>
                {post.image ? (
                  <a className={s.thumbLink} href={href(post)} tabIndex={-1} aria-hidden="true">
                    <img className={s.thumb} src={post.image} alt="" loading="lazy" decoding="async" />
                  </a>
                ) : (
                  <span className={s.thumbEmpty} aria-hidden="true" />
                )}
              </li>
            ))}
          </ol>
        </div>
      </section>
    </div>
  );
}
