import PageHero from "@/components/ui/PageHero";
import Story from "@/components/sections/about/Story";
import Values from "@/components/sections/about/Values";
import Education from "@/components/sections/about/Education";
import AboutCta from "@/components/sections/about/AboutCta";
import { experienceText } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "About",
  description: `The story behind Yash Carpenter: ${experienceText} building backend systems at Volt Money and Groww, values, and education at SGSITS Indore.`,
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About me"
        title="Get to know"
        accent="Yash Carpenter"
        description="Crafting enterprise-grade backend solutions that power millions of transactions. Specializing in microservices architecture, high-performance APIs, and scalable system design."
      />
      <Story />
      <Values />
      <Education />
      <AboutCta />
    </>
  );
}
