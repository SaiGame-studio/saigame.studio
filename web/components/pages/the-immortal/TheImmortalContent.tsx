// The Immortal's own content on /games/the-immortal/, rendered inside GameLayout: the gameplay clips of the original page.
import { getI18n } from "@/lib/i18n";
import s from "@/components/pages/games/Games.module.css";

const CLIPS = [
  "/wp-content/uploads/2025/08/ezgif-2-0f4037be68.gif",
  "/wp-content/uploads/2025/02/ezgif-2-77dccf1e671.gif",
  "/wp-content/uploads/2025/02/ezgif-2-bd9a4b1bc41.gif",
];

export default async function TheImmortalContent() {
  const { t } = await getI18n();
  return (
    <section className={s.section} aria-labelledby="immortal-gameplay">
      <div className={s.wrap}>
        <h2 id="immortal-gameplay" className={s.sectionTitle}>{t("Gameplay")}</h2>
        <div className={s.gallery}>
          {CLIPS.map((src) => (
            <img key={src} src={src} alt="" loading="lazy" decoding="async" />
          ))}
        </div>
      </div>
    </section>
  );
}
