import DemoLabel from "../_components/DemoLabel";
import ScrambleText from "../_components/ScrambleText";
import CodeTyper from "../_components/CodeTyper";
import Reveal from "../../components/motion/Reveal";

export default function HeroLabPage() {
  return (
    <>
      {/* Full composed hero */}
      <section className="relative flex min-h-[100svh] items-center overflow-hidden pb-24 pt-32">

        <div className="container-x relative grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <DemoLabel num="A" title="Composed hero" uses="node field + scramble + self-typing code" />
            <h1 className="mt-8 text-[clamp(2.8rem,7.5vw,6.2rem)] font-semibold leading-[0.95] tracking-[-0.04em] text-white">
              Hi, I&apos;m
              <br />
              <ScrambleText text="Yash Carpenter" delay={300} className="font-mono tracking-[-0.06em]" />
            </h1>
            <Reveal delay={500}>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted">
                Move your cursor over the background: nodes are pushed away and nearby links glow cyan. Pink packets
                travel between hub services. Hover the name to decode it again.
              </p>
            </Reveal>
          </div>
          <Reveal variant="scale" delay={300}>
            <CodeTyper />
          </Reveal>
        </div>
      </section>

      {/* Variations */}
      <section className="py-24">
        <div className="container-x space-y-6">
          <DemoLabel num="B" title="Scramble variations" uses="hover any line to replay" />
          <div className="spotlight space-y-6 p-8 sm:p-12">
            <p className="text-5xl font-semibold tracking-tight text-white sm:text-7xl">
              <ScrambleText text="Backend Developer" delay={200} />
            </p>
            <p className="font-mono text-2xl text-a2 sm:text-3xl">
              <ScrambleText text="Java · Spring Boot · Kafka · AWS" delay={600} />
            </p>
            <p className="font-serif text-4xl italic text-gradient sm:text-5xl">
              <ScrambleText text="Scalable systems, shipped." delay={1000} />
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
