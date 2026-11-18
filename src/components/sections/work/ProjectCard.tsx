"use client";

import type { CSSProperties } from "react";
import { motion } from "motion/react";
import { ArrowUpRight } from "@/components/ui/Icons";
import { isRealUrl, type Project } from "@/content/projects";
import { cn } from "@/lib/utils";

/** "● Live" (green, pulsing) for production projects, "Demo" for showcases. */
export function StatusBadge({ status }: { status?: Project["status"] }) {
  const live = status === "production";
  return (
    <span
      className={
        live
          ? "inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-[#0b0b12]/80 px-3 py-1 text-xs font-semibold text-emerald-300 backdrop-blur transition-colors hover:border-emerald-300/60 hover:text-emerald-200"
          : "inline-flex items-center gap-2 rounded-full border border-white/15 bg-[#0b0b12]/80 px-3 py-1 text-xs font-semibold text-white/80 backdrop-blur transition-colors hover:border-white/35 hover:text-white"
      }
    >
      {live ? (
        <span className="relative flex h-1.5 w-1.5">
          <span className="animate-ping-soft absolute inline-flex h-full w-full rounded-full bg-emerald-400" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
        </span>
      ) : null}
      {live ? "Live" : "Demo"}
      <ArrowUpRight className="h-3 w-3" />
    </span>
  );
}

/** Shared by the card and its modal so the expand animation lines up. */
export const spring = { type: "spring", stiffness: 300, damping: 32 } as const;

/** Per-project gradient header, offset by position so neighbouring cards look different. */
export const visualStyle = (index: number): CSSProperties => ({
  background: `radial-gradient(circle at ${20 + index * 20}% 30%, rgba(124,92,255,0.45), transparent 55%), radial-gradient(circle at ${80 - index * 15}% 90%, rgba(34,211,238,0.3), transparent 50%)`,
});

/** Industry projects show where they were built; independent ones show their category. */
export const projectLabel = (p: Project) => (p.company ? `@ ${p.company}` : p.category);

export function ImpactNote({ impact }: { impact: string }) {
  return (
    <div className="mt-5 flex items-start gap-3 rounded-xl border border-emerald-400/20 bg-emerald-400/[0.06] px-4 py-3 text-sm text-emerald-200">
      <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-400" />
      <span>
        <span className="font-semibold">Impact:</span> {impact}
      </span>
    </div>
  );
}

/** Pulsing "currently leading" pill for the featured project. */
export function RolePill({ role }: { role: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-a2/30 bg-a2/[0.08] px-3 py-1 text-xs font-semibold text-a2">
      <span className="relative flex h-1.5 w-1.5">
        <span className="animate-ping-soft absolute inline-flex h-full w-full rounded-full bg-a2" />
        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-a2" />
      </span>
      Now · {role}
    </span>
  );
}

const MAX_CHIPS = 5;

interface ProjectCardProps {
  project: Project;
  index: number;
  /** Number of projects in this section, for the "01 / 04" index. */
  total: number;
  onOpen: () => void;
}

/**
 * Wide showcase card: visual panel (headline figure) + content, alternating sides on desktop,
 * stacked on phones. Shares layoutIds with ProjectModal, so it expands into the dialog.
 */
export default function ProjectCard({ project, index, total, onOpen }: ProjectCardProps) {
  const flip = index % 2 === 1;
  const number = String(index + 1).padStart(2, "0");

  return (
    <motion.article
      layoutId={`project-${project.id}`}
      transition={spring}
      // Opaque so stacked cards don't show through each other; drop the CSS transform
      // transition so it doesn't fight Motion's layout animation.
      className="spotlight group overflow-hidden !bg-[#0b0b12] ![transition-property:border-color,background-color]"
    >
      {project.featured && <span aria-hidden="true" className="border-conic z-20" />}

      <button
        type="button"
        onClick={onOpen}
        data-cursor-label="View"
        aria-haspopup="dialog"
        aria-label={`Open details for ${project.title}`}
        className="grid w-full text-left lg:min-h-[25rem] lg:grid-cols-12"
      >
        {/* Visual panel */}
        <motion.div
          layoutId={`project-visual-${project.id}`}
          transition={spring}
          className={cn(
            "relative h-52 overflow-hidden border-b border-white/[0.06] sm:h-60 lg:col-span-5 lg:h-auto lg:border-b-0",
            flip ? "lg:order-2 lg:border-l" : "lg:border-r"
          )}
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 transition-transform duration-[1.2s] ease-[var(--ease)] group-hover:scale-110"
            style={visualStyle(index)}
          />
          <div aria-hidden="true" className="bg-grid absolute inset-0 opacity-80" />

          <div className="relative flex h-full flex-col justify-end p-6 sm:p-8">
            <span className="chip absolute right-5 top-5 backdrop-blur">{projectLabel(project)}</span>
            {project.highlight && (
              <div>
                <p className="text-gradient text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">{project.highlight.value}</p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.16em] text-white/60">{project.highlight.label}</p>
              </div>
            )}
          </div>
        </motion.div>

        {/* Content */}
        <div className={cn("flex flex-col p-6 sm:p-8 lg:col-span-7 lg:p-10", flip && "lg:order-1")}>
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <span className="font-mono text-xs tracking-[0.14em] text-subtle">
              <span className="text-white/80">{number}</span> / {String(total).padStart(2, "0")}
            </span>
            {project.featured && project.role && <RolePill role={project.role} />}
          </div>
          <motion.h3
            layoutId={`project-title-${project.id}`}
            transition={spring}
            className="text-2xl font-semibold tracking-tight text-white sm:text-3xl lg:text-4xl"
          >
            {project.title}
          </motion.h3>
          <p className="mt-4 leading-relaxed text-muted lg:text-lg">{project.description}</p>

          <ImpactNote impact={project.impact} />

          <div className="mt-5 flex flex-wrap gap-2">
            {project.technologies.slice(0, MAX_CHIPS).map((t) => (
              <span key={t} className="chip">
                {t}
              </span>
            ))}
            {project.technologies.length > MAX_CHIPS && (
              <span className="chip text-subtle">+{project.technologies.length - MAX_CHIPS} more</span>
            )}
          </div>

          <span className="mt-auto flex items-center gap-2 pt-7 text-sm font-semibold text-white">
            <span className="link-underline">View details</span>
            <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </span>
        </div>
      </button>

      {/* Live-site link sits outside the card's button (links can't nest inside buttons).
          Pinned to the visual panel's top-left, which moves right on flipped desktop cards. */}
      {isRealUrl(project.liveUrl) && (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open ${project.title} (${project.status === "production" ? "live site" : "demo"}) in a new tab`}
          className={cn("absolute left-5 top-5 z-10", flip && "lg:left-[calc(58.333%+1.25rem)]")}
        >
          <StatusBadge status={project.status} />
        </a>
      )}
    </motion.article>
  );
}
