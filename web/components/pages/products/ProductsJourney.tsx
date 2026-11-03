// /products content: the path from a studio's game on Sai Server to the player's account on Sai Play.
// Not Kubio markup: styled by Products.module.css; the page keeps the site's Kubio nav and footer around it.
// The sections below the hero continue the three steps, each opening on its step's rule colour.
import { getI18n } from "@/lib/i18n";
import s from "./Products.module.css";

const SAI_SERVER_URL = "https://server.saigame.studio/why-sai-server";
const SAI_PLAY_URL = "https://play.saigame.studio/";
const COURSE_URL = "/co-ban-sai-server/";
// client SDKs for building games on Sai Server; more engines will be added here
const SDKS = [{ name: "Unity SDK", href: "https://github.com/SaiGame-studio/ss-unity/releases" }];
// sample content for the illustrative Sai Play panel: SaiGame's own games, a made-up balance
const SAMPLE_GAMES = ["Purgatory", "The Immortal", "The Watcher"];
const SAMPLE_SGEM = "1,250";

function Arrow() {
  return (
    <svg className={s.arrow} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 8h10M9 4l4 4-4 4" />
    </svg>
  );
}

/** keeps the product names whole (never split across lines) inside translated text */
function keepNames(text: string) {
  return text.split(/(Sai Server|Sai Play)/).map((part, i) =>
    i % 2 ? <span key={i} className={s.productName}>{part}</span> : part,
  );
}

export default async function ProductsJourney() {
  const { t } = await getI18n();
  const steps = [
    { id: "step-sai-server", title: t("Set up your studio on Sai Server"), text: t("Manage your studio, team, games and game servers from one console.") },
    { id: "step-sai-build", title: t("Build your game, deploy to Sai Server"), text: t("Make your game client with our SDK, then deploy its backend logic to Sai Server.") },
    { id: "step-sai-play", title: t("Players land on Sai Play"), text: t("Players sign in with one Sai account and see their games and sGem balance in one place.") },
  ];
  const serverPoints = [t("Studios and team members"), t("Games and their game servers"), t("Docs and step-by-step tutorials")];

  return (
    <div className={s.page}>
      <section className={`${s.hero} h-navigation-padding`} aria-labelledby="products-title">
        <div className={`${s.wrap} ${s.heroInner}`}>
          <h1 id="products-title" className={s.title}>
            <span className={s.titleLine}>
              {t("Build on")} <span className={`${s.productName} ${s.nameServer}`}>Sai Server</span>.
            </span>
            <span className={s.titleLine}>
              {t("Your players land on")} <span className={`${s.productName} ${s.namePlay}`}>Sai Play</span>.
            </span>
          </h1>
          <p className={s.lead}>{t("Sai Server runs your game. Sai Play gives your players one account and one sGem balance across every game on the platform.")}</p>
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
            <a className={s.buttonGhost} href={SAI_PLAY_URL}>
              {t("Visit Sai Play")}
            </a>
          </div>
        </div>
      </section>

      <section id="step-sai-server" className={`${s.stage} ${s.stage1}`} aria-labelledby="product-sai-server">
        <div className={`${s.wrap} ${s.stageGrid}`}>
          <div>
            <span className={s.stageNumber}>1</span>
            <h2 id="product-sai-server" className={s.productTitle}>Sai Server</h2>
            <p className={s.productText}>{t("Sai Server gives your studio one console for your team, your games and the game servers they run on.")}</p>
            <ul className={s.list}>
              {serverPoints.map((point) => (
                <li key={point} className={s.listItem}>{point}</li>
              ))}
            </ul>
            <a className={s.button} href={SAI_SERVER_URL}>
              {t("Explore Sai Server")} <Arrow />
            </a>
          </div>
          <figure className={s.media}>
            <img className={s.image} src="/wp-content/uploads/2026/04/Gemini_Generated_Image_vmtnw6vmtnw6vmtn.png" width={1024} height={1024} alt={t("A developer working on Sai Server at a desk with several monitors")} loading="lazy" decoding="async" />
          </figure>
        </div>
      </section>

      <section id="step-sai-build" className={`${s.stage} ${s.stage2} ${s.band}`} aria-labelledby="product-sai-build">
        <div className={`${s.wrap} ${s.bandGrid}`}>
          <div>
            <span className={s.stageNumber}>2</span>
            <h2 id="product-sai-build" className={s.bandTitle}>{t("Build your game, deploy to Sai Server")}</h2>
          </div>
          <div>
            <p className={s.bandText}>{t("The SDK connects your game client to login, player progression, inventory, quests, shops and leaderboards. Write your backend logic as Lua scripts alongside your game project and deploy it to run on Sai Server, with no separate backend to set up.")}</p>
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
            <span className={s.stageNumber}>3</span>
            <h2 id="product-sai-play" className={s.productTitle}>Sai Play</h2>
            <p className={s.productText}>{t("Sai Play is where your players live: the player site shared by every game running on Sai Server.")}</p>
            <a className={s.buttonGhost} href={SAI_PLAY_URL}>
              {t("Visit Sai Play")} <Arrow />
            </a>
          </div>
          <figure className={s.media}>
            <div className={s.account} role="img" aria-label={t("Illustration of a Sai Play account: played games and an sGem balance")}>
              <div className={s.accountHead}>
                <span className={s.avatar} aria-hidden="true">S</span>
                <span className={s.accountName}>{t("Sai account")}</span>
              </div>
              <div className={s.balance}>
                <img className={s.gem} src="/images/products/sgem.svg" width={40} height={40} alt="" />
                <span className={s.balanceValue}>{SAMPLE_SGEM}</span>
                <span className={s.balanceLabel}>sGem</span>
              </div>
              <p className={s.accountLabel}>{t("Games played")}</p>
              <ul className={s.games}>
                {SAMPLE_GAMES.map((game) => (
                  <li key={game} className={s.game}>{game}</li>
                ))}
              </ul>
            </div>
          </figure>
        </div>
      </section>

      <section className={s.close} aria-labelledby="products-close">
        <div className={s.wrap}>
          <h2 id="products-close" className={s.closeTitle}>{t("Ready to run your game on Sai Server?")}</h2>
          <div className={s.closeActions}>
            <a className={s.button} href={SAI_SERVER_URL}>
              {t("Start with Sai Server")} <Arrow />
            </a>
            <a className={s.textLink} href={COURSE_URL}>{t("Learn it in the Basic Sai Server course")}</a>
          </div>
        </div>
      </section>
    </div>
  );
}
