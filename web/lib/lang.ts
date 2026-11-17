// Shared (client + server) language constants, the URL language prefix and the client-side persistence.
// The URL decides the language: English at the root (/games/), the others under a prefix (/vi/games/, /ja/games/).
// Storage and cookies remember the choice; the URL always determines the rendered language.
export type Lang = "en" | "vi" | "ja";
export const LANGS: Lang[] = ["en", "vi", "ja"];
export const DEFAULT_LANG: Lang = "en";
export const LANG_COOKIE = "lang";
/** request headers set by proxy.ts: the page language and the path without its language prefix */
export const LANG_HEADER = "x-sai-lang";
export const PATH_HEADER = "x-sai-path";
const STORAGE_KEY = "lang";
const ONE_YEAR = 60 * 60 * 24 * 365;

export const isLang = (v: unknown): v is Lang => LANGS.includes(v as Lang);

const PREFIX = /^\/(vi|ja)(?=\/|$)/;

/** "/vi/games/" -> { lang: "vi", path: "/games/" }; an unprefixed path is English */
export function splitLangPath(pathname: string): { lang: Lang; path: string } {
  const match = pathname.match(PREFIX);
  if (!match) return { lang: DEFAULT_LANG, path: pathname || "/" };
  return { lang: match[1] as Lang, path: pathname.slice(match[0].length) || "/" };
}

/** the URL of a site path in a language: ("vi", "/games/") -> "/vi/games/"; English keeps the path */
export function localizePath(lang: Lang, path: string): string {
  if (lang === DEFAULT_LANG) return path;
  return `/${lang}${path}`;
}

/** localizes internal paths ("/games/") and leaves external, mailto and #anchor links as they are */
export function localizeHref(lang: Lang, href: string): string {
  if (!href.startsWith("/") || href.startsWith("//") || /\.[a-z0-9]+(?:[?#]|$)/i.test(href)) return href;
  return localizePath(lang, splitLangPath(href).path);
}

export function readStoredLang(): Lang | null {
  try {
    const v = window.localStorage.getItem(STORAGE_KEY);
    return isLang(v) ? v : null;
  } catch {
    return null;
  }
}

/** Save the language on the client (localStorage) and in the cookie proxy.ts reads for unprefixed URLs. */
export function persistLang(lang: Lang) {
  try {
    window.localStorage.setItem(STORAGE_KEY, lang);
  } catch {
    /* storage unavailable: the cookie still carries the choice */
  }
  document.cookie = `${LANG_COOKIE}=${lang}; path=/; max-age=${ONE_YEAR}; samesite=lax`;
}

export function hasCookie(name: string) {
  return document.cookie.split("; ").some((c) => c.startsWith(name + "="));
}

/** the <html lang> the server rendered ("en-US", "vi", "ja") as a Lang */
export const currentDocumentLang = (): Lang => {
  const code = document.documentElement.lang.slice(0, 2);
  return isLang(code) ? code : "en";
};

/** BCP 47 tag for <html lang> and Intl formatting */
export const LOCALE: Record<Lang, string> = { en: "en-US", vi: "vi-VN", ja: "ja-JP" };
