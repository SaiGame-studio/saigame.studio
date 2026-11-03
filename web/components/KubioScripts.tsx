"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// The original WordPress page relies on Kubio's frontend JS (sticky header, dropdown menus,
// mobile off-canvas menu, animations). We load the same files, in the same order, after React
// has hydrated so jQuery never touches the DOM before React owns it.
// Kubio (Colibri) watches the DOM with a MutationObserver and initialises every new
// [data-kubio-component] by itself, so components of a page reached by client-side navigation
// are set up automatically. What we handle here:
//  - Kubio moves off-canvas menus to <body>; they leave the page wrapper, so we tag them with
//    data-wp-owner (the page CSS is scoped to the wrapper or the owner tag) and remove the
//    previous page's panels after a navigation.
//  - the header padding fix (inline script on WordPress) is re-applied on every page.
const SCRIPTS = [
  "/wp-includes/js/jquery/jquery.min.js",
  "/wp-includes/js/jquery/jquery-migrate.min.js",
  "/wp-includes/js/dist/hooks.min.js",
  "/wp-includes/js/dist/i18n.min.js",
  "/wp-content/plugins/kubio/build/scripts/index.js",
  "/wp-content/plugins/kubio/build/frontend/index.js",
];
const MOVED = '[id^="kubio-offscreen-"]';

declare global {
  interface Window {
    kubioFrontendData?: unknown[];
    __kubioLoaded?: boolean;
    wp?: { i18n?: { setLocaleData: (d: unknown) => void } };
  }
}

function load(src: string) {
  return new Promise<void>((resolve, reject) => {
    const s = document.createElement("script");
    s.src = src;
    s.async = false;
    s.onload = () => resolve();
    s.onerror = () => reject(new Error("Failed to load " + src));
    document.body.appendChild(s);
  });
}

const currentPage = () => document.querySelector<HTMLElement>("[data-wp-page]")?.dataset.wpPage ?? "";

const NAV_SELECTOR = '[data-colibri-navigation-overlap="true"], .h-navigation_overlap';
let navObserver: ResizeObserver | null = null;

// The overlapping top menu needs the content below it pushed down by its height. Kubio's own overlap script
// writes ".h-navigation-padding{padding-top:Xpx !important}", and while a client-side navigation swaps the menu
// it measures the detached menu as 0px, so the page jumps up under the menu. This rule wins over Kubio's
// (#kubio adds specificity) and only ever takes a real, non-zero height.
function navigationPadding() {
  const nav = document.querySelector<HTMLElement>(NAV_SELECTOR);
  const height = nav?.offsetHeight ?? 0;
  if (!nav || height === 0) return;
  let sheet = document.getElementById("nav-padding") as HTMLStyleElement | null;
  if (!sheet) {
    sheet = document.createElement("style");
    sheet.id = "nav-padding";
    document.head.appendChild(sheet);
  }
  sheet.textContent = `#kubio .h-navigation-padding{padding-top:${height}px !important}`;
  // follow the menu's own size changes (fonts loading, wrapping at narrow widths)
  navObserver?.disconnect();
  navObserver = new ResizeObserver(() => {
    const h = nav.offsetHeight;
    if (h > 0 && sheet) sheet.textContent = `#kubio .h-navigation-padding{padding-top:${h}px !important}`;
  });
  navObserver.observe(nav);
}

function tagMovedPanels() {
  const page = currentPage();
  // data-wp-host: the page the panel belongs to (for cleanup); data-wp-owner: whose scoped CSS styles it
  // (the shared TopMenu sets its own owner, so it is only filled in when missing).
  document.querySelectorAll<HTMLElement>(`body > ${MOVED}:not([data-wp-host])`).forEach((el) => {
    el.dataset.wpHost = page;
    if (!el.dataset.wpOwner) el.dataset.wpOwner = page;
  });
}

export default function KubioScripts() {
  const pathname = usePathname();

  // once: watch <body> for panels Kubio moves out of the page, then load Kubio
  useEffect(() => {
    if (window.__kubioLoaded) return;
    window.__kubioLoaded = true;
    new MutationObserver(tagMovedPanels).observe(document.body, { childList: true });
    window.kubioFrontendData = [];
    (async () => {
      for (const src of SCRIPTS) {
        await load(src);
        if (src.endsWith("i18n.min.js")) {
          window.wp?.i18n?.setLocaleData({ "text direction\u0004ltr": ["ltr"] });
        }
      }
    })().catch(console.error);
  }, []);

  // every page (first load and client-side navigations)
  useEffect(() => {
    const page = currentPage();
    document.querySelectorAll<HTMLElement>(`body > ${MOVED}[data-wp-host]`).forEach((el) => {
      if (el.dataset.wpHost !== page) el.remove();
    });
    document.documentElement.classList.remove("no-scroll", "h-offcanvas-opened"); // scroll lock left by an open mobile menu
    document.body.classList.remove("no-scroll", "h-offcanvas-opened");
    navigationPadding();
    const t = window.setTimeout(navigationPadding, 400); // after fonts/Kubio settle
    return () => window.clearTimeout(t);
  }, [pathname]);

  return null;
}
