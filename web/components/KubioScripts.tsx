"use client";

import { useEffect } from "react";

// The original WordPress page relies on Kubio's frontend JS (sticky header, dropdown menus,
// mobile off-canvas menu, scroll animations). We load the same files, in the same order,
// after React has hydrated so jQuery never touches the DOM before React owns it.
const SCRIPTS = [
  "/wp-includes/js/jquery/jquery.min.js",
  "/wp-includes/js/jquery/jquery-migrate.min.js",
  "/wp-includes/js/dist/hooks.min.js",
  "/wp-includes/js/dist/i18n.min.js",
  "/wp-content/plugins/kubio/build/scripts/index.js",
  "/wp-content/plugins/kubio/build/frontend/index.js",
];

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

function navigationPadding() {
  const nav = document.querySelector<HTMLElement>('[data-colibri-navigation-overlap="true"], .h-navigation_overlap');
  if (!nav) return;
  document.querySelectorAll<HTMLElement>(".h-navigation-padding").forEach((el) => {
    el.style.paddingTop = nav.offsetHeight + "px";
  });
}

export default function KubioScripts() {
  useEffect(() => {
    navigationPadding();
    if (window.__kubioLoaded) return;
    window.__kubioLoaded = true;
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
  return null;
}
