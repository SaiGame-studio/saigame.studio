// Shared layout for /games/<slug>/: cover + overview on top, the game's own content (children), then the Steam widget.
import { getI18n } from "@/lib/i18n";
import { GAMES } from "./games";
import { Arrow, GameSummary, GameTags } from "./GameParts";
import s from "./Games.module.css";

export default async function GameLayout({ slug, children }: { slug: string; children?: React.ReactNode }) {
  const { t } = await getI18n();
  const game = GAMES.find((item) => item.slug === slug)!;

  return (
    <div className={s.page}>
      <section className={`${s.detailHero} h-navigation-padding`} aria-labelledby="game-title">
        <div className={s.wrap}>
          <a className={s.back} href="/games/">
            <Arrow back /> {t("Games")}
          </a>
          <div className={s.detailGrid}>
            <img className={s.coverStatic} src={game.cover} alt="" decoding="async" />
            <div>
              <span className={s.platform}>{game.platform}</span>
              <h1 id="game-title" className={s.detailTitle}>{t(game.title)}</h1>
              <GameSummary game={game} t={t} />
              <GameTags game={game} t={t} />
              <div className={s.actions}>
                <a className={s.button} href={game.steamUrl}>
                  {t("Download from Steam")} <Arrow />
                </a>
                {game.community?.map((link) => (
                  <a key={link.href} className={s.buttonGhost} href={link.href}>
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {children}

      <section className={s.section} aria-labelledby="game-steam">
        <div className={s.wrap}>
          <h2 id="game-steam" className={s.sectionTitle}>{t("Get it on Steam")}</h2>
          <iframe className={s.steamWidget} src={`https://store.steampowered.com/widget/${game.steamAppId}/`} title={`${t(game.title)} – Steam`} loading="lazy" />
        </div>
      </section>
    </div>
  );
}
