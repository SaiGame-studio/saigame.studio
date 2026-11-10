// /products content: the path from a studio's game on Sai Server to the player's account on Sai Play.
// Not Kubio markup: styled by Products.module.css; the page keeps the site's Kubio nav and footer around it.
// The sections below the hero continue the three steps, each opening on its step's rule colour.
import ImageLightbox from "@/components/ImageLightbox";
import { getI18n } from "@/lib/i18n";
import { fill } from "@/lib/fill";
import { linkProducts, SAI_PLAY_URL, SAI_SERVER_URL } from "@/components/SaiServerLink";
import s from "./Products.module.css";

const TUTORIAL_URL = "https://server.saigame.studio/tutorials/basic/get-started/create-a-studio";
// client SDKs for building games on Sai Server; more engines will be added here
const SDKS = [{ name: "Unity SDK", href: "https://github.com/SaiGame-studio/ss-unity/releases" }];
// sample balance for the illustrative Sai Play panel
const SAMPLE_SGEM = "1,250";
// games built on Sai Server, first shipped first; each links to its tech showcase page
const SHOWCASES = [
  {
    name: "Infinite Book Shelf",
    href: "/products/infinite-book-shelf/",
    image: { src: "/images/products/infinite-book-shelf/hero.webp", width: 1400, height: 788 },
    alt: "Wooden bookshelves packed with colored books, flowers blooming above each sorted compartment, and a magic wand cursor picking up a yellow book",
    text: "A 3D puzzle for browser, PC and Android. Sign-in and cloud saves run on Sai Server, so every book, shelf and flower is kept across devices.",
    tags: ["Unity 6", "WebGL · PC · Android", "Google sign-in"],
  },
];

/** CSS classes for product names on /products: title colours, no underline (saigame.studio/AGENTS.md) */
const NAMES = {
  server: `${s.productName} ${s.nameServer} ${s.serverLink}`,
  play: `${s.productName} ${s.namePlay} ${s.serverLink}`,
};

/** every "Sai Server" / "Sai Play" in body copy and headings links to its product */
function productLinks(text: string) {
  return linkProducts(text, NAMES);
}

function Arrow() {
  return (
    <svg className={s.arrow} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 8h10M9 4l4 4-4 4" />
    </svg>
  );
}

/** product names inside an existing link: coloured, kept whole, no nested link */
function keepNames(text: string) {
  return linkProducts(text, NAMES, false);
}

export default async function ProductsJourney() {
  const { t } = await getI18n();
  const steps = [
    { id: "step-sai-server", title: t("Set up your studio on Sai Server"), text: t("Manage your studio, team, games and game servers from one console.") },
    { id: "step-sai-build", title: t("Build your game, deploy to Sai Server"), text: t("Make your game client with our SDK, then deploy its backend logic to Sai Server.") },
    { id: "step-sai-play", title: t("Players land on Sai Play"), text: t("Players sign in with one Sai account and see their games and sGem balance in one place.") },
  ];
  const serverPoints = [t("Studios and team members"), t("Games and their game servers"), t("Docs and step-by-step tutorials")];
  const playPoints = [t("Player accounts and sGem balance"), t("Game shops"), t("In-app purchases (IAP) for your game")];

  return (
    <div className={s.page}>
      <ImageLightbox closeLabel={t("Close")} />
      <section className={`${s.hero} h-navigation-padding`} aria-labelledby="products-title">
        <div className={`${s.wrap} ${s.heroInner}`}>
          <div className={s.heroTop}>
          <div>
          <h1 id="products-title" className={s.title}>
            <span className={s.titleLine}>
              {fill(t("Build on {server}."), { server: <a className={NAMES.server} href={SAI_SERVER_URL}>Sai Server</a> })}
            </span>
            <span className={s.titleLine}>
              {fill(t("{players} land on {play}."), {
                players: <span className={`${s.productName} ${s.namePlayers}`}>{t("Your players")}</span>,
                play: <a className={NAMES.play} href={SAI_PLAY_URL}>Sai Play</a>,
              })}
            </span>
          </h1>
          <p className={s.lead}>{productLinks(t("Sai Server runs your game. Sai Play gives your players one account and one sGem balance across every game on the platform."))}</p>
          </div>
          <figure className={`${s.media} ${s.heroMedia}`}>
            <img data-zoom tabIndex={0} className={s.image} src="/images/products/cozy-sai-server.jpg" width={1086} height={1448} alt={t("A developer at a cozy desk with Unity and the Sai Server dashboard on two monitors")} decoding="async" />
          </figure>
          </div>
          <ol className={s.steps}>
            {steps.map((step, i) => (
              <li key={step.id} className={s.step}>
                <a className={s.stepLink} href={`#${step.id}`}>
                  <span className={s.stepNumber}>{i + 1}</span>
                  <h2 className={s.stepTitle}>{keepNames(step.title)}</h2>
                  <p className={s.stepText}>{step.text}</p>
                </a>
              </li>
            ))}
          </ol>
          <div className={s.actions}>
            <a className={s.button} href={SAI_SERVER_URL}>
              {t("Start with Sai Server")} <Arrow />
            </a>
            <a className={s.button} href={SAI_PLAY_URL}>
              {t("Visit Sai Play")}
            </a>
          </div>
        </div>
      </section>

      <section id="step-sai-server" className={`${s.stage} ${s.stage1}`} aria-labelledby="product-sai-server">
        <div className={`${s.wrap} ${s.stageGrid}`}>
          <div>
            <h2 id="product-sai-server" className={s.productTitle}>{productLinks("Sai Server")}</h2>
            <p className={s.productText}>{productLinks(t("Sai Server gives your studio one console for your team, your games and the game servers they run on."))}</p>
            <ul className={s.list}>
              {serverPoints.map((point) => (
                <li key={point} className={s.listItem}>{point}</li>
              ))}
            </ul>
            <a className={s.button} href={SAI_SERVER_URL}>
              {t("Explore Sai Server")} <Arrow />
            </a>
          </div>
        </div>
      </section>

      <section id="step-sai-build" className={`${s.stage} ${s.stage2} ${s.band}`} aria-labelledby="product-sai-build">
        <div className={`${s.wrap} ${s.bandGrid}`}>
          <div>
            <h2 id="product-sai-build" className={s.bandTitle}>{t("Build your game, deploy to Sai Server")}</h2>
          </div>
          <div>
            <p className={s.bandText}>{productLinks(t("The SDK connects your game client to login, player progression, inventory, quests, shops and leaderboards. Write your backend logic as Lua scripts alongside your game project and deploy it to run on Sai Server, with no separate backend to set up."))}</p>
            <h3 className={s.sdkHeading}>{t("Available SDKs")}</h3>
            <ul className={s.sdkList}>
              {SDKS.map((sdk) => (
                <li key={sdk.name}>
                  <a className={s.sdkLink} href={sdk.href}>
                    {sdk.name} <Arrow />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="step-sai-play" className={`${s.stage} ${s.stage3}`} aria-labelledby="product-sai-play">
        <div className={`${s.wrap} ${s.stageGrid}`}>
          <div>
            <h2 id="product-sai-play" className={s.productTitle}>{productLinks("Sai Play")}</h2>
            <p className={s.productText}>{productLinks(t("Sai Play is where your players live: the player site shared by every game running on Sai Server."))}</p>
            <ul className={s.list}>
              {playPoints.map((point) => (
                <li key={point} className={s.listItem}>{point}</li>
              ))}
            </ul>
            <a className={s.button} href={SAI_PLAY_URL}>
              {t("Visit Sai Play")} <Arrow />
            </a>
          </div>
          <figure className={s.media}>
            <div className={s.account} role="img" aria-label={t("Illustration of a Sai Play player account: an sGem balance, game shops and in-app purchases")}>
              <div className={s.accountHead}>
                <span className={s.avatar} aria-hidden="true">P</span>
                <span className={s.accountName}>{t("Player Account")}</span>
              </div>
              <div className={s.balance}>
                <img className={s.gem} src="/images/products/sgem.svg" width={40} height={40} alt="" />
                <span className={s.balanceValue}>{SAMPLE_SGEM}</span>
                <span className={s.balanceLabel}>sGem</span>
              </div>
              <ul className={s.features}>
                <li className={s.feature}>{t("Game Shops")}</li>
                <li className={s.feature}>{t("In-App Purchases")}</li>
              </ul>
            </div>
          </figure>
        </div>
      </section>

      <section id="showcase" className={`${s.stage} ${s.showcaseStage}`} aria-labelledby="products-showcase">
        <div className={s.wrap}>
          <p className={s.kicker}>{t("Showcase")}</p>
          <h2 id="products-showcase" className={s.bandTitle}>{productLinks(t("Games built on Sai Server"))}</h2>
          <p className={s.productText}>{productLinks(t("Real games running on Sai Server, and how each one uses it."))}</p>
          <ul className={s.showcases}>
            {SHOWCASES.map((game, i) => (
              <li key={game.href}>
                <a className={s.showcase} href={game.href}>
                  <img data-zoom tabIndex={0} className={s.showcaseImage} src={game.image.src} width={game.image.width} height={game.image.height} alt={t(game.alt)} loading="lazy" decoding="async" />
                  <span className={s.showcaseBody}>
                    <span className={s.showcaseNumber}>#{i + 1} · {t("Tech showcase")}</span>
                    <span className={s.showcaseName}>{game.name}</span>
                    <span className={s.showcaseText}>{keepNames(t(game.text))}</span>
                    <span className={s.showcaseTags}>
                      {game.tags.map((tag) => (
                        <span key={tag} className={s.showcaseTag}>{tag}</span>
                      ))}
                    </span>
                    <span className={s.showcaseMore}>
                      {t("See the tech showcase")} <Arrow />
                    </span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className={s.close} aria-labelledby="products-close">
        <div className={s.wrap}>
          <h2 id="products-close" className={s.closeTitle}>{t("Ready to run your game on Sai Server?")}</h2>
          <div className={s.closeActions}>
            <a className={s.button} href={SAI_SERVER_URL}>
              {t("Start with Sai Server")} <Arrow />
            </a>
            <a className={s.textLink} href={TUTORIAL_URL}>{t("Read the get-started tutorial")}</a>
          </div>
        </div>
      </section>
    </div>
  );
}
