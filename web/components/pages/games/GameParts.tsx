// Pieces shared by /games/ and /games/<slug>/: the arrow icon, a game's summary and its tags.
import type { Game } from "./games";
import s from "./Games.module.css";

export function Arrow({ back = false }: { back?: boolean }) {
  return (
    <svg className={s.arrow} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={back ? "M13 8H3M7 4 3 8l4 4" : "M3 8h10M9 4l4 4-4 4"} />
    </svg>
  );
}

export function GameSummary({ game, t }: { game: Game; t: (en: string) => string }) {
  // Purgatory's original copy continues the title ("Purgatory is a next-generation…")
  const text = t(game.summary);
  return <p className={s.summary}>{/^[a-z]/.test(game.summary) ? `${game.title} ${t("is")} ${text}` : text}</p>;
}

export function GameTags({ game, t }: { game: Game; t: (en: string) => string }) {
  return (
    <ul className={s.tags}>
      {game.tags.map((tag) => (
        <li key={tag.title} className={s.tag}>
          <span className={s.tagTitle}>{t(tag.title)}</span>
          {tag.text && <span className={s.tagText}>{t(tag.text)}</span>}
        </li>
      ))}
    </ul>
  );
}
