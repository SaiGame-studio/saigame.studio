// /games/ content: one section per game, cover and text alternating sides. Dark style shared with /products.
// Not Kubio markup: styled by Games.module.css; the page keeps the site's Kubio nav and the shared footer.
import { getI18n } from "@/lib/i18n";
import { GAMES, gameHref } from "./games";
import { Arrow, GameSummary, GameTags } from "./GameParts";
import s from "./Games.module.css";

export default async function GamesList() {
  const { t } = await getI18n();

  return (
    <div className={s.page}>
      <section className={`${s.listHero} h-navigation-padding`} aria-labelledby="games-title">
        <div className={s.wrap}>
          <h1 id="games-title" className={s.title}>{t("Games")}</h1>
          <p className={s.lead}>{t("Games made by the SaiGame team, available on Steam and Itch.io.")}</p>
        </div>
      </section>

      {GAMES.map((game, i) => (
        <section key={game.slug} className={i % 2 ? `${s.game} ${s.gameAlt}` : s.game} aria-labelledby={`game-${game.slug}`}>
          <div className={`${s.wrap} ${s.gameGrid}`}>
            <a className={s.coverLink} href={gameHref(game)} tabIndex={-1} aria-hidden="true">
              <img className={s.cover} src={game.cover} alt="" loading={i ? "lazy" : undefined} decoding="async" />
            </a>
            <div>
              <span className={s.platform}>{game.platform}</span>
              <h2 id={`game-${game.slug}`} className={s.gameTitle}>
                <a className={s.titleLink} href={gameHref(game)}>{t(game.title)}</a>
              </h2>
              <GameSummary game={game} t={t} />
              <GameTags game={game} t={t} />
              <div className={s.actions}>
                <a className={s.button} href={gameHref(game)}>
                  {t("View game")} <Arrow />
                </a>
                <a className={s.buttonGhost} href={game.store.url}>
                  {t(game.store.label)}
                </a>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
