import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import SkillsMarquee from "@/components/sections/skills/SkillsMarquee";
import SkillsExplorer from "@/components/sections/skills/SkillsExplorer";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Skills",
  description:
    "Technical skills of Yash Carpenter: Java, Spring Boot, PostgreSQL, MySQL, Redis, Kafka, AWS (ECS, Lambda, RDS, S3), Docker, Kubernetes and CI/CD tooling.",
  path: "/skills",
});

export default function SkillsPage() {
  return (
    <>
      <PageHero
        eyebrow="Technical skills & expertise"
        title="Skills that"
        accent="drive innovation"
        description="A comprehensive showcase of my backend development expertise across Java, Spring Boot, databases, cloud technologies, and modern development tools that power scalable applications."
      />
      <SkillsMarquee />
      <section className="py-24 sm:py-32">
        <div className="container-x">
          <SectionHeading
            eyebrow="Explore"
            title="Technical"
            accent="skills."
            description="Click on different categories to explore my expertise across various domains."
          />
          <SkillsExplorer />
        </div>
      </section>
    </>
  );
}
