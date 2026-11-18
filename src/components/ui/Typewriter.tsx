"use client";

import { useEffect, useState } from "react";
import { cn, prefersReducedMotion } from "@/lib/utils";

interface TypewriterProps {
  words: string[];
  className?: string;
}

const Caret = () => (
  <span className="animate-caret ml-0.5 inline-block w-[2px] translate-y-[2px] bg-a2" style={{ height: "1em" }} />
);

/**
 * Types and deletes each word in a loop.
 *
 * Layout never moves: all words are stacked invisibly in one grid cell, so the
 * box is always as wide as the longest word. On narrow phones it wraps to its
 * own line once and stays there, instead of re-wrapping with every letter.
 */
export default function Typewriter({ words, className }: TypewriterProps) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion()) {
      setText(words[0]);
      return;
    }
    const word = words[index % words.length];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && text === word) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && text === "") {
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
    } else {
      timeout = setTimeout(
        () => setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1)),
        deleting ? 35 : 70
      );
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, index, words]);

  return (
    <span className={cn("inline-grid align-bottom", className)}>
      <span className="sr-only">{words.join(", ")}</span>
      {/* Invisible sizers: the cell takes the width of the longest word */}
      {words.map((w) => (
        <span key={w} aria-hidden="true" className="invisible whitespace-nowrap [grid-area:1/1]">
          {w}
          <Caret />
        </span>
      ))}
      {/* Visible typed text, left-aligned in the reserved space */}
      <span aria-hidden="true" className="whitespace-nowrap [grid-area:1/1]">
        {text}
        <Caret />
      </span>
    </span>
  );
}
