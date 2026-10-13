// Shared (client + server) language constants and the client-side persistence.
export type Lang = "en" | "vi";
export const LANG_COOKIE = "lang";
/** set by proxy.ts when an old /vi/... URL was opened: the client then stores "vi" in localStorage */
export const LANG_FROM_URL_COOKIE = "lang_from_url";
const STORAGE_KEY = "lang";
const ONE_YEAR = 60 * 60 * 24 * 365;

export const isLang = (v: unknown): v is Lang => v === "en" || v === "vi";

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

export const currentDocumentLang = (): Lang => (document.documentElement.lang.startsWith("vi") ? "vi" : "en");
