"use client";

import { useLayoutEffect, type CSSProperties } from "react";
import { cn } from "../../lib/utils";
import { useInView } from "./Reveal";

interface LineRevealProps {
  text: string;
  className?: string;
  /** Words (punctuation ignored) to render highlighted in white. */
  highlight?: string[];
  delay?: number;
}

/**
 * Paragraph that slides up one visual line at a time. Lines are measured on
 * mount and resize, so it adapts to whatever width the phone or desktop gives it.
 */
export default function LineReveal({ text, className, highlight = [], delay = 0 }: LineRevealProps) {
  const { ref, inView } = useInView<HTMLParagraphElement>(0.2);
  const words = text.split(" ");
  const marked = new Set(highlight);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const measure = () => {
      let line = -1;
      let lastTop = -Infinity;
      el.querySelectorAll<HTMLElement>(".line-word").forEach((w) => {
        if (w.offsetTop > lastTop + 2) {
          line++;
          lastTop = w.offsetTop;
        }
        w.style.setProperty("--line", String(line));
      });
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [ref, text]);

  return (
    <p
      ref={ref}
      className={cn("line-reveal", inView && "is-in", className)}
      style={{ "--d": `${delay}ms` } as CSSProperties}
    >
      <span className="sr-only">{text}</span>
      {words.map((w, i) => (
        <span key={i} aria-hidden="true">
          <span className="line-word">
            <span className={marked.has(w.replace(/[^\w]/g, "")) ? "text-white" : undefined}>{w}</span>
          </span>{" "}
        </span>
      ))}
    </p>
  );
}
