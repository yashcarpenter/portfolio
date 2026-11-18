import Reveal from "@/components/motion/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { icons } from "@/components/ui/Icons";
import { highlights, services } from "@/content/home";
import { cn } from "@/lib/utils";

/** "What I do" bento grid: service cards plus an impact-metrics tile. */
export default function Services() {
  return (
    <section className="py-28 sm:py-36">
      <div className="container-x">
        <SectionHeading
          eyebrow="What I do"
          title="Engineering backends that"
          accent="scale."
          description="I specialize in building robust, scalable backend systems that power exceptional digital experiences."
        />

        <div className="grid gap-5 lg:grid-cols-3">
          {services.map(({ icon, title, body, tags, wide }, i) => {
            const Icon = icons[icon];
            return (
              <Reveal key={title} delay={i * 120} className={cn(wide && "lg:col-span-2")}>
                <article className="spotlight group h-full p-8 sm:p-10">
                  <div className="flex items-start justify-between">
                    <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-a1/25 to-a2/10 text-white transition-transform duration-700 ease-[var(--ease)] group-hover:-rotate-6 group-hover:scale-110">
                      <Icon className="h-6 w-6" />
                    </span>
                    <span className="font-mono text-xs text-subtle">0{i + 1}</span>
                  </div>
                  <h3 className="mt-10 text-2xl font-semibold tracking-tight text-white">{title}</h3>
                  <p className="mt-3 max-w-lg leading-relaxed text-muted">{body}</p>
                  <div className="mt-8 flex flex-wrap gap-2">
                    {tags.map((t) => (
                      <span key={t} className="chip">
                        {t}
                      </span>
                    ))}
                  </div>
                </article>
              </Reveal>
            );
          })}

          <Reveal delay={360} className="lg:col-span-2">
            <article className="spotlight h-full p-8 sm:p-10">
              <p className="text-sm uppercase tracking-[0.16em] text-subtle">Impact so far</p>
              <div className="mt-8 grid gap-8 sm:grid-cols-3">
                {highlights.map((h) => (
                  <div key={h.label}>
                    <p className="text-5xl font-semibold tracking-tight text-gradient">{h.metric}</p>
                    <p className="mt-2 font-medium text-white">{h.label}</p>
                    <p className="mt-1 text-sm leading-relaxed text-muted">{h.detail}</p>
                  </div>
                ))}
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
