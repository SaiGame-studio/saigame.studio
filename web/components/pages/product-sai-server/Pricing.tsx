// Pricing on /products/sai-server: the free base every game starts with, then the four Materia tiers
// (data in content.ts: FREE_BASE, TIERS). Numbers are formatted compactly in the visitor's language.
import { fill } from "@/lib/fill";
import { productLinks, rich, s, type T } from "../product-landing/shared";
import { COPY, FREE_BASE, LIMITS, MATERIA_DIR, SCOIN_SRC, TIERS, USD_PER_SCOIN } from "./content";

export default function Pricing({ t, lang }: { t: T; lang: string }) {
  const p = COPY.pricing;
  const compact = new Intl.NumberFormat(lang, { notation: "compact", maximumFractionDigits: 1 });
  const full = new Intl.NumberFormat(lang);
  // USD always as "$1,500", matching the sCoin package prices quoted in the notes
  const usd = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
  const grant = (n: number | null, plus: boolean) => (n ? `${plus ? "+" : ""}${compact.format(n)}` : "—");

  return (
    <section id="pricing" className={`${s.section} ${s.band}`} aria-labelledby="ss-pricing">
      <div className={s.wrap}>
        <p className={s.kicker}>{t(p.kicker)}</p>
        <h2 id="ss-pricing" className={s.h2}>{t(p.title)}</h2>
        <p className={s.sectionLead}>{rich(t(p.lead))}</p>

        <ul className={s.tiers}>
          <li className={`${s.tier} ${s.tierFree}`}>
            <div className={s.tierHead}>
              <span className={s.tierOrbFree} aria-hidden="true" />
              <h3 className={s.tierName}>{t(p.freeName)}</h3>
            </div>
            <div className={s.tierPrice}>
              <span className={s.tierAmount}>{t(p.freePrice)}</span>
              <span className={s.tierUnit}>{t(p.freeNote)}</span>
            </div>
            <LimitList title={t(p.included)} t={t} values={LIMITS.map((k) => grant(FREE_BASE[k], false))} />
          </li>

          {TIERS.map((tier) => (
            <li key={tier.id} className={s.tier} data-tier={tier.id}>
              <div className={s.tierHead}>
                <img className={s.tierOrb} src={`${MATERIA_DIR}/${tier.id}.png`} width={144} height={144} alt="" loading="lazy" decoding="async" />
                <h3 className={s.tierName}>{t(tier.name)}</h3>
              </div>
              <div className={s.tierPrice}>
                <span className={s.tierAmount}>{usd.format(tier.price * USD_PER_SCOIN)}</span>
                <span className={s.tierUnit}>{t(p.perMonth)}</span>
                <span className={s.tierScoin}>
                  <img className={s.coin} src={SCOIN_SRC} width={16} height={16} alt="" />
                  {fill(t(p.inScoin), { amount: full.format(tier.price) })}
                </span>
                <span className={s.tierSlots}>{fill(t(p.slots), { slots: tier.slots })}</span>
              </div>
              <LimitList title={t(p.perStack)} t={t} values={LIMITS.map((k) => grant(tier.grants[k], true))} />
            </li>
          ))}
        </ul>

        <ul className={s.ticks}>
          {p.notes.map((note) => (
            <li key={note} className={s.tick}>{productLinks(t(note))}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function LimitList({ title, values, t }: { title: string; values: string[]; t: T }) {
  return (
    <div className={s.limits}>
      <p className={s.limitsTitle}>{title}</p>
      <dl className={s.limitList}>
        {LIMITS.map((name, i) => (
          <div key={name} className={s.limit}>
            <dt>{t(name)}</dt>
            <dd className={values[i] === "—" ? s.limitNone : undefined}>{values[i]}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
