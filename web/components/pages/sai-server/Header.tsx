"use client";

import { useState } from "react";
import s from "./SaiServer.module.css";
import { CloseIcon, DiscordIcon, MenuIcon } from "./icons";
import { DISCORD_URL, GET_STARTED_URL, LOGO_SRC } from "./links";

type NavItem = { href: string; label: string; active?: boolean };

type Props = {
  lang: "en" | "vi";
  nav: NavItem[];
  labels: { community: string; discord: string; discordCommunity: string; joinDiscord: string; getStarted: string; toggleMenu: string };
};

// Language links reuse the site's mechanism: ClientRouter handles clicks on [data-lang].
function LangSwitch({ lang }: { lang: "en" | "vi" }) {
  return (
    <div className={s.lang}>
      {(["en", "vi"] as const).map((code) => (
        <a key={code} href="#" data-lang={code} className={`${s.langLink} ${lang === code ? s.langActive : ""}`} aria-current={lang === code ? "true" : undefined}>
          {code.toUpperCase()}
        </a>
      ))}
    </div>
  );
}

export default function Header({ lang, nav, labels }: Props) {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className={s.header}>
      <div className={s.container}>
        <div className={s.headerRow}>
          <a href="/" className={s.brand}>
            <span className={s.logoBox}>
              {/* eslint-disable-next-line @next/next/no-img-element -- static asset served from /public, same as the homepage */}
              <img src={LOGO_SRC} alt="Sai Game" width={549} height={425} decoding="async" />
            </span>
            <span className={s.brandText}>
              <span className={s.brandName}>SAI STUDIO</span>
              <span className={s.brandTag}>Sai Server Engine</span>
            </span>
          </a>

          <nav className={s.nav}>
            {nav.map((item) => (
              <a key={item.href} href={item.href} className={`${s.navLink} ${item.active ? s.navLinkActive : ""}`} aria-current={item.active ? "page" : undefined}>
                {item.label}
              </a>
            ))}
            <a href="#discord" className={`${s.navLink} ${s.navCommunity}`}>
              <DiscordIcon />
              <span>{labels.community}</span>
            </a>
          </nav>

          <div className={s.actions}>
            <LangSwitch lang={lang} />
            <a href={DISCORD_URL} target="_blank" rel="noopener noreferrer" className={s.btnDiscordSoft}>
              <DiscordIcon />
              <span>{labels.discord}</span>
            </a>
            <a href={GET_STARTED_URL} className={s.btnPrimarySm}>
              {labels.getStarted}
            </a>
          </div>

          <button type="button" className={s.menuBtn} aria-label={labels.toggleMenu} aria-expanded={open} onClick={() => setOpen((v) => !v)}>
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {open && (
        <div className={s.mobileMenu}>
          {nav.map((item) => (
            <a key={item.href} href={item.href} onClick={close} className={`${s.mobileLink} ${item.active ? s.mobileLinkActive : ""}`}>
              {item.label}
            </a>
          ))}
          <a href="#discord" onClick={close} className={`${s.mobileLink} ${s.mobileLinkDiscord}`}>
            <DiscordIcon />
            <span>{labels.joinDiscord}</span>
          </a>
          <div className={s.mobileActions}>
            <LangSwitch lang={lang} />
            <a href={DISCORD_URL} target="_blank" rel="noopener noreferrer" onClick={close} className={`${s.btnDiscordSoft} ${s.block}`}>
              <DiscordIcon />
              <span>{labels.discordCommunity}</span>
            </a>
            <a href={GET_STARTED_URL} onClick={close} className={`${s.btnPrimarySm} ${s.block}`}>
              {labels.getStarted}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
