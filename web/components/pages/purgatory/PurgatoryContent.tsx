// Purgatory's own content on /games/purgatory/, rendered inside GameLayout (copy from the original page).
import { getI18n } from "@/lib/i18n";
import { fill } from "@/lib/fill";
import s from "@/components/pages/games/Games.module.css";

const SCREENSHOTS = [
  "/wp-content/uploads/2025/11/Screenshot_3-1-1024x573.jpg",
  "/wp-content/uploads/2025/11/Screenshot_1-1-1024x573.jpg",
  "/wp-content/uploads/2025/11/Screenshot_2-1-1024x575.jpg",
  "/wp-content/uploads/2025/11/Screenshot_5-1024x575.jpg",
];

export default async function PurgatoryContent() {
  const { t } = await getI18n();
  return (
    <>
      <section className={s.section} aria-labelledby="purgatory-editions">
        <div className={s.wrap}>
          <h2 id="purgatory-editions" className={s.sectionTitle}>{t("Choose your edition")}</h2>
          <div className={s.body}>
            <p>{t("Here, the chat channel is not just soulless lines of text, but living characters, resources, and the key leading to victory.")}</p>
            <p>{t("To suit every user need, the game is divided into 2 separate content packages. Please read carefully before choosing:")}</p>
          </div>
          <div className={`${s.twoCol} ${s.body}`}>
            <div className={s.note}>
              <h4>{t("Offline Standard Edition")}</h4>
              <p>
                <strong>{t("Target Audience:")}</strong> {t("For new Streamers who want to get used to the game, test the stream flow, or casual gamers who want to experience the gameplay.")}
              </p>
            </div>
            <div className={s.note}>
              <h4>{t("Online Expansion Pack")}</h4>
              <p>
                <strong>{t("Target Audience:")}</strong> {fill(t("Recommended for professional Streamers or channels with stable interaction (average of {viewers})."), { viewers: <strong>{t("over 50 concurrent viewers")}</strong> })}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={s.section} aria-labelledby="purgatory-how">
        <div className={s.wrap}>
          <div className={s.body}>
          <h3 id="purgatory-how">{t("Dual-Screen Operation Mechanism")}</h3>
          <p>{t("Upon launch, the game will provide 2 separate application windows to help the Streamer fully control the broadcast:")}</p>

          <h4>{t("1. Streamer Dashboard (Backend)")}</h4>
          <p>{t("Management interface exclusively for the Streamer (No need to show on Stream) This is your command center. Here, you can:")}</p>
          <ul>
            <li>{t("Grasp the entire live session situation, statistics on viewer numbers (Free and Donators).")}</li>
            <li>{t("Monitor the chat flow and detailed donation history.")}</li>
            <li>{t("Activate support features, adjust parameters for the Game Client.")}</li>
          </ul>
          <p>
            <strong>{t("In Offline mode:")}</strong> {t("This is where you play the role of “GM” (Game Master) to self-create events and simulated donations.")}
          </p>
          <figure>
            <img src="/wp-content/uploads/2025/11/Screenshot_6-1.jpg" alt={t("1. Streamer Dashboard (Backend)")} loading="lazy" />
          </figure>

          <h4>{t("2. Game Client (On-Stream)")}</h4>
          <p>{t("Main display interface for the audience This is what viewers will see on the livestream screen. Intuitive graphics and vivid effects display the interaction results of the entire community.")}</p>

          <h3>{t("Gameplay Modes")}</h3>
          <p>{t("The game revolves around the journey of an “Escape Group”, divided into 2 tactical phases:")}</p>

          <h4>
            {t("Phase 1:")} {t("Preparation & Survival (Working Phase)")}
          </h4>
          <p>{t("Streamer and audience join hands to build the foundation for the great escape.")}</p>
          <ul>
            <li>
              <strong>{t("Streamer Role:")}</strong> {t("Macro-management, resource allocation, deciding on equipment purchases, and upgrading facilities for the group.")}
            </li>
            <li>
              <strong>{t("Viewer Role:")}</strong> {t("Send chat messages to interact or execute basic commands. Donate to directly contribute resources to help accelerate construction progress.")}
            </li>
          </ul>
          <figure>
            <img src="/wp-content/uploads/2025/11/Screenshot_1-1024x574.jpg" alt={t("Preparation & Survival (Working Phase)")} loading="lazy" />
          </figure>

          <h4>
            {t("Phase 2:")} {t("The Escape")}
          </h4>
          <p>{t("When manpower and equipment are ready, the Streamer will activate the departure command. Goal: Go as far as possible!")}</p>
          <ul>
            <li>
              <strong>{t("Streamer Role:")}</strong> {t("Issue tactical commands, use support skills to lead characters past obstacles.")}
            </li>
            <li>
              <strong>{t("Audience Role:")}</strong> {t("In “hanging by a thread” situations, each Donate from the audience will convert into healing (Heal) for their own Avatar and teammates.")}
            </li>
          </ul>
          <figure>
            <img src="/wp-content/uploads/2025/11/Screenshot_2-1024x574.jpg" alt={t("The Escape")} loading="lazy" />
          </figure>

          <p className={s.note}>
            <strong>{t("Important Note:")}</strong> {t("Real interactive features (Real-time Donate & Chat Integration) are only available when you own the Streamer DLC (Online Expansion Pack). Please consider your community size to choose the most suitable version!")}
          </p>
          </div>
        </div>
      </section>

      <section className={s.section} aria-labelledby="purgatory-screens">
        <div className={s.wrap}>
          <h2 id="purgatory-screens" className={s.sectionTitle}>{t("Screenshots")}</h2>
          <div className={s.gallery}>
            {SCREENSHOTS.map((src) => (
              <img key={src} src={src} alt="" loading="lazy" decoding="async" />
            ))}
          </div>
        </div>
      </section>

      <section className={s.section} aria-labelledby="purgatory-docs">
        <div className={s.wrap}>
          <div className={`${s.twoCol} ${s.body}`}>
          <div>
            <h3 id="purgatory-docs">{t("Game Documents")}</h3>
            <ul className={s.links}>
              <li><a href="/blog/how-to-configure-google-cloud-enable-youtube-data-api-v3-for-desktop-applications/">{t("How to Configure Youtube Client ID")}</a></li>
              <li><a href="/blog/ss05-backend-tutorial/">{t("Backend Tutorial")}</a></li>
              <li><a href="/blog/purgatory-game-tutorial/">{t("Game Client Tutorial")}</a></li>
            </ul>
          </div>
          <div>
            <h3>{t("Minimum System Requirements")}</h3>
            <dl className={s.specs}>
              <dt>OS</dt>
              <dd>Windows 10 {t("or newer")}</dd>
              <dt>{t("Processor")}</dt>
              <dd>Intel Core i5 M380</dd>
              <dt>{t("Memory")}</dt>
              <dd>1000 MB RAM</dd>
              <dt>{t("Graphics")}</dt>
              <dd>Intel HD 4000</dd>
              <dt>{t("Storage")}</dt>
              <dd>400 MB {t("available space")}</dd>
            </dl>
          </div>
          </div>
        </div>
      </section>
    </>
  );
}
