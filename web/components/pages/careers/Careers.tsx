// /careers/ content: open positions at SaiGame, currently the Intern Game Dev post. Dark style shared with /products.
// Not Kubio markup: styled by Careers.module.css; the page keeps the site's Kubio nav and the shared footer.
import { getI18n } from "@/lib/i18n";
import { fill } from "@/lib/fill";
import { linkSaiServer } from "@/components/SaiServerLink";
import s from "./Careers.module.css";

const EMAIL = "simon@saigame.studio";
const MAIL_SUBJECT = "[SaiGame] Intern Game Dev - ";
const YOUTUBE = "https://www.youtube.com/@SaiGame";
const POSTER = "/images/careers/intern-game-dev.jpg";

function Arrow() {
  return (
    <svg className={s.arrow} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 8h10M9 4l4 4-4 4" />
    </svg>
  );
}

export default async function Careers() {
  const { t } = await getI18n();
  const facts = [
    { label: t("Work type"), value: t("Remote") },
    { label: t("Probation"), value: t("Up to 3 months") },
    { label: t("Probation salary"), value: t("2.5 to 3 million VND / month, negotiable") },
    { label: t("Project"), value: linkSaiServer(t("An online game built with Sai Server")) },
  ];
  const requirements = [
    { title: t("Foundation"), text: <>{t("Completed course C3 or C4 on the Sai Game YouTube channel.")} <a href={YOUTUBE}>youtube.com/@SaiGame</a></> },
    { title: t("AI skills"), text: t("Able to use AI tools (ChatGPT, Claude, Copilot, …) to speed up the work and solve problems.") },
    { title: t("Your own games"), text: t("At least 3 games you made yourself (solo or with AI).") },
  ];
  const schedule = [
    t("Report your progress at 21:00, Monday to Friday."),
    t("Saturday and Sunday off."),
  ];
  const benefits = [
    t("Company stamp and internship confirmation for your school, provided you complete the project on schedule."),
    t("Guidance and hands-on experience with real processes and projects."),
    t("A flexible working environment that values initiative and results."),
  ];
  const steps = [
    t("Write your CV in Google Docs and share it as a link that can be viewed online. Offline files are not accepted."),
    t("Prepare one link that gathers your Git repositories and the YouTube demo videos of your 3 solo games."),
    <>
      {fill(t("Send both to {email} with the subject {subject}"), { email: <a href={`mailto:${EMAIL}`}>{EMAIL}</a>, subject: <code>[SaiGame] Intern Game Dev - {t("Full Name")}</code> })}
    </>,
  ];

  return (
    <div className={s.page}>
      <section className={`${s.hero} h-navigation-padding`} aria-labelledby="careers-title">
        <div className={`${s.wrap} ${s.heroInner}`}>
          <h1 id="careers-title" className={s.title}>{t("Careers")}</h1>
          <p className={s.lead}>{t("Join SaiGame and make games with us.")}</p>
        </div>
      </section>

      <article className={s.job} aria-labelledby="job-intern">
        <div className={`${s.wrap} ${s.jobGrid}`}>
          <div>
            <p className={s.badge}>{t("Open position")}</p>
            <h2 id="job-intern" className={s.jobTitle}>Intern Game Dev</h2>
            <p className={s.jobLead}>{t("Sai Game Studio is hiring interns: for young people who want to gain real work experience by making an online game.")}</p>

            <dl className={s.facts}>
              {facts.map((fact) => (
                <div key={fact.label} className={s.fact}>
                  <dt>{fact.label}</dt>
                  <dd>{fact.value}</dd>
                </div>
              ))}
            </dl>

            <a className={s.button} href={`mailto:${EMAIL}?subject=${encodeURIComponent(MAIL_SUBJECT)}`}>
              {t("Apply by email")} <Arrow />
            </a>

            <section className={s.block} aria-labelledby="job-requirements">
              <h3 id="job-requirements" className={s.blockTitle}>{t("Requirements")}</h3>
              <ul className={s.list}>
                {requirements.map((item) => (
                  <li key={item.title}>
                    <strong>{item.title}:</strong> {item.text}
                  </li>
                ))}
              </ul>
            </section>

            <section className={s.block} aria-labelledby="job-schedule">
              <h3 id="job-schedule" className={s.blockTitle}>{t("Working hours")}</h3>
              <ul className={s.list}>
                {schedule.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section className={s.block} aria-labelledby="job-benefits">
              <h3 id="job-benefits" className={s.blockTitle}>{t("Benefits")}</h3>
              <ul className={s.list}>
                {benefits.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section className={`${s.block} ${s.apply}`} aria-labelledby="job-apply">
              <h3 id="job-apply" className={s.blockTitle}>{t("How to apply")}</h3>
              <ol className={s.steps}>
                {steps.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ol>
            </section>
          </div>

          <figure className={s.poster}>
            <img src={POSTER} width={1086} height={1448} alt={t("Sai Game is hiring interns to make an online game")} decoding="async" />
          </figure>
        </div>
      </article>
    </div>
  );
}
