"use client";

import Link from "next/link";
import Reveal from "./motion/Reveal";
import SplitText from "./motion/SplitText";
import Typewriter from "./ui/Typewriter";
import Counter from "./ui/Counter";
import SocialLinks from "./ui/SocialLinks";
import { ArrowRight } from "./ui/Icons";

const roles = ["scalable microservices.", "high-throughput APIs.", "resilient fintech systems.", "event-driven pipelines."];

const stats = [
  { value: 1, suffix: "+", label: "Years experience" },
  { value: 5, suffix: "+", label: "Projects built" },
  { value: 500, suffix: "+", label: "DSA problems" },
];

/** Syntax-highlighted snippet shown in the hero terminal card. */
const codeLines: Array<Array<[string, string]>> = [
  [["text-a3", "@RestController"]],
  [["text-a1", "public class "], ["text-white", "RepaymentController"], ["text-muted", " {"]],
  [],
  [["text-muted", "  "], ["text-a3", "@PostMapping"], ["text-muted", "("], ["text-emerald-300", "\"/repay\""], ["text-muted", ")"]],
  [["text-a1", "  public "], ["text-a2", "Mono"], ["text-muted", "<"], ["text-a2", "Receipt"], ["text-muted", "> "], ["text-white", "repay"], ["text-muted", "(...) {"]],
  [["text-a1", "    return "], ["text-white", "lending"], ["text-muted", "."], ["text-a2", "process"], ["text-muted", "(req)"]],
  [["text-muted", "      ."], ["text-a2", "cache"], ["text-muted", "("], ["text-white", "redis"], ["text-muted", ")"]],
  [["text-muted", "      ."], ["text-a2", "publish"], ["text-muted", "("], ["text-white", "kafka"], ["text-muted", ");"]],
  [["text-muted", "  }"]],
  [["text-muted", "}"]],
];

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden pb-20 pt-32">
      {/* Decorative rings */}
      <div aria-hidden="true" className="pointer-events-none absolute right-[-20%] top-1/2 hidden -translate-y-1/2 lg:block">
        <div className="animate-spin-slow h-[780px] w-[780px] rounded-full border border-dashed border-white/[0.06]" />
        <div className="animate-spin-slower absolute inset-[120px] rounded-full border border-white/[0.05]">
          <span className="absolute -top-1.5 left-1/2 h-3 w-3 rounded-full bg-a2 shadow-[0_0_20px_4px] shadow-a2/60" />
        </div>
      </div>

      <div className="container-x relative grid items-center gap-16 lg:grid-cols-[1.15fr_0.85fr]">
        {/* Copy */}
        <div>
          <Reveal>
            <span className="eyebrow">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping-soft absolute inline-flex h-full w-full rounded-full bg-emerald-400" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Available for new opportunities
            </span>
          </Reveal>

          <SplitText
            as="h1"
            delay={120}
            breakAfter={[0]}
            className="mt-7 text-[clamp(2.8rem,7.5vw,6.2rem)] font-semibold leading-[0.95] tracking-[-0.04em] text-white"
            text={[
              { text: "Hi, I'm" },
              { text: "Yash", className: "font-serif italic font-normal text-gradient pr-2" },
              { text: "Carpenter" },
            ]}
          />

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
                <Counter value={s.value} suffix={s.suffix} className="block text-3xl font-semibold tracking-tight text-white sm:text-4xl" />
                <p className="mt-1 text-xs uppercase tracking-[0.14em] text-subtle">{s.label}</p>
              </div>
            ))}
          </Reveal>
        </div>

        {/* Terminal card */}
        <Reveal variant="scale" delay={400} className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="animate-float-slow">
            <div data-tilt="10" className="ring-conic rounded-[1.5rem] p-px shadow-[0_40px_120px_-30px_rgba(124,92,255,0.55)]">
              <div className="overflow-hidden rounded-[1.45rem] bg-[#0b0b12]/95 backdrop-blur-xl">
                <div className="flex items-center gap-2 border-b border-white/[0.06] px-5 py-4">
                  <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                  <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
                  <span className="h-3 w-3 rounded-full bg-[#28c840]" />
                  <span className="ml-3 font-mono text-xs text-subtle">RepaymentController.java</span>
                </div>
                <pre className="overflow-x-auto px-5 py-5 font-mono text-[12.5px] leading-7 sm:text-[13px]">
                  <code>
                    {codeLines.map((line, i) => (
                      <div key={i} className="flex">
                        <span className="mr-5 w-4 select-none text-right text-white/20">{i + 1}</span>
                        <span>
                          {line.map(([cls, txt], j) => (
                            <span key={j} className={cls}>
                              {txt}
                            </span>
                          ))}
                        </span>
                      </div>
                    ))}
                  </code>
                </pre>
                <div className="flex items-center justify-between border-t border-white/[0.06] px-5 py-3 font-mono text-[11px] text-subtle">
                  <span className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> 200 OK · 38ms
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Floating badges */}
          <div className="glass !bg-[#0e0e17]/90 animate-float absolute z-10 -top-10 right-6 hidden rounded-2xl px-4 py-3 text-sm sm:block" style={{ animationDelay: "-2s" }}>
            <p className="text-xs text-subtle">Uptime</p>
            <p className="font-semibold text-white">99.9%</p>
          </div>
          <div className="glass !bg-[#0e0e17]/90 animate-float absolute z-10 -bottom-9 right-8 hidden rounded-2xl px-4 py-3 text-sm sm:block">
            <p className="text-xs text-subtle">Currently at</p>
            <p className="font-semibold text-white">Volt Money</p>
          </div>
        </Reveal>
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
