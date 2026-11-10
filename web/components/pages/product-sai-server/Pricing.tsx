// Pricing on /products/sai-server: a comparison table with the free base every game starts with, then one column per
// Materia tier (data in content.ts: FREE_BASE, TIERS). Limits are named once, in the first column; on narrow screens
// the table scrolls sideways inside its frame with that column pinned. Numbers are formatted compactly in the visitor's language.
import { fill } from "@/lib/fill";
import { Arrow, productLinks, rich, s, type T } from "../product-landing/shared";
import { COPY, FREE_BASE, LIMITS, MATERIA_DIR, PAYMENT_URL, SCOIN_SRC, STUDIO_URL, TIERS, USD_PER_SCOIN } from "./content";

export default function Pricing({ t, lang }: { t: T; lang: string }) {
  const p = COPY.pricing;
  const compact = new Intl.NumberFormat(lang, { notation: "compact", maximumFractionDigits: 1 });
  const full = new Intl.NumberFormat(lang);
  // USD always as "$1,500", matching the sCoin package prices quoted in the buy note
  const usd = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
  /** a limit cell: the free base as is, a tier's grant with "+", "—" when it adds nothing */
  const value = (key: string, n: number | null, plus: boolean) =>
    n ? <td key={key}>{`${plus ? "+" : ""}${compact.format(n)}`}</td> : <td key={key} className={s.cellNone}>—</td>;

  return (
    // skip-scroll-spy: the top menu links here ("Pricing"). Without it Kubio's menu scroll-spy registers this section and,
    // because pages change client-side, keeps writing "#pricing" into the URL of every page visited afterwards.
    <section id="pricing" skip-scroll-spy="true" className={`${s.section} ${s.band}`} aria-labelledby="ss-pricing">
      <div className={s.wrap}>
        <p className={s.kicker}>{t(p.kicker)}</p>
        <h2 id="ss-pricing" className={s.h2}>{t(p.title)}</h2>
        <p className={s.sectionLead}>{rich(t(p.lead))}</p>

        <div className={s.priceFrame} role="region" aria-labelledby="ss-pricing" tabIndex={0}>
          <table className={s.priceTable}>
            <thead>
              <tr>
                <td className={s.cornerCell} />
                <th scope="col" className={s.planHead} data-tier="free">
                  <span className={s.tierOrbFree} aria-hidden="true" />
                  <span className={s.tierName}>{t(p.freeName)}</span>
                  <span className={s.tierAmount}>{t(p.freePrice)}</span>
                  <span className={s.tierUnit}>{t(p.freeNote)}</span>
                </th>
                {TIERS.map((tier) => (
                  <th key={tier.id} scope="col" className={s.planHead} data-tier={tier.id}>
                    <img className={s.tierOrb} src={`${MATERIA_DIR}/${tier.id}.png`} width={144} height={144} alt="" loading="lazy" decoding="async" />
                    <span className={s.tierName}>{t(tier.name)}</span>
                    <span className={s.tierAmount}>{usd.format(tier.price * USD_PER_SCOIN)}</span>
                    <span className={s.tierUnit}>{t(p.perMonth)}</span>
                    <span className={s.tierScoin}>
                      <img className={s.coin} src={SCOIN_SRC} width={16} height={16} alt="" />
                      {fill(t(p.inScoin), { amount: full.format(tier.price) })}
                    </span>
                    <span className={s.tierSlots}>{fill(t(p.slots), { slots: tier.slots })}</span>
                  </th>
                ))}
              </tr>
              <tr className={s.groupRow}>
                <td className={s.cornerCell} />
                <td>{t(p.included)}</td>
                {TIERS.map((tier) => (
                  <td key={tier.id}>{t(p.perStack)}</td>
                ))}
              </tr>
            </thead>
            <tbody>
              {LIMITS.map((name) => (
                <tr key={name}>
                  <th scope="row">{t(name)}</th>
                  {value("free", FREE_BASE[name], false)}
                  {TIERS.map((tier) => value(tier.id, tier.grants[name], true))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <ul className={s.ticks}>
          {p.notes.map((note) => (
            <li key={note} className={s.tick}>{productLinks(t(note))}</li>
          ))}
          <li className={s.tick}>
            {t(p.buy)
              .split("{link}")
              .flatMap((part, i) => (i === 0 ? [productLinks(part)] : [<a key={i} className={s.inlineLink} href={PAYMENT_URL}>{t(p.buyLink)}</a>, productLinks(part)]))}
          </li>
        </ul>

        <div className={s.actions}>
          <a className={s.button} href={STUDIO_URL}>
            {t(p.start)} <Arrow />
          </a>
        </div>
      </div>
    </section>
  );
}
