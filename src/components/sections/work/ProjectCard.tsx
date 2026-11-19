"use client";

import type { CSSProperties } from "react";
import Image from "next/image";
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

/** Button text for a project's live link. */
export const liveLinkLabel = (p: Project) => (p.status === "production" ? "Visit live site" : "Try the demo");

/** "www.example.com/" → "example.com" for the browser-frame address bar. */
const hostOf = (url: string) => new URL(url).host.replace(/^www\./, "");

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

/** Screenshot of the live site in a small browser window, rising out of the visual panel. */
export function BrowserPreview({ src, url, title, className }: { src: string; url?: string; title: string; className?: string }) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-t-xl border border-b-0 border-white/15 bg-[#0b0b12] shadow-[0_-20px_60px_-20px_rgba(124,92,255,0.45)]",
        className
      )}
    >
      <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.04] px-3 py-2">
        <span className="flex gap-1.5" aria-hidden="true">
          <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
          <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
          <span className="h-2 w-2 rounded-full bg-[#28c840]" />
        </span>
        {url && (
          <span className="mx-auto truncate rounded-md bg-white/[0.06] px-3 py-0.5 font-mono text-[0.65rem] text-white/60">
            {hostOf(url)}
          </span>
        )}
      </div>
      <div className="relative aspect-[16/10] w-full">
        <Image
          src={src}
          alt={`Screenshot of ${title}`}
          fill
          sizes="(min-width: 1024px) 480px, 100vw"
          className="object-cover object-top"
        />
      </div>
    </div>
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
 * Wide showcase card: visual panel (site preview or headline figure) + content, alternating sides
 * on desktop, stacked on phones. Shares layoutIds with ProjectModal, so it expands into the dialog.
 *
 * Whole card opens the details ("stretched" button: its ::after covers the card). Real links
 * (live site, status badge) sit above that layer, so they stay clickable on their own.
 */
export default function ProjectCard({ project, index, total, onOpen }: ProjectCardProps) {
  const flip = index % 2 === 1;
  const number = String(index + 1).padStart(2, "0");
  const live = isRealUrl(project.liveUrl) ? project.liveUrl : undefined;
  const preview = project.preview;

  return (
    <motion.article
      layoutId={`project-${project.id}`}
      transition={spring}
      // Opaque so stacked cards don't show through each other; drop the CSS transform
      // transition so it doesn't fight Motion's layout animation.
      className="spotlight group overflow-hidden !bg-[#0b0b12] ![transition-property:border-color,background-color]"
    >
      {project.featured && <span aria-hidden="true" className="border-conic z-20" />}

      <div className="grid lg:min-h-[25rem] lg:grid-cols-12">
        {/* Visual panel */}
        <motion.div
          layoutId={`project-visual-${project.id}`}
          transition={spring}
          className={cn(
            "relative overflow-hidden border-b border-white/[0.06] lg:col-span-5 lg:h-auto lg:border-b-0",
            preview ? "h-64 sm:h-80" : "h-52 sm:h-60",
            flip ? "lg:order-2 lg:border-l" : "lg:border-r"
          )}
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 transition-transform duration-[1.2s] ease-[var(--ease)] group-hover:scale-110"
            style={visualStyle(index)}
          />
          <div aria-hidden="true" className="bg-grid absolute inset-0 opacity-80" />
          <span className="chip absolute right-5 top-5 z-[1] backdrop-blur">{projectLabel(project)}</span>

          {preview ? (
            <>
              {/* Desktop panels are taller than the frame: use the space above it for the headline figure. */}
              {project.highlight && (
                <div className="absolute inset-x-8 top-[5.25rem] hidden lg:block">
                  <p className="text-gradient text-5xl font-semibold tracking-tight">{project.highlight.value}</p>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-[0.16em] text-white/60">{project.highlight.label}</p>
                </div>
              )}
              <BrowserPreview
                src={preview}
                url={live}
                title={project.title}
                // Phones: frame fills the panel. Desktop: natural height, anchored to the bottom.
                className="absolute inset-x-6 bottom-0 top-[4.25rem] transition-transform duration-700 ease-[var(--ease)] group-hover:-translate-y-2 sm:inset-x-10 lg:inset-x-8 lg:top-auto"
              />
            </>
          ) : (
            project.highlight && (
              <div className="relative flex h-full flex-col justify-end p-6 sm:p-8">
                <p className="text-gradient text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">{project.highlight.value}</p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.16em] text-white/60">{project.highlight.label}</p>
              </div>
            )
          )}
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

          <div className="mt-auto flex flex-wrap items-center gap-x-6 gap-y-4 pt-7">
            {live && (
              <a
                href={live}
                target="_blank"
                rel="noopener noreferrer"
                data-magnetic="0.15"
                aria-label={`${liveLinkLabel(project)}: ${project.title} (opens in a new tab)`}
                className="btn btn-primary relative z-10 !h-11"
              >
                <span className="relative">{liveLinkLabel(project)}</span>
                <ArrowUpRight className="btn-arrow relative h-4 w-4" />
              </a>
            )}
            <button
              type="button"
              onClick={onOpen}
              data-cursor-label="View"
              aria-haspopup="dialog"
              aria-label={`Open details for ${project.title}`}
              // ::after stretches over the whole card, so clicking anywhere opens the details.
              className="flex items-center gap-2 text-sm font-semibold text-white after:absolute after:inset-0 after:rounded-[1.25rem] after:content-[''] focus-visible:outline-none focus-visible:after:outline focus-visible:after:outline-2 focus-visible:after:-outline-offset-2 focus-visible:after:outline-a2"
            >
              <span className="link-underline">View details</span>
              <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Status badge, pinned to the visual panel's top-left (moves right on flipped desktop cards). */}
      {live && (
        <a
          href={live}
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={-1}
          aria-hidden="true"
          className={cn("absolute left-5 top-5 z-10", flip && "lg:left-[calc(58.333%+1.25rem)]")}
        >
          <StatusBadge status={project.status} />
        </a>
      )}
    </motion.article>
  );
}
