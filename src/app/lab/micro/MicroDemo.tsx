"use client";

import { useEffect, useLayoutEffect, useState, type CSSProperties, type ReactNode } from "react";
import { AnimatePresence, LayoutGroup, motion, useMotionValue, useSpring, useTransform } from "motion/react";
import DemoLabel from "../_components/DemoLabel";
import { projects, skills } from "../_lib/data";
import { useInView } from "../../components/motion/Reveal";
import { ArrowUpRight } from "../../components/ui/Icons";
import { cn, prefersReducedMotion } from "../../lib/utils";

/* ---------------- Text roll ---------------- */
function RollText({ text }: { text: string }) {
  const chars = text.split("");
  return (
    <span className="lab-roll" aria-label={text}>
      {chars.map((c, i) => (
        <span key={i} aria-hidden="true" style={{ "--i": i } as CSSProperties}>
          {c === " " ? "\u00a0" : c}
        </span>
      ))}
      <span className="lab-roll-b" aria-hidden="true">
        {chars.map((c, i) => (
          <span key={i} style={{ "--i": i } as CSSProperties}>
            {c === " " ? "\u00a0" : c}
          </span>
        ))}
      </span>
    </span>
  );
}

/* ---------------- Spring tilt card ---------------- */
function SpringTilt({ children, className }: { children: ReactNode; className?: string }) {
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const spring = { stiffness: 150, damping: 12, mass: 0.6 }; // low damping = visible overshoot
  const rotateX = useSpring(useTransform(py, [0, 1], [14, -14]), spring);
  const rotateY = useSpring(useTransform(px, [0, 1], [-14, 14]), spring);
  const glareX = useTransform(px, [0, 1], ["0%", "100%"]);
  const glareY = useTransform(py, [0, 1], ["0%", "100%"]);
  const glare = useTransform([glareX, glareY], ([gx, gy]) => `radial-gradient(circle at ${gx} ${gy}, rgba(255,255,255,0.18), transparent 50%)`);

  return (
    <motion.div
      className={cn("relative", className)}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      onPointerMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        px.set((e.clientX - r.left) / r.width);
        py.set((e.clientY - r.top) / r.height);
      }}
      onPointerLeave={() => {
        px.set(0.5);
        py.set(0.5);
      }}
    >
      {children}
      <motion.div aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-[inherit]" style={{ background: glare }} />
    </motion.div>
  );
}

/* ---------------- Spring magnetic button ---------------- */
function Magnetic({ children, strength = 0.4 }: { children: ReactNode; strength?: number }) {
  const x = useSpring(0, { stiffness: 200, damping: 10, mass: 0.5 });
  const y = useSpring(0, { stiffness: 200, damping: 10, mass: 0.5 });
  return (
    <motion.div
      className="inline-block"
      style={{ x, y }}
      onPointerMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        x.set((e.clientX - (r.left + r.width / 2)) * strength);
        y.set((e.clientY - (r.top + r.height / 2)) * strength);
      }}
      onPointerLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      {children}
    </motion.div>
  );
}

/* ---------------- Slot-machine counter ---------------- */
function SlotDigit({ digit, delay }: { digit: number; delay: number }) {
  return (
    <span className="relative inline-block h-[1em] overflow-hidden leading-none tabular-nums">
      {/* Invisible copy of the final digit sizes the reel to its natural width */}
      <span className="invisible">{digit}</span>
      <motion.span
        className="absolute inset-x-0 top-0 flex flex-col items-center"
        initial={{ y: "0em" }}
        animate={{ y: `-${digit + 20}em` }}
        transition={{ duration: 1.8, delay, ease: [0.16, 1, 0.3, 1] }}
      >
        {Array.from({ length: 30 }, (_, i) => (
          <span key={i} className="h-[1em] leading-none">
            {i % 10}
          </span>
        ))}
      </motion.span>
    </span>
  );
}

function SlotCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const { ref, inView } = useInView<HTMLSpanElement>(0.5);
  const digits = String(value).split("").map(Number);
  return (
    <span ref={ref} className="inline-flex items-baseline" aria-label={`${value}${suffix}`}>
      <span aria-hidden="true" className="inline-flex tabular-nums">
        {inView ? digits.map((d, i) => <SlotDigit key={i} digit={d} delay={i * 0.12} />) : <span className="opacity-0">{value}</span>}
      </span>
      <span aria-hidden="true">{suffix}</span>
    </span>
  );
}

/* ---------------- Line-by-line reveal ---------------- */
function LineReveal({ text, className }: { text: string; className?: string }) {
  const { ref, inView } = useInView<HTMLParagraphElement>(0.3);
  const words = text.split(" ");

  // Measure which visual line each word lands on; stagger by line.
  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const measure = () => {
      const spans = Array.from(el.querySelectorAll<HTMLElement>(".lab-line-word"));
      let line = -1;
      let lastTop = -Infinity;
      spans.forEach((s) => {
        if (s.offsetTop > lastTop + 2) {
          line++;
          lastTop = s.offsetTop;
        }
        s.style.setProperty("--line", String(line));
      });
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [ref]);

  return (
    <p ref={ref} className={cn("lab-lines", inView && "is-in", className)} aria-label={text}>
      {words.map((w, i) => (
        <span key={i} aria-hidden="true">
          <span className="lab-line-word">
            <span>{w}</span>
          </span>{" "}
        </span>
      ))}
    </p>
  );
}

/* ---------------- Cursor-follow gradient text ---------------- */
function FollowText({ children }: { children: ReactNode }) {
  return (
    <h2
      className="lab-follow-text text-[clamp(2.5rem,7vw,6rem)] font-semibold leading-[0.95] tracking-[-0.04em]"
      onPointerMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        e.currentTarget.style.setProperty("--gx", `${e.clientX - r.left}px`);
        e.currentTarget.style.setProperty("--gy", `${e.clientY - r.top}px`);
      }}
    >
      {children}
    </h2>
  );
}

/* ---------------- FLIP filter grid ---------------- */
const groups = ["All", "Backend", "Data", "Cloud", "Frontend"];

function FilterGrid() {
  const [active, setActive] = useState("All");
  const shown = active === "All" ? skills : skills.filter((s) => s.group === active);
  return (
    <LayoutGroup>
      <div role="tablist" aria-label="Filter skills" className="glass inline-flex flex-wrap gap-1 rounded-full p-1.5">
        {groups.map((g) => (
          <button
            key={g}
            type="button"
            role="tab"
            aria-selected={active === g}
            onClick={() => setActive(g)}
            className={cn("relative rounded-full px-4 py-2 text-sm font-semibold transition-colors", active === g ? "text-black" : "text-muted hover:text-white")}
          >
            {active === g && (
              <motion.span layoutId="filter-pill" className="absolute inset-0 rounded-full bg-white" transition={{ type: "spring", stiffness: 400, damping: 32 }} />
            )}
            <span className="relative">{g}</span>
          </button>
        ))}
      </div>
      <motion.ul layout className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
        <AnimatePresence mode="popLayout">
          {shown.map((s) => (
            <motion.li
              key={s.name}
              layout
              initial={{ opacity: 0, scale: 0.8, filter: "blur(6px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 0.8, filter: "blur(6px)" }}
              transition={{ type: "spring", stiffness: 350, damping: 30 }}
              className="spotlight px-4 py-4"
            >
              <p className="font-semibold text-white">{s.name}</p>
              <p className="mt-0.5 font-mono text-[11px] text-subtle">{s.group}</p>
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>
    </LayoutGroup>
  );
}

/* ---------------- Page ---------------- */
export default function MicroDemo() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => setReduced(prefersReducedMotion()), []);

  return (
    <>
      <div className="container-x space-y-28 pb-32 pt-40">
        <header>
          <h1 className="text-[clamp(2.5rem,6vw,5rem)] font-semibold leading-none tracking-[-0.04em] text-white">
            Micro-<span className="font-serif font-normal italic text-gradient">interactions.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted">
            The custom cursor is on for this whole page. Hover links, cards, the form field and the project tiles.
            {reduced && " (Reduced motion is on, so most effects are disabled.)"}
          </p>
        </header>

        {/* 1 Cursor */}
        <section>
          <DemoLabel num="01" title="Custom cursor" uses="Motion springs" />
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {projects.slice(0, 3).map((p) => (
              <div
                key={p.id}
                data-cursor-label="View"
                className="spotlight flex h-48 flex-col justify-end overflow-hidden p-6"
                style={{ background: `radial-gradient(circle at 30% 20%, hsla(${p.hue},90%,65%,0.35), transparent 60%)` }}
              >
                <p className="font-mono text-xs text-subtle">0{p.id} · hover me</p>
                <p className="mt-1 font-semibold text-white">{p.title}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 flex flex-wrap items-center gap-4">
            <a href="#text-roll" className="btn btn-ghost">Links grow the ring</a>
            <input type="text" placeholder="Inputs switch to a caret" className="field-input max-w-xs !py-3.5 placeholder:!text-subtle" aria-label="Demo input" />
          </div>
        </section>

        {/* 2 Text roll */}
        <section id="text-roll">
          <DemoLabel num="02" title="Text roll on hover" uses="CSS, per-letter stagger" />
          <div className="mt-6 flex flex-wrap items-center gap-8">
            <nav aria-label="Demo nav" className="glass flex gap-1 rounded-full p-1.5">
              {["About", "Work", "Skills", "Contact"].map((n) => (
                <a key={n} href="#text-roll" className="group rounded-full px-5 py-2.5 text-sm font-medium text-white/80 hover:bg-white/[0.06]">
                  <RollText text={n} />
                </a>
              ))}
            </nav>
            <a href="#text-roll" className="btn btn-primary group">
              <span className="relative"><RollText text="Let's talk" /></span>
              <ArrowUpRight className="btn-arrow relative h-4 w-4" />
            </a>
            <a href="#text-roll" className="group text-4xl font-semibold tracking-tight text-white">
              <RollText text="yashcarpenter@outlook.com" />
            </a>
          </div>
        </section>

        {/* 3 Springs */}
        <section>
          <DemoLabel num="03" title="Spring physics" uses="Motion useSpring (overshoot + settle)" />
          <div className="mt-6 grid items-center gap-10 md:grid-cols-2">
            <SpringTilt className="rounded-[1.5rem]">
              <div className="ring-conic rounded-[1.5rem] p-px">
                <div className="rounded-[calc(1.5rem-1px)] bg-[#0b0b12] p-10">
                  <p className="font-mono text-xs text-a2">Currently at</p>
                  <p className="mt-2 text-4xl font-semibold text-white">Volt Money</p>
                  <p className="mt-3 text-muted">Move fast across the card and let go: it overshoots, then settles. Compare with the linear tilt on the live site.</p>
                </div>
              </div>
            </SpringTilt>
            <div className="flex flex-wrap items-center gap-6">
              <Magnetic>
                <a href="#text-roll" className="btn btn-primary">
                  <span className="relative">Springy magnet</span>
                </a>
              </Magnetic>
              <Magnetic strength={0.6}>
                <span className="flex h-24 w-24 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-sm text-white">
                  Pull me
                </span>
              </Magnetic>
            </div>
          </div>
        </section>

        {/* 4 FLIP */}
        <section>
          <DemoLabel num="04" title="Filter with layout animation" uses="Motion layout + AnimatePresence" />
          <div className="mt-6">
            <FilterGrid />
          </div>
        </section>

        {/* 5 Slot stats */}
        <section>
          <DemoLabel num="05" title="Slot-machine stats" uses="Motion, per-digit reels" />
          <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
            {[
              { v: 1, s: "+", l: "Years experience" },
              { v: 5, s: "+", l: "Projects built" },
              { v: 500, s: "+", l: "DSA problems" },
              { v: 1700, s: "+", l: "CP rating" },
            ].map((s) => (
              <div key={s.l} className="spotlight p-6">
                <p className="text-5xl font-semibold tracking-tight text-white">
                  <SlotCounter value={s.v} suffix={s.s} />
                </p>
                <p className="mt-2 text-sm text-muted">{s.l}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 6 Line reveal */}
        <section>
          <DemoLabel num="06" title="Line-by-line paragraph reveal" uses="measured lines + CSS" />
          <LineReveal
            className="mt-6 max-w-4xl text-2xl leading-snug text-white/85 sm:text-3xl"
            text="My professional journey began with an internship at Groww, where I contributed to backend systems handling millions of users. Today, as a Software Development Engineer at Volt Money, I architect fintech services that process high-volume transactions with 99.9% uptime."
          />
        </section>

        {/* 7 Follow gradient */}
        <section>
          <DemoLabel num="07" title="Cursor-follow gradient text" uses="CSS variables" />
          <div className="mt-6">
            <FollowText>
              Ready to build
              <br />
              something great?
            </FollowText>
          </div>
        </section>
      </div>
    </>
  );
}
