// FAQ of /products/sai-server: native <details> rows, so every answer is in the HTML for search engines and AI crawlers.
// faqEntries() is also the source of the page's FAQPage JSON-LD (lib/structured-data.ts), so both say the same thing.
import { COPY, FREE_BASE, TIERS } from "./content";
import { keepNames, productLinks, s, type T } from "../product-landing/shared";

type FaqEntry = { id: string; question: string; answer: string };

const fillValues = (text: string, values: Record<string, number>) =>
  text.replace(/\{(\w+)\}/g, (match, key: string) => (key in values ? values[key].toLocaleString("en-US") : match));

/** the questions and answers in the visitor's language (pass the identity function for English) */
export function faqEntries(t: T): FaqEntry[] {
  const { faq, hero, lua, play } = COPY;
  // the free base always publishes these limits (content.ts); null only marks limits without a published base
  const prices: Record<string, number> = {
    ccu: FREE_BASE.CCU ?? 0,
    profiles: FREE_BASE["Player profiles"] ?? 0,
    items: FREE_BASE.Items ?? 0,
    shops: FREE_BASE.Shops ?? 0,
    quests: FREE_BASE.Quests ?? 0,
    price: Math.min(...TIERS.map((tier) => tier.price)),
  };
  return [
    { id: "what-is", question: t(faq.whatIs), answer: t(hero.lead) },
    { id: "engines", question: t(faq.engines), answer: t(faq.enginesAnswer) },
    { id: "price", question: t(faq.price), answer: fillValues(t(faq.priceAnswer), prices) },
    { id: "lua", question: t(faq.lua), answer: t(lua.lead) },
    { id: "compare", question: t(faq.compare), answer: t(faq.compareAnswer) },
    { id: "play", question: t(faq.play), answer: t(play.text) },
  ];
}

export default function Faq({ t }: { t: T }) {
  return (
    <section id="faq" className={s.section} aria-labelledby="ss-faq">
      <div className={s.wrap}>
        <h2 id="ss-faq" className={s.h2}>{t(COPY.faq.title)}</h2>
        <div className={s.faqList}>
          {faqEntries(t).map((entry) => (
            <details key={entry.id} id={`faq-${entry.id}`} className={s.faqItem}>
              {/* the summary acts as a button: product names keep their colour without a link */}
              <summary className={s.faqQuestion}>
                <span>{keepNames(entry.question)}</span>
                <svg className={s.faqIcon} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                  <path d="M8 3v10M3 8h10" />
                </svg>
              </summary>
              <p className={s.faqAnswer}>{productLinks(entry.answer)}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
