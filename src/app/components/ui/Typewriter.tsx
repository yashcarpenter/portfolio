"use client";

import { useEffect, useState } from "react";
import { prefersReducedMotion } from "../../lib/utils";

interface TypewriterProps {
  words: string[];
  className?: string;
}

/** Types and deletes each word in a loop. */
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
    <span className={className}>
      <span className="sr-only">{words.join(", ")}</span>
      <span aria-hidden="true">
        {text}
        <span className="animate-caret ml-0.5 inline-block w-[2px] translate-y-[2px] bg-a2" style={{ height: "1em" }} />
      </span>
    </span>
  );
}
