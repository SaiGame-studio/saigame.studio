// Server-side i18n. The language is chosen on the client (localStorage) and mirrored in the "lang" cookie,
// so the server renders the right language on the first paint. URLs carry no language prefix.
import { cache } from "react";
import { cookies } from "next/headers";
import vi from "@/i18n/vi.json";
import ja from "@/i18n/ja.json";
import { LANG_COOKIE, LANGS, isLang, type Lang } from "@/lib/lang";

const DICTIONARIES: Record<Lang, Record<string, string>> = { en: {}, vi, ja };

/** the languages offered by the top-menu switcher; the flag icon is drawn by components/LangFlag.tsx */
const FLAGS: Record<Lang, { code: Lang; title: string }> = {
  en: { code: "en", title: "English" },
  vi: { code: "vi", title: "Tiếng Việt" },
  ja: { code: "ja", title: "日本語" },
};

export const getLang = cache(async (): Promise<Lang> => {
  const value = (await cookies()).get(LANG_COOKIE)?.value;
  return isLang(value) ? value : "en";
});

/** Per-request translator: t(englishText) -> text in the visitor's language (falls back to English). */
export const getI18n = cache(async () => {
  const lang = await getLang();
  const dict = DICTIONARIES[lang];
  const t = (en: string) => dict[en] ?? en;
  const others = LANGS.filter((code) => code !== lang).map((code) => FLAGS[code]);
  return { lang, t, flags: { current: FLAGS[lang], others } };
});
