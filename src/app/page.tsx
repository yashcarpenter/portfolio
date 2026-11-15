import Link from "next/link";
import Hero from "./components/Hero";
import Reveal from "./components/motion/Reveal";
import Marquee from "./components/ui/Marquee";
import ScrambleText from "./components/motion/ScrambleText";
import SectionHeading from "./components/ui/SectionHeading";
import { ArrowRight, ArrowUpRight, Bolt, Code, Layers } from "./components/ui/Icons";

const stack = ["Java", "Spring Boot", "PostgreSQL", "MySQL", "Redis", "Kafka", "AWS", "Docker", "Kubernetes", "Hibernate", "Jenkins", "Argo CD", "ReactJS", "DynamoDB"];

const services = [
  {
    Icon: Code,
    title: "Backend Development",
    body: "Building scalable microservices, APIs, and database architectures using Java, Spring Boot, and modern cloud technologies.",
    tags: ["Java", "Spring Boot", "REST"],
    className: "lg:col-span-2",
  },
  {
    Icon: Bolt,
    title: "Performance Optimization",
    body: "Optimizing system performance, reducing response times, and ensuring high availability for mission-critical applications.",
    tags: ["Redis", "Indexing"],
    className: "",
  },
  {
    Icon: Layers,
    title: "System Architecture",
    body: "Designing and implementing robust system architectures that can handle scale and growth while maintaining reliability.",
    tags: ["Kafka", "AWS", "Microservices"],
    className: "",
  },
];

const highlights = [
  { metric: "40%", label: "faster queries", detail: "MySQL schema with indexing & partitioning at Groww" },
  { metric: "35%", label: "faster deploys", detail: "Services integrated with Argo CD" },
  { metric: "30%", label: "faster resolution", detail: "Dependency failures, via a centralized repository" },
];

export default function Home() {
  return (
    <>
      <Hero />

      {/* Tech marquee */}
      <section aria-label="Technologies" className="border-y border-white/[0.06] bg-white/[0.015] py-6">
        <Marquee duration={45}>
          {stack.map((t) => (
            <span key={t} className="flex items-center gap-4 whitespace-nowrap text-lg font-medium text-white/40">
              <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-a1 to-a2" />
              {t}
            </span>
          ))}
        </Marquee>
      </section>

      {/* What I do (bento) */}
      <section className="py-28 sm:py-36">
        <div className="container-x">
          <SectionHeading
            eyebrow="What I do"
            title="Engineering backends that"
            accent="scale."
            description="I specialize in building robust, scalable backend systems that power exceptional digital experiences."
          />

          <div className="grid gap-5 lg:grid-cols-3">
            {services.map(({ Icon, title, body, tags, className }, i) => (
              <Reveal key={title} delay={i * 120} className={className}>
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
            ))}

            {/* Highlights tile */}
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

      {/* CTA */}
      <section className="pb-10">
        <div className="container-x">
          <Reveal variant="scale">
            <div className="ring-conic rounded-[2rem] p-px">
              <div className="relative overflow-hidden rounded-[calc(2rem-1px)] bg-[#0a0a11] px-6 py-20 text-center sm:px-16 sm:py-28">
                <div aria-hidden="true" className="pointer-events-none absolute -top-32 left-1/2 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-a1/30 blur-[100px]" />
                <div aria-hidden="true" className="bg-grid pointer-events-none absolute inset-0 opacity-60" />
                <div className="relative">
                  <h2
                    aria-label="Ready to build something amazing?"
                    className="mx-auto max-w-3xl text-[2.1rem] font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl"
                  >
                    <ScrambleText
                      segments={[
                        { text: "Ready to build something" },
                        { text: "amazing?", className: "font-serif font-normal italic text-gradient" },
                      ]}
                    />
                  </h2>
                  <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted">
                    Let&apos;s discuss your project and explore how we can work together to bring your ideas to life.
                  </p>
                  <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
                    <Link href="/contact" data-magnetic="0.2" className="btn btn-primary">
                      <span className="relative">Get in touch</span>
                      <ArrowUpRight className="btn-arrow relative h-4 w-4" />
                    </Link>
                    <Link href="/work" data-magnetic="0.2" className="btn btn-ghost">
                      View my work <ArrowRight className="btn-arrow h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
