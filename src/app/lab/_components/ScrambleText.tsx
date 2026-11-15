"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { prefersReducedMotion } from "../../lib/utils";

const GLYPHS = "!<>-_\\/[]{}—=+*^?#01ABCDEFXYZ$%&";

interface ScrambleTextProps {
  text: string;
  className?: string;
  /** Start delay in ms. */
  delay?: number;
  /** Re-run the scramble on hover. */
  replayOnHover?: boolean;
}

/** Decodes text from random glyphs, left to right. */
export default function ScrambleText({ text, className, delay = 0, replayOnHover = true }: ScrambleTextProps) {
  const [out, setOut] = useState(text);
  const raf = useRef(0);

  const run = useCallback(() => {
    if (prefersReducedMotion()) return setOut(text);
    cancelAnimationFrame(raf.current);
    const start = performance.now();
    const perChar = 45;
    const settle = 380;
    const tick = (now: number) => {
      const t = now - start;
      let done = 0;
      const next = text
        .split("")
        .map((ch, i) => {
          if (ch === " ") {
            done++;
            return " ";
          }
          if (t > i * perChar + settle) {
            done++;
            return ch;
          }
          return t > i * perChar * 0.4 ? GLYPHS[Math.floor(Math.random() * GLYPHS.length)] : "\u00a0";
        })
        .join("");
      setOut(next);
      if (done < text.length) raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
  }, [text]);

  useEffect(() => {
    const t = setTimeout(run, delay);
    return () => {
      clearTimeout(t);
      cancelAnimationFrame(raf.current);
    };
  }, [run, delay]);

  return (
    <span className={className} aria-label={text} onMouseEnter={replayOnHover ? run : undefined}>
      <span aria-hidden="true">{out}</span>
    </span>
  );
}
