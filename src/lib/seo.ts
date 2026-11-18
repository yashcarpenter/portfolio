import type { Metadata } from "next";
import { site } from "@/content/site";

/**
 * Canonical site origin, used for metadata, sitemap and robots.
 * Order: explicit NEXT_PUBLIC_SITE_URL → Vercel's production domain (set automatically on
 * Vercel builds) → localhost for local development.
 */
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : "http://localhost:3000")
).replace(/\/$/, "");

interface PageMetaInput {
  /** Short page name; the layout's template turns "Work" into "Work · Yash Carpenter". */
  title: string;
  description: string;
  /** Route path, e.g. "/work". Sets the canonical URL. */
  path: string;
}

/** Per-page title, description, canonical URL and social preview text. */
export function pageMetadata({ title, description, path }: PageMetaInput): Metadata {
  const fullTitle = `${title} · ${site.name}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title: fullTitle, description, url: path },
    twitter: { title: fullTitle, description },
  };
}
