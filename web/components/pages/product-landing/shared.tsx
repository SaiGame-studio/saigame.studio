// Building blocks shared by the product landing pages (/products/sai-server, /products/sai-play).
import { linkProducts } from "@/components/SaiServerLink";
import s from "./ProductLanding.module.css";

export type T = (en: string) => string;

/** CSS classes for product names: colour, no underline, kept on one line (saigame.studio/AGENTS.md) */
export const NAMES = {
  server: `${s.productName} ${s.nameServer}`,
  play: `${s.productName} ${s.namePlay}`,
};

/** every "Sai Server" / "Sai Play" in body copy and headings links to its product */
export const productLinks = (text: string) => linkProducts(text, NAMES);
/** product names inside a link or button: coloured only */
export const keepNames = (text: string) => linkProducts(text, NAMES, false);

/** productLinks plus **bold** words, for copy that marks its key words */
export function rich(text: string) {
  return text.split(/\*\*(.+?)\*\*/).map((part, i) => (i % 2 ? <strong key={i} className={s.strong}>{productLinks(part)}</strong> : productLinks(part)));
}

export const LOGO_SRC = "/wp-content/uploads/2025/12/LogoSaiGame_shadown.png";
export const SGEM_SRC = "/images/products/sgem.svg";
export const DISCORD_URL = "https://discord.gg/UU3YarmVde";
export const TUTORIAL_URL = "https://server.saigame.studio/tutorials/basic/get-started/create-a-studio";
export const SDKS = [{ name: "Unity SDK", href: "https://github.com/SaiGame-studio/ss-unity/releases" }];

export type Shot = { file: string; width: number; height: number; alt: string };

export function Arrow() {
  return (
    <svg className={s.arrow} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 8h10M9 4l4 4-4 4" />
    </svg>
  );
}

/** a screenshot with an optional caption below it */
export function Media({ dir, shot, t, eager = false, caption, className = "" }: { dir: string; shot: Shot; t: T; eager?: boolean; caption?: string; className?: string }) {
  return (
    <figure className={`${s.media} ${className}`}>
      <img data-zoom tabIndex={0} className={s.image} src={`${dir}/${shot.file}`} width={shot.width} height={shot.height} alt={t(shot.alt)} loading={eager ? "eager" : "lazy"} decoding="async" />
      {caption && <figcaption className={s.caption}>{caption}</figcaption>}
    </figure>
  );
}

/** the shared stylesheet, for the page components */
export { s };
