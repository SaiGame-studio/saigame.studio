import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/share";

// Every crawler, search engines and AI crawlers alike, may read the whole site.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
