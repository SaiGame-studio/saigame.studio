"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { LOCALE, persistLang, splitLangPath } from "@/lib/lang";

// Root layouts persist across navigation; sync the document language from the URL.
export default function LangSync() {
  const pathname = usePathname();
  useEffect(() => {
    const { lang } = splitLangPath(pathname);
    document.documentElement.lang = LOCALE[lang];
    persistLang(lang);
  }, [pathname]);
  return null;
}
