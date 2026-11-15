import type { CSSProperties, ReactNode } from "react";
import { cn } from "../../lib/utils";

interface MarqueeProps {
  children: ReactNode;
  reverse?: boolean;
  /** Seconds per loop. */
  duration?: number;
  className?: string;
}

/** Infinite horizontal scroller. Content is duplicated for a seamless loop. */
export default function Marquee({ children, reverse, duration = 40, className }: MarqueeProps) {
  return (
    <div
      className={cn("marquee", className)}
      data-reverse={reverse ? "" : undefined}
      style={{ "--marquee-duration": `${duration}s` } as CSSProperties}
    >
      <div className="marquee-track">{children}</div>
      <div className="marquee-track" aria-hidden="true">
        {children}
      </div>
    </div>
  );
}
