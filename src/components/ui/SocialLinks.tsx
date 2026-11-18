import { site, socialLinks } from "@/content/site";
import { cn } from "@/lib/utils";
import { GitHubIcon, InstagramIcon, LinkedInIcon, Mail } from "@/components/ui/Icons";

const links = [
  { label: "LinkedIn", href: socialLinks.linkedin, Icon: LinkedInIcon, external: true },
  { label: "GitHub", href: socialLinks.github, Icon: GitHubIcon, external: true },
  { label: "Instagram", href: socialLinks.instagram, Icon: InstagramIcon, external: true },
  { label: "Email", href: `mailto:${site.email}`, Icon: Mail, external: false },
];

export default function SocialLinks({ className, size = "md" }: { className?: string; size?: "sm" | "md" }) {
  const box = size === "sm" ? "h-10 w-10" : "h-12 w-12";
  const icon = size === "sm" ? "h-4 w-4" : "h-5 w-5";
  return (
    <ul className={cn("flex items-center gap-3", className)}>
      {links.map(({ label, href, Icon, external }) => (
        <li key={label}>
          <a
            href={href}
            aria-label={label}
            data-magnetic="0.4"
            {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className={cn(
              "group relative flex items-center justify-center overflow-hidden rounded-full border border-white/10 bg-white/[0.04] text-muted backdrop-blur transition-colors duration-500 hover:border-white/25 hover:text-white",
              box
            )}
          >
            <span className="absolute inset-0 scale-0 rounded-full bg-gradient-to-br from-a1/40 to-a2/30 transition-transform duration-500 ease-[var(--ease)] group-hover:scale-100" />
            <Icon className={cn("relative transition-transform duration-500 group-hover:-rotate-12 group-hover:scale-110", icon)} />
          </a>
        </li>
      ))}
    </ul>
  );
}
