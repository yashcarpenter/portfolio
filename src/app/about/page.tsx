import Link from "next/link";
import PageHero from "../components/ui/PageHero";
import SectionHeading from "../components/ui/SectionHeading";
import Reveal from "../components/motion/Reveal";
import SlotCounter from "../components/ui/SlotCounter";
import LineReveal from "../components/motion/LineReveal";
import ScrambleText from "../components/motion/ScrambleText";
import {
  ArrowRight,
  ArrowUpRight,
  Bolt,
  Book,
  GraduationCap,
  Lightbulb,
  ShieldCheck,
  TrendingUp,
  Users,
} from "../components/ui/Icons";

const stats = [
  { value: 1, suffix: "+", label: "Years experience" },
  { value: 500, suffix: "+", label: "DSA problems solved" },
  { value: 5, suffix: "+", label: "Projects built" },
  { value: 1700, suffix: "+", label: "CP rating" },
];

const story = [
  "I'm Yash Carpenter, a passionate backend developer with 1+ years of experience crafting enterprise-grade, scalable systems that power millions of transactions. I graduated with distinction in 2024 from Shri G.S. Institute of Technology and Science, Indore, with a Bachelor of Technology in Information Technology.",
  "My professional journey began with a transformative internship at Groww, India's leading investment platform, where I contributed to backend systems handling millions of users. This experience led to my current role as a Software Development Engineer at Volt Money, where I architect and develop robust financial technology solutions that process high-volume transactions with 99.9% uptime.",
  "When I'm not coding, you'll find me watching movies, hanging out or playing games.",
];

const values = [
  {
    Icon: Lightbulb,
    title: "Innovation",
    body: "I believe in pushing boundaries and finding creative solutions to complex problems. Every project is an opportunity to learn and innovate.",
  },
  {
    Icon: Bolt,
    title: "Performance",
    body: "I'm obsessed with building fast, efficient systems that can handle scale. Performance optimization is at the core of everything I build.",
  },
  {
    Icon: Book,
    title: "Learning",
    body: "Technology evolves rapidly, and I'm committed to staying current. Continuous learning is not just a habit, it's a way of life.",
  },
  {
    Icon: Users,
    title: "Collaboration",
    body: "Great software is built by great teams. I value open communication, knowledge sharing, and working together towards common goals.",
  },
  {
    Icon: ShieldCheck,
    title: "Quality",
    body: "I believe in writing clean, maintainable code that stands the test of time. Quality is never an accident; it's always the result of intention.",
  },
  {
    Icon: TrendingUp,
    title: "Growth",
    body: "I'm always looking for ways to improve, both personally and professionally. Growth comes from stepping outside comfort zones and embracing challenges.",
  },
];

const education = [
  {
    degree: "B.Tech in Information Technology",
    school: "Shri G.S. Institute of Technology and Science, Indore",
    years: "2020 – 2024",
    note: "Graduated with distinction in Information Technology",
  },
  {
    degree: "XII (Higher Secondary)",
    school: "Ideal Convent H.S. School, Biaora",
    years: "2018 – 2019",
    note: "Completed higher secondary education with focus on science and mathematics, laying the foundation for technical studies and problem-solving skills.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About me"
        title="Get to know"
        accent="Yash Carpenter"
        description="Crafting enterprise-grade backend solutions that power millions of transactions. Specializing in microservices architecture, high-performance APIs, and scalable system design."
      />

      {/* Story */}
      <section className="pb-28 sm:pb-36">
        <div className="container-x grid items-center gap-16 lg:grid-cols-[1fr_0.8fr]">
          <div>
            <Reveal>
              <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">My story</h2>
            </Reveal>
            <div className="mt-6 space-y-5 text-lg leading-relaxed text-muted">
              {story.map((text, i) => (
                <LineReveal key={i} text={text} highlight={["Groww", "Volt", "Money"]} delay={i * 80} />
              ))}
            </div>

            <div className="mt-12 grid grid-cols-2 gap-4">
              {stats.map((s, i) => (
                <Reveal key={s.label} delay={i * 90}>
                  <div className="spotlight p-6">
                    <SlotCounter value={s.value} suffix={s.suffix} className="text-4xl font-semibold tracking-tight text-white" />
                    <p className="mt-1 text-sm text-muted">{s.label}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Profile visual */}
          <Reveal variant="scale" delay={200} className="mx-auto w-full max-w-sm">
            <div data-tilt="12" className="relative aspect-[4/5]">
              <div className="ring-conic absolute inset-0 rounded-[2rem] p-px">
                <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-[calc(2rem-1px)] bg-[#0b0b12]">
                  <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(124,92,255,0.35),transparent_55%),radial-gradient(circle_at_80%_90%,rgba(34,211,238,0.25),transparent_50%)]" />
                  <div aria-hidden="true" className="bg-grid absolute inset-0 opacity-70" />
                  <div className="relative flex h-36 w-36 items-center justify-center rounded-full bg-gradient-to-br from-a1 via-a2 to-a3 p-[2px]">
                    <div className="flex h-full w-full items-center justify-center rounded-full bg-[#0b0b12] font-serif text-6xl italic text-white">
                      YC
                    </div>
                  </div>
                  <p className="relative mt-8 text-2xl font-semibold text-white">Yash Carpenter</p>
                  <p className="relative mt-1 text-muted">Backend Developer</p>
                  <div className="relative mt-6 flex gap-2">
                    <span className="chip">Bengaluru</span>
                    <span className="chip">SDE @ Volt Money</span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="py-28 sm:py-36">
        <div className="container-x">
          <SectionHeading
            eyebrow="Values & approach"
            title="Principles I"
            accent="build by."
            description="The principles that guide my work and drive my passion for technology."
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {values.map(({ Icon, title, body }, i) => (
              <Reveal key={title} delay={(i % 3) * 110}>
                <article className="spotlight group h-full p-8">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white transition-all duration-700 ease-[var(--ease)] group-hover:rotate-[-8deg] group-hover:border-a1/50 group-hover:bg-a1/20">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-8 text-xl font-semibold text-white">{title}</h3>
                  <p className="mt-3 leading-relaxed text-muted">{body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
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
                    <p className="font-mono text-xs text-a2">{e.years}</p>
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

      {/* CTA */}
      <section className="pb-10">
        <div className="container-x">
          <Reveal className="spotlight flex flex-col items-start justify-between gap-8 p-10 sm:p-14 md:flex-row md:items-center">
            <div>
              <h2 aria-label="Ready to work together?" className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                <ScrambleText
                  segments={[
                    { text: "Ready to work" },
                    { text: "together?", className: "font-serif font-normal italic text-gradient" },
                  ]}
                />
              </h2>
              <p className="mt-3 max-w-xl text-muted">
                I&apos;m always excited to take on new challenges and collaborate on interesting projects. Let&apos;s discuss how
                we can bring your ideas to life.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href="/work" data-magnetic="0.2" className="btn btn-ghost">
                View my work <ArrowRight className="btn-arrow h-4 w-4" />
              </Link>
              <Link href="/contact" data-magnetic="0.2" className="btn btn-primary">
                <span className="relative">Get in touch</span>
                <ArrowUpRight className="btn-arrow relative h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
