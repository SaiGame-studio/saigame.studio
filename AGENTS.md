# Agent rules

Rules for AI coding agents working in this repository.

## Do not start servers unless asked

- Do **not** start, restart or stop any server or long-running process on your own:
  `npm run dev`, `npm run start`, `next dev` / `next start`, Docker containers, nginx reloads, etc.
- Only do it when the user explicitly asks in the current conversation.
- **Always ask for a second confirmation before running it**, even when the request looks clear.
  State exactly what you will run (command, port) and wait for a clear "yes".
- Never infer permission. Mentioning hot reload, dev mode, "check it in the browser" or
  "I don't want to rebuild" is **not** a request to start a server. Answer how to do it and
  let the user run it themselves.
- If a change needs a running server to be verified, say so and let the user decide.
  Building (`npm run build`) or type-checking to check the code is fine.

## Do not commit or push unless asked

- Do not run `git commit`, `git push` or anything that rewrites history unless the user explicitly asks.
- Leave changes in the working tree and tell the user what changed.

## "Sai Server" in site copy

Every "Sai Server" in the site's body copy follows the style used on `/products`
(`web/components/pages/products/ProductsJourney.tsx`, helper `serverLink`):

- It links to `https://server.saigame.studio/why-sai-server`.
- It is blue: the same colour as "Sai Server" in the `/products` page title (`var(--blue-2)`).
- It has **no underline** (`text-decoration: none`).
- It stays whole on one line (`white-space: nowrap`).

Build these links with `linkProducts(text, classes)` from `web/components/SaiServerLink.tsx`
(`linkProducts(text, classes, false)` for colour only), not by hand, so translated text keeps the same style. Page titles and headings link too
(e.g. "Build on Sai Server." on `/products`). Skip the link (keep the colour) only when the text
is already inside a link or button.

## "Sai Play" in site copy

Every "Sai Play" follows the same rules as "Sai Server" above, with its own link and colour:

- It links to `https://play.saigame.studio`.
- It is light blue: the same colour as "Sai Play" in the `/products` page title (`var(--blue-3)`, `#9cc0ff`).
- It has **no underline** (`text-decoration: none`).
- It stays whole on one line (`white-space: nowrap`).

Page titles and headings link too. Skip the link (keep the colour) only when the text is already
inside a link or button. Build these links with `linkProducts` from `web/components/SaiServerLink.tsx`, not by hand.
