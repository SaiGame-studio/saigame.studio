// Homepage content in the site's dark style (/products, /games, /blog): hero, games, products, courses, blog, community.
// Not Kubio markup: styled by Home.module.css; the page keeps the site's Kubio nav and the shared footer.
import { getI18n } from "@/lib/i18n";
import { fill } from "@/lib/fill";
import { linkSaiServer } from "@/components/SaiServerLink";
import { GAMES, gameHref } from "@/components/pages/games/games";
import { BLOG_POSTS } from "@/components/pages/blog/posts";
import { formatDate, postHref } from "@/components/pages/blog/format";
import s from "./Home.module.css";

const HERO_IMAGE = "/wp-content/uploads/2025/03/saisaga-scaled-1.jpg";
const COURSES_IMAGE = "/wp-content/uploads/2025/02/149340-anime-3D-Animation-watermarked-anime-girls-desk-computer-sitting-thigh-highs-room-artwork-digital-art-edited.jpg";

function Arrow() {
  return (
    <svg className={s.arrow} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 8h10M9 4l4 4-4 4" />
    </svg>
  );
}

export default async function Home() {
  const { t, lang } = await getI18n();
  const latestPosts = BLOG_POSTS.slice(0, 3);
  const community = [
    { name: "YouTube", title: t("Join Us on Youtube"), text: t("Discover new games and interact with our community!"), href: "https://www.youtube.com/@SaiGame" },
    { name: "Discord", title: t("Join our Discord server"), text: t("Stay connected with our community and receive updates on the latest gaming news and events."), href: "https://discord.gg/UU3YarmVde" },
    { name: "GitHub", title: t("Follow us on Github"), text: t("Become part of our community and collaborate on projects with us."), href: "https://github.com/SaiGame-studio" },
  ];

  return (
    <div className={s.page}>
      <section className={`${s.hero} h-navigation-padding`} aria-labelledby="home-title">
        <img className={s.heroImage} src={HERO_IMAGE} alt="" decoding="async" fetchPriority="high" />
        <div className={`${s.wrap} ${s.heroInner}`}>
          <h1 id="home-title" className={s.title}>
            {t("It's not the destination,")} <span className={s.titleLine}>{fill(t("but the {journey}."), { journey: <span className={s.accent}>{t("journey")}</span> })}</span>
          </h1>
          <p className={s.lead}>{linkSaiServer(t("SaiGame makes games, teaches game development, and builds Sai Server, the platform to run them."))}</p>
          <div className={s.actions}>
            <a className={s.button} href="/games/">
              {t("Explore our games")} <Arrow />
            </a>
            <a className={s.textLink} href="/products/">{t("Discover Sai Server & Sai Play")}</a>
          </div>
        </div>
      </section>

      <section className={s.section} aria-labelledby="home-games">
        <div className={s.wrap}>
          <div className={s.sectionHead}>
            <div>
              <h2 id="home-games" className={s.sectionTitle}>{t("Top games we’ve already released.")}</h2>
              <p className={s.sectionText}>{t("These are some of the best games we’ve launched so far, now available for everyone to enjoy. Packed with exciting features and immersive gameplay, they showcase our commitment to delivering entertainment to players worldwide.")}</p>
            </div>
            <a className={s.textLink} href="/games/">{t("All games")}</a>
          </div>
          <ul className={s.shelf}>
            {GAMES.map((game) => (
              <li key={game.slug}>
                <a className={s.gameLink} href={gameHref(game)}>
                  <img className={s.gameCover} src={game.cover} alt="" loading="lazy" decoding="async" />
                  <span className={s.gamePlatform}>{game.platform}</span>
                  <span className={s.gameTitle}>{t(game.title)}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className={`${s.section} ${s.band}`} aria-labelledby="home-products">
        <div className={`${s.wrap} ${s.split}`}>
          <h2 id="home-products" className={s.sectionTitle}>
            <span className={s.nameServer}>Sai Server</span> & <span className={s.namePlay}>Sai Play</span>
          </h2>
          <div>
            <p className={s.sectionText}>{linkSaiServer(t("Sai Server runs your game. Sai Play gives your players one account and one sGem balance across every game on the platform."))}</p>
            <div className={s.actions}>
              <a className={s.button} href="/products/">
                {t("Discover our products")} <Arrow />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className={s.section} aria-labelledby="home-courses">
        <div className={`${s.wrap} ${s.feature}`}>
          <img className={s.featureImage} src={COURSES_IMAGE} alt="" loading="lazy" decoding="async" />
          <div>
            <h2 id="home-courses" className={s.sectionTitle}>{t("Game Dev Courses")}</h2>
            <p className={s.featureLead}>{t("Unlock Your Creativity and Build Amazing Games")}</p>
            <p className={s.sectionText}>
              {t("Are you passionate about creating games? Whether you’re a beginner or an experienced developer,")} {t("Game Dev Courses")} {t("provide you with the skills and knowledge to bring your game ideas to life.")}
            </p>
            <div className={s.actions}>
              <a className={s.button} href="/game-courses/">
                {t("Browse game courses")} <Arrow />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className={s.section} aria-labelledby="home-blog">
        <div className={s.wrap}>
          <div className={s.sectionHead}>
            <h2 id="home-blog" className={s.sectionTitle}>{t("Latest from the blog")}</h2>
            <a className={s.textLink} href="/blog/">{t("All posts")}</a>
          </div>
          <ol className={s.posts}>
            {latestPosts.map((post) => (
              <li key={post.slug} className={s.post}>
                <time className={s.postDate} dateTime={post.date}>{formatDate(post.date, lang)}</time>
                <a className={s.postTitle} href={postHref(post)}>{post.title}</a>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className={`${s.section} ${s.band}`} aria-labelledby="home-community">
        <div className={s.wrap}>
          <h2 id="home-community" className={s.sectionTitle}>{t("Join the community")}</h2>
          <ul className={s.community}>
            {community.map((item) => (
              <li key={item.name} className={s.channel}>
                <div>
                  <h3 className={s.channelTitle}>{item.title}</h3>
                  <p className={s.channelText}>{item.text}</p>
                </div>
                <a className={s.channelLink} href={item.href} aria-label={item.title}>
                  {item.name} <Arrow />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
