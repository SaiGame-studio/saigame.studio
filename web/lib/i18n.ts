// Server-side i18n. The URL decides the language (/vi/..., /ja/..., English unprefixed): proxy.ts strips the prefix,
// rewrites to the shared page and passes the language and the bare path in request headers.
import { cache } from "react";
import { headers } from "next/headers";
import vi from "@/i18n/vi.json";
import ja from "@/i18n/ja.json";
import { DEFAULT_LANG, LANG_HEADER, LANGS, PATH_HEADER, isLang, localizeHref, localizePath, type Lang } from "@/lib/lang";

const DICTIONARIES: Record<Lang, Record<string, string>> = { en: {}, vi, ja };

/** the languages offered by the top-menu switcher; the flag icon is drawn by components/LangFlag.tsx */
const FLAGS: Record<Lang, { code: Lang; title: string }> = {
  en: { code: "en", title: "English" },
  vi: { code: "vi", title: "Tiếng Việt" },
  ja: { code: "ja", title: "日本語" },
};

export const getLang = cache(async (): Promise<Lang> => {
  const value = (await headers()).get(LANG_HEADER);
  return isLang(value) ? value : DEFAULT_LANG;
});

/** the requested path without its language prefix ("/games/" for /vi/games/) */
export const getPath = cache(async (): Promise<string> => (await headers()).get(PATH_HEADER) ?? "/");

/** Per-request translator: t(englishText) -> text in the visitor's language (falls back to English),
 *  href(path) -> the same page in that language, and the switcher flags with their URLs for this page. */
export const getI18n = cache(async () => {
  const [lang, path] = await Promise.all([getLang(), getPath()]);
  const dict = DICTIONARIES[lang];
  const t = (en: string) => dict[en] ?? en;
  const href = (target: string) => localizeHref(lang, target);
  const flag = (code: Lang) => ({ ...FLAGS[code], href: localizePath(code, path) });
  const others = LANGS.filter((code) => code !== lang).map(flag);
  return { lang, path, t, href, flags: { current: flag(lang), others } };
});
