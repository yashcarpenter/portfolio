"use client";

import { Fragment, useCallback, useEffect, useRef, useState } from "react";
import { hasFinePointer, prefersReducedMotion } from "../../lib/utils";
import { useInView } from "./Reveal";

const GLYPHS = "!<>-_/[]{}=+*^?#01ABCDEFXYZ$%&";

export interface ScrambleSegment {
  text: string;
  className?: string;
}

interface ScrambleTextProps {
  segments: ScrambleSegment[];
  /** Delay (ms) after the text scrolls into view. */
  delay?: number;
  /** Re-decode on mouse hover (desktop only). */
  replayOnHover?: boolean;
  className?: string;
}

/**
 * Decodes text left-to-right from random glyphs once it scrolls into view.
 * Every character keeps the width of its final glyph (a hidden copy sits in the
 * same grid cell), so lines never reflow mid-animation on narrow phone screens.
 * Words never break internally; lines wrap only between words.
 */
export default function ScrambleText({ segments, delay = 0, replayOnHover = true, className }: ScrambleTextProps) {
  const full = segments.map((s) => s.text).join(" ");
  const { ref, inView } = useInView<HTMLSpanElement>(0.2);
  const [glyphs, setGlyphs] = useState<string[] | null>(null); // null = not started (blank)
  const raf = useRef(0);
  const running = useRef(false);

  const run = useCallback(() => {
    if (prefersReducedMotion()) {
      setGlyphs(full.split(""));
      return;
    }
    cancelAnimationFrame(raf.current);
    running.current = true;
    const chars = full.split("");
    const perChar = Math.max(18, Math.min(40, 900 / chars.length)); // long headings decode a bit faster
    const settle = 350;
    let start = 0;
    const tick = (now: number) => {
      if (!start) start = now;
      const t = now - start;
      let done = 0;
      const next = chars.map((ch, i) => {
        if (ch === " " || t > i * perChar + settle) {
          done++;
          return ch;
        }
        return t > i * perChar * 0.4 ? GLYPHS[Math.floor(Math.random() * GLYPHS.length)] : "";
      });
      setGlyphs(next);
      if (done < chars.length) raf.current = requestAnimationFrame(tick);
      else running.current = false;
    };
    raf.current = requestAnimationFrame(tick);
  }, [full]);

  useEffect(() => {
    if (!inView) return;
    const timer = setTimeout(run, delay);
    return () => {
      clearTimeout(timer);
      cancelAnimationFrame(raf.current);
    };
  }, [inView, delay, run]);

  const onEnter = () => {
    if (replayOnHover && !running.current && glyphs && hasFinePointer()) run();
  };

  let index = 0;
  return (
    <span ref={ref} aria-hidden="true" className={className} onMouseEnter={onEnter}>
      {segments.map((seg, s) => {
        const words = seg.text.split(" ");
        return (
          <Fragment key={s}>
            {s > 0 && " "}
            <span className={seg.className}>
              {words.map((word, w) => {
                const base = index;
                index += word.length + 1;
                return (
                  <Fragment key={w}>
                    {w > 0 && " "}
                    <span className="whitespace-nowrap">
                      {word.split("").map((ch, c) => (
                        <span key={c} className="inline-grid">
                          <span className="invisible [grid-area:1/1]">{ch}</span>
                          <span className="text-center [grid-area:1/1]">{glyphs ? glyphs[base + c] : ""}</span>
                        </span>
                      ))}
                    </span>
                  </Fragment>
                );
              })}
            </span>
          </Fragment>
        );
      })}
    </span>
  );
}
