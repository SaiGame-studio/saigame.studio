# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- Primary audience of the `/products/` page: game studios and game developers evaluating a backend for their own games.
- saigame.studio as a whole also serves players of SaiGame's games and learners of SaiGame's game-dev courses (Unity Dev Basic, Basic Sai Server).

## Product Purpose

saigame.studio is the public website of SaiGame, a game studio. It presents the company's games (Purgatory, The Immortal, The Watcher), its courses, its blog, and its two platform products:

- **Sai Server** (`server.saigame.studio`): a game backend platform sold to external studios and open for sign-up. Studios manage studios, teams, games and game servers from one interface.
- **Sai Play** (`play.saigame.studio`): the live player-facing site shared by every game running on Sai Server. Players use one Sai account across games, see the games they have played, and hold an sGem balance.

Success for `/products/`: a studio visitor understands what Sai Server and Sai Play are, how they relate, and goes on to Sai Server. Links to Sai Server use https://server.saigame.studio/why-sai-server.

## Positioning

Sai Server and Sai Play share one backend (`ss-go`) and one account: a game built on Sai Server gets a ready player site (Sai Play) with single sign-on and the sGem currency. Unconfirmed: whether studios can skip building player accounts entirely.

## Capabilities and Constraints

- Verified Sai Server areas (studio site routes): studios, teams, games, servers, payment, docs, tutorials, roadmap. API roles: Super admin, Studio owner, Studio member, Provider, Player.
- Sai Server landing (`/sai-server/`) states: game server fleet management, backend logic written in Lua inside Unity, and more (see `web/components/pages/sai-server/SaiServerLanding.tsx`).
- Sai Play: SSO with the studio site via a shared refresh cookie on `.saigame.studio`; sGem is the in-system currency.
- Sai Play also offers game shops and in-app purchases (IAP) for games on Sai Server (confirmed by the user).
- Site stack: Next.js 16 (App Router) rebuild of a WordPress/Kubio site; pages keep Kubio markup and per-page scoped CSS. `/sai-server/` is the exception, with its own CSS module design.
- Bilingual EN/VI: every visible string goes through `t()` with Vietnamese in `web/i18n/vi.extra.json` and `web/i18n/vi.json`.
- Engine-neutral copy: say "SDK" generically (never "Sai SDK" or "Sai Unity SDK") and never present Sai Server as Unity-only; Sai Server is planned to integrate with more game engines. Engines appear only in an SDK list, currently one entry: Unity SDK (https://github.com/SaiGame-studio/ss-unity/releases).
- Pricing (confirmed by the owner, 2026-11-11): every game has a free base; capacity is added with Materia stacks (Uncommon, Rare, Epic, Legendary) paid monthly in sCoin, as in the Sai Server web admin's Materia catalog. Values live in `web/components/pages/product-sai-server/content.ts` (`FREE_BASE`, `TIERS`); copy changes from the catalog, never estimate them. USD prices use the sCoin package rate (`USD_PER_SCOIN` = $0.01: packages run from 100 sCoin for $0.99 to 100,000 sCoin for $1,000).
- Undecided: customer list, performance numbers. None may be invented.

## Brand Commitments

- Name and logo: SaiGame (`/wp-content/uploads/2025/12/LogoSaiGame_shadown.png`, white lettering, needs a dark backdrop).
- Product names written "Sai Server" and "Sai Play"; the currency is "sGem".

## Evidence on Hand

- Sai Server illustration: `web/public/wp-content/uploads/2026/04/Gemini_Generated_Image_vmtnw6vmtnw6vmtn.png` (AI-generated, 1024x1024).
- Sai Server landing copy and feature list in `SaiServerLanding.tsx`.
- No Sai Play imagery, no screenshots of either product, no testimonials, no customer logos, no metrics. Do not fabricate them.

## Product Principles

1. Truth over hype: claim only what the code and team confirm.
2. One account, one backend: present Sai Server and Sai Play as two sides of the same platform.
3. Studios first on product pages; players are reached through Sai Play itself.
4. Every page works in English and Vietnamese.
