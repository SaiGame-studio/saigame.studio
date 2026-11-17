// Metadata of a game page, built from its entry in games.ts. /games/<slug>/ JSON-LD is rendered by GameLayout.
import type { Metadata } from "next";
import { getI18n } from "@/lib/i18n";
import { shareMetadata } from "@/lib/share";
import { gameHref, getGame } from "./games";

/** title and description follow the visitor's language, like the page content */
export async function gameMetadata(slug: string): Promise<Metadata> {
  const { t } = await getI18n();
  const game = getGame(slug);
  // the share image is the game's vertical cover, not a 1200x630 card
  return shareMetadata({ path: gameHref(game), title: `${t(game.title)} – SaiGame`, description: t(game.description), image: game.cover, card: false });
}
