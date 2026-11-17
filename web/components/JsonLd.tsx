// Renders schema.org structured data (lib/structured-data.ts) for search engines and AI crawlers.
// "<" is escaped so text inside the data cannot close the script tag.
export default function JsonLd({ data }: { data: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}
