// Turns every "Sai Server" in a (translated) text into a link to the Sai Server basic tutorials.
// href and className are optional overrides for the link target and extra styling.
// Use it only on text that is not already inside a link or button.
export const SAI_SERVER_TUTORIALS_URL = "https://server.saigame.studio/tutorials/basic";

export function linkSaiServer(text: string, href = SAI_SERVER_TUTORIALS_URL, className?: string) {
  return text.split(/(Sai Server)/).map((part, i) =>
    i % 2 ? (
      <a key={i} className={className ? `sai-server-link ${className}` : "sai-server-link"} href={href}>
        {part}
      </a>
    ) : (
      part
    ),
  );
}

export const SAI_SERVER_URL = "https://server.saigame.studio/why-sai-server";
export const SAI_PLAY_URL = "https://play.saigame.studio";

/** CSS classes for each product name; pages pass their own module classes (colour, no underline) */
export type ProductNameClasses = { server: string; play: string };

/**
 * Turns every "Sai Server" and "Sai Play" in a (translated) text into a link to that product,
 * styled per saigame.studio/AGENTS.md. With `linked: false` it only colours the names, for text
 * that is already inside a link or button.
 */
export function linkProducts(text: string, classes: ProductNameClasses, linked = true) {
  return text.split(/(Sai Server|Sai Play)/).map((part, i) => {
    if (i % 2 === 0) return part;
    const isServer = part === "Sai Server";
    const className = isServer ? classes.server : classes.play;
    if (!linked) return <span key={i} className={className}>{part}</span>;
    return (
      <a key={i} className={`sai-server-link ${className}`} href={isServer ? SAI_SERVER_URL : SAI_PLAY_URL}>
        {part}
      </a>
    );
  });
}
