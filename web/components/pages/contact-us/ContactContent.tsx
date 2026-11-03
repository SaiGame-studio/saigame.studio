// /contact-us content: the ways to reach SaiGame, in the dark style of /products.
// Not Kubio markup: styled by Contact.module.css; the page keeps the site's Kubio nav and the shared footer.
import { getI18n } from "@/lib/i18n";
import { linkSaiServer } from "@/components/SaiServerLink";
import s from "./Contact.module.css";

const EMAIL = "simon@saigame.studio";
const DISCORD_URL = "https://discord.gg/UU3YarmVde";

function MailIcon() {
  return (
    <svg className={s.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

function ChatIcon() {
  return (
    <svg className={s.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12Z" />
      <path d="M8.5 11h.01M12 11h.01M15.5 11h.01" />
    </svg>
  );
}

function Arrow() {
  return (
    <svg className={s.arrow} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 8h10M9 4l4 4-4 4" />
    </svg>
  );
}

export default async function ContactContent() {
  const { t } = await getI18n();
  const topics = [
    { title: linkSaiServer("Sai Server"), text: t("Setting up your studio, your games and their game servers.") },
    { title: "Sai Play", text: t("Player accounts, sGem, game shops and in-app purchases.") },
    { title: t("Partnerships"), text: t("Working together on games, events or business.") },
    { title: t("Game Courses"), text: t("Questions about our courses and learning with SaiGame.") },
  ];

  return (
    <div className={s.page}>
      <section className={`${s.hero} h-navigation-padding`} aria-labelledby="contact-title">
        <div className={`${s.wrap} ${s.heroGrid}`}>
          <div>
            <h1 id="contact-title" className={s.title}>
              {t("Let's talk about")} <span className={s.accent}>{t("your game")}</span>.
            </h1>
            <p className={s.lead}>{t("Whether you run a studio, play our games or want to work with us, write to us. We read every message.")}</p>
          </div>

          <ul className={s.channels}>
            <li>
              <a className={s.channel} href={`mailto:${EMAIL}`}>
                <MailIcon />
                <span className={s.channelBody}>
                  <span className={s.channelName}>{t("Email")}</span>
                  <span className={s.channelValue}>{EMAIL}</span>
                </span>
                <Arrow />
              </a>
            </li>
            <li>
              <a className={s.channel} href={DISCORD_URL}>
                <ChatIcon />
                <span className={s.channelBody}>
                  <span className={s.channelName}>Discord</span>
                  <span className={s.channelValue}>{t("Join the SaiGame community server")}</span>
                </span>
                <Arrow />
              </a>
            </li>
          </ul>
        </div>
      </section>

      <section className={s.topics} aria-labelledby="contact-topics">
        <div className={s.wrap}>
          <h2 id="contact-topics" className={s.sectionTitle}>{t("What you can reach us about")}</h2>
          <dl className={s.topicList}>
            {topics.map((topic) => (
              <div key={topic.text} className={s.topic}>
                <dt className={s.topicTitle}>{topic.title}</dt>
                <dd className={s.topicText}>{topic.text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </div>
  );
}
