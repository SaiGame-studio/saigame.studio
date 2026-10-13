"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { LANG_FROM_URL_COOKIE, clearCookie, hasCookie, persistLang, readStoredLang, type Lang } from "@/lib/lang";

// Keeps the client-side choice (localStorage) and the cookie used for server rendering in sync.
//  - arrived through an old /vi/... URL (proxy set the cookie + marker): store that language locally
//  - localStorage holds a choice the cookie lost (cleared/expired): restore the cookie and re-render
//  - first visit: remember the current language
export default function LangSync({ lang }: { lang: Lang }) {
  const router = useRouter();

  useEffect(() => {
    if (hasCookie(LANG_FROM_URL_COOKIE)) {
      clearCookie(LANG_FROM_URL_COOKIE);
      persistLang(lang);
      return;
    }
    const stored = readStoredLang();
    if (stored && stored !== lang) {
      persistLang(stored);
      router.refresh();
    } else if (!stored) {
      persistLang(lang);
    }
  }, [lang, router]);

  return null;
}
