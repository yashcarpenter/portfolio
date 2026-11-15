"use client";

import { createElement, Fragment } from "react";
import { cn } from "../../lib/utils";
import { useInView } from "./Reveal";

export interface SplitSegment {
  text: string;
  className?: string;
}

interface SplitTextProps {
  /** Plain text, or segments so parts of the line can be styled (e.g. gradient). */
  text: string | SplitSegment[];
  as?: keyof React.JSX.IntrinsicElements;
  className?: string;
  /** Base delay in ms. */
  delay?: number;
  /** Delay between words in ms. */
  stagger?: number;
  /** Insert a line break after the segment at these indexes. */
  breakAfter?: number[];
}

/** Headline that reveals word-by-word with a masked slide-up. */
export default function SplitText({
  text,
  as = "h1",
  className,
  delay = 0,
  stagger = 70,
  breakAfter = [],
}: SplitTextProps) {
  const { ref, inView } = useInView<HTMLElement>(0.2);
  const segments: SplitSegment[] = typeof text === "string" ? [{ text }] : text;
  const label = segments.map((s) => s.text).join(" ");

  let wordIndex = 0;
  const content = segments.map((segment, sIdx) => {
    const words = segment.text.split(" ").filter(Boolean);
    return (
      <Fragment key={sIdx}>
        {words.map((word, wIdx) => {
          const d = delay + wordIndex++ * stagger;
          return (
            <Fragment key={wIdx}>
              <span className="split-word" aria-hidden="true">
                <span className={segment.className} style={{ "--d": `${d}ms` } as React.CSSProperties}>
                  {word}
                </span>
              </span>{" "}
            </Fragment>
          );
        })}
        {breakAfter.includes(sIdx) && <br />}
      </Fragment>
    );
  });

  return createElement(
    as,
    { ref, className: cn(inView && "is-in", className), "aria-label": label },
    content
  );
}
