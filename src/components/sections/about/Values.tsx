import Reveal from "@/components/motion/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { icons } from "@/components/ui/Icons";
import { values } from "@/content/about";

export default function Values() {
  return (
    <section className="py-28 sm:py-36">
      <div className="container-x">
        <SectionHeading
          eyebrow="Values & approach"
          title="Principles I"
          accent="build by."
          description="The principles that guide my work and drive my passion for technology."
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {values.map(({ icon, title, body }, i) => {
            const Icon = icons[icon];
            return (
              <Reveal key={title} delay={(i % 3) * 110}>
                <article className="spotlight group h-full p-8">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white transition-all duration-700 ease-[var(--ease)] group-hover:rotate-[-8deg] group-hover:border-a1/50 group-hover:bg-a1/20">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-8 text-xl font-semibold text-white">{title}</h3>
                  <p className="mt-3 leading-relaxed text-muted">{body}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
