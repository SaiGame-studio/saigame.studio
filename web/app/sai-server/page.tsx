import type { Metadata } from "next";
import SaiServerLanding from "@/components/pages/sai-server/SaiServerLanding";

export const metadata: Metadata = {
  title: "Sai Server – SaiGame",
  description:
    "Sai Server is an all-in-one solution that helps game studios manage servers, monitor players, and operate their games professionally, all within a single interface.",
  alternates: { canonical: "/sai-server/" },
};

// Not a WordPress page: its own design (components/pages/sai-server), styled by a CSS module scoped to the page.
// The data-wp-page wrapper is kept so KubioScripts/ClientRouter treat it like the other pages.
export default function SaiServerPage() {
  return (
    <div data-wp-page="sai-server" style={{ display: "contents" }}>
      <SaiServerLanding />
    </div>
  );
}
