import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url;
  return [
    { url: `${base}/`, lastModified: new Date() },
    { url: `${base}/gallery/`, lastModified: new Date() },
    { url: `${base}/about/`, lastModified: new Date() },
  ];
}
