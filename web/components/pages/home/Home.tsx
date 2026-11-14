// Homepage content in the site's dark style (/products, /games, /blog): hero, products, games, courses, blog, community.
// Not Kubio markup: styled by Home.module.css; the page keeps the site's Kubio nav and the shared footer.
// Every element has a kebab-case `id` and the same value as a plain class next to its module class;
// list items put the record key in the `id` and keep the shared base class without it.
import { getI18n } from "@/lib/i18n";
import { fill } from "@/lib/fill";
import { linkProducts } from "@/components/SaiServerLink";
import { GAMES, gameHref } from "@/components/pages/games/games";
import { BLOG_POSTS } from "@/components/pages/blog/posts";
import { formatDate, postHref } from "@/components/pages/blog/format";
import s from "./Home.module.css";

/** CSS classes for product names: colour, no underline (saigame.studio/AGENTS.md) */
const NAMES = { server: `${s.nameServer} ${s.serverLink}`, play: `${s.namePlay} ${s.serverLink}` };

/** every "Sai Server" / "Sai Play" in body copy and headings links to its product; each link gets `{idPrefix}-{n}` */
function productLinks(text: string, idPrefix: string) {
  return linkProducts(text, NAMES, true, idPrefix);
}

// An anime traveler pauses to enjoy the journey at sunset.
const HERO_IMAGE = "/images/home/journey-anime.png";
const SERVER_IMAGE = "/images/products/cozy-sai-server.jpg";
const COURSES_IMAGE = "/wp-content/uploads/2025/02/149340-anime-3D-Animation-watermarked-anime-girls-desk-computer-sitting-thigh-highs-room-artwork-digital-art-edited.jpg";

/** `id` is unique on the page; `base` is the shared class (defaults to `id`, differs for list items) */
function Arrow({ id, base = id }: { id: string; base?: string }) {
  return (
    <svg id={id} className={`${base} ${s.arrow}`} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path id={`${id}-path`} className={`${base}-path`} d="M3 8h10M9 4l4 4-4 4" />
    </svg>
  );
}

export default async function Home() {
  const { t, lang } = await getI18n();
  const latestPosts = BLOG_POSTS.slice(0, 3);
  const community = [
    { key: "youtube", name: "YouTube", title: t("Join Us on Youtube"), text: t("Discover new games and interact with our community!"), href: "https://www.youtube.com/@SaiGame" },
    { key: "discord", name: "Discord", title: t("Join our Discord server"), text: t("Stay connected with our community and receive updates on the latest gaming news and events."), href: "https://discord.gg/UU3YarmVde" },
    { key: "github", name: "GitHub", title: t("Follow us on Github"), text: t("Become part of our community and collaborate on projects with us."), href: "https://github.com/SaiGame-studio" },
  ];

  return (
    <div id="home-page" className={`home-page ${s.page}`}>
      <section id="home-hero" className={`home-hero ${s.hero}`} aria-labelledby="home-title">
        <div id="home-hero-artwork" className={`home-hero-artwork ${s.heroArtwork}`}>
          <img id="home-hero-image" className={`home-hero-image ${s.heroImage}`} src={HERO_IMAGE} alt="" width="1672" height="941" decoding="async" fetchPriority="high" />
          <h1 id="home-title" className={`home-title ${s.title}`}>
            {t("It's not the destination,")}{" "}
            <span id="home-title-line" className={`home-title-line ${s.titleLine}`}>
              {fill(t("but the {journey}."), { journey: <span id="home-title-accent" className={`home-title-accent ${s.accent}`}>{t("journey")}</span> })}
            </span>
          </h1>
        </div>
      </section>

      {/* Sai Server comes first, right under the slogan; games follow. Sai Play is left out of the homepage for now. */}
      <section id="home-server" className={`home-server ${s.section} ${s.band}`} aria-labelledby="home-server-title">
        {/* text and button on the left, the tall illustration on the right */}
        <div id="home-server-inner" className={`home-server-inner ${s.wrap} ${s.products}`}>
          <div id="home-server-intro" className="home-server-intro">
            <h2 id="home-server-title" className={`home-server-title ${s.sectionTitle}`}>{productLinks("Sai Server", "home-server-title-link")}</h2>
            <p id="home-server-text" className={`home-server-text ${s.sectionText}`}>
              {productLinks(t("Sai Server is an all-in-one solution that helps game studios manage servers, monitor players, and operate their games professionally, all within a single interface."), "home-server-text-link")}
            </p>
            <p id="home-server-speed" className={`home-server-speed ${s.sectionText}`}>
              {productLinks(t("Sai Server speeds up game development: there is no separate backend to build, so your team spends its time on the game itself."), "home-server-speed-link")}
            </p>
            <div id="home-server-actions" className={`home-server-actions ${s.actions}`}>
              <a id="home-server-explore" className={`home-server-explore ${s.button}`} href="/products/sai-server/">
                {t("Explore Sai Server")} <Arrow id="home-server-explore-arrow" />
              </a>
            </div>
          </div>
          {/* the frame takes the height of the text column; the image covers it */}
          <div id="home-server-media" className={`home-server-media ${s.productMedia}`}>
            <img id="home-server-image" className={`home-server-image ${s.productImage}`} src={SERVER_IMAGE} width={1086} height={1448} alt={t("A developer at a cozy desk with Unity and the Sai Server dashboard on two monitors")} loading="lazy" decoding="async" />
          </div>
        </div>
      </section>

      <section id="home-games" className={`home-games ${s.section}`} aria-labelledby="home-games-title">
        <div id="home-games-inner" className={`home-games-inner ${s.wrap}`}>
          <div id="home-games-head" className={`home-games-head ${s.sectionHead}`}>
            <div id="home-games-intro" className="home-games-intro">
              <h2 id="home-games-title" className={`home-games-title ${s.sectionTitle}`}>{t("Top games we’ve already released.")}</h2>
              <p id="home-games-text" className={`home-games-text ${s.sectionText}`}>
                {t("These are some of the best games we’ve launched so far, now available for everyone to enjoy. Packed with exciting features and immersive gameplay, they showcase our commitment to delivering entertainment to players worldwide.")}
              </p>
            </div>
            <a id="home-games-all" className={`home-games-all ${s.textLink}`} href="/games/">{t("All games")}</a>
          </div>
          <ul id="home-games-list" className={`home-games-list ${s.shelf}`}>
            {GAMES.map((game) => (
              <li key={game.slug} id={`home-game-${game.slug}`} className="home-game">
                <a id={`home-game-link-${game.slug}`} className={`home-game-link ${s.gameLink}`} href={gameHref(game)}>
                  <img id={`home-game-cover-${game.slug}`} className={`home-game-cover ${s.gameCover}`} src={game.cover} alt="" loading="lazy" decoding="async" />
                  <span id={`home-game-platform-${game.slug}`} className={`home-game-platform ${s.gamePlatform}`}>{game.platform}</span>
                  <span id={`home-game-title-${game.slug}`} className={`home-game-title ${s.gameTitle}`}>{t(game.title)}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="home-courses" className={`home-courses ${s.section}`} aria-labelledby="home-courses-title">
        <div id="home-courses-inner" className={`home-courses-inner ${s.wrap} ${s.feature}`}>
          <img id="home-courses-image" className={`home-courses-image ${s.featureImage}`} src={COURSES_IMAGE} alt="" loading="lazy" decoding="async" />
          <div id="home-courses-body" className="home-courses-body">
            <h2 id="home-courses-title" className={`home-courses-title ${s.sectionTitle}`}>{t("Game Dev Courses")}</h2>
            <p id="home-courses-lead" className={`home-courses-lead ${s.featureLead}`}>{t("Unlock Your Creativity and Build Amazing Games")}</p>
            <p id="home-courses-text" className={`home-courses-text ${s.sectionText}`}>
              {t("Are you passionate about creating games? Whether you’re a beginner or an experienced developer,")} {t("Game Dev Courses")} {t("provide you with the skills and knowledge to bring your game ideas to life.")}
            </p>
            <div id="home-courses-actions" className={`home-courses-actions ${s.actions}`}>
              <a id="home-courses-browse" className={`home-courses-browse ${s.button}`} href="/game-courses/">
                {t("Browse game courses")} <Arrow id="home-courses-browse-arrow" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="home-blog" className={`home-blog ${s.section}`} aria-labelledby="home-blog-title">
        <div id="home-blog-inner" className={`home-blog-inner ${s.wrap}`}>
          <div id="home-blog-head" className={`home-blog-head ${s.sectionHead}`}>
            <h2 id="home-blog-title" className={`home-blog-title ${s.sectionTitle}`}>{t("Latest from the blog")}</h2>
            <a id="home-blog-all" className={`home-blog-all ${s.textLink}`} href="/blog/">{t("All posts")}</a>
          </div>
          <ol id="home-blog-posts" className={`home-blog-posts ${s.posts}`}>
            {latestPosts.map((post) => (
              <li key={post.slug} id={`home-post-${post.slug}`} className={`home-post ${s.post}`}>
                <time id={`home-post-date-${post.slug}`} className={`home-post-date ${s.postDate}`} dateTime={post.date}>{formatDate(post.date, lang)}</time>
                <a id={`home-post-title-${post.slug}`} className={`home-post-title ${s.postTitle}`} href={postHref(post)}>{t(post.title)}</a>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="home-community" className={`home-community ${s.section} ${s.band}`} aria-labelledby="home-community-title">
        <div id="home-community-inner" className={`home-community-inner ${s.wrap}`}>
          <h2 id="home-community-title" className={`home-community-title ${s.sectionTitle}`}>{t("Join the community")}</h2>
          <ul id="home-community-list" className={`home-community-list ${s.community}`}>
            {community.map((item) => (
              <li key={item.key} id={`home-channel-${item.key}`} className={`home-channel ${s.channel}`}>
                <div id={`home-channel-body-${item.key}`} className="home-channel-body">
                  <h3 id={`home-channel-title-${item.key}`} className={`home-channel-title ${s.channelTitle}`}>{item.title}</h3>
                  <p id={`home-channel-text-${item.key}`} className={`home-channel-text ${s.channelText}`}>{item.text}</p>
                </div>
                <a id={`home-channel-link-${item.key}`} className={`home-channel-link ${s.channelLink}`} href={item.href} aria-label={item.title}>
                  {item.name} <Arrow id={`home-channel-arrow-${item.key}`} base="home-channel-arrow" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
