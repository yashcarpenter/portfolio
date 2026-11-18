import Marquee from "@/components/ui/Marquee";
import { uniqueSkills } from "@/content/skills";

/** Two opposite-direction rows with every skill once. */
export default function SkillsMarquee() {
  const half = Math.ceil(uniqueSkills.length / 2);
  const rows = [uniqueSkills.slice(0, half), uniqueSkills.slice(half)];

  return (
    <section aria-label="All skills" className="space-y-4 pb-24">
      {rows.map((row, r) => (
        <Marquee key={r} reverse={r === 1} duration={50 + r * 10}>
          {row.map((s) => (
            <span key={s.name} className="glass flex items-center gap-3 whitespace-nowrap rounded-2xl px-5 py-3 text-base font-medium text-white/80">
              <span aria-hidden="true">{s.icon}</span>
              {s.name}
            </span>
          ))}
        </Marquee>
      ))}
    </section>
  );
}
