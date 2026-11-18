import Reveal from "@/components/motion/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { GraduationCap } from "@/components/ui/Icons";
import { education } from "@/content/about";

export default function Education() {
  return (
    <section className="py-28 sm:py-36">
      <div className="container-x">
        <SectionHeading eyebrow="Education" title="My academic" accent="journey." description="My academic journey and educational background." />
        <div className="relative mx-auto max-w-3xl">
          <div aria-hidden="true" className="absolute bottom-0 left-6 top-0 w-px bg-gradient-to-b from-a1 via-a2/50 to-transparent" />
          <ol className="space-y-8">
            {education.map((e, i) => (
              <Reveal as="li" key={e.degree} delay={i * 150} variant="left" className="relative pl-20">
                <span className="absolute left-0 top-2 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-[#0b0b12] text-a2 shadow-[0_0_30px_-5px] shadow-a1/50">
                  <GraduationCap className="h-5 w-5" />
                </span>
                <div className="spotlight p-7">
                  <p className="font-mono text-xs text-a2">{e.period}</p>
                  <h3 className="mt-2 text-xl font-semibold text-white">{e.degree}</h3>
                  <p className="mt-1 text-muted">{e.school}</p>
                  <p className="mt-4 leading-relaxed text-muted">{e.note}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
