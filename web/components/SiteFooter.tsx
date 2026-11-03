// Site-wide footer, shared by every page (Kubio pages and the CSS-module pages alike).
import { getI18n } from "@/lib/i18n";
import s from "./SiteFooter.module.css";

const LOGO_SRC = "/wp-content/uploads/2025/12/LogoSaiGame_shadown.png";

export default async function SiteFooter() {
  const { t } = await getI18n();
  const columns = [
    {
      title: t("Products"),
      links: [
        { href: "https://server.saigame.studio/why-sai-server", label: "Sai Server" },
        { href: "https://play.saigame.studio/", label: "Sai Play" },
      ],
    },
    {
      title: t("Explore"),
      links: [
        { href: "/games/", label: "Games" },
        { href: "/game-courses/", label: t("Game Courses") },
        { href: "/blog/", label: "Blog" },
      ],
    },
    {
      title: t("Contact Us"),
      links: [
        { href: "/contact-us/", label: t("Contact page") },
        { href: "mailto:simon@saigame.studio", label: "simon@saigame.studio" },
      ],
    },
    {
      title: t("Community"),
      links: [
        { href: "https://discord.gg/UU3YarmVde", label: "Discord" },
        { href: "https://www.youtube.com/@SaiGame", label: "YouTube" },
        { href: "https://github.com/SaiGame-studio", label: "GitHub" },
      ],
    },
  ];

  return (
    <footer className={s.footer} aria-labelledby="site-footer-title">
      <div className={s.inner}>
        <div className={s.brand}>
          <a href="/" className={s.logoLink}>
            <img className={s.logo} src={LOGO_SRC} width={549} height={425} alt="SaiGame" />
          </a>
          <h2 id="site-footer-title" className={s.tagline}>{t("SaiGame makes games and the platform to run them.")}</h2>
        </div>
        <nav className={s.columns} aria-label={t("Footer")}>
          {columns.map((column) => (
            <div key={column.title}>
              <h3 className={s.heading}>{column.title}</h3>
              <ul className={s.list}>
                {column.links.map((link) => (
                  <li key={link.href}>
                    <a className={s.link} href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>
      <div className={s.bottom}>
        <p className={s.copy}>© 2026 SaiGame. {t("All rights reserved.")}</p>
        <a className={s.link} href="/privacy-policy/">{t("Privacy Policy")}</a>
      </div>
    </footer>
  );
}
