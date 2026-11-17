// /llms.txt (llmstxt.org): a Markdown summary of the site for AI assistants and answer engines.
// Built from the same data as the pages (games, blog posts, the Sai Server and Sai Play copy), so it stays current.
import { SITE_URL } from "@/lib/share";
import { GAMES, gameHref } from "@/components/pages/games/games";
import { BLOG_POSTS } from "@/components/pages/blog/posts";
import { COPY as SAI_SERVER, TIERS, USD_PER_SCOIN } from "@/components/pages/product-sai-server/content";
import { COPY as SAI_PLAY } from "@/components/pages/product-sai-play/content";

export const dynamic = "force-static";

const SERVER_APP = "https://server.saigame.studio";
const link = (title: string, url: string, note?: string) => `- [${title}](${url.startsWith("http") ? url : SITE_URL + url})${note ? `: ${note}` : ""}`;

function body(): string {
  const usd = (value: number) => `$${value.toLocaleString("en-US")}`;
  const prices = TIERS.map((tier) => tier.price * USD_PER_SCOIN);
  return [
    "# SaiGame",
    "",
    "> SaiGame is a game studio that builds Sai Server, a game backend platform with accounts, cloud save, inventory, in-game economy, quests, leaderboards, analytics and server-side Lua scripting, and makes its own games on it.",
    "",
    `Sai Server is managed from one web admin and connects to a game through the SDK (a Unity SDK is available). Every game starts on a free base; more capacity comes from Materia stacks, from ${usd(Math.min(...prices))} to ${usd(Math.max(...prices))} per stack per month, paid in sCoin (100 sCoin = $1). Sai Play is the player site shared by every game on Sai Server.`,
    "",
    "## Sai Server",
    "",
    link("Sai Server", "/products/sai-server/", SAI_SERVER.metaDescription),
    link("Sai Server pricing", "/products/sai-server/#pricing", "free base for every game, Materia capacity stacks paid in sCoin"),
    link("Why Sai Server", `${SERVER_APP}/why-sai-server`, "what Sai Server offers studios and how it integrates with Unity"),
    link("Learning Center", `${SERVER_APP}/tutorials`, "step-by-step Sai Server tutorials, from creating a studio to server-side Lua"),
    link("Download SDK", `${SERVER_APP}/download-sdk`, "the Sai Server Unity SDK, the API documentation and the Postman collection"),
    link("Sai Play", "/products/sai-play/", SAI_PLAY.metaDescription),
    link("Products", "/products/", "Sai Server for studios and Sai Play for their players"),
    "",
    "## Games",
    "",
    ...GAMES.map((game) => link(game.title, gameHref(game), game.description)),
    "",
    "## Courses",
    "",
    link("Game Courses", "/game-courses/", "free Unity video courses on YouTube, from C# basics to complete 2D and 3D game projects"),
    "",
    "## Blog",
    "",
    ...BLOG_POSTS.map((post) => link(post.title, `/blog/${post.slug}/`, `${post.description} (${post.date})`)),
    "",
    "## Optional",
    "",
    link("Careers", "/careers/"),
    link("Contact", "/contact-us/", "simon@saigame.studio or Discord"),
    link("Privacy Policy", "/privacy-policy/"),
    "",
  ].join("\n");
}

export function GET() {
  return new Response(body(), { headers: { "Content-Type": "text/markdown; charset=utf-8" } });
}
