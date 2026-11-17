"use client";

import { useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import { currentDocumentLang, isLang, localizePath, splitLangPath, persistLang } from "@/lib/lang";

// The page markup is converted 1:1 from WordPress and uses plain <a href>. Instead of rewriting every
// link to next/link, intercept clicks on internal links and let the App Router swap the content
// (no full reload; the URL, title and history still update).
// Language switcher links navigate to the selected language URL.

const STATIC_PATH = /^\/(wp-content|wp-includes|wp-emoji|_next|fonts|css|js)\//;
const FILE_EXT = /\.[a-z0-9]{2,5}$/i;

function internalTarget(event: Event): URL | null {
  const el = event.target instanceof Element ? event.target.closest("a[href]") : null;
  if (!(el instanceof HTMLAnchorElement)) return null;
  if (el.target && el.target !== "_self") return null;
  if (el.hasAttribute("download") || el.getAttribute("rel")?.includes("external")) return null;
  const raw = el.getAttribute("href") ?? "";
  if (!raw || raw.startsWith("#") || /^(mailto|tel|javascript):/i.test(raw)) return null;
  const url = new URL(el.href, window.location.href);
  if (url.origin !== window.location.origin) return null;
  if (STATIC_PATH.test(url.pathname) || FILE_EXT.test(url.pathname)) return null;
  if (!el.hasAttribute("data-lang") && splitLangPath(url.pathname).lang === "en") {
    url.pathname = localizePath(currentDocumentLang(), url.pathname);
  }
  return url;
}

/** same page, ignoring the trailing slash (menu links omit it; trailingSlash adds it) */
const pageKey = (url: { pathname: string; search: string }) => (url.pathname.replace(/\/+$/, "") || "/") + url.search;
const samePage = (a: { pathname: string; search: string }, b: { pathname: string; search: string }) => pageKey(a) === pageKey(b);

const scrollToTop = () => window.scrollTo({ top: 0, left: 0, behavior: "instant" });

export default function ClientRouter() {
  const router = useRouter();
  const pathname = usePathname();
  // Next's scroll-to-top skips pages whose first element has no box (our display:contents page wrappers),
  // so a link click asks for it and the page scrolls to the top once the new page (or its redirect) has rendered.
  const scrollTopPending = useRef(false);

  useEffect(() => {
    if (!scrollTopPending.current) return;
    scrollTopPending.current = false;
    scrollToTop();
  }, [pathname]);

  useEffect(() => {
    // Listen on window (bubble phase): it runs after Kubio's own handlers, so if Kubio already
    // handled the click (e.g. a submenu toggle on touch screens) defaultPrevented is respected.
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

      const langLink = e.target instanceof Element ? e.target.closest("[data-lang]") : null;
      if (langLink) {
        e.preventDefault();
        const lang = langLink.getAttribute("data-lang");
        if (isLang(lang) && lang !== currentDocumentLang()) {
          persistLang(lang);
          const { path } = splitLangPath(window.location.pathname);
          window.location.assign(localizePath(lang, path) + window.location.search + window.location.hash);
        }
        return;
      }

      const url = internalTarget(e);
      if (!url) return;
      const here = window.location;
      if (url.pathname === here.pathname && url.search === here.search && url.hash) return; // in-page anchor
      e.preventDefault();
      // a #section link is scrolled to by Next itself; a link to the current page only scrolls up
      if (!url.hash) {
        if (samePage(url, here)) scrollToTop();
        else scrollTopPending.current = true;
      }
      router.push(url.pathname + url.search + url.hash);
    };
    const prefetched = new Set<string>();
    const onHover = (e: Event) => {
      const url = internalTarget(e);
      if (!url || prefetched.has(url.pathname)) return;
      prefetched.add(url.pathname);
      router.prefetch(url.pathname + url.search);
    };
    window.addEventListener("click", onClick);
    document.addEventListener("mouseover", onHover, { passive: true });
    document.addEventListener("touchstart", onHover, { passive: true });
    return () => {
      window.removeEventListener("click", onClick);
      document.removeEventListener("mouseover", onHover);
      document.removeEventListener("touchstart", onHover);
    };
  }, [router]);

  return null;
}
