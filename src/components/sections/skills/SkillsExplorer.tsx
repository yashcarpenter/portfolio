"use client";

import { useState } from "react";
import { AnimatePresence, LayoutGroup, motion } from "motion/react";
import Reveal from "@/components/motion/Reveal";
import { skillCategories } from "@/content/skills";
import { cn } from "@/lib/utils";

const spring = { type: "spring", stiffness: 300, damping: 32 } as const;

/** Category tabs (swipeable row on phones) + animated skill grid for the active category. */
export default function SkillsExplorer() {
  const [activeId, setActiveId] = useState(skillCategories[0].id);
  const current = skillCategories.find((c) => c.id === activeId) ?? skillCategories[0];

  return (
    <LayoutGroup>
      <Reveal className="mb-10 sm:mb-12">
        <div
          role="tablist"
          aria-label="Skill categories"
          className="-mx-5 flex snap-x gap-2 overflow-x-auto px-5 pb-2 [mask-image:linear-gradient(90deg,transparent,#000_1.25rem,#000_calc(100%-2.5rem),transparent)] [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:justify-center sm:overflow-visible sm:px-0 sm:[mask-image:none] [&::-webkit-scrollbar]:hidden"
        >
          {skillCategories.map((category) => {
            const active = activeId === category.id;
            return (
              <button
                key={category.id}
                type="button"
                role="tab"
                aria-selected={active}
                aria-controls="skills-panel"
                onClick={(e) => {
                  setActiveId(category.id);
                  // On phones the tab row scrolls sideways: centre the tapped tab (row only, never the page).
                  const btn = e.currentTarget;
                  const row = btn.parentElement;
                  if (row && row.scrollWidth > row.clientWidth) {
                    row.scrollTo({ left: btn.offsetLeft - (row.clientWidth - btn.offsetWidth) / 2, behavior: "smooth" });
                  }
                }}
                className={cn(
                  "group relative flex flex-shrink-0 snap-center items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-semibold transition-colors duration-300",
                  active ? "border-transparent text-black" : "border-white/10 bg-white/[0.03] text-muted hover:border-white/25 hover:text-white"
                )}
              >
                {active && (
                  <motion.span
                    layoutId="skills-tab-pill"
                    transition={spring}
                    className="absolute inset-0 rounded-full bg-white shadow-[0_10px_40px_-10px_rgba(124,92,255,0.8)]"
                  />
                )}
                <span aria-hidden="true" className="relative transition-transform duration-500 group-hover:scale-125">
                  {category.icon}
                </span>
                <span className="relative whitespace-nowrap">{category.title}</span>
              </button>
            );
          })}
        </div>
      </Reveal>

      <div id="skills-panel" role="tabpanel" className="glass rounded-[2rem] p-5 sm:p-10">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="mb-8 flex flex-col items-center gap-4 text-center sm:mb-10 sm:flex-row sm:text-left"
          >
            <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-a1/30 to-a2/20 text-3xl" aria-hidden="true">
              {current.icon}
            </span>
            <div>
              <h3 className="text-2xl font-semibold tracking-tight text-white">{current.title}</h3>
              <p className="mt-1 text-muted">{current.description}</p>
            </div>
            <span className="font-mono text-sm text-subtle sm:ml-auto">{String(current.skills.length).padStart(2, "0")} skills</span>
          </motion.div>
        </AnimatePresence>

        {/* Skills shared between categories (e.g. Java) glide to their new spot; others fade in/out */}
        <ul className="grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
          <AnimatePresence mode="popLayout" initial={false}>
            {current.skills.map((skill, index) => (
              <motion.li
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.9, filter: "blur(6px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)", transition: { ...spring, delay: index * 0.03 } }}
                exit={{ opacity: 0, scale: 0.9, filter: "blur(6px)", transition: { duration: 0.2 } }}
                transition={spring}
              >
                <div data-tilt="8" className="spotlight group h-full p-5 sm:p-6">
                  <div className="flex items-center gap-4">
                    <span
                      aria-hidden="true"
                      className={cn(
                        "flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br text-xl font-bold text-white shadow-lg transition-transform duration-700 ease-[var(--ease)] group-hover:-rotate-6 group-hover:scale-110",
                        skill.color
                      )}
                    >
                      {skill.icon}
                    </span>
                    <h4 className="text-lg font-semibold text-white">{skill.name}</h4>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-muted">{skill.description}</p>
                </div>
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>
      </div>
    </LayoutGroup>
  );
}
