import { NextResponse, type NextRequest } from "next/server";
import { LANG_COOKIE, LANG_FROM_URL_COOKIE } from "@/lib/lang";

// Old WordPress/TranslatePress URLs carried the language in the path (/vi/games/).
// The language now lives on the client: remember "vi" and redirect to the same URL without /vi.
// 307 (not 301/308) so browsers don't cache the redirect and skip setting the cookie next time.
export function proxy(request: NextRequest) {
  const url = request.nextUrl.clone();
  url.pathname = url.pathname.replace(/^\/vi(?=\/|$)/, "") || "/";
  const response = NextResponse.redirect(url, 307);
  const cookie = { path: "/", sameSite: "lax" as const };
  response.cookies.set(LANG_COOKIE, "vi", { ...cookie, maxAge: 60 * 60 * 24 * 365 });
  response.cookies.set(LANG_FROM_URL_COOKIE, "1", { ...cookie, maxAge: 60 });
  return response;
}

export const config = {
  matcher: ["/vi", "/vi/:path*"],
};
