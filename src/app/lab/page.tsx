import PageHero from "../components/ui/PageHero";
import Reveal from "../components/motion/Reveal";
import { ArrowUpRight } from "../components/ui/Icons";
import { CurtainLink } from "../components/motion/Curtain";
import { labPages } from "./_lib/data";

export default function LabIndex() {
  return (
    <>
      <PageHero
        eyebrow="Motion lab"
        title="Proposed motion,"
        accent="side by side."
        description="Four sample pages previewing the motion ideas. Nothing here touches the live pages. Pick what you like and it gets wired into the real site."
      />
      <section className="pb-32">
        <div className="container-x grid gap-5 md:grid-cols-2">
          {labPages.map((p, i) => (
            <Reveal key={p.href} delay={i * 100}>
              <CurtainLink href={p.href} className="spotlight group block h-full p-8 sm:p-10">
                <div className="flex items-start justify-between">
                  <span className="font-mono text-sm text-a2">{p.num}</span>
                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 transition-all duration-700 ease-[var(--ease)] group-hover:rotate-45 group-hover:bg-white group-hover:text-black">
                    <ArrowUpRight className="h-5 w-5" />
                  </span>
                </div>
                <h2 className="mt-10 text-3xl font-semibold tracking-tight text-white">{p.title}</h2>
                <p className="mt-3 leading-relaxed text-muted">{p.body}</p>
                <div className="mt-8 flex flex-wrap gap-2">
                  {p.uses.map((u) => (
                    <span key={u} className="chip">
                      {u}
                    </span>
                  ))}
                </div>
              </CurtainLink>
            </Reveal>
          ))}
        </div>
        <p className="container-x mt-10 text-sm text-subtle">
          Tip: the bottom pill switches between demos using the curtain-wipe transition from page 03.
        </p>
      </section>
    </>
  );
}
