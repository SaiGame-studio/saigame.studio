// /products/infinite-book-shelf: a tech showcase of Infinite Book Shelf, a Unity game (browser, PC, Android) built on Sai Server.
// Not Kubio markup: styled by InfiniteBookShelf.module.css; the page keeps the site's Kubio nav and footer around it.
// All copy lives in content.ts. Screenshots render as numbered placeholders until their `ready` flag is set.
import ImageLightbox from "@/components/ImageLightbox";
import { getI18n } from "@/lib/i18n";
import { fill } from "@/lib/fill";
import { linkProducts, SAI_SERVER_URL } from "@/components/SaiServerLink";
import { COPY, GAME_NAME, IMAGE_DIR, SHOTS, STORES, type Shot } from "./content";
import s from "./InfiniteBookShelf.module.css";

type T = (en: string) => string;

/** CSS classes for product names: colour, no underline, kept on one line (saigame.studio/AGENTS.md) */
const NAMES = {
  server: `${s.productName} ${s.nameServer}`,
  play: `${s.productName} ${s.namePlay}`,
};

/** every "Sai Server" / "Sai Play" in body copy and headings links to its product */
const productLinks = (text: string) => linkProducts(text, NAMES);
/** product names inside a link or button: coloured only */
const keepNames = (text: string) => linkProducts(text, NAMES, false);

/** the game's name in its own green, the page's signature colour; product names still link */
const gameName = <span className={s.gameName}>{GAME_NAME}</span>;
function brandNames(text: string) {
  return text.split(GAME_NAME).flatMap((part, i) => (i === 0 ? [productLinks(part)] : [<span key={i} className={s.gameName}>{GAME_NAME}</span>, productLinks(part)]));
}

/** brandNames plus **bold** words, for copy that marks its key words */
function rich(text: string) {
  return text.split(/\*\*(.+?)\*\*/).map((part, i) => (i % 2 ? <strong key={i} className={s.strong}>{brandNames(part)}</strong> : brandNames(part)));
}

const LOGO_SRC = "/wp-content/uploads/2025/12/LogoSaiGame_shadown.png";
/** the "Where to play" section; every Play button scrolls to it */
const STORES_ID = "where-to-play";

function Arrow() {
  return (
    <svg className={s.arrow} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 8h10M9 4l4 4-4 4" />
    </svg>
  );
}

/** a screenshot, or a numbered placeholder box (number, file name, size) until the file is added */
function Media({ shot, t, eager = false, className = "", caption }: { shot: Shot; t: T; eager?: boolean; className?: string; caption?: string }) {
  const ratio = { aspectRatio: `${shot.width} / ${shot.height}` };
  if (!shot.ready) {
    return (
      <figure className={`${s.media} ${className}`}>
        <div className={s.placeholder} style={ratio} role="img" aria-label={`${t(COPY.placeholder)} #${shot.n}: ${t(shot.alt)}`}>
          <span className={s.placeholderNumber}>#{shot.n}</span>
          <span className={s.placeholderFile}>{shot.file}</span>
          <span className={s.placeholderSize}>{shot.width}×{shot.height}</span>
        </div>
      </figure>
    );
  }
  const src = `${IMAGE_DIR}/${shot.file}`;
  return (
    <figure className={`${s.media} ${className}`}>
      {caption && <figcaption className={s.caption}>{caption}</figcaption>}
      {shot.file.endsWith(".webm") ? (
        <video className={s.image} src={src} width={shot.width} height={shot.height} autoPlay muted loop playsInline aria-label={t(shot.alt)} />
      ) : (
        <img data-zoom tabIndex={0} className={s.image} src={src} width={shot.width} height={shot.height} alt={t(shot.alt)} loading={eager ? "eager" : "lazy"} decoding="async" />
      )}
    </figure>
  );
}

/** #6: client -> SaiServer prefab -> REST API -> backend, with the stores shipping the builds */
function ArchitectureDiagram({ t }: { t: T }) {
  const a = COPY.server.arch;
  return (
    <figure className={s.diagram} role="img" aria-label={t(COPY.server.archAlt)}>
      <div className={s.archHost} aria-hidden="true">
        <span className={`${s.archNode} ${s.archStores}`}>
          <strong>{t(a.stores)}</strong>
          <span className={s.archSub}>{STORES.map((store) => store.name).join(" · ")}</span>
        </span>
        <span className={s.archHostLabel}>{t(a.ships)} ↓</span>
      </div>
      <ol className={s.archFlow} aria-hidden="true">
        <li className={s.archNode}>
          <strong>{t(a.client)}</strong>
        </li>
        <li className={`${s.archNode} ${s.archAccent}`}>
          <strong>{t(a.prefab)}</strong>
          <span className={s.archSub}>{a.modules}</span>
        </li>
        <li className={s.archNode}>
          <strong>{t(a.api)}</strong>
        </li>
        <li className={s.archNode}>
          <strong>{t(a.backend)}</strong>
        </li>
      </ol>
    </figure>
  );
}

export default async function InfiniteBookShelf() {
  const { t } = await getI18n();
  const playHref = `#${STORES_ID}`;
  const { hero, stores, game, server, engineering, facts, close } = COPY;

  return (
    <div className={s.page}>
      <ImageLightbox closeLabel={t("Close")} />
      {/* 3.1 hero */}
      <section className={`${s.hero} h-navigation-padding`} aria-labelledby="ibs-title">
        <div className={`${s.wrap} ${s.heroGrid}`}>
          <div>
            <p className={s.eyebrow}>{t(hero.eyebrow)}</p>
            <h1 id="ibs-title" className={s.title}>
              {fill(t(hero.title), { game: gameName, server: <a className={NAMES.server} href={SAI_SERVER_URL}>Sai Server</a> })}
            </h1>
            <p className={s.lead}>{brandNames(t(hero.lead))}</p>
            <div className={s.actions}>
              <a className={s.button} href={playHref}>
                {t(hero.play)} <Arrow />
              </a>
              <a className={s.buttonGhost} href={SAI_SERVER_URL}>
                {keepNames(t(hero.build))}
              </a>
            </div>
            <ul className={s.facts} aria-label={t(facts.title)}>
              {facts.items.map((f) => (
                <li key={f} className={s.fact}>{f}</li>
              ))}
            </ul>
          </div>
          <Media shot={SHOTS.hero} t={t} eager className={s.heroMedia} />
        </div>
      </section>

      {/* where to play: one card per store, "Coming soon" until its link is set in content.ts */}
      <section id={STORES_ID} className={`${s.section} ${s.storesSection}`} aria-labelledby="ibs-stores">
        <div className={s.wrap}>
          <p className={s.kicker}>{t(stores.kicker)}</p>
          <h2 id="ibs-stores" className={s.h2}>{t(stores.title)}</h2>
          <p className={s.sectionLead}>{brandNames(t(stores.lead))}</p>
          <ul className={s.stores}>
            {STORES.map((store) => (
              <li key={store.id} className={s.store} data-store={store.id}>
                <span className={s.storeName}>{store.name}</span>
                <span className={s.storePlatform}>{t(store.platform)}</span>
                {store.url ? (
                  <a className={s.storeLink} href={store.url} target="_blank" rel="noopener external">
                    {fill(t(stores.open), { store: store.name })} <Arrow />
                  </a>
                ) : (
                  <span className={s.storeSoon}>{t(stores.soon)}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 3.2 gameplay video (youtube-nocookie: no tracking cookies until the visitor presses play) */}
      <section className={s.section} aria-labelledby="ibs-game">
        <div className={s.wrap}>
          <p className={s.kicker}>{t(game.kicker)}</p>
          <h2 id="ibs-game" className={`${s.h2} ${s.gameTitle}`}>{t(game.title)}</h2>
          <p className={s.tagline}>{t(game.tagline)}</p>
          <div className={s.video}>
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${game.videoId}?rel=0`}
              title={t(game.videoTitle)}
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* 3.3 powered by Sai Server */}
      <section className={`${s.section} ${s.band}`} aria-labelledby="ibs-server">
        <div className={s.wrap}>
          <p className={s.kicker}>{brandNames(t(server.kicker))}</p>
          <h2 id="ibs-server" className={s.h2}>{t(server.title)}</h2>
          <p className={s.sectionLead}>{rich(t(server.lead))}</p>

          <div className={s.serverGrid}>
            {/* column 1: the features, then the architecture that ties them together */}
            <div>
              <dl className={s.featureList}>
                {server.features.map((f) => (
                  <div key={f.name} className={s.feature}>
                    <dt className={s.featureName}>
                      {t(f.name)}
                      {"tag" in f && <code className={s.tag}>{f.tag}</code>}
                    </dt>
                    <dd className={s.featureText}>{t(f.text)}</dd>
                  </div>
                ))}
              </dl>
              <div className={s.diagrams}>
                <h3 className={s.h3}>{t(server.archTitle)}</h3>
                <ArchitectureDiagram t={t} />
              </div>
            </div>
            <div className={s.sideMedia}>
              <Media shot={SHOTS.login} t={t} />
              <Media shot={SHOTS.inspector} t={t} />
            </div>
          </div>

          <div className={s.sdkGrid}>
            <div>
              <h3 className={s.h3}>{t(server.alsoTitle)}</h3>
              <p className={s.text}>{t(server.alsoLead)}</p>
              <ul className={s.chips}>
                {server.also.map((m) => (
                  <li key={m} className={s.chip}>{t(m)}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3.4 engineering highlights */}
      <section className={s.section} aria-labelledby="ibs-eng">
        <div className={s.wrap}>
          <p className={s.kicker}>{t(engineering.kicker)}</p>
          <h2 id="ibs-eng" className={s.h2}>{t(engineering.title)}</h2>
          <ul className={s.metrics}>
            {engineering.metrics.map((m) => (
              <li key={m.unit} className={s.metric}>
                <span className={s.metricValue}>
                  {m.from && <span className={s.metricFrom}>{m.from} →</span>} {m.to}
                </span>
                <span className={s.metricUnit}>{t(m.unit)}</span>
                <span className={s.metricText}>{t(m.text)}</span>
              </li>
            ))}
          </ul>
          <Media shot={SHOTS.engineering} t={t} className={s.wide} caption={t(engineering.imageCaption)} />
          <ul className={s.points}>
            {engineering.points.map((p) => (
              <li key={p.title} className={s.point}>
                <h3 className={s.h3}>{t(p.title)}</h3>
                <p className={s.text}>{t(p.text)}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 3.6 final CTA */}
      <section className={s.close} aria-labelledby="ibs-close">
        <div className={s.wrap}>
          <img className={s.logo} src={LOGO_SRC} alt="SaiGame" width={160} height={160} loading="lazy" decoding="async" />
          <h2 id="ibs-close" className={s.closeTitle}>{brandNames(t(close.title))}</h2>
          <div className={s.closeActions}>
            <a className={s.button} href={playHref}>
              {t(close.play)} <Arrow />
            </a>
            <a className={s.buttonGhost} href={SAI_SERVER_URL}>
              {keepNames(t(close.build))}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
