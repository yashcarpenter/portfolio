import Reveal from "../motion/Reveal";
import ScrambleText from "../motion/ScrambleText";
import { cn } from "../../lib/utils";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  /** Word(s) at the end of the title rendered in the serif-italic gradient accent. */
  accent?: string;
  description?: string;
  align?: "center" | "left";
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  accent,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  const centered = align === "center";
  return (
    <div className={cn("mb-14 sm:mb-20", centered && "mx-auto max-w-3xl text-center", className)}>
      <Reveal>
        <span className="eyebrow">
          <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-a1 to-a2" />
          {eyebrow}
        </span>
      </Reveal>
      <h2
        aria-label={accent ? `${title} ${accent}` : title}
        className="mt-5 text-[2.1rem] font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl"
      >
        <ScrambleText
          delay={100}
          segments={[
            { text: title },
            ...(accent ? [{ text: accent, className: "font-serif italic font-normal text-gradient pr-1" }] : []),
          ]}
        />
      </h2>
      {description && (
        <Reveal delay={250}>
          <p className={cn("mt-5 text-lg leading-relaxed text-muted", centered && "mx-auto max-w-2xl")}>
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
