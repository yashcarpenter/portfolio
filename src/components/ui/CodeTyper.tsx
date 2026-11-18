"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { cn, prefersReducedMotion } from "@/lib/utils";
import { useInView } from "@/components/motion/Reveal";

type Token = [className: string, text: string];

const LINES: Token[][] = [
  [["text-a3", "@RestController"]],
  [["text-a1", "public class "], ["text-white", "RepaymentController"], ["text-muted", " {"]],
  [],
  [["text-muted", "  "], ["text-a3", "@PostMapping"], ["text-muted", "("], ["text-emerald-300", "\"/repay\""], ["text-muted", ")"]],
  [["text-a1", "  public "], ["text-a2", "Mono"], ["text-muted", "<"], ["text-a2", "Receipt"], ["text-muted", "> "], ["text-white", "repay"], ["text-muted", "(...) {"]],
  [["text-a1", "    return "], ["text-white", "lending"], ["text-muted", "."], ["text-a2", "process"], ["text-muted", "(req)"]],
  [["text-muted", "      ."], ["text-a2", "cache"], ["text-muted", "("], ["text-white", "redis"], ["text-muted", ")"]],
  [["text-muted", "      ."], ["text-a2", "publish"], ["text-muted", "("], ["text-white", "kafka"], ["text-muted", ");"]],
  [["text-muted", "  }"]],
  [["text-muted", "}"]],
];

const TOTAL = LINES.reduce((n, l) => n + l.reduce((m, [, t]) => m + t.length, 0) + 1, 0);

/** Editor card whose code types itself, then "sends" a request and shows the response. */
export default function CodeTyper({ className }: { className?: string }) {
  const [chars, setChars] = useState(0);
  const [phase, setPhase] = useState<"typing" | "sending" | "done">("typing");
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const start = useCallback(() => {
    if (timer.current) clearTimeout(timer.current);
    if (prefersReducedMotion()) {
      setChars(TOTAL);
      setPhase("done");
      return;
    }
    setChars(0);
    setPhase("typing");
    let n = 0;
    const step = () => {
      n += 1 + Math.floor(Math.random() * 2);
      setChars(Math.min(n, TOTAL));
      if (n < TOTAL) {
        timer.current = setTimeout(step, 18 + Math.random() * 30);
      } else {
        setPhase("sending");
        timer.current = setTimeout(() => setPhase("done"), 900);
      }
    };
    timer.current = setTimeout(step, 500);
  }, []);

  // Start typing only once the card is on screen (on phones it sits below the fold).
  const { ref, inView } = useInView<HTMLDivElement>(0.35);
  useEffect(() => {
    if (inView) start();
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, [inView, start]);

  // Render tokens up to `chars` characters.
  let remaining = chars;
  let caretLine = -1;
  const rendered = LINES.map((line, i) => {
    const lineLen = line.reduce((m, [, t]) => m + t.length, 0);
    if (caretLine === -1 && remaining <= lineLen) caretLine = i;
    let budget = Math.max(0, Math.min(remaining, lineLen));
    const parts: Token[] = [];
    for (const [cls, txt] of line) {
      if (budget <= 0) break;
      parts.push([cls, txt.slice(0, budget)]);
      budget -= txt.length;
    }
    remaining -= lineLen + 1; // +1 for the newline
    return parts;
  });

  return (
    <div ref={ref} className={cn("ring-conic rounded-[1.5rem] p-px shadow-[0_40px_120px_-30px_rgba(124,92,255,0.55)]", className)}>
      <div className="overflow-hidden rounded-[1.45rem] bg-[#0b0b12]/95 backdrop-blur-xl">
        <div className="flex items-center gap-2 border-b border-white/[0.06] px-5 py-4">
          <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
          <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
          <span className="h-3 w-3 rounded-full bg-[#28c840]" />
          <span className="ml-3 font-mono text-xs text-subtle">RepaymentController.java</span>
          <button type="button" onClick={start} className="ml-auto rounded-full border border-white/10 px-3 py-1 font-mono text-[11px] text-muted transition-colors hover:border-white/30 hover:text-white">
            replay
          </button>
        </div>
        <pre className="min-h-[280px] overflow-x-auto px-4 py-5 font-mono text-[11.5px] leading-7 sm:min-h-[300px] sm:px-5 sm:text-[13px]" aria-label="Java code sample">
          <code>
            {rendered.map((parts, i) => (
              <div key={i} className="flex">
                <span className="mr-5 w-4 select-none text-right text-white/20">{i + 1}</span>
                <span>
                  {parts.map(([cls, txt], j) => (
                    <span key={j} className={cls}>
                      {txt}
                    </span>
                  ))}
                  {phase === "typing" && i === caretLine && (
                    <span className="animate-caret ml-px inline-block h-4 w-[7px] translate-y-[3px] bg-a2" />
                  )}
                </span>
              </div>
            ))}
          </code>
        </pre>
        <div className="flex items-center gap-3 border-t border-white/[0.06] px-5 py-3 font-mono text-[11px]">
          <span className="text-subtle">POST /repay</span>
          <span className="relative h-px flex-1 overflow-hidden bg-white/10">
            {phase === "sending" && <span className="absolute inset-y-0 left-0 w-1/3 animate-[code-packet_0.9s_ease-in-out] bg-gradient-to-r from-transparent via-a2 to-transparent" />}
            {phase === "done" && <span className="absolute inset-0 bg-emerald-400/50" />}
          </span>
          <span
            className={cn(
              "flex items-center gap-2 transition-all duration-500",
              phase === "done" ? "translate-y-0 text-emerald-300 opacity-100" : "translate-y-2 opacity-0"
            )}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> 200 OK · 38ms
          </span>
        </div>
      </div>
    </div>
  );
}
