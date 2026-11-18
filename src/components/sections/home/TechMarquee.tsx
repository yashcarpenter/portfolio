import Marquee from "@/components/ui/Marquee";
import { techStack } from "@/content/home";

/** Scrolling strip of technologies under the hero. */
export default function TechMarquee() {
  return (
    <section aria-label="Technologies" className="border-y border-white/[0.06] bg-white/[0.015] py-6">
      <Marquee duration={45}>
        {techStack.map((t) => (
          <span key={t} className="flex items-center gap-4 whitespace-nowrap text-lg font-medium text-white/40">
            <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-a1 to-a2" />
            {t}
          </span>
        ))}
      </Marquee>
    </section>
  );
}
