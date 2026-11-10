// /products/sai-play: the Sai Play product landing, in the layout of /products/infinite-book-shelf.
// Not Kubio markup: styled by product-landing/ProductLanding.module.css; the page keeps the site's Kubio nav and footer.
// All copy lives in content.ts. The UI pictures are HTML illustrations with sample values, labelled as such.
import { getI18n } from "@/lib/i18n";
import { fill } from "@/lib/fill";
import { SAI_PLAY_URL, SAI_SERVER_URL } from "@/components/SaiServerLink";
import { Arrow, keepNames, LOGO_SRC, NAMES, productLinks, rich, s, SGEM_SRC, type T } from "../product-landing/shared";
import { COPY, SAMPLE } from "./content";

const SAI_SERVER_PAGE = "/products/sai-server/";

function Gem({ large = false }: { large?: boolean }) {
  return <img className={large ? s.gemLarge : s.gem} src={SGEM_SRC} width={40} height={40} alt="" />;
}

/** hero illustration: the Sai Play header with the wallet, and the player's games */
function PlayerMock({ t }: { t: T }) {
  const m = COPY.mock;
  const g = SAMPLE.game;
  return (
    <figure className={s.media}>
      <div className={s.mock} role="img" aria-label={t(m.alt)}>
        <div className={s.mockBar} aria-hidden="true">
          <span className={`${s.mockBrand} ${s.namePlay}`}>Sai Play</span>
          <span className={s.mockWallet}>
            <Gem /> {SAMPLE.balance}
          </span>
        </div>
        <div className={s.mockBody} aria-hidden="true">
          <p className={s.mockLabel}>{t(m.label)}</p>
          <ul className={s.mockGames}>
            <li className={s.mockGame}>
              <img className={s.mockCover} src={g.cover} width={88} height={55} alt="" loading="eager" decoding="async" />
              <span>
                <span className={s.mockGameName}>{g.name}</span>
                <span className={s.mockGameMeta}>
                  {fill(t(m.level), { level: g.level })} · {t(m.lastPlayed)}
                </span>
                <span className={s.mockXp}>
                  <span style={{ width: `${g.xp}%` }} />
                </span>
              </span>
            </li>
            <li className={s.mockGame}>
              <span className={`${s.mockCover} ${s.mockCoverBlank}`} />
              <span>
                <span className={s.mockGameName}>{t(m.yourGame)}</span>
                <span className={s.mockGameMeta}>{t(m.yourGameMeta)}</span>
              </span>
            </li>
          </ul>
        </div>
      </div>
      <figcaption className={s.mockNote}>{t(m.note)}</figcaption>
    </figure>
  );
}

/** one account on one backend, used by the game, Sai Play and the Sai Server web admin */
function AccountDiagram({ t }: { t: T }) {
  const a = COPY.account.arch;
  const clients = [
    { name: a.game, sub: a.gameSub, accent: false },
    { name: a.play, sub: a.playSub, accent: true },
    { name: a.server, sub: a.serverSub, accent: false },
  ];
  return (
    <figure className={s.diagram} role="img" aria-label={t(COPY.account.archAlt)}>
      <ul className={s.archRow} aria-hidden="true">
        {clients.map((c) => (
          <li key={c.name} className={`${s.archNode} ${c.accent ? s.archAccent : ""}`}>
            <strong>{keepNames(t(c.name))}</strong>
            <span className={s.archSub}>{t(c.sub)}</span>
          </li>
        ))}
      </ul>
      <span className={s.archDown} aria-hidden="true">↓ {t(a.account)} ↓</span>
      <div className={`${s.archNode} ${s.archAccent}`} aria-hidden="true">
        <strong>{t(a.backend)}</strong>
        <span className={s.archSub}>{t(a.backendSub)}</span>
      </div>
    </figure>
  );
}

/** the sGem wallet and how to top it up */
function WalletMock({ t }: { t: T }) {
  const g = COPY.sgem;
  return (
    <figure className={s.media}>
      <div className={s.mock} role="img" aria-label={t(g.mockAlt)}>
        <div className={s.mockBody} aria-hidden="true">
          <div className={s.mockBalance}>
            <Gem large />
            <span>
              <span className={s.mockBalanceValue}>{SAMPLE.balance}</span>
              <span className={s.mockBalanceLabel}>{t(g.balance)}</span>
            </span>
          </div>
          <ol className={s.mockSteps}>
            {g.steps.map((step) => (
              <li key={step} className={s.mockStep}>{t(step)}</li>
            ))}
          </ol>
        </div>
      </div>
      <figcaption className={s.mockNote}>{t(COPY.mock.note)}</figcaption>
    </figure>
  );
}

export default async function SaiPlayProduct() {
  const { t } = await getI18n();
  const { hero, facts, player, account, studio, sgem, close } = COPY;

  return (
    <div className={`${s.page} ${s.themePlay}`}>
      {/* hero */}
      <section className={`${s.hero} h-navigation-padding`} aria-labelledby="sp-title">
        <div className={`${s.wrap} ${s.heroGrid}`}>
          <div>
            <p className={s.eyebrow}>{t(hero.eyebrow)}</p>
            <h1 id="sp-title" className={s.title}>
              {fill(t(hero.title), { play: <a className={NAMES.play} href={SAI_PLAY_URL}>Sai Play</a> })}
            </h1>
            <p className={s.lead}>{rich(t(hero.lead))}</p>
            <div className={s.actions}>
              <a className={s.button} href={SAI_PLAY_URL}>
                {keepNames(t(hero.visit))} <Arrow />
              </a>
              <a className={s.buttonGhost} href={SAI_SERVER_PAGE}>
                {keepNames(t(hero.build))}
              </a>
            </div>
            <ul className={s.facts} aria-label={t(facts.title)}>
              {facts.items.map((f) => (
                <li key={f} className={s.fact}>{t(f)}</li>
              ))}
            </ul>
          </div>
          <PlayerMock t={t} />
        </div>
      </section>

      {/* what players get */}
      <section className={`${s.section} ${s.cardsSection}`} aria-labelledby="sp-player">
        <div className={s.wrap}>
          <p className={s.kicker}>{t(player.kicker)}</p>
          <h2 id="sp-player" className={s.h2}>{t(player.title)}</h2>
          <p className={s.sectionLead}>{productLinks(t(player.lead))}</p>
          <ul className={s.cards}>
            {player.items.map((item, i) => (
              <li key={item.title} className={s.card}>
                <span className={s.cardNumber}>0{i + 1}</span>
                <h3 className={s.cardTitle}>{t(item.title)}</h3>
                <p className={s.cardText}>{productLinks(t(item.text))}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* one account across Sai Play and Sai Server */}
      <section className={`${s.section} ${s.band}`} aria-labelledby="sp-account">
        <div className={s.wrap}>
          <p className={s.kicker}>{t(account.kicker)}</p>
          <h2 id="sp-account" className={s.h2}>{t(account.title)}</h2>
          <p className={s.sectionLead}>{productLinks(t(account.lead))}</p>
          <div className={s.split}>
            <dl className={s.featureList}>
              {account.features.map((f) => (
                <div key={f.name} className={s.feature}>
                  <dt className={s.featureName}>{t(f.name)}</dt>
                  <dd className={s.featureText}>{productLinks(t(f.text))}</dd>
                </div>
              ))}
            </dl>
            <div>
              <h3 className={s.h3}>{t(account.archTitle)}</h3>
              <AccountDiagram t={t} />
            </div>
          </div>
        </div>
      </section>

      {/* for studios */}
      <section className={s.section} aria-labelledby="sp-studio">
        <div className={s.wrap}>
          <p className={s.kicker}>{t(studio.kicker)}</p>
          <h2 id="sp-studio" className={s.h2}>{t(studio.title)}</h2>
          <p className={s.sectionLead}>{productLinks(t(studio.lead))}</p>
          <ul className={s.points}>
            {studio.items.map((p) => (
              <li key={p.title} className={s.point}>
                <h3 className={s.h3}>{t(p.title)}</h3>
                <p className={s.text}>{productLinks(t(p.text))}</p>
              </li>
            ))}
          </ul>
          <a className={s.textLink} href={SAI_SERVER_PAGE}>
            {keepNames(t(studio.cta))} <Arrow />
          </a>
        </div>
      </section>

      {/* sGem */}
      <section className={`${s.section} ${s.band}`} aria-labelledby="sp-sgem">
        <div className={`${s.wrap} ${s.split}`}>
          <div>
            <p className={s.kicker}>{t(sgem.kicker)}</p>
            <h2 id="sp-sgem" className={s.h2}>{t(sgem.title)}</h2>
            <p className={s.sectionLead}>{productLinks(t(sgem.lead))}</p>
            <ul className={s.ticks}>
              {sgem.points.map((p) => (
                <li key={p} className={s.tick}>{t(p)}</li>
              ))}
            </ul>
          </div>
          <WalletMock t={t} />
        </div>
      </section>

      {/* final CTA */}
      <section className={s.close} aria-labelledby="sp-close">
        <div className={s.wrap}>
          <img className={s.logo} src={LOGO_SRC} alt="SaiGame" width={160} height={160} loading="lazy" decoding="async" />
          <h2 id="sp-close" className={s.closeTitle}>{productLinks(t(close.title))}</h2>
          <div className={s.closeActions}>
            <a className={s.button} href={SAI_PLAY_URL}>
              {keepNames(t(close.visit))} <Arrow />
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
