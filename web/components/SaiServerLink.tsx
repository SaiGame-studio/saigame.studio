// Turns every "Sai Server" in a (translated) text into a link to the Sai Server basic tutorials.
// Use it only on text that is not already inside a link or button.
export const SAI_SERVER_TUTORIALS_URL = "https://server.saigame.studio/tutorials/basic";

export function linkSaiServer(text: string) {
  return text.split(/(Sai Server)/).map((part, i) =>
    i % 2 ? (
      <a key={i} className="sai-server-link" href={SAI_SERVER_TUTORIALS_URL}>
        {part}
      </a>
    ) : (
      part
    ),
  );
}
