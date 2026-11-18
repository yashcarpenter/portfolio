"use client";

import { createElement, useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "up" | "left" | "right" | "scale" | "fade";

interface RevealProps {
  children: ReactNode;
  as?: keyof React.JSX.IntrinsicElements;
  variant?: Variant;
  /** Delay in ms before the transition starts. */
  delay?: number;
  className?: string;
  style?: CSSProperties;
  /** Fraction of the element that must be visible before revealing. */
  threshold?: number;
}

/** Hook: returns a ref and whether the element has entered the viewport (once). */
export function useInView<T extends Element>(threshold = 0.15) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin: "0px 0px -8% 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

/** Fades/slides/unblurs its children into view when scrolled to. */
export default function Reveal({
  children,
  as = "div",
  variant = "up",
  delay = 0,
  className,
  style,
  threshold,
}: RevealProps) {
  const { ref, inView } = useInView<HTMLElement>(threshold);

  return createElement(
    as,
    {
      ref,
      "data-variant": variant,
      className: cn("reveal", inView && "is-in", className),
      style: { "--d": `${delay}ms`, ...style } as CSSProperties,
    },
    children
  );
}
