import { Inter, JetBrains_Mono } from "next/font/google";
import { getI18n } from "@/lib/i18n";
import s from "./SaiServer.module.css";
import Header from "./Header";
import SubscribeForm from "./SubscribeForm";
import { DISCORD_URL, GET_STARTED_URL, LOGO_SRC } from "./links";
import {
  ArrowRightIcon, CalendarCheckIcon, CloudIcon, DiscordIcon, GemIcon, NetworkIcon, ServerIcon, SlidersIcon, UsersIcon,
} from "./icons";

// next/font downloads the fonts at build time and serves them from the site (no Google request at runtime).
const sans = Inter({ subsets: ["latin", "vietnamese"], weight: ["300", "400", "500", "600", "700", "800"], variable: "--font-sai-sans", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin", "vietnamese"], weight: ["400", "500", "600", "800"], variable: "--font-sai-mono", display: "swap" });

const FEATURES = [
  {
    Icon: ServerIcon,
    title: "Game Server Fleet Management",
    text: "Orchestrate dedicated game servers globally with automated provisioning, zero-downtime rolling updates, and region-aware scaling.",
  },
  {
    Icon: UsersIcon,
    title: "Live Player Monitoring",
    text: "Track concurrent users (CCU), session lengths, retention metrics, and real-time player states directly from a unified panel.",
  },
  {
    Icon: GemIcon,
    title: "LiveOps & Economy",
    text: "Run dynamic events, manage player inventories, currencies, leaderboards, and store configurations without pushing client updates.",
  },
  {
    Icon: SlidersIcon,
    title: "Single-Pane Control",
    text: "Operate all servers, inspect player logs, trigger live patches, and manage team permissions within a single, intuitive interface.",
  },
  {
    Icon: NetworkIcon,
    title: "Intelligent Matchmaking",
    text: "Flexible skill-based (SBMM) and latency-based matchmaking rules tailored to deliver quick queue times and fair matches.",
  },
  {
    Icon: CloudIcon,
    title: "Scalable Cloud Infrastructure",
    text: "Built on enterprise-grade cloud architecture guaranteeing high availability, low latency, and protection against traffic surges.",
  },
];

const METRICS = [
  { value: "1,200+", label: "Developers" },
  { value: "24/7", label: "Community Support" },
  { value: "Direct", label: "Dev Team Access" },
];

export default async function SaiServerLanding() {
  const { lang, t } = await getI18n();

  const nav = [
    { href: "/", label: t("Home") },
    { href: "/games/", label: t("Games") },
    { href: "/courses/", label: t("Courses") },
    { href: "/sai-server/", label: "Sai Server", active: true },
    { href: "/blog/", label: t("Blog") },
  ];

  return (
    <div className={`${s.root} ${sans.variable} ${mono.variable}`}>
      <Header
        lang={lang}
        nav={nav}
        labels={{
          community: t("Community"),
          discord: "Discord",
          discordCommunity: t("Discord Community"),
          joinDiscord: t("Join Discord"),
          getStarted: t("Get Started"),
          toggleMenu: t("Toggle menu"),
        }}
      />

      <main className={s.main}>
        {/* Hero */}
        <section className={s.hero}>
          <div className={s.container}>
            <div className={s.heroInner}>
              <div className={s.badge}>
                <span className={s.pulseDot} />
                <span className={s.badgeCode}>SAI SERVER</span>
                <span className={s.badgeSep}>•</span>
                <span className={s.badgeText}>{t("All-In-One Game Operations Platform")}</span>
              </div>

              <h1 className={s.h1}>
                <span style={{ display: "block" }}>{t("Less Backend,")}</span>
                <span className={s.gradientText}>{t("More Gameplay")}</span>
              </h1>

              <p className={s.lead}>
                {t("Sai Server is an all-in-one solution that helps game studios manage servers, monitor players, and operate their games professionally, all within a single interface.")}
              </p>

              <div className={s.ctaRow}>
                <a href={GET_STARTED_URL} className={s.btnPrimary}>
                  <span>{t("Get Started")}</span>
                  <ArrowRightIcon />
                </a>
                <a href={DISCORD_URL} target="_blank" rel="noopener noreferrer" className={s.btnSecondary}>
                  <CalendarCheckIcon />
                  <span>{t("Schedule Demo")}</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Core features */}
        <section id="features" className={s.features}>
          <div className={s.container}>
            <div className={s.sectionHead}>
              <span className={s.eyebrow}>Sai Server Suite</span>
              <h2 className={s.h2}>{t("All-In-One Studio Operations")}</h2>
              <p className={s.sectionLead}>{t("Manage, monitor, and scale your multiplayer titles without building custom backend infrastructure.")}</p>
            </div>

            <div className={s.grid}>
              {FEATURES.map(({ Icon, title, text }) => (
                <div key={title} className={s.card}>
                  <div className={s.cardIcon}>
                    <Icon />
                  </div>
                  <h3 className={s.cardTitle}>{t(title)}</h3>
                  <p className={s.cardText}>{t(text)}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Community: Discord */}
        <section id="discord" className={s.community}>
          <div className={s.containerMd}>
            <div className={s.discordCard}>
              <div className={s.discordBg}>
                <DiscordIcon />
              </div>

              <div className={s.discordGrid}>
                <div className={s.discordLeft}>
                  <div className={s.pill}>
                    <DiscordIcon />
                    <span>{t("Official Community Server")}</span>
                  </div>
                  <h2 className={s.h2Light}>{t("Join us on Discord server")}</h2>
                  <p className={s.discordText}>
                    {t("Connect with game developers, studio engineering leads, and creators using Sai Server. Get instant technical support, share feature feedback, and get early access to upcoming product updates.")}
                  </p>
                  <div className={s.metrics}>
                    {METRICS.map((m) => (
                      <div key={m.label}>
                        <div className={s.metricValue}>{t(m.value)}</div>
                        <div className={s.metricLabel}>{t(m.label)}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className={s.ctaBox}>
                  <div className={s.ctaIcon}>
                    <DiscordIcon />
                  </div>
                  <h3 className={s.ctaTitle}>SAI STUDIO Discord</h3>
                  <p className={s.ctaText}>{t("Hang out, ask questions, and build better games together.")}</p>
                  <a href={DISCORD_URL} target="_blank" rel="noopener noreferrer" className={s.btnDiscord}>
                    <DiscordIcon />
                    <span>{t("Join Discord Server")}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Early access */}
        <section id="newsletter" className={s.newsletter}>
          <div className={s.containerSm}>
            <div className={s.newsCard}>
              <div className={s.newsInner}>
                <h2 className={s.newsTitle}>{t("Ready to simplify your game ops?")}</h2>
                <p className={s.newsText}>{t("Start operating your games professionally with Sai Server. Get early access today.")}</p>
                <SubscribeForm
                  placeholder={t("Enter your work email")}
                  submit={t("Request Access")}
                  thanks={t("Thanks! Early access is announced on our Discord server, join us there.")}
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer id="contact" className={s.footer}>
        <div className={s.container}>
          <div className={s.footerGrid}>
            <div className={s.footerBrand}>
              <div className={s.footerLogoRow}>
                <div className={s.footerLogo}>
                  {/* eslint-disable-next-line @next/next/no-img-element -- static asset served from /public, same as the homepage */}
                  <img src={LOGO_SRC} alt="Sai Game" width={549} height={425} loading="lazy" decoding="async" />
                </div>
                <span className={s.footerName}>SAI STUDIO</span>
              </div>
              <p className={s.footerText}>
                {t("Sai Server is an all-in-one solution that helps game studios manage servers, monitor players, and operate their games professionally.")}
              </p>
              <div className={s.socials}>
                <a href={DISCORD_URL} target="_blank" rel="noopener noreferrer" title="Discord" aria-label="Discord">
                  <DiscordIcon />
                </a>
              </div>
            </div>

            <div>
              <h4 className={s.footerHeading}>Sai Server</h4>
              <ul className={s.footerList}>
                {["Fleet Management", "Player Monitoring", "LiveOps Economy", "Matchmaking"].map((label) => (
                  <li key={label}>
                    <a href="#features" className={s.footerLink}>{t(label)}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className={s.footerHeading}>{t("Community")}</h4>
              <ul className={s.footerList}>
                <li>
                  <a href={DISCORD_URL} target="_blank" rel="noopener noreferrer" className={`${s.footerLink} ${s.footerLinkDiscord}`}>
                    <DiscordIcon />
                    {t("Discord Server")}
                  </a>
                </li>
                <li><a href="/blog/" className={s.footerLink}>{t("Blog")}</a></li>
                <li><a href={GET_STARTED_URL} className={s.footerLink}>{t("Basic Sai Server")}</a></li>
              </ul>
            </div>

            <div>
              <h4 className={s.footerHeading}>{t("Company")}</h4>
              <ul className={s.footerList}>
                <li><a href="/nguon-goc-sai-game/" className={s.footerLink}>{t("About Us")}</a></li>
                <li><a href="/games/" className={s.footerLink}>{t("Games")}</a></li>
                <li><a href="/courses/" className={s.footerLink}>{t("Courses")}</a></li>
                <li><a href="/privacy-policy/" className={s.footerLink}>{t("Privacy Policy")}</a></li>
              </ul>
            </div>
          </div>

          <div className={s.footerBottom}>
            <span>© {new Date().getFullYear()} SAI STUDIO. {t("All rights reserved.")}</span>
            <div className={s.footerBottomLinks}>
              <a href="/privacy-policy/">{t("Privacy")}</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
