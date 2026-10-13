// Server-side i18n. The language is chosen on the client (localStorage) and mirrored in the "lang" cookie,
// so the server renders the right language on the first paint. URLs carry no language prefix.
import { cache } from "react";
import { cookies } from "next/headers";
import vi from "@/i18n/vi.json";
import { LANG_COOKIE, type Lang } from "@/lib/lang";

const DICTIONARIES: Record<Lang, Record<string, string>> = { en: {}, vi };

// TranslatePress flags of the original site
const FLAGS: Record<Lang, { code: Lang; src: string; alt: string; title: string }> = {
  en: { code: "en", src: "/wp-content/plugins/translatepress-multilingual/assets/images/flags/en_US.png", alt: "en_US", title: "English" },
  vi: { code: "vi", src: "/wp-content/plugins/translatepress-multilingual/assets/images/flags/vi.png", alt: "vi", title: "Tiếng Việt" },
};

export const getLang = cache(async (): Promise<Lang> => {
  return (await cookies()).get(LANG_COOKIE)?.value === "vi" ? "vi" : "en";
});

/** Per-request translator: t(englishText) -> text in the visitor's language (falls back to English). */
export const getI18n = cache(async () => {
  const lang = await getLang();
  const dict = DICTIONARIES[lang];
  const t = (en: string) => dict[en] ?? en;
  const other: Lang = lang === "vi" ? "en" : "vi";
  return { lang, t, flags: { current: FLAGS[lang], other: FLAGS[other] } };
});
