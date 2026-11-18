"use client";

import { useRef, useState } from "react";
import { motion, useMotionValueEvent, useReducedMotion, useScroll } from "motion/react";
import Reveal from "@/components/motion/Reveal";
import { Briefcase, Check } from "@/components/ui/Icons";
import { experience } from "@/content/experience";
import { cn } from "@/lib/utils";

/** Experience timeline: the line draws itself with scroll and each role lights up as it's reached. */
export default function ExperienceTimeline() {
  const listRef = useRef<HTMLOListElement>(null);
  const itemRefs = useRef<Array<HTMLLIElement | null>>([]);
  const [lit, setLit] = useState<boolean[]>(() => experience.map(() => false));
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({ target: listRef, offset: ["start 70%", "end 55%"] });

  useMotionValueEvent(scrollYProgress, "change", (p) => {
    const list = listRef.current;
    if (!list) return;
    const next = itemRefs.current.map((el) => (el ? el.offsetTop / list.offsetHeight <= p + 0.001 : false));
    setLit((prev) => (prev.every((v, i) => v === next[i]) ? prev : next));
  });

  return (
    <div className="relative">
      {/* Track + drawn line */}
      <div aria-hidden="true" className="absolute bottom-0 left-6 top-0 w-px bg-white/10 md:left-1/2" />
      <motion.div
        aria-hidden="true"
        className="absolute bottom-0 left-6 top-0 w-px origin-top bg-gradient-to-b from-a1 via-a2 to-a3 shadow-[0_0_12px_1px] shadow-a2/50 md:left-1/2"
        style={{ scaleY: reduced ? 1 : scrollYProgress }}
      />
      <ol ref={listRef} className="space-y-12">
        {experience.map((item, i) => {
          const right = i % 2 === 1;
          const on = reduced || lit[i];
          return (
            <li
              key={item.company}
              ref={(el) => {
                itemRefs.current[i] = el;
              }}
              className="relative md:grid md:grid-cols-2 md:gap-16"
            >
              {/* Node */}
              <span
                className={cn(
                  "absolute left-0 top-6 z-10 flex h-12 w-12 items-center justify-center rounded-full border bg-[#0b0b12] transition-all duration-700 ease-[var(--ease)] md:left-1/2 md:-translate-x-1/2",
                  on ? "scale-110 border-a2/70 text-a2 shadow-[0_0_40px_-4px] shadow-a2/70" : "border-white/10 text-white/30"
                )}
              >
                {item.current && on && <span className="animate-ping-soft absolute inset-2 rounded-full bg-a1/40" />}
                <Briefcase className="relative h-5 w-5" />
              </span>

              <Reveal
                variant={right ? "right" : "left"}
                className={cn("pl-20 md:pl-0", right ? "md:col-start-2" : "md:col-start-1 md:text-right")}
              >
                <div className={cn("spotlight p-6 text-left transition-opacity duration-700 sm:p-8", on ? "opacity-100" : "opacity-50")}>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="font-mono text-xs text-a2">{item.period}</span>
                    {item.current && (
                      <span className="rounded-full bg-emerald-400/10 px-2.5 py-0.5 text-[11px] font-medium text-emerald-300">Current</span>
                    )}
                  </div>
                  <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white">{item.title}</h3>
                  <p className="mt-1 font-medium text-white/70">
                    {item.company} <span className="text-subtle">· {item.location}</span>
                  </p>
                  <p className="mt-4 leading-relaxed text-muted">{item.description}</p>
                  <ul className="mt-5 space-y-2.5">
                    {item.details.map((d) => (
                      <li key={d} className="flex items-start gap-3 text-sm text-muted">
                        <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-a2" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
