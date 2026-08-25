import type { MetadataRoute } from "next";

import { SITE_URL } from "@/lib/site";

/**
 * The site is a single public page, so everything is crawlable except the
 * signup endpoint, which only answers POST and has nothing to index.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/api/",
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
