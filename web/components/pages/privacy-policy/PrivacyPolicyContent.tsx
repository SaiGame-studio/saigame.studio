// Privacy Policy body: written for the Next.js site (the WordPress page only had the default template text).
// Content lives in content/privacy-policy.ts (EN / VI); markup uses the WordPress block classes so the
// page keeps the original theme styles.
import { Fragment, type ReactNode } from "react";
import { getI18n } from "@/lib/i18n";
import { CONTACT_EMAIL, DISCORD_URL, LABELS, LAST_UPDATED, PRIVACY_POLICY } from "@/content/privacy-policy";

const LINK = /\[([^\]]+)\]\(([^)]+)\)/g;
const BOLD = /\*\*([^*]+)\*\*/;

function rich(text: string, emailSuffix: string): ReactNode[] {
  const out: ReactNode[] = [];
  const src = text.replace("DISCORD_URL", DISCORD_URL);
  let last = 0;
  const pushText = (s: string) => {
    const parts = s.split("{{EMAIL}}");
    parts.forEach((p, i) => {
      if (p) out.push(p);
      if (i < parts.length - 1 && CONTACT_EMAIL) {
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

function paragraph(text: string, emailSuffix: string): ReactNode {
  const m = text.match(BOLD);
  if (!m || m.index === undefined) return rich(text, emailSuffix);
  return [
    ...rich(text.slice(0, m.index), emailSuffix),
    <strong key="b">{m[1]}</strong>,
    ...rich(text.slice(m.index + m[0].length), emailSuffix),
  ];
}

export default async function PrivacyPolicyContent() {
  const { lang } = await getI18n();
  const labels = LABELS[lang];
  return (
    <>
      {PRIVACY_POLICY[lang].map((b, i) => (
        <Fragment key={i}>
          {b.type === "h2" && <h2 className="wp-block-heading">{b.text}</h2>}
          {b.type === "p" && <p className="wp-block-paragraph">{paragraph(b.text, labels.email)}</p>}
          {b.type === "ul" && (
            <ul className="wp-block-list">
              {b.items.map((it, j) => (
                <li key={j}>{rich(it, labels.email)}</li>
              ))}
            </ul>
          )}
        </Fragment>
      ))}
      <p className="wp-block-paragraph">
        <em>
          {labels.lastUpdated}: {LAST_UPDATED[lang]}
        </em>
      </p>
    </>
  );
}
