"use client";

import { useEffect, useState } from "react";
import { flushSync } from "react-dom";
import { AnimatePresence, motion } from "motion/react";
import DemoLabel from "../_components/DemoLabel";
import { CurtainLink } from "../../components/motion/Curtain";
import { projects } from "../_lib/data";
import { ArrowRight, ArrowUpRight } from "../../components/ui/Icons";
import { prefersReducedMotion } from "../../lib/utils";

type Project = (typeof projects)[number];

const visual = (p: Project) => ({
  background: `radial-gradient(circle at 30% 30%, hsla(${p.hue},90%,65%,0.5), transparent 60%), radial-gradient(circle at 80% 90%, hsla(${p.hue + 60},90%,60%,0.35), transparent 55%), #0b0b12`,
});

/* ------------------------------------------------------------------ */
/* A. Native View Transitions API                                      */
/* ------------------------------------------------------------------ */
function ViewTransitionDemo() {
  const [selected, setSelected] = useState<Project | null>(null);
  const [supported, setSupported] = useState(true);

  useEffect(() => setSupported(typeof document !== "undefined" && "startViewTransition" in document), []);

  const change = (next: Project | null) => {
    if (!supported || prefersReducedMotion()) return setSelected(next);
    document.startViewTransition(() => flushSync(() => setSelected(next)));
  };

  return (
    <div>
      <DemoLabel num="A" title="Shared-element morph" uses="View Transitions API (native, no library)" />
      {!supported && <p className="mt-3 text-sm text-amber-300">Your browser doesn&apos;t support View Transitions, so this falls back to an instant swap.</p>}
      <div className="mt-6 min-h-[34rem]">
        {selected ? (
          <article className="spotlight overflow-hidden">
            <div className="relative h-64" style={{ ...visual(selected), viewTransitionName: `vt-visual-${selected.id}` }}>
              <div aria-hidden="true" className="bg-grid absolute inset-0" />
            </div>
            <div className="p-8 sm:p-10">
              <h3 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl" style={{ viewTransitionName: `vt-title-${selected.id}` }}>
                {selected.title}
              </h3>
              <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">{selected.blurb}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {selected.stack.map((s) => (
                  <span key={s} className="chip">{s}</span>
                ))}
              </div>
              <button type="button" onClick={() => change(null)} className="btn btn-ghost mt-8">
                ← Back to grid
              </button>
            </div>
          </article>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2">
            {projects.map((p) => (
              <button key={p.id} type="button" onClick={() => change(p)} className="spotlight group overflow-hidden text-left">
                <div className="relative h-36" style={{ ...visual(p), viewTransitionName: `vt-visual-${p.id}` }}>
                  <div aria-hidden="true" className="bg-grid absolute inset-0" />
                </div>
                <div className="flex items-center justify-between p-5">
                  <h3 className="text-lg font-semibold text-white" style={{ viewTransitionName: `vt-title-${p.id}` }}>
                    {p.title}
                  </h3>
                  <ArrowRight className="h-4 w-4 text-muted transition-transform duration-500 group-hover:translate-x-1" />
                </div>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* B. Motion layoutId (works in every browser)                         */
/* ------------------------------------------------------------------ */
function LayoutIdDemo() {
  const [selected, setSelected] = useState<Project | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setSelected(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div>
      <DemoLabel num="B" title="Card expands into a modal" uses="Motion layoutId + spring" />
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {projects.map((p) => (
          <motion.button
            key={p.id}
            layoutId={`card-${p.id}`}
            type="button"
            onClick={() => setSelected(p)}
            className="overflow-hidden rounded-[1.25rem] border border-white/10 text-left"
            style={visual(p)}
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 320, damping: 30 }}
          >
            <div className="flex h-44 flex-col justify-end p-5">
              <motion.span layoutId={`num-${p.id}`} className="font-mono text-5xl font-semibold text-white/25">
                0{p.id}
              </motion.span>
              <motion.h3 layoutId={`title-${p.id}`} className="mt-1 text-lg font-semibold text-white">
                {p.title}
              </motion.h3>
            </div>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {selected && (
          <>
            <motion.div
              key="backdrop"
              className="fixed inset-0 z-[70] bg-black/60 backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
            />
            <div className="pointer-events-none fixed inset-0 z-[71] flex items-center justify-center p-4">
              <motion.div
                layoutId={`card-${selected.id}`}
                role="dialog"
                aria-modal="true"
                aria-label={selected.title}
                className="pointer-events-auto w-full max-w-2xl overflow-hidden rounded-[1.75rem] border border-white/15"
                style={visual(selected)}
                transition={{ type: "spring", stiffness: 260, damping: 30 }}
              >
                <div className="p-8 sm:p-10">
                  <motion.span layoutId={`num-${selected.id}`} className="font-mono text-7xl font-semibold text-white/25">
                    0{selected.id}
                  </motion.span>
                  <motion.h3 layoutId={`title-${selected.id}`} className="mt-2 text-4xl font-semibold tracking-tight text-white">
                    {selected.title}
                  </motion.h3>
                  <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0, transition: { delay: 0.15 } }} exit={{ opacity: 0, transition: { duration: 0.1 } }}>
                    <p className="mt-4 text-lg leading-relaxed text-white/75">{selected.blurb}</p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {selected.stack.map((s) => (
                        <span key={s} className="chip">{s}</span>
                      ))}
                    </div>
                    <button type="button" onClick={() => setSelected(null)} className="btn btn-primary mt-8 !h-11" autoFocus>
                      <span className="relative">Close</span>
                    </button>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */
export default function TransitionsDemo() {
  return (
    <div className="container-x space-y-28 pb-32 pt-40">
      <header>
        <h1 className="text-[clamp(2.5rem,6vw,5rem)] font-semibold leading-none tracking-[-0.04em] text-white">
          Page <span className="font-serif font-normal italic text-gradient">transitions.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted">
          Three ways to move between views. Click the cards, then try the curtain links.
        </p>
      </header>

      <ViewTransitionDemo />
      <LayoutIdDemo />

      <div>
        <DemoLabel num="C" title="Curtain wipe between routes" uses="clip-path + persistent layout" />
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {[
            { href: "/lab/hero", label: "Hero moments" },
            { href: "/lab/scroll", label: "Scroll storytelling" },
            { href: "/lab/micro", label: "Micro-interactions" },
          ].map((l) => (
            <CurtainLink key={l.href} href={l.href} className="spotlight group flex items-center justify-between p-6">
              <span className="font-semibold text-white">{l.label}</span>
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition-all duration-700 ease-[var(--ease)] group-hover:rotate-45 group-hover:bg-white group-hover:text-black">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </CurtainLink>
          ))}
        </div>
      </div>
    </div>
  );
}
