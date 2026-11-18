import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
  "aria-hidden": true,
};

export const ArrowRight = (p: IconProps) => (
  <svg {...stroke} {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);
export const ArrowUpRight = (p: IconProps) => (
  <svg {...stroke} {...p}>
    <path d="M7 17 17 7M8 7h9v9" />
  </svg>
);
export const Mail = (p: IconProps) => (
  <svg {...stroke} {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2.5" />
    <path d="m4 7 8 6 8-6" />
  </svg>
);
export const Phone = (p: IconProps) => (
  <svg {...stroke} {...p}>
    <path d="M5 4h3l2 5-2.5 1.5a11 11 0 0 0 6 6L15 14l5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
  </svg>
);
export const MapPin = (p: IconProps) => (
  <svg {...stroke} {...p}>
    <path d="M12 21s-7-6.2-7-12a7 7 0 0 1 14 0c0 5.8-7 12-7 12z" />
    <circle cx="12" cy="9" r="2.5" />
  </svg>
);
export const FileText = (p: IconProps) => (
  <svg {...stroke} {...p}>
    <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
    <path d="M14 3v5h5M9 13h6M9 17h4" />
  </svg>
);
export const Download = (p: IconProps) => (
  <svg {...stroke} {...p}>
    <path d="M12 4v11m0 0-4-4m4 4 4-4M5 20h14" />
  </svg>
);
export const Code = (p: IconProps) => (
  <svg {...stroke} {...p}>
    <path d="m8 7-5 5 5 5M16 7l5 5-5 5M14 4l-4 16" />
  </svg>
);
export const Bolt = (p: IconProps) => (
  <svg {...stroke} {...p}>
    <path d="M13 3 4 14h7l-1 7 9-11h-7z" />
  </svg>
);
export const Layers = (p: IconProps) => (
  <svg {...stroke} {...p}>
    <path d="m12 3 9 5-9 5-9-5z" />
    <path d="m3 13 9 5 9-5" />
  </svg>
);
export const Sparkle = (p: IconProps) => (
  <svg {...stroke} {...p}>
    <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M6 18l2.5-2.5M15.5 8.5 18 6" />
  </svg>
);
export const Lightbulb = (p: IconProps) => (
  <svg {...stroke} {...p}>
    <path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0 0 12 3z" />
  </svg>
);
export const Book = (p: IconProps) => (
  <svg {...stroke} {...p}>
    <path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z" />
    <path d="M4 19V5M19 19v2H6" />
  </svg>
);
export const Users = (p: IconProps) => (
  <svg {...stroke} {...p}>
    <circle cx="9" cy="8" r="3.5" />
    <path d="M2.5 20a6.5 6.5 0 0 1 13 0M16 4.5a3.5 3.5 0 0 1 0 7M18 14a6 6 0 0 1 3.5 6" />
  </svg>
);
export const ShieldCheck = (p: IconProps) => (
  <svg {...stroke} {...p}>
    <path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);
export const TrendingUp = (p: IconProps) => (
  <svg {...stroke} {...p}>
    <path d="m3 17 6-6 4 4 8-8M15 7h6v6" />
  </svg>
);
export const Check = (p: IconProps) => (
  <svg {...stroke} {...p}>
    <path d="m5 12 5 5L20 7" />
  </svg>
);
export const AlertCircle = (p: IconProps) => (
  <svg {...stroke} {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 8v4M12 16h.01" />
  </svg>
);
export const Clock = (p: IconProps) => (
  <svg {...stroke} {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
);
export const GraduationCap = (p: IconProps) => (
  <svg {...stroke} {...p}>
    <path d="m2 9 10-5 10 5-10 5z" />
    <path d="M6 11v5c3 2.5 9 2.5 12 0v-5M22 9v6" />
  </svg>
);
export const Briefcase = (p: IconProps) => (
  <svg {...stroke} {...p}>
    <rect x="3" y="7" width="18" height="13" rx="2" />
    <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 13h18" />
  </svg>
);

/* Brand icons (filled) */
export const GitHubIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...p}>
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);
export const LinkedInIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...p}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);
export const InstagramIcon = (p: IconProps) => (
  <svg {...stroke} {...p}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <path d="M17.5 6.5h.01" />
  </svg>
);

/** Icons that content files can reference by name (keeps content plain data). */
export const icons = {
  code: Code,
  bolt: Bolt,
  layers: Layers,
  lightbulb: Lightbulb,
  book: Book,
  users: Users,
  shieldCheck: ShieldCheck,
  trendingUp: TrendingUp,
};

export type IconName = keyof typeof icons;
