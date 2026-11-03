// Shared (client + server) language constants and the client-side persistence.
export type Lang = "en" | "vi" | "ja";
export const LANGS: Lang[] = ["en", "vi", "ja"];
export const LANG_COOKIE = "lang";
/** set by proxy.ts when an old /vi/... URL was opened: the client then stores "vi" in localStorage */
export const LANG_FROM_URL_COOKIE = "lang_from_url";
const STORAGE_KEY = "lang";
const ONE_YEAR = 60 * 60 * 24 * 365;

export const isLang = (v: unknown): v is Lang => LANGS.includes(v as Lang);

export function readStoredLang(): Lang | null {
  try {
    const v = window.localStorage.getItem(STORAGE_KEY);
    return isLang(v) ? v : null;
  } catch {
    return null;
  }
}

/** Save the language on the client (localStorage) and mirror it in a cookie for server rendering. */
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

export function clearCookie(name: string) {
  document.cookie = `${name}=; path=/; max-age=0; samesite=lax`;
}

/** the <html lang> the server rendered ("en-US", "vi", "ja") as a Lang */
export const currentDocumentLang = (): Lang => {
  const code = document.documentElement.lang.slice(0, 2);
  return isLang(code) ? code : "en";
};

/** BCP 47 tag for <html lang> and Intl formatting */
export const LOCALE: Record<Lang, string> = { en: "en-US", vi: "vi-VN", ja: "ja-JP" };
