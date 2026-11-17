import { NextResponse, type NextRequest } from "next/server";
import { DEFAULT_LANG, LANG_HEADER, PATH_HEADER, splitLangPath } from "@/lib/lang";

// The URL decides the language: /vi/... and /ja/... are rewritten to the shared page with the language in a request
// header (lib/i18n.ts), so every language has its own URL for search engines and AI crawlers.
// Every URL has a stable language regardless of cookies.
export function proxy(request: NextRequest) {
  const { lang, path } = splitLangPath(request.nextUrl.pathname);

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set(LANG_HEADER, lang);
  requestHeaders.set(PATH_HEADER, path);
  if (lang === DEFAULT_LANG) return NextResponse.next({ request: { headers: requestHeaders } });

  const url = request.nextUrl.clone();
  url.pathname = path;
  return NextResponse.rewrite(url, { request: { headers: requestHeaders } });
}

export const config = {
  // pages only: not Next's files, the static asset folders or any file with an extension (robots.txt, sitemap.xml, llms.txt, images)
  matcher: ["/((?!_next/|wp-content/|wp-includes/|wp-emoji/|images/|css/|js/|fonts/|.*\\.).*)"],
};
