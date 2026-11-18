"use client";

import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { AnimatePresence, LayoutGroup, motion, useReducedMotion, useScroll, useTransform, type MotionValue } from "motion/react";
import Reveal from "@/components/motion/Reveal";
import { projects as allProjects, type ProjectKind } from "@/content/projects";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

/** Header clearance + per-card offset so the pinned stack shows each card's top edge. */
const pinTop = (index: number) => `calc(6.5rem + ${index * 1.25}rem)`;

/**
 * One pinned card in the stack.
 * - Pins near the top when the card fits on screen (desktop).
 * - Pins by its bottom edge when it is taller than the screen (phones), so the whole card
 *   has scrolled past before the next one slides over it and nothing gets hidden.
 * While later cards cover it, it shrinks slightly and darkens (overlay, not a CSS filter: cheaper on phones).
 */
function StackItem({
  progress,
  index,
  total,
  enabled,
  children,
}: {
  progress: MotionValue<number>;
  index: number;
  total: number;
  enabled: boolean;
  children: ReactNode;
}) {
  const ref = useRef<HTMLLIElement>(null);
  const [height, setHeight] = useState<number | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !enabled) return;
    const ro = new ResizeObserver(() => setHeight(el.offsetHeight));
    ro.observe(el);
    return () => ro.disconnect();
  }, [enabled]);

  const depth = total - 1 - index; // how many cards end up on top of this one
  const start = index / total;
  const scale = useTransform(progress, [start, 1], [1, 1 - depth * 0.04]);
  const dim = useTransform(progress, [start, 1], [0, Math.min(0.55, depth * 0.18)]);

  // svh = small viewport height, so iOS/Android toolbars showing or hiding don't make the stack jump.
  const top = height ? `min(${pinTop(index)}, calc(100svh - ${height}px - 1rem))` : pinTop(index);

  return (
    <li ref={ref} className={enabled ? "sticky" : undefined} style={enabled ? { top } : undefined}>
      {enabled && depth > 0 ? (
        <motion.div className="relative" style={{ scale, transformOrigin: "50% 0%" }}>
          {children}
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 rounded-[1.25rem] bg-black"
            style={{ opacity: dim }}
          />
        </motion.div>
      ) : (
        children
      )}
    </li>
  );
}

/**
 * Projects for one Work-page section, as wide showcase cards that pin and stack on top of
 * each other while scrolling (all screen sizes; off for reduced motion). Cards expand into a details modal.
 */
export default function Projects({ kind }: { kind: ProjectKind }) {
  const projects = allProjects.filter((p) => p.kind === kind);
  const listRef = useRef<HTMLOListElement>(null);
  // Read reduced-motion after mount so server and first client render match.
  const reduce = useReducedMotion();
  const [stack, setStack] = useState(true);
  useEffect(() => setStack(!reduce), [reduce]);
  const { scrollYProgress } = useScroll({ target: listRef, offset: ["start start", "end end"] });

  const [openId, setOpenId] = useState<number | null>(null);
  const lastTrigger = useRef<HTMLElement | null>(null);
  const openIndex = projects.findIndex((p) => p.id === openId);
  const openProject = openIndex >= 0 ? projects[openIndex] : null;

  const close = useCallback(() => {
    setOpenId(null);
    // Return focus to the card that opened the dialog.
    setTimeout(() => lastTrigger.current?.focus({ preventScroll: true }), 0);
  }, []);

  return (
    // Namespaced so the two sections' shared-layout animations never cross over.
    <LayoutGroup id={`projects-${kind}`}>
      <ol ref={listRef} className="space-y-[10svh] lg:space-y-[12vh]">
        {projects.map((project, i) => (
          <StackItem key={project.id} progress={scrollYProgress} index={i} total={projects.length} enabled={stack}>
            <Reveal variant="up">
              <ProjectCard
                project={project}
                index={i}
                total={projects.length}
                onOpen={() => {
                  lastTrigger.current = document.activeElement as HTMLElement;
                  setOpenId(project.id);
                }}
              />
            </Reveal>
          </StackItem>
        ))}
      </ol>

      <AnimatePresence>
        {openProject && <ProjectModal key={openProject.id} project={openProject} index={openIndex} onClose={close} />}
      </AnimatePresence>
    </LayoutGroup>
  );
}
