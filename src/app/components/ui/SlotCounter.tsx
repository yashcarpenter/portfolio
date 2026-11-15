"use client";

import { motion, useReducedMotion } from "motion/react";
import { useInView } from "../motion/Reveal";
import { cn } from "../../lib/utils";

function SlotDigit({ digit, delay, reduced }: { digit: number; delay: number; reduced: boolean }) {
  return (
    <span className="relative inline-block h-[1em] overflow-hidden leading-none">
      {/* Hidden copy of the final digit gives the reel its natural width */}
      <span className="invisible">{digit}</span>
      <motion.span
        className="absolute inset-x-0 top-0 flex flex-col items-center"
        initial={{ y: "0em" }}
        animate={{ y: `-${digit + (reduced ? 0 : 20)}em` }}
        transition={reduced ? { duration: 0 } : { duration: 1.8, delay, ease: [0.16, 1, 0.3, 1] }}
      >
        {Array.from({ length: 30 }, (_, i) => (
          <span key={i} className="h-[1em] leading-none">
            {i % 10}
          </span>
        ))}
      </motion.span>
    </span>
  );
}

interface SlotCounterProps {
  value: number;
  suffix?: string;
  className?: string;
}

/** Each digit spins like a slot-machine reel and lands on its value when scrolled into view. */
export default function SlotCounter({ value, suffix = "", className }: SlotCounterProps) {
  const { ref, inView } = useInView<HTMLSpanElement>(0.4);
  const reduced = !!useReducedMotion();
  const digits = String(value).split("").map(Number);

  return (
    <span ref={ref} className={cn("inline-flex items-baseline tabular-nums", className)} aria-label={`${value}${suffix}`}>
      <span aria-hidden="true" className="inline-flex">
        {inView ? (
          digits.map((d, i) => <SlotDigit key={i} digit={d} delay={i * 0.12} reduced={reduced} />)
        ) : (
          <span className="invisible">{value}</span>
        )}
      </span>
      <span aria-hidden="true">{suffix}</span>
    </span>
  );
}
