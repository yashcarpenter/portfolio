"use client";

import { Fragment, useEffect, useRef, useState } from "react";
import { prefersReducedMotion } from "../../lib/utils";
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
  className?: string;
}

/**
 * Decodes text left-to-right from random glyphs, once, when it scrolls into view.
 *
 * Layout never moves: each letter slot is sized by an invisible copy of its
 * final character, and the random glyph is absolutely positioned on top of it,
 * so a wide glyph (e.g. "W" over an "i") can't widen the slot, re-wrap the line
 * or push the content below. Words never break internally.
 */
export default function ScrambleText({ segments, delay = 0, className }: ScrambleTextProps) {
  const full = segments.map((s) => s.text).join(" ");
  const { ref, inView } = useInView<HTMLSpanElement>(0.2);
  const [glyphs, setGlyphs] = useState<string[] | null>(null); // null = not started (blank)
  const raf = useRef(0);

  useEffect(() => {
    if (!inView) return;
    if (prefersReducedMotion()) {
      setGlyphs(full.split(""));
      return;
    }
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
    };
    const timer = setTimeout(() => (raf.current = requestAnimationFrame(tick)), delay);
    return () => {
      clearTimeout(timer);
      cancelAnimationFrame(raf.current);
    };
  }, [inView, delay, full]);

  let index = 0;
  return (
    <span ref={ref} aria-hidden="true" className={className}>
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
                          {/* Fixed-size slot: always the width of the final letter */}
                          <span className="invisible [grid-area:1/1]">{ch}</span>
                          {/* Scrambling glyph sits in a zero-width, centred column, so it overflows the
                              slot instead of resizing it. No positioning: gradient (background-clip:text)
                              segments can't paint positioned descendants. */}
                          <span className="flex w-0 justify-center justify-self-center whitespace-pre [grid-area:1/1]">
                            {glyphs ? glyphs[base + c] : ""}
                          </span>
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
