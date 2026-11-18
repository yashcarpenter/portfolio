import type { ReactNode } from "react";
import Reveal from "@/components/motion/Reveal";
import SocialLinks from "@/components/ui/SocialLinks";
import CopyEmailButton from "@/components/ui/CopyEmailButton";
import { Mail, MapPin, Phone } from "@/components/ui/Icons";
import { site } from "@/content/site";
import ResumeCard from "./ResumeCard";

const details: Array<{ Icon: typeof Mail; label: string; value: string; action?: ReactNode }> = [
  { Icon: Mail, label: "Email", value: site.email, action: <CopyEmailButton /> },
  { Icon: Phone, label: "Phone", value: site.phoneDisplay },
  { Icon: MapPin, label: "Location", value: site.location },
];

/** Left column of the contact page: channels, socials and the résumé card. */
export default function ContactDetails() {
  return (
    <div className="space-y-5">
      <Reveal>
        <p className="text-lg leading-relaxed text-muted">
          Feel free to reach out through any of these channels. I typically respond {site.responseTime}.
        </p>
      </Reveal>

      {details.map(({ Icon, label, value, action }, i) => (
        <Reveal key={label} delay={100 + i * 90}>
          <div className="spotlight group flex items-center gap-4 p-4 sm:gap-5 sm:p-5">
            <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br from-a1/25 to-a2/10 text-white transition-transform duration-700 ease-[var(--ease)] group-hover:-rotate-6">
              <Icon className="h-5 w-5" />
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-xs uppercase tracking-[0.14em] text-subtle">{label}</p>
              {/* Full value always visible: wraps on narrow phones instead of being cut off */}
              <p className="font-medium text-white [overflow-wrap:anywhere]">{value}</p>
              {action && <div className="mt-1 sm:hidden">{action}</div>}
            </div>
            {action && <div className="hidden flex-shrink-0 sm:block">{action}</div>}
          </div>
        </Reveal>
      ))}

      <Reveal delay={400}>
        <div className="spotlight p-6">
          <p className="text-xs uppercase tracking-[0.14em] text-subtle">Connect with me</p>
          <SocialLinks className="mt-4" />
        </div>
      </Reveal>

      <Reveal delay={500}>
        <ResumeCard />
      </Reveal>
    </div>
  );
}
