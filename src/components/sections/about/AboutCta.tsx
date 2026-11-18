import Link from "next/link";
import Reveal from "@/components/motion/Reveal";
import ScrambleText from "@/components/motion/ScrambleText";
import { ArrowRight, ArrowUpRight } from "@/components/ui/Icons";

export default function AboutCta() {
  return (
    <section className="pb-10">
      <div className="container-x">
        <Reveal className="spotlight flex flex-col items-start justify-between gap-8 p-10 sm:p-14 md:flex-row md:items-center">
          <div>
            <h2 aria-label="Ready to work together?" className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              <ScrambleText
                segments={[
                  { text: "Ready to work" },
                  { text: "together?", className: "font-serif font-normal italic text-gradient" },
                ]}
              />
            </h2>
            <p className="mt-3 max-w-xl text-muted">
              I&apos;m always excited to take on new challenges and collaborate on interesting projects. Let&apos;s discuss how we
              can bring your ideas to life.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href="/work" data-magnetic="0.2" className="btn btn-ghost">
              View my work <ArrowRight className="btn-arrow h-4 w-4" />
            </Link>
            <Link href="/contact" data-magnetic="0.2" className="btn btn-primary">
              <span className="relative">Get in touch</span>
              <ArrowUpRight className="btn-arrow relative h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
