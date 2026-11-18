export type ProjectCategory = "Backend" | "Full Stack" | "Frontend + DB";

/**
 * Which Work-page section a project belongs to.
 * - independent: built and shipped on my own
 * - industry: delivered as part of a job (set `company`)
 */
export type ProjectKind = "independent" | "industry";

/** Section headings on the Work page. Rename the groups here. */
export const projectGroups: Record<ProjectKind, { eyebrow: string; title: string; accent: string; description: string }> = {
  independent: {
    eyebrow: "Independent projects",
    title: "Built &",
    accent: "shipped solo.",
    description: "Products I designed, built and deployed end to end on my own, from database to UI.",
  },
  industry: {
    eyebrow: "Industry projects",
    title: "Delivered",
    accent: "at work.",
    description: "Systems I've led, built and owned as part of my roles at Volt Money and Groww.",
  },
};

export interface Project {
  id: number;
  kind: ProjectKind;
  /** For industry projects: where it was built. Shown on the card instead of the category. */
  company?: string;
  /** Flagship project: gets the animated border and the `role` pill. */
  featured?: boolean;
  /** Short role line shown on featured cards, e.g. "Leading the backend team". */
  role?: string;
  title: string;
  /** Big headline figure on the card's visual panel. */
  highlight?: { value: string; label: string };
  description: string;
  technologies: string[];
  category: ProjectCategory;
  impact: string;
  features: string[];
  /** Leave out (or "#") to hide the button. Only add public repos. */
  liveUrl?: string;
  githubUrl?: string;
  /** "production" = real users; "demo" = deployed showcase. Shown as a badge when liveUrl is set. */
  status?: "production" | "demo";
}

export const projects: Project[] = [
  {
    id: 1,
    kind: "independent",
    title: "Grocery Store Management App",
    highlight: { value: "Live", label: "Real store, real customers" },
    description:
      "Store management app for Army Store, a real grocery and general store in Khilchipur, Madhya Pradesh. The owner manages inventory, categories and shop hours from a secure admin panel; customers browse the catalogue in English or Hindi and order on WhatsApp. Built as a React frontend wired straight to a Supabase (PostgreSQL) database.",
    technologies: ["React", "TypeScript", "Vite", "Supabase", "PostgreSQL", "Vercel", "Vitest"],
    category: "Frontend + DB",
    impact: "Live in production at armystorekhilchipur.com, used by a real store and its customers",
    features: [
      "Product catalogue with search, filters and detail pages",
      "Cart that turns into a pre-filled WhatsApp order (no payment gateway needed)",
      "English / Hindi interface with bilingual product data",
      "Admin panel for inventory, categories, shop hours and multi-image uploads",
      "Supabase Row Level Security: public read, admin-only writes, hidden products never leak",
      "Client-side image compression to WebP before upload",
      "SEO: per-page meta, JSON-LD and a sitemap generated from live products at build time",
      "Property-based tests (fast-check) for cart and order logic",
    ],
    liveUrl: "https://www.armystorekhilchipur.com/",
    status: "production",
  },
  {
    id: 2,
    kind: "independent",
    title: "Bargain Bell",
    highlight: { value: "3 stores", label: "Amazon · Flipkart · Myntra" },
    description:
      "Price-drop tracker for Amazon, Flipkart and Myntra. Paste a product link, set a target price, and get alerted by email or Telegram when it drops, with full price history charts.",
    technologies: ["Java 17", "Spring Boot", "MySQL", "ReactJS", "Chart.js", "Telegram Bot API", "Docker", "Capacitor"],
    category: "Full Stack",
    impact: "Scheduled sweeps re-price every tracked product several times a day, with per-product failure isolation",
    features: [
      "Tracks Amazon, Flipkart and Myntra via scraping with pluggable proxy/scraper backends",
      "Scheduled, asynchronous price sweeps with job tracking and manual admin re-runs",
      "Price-drop and back-in-stock alerts by email (Gmail API) and Telegram",
      "Full Telegram bot: sign up, track products and manage the watchlist from chat",
      "Interactive, zoomable price-history charts",
      "OTP login, JWT auth, role-based admin portal and public API rate limiting",
      "Multi-module Spring Boot backend, Dockerised; Android app via Capacitor",
    ],
    liveUrl: "https://bargain-bell.vercel.app/",
    status: "demo",
  },
  // Industry projects, in display order: the current flagship first.
  {
    id: 3,
    kind: "industry",
    company: "Volt Money",
    featured: true,
    role: "Leading the backend team",
    title: "Insurance Premium Financing",
    highlight: { value: "0 → 1", label: "New product, backend lead" },
    description:
      "Leading the backend team building Insurance Premium Financing, Volt Money's new product that lets customers finance their insurance premium and repay it in instalments instead of paying it all upfront.",
    technologies: ["Java", "Spring Boot", "PostgreSQL", "AWS", "Microservices"],
    category: "Backend",
    impact: "Owning backend architecture and delivery for a brand-new product line",
    features: [
      "Leading the backend team: planning, system design and code reviews",
      "Service architecture for a product built from the ground up",
      "APIs for the financing journey, from application to repayment",
      "Working with product and partner teams to take it to market",
    ],
  },
  {
    id: 4,
    kind: "industry",
    company: "Volt Money",
    title: "PhonePe LAMF Integration",
    highlight: { value: "PhonePe", label: "Partner lending integration" },
    description:
      "Integrated with PhonePe's Loan Against Mutual Fund (LAMF) flow, enabling mandate collection and processing of user repayments for loans disbursed via PhonePe.",
    technologies: ["Java", "Spring Boot", "PostgreSQL", "AWS", "REST APIs"],
    category: "Backend",
    impact: "Enhanced customer experience and operational efficiency",
    features: [
      "Secure API integration with PhonePe",
      "Real-time mandate collection system",
      "Automated repayment processing",
      "End-to-end loan lifecycle management",
      "High availability microservice architecture",
    ],
  },
  {
    id: 5,
    kind: "industry",
    company: "Volt Money",
    title: "Scalable Mandate Collection System",
    highlight: { value: "10 lakh", label: "Mandates per month" },
    description:
      "Built a mandate collection system designed to scale, handling up to 10 lakh (1 million) mandates a month so loan repayments keep getting collected reliably as volume grows.",
    technologies: ["Java", "Spring Boot", "PostgreSQL", "AWS"],
    category: "Backend",
    impact: "Handles up to 10 lakh (1M) mandates per month",
    features: [
      "Capacity for up to 10 lakh mandate collections a month",
      "Designed to scale with loan volume",
      "Reliable processing with failure handling and retries",
      "Tracks every mandate through its collection lifecycle",
    ],
  },
  {
    id: 6,
    kind: "industry",
    company: "Groww",
    title: "Centralized Repository System",
    highlight: { value: "30%", label: "Faster failure resolution" },
    description:
      "Developed a centralized repository using Spring Boot, MySQL, Prometheus and GCP APIs, reducing dependency failure resolution time by 30%.",
    technologies: ["Spring Boot", "MySQL", "Prometheus", "GCP", "Grafana"],
    category: "Backend",
    impact: "30% reduction in dependency failure resolution time",
    features: [
      "Centralized dependency management",
      "Real-time monitoring with Prometheus",
      "Advanced MySQL schema with indexing",
      "Automated failure detection and resolution",
      "Performance metrics dashboard",
    ],
  },
];

/** Placeholder links ("#" or empty) are hidden rather than rendered as dead links. */
export const isRealUrl = (url?: string): url is string => !!url && url !== "#";
