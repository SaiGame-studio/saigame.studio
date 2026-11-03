// Rectangular (3:2) flag icons for the top-menu language switcher (styled in app/site.css, .lang-flag).
import type { Lang } from "@/lib/lang";

const NAMES: Record<Lang, string> = { en: "English", vi: "Tiếng Việt", ja: "日本語" };
const STRIPE = 20 / 13;

export default function LangFlag({ code }: { code: Lang }) {
  return (
    <svg className="lang-flag" viewBox="0 0 30 20" role="img" aria-label={NAMES[code]}>
      <title>{NAMES[code]}</title>
      {code === "ja" ? (
        <>
          <rect width="30" height="20" fill="#fff" />
          <circle cx="15" cy="10" r="6" fill="#bc002d" />
        </>
      ) : code === "vi" ? (
        <>
          <rect width="30" height="20" fill="#da251d" />
          <path fill="#ffcd00" d="m15 4 1.35 4.15h4.37l-3.54 2.57 1.35 4.15L15 12.3l-3.53 2.57 1.35-4.15-3.54-2.57h4.37Z" />
        </>
      ) : (
        <>
          <rect width="30" height="20" fill="#fff" />
          {[0, 2, 4, 6, 8, 10, 12].map((i) => (
            <rect key={i} y={i * STRIPE} width="30" height={STRIPE} fill="#b22234" />
          ))}
          <rect width="12" height={STRIPE * 7} fill="#3c3b6e" />
          {[2, 6, 10].map((x) => [2, 5.4, 8.8].map((y) => <circle key={`${x}-${y}`} cx={x} cy={y} r="0.75" fill="#fff" />))}
        </>
      )}
    </svg>
  );
}
