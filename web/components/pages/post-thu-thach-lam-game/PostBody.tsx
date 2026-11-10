// Body of the "Game Making Challenge" post (/blog/game-making-challenge/), rendered inside BlogPostLayout.
// Strings are English source text passed through t(); vi/ja live in i18n/vi.json and i18n/ja.json.
// Project names (Hạnh đầu đà, Thánh Gióng, SG11, Infinite Book Shelf) are shown as is.
import { getI18n } from "@/lib/i18n";
import s from "./PostBody.module.css";

export const POST_TITLE = "Game Making Challenge";

type Link = { label: string; href: string };
type Month = {
  /** month label, translated */
  label: string;
  /** the month's challenge; none yet when empty */
  game?: Link | string;
};

const MONTHS: Month[] = [
  { label: "January", game: { label: "Hạnh đầu đà", href: "https://github.com/SaiGame-studio/sg13" } },
  { label: "February" },
  { label: "March", game: { label: "Thánh Gióng", href: "/games/the-immortal/" } },
  { label: "April" },
  { label: "May" },
  { label: "June", game: "SG11" },
  { label: "July" },
  { label: "August" },
  { label: "September" },
  { label: "October", game: { label: "Infinite Book Shelf", href: "/products/infinite-book-shelf/" } },
  { label: "November" },
  { label: "December" },
];

export default async function PostBody() {
  const { t } = await getI18n();
  return (
    <dl className={s.months}>
      {MONTHS.map(({ label, game }) => (
        <div key={label} style={{ display: "contents" }}>
          <dt className={s.month}>{t(label)}:</dt>
          <dd className={s.entry}>
            {typeof game === "string" ? game : game && <a href={game.href}>{game.label}</a>}
          </dd>
        </div>
      ))}
    </dl>
  );
}
