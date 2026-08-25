import type { MetadataRoute } from "next";

import { SITE_URL } from "@/lib/site";

/**
 * One entry, because the site is one page. `lastModified` is stamped at build
 * time, which is what we want: it changes when the page is redeployed, which
 * is the only time the content can have changed.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
