/**
 * Headline numbers, shared by the home hero and the About page so they can't drift apart.
 * `label` is the long form (About), `shortLabel` fits the compact hero row.
 */
export const stats = {
  experience: { value: 2, suffix: "+", label: "Years experience", shortLabel: "Years experience" },
  projects: { value: 5, suffix: "+", label: "Projects built", shortLabel: "Projects built" },
  dsa: { value: 500, suffix: "+", label: "DSA problems solved", shortLabel: "DSA problems" },
  cpRating: { value: 1700, suffix: "+", label: "CP rating", shortLabel: "CP rating" },
};

export type Stat = (typeof stats)[keyof typeof stats];

/** "2+ years" — for use inside sentences. */
export const experienceText = `${stats.experience.value}${stats.experience.suffix} years`;

/**
 * Who I am and how to reach me. Edit here; every page, the header, footer,
 * metadata and sitemap read from this file.
 */
export const site = {
  name: "Yash Carpenter",
  role: "Backend Developer",
  /** Used for <meta description>, social previews and the manifest. */
  description:
    `Backend developer with ${experienceText} of experience building scalable, high-performance systems with Java, Spring Boot, PostgreSQL and AWS.`,
  keywords: [
    "Yash Carpenter",
    "backend developer",
    "Java",
    "Spring Boot",
    "microservices",
    "PostgreSQL",
    "MySQL",
    "AWS",
    "Kafka",
    "Redis",
    "API development",
    "fintech",
  ],
  email: "yashcarpenter@outlook.com",
  /** Shown masked on the contact page. */
  phoneDisplay: "+91 *******303",
  location: "Bengaluru, India",
  city: "Bengaluru",
  currentRole: { title: "SDE", company: "Volt Money" },
  responseTime: "within 24 hours",
  resume: {
    // To update the résumé without changing these links: Drive → right-click file →
    // File information → Manage versions → Upload new version. Then bump `updated`.
    viewUrl: "https://drive.google.com/file/d/1kFrMhgCZRB4KbXYjO0nvjXfCcfqymCdx/view?usp=sharing",
    downloadUrl: "https://drive.google.com/uc?export=download&id=1kFrMhgCZRB4KbXYjO0nvjXfCcfqymCdx",
    fileName: "Yash_Carpenter_Resume.pdf",
    updated: "November 2026",
  },
};

export const socialLinks = {
  linkedin: "https://linkedin.com/in/yashcarpenter",
  github: "https://github.com/yashcarpenter",
  instagram: "https://www.instagram.com/yash_carpenter/",
};

export interface NavItem {
  name: string;
  href: string;
  /** One-liner shown in the mobile menu. */
  description: string;
}

export const homeNavItem: NavItem = { name: "Home", href: "/", description: "Overview & highlights" };

/** Primary navigation (also drives the sitemap). */
export const navItems: NavItem[] = [
  { name: "About", href: "/about", description: "Story, values & education" },
  { name: "Work", href: "/work", description: "Experience & projects" },
  { name: "Skills", href: "/skills", description: "Tech stack & tools" },
  { name: "Contact", href: "/contact", description: "Say hello" },
];

