// /privacy-policy/ content. The text lives in content/privacy-policy.ts (EN / VI / JA) and is rendered as is.
// Not Kubio markup: styled by PrivacyPolicy.module.css (dark palette shared with /careers, /products, /contact-us);
// the page keeps the shared TopMenu and SiteFooter.
import type { ReactNode } from "react";
import { getI18n } from "@/lib/i18n";
import { CONTACT_EMAIL, DISCORD_URL, LABELS, LAST_UPDATED, PRIVACY_POLICY, type Block } from "@/content/privacy-policy";
import s from "./PrivacyPolicy.module.css";

const LINK = /\[([^\]]+)\]\(([^)]+)\)/g;
const BOLD = /\*\*([^*]+)\*\*/;

// [label](url) links and the {{EMAIL}} placeholder (shown only when CONTACT_EMAIL is set)
function rich(text: string, emailSuffix: string): ReactNode[] {
  const out: ReactNode[] = [];
  const src = text.replace("DISCORD_URL", DISCORD_URL);
  let last = 0;
  const pushText = (part: string) => {
    const pieces = part.split("{{EMAIL}}");
    pieces.forEach((p, i) => {
      if (p) out.push(p);
      if (i < pieces.length - 1 && CONTACT_EMAIL) {
        out.push(emailSuffix, <a key={`mail-${out.length}`} href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>);
      }
    });
  };
  for (const m of src.matchAll(LINK)) {
    pushText(src.slice(last, m.index));
    const external = /^https?:/.test(m[2]);
    out.push(
      <a key={`l-${m.index}`} href={m[2]} {...(external ? { target: "_blank", rel: "noreferrer noopener" } : {})}>
        {m[1]}
      </a>,
    );
    last = (m.index ?? 0) + m[0].length;
  }
  pushText(src.slice(last));
  return out;
}

// a **bold** lead-in, then rich text
function paragraph(text: string, emailSuffix: string): ReactNode {
  const m = text.match(BOLD);
  if (!m || m.index === undefined) return rich(text, emailSuffix);
  return [
    ...rich(text.slice(0, m.index), emailSuffix),
    <strong key="b">{m[1]}</strong>,
    ...rich(text.slice(m.index + m[0].length), emailSuffix),
  ];
}

type Section = { id: string; title?: string; blocks: Block[] };

// the blocks before the first heading are the intro; each h2 starts a section
function toSections(blocks: Block[]): Section[] {
  const out: Section[] = [{ id: "intro", blocks: [] }];
  for (const b of blocks) {
    if (b.type === "h2") out.push({ id: `section-${out.length}`, title: b.text, blocks: [] });
    else out[out.length - 1].blocks.push(b);
  }
  return out;
}

function Body({ blocks, emailSuffix }: { blocks: Block[]; emailSuffix: string }) {
  return blocks.map((b, i) =>
    b.type === "ul" ? (
      <ul key={i} className={s.list}>
        {b.items.map((it, j) => (
          <li key={j}>{rich(it, emailSuffix)}</li>
        ))}
      </ul>
    ) : b.type === "p" ? (
      <p key={i}>{paragraph(b.text, emailSuffix)}</p>
    ) : null,
  );
}

export default async function PrivacyPolicy() {
  const { t, lang } = await getI18n();
  const labels = LABELS[lang];
  const [intro, ...parts] = toSections(PRIVACY_POLICY[lang]);

  return (
    <div className={s.page}>
      <section className={`${s.hero} h-navigation-padding`} aria-labelledby="privacy-title">
        <div className={`${s.wrap} ${s.heroInner}`}>
          <h1 id="privacy-title" className={s.title}>{t("Privacy Policy")}</h1>
          <p className={s.updated}>
            {labels.lastUpdated}: <time>{LAST_UPDATED[lang]}</time>
          </p>
        </div>
      </section>

      <div className={`${s.wrap} ${s.layout}`}>
        <nav className={s.toc} aria-label={t("Privacy Policy")}>
          <ol>
            {parts.map((p) => (
              <li key={p.id}>
                <a href={`#${p.id}`}>{p.title}</a>
              </li>
            ))}
          </ol>
        </nav>

        <article className={s.article}>
          <div className={s.intro}>
            <Body blocks={intro.blocks} emailSuffix={labels.email} />
          </div>
          {parts.map((p) => (
            <section key={p.id} id={p.id} className={s.section} aria-labelledby={`${p.id}-title`}>
              <h2 id={`${p.id}-title`} className={s.heading}>{p.title}</h2>
              <Body blocks={p.blocks} emailSuffix={labels.email} />
            </section>
          ))}
        </article>
      </div>
    </div>
  );
}
