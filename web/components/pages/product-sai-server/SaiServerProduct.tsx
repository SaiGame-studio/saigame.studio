// /products/sai-server: the Sai Server product landing, in the layout of /products/infinite-book-shelf.
// Not Kubio markup: styled by product-landing/ProductLanding.module.css; the page keeps the site's Kubio nav and footer.
// All copy lives in content.ts.
import ImageLightbox from "@/components/ImageLightbox";
import { getI18n } from "@/lib/i18n";
import { fill } from "@/lib/fill";
import { SAI_SERVER_URL } from "@/components/SaiServerLink";
import { Arrow, DISCORD_URL, keepNames, LOGO_SRC, Media, NAMES, productLinks, rich, s, SDKS, TUTORIAL_URL } from "../product-landing/shared";
import { COPY, IMAGE_DIR, SHOTS, SHOWCASE } from "./content";
import Pricing from "./Pricing";

const SAI_PLAY_PAGE = "/products/sai-play/";

export default async function SaiServerProduct() {
  const { lang, t } = await getI18n();
  const { hero, facts, steps, features, lua, trust, sdks, play, showcase, close } = COPY;

  return (
    <div className={`${s.page} ${s.themeServer}`}>
      <ImageLightbox closeLabel={t("Close")} />
      {/* hero */}
      <section className={`${s.hero} h-navigation-padding`} aria-labelledby="ss-title">
        <div className={`${s.wrap} ${s.heroGrid}`}>
          <div>
            <p className={s.eyebrow}>{t(hero.eyebrow)}</p>
            <h1 id="ss-title" className={s.title}>
              {fill(t(hero.title), { server: <a className={NAMES.server} href={SAI_SERVER_URL}>Sai Server</a> })}
            </h1>
            <p className={s.lead}>{productLinks(t(hero.lead))}</p>
            <div className={s.actions}>
              <a className={s.button} href={SAI_SERVER_URL}>
                {keepNames(t(hero.start))} <Arrow />
              </a>
              <a className={s.buttonGhost} href={TUTORIAL_URL}>
                {t(hero.tutorial)}
              </a>
            </div>
            <ul className={s.facts} aria-label={t(facts.title)}>
              {facts.items.map((f) => (
                <li key={f} className={s.fact}>{t(f)}</li>
              ))}
            </ul>
          </div>
          <Media dir={IMAGE_DIR} shot={SHOTS.admin} t={t} eager caption={t(hero.adminCaption)} />
        </div>
      </section>

      {/* integration: the three steps stacked on the left, the SDK screenshot beside them on the right */}
      <section className={`${s.section} ${s.cardsSection}`} aria-labelledby="ss-steps">
        <div className={s.wrap}>
          <p className={s.kicker}>{t(steps.kicker)}</p>
          <h2 id="ss-steps" className={s.h2}>{t(steps.title)}</h2>
          <div className={`${s.split} ${s.splitCenter}`}>
            <div>
              <ol className={s.stepList}>
                {steps.items.map((step, i) => (
                  <li key={step.title} className={s.card}>
                    <span className={s.cardNumber}>0{i + 1}</span>
                    <h3 className={s.cardTitle}>{t(step.title)}</h3>
                    <p className={s.cardText}>{productLinks(t(step.text))}</p>
                  </li>
                ))}
              </ol>
              <h3 className={`${s.h3} ${s.sdkTitle}`}>{t(sdks.title)}</h3>
              <p className={s.text}>{t(sdks.lead)}</p>
              <ul className={s.chips}>
                {SDKS.map((sdk) => (
                  <li key={sdk.name} className={s.chip}>
                    <a href={sdk.href}>{sdk.name} →</a>
                  </li>
                ))}
              </ul>
            </div>
            <Media dir={IMAGE_DIR} shot={SHOTS.sdk} t={t} caption={t(steps.sdkCaption)} />
          </div>
        </div>
      </section>

      {/* features, grouped like the studio site */}
      <section className={`${s.section} ${s.band}`} aria-labelledby="ss-features">
        <div className={s.wrap}>
          <p className={s.kicker}>{t(features.kicker)}</p>
          <h2 id="ss-features" className={s.h2}>{t(features.title)}</h2>
          <p className={s.sectionLead}>{rich(t(features.lead))}</p>
          <ul className={s.groups}>
            {features.groups.map((group) => (
              <li key={group.title}>
                <h3 className={s.groupTitle}>{t(group.title)}</h3>
                <dl className={s.featureList}>
                  {group.items.map((f) => (
                    <div key={f.name} className={s.feature}>
                      <dt className={s.featureName}>{t(f.name)}</dt>
                      <dd className={s.featureText}>{t(f.text)}</dd>
                    </div>
                  ))}
                </dl>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* server-side Lua */}
      <section className={s.section} aria-labelledby="ss-lua">
        <div className={`${s.wrap} ${s.split}`}>
          <div>
            <p className={s.kicker}>{t(lua.kicker)}</p>
            <h2 id="ss-lua" className={s.h2}>{t(lua.title)}</h2>
            <p className={s.sectionLead}>{t(lua.lead)}</p>
            <ul className={s.ticks}>
              {lua.points.map((p) => (
                <li key={p} className={s.tick}>{t(p)}</li>
              ))}
            </ul>
          </div>
          <Media dir={IMAGE_DIR} shot={SHOTS.lua} t={t} caption={t(lua.caption)} />
        </div>
      </section>

      {/* reliability */}
      <section className={`${s.section} ${s.band}`} aria-labelledby="ss-trust">
        <div className={s.wrap}>
          <p className={s.kicker}>{t(trust.kicker)}</p>
          <h2 id="ss-trust" className={s.h2}>{t(trust.title)}</h2>
          <ul className={`${s.points} ${s.points2}`}>
            {trust.items.map((p) => (
              <li key={p.title} className={s.point}>
                <h3 className={s.h3}>{t(p.title)}</h3>
                <p className={s.text}>{t(p.text)}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Sai Play and a game built on Sai Server */}
      <section className={s.section} aria-labelledby="ss-play">
        <div className={s.wrap}>
          <p className={s.kicker}>{t(play.kicker)}</p>
          <h2 id="ss-play" className={s.h2}>{productLinks(t(play.title))}</h2>
          <p className={s.sectionLead}>{productLinks(t(play.text))}</p>
          <a className={s.textLink} href={SAI_PLAY_PAGE}>
            {keepNames(t(play.link))} <Arrow />
          </a>

          <article className={s.showcase} aria-labelledby="ss-showcase">
            <img data-zoom tabIndex={0} className={s.image} src={SHOWCASE.image.file} width={SHOWCASE.image.width} height={SHOWCASE.image.height} alt={t(showcase.alt)} loading="lazy" decoding="async" />
            <div>
              <p className={s.kicker}>{keepNames(t(showcase.kicker))}</p>
              <h3 id="ss-showcase" className={s.h2}>{showcase.title}</h3>
              <p className={s.sectionLead}>{productLinks(t(showcase.text))}</p>
              <a className={s.textLink} href={SHOWCASE.href}>
                {t(showcase.link)} <Arrow />
              </a>
            </div>
          </article>
        </div>
      </section>

      <Pricing t={t} lang={lang} />

      {/* final CTA */}
      <section className={s.close} aria-labelledby="ss-close">
        <div className={s.wrap}>
          <img className={s.logo} src={LOGO_SRC} alt="SaiGame" width={160} height={160} loading="lazy" decoding="async" />
          <h2 id="ss-close" className={s.closeTitle}>{t(close.title)}</h2>
          <p className={s.closeLead}>{productLinks(t(close.lead))}</p>
          <div className={s.closeActions}>
            <a className={s.button} href={SAI_SERVER_URL}>
              {keepNames(t(close.start))} <Arrow />
            </a>
            <a className={s.buttonGhost} href={DISCORD_URL}>
              {t(close.discord)}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

