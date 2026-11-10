// All copy for /products/sai-play. Facts come from the Sai Play app (play.saigame.studio: PRODUCT.md, AGENTS.md and
// lib/i18n/translations/en.json) and saigame.studio/PRODUCT.md. Sai Play has no game catalog, news or promotions:
// do not add them. No screenshots exist yet, so the page draws labelled illustrations with sample values.
// Strings are English source text passed through t(); vi/ja live in i18n/vi.json, i18n/vi.extra.json and i18n/ja.json.
// **text** marks bold words (keep the markers when translating).

/** sample values for the illustrations; not real player data */
export const SAMPLE = {
  balance: "1,250",
  game: { name: "Infinite Book Shelf", cover: "/images/products/infinite-book-shelf/hero.webp", level: 12, xp: 64 },
};

export const COPY = {
  metaTitle: "Sai Play – One account for every game on Sai Server",
  metaDescription:
    "Sai Play is the player site shared by every game on Sai Server: one Sai account, the games you have played and your progress, your items, game shops and one sGem balance.",

  hero: {
    eyebrow: "Player site",
    title: "{play}: one account for every game.",
    lead: "Sai Play is the player site shared by every game on Sai Server. Players sign in once, see the games they have played and their progress, and keep **one sGem balance** across all of them.",
    visit: "Visit Sai Play",
    build: "Build with Sai Server",
  },

  facts: {
    title: "At a glance",
    items: ["One Sai account", "sGem wallet", "Two-factor sign-in", "English · Tiếng Việt · 日本語"],
  },

  mock: {
    alt: "Illustration of Sai Play: the player's sGem balance in the header and a list of their games with level, XP and last played date",
    label: "Your games",
    level: "Level {level}",
    lastPlayed: "Last played today",
    yourGame: "Your game",
    yourGameMeta: "Shows up here once players play it",
    note: "Illustration with sample values",
  },

  player: {
    kicker: "For players",
    title: "Everything in one place",
    lead: "The same account works in every game on Sai Server, and Sai Play is where players see it all.",
    items: [
      { title: "Your games", text: "Every game played with this account, with level, XP and the last time it was played, searchable by name." },
      { title: "Your items", text: "Each game's page lists your items and containers, with category, rarity, quantity and what is equipped." },
      { title: "Game shops", text: "Buy from the shops a game opens on Sai Play. Purchases arrive in the game's mailbox or straight in your inventory." },
      { title: "sGem wallet", text: "One sGem balance for every game. Top it up on Sai Play and spend it in game shops." },
    ],
  },

  account: {
    kicker: "One account, two sites",
    title: "Sign in once, on either site",
    lead: "Sai Play and Sai Server share one backend and one account. A player who is a developer, or a developer who plays, never needs a second login.",
    features: [
      { name: "Single sign-on", text: "Signed in on Sai Server? You are signed in on Sai Play too. Signing out on one site signs you out of both." },
      { name: "Safe sessions", text: "The access token stays in memory and the refresh token in an HttpOnly cookie, never in browser storage." },
      { name: "Two-factor sign-in", text: "Google Authenticator with ten one-time recovery codes, and a guided way to move to a new phone." },    ],
    archTitle: "How it fits together",
    arch: {
      game: "Your game",
      gameSub: "through the SDK",
      play: "Sai Play",
      playSub: "for players",
      server: "Sai Server",
      serverSub: "web admin for studios",
      account: "one Sai account",
      backend: "Sai backend",
      backendSub: "accounts · progress · items · shops · sGem",
    },
    archAlt: "Diagram: your game (through the SDK), Sai Play for players and the Sai Server web admin for studios all use one Sai account on the same Sai backend, which holds accounts, progress, items, shops and sGem.",
  },

  studio: {
    kicker: "For studios",
    title: "Your game gets a player site, with nothing extra to build",
    lead: "Run your game on Sai Server and it shows up on Sai Play for the players who play it. You decide what is shown from the Sai Server web admin.",
    items: [
      { title: "A public game page", text: "The game's details and image come from the studio, with a release status: released, coming soon or to be announced." },
      { title: "Players' progress and items", text: "Level, XP, inventory and containers come straight from the data your game already stores on Sai Server." },
      { title: "Your shops, your choice", text: "Pick which shops appear on Sai Play. Prices can be in sGem or your game's own currency, with purchase limits and daily, weekly or monthly restocks." },
    ],
    cta: "Start with Sai Server",
  },

  sgem: {
    kicker: "sGem",
    title: "One currency across every game",
    lead: "sGem is the currency of the Sai platform. Players top up once on Sai Play and spend it in the shops of any game that sells items for sGem.",
    points: [
      "Choose an sGem package and a payment method.",
      "Pay by bank transfer: scan the QR code, or transfer manually with the payment note.",
      "The sGem is added to the wallet as soon as the payment is confirmed.",
    ],
    mockAlt: "Illustration of the sGem wallet: a balance of 1,250 sGem and the three steps to buy more",
    balance: "sGem balance",
    steps: ["Choose a package", "Pay by bank transfer", "sGem added to your wallet"],
  },

  close: {
    title: "Give your players a home on Sai Play.",
    visit: "Visit Sai Play",
    build: "Build your game on Sai Server",
  },
};
