import type { ReactNode } from "react";
import Reveal from "../motion/Reveal";
import SplitText from "../motion/SplitText";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  accent: string;
  description: string;
  children?: ReactNode;
}

/** Shared hero for inner pages: eyebrow, split-text headline with accent line, intro copy. */
export default function PageHero({ eyebrow, title, accent, description, children }: PageHeroProps) {
  return (
    <section className="relative pb-16 pt-40 sm:pb-24 sm:pt-48">
      <div className="container-x">
        <Reveal>
          <span className="eyebrow">
            <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-a1 to-a2" />
            {eyebrow}
          </span>
        </Reveal>
        <SplitText
          as="h1"
          delay={100}
          breakAfter={[0]}
          className="mt-7 max-w-5xl text-[clamp(2.75rem,7vw,5.75rem)] font-semibold leading-[0.98] tracking-[-0.04em] text-white"
          text={[{ text: title }, { text: accent, className: "font-serif italic font-normal text-gradient pr-2" }]}
        />
        <Reveal delay={400}>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">{description}</p>
        </Reveal>
        {children}
      </div>
    </section>
  );
}
