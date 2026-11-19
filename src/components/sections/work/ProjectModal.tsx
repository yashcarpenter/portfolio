"use client";

import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { setScrollLocked } from "@/components/motion/SmoothScroll";
import { ArrowUpRight, Check, GitHubIcon } from "@/components/ui/Icons";
import { isRealUrl, type Project } from "@/content/projects";
import { cn } from "@/lib/utils";
import { BrowserPreview, ImpactNote, RolePill, StatusBadge, liveLinkLabel, projectLabel, spring, visualStyle } from "./ProjectCard";

interface ProjectModalProps {
  project: Project;
  index: number;
  onClose: () => void;
}

const fadeIn = {
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0, transition: { delay: 0.15, duration: 0.4 } },
  exit: { opacity: 0, transition: { duration: 0.1 } },
};

/** Project details: centred dialog on desktop, bottom sheet on phones. Locks page scroll; Esc or backdrop closes. */
export default function ProjectModal({ project, index, onClose }: ProjectModalProps) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setScrollLocked(true);
    closeRef.current?.focus({ preventScroll: true });
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      setScrollLocked(false);
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <>
      <motion.div
        className="fixed inset-0 z-[80] bg-black/70 backdrop-blur-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />
      <div className="pointer-events-none fixed inset-0 z-[81] flex items-end justify-center sm:items-center sm:p-6">
        <motion.div
          layoutId={`project-${project.id}`}
          transition={spring}
          role="dialog"
          aria-modal="true"
          aria-labelledby={`project-modal-title-${project.id}`}
          data-lenis-prevent
          className="pointer-events-auto max-h-[88svh] w-full max-w-2xl overflow-y-auto overscroll-contain rounded-t-[1.75rem] border border-white/15 bg-[#0b0b12] sm:rounded-[1.75rem]"
        >
          <motion.div
            layoutId={`project-visual-${project.id}`}
            transition={spring}
            className={cn(
              "relative overflow-hidden border-b border-white/[0.06]",
              project.preview ? "h-56 sm:h-72" : "h-44 sm:h-56"
            )}
          >
            <div aria-hidden="true" className="absolute inset-0" style={visualStyle(index)} />
            <div aria-hidden="true" className="bg-grid absolute inset-0 opacity-80" />
            {isRealUrl(project.liveUrl) && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="absolute left-6 top-6 z-10">
                <StatusBadge status={project.status} />
              </a>
            )}
            {project.preview ? (
              <>
                <span className="chip absolute right-6 top-6 z-[1] backdrop-blur">{projectLabel(project)}</span>
                <BrowserPreview
                  src={project.preview}
                  url={project.liveUrl}
                  title={project.title}
                  className="absolute inset-x-8 bottom-0 top-[4.5rem] sm:inset-x-14"
                />
              </>
            ) : (
              <div className="relative flex h-full items-end justify-between p-6">
                <span className="font-mono text-7xl font-semibold text-white/20">{String(index + 1).padStart(2, "0")}</span>
                <span className="chip backdrop-blur">{projectLabel(project)}</span>
              </div>
            )}
          </motion.div>

          <div className="p-6 sm:p-9">
            {project.featured && project.role && (
              <motion.div {...fadeIn} className="mb-4">
                <RolePill role={project.role} />
              </motion.div>
            )}
            <motion.h3
              id={`project-modal-title-${project.id}`}
              layoutId={`project-title-${project.id}`}
              transition={spring}
              className="text-3xl font-semibold tracking-tight text-white sm:text-4xl"
            >
              {project.title}
            </motion.h3>

            <motion.div {...fadeIn}>
              <p className="mt-4 text-lg leading-relaxed text-muted">{project.description}</p>
              <ImpactNote impact={project.impact} />

              <h4 className="mt-7 text-xs font-semibold uppercase tracking-[0.14em] text-subtle">Key features</h4>
              <ul className="mt-3 space-y-2.5">
                {project.features.map((f, i) => (
                  <motion.li
                    key={f}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0, transition: { delay: 0.2 + i * 0.05 } }}
                    className="flex items-start gap-3 text-muted"
                  >
                    <Check className="mt-1 h-4 w-4 flex-shrink-0 text-a2" />
                    {f}
                  </motion.li>
                ))}
              </ul>

              <h4 className="mt-7 text-xs font-semibold uppercase tracking-[0.14em] text-subtle">Technologies</h4>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.technologies.map((t) => (
                  <span key={t} className="chip">
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-9 flex flex-wrap items-center gap-3">
                <button ref={closeRef} type="button" onClick={onClose} className="btn btn-primary !h-11">
                  <span className="relative">Close</span>
                </button>
                {isRealUrl(project.liveUrl) && (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-ghost !h-11">
                    {liveLinkLabel(project)} <ArrowUpRight className="h-4 w-4" />
                  </a>
                )}
                {isRealUrl(project.githubUrl) && (
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-ghost !h-11">
                    <GitHubIcon className="h-4 w-4" /> GitHub
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </>
  );
}
