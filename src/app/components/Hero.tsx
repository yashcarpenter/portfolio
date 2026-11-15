"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import Reveal from "./motion/Reveal";
import SplitText from "./motion/SplitText";
import ScrambleText from "./motion/ScrambleText";
import Typewriter from "./ui/Typewriter";
import SlotCounter from "./ui/SlotCounter";
import SocialLinks from "./ui/SocialLinks";
import CodeTyper from "./ui/CodeTyper";
import { ArrowRight } from "./ui/Icons";

const roles = ["scalable microservices.", "high-throughput APIs.", "resilient fintech systems.", "event-driven pipelines."];

const stats = [
  { value: 1, suffix: "+", label: "Years experience" },
  { value: 5, suffix: "+", label: "Projects built" },
  { value: 500, suffix: "+", label: "DSA problems" },
];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  // Scroll-linked exit: no pinning, so it behaves the same on phones (no address-bar jumps).
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const copyScale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const copyOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const copyY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  // Light parallax: two layers moving at different speeds.
  const cardY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const ringsY = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const badgeY = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const exit = reduced ? undefined : { scale: copyScale, opacity: copyOpacity, y: copyY };

  return (
    <section ref={sectionRef} className="relative flex min-h-[100svh] items-center overflow-hidden pb-20 pt-32">
      {/* Decorative rings (desktop) */}
      <motion.div
        aria-hidden="true"
        style={reduced ? undefined : { y: ringsY }}
        className="pointer-events-none absolute right-[-20%] top-[calc(50%-390px)] hidden lg:block"
      >
        <div className="animate-spin-slow h-[780px] w-[780px] rounded-full border border-dashed border-white/[0.06]" />
        <div className="animate-spin-slower absolute inset-[120px] rounded-full border border-white/[0.05]">
          <span className="absolute -top-1.5 left-1/2 h-3 w-3 rounded-full bg-a2 shadow-[0_0_20px_4px] shadow-a2/60" />
        </div>
      </motion.div>

      <div className="container-x relative grid items-center gap-16 lg:grid-cols-[1.15fr_0.85fr]">
        {/* Copy */}
        <motion.div style={exit} className="origin-top-left">
          <Reveal>
            <span className="eyebrow">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping-soft absolute inline-flex h-full w-full rounded-full bg-emerald-400" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Available for new opportunities
            </span>
          </Reveal>

          <h1
            aria-label="Hi, I'm Yash Carpenter"
            className="mt-7 text-[clamp(2.7rem,7vw,5.6rem)] font-semibold leading-[0.95] tracking-[-0.04em] text-white"
          >
            <SplitText as="span" delay={120} text="Hi, I'm" className="block" />
            <span className="block">
              <ScrambleText
                delay={350}
                segments={[
                  { text: "Yash", className: "font-serif italic font-normal text-gradient pr-2" },
                  { text: "Carpenter" },
                ]}
              />
            </span>
          </h1>

          <Reveal delay={450}>
            <p className="mt-7 text-xl text-muted sm:text-2xl">
              Backend Developer building <Typewriter words={roles} className="text-white" />
            </p>
          </Reveal>

          <Reveal delay={550}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              Hands-on experience building scalable, high-performance systems in fast-paced startup environments.
              Proficient in Java, Spring Boot, MySQL and PostgreSQL, with a strong foundation in DSA.
            </p>
          </Reveal>

          <Reveal delay={650} className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link href="/work" data-magnetic="0.2" className="btn btn-primary">
              <span className="relative">View my work</span>
              <ArrowRight className="btn-arrow relative h-4 w-4" />
            </Link>
            <Link href="/skills" data-magnetic="0.2" className="btn btn-ghost">
              Explore skills
            </Link>
            <SocialLinks className="mt-4 sm:ml-4 sm:mt-0" size="sm" />
          </Reveal>

          <Reveal delay={750} className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-white/[0.07] pt-8">
            {stats.map((s) => (
              <div key={s.label}>
                <SlotCounter value={s.value} suffix={s.suffix} className="text-3xl font-semibold tracking-tight text-white sm:text-4xl" />
                <p className="mt-1 text-xs uppercase tracking-[0.14em] text-subtle">{s.label}</p>
              </div>
            ))}
          </Reveal>
        </motion.div>

        {/* Self-typing code card */}
        <motion.div style={reduced ? undefined : { y: cardY }} className="relative mx-auto w-full max-w-md lg:max-w-none">
          <Reveal variant="scale" delay={400}>
            <div className="animate-float-slow">
              <div data-tilt="10" className="rounded-[1.5rem]">
                <CodeTyper />
              </div>
            </div>
          </Reveal>

          {/* Floating badges (parallax faster than the card) */}
          <motion.div
            style={reduced ? undefined : { y: badgeY }}
            className="glass !bg-[#0e0e17]/90 absolute -top-16 left-10 z-10 hidden rounded-2xl px-4 py-3 text-sm sm:block"
          >
            <p className="text-xs text-subtle">Uptime</p>
            <p className="font-semibold text-white">99.9%</p>
          </motion.div>
          <div className="glass !bg-[#0e0e17]/90 animate-float absolute -bottom-14 left-12 z-10 hidden rounded-2xl px-4 py-3 text-sm sm:block">
            <p className="text-xs text-subtle">Currently at</p>
            <p className="font-semibold text-white">Volt Money</p>
          </div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <div aria-hidden="true" className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-subtle md:flex">
        Scroll
        <span className="relative h-10 w-px overflow-hidden bg-white/10">
          <span className="animate-[scroll-cue_2s_var(--ease)_infinite] absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-transparent to-white" />
        </span>
      </div>
    </section>
  );
}
