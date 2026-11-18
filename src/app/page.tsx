import type { Metadata } from "next";
import Hero from "@/components/sections/home/Hero";
import TechMarquee from "@/components/sections/home/TechMarquee";
import Services from "@/components/sections/home/Services";
import HomeCta from "@/components/sections/home/HomeCta";
import { site } from "@/content/site";

export const metadata: Metadata = {
  // Home uses the layout's default title ("Yash Carpenter · Backend Developer").
  alternates: { canonical: "/" },
  description: site.description,
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <TechMarquee />
      <Services />
      <HomeCta />
    </>
  );
}
