import type { MetadataRoute } from "next";
import { homeNavItem, navItems } from "@/content/site";
import { siteUrl } from "@/lib/seo";

const priority: Record<string, number> = { "/": 1, "/work": 0.9, "/about": 0.8, "/contact": 0.8, "/skills": 0.7 };

/** One entry per real page, generated from the navigation so new pages are picked up automatically. */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [homeNavItem, ...navItems].map(({ href }) => ({
    url: `${siteUrl}${href === "/" ? "" : href}`,
    lastModified,
    changeFrequency: "monthly",
    priority: priority[href] ?? 0.5,
  }));
}
