import Link from "next/link";
import Reveal from "@/components/motion/Reveal";
import ScrambleText from "@/components/motion/ScrambleText";
import { ArrowRight, ArrowUpRight } from "@/components/ui/Icons";

/** Closing call-to-action panel on the home page. */
export default function HomeCta() {
  return (
    <section className="pb-10">
      <div className="container-x">
        <Reveal variant="scale">
          <div className="ring-conic rounded-[2rem] p-px">
            <div className="relative overflow-hidden rounded-[calc(2rem-1px)] bg-[#0a0a11] px-6 py-20 text-center sm:px-16 sm:py-28">
              <div aria-hidden="true" className="pointer-events-none absolute -top-32 left-1/2 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-a1/30 blur-[100px]" />
              <div aria-hidden="true" className="bg-grid pointer-events-none absolute inset-0 opacity-60" />
              <div className="relative">
                <h2
                  aria-label="Ready to build something amazing?"
                  className="mx-auto max-w-3xl text-[2.1rem] font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl"
                >
                  <ScrambleText
                    segments={[
                      { text: "Ready to build something" },
                      { text: "amazing?", className: "font-serif font-normal italic text-gradient" },
                    ]}
                  />
                </h2>
                <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted">
                  Let&apos;s discuss your project and explore how we can work together to bring your ideas to life.
                </p>
                <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
                  <Link href="/contact" data-magnetic="0.2" className="btn btn-primary">
                    <span className="relative">Get in touch</span>
                    <ArrowUpRight className="btn-arrow relative h-4 w-4" />
                  </Link>
                  <Link href="/work" data-magnetic="0.2" className="btn btn-ghost">
                    View my work <ArrowRight className="btn-arrow h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
