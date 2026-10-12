// Renders a page's WordPress stylesheets in their original cascade order.
// React 19 hoists <link rel="stylesheet" precedence> into <head>; links sharing one
// precedence keep their render order, so the cascade matches the WordPress page.
// Each page ships its own Kubio "style-local-N" CSS, so internal links must stay plain
// <a> (full page loads) — client-side navigation would leak one page's CSS into another.
type WpStylesheet = { href: string; media: string };

export default function WpStyles({ styles }: { styles: WpStylesheet[] }) {
  return (
    <>
      {styles.map((s) => (
        <link key={s.href} rel="stylesheet" href={s.href} media={s.media === "all" ? undefined : s.media} precedence="wp" />
      ))}
    </>
  );
}
