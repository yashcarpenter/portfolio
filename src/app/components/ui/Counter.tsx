"use client";

import { useEffect, useState } from "react";
import { useInView } from "../motion/Reveal";
import { prefersReducedMotion } from "../../lib/utils";

interface CounterProps {
  value: number;
  suffix?: string;
  duration?: number;
  className?: string;
}

/** Counts up from 0 to `value` once it scrolls into view. */
export default function Counter({ value, suffix = "", duration = 1800, className }: CounterProps) {
  const { ref, inView } = useInView<HTMLSpanElement>(0.4);
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (prefersReducedMotion()) {
      setN(value);
      return;
    }
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 4);
      setN(Math.round(value * eased));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, duration]);

  return (
    <span ref={ref} className={className} aria-label={`${value}${suffix}`}>
      <span aria-hidden="true">
        {n}
        {suffix}
      </span>
    </span>
  );
}
