// /game-courses/ content: the Unity Dev Basic course and its five YouTube series, in the dark style of /products.
// Not Kubio markup: styled by GameCourses.module.css; the page keeps the site's Kubio nav and the shared footer.
import { getI18n } from "@/lib/i18n";
import { fill } from "@/lib/fill";
import s from "./GameCourses.module.css";

const YOUTUBE_CHANNEL = "https://www.youtube.com/@SaiGame";
const PLAYLIST = "https://www.youtube.com/playlist?list=";
const COURSE_IMAGE = "/images/courses/midnight-session.jpg";

function Arrow() {
  return (
    <svg className={s.arrow} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 8h10M9 4l4 4-4 4" />
    </svg>
  );
}

export default async function GameCourses() {
  const { t } = await getI18n();
  const series = [
    { code: "C0", title: t("Unity C# Basics"), episodes: 30, text: t("For those who have never programmed before."), list: "PL9YFzEkTXjbMlVFT3AtHiaARHoZgAP8sm" },
    { code: "C1", title: t("Unity 2D Basics"), episodes: 34, text: t("For those who have never used Unity before."), list: "PL9YFzEkTXjbPZ1M0t_D-Ewh4iTMFBY5BL" },
    { code: "C2", title: t("Unity 3D Basics"), episodes: 10, text: t("Get familiar with Unity 3D."), list: "PL9YFzEkTXjbM7gq3QVkb5rC4dO8JdIsdj" },
    { code: "C3", title: t("Making a Unity 2D Game"), episodes: 100, text: t("A full Unity 2D game project."), list: "PL9YFzEkTXjbOUFE0wCrSa4SAjJN7Nz6yq" },
    { code: "C4", title: t("Unity 3D C# Basics"), episodes: 99, text: t("A full Unity 3D game project."), list: "PL9YFzEkTXjbNa2vGgWFCBkNaNCzAFRSQ1" },
  ];
  const totalEpisodes = series.reduce((sum, item) => sum + item.episodes, 0);

  return (
    <div className={s.page}>
      <section className={`${s.hero} h-navigation-padding`} aria-labelledby="courses-title">
        <div className={`${s.wrap} ${s.heroGrid}`}>
          <div>
            <h1 id="courses-title" className={s.title}>
              {fill(t("Learn to make games with {unity}."), { unity: <span className={s.accent}>Unity</span> })}
            </h1>
            <p className={s.lead}>{t("Free video courses from SaiGame on YouTube, from your first line of C# to complete 2D and 3D game projects.")}</p>
            <div className={s.actions}>
              <a className={s.button} href={`${PLAYLIST}${series[0].list}`}>
                {t("Start with C0")} <Arrow />
              </a>
              <a className={s.textLink} href={YOUTUBE_CHANNEL}>{t("SaiGame on YouTube")}</a>
            </div>
          </div>
          <figure className={s.media}>
            <img className={s.image} src={COURSE_IMAGE} width={1086} height={1448} alt="" decoding="async" />
          </figure>
        </div>
      </section>

      <section className={s.course} aria-labelledby="course-unity-dev-basic">
        <div className={s.wrap}>
          <div className={s.courseHead}>
            <h2 id="course-unity-dev-basic" className={s.courseTitle}>Unity Dev Basic</h2>
            <p className={s.courseMeta}>
              {series.length} {t("series")} · {totalEpisodes} {t("episodes")}
            </p>
          </div>
          <p className={s.courseText}>{t("A course for beginners that gets you comfortable with Unity, one of the most powerful and popular game engines today. Take the series in order.")}</p>

          <ol className={s.series}>
            {series.map((item) => (
              <li key={item.code} className={s.item}>
                <span className={s.code}>{item.code}</span>
                <div className={s.itemBody}>
                  <h3 className={s.itemTitle}>{item.title}</h3>
                  <p className={s.itemText}>
                    {item.episodes} {t("episodes")}. {item.text}
                  </p>
                </div>
                <a className={s.watch} href={`${PLAYLIST}${item.list}`} aria-label={`${t("Watch on YouTube")}: ${item.title}`}>
                  {t("Watch on YouTube")} <Arrow />
                </a>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </div>
  );
}
