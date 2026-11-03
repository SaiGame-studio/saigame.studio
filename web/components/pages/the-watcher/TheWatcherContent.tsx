// The Watcher's own content on /games/the-watcher/, rendered inside GameLayout: the three modes of the original page.
import { getI18n } from "@/lib/i18n";
import s from "@/components/pages/games/Games.module.css";

export default async function TheWatcherContent() {
  const { t } = await getI18n();
  const features = [
    { title: t("Idle Mode"), text: t("Heroes will auto move and attack, monsters will auto appear one by one or group. Beware some boss will randomly appear too."), clip: "/wp-content/uploads/2025/08/ezgi-idle.gif" },
    { title: t("Attack Mode"), text: t("The Companion will help heroes attack enemies with powerful lighting strike."), clip: "/wp-content/uploads/2025/02/ezgif-attack-mode.gif" },
    { title: t("Drop and Craft"), text: t("Items will drop from monsters, use them to craft more powerfull items."), clip: "/wp-content/uploads/2025/02/ezgif-crafting-20.gif" },
  ];
  return (
    <section className={s.section} aria-labelledby="watcher-gameplay">
      <div className={s.wrap}>
        <h2 id="watcher-gameplay" className={s.sectionTitle}>{t("Gameplay")}</h2>
        {features.map((feature) => (
          <div key={feature.clip} className={s.feature}>
            <div>
              <h3 className={s.featureTitle}>{feature.title}</h3>
              <p className={s.featureText}>{feature.text}</p>
            </div>
            <img src={feature.clip} alt={feature.title} loading="lazy" decoding="async" />
          </div>
        ))}
      </div>
    </section>
  );
}
