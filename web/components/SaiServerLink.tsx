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
