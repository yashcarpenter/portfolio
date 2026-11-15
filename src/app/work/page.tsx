"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, LayoutGroup, motion, useMotionValueEvent, useReducedMotion, useScroll } from "motion/react";
import PageHero from "../components/ui/PageHero";
import SectionHeading from "../components/ui/SectionHeading";
import Reveal from "../components/motion/Reveal";
import { setScrollLocked } from "../components/motion/SmoothScroll";
import { ArrowUpRight, Briefcase, Check, GitHubIcon } from "../components/ui/Icons";
import { cn } from "../lib/utils";


interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  category: string;
  impact: string;
  features: string[];
  image?: string;
  liveUrl?: string;
  githubUrl?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Price Monitoring Application",
    description: "Developed and deployed a dynamic E-commerce Price Tracker on GCP, allowing over 10,000 users to receive timely price drop alerts and make informed purchasing decisions.",
    technologies: ["Spring Boot", "ReactJS", "Redis", "Apache Kafka", "MySQL", "GCP", "AWS"],
    category: "Full Stack",
    impact: "Served 10,000+ users with seamless handling of thousands of daily requests",
    features: [
      "Dynamic price tracking for e-commerce products",
      "Real-time price drop alerts via email/SMS",
      "Price history visualization with interactive charts",
      "JWT token-based authentication system",
      "Redis caching for improved performance",
      "Multi-threading for concurrent request handling"
    ],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 2,
    title: "Centralized Repository System",
    description: "Developed a centralized repository using Spring Boot, MySQL, Prometheus and GCP APIs, reducing dependency failure resolution time by 30%.",
    technologies: ["Spring Boot", "MySQL", "Prometheus", "GCP", "Grafana"],
    category: "Backend",
    impact: "30% reduction in dependency failure resolution time",
    features: [
      "Centralized dependency management",
      "Real-time monitoring with Prometheus",
      "Advanced MySQL schema with indexing",
      "Automated failure detection and resolution",
      "Performance metrics dashboard"
    ],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 3,
    title: "PhonePe LAMF Integration",
    description: "Integrated with PhonePe's Loan Against Mutual Fund (LAMF) flow, enabling mandate collection and processing of user repayments for loans disbursed via PhonePe.",
    technologies: ["Java", "Spring Boot", "PostgreSQL", "AWS", "REST APIs"],
    category: "Backend",
    impact: "Enhanced customer experience and operational efficiency",
    features: [
      "Secure API integration with PhonePe",
      "Real-time mandate collection system",
      "Automated repayment processing",
      "End-to-end loan lifecycle management",
      "High availability microservice architecture"
    ],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 4,
    title: "Session Management System",
    description: "Implemented a session termination feature in the logout flow, improving security compliance by 25%.",
    technologies: ["Java", "Spring Boot", "JWT", "Redis"],
    category: "Backend",
    impact: "25% improvement in security compliance",
    features: [
      "Secure session termination on logout",
      "JWT token invalidation",
      "Improved user data protection",
      "Compliance with security best practices"
    ],
    liveUrl: "#",
    githubUrl: "#"
  }
];

const categories = ["All", "Backend", "Full Stack"];

const timeline = [
  {
    year: "Dec 2024 – Present",
    title: "Software Developer Engineer",
    company: "Volt Money",
    location: "Bengaluru, India",
    description: "Backend Developer utilizing Java, Spring Boot, PostgreSQL, AWS, and other backend technologies to develop, deploy, and maintain scalable microservices, ensuring high system availability, performance, and resilience.",
    details: [
      "Owned and managed multiple microservices within the Lending Stack Team (DSP)",
      "Integrated with PhonePe's Loan Against Mutual Fund (LAMF) flow",
      "Built secure, real-time APIs for end-to-end repayment lifecycle"
    ],
    current: true,
  },
  {
    year: "Jan 2024 – Jul 2024",
    title: "Software Engineer Intern",
    company: "Groww",
    location: "Bengaluru, India",
    description: "Developed centralized repository using Spring Boot, MySQL, Prometheus and GCP APIs, reducing dependency failure resolution time by 30%.",
    details: [
      "Architected MySQL schema with advanced indexing and partitioning, lowering query execution time by 40%",
      "Implemented session termination feature in logout flow, improving security compliance by 25%",
      "Integrated services with Argo, reducing deployment time by 35%",
      "Developed APIs and optimized code, resulting in 20% increase in processing speed"
    ],
    current: false,
  }
];


/** Placeholder links ("#") are hidden rather than rendered as dead links. */
const isRealUrl = (url?: string) => !!url && url !== "#";

const spring = { type: "spring", stiffness: 300, damping: 32 } as const;

const visualStyle = (index: number) => ({
  background: `radial-gradient(circle at ${20 + index * 20}% 30%, rgba(124,92,255,0.45), transparent 55%), radial-gradient(circle at ${80 - index * 15}% 90%, rgba(34,211,238,0.3), transparent 50%)`,
});

/* ------------------------------------------------------------------ */
/* Experience timeline: line draws with scroll, nodes light as it passes */
/* ------------------------------------------------------------------ */
function ExperienceTimeline() {
  const listRef = useRef<HTMLOListElement>(null);
  const itemRefs = useRef<Array<HTMLLIElement | null>>([]);
  const [lit, setLit] = useState<boolean[]>(() => timeline.map(() => false));
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
        {timeline.map((item, i) => {
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
                    <span className="font-mono text-xs text-a2">{item.year}</span>
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

/* ------------------------------------------------------------------ */
/* Project card (grid) + expanded modal sharing layoutIds             */
/* ------------------------------------------------------------------ */
function ProjectCard({ project, index, onOpen }: { project: Project; index: number; onOpen: () => void }) {
  return (
    <motion.article
      layoutId={`project-${project.id}`}
      transition={spring}
      // Drop the CSS transform transition so it doesn't fight Motion's layout animation.
      className="spotlight group flex h-full flex-col overflow-hidden ![transition-property:border-color,background-color]"
    >
      <button
        type="button"
        onClick={onOpen}
        data-cursor-label="View"
        aria-haspopup="dialog"
        aria-label={`Open details for ${project.title}`}
        className="flex flex-1 flex-col text-left"
      >
        <motion.div layoutId={`project-visual-${project.id}`} transition={spring} className="relative h-40 overflow-hidden border-b border-white/[0.06] sm:h-44">
          <div aria-hidden="true" className="absolute inset-0 transition-transform duration-[1.2s] ease-[var(--ease)] group-hover:scale-110" style={visualStyle(index)} />
          <div aria-hidden="true" className="bg-grid absolute inset-0 opacity-80" />
          <div className="relative flex h-full items-end justify-between p-6">
            <span className="font-mono text-6xl font-semibold text-white/10 transition-colors duration-700 group-hover:text-white/25">0{project.id}</span>
            <span className="chip backdrop-blur">{project.category}</span>
          </div>
        </motion.div>

        <div className="flex flex-1 flex-col p-6 sm:p-7">
          <motion.h3 layoutId={`project-title-${project.id}`} transition={spring} className="text-2xl font-semibold tracking-tight text-white">
            {project.title}
          </motion.h3>
          <p className="mt-3 leading-relaxed text-muted">{project.description}</p>

          <div className="mt-5 flex items-start gap-3 rounded-xl border border-emerald-400/20 bg-emerald-400/[0.06] px-4 py-3 text-sm text-emerald-200">
            <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-400" />
            <span>
              <span className="font-semibold">Impact:</span> {project.impact}
            </span>
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.technologies.slice(0, 4).map((t) => (
              <span key={t} className="chip">{t}</span>
            ))}
            {project.technologies.length > 4 && <span className="chip text-subtle">+{project.technologies.length - 4} more</span>}
          </div>

          <span className="mt-auto flex items-center gap-2 pt-7 text-sm font-semibold text-white">
            <span className="link-underline">View details</span>
            <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </span>
        </div>
      </button>
    </motion.article>
  );
}

function ProjectModal({ project, index, onClose }: { project: Project; index: number; onClose: () => void }) {
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

  const fadeIn = { initial: { opacity: 0, y: 14 }, animate: { opacity: 1, y: 0, transition: { delay: 0.15, duration: 0.4 } }, exit: { opacity: 0, transition: { duration: 0.1 } } };

  return (
    <>
      <motion.div
        className="fixed inset-0 z-[80] bg-black/70 backdrop-blur-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />
      {/* Bottom sheet on phones, centered dialog on larger screens */}
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
          <motion.div layoutId={`project-visual-${project.id}`} transition={spring} className="relative h-44 overflow-hidden border-b border-white/[0.06] sm:h-56">
            <div aria-hidden="true" className="absolute inset-0" style={visualStyle(index)} />
            <div aria-hidden="true" className="bg-grid absolute inset-0 opacity-80" />
            <div className="relative flex h-full items-end justify-between p-6">
              <span className="font-mono text-7xl font-semibold text-white/20">0{project.id}</span>
              <span className="chip backdrop-blur">{project.category}</span>
            </div>
          </motion.div>

          <div className="p-6 sm:p-9">
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

              <div className="mt-5 flex items-start gap-3 rounded-xl border border-emerald-400/20 bg-emerald-400/[0.06] px-4 py-3 text-sm text-emerald-200">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-400" />
                <span>
                  <span className="font-semibold">Impact:</span> {project.impact}
                </span>
              </div>

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
                  <span key={t} className="chip">{t}</span>
                ))}
              </div>

              <div className="mt-9 flex flex-wrap items-center gap-3">
                <button ref={closeRef} type="button" onClick={onClose} className="btn btn-primary !h-11">
                  <span className="relative">Close</span>
                </button>
                {isRealUrl(project.liveUrl) && (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-ghost !h-11">
                    Live demo <ArrowUpRight className="h-4 w-4" />
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

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */
export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [openId, setOpenId] = useState<number | null>(null);
  const lastTrigger = useRef<HTMLElement | null>(null);

  const filteredProjects = activeFilter === "All"
    ? projects
    : projects.filter(project => project.category === activeFilter);

  const openIndex = projects.findIndex((p) => p.id === openId);
  const openProject = openIndex >= 0 ? projects[openIndex] : null;

  const close = useCallback(() => {
    setOpenId(null);
    // Return focus to the card that opened the dialog.
    setTimeout(() => lastTrigger.current?.focus({ preventScroll: true }), 0);
  }, []);

  return (
    <>
      <PageHero
        eyebrow="Portfolio & experience"
        title="My work &"
        accent="professional journey"
        description="A showcase of my professional experience and projects, featuring innovative solutions and cutting-edge technologies that solve real-world problems."
      />

      {/* Experience */}
      <section className="pb-28 sm:pb-36">
        <div className="container-x">
          <SectionHeading
            align="left"
            eyebrow="Experience"
            title="Professional"
            accent="experience."
            description="My journey in backend development across different companies and roles."
          />
          <ExperienceTimeline />
        </div>
      </section>

      {/* Projects */}
      <section className="py-28 sm:py-36">
        <div className="container-x">
          <SectionHeading
            eyebrow="Selected work"
            title="Featured"
            accent="projects."
            description="A collection of projects that showcase my technical skills and problem-solving abilities."
          />

          <LayoutGroup>
            {/* Filter with sliding pill */}
            <Reveal className="mb-12 flex justify-center">
              <div role="tablist" aria-label="Filter projects" className="glass inline-flex rounded-full p-1.5">
                {categories.map((category) => {
                  const active = activeFilter === category;
                  return (
                    <button
                      key={category}
                      type="button"
                      role="tab"
                      aria-selected={active}
                      onClick={() => setActiveFilter(category)}
                      className={cn(
                        "relative rounded-full px-5 py-2.5 text-sm font-semibold transition-colors duration-300 sm:px-7",
                        active ? "text-black" : "text-muted hover:text-white"
                      )}
                    >
                      {active && <motion.span layoutId="project-filter-pill" transition={spring} className="absolute inset-0 rounded-full bg-white" />}
                      <span className="relative">{category}</span>
                    </button>
                  );
                })}
              </div>
            </Reveal>

            {/* Grid re-flows with a layout animation when the filter changes */}
            <div className="grid gap-6 lg:grid-cols-2">
              <AnimatePresence mode="popLayout" initial={false}>
                {filteredProjects.map((project) => {
                  const index = projects.indexOf(project);
                  return (
                    <motion.div
                      key={project.id}
                      layout
                      initial={{ opacity: 0, scale: 0.92, filter: "blur(6px)" }}
                      animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                      exit={{ opacity: 0, scale: 0.92, filter: "blur(6px)" }}
                      transition={spring}
                    >
                      <ProjectCard
                        project={project}
                        index={index}
                        onOpen={() => {
                          lastTrigger.current = document.activeElement as HTMLElement;
                          setOpenId(project.id);
                        }}
                      />
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>

            <AnimatePresence>
              {openProject && <ProjectModal key={openProject.id} project={openProject} index={openIndex} onClose={close} />}
            </AnimatePresence>
          </LayoutGroup>

          <div className="mt-16 text-center">
            <Link href="/contact" data-magnetic="0.2" className="btn btn-primary">
              <span className="relative">Interested in working together?</span>
              <ArrowUpRight className="btn-arrow relative h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
