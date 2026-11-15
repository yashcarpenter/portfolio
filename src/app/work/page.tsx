"use client";

import { useState } from "react";
import Link from "next/link";
import PageHero from "../components/ui/PageHero";
import SectionHeading from "../components/ui/SectionHeading";
import Reveal from "../components/motion/Reveal";
import { ArrowUpRight, Briefcase, Check, GitHubIcon } from "../components/ui/Icons";
import { cn, delay } from "../lib/utils";

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

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const features = expanded ? project.features : project.features.slice(0, 3);
  const techs = expanded ? project.technologies : project.technologies.slice(0, 4);
  const detailsId = `project-${project.id}-details`;

  return (
    <article className="spotlight pop-in group flex h-full flex-col overflow-hidden" style={delay(index * 90)}>
      {/* Visual header */}
      <div className="relative h-44 overflow-hidden border-b border-white/[0.06]">
        <div
          aria-hidden="true"
          className="absolute inset-0 transition-transform duration-[1.2s] ease-[var(--ease)] group-hover:scale-110"
          style={{
            background: `radial-gradient(circle at ${20 + index * 20}% 30%, rgba(124,92,255,0.45), transparent 55%), radial-gradient(circle at ${80 - index * 15}% 90%, rgba(34,211,238,0.3), transparent 50%)`,
          }}
        />
        <div aria-hidden="true" className="bg-grid absolute inset-0 opacity-80" />
        <div className="relative flex h-full items-end justify-between p-6">
          <span className="font-mono text-6xl font-semibold text-white/10 transition-colors duration-700 group-hover:text-white/25">
            0{project.id}
          </span>
          <span className="chip backdrop-blur">{project.category}</span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-7">
        <h3 className="text-2xl font-semibold tracking-tight text-white">{project.title}</h3>
        <p className="mt-3 leading-relaxed text-muted">{project.description}</p>

        <div className="mt-5 flex items-start gap-3 rounded-xl border border-emerald-400/20 bg-emerald-400/[0.06] px-4 py-3 text-sm text-emerald-200">
          <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-400" />
          <span>
            <span className="font-semibold">Impact:</span> {project.impact}
          </span>
        </div>

        <div id={detailsId}>
          <h4 className="mt-6 text-xs font-semibold uppercase tracking-[0.14em] text-subtle">Key features</h4>
          <ul className="mt-3 space-y-2">
            {features.map((f, i) => (
              <li key={f} className={cn("flex items-start gap-3 text-sm text-muted", i >= 3 && "pop-in")} style={delay((i - 3) * 50)}>
                <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-a2" />
                {f}
              </li>
            ))}
          </ul>

          <h4 className="mt-6 text-xs font-semibold uppercase tracking-[0.14em] text-subtle">Technologies</h4>
          <div className="mt-3 flex flex-wrap gap-2">
            {techs.map((t) => (
              <span key={t} className="chip">
                {t}
              </span>
            ))}
            {!expanded && project.technologies.length > 4 && (
              <span className="chip text-subtle">+{project.technologies.length - 4} more</span>
            )}
          </div>
        </div>

        <div className="mt-auto flex items-center justify-between pt-8">
          {project.features.length > 3 || project.technologies.length > 4 ? (
            <button
              type="button"
              onClick={() => setExpanded((e) => !e)}
              aria-expanded={expanded}
              aria-controls={detailsId}
              className="link-underline text-sm font-semibold text-white"
            >
              {expanded ? "Show less" : `View details (+${Math.max(0, project.features.length - 3)} features)`}
            </button>
          ) : (
            <span />
          )}
          <div className="flex gap-2">
            {isRealUrl(project.liveUrl) && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} live demo`} className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-muted transition-colors hover:border-white/30 hover:text-white">
                <ArrowUpRight className="h-4 w-4" />
              </a>
            )}
            {isRealUrl(project.githubUrl) && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} on GitHub`} className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-muted transition-colors hover:border-white/30 hover:text-white">
                <GitHubIcon className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = activeFilter === "All"
    ? projects
    : projects.filter(project => project.category === activeFilter);

  const activeIndex = categories.indexOf(activeFilter);

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

          <div className="relative">
            <div aria-hidden="true" className="absolute bottom-0 left-6 top-0 w-px bg-gradient-to-b from-a1 via-a2/40 to-transparent md:left-1/2" />
            <ol className="space-y-12">
              {timeline.map((item, i) => {
                const right = i % 2 === 1;
                return (
                  <li key={item.company} className="relative md:grid md:grid-cols-2 md:gap-16">
                    {/* Node */}
                    <span className="absolute left-0 top-6 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-[#0b0b12] text-a2 shadow-[0_0_40px_-5px] shadow-a1/60 md:left-1/2 md:-translate-x-1/2">
                      {item.current && <span className="animate-ping-soft absolute inset-2 rounded-full bg-a1/40" />}
                      <Briefcase className="relative h-5 w-5" />
                    </span>

                    <Reveal
                      variant={right ? "right" : "left"}
                      className={cn("pl-20 md:pl-0", right ? "md:col-start-2" : "md:col-start-1 md:text-right")}
                    >
                      <div className="spotlight p-8 text-left">
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

          {/* Filter with sliding indicator */}
          <Reveal className="mb-12 flex justify-center">
            <div role="tablist" aria-label="Filter projects" className="glass relative inline-flex rounded-full p-1.5">
              <span
                aria-hidden="true"
                className="absolute bottom-1.5 top-1.5 rounded-full bg-white transition-transform duration-500 ease-[var(--ease)]"
                style={{ width: "7.5rem", transform: `translateX(${activeIndex * 7.5}rem)` }}
              />
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={activeFilter === category}
                  onClick={() => setActiveFilter(category)}
                  className={cn(
                    "relative z-10 w-[7.5rem] rounded-full py-2.5 text-sm font-semibold transition-colors duration-500",
                    activeFilter === category ? "text-black" : "text-muted hover:text-white"
                  )}
                >
                  {category}
                </button>
              ))}
            </div>
          </Reveal>

          <div key={activeFilter} className="grid gap-6 lg:grid-cols-2">
            {filteredProjects.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>

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
