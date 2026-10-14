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
