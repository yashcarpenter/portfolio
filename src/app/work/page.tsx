import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import { ArrowUpRight } from "@/components/ui/Icons";
import ExperienceTimeline from "@/components/sections/work/ExperienceTimeline";
import Projects from "@/components/sections/work/Projects";
import { projectGroups, type ProjectKind } from "@/content/projects";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Work",
  description:
    "Professional experience at Volt Money and Groww, industry projects like Insurance Premium Financing and the PhonePe LAMF integration, and independent projects: a live grocery store management app and the Bargain Bell price tracker.",
  path: "/work",
});

function ProjectsSection({ kind, className }: { kind: ProjectKind; className?: string }) {
  const g = projectGroups[kind];
  return (
    <section id={`${kind}-projects`} className={className}>
      <div className="container-x">
        <SectionHeading eyebrow={g.eyebrow} title={g.title} accent={g.accent} description={g.description} />
        <Projects kind={kind} />
      </div>
    </section>
  );
}

export default function WorkPage() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio & experience"
        title="My work &"
        accent="professional journey"
        description="My professional experience, the systems I've delivered at work, and the products I've built and shipped on my own."
      />

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

      <ProjectsSection kind="industry" className="py-28 sm:py-36" />
      <ProjectsSection kind="independent" className="py-28 sm:py-36" />

      <div className="container-x pb-10 text-center">
        <Link href="/contact" data-magnetic="0.2" className="btn btn-primary">
          <span className="relative">Interested in working together?</span>
          <ArrowUpRight className="btn-arrow relative h-4 w-4" />
        </Link>
      </div>
    </>
  );
}
