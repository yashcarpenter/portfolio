"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import { hasFinePointer, prefersReducedMotion } from "@/lib/utils";

let instance: Lenis | null = null;

/** The active Lenis instance (desktop only), or null on touch / reduced motion. */
export function getLenis() {
  return instance;
}

/** Scroll to top immediately, going through Lenis when it is active. */
export function scrollToTopNow() {
  if (instance) instance.scrollTo(0, { immediate: true, force: true });
  else window.scrollTo(0, 0);
}

/** Lock/unlock page scrolling (e.g. while a modal is open). */
export function setScrollLocked(locked: boolean) {
  document.documentElement.style.overflow = locked ? "hidden" : "";
  if (instance) {
    if (locked) instance.stop();
    else instance.start();
  }
}

/**
 * Smooth, weighted wheel scrolling on desktop only. Phones and tablets keep
 * native scrolling, which is what touch users expect.
 */
export default function SmoothScroll() {
  useEffect(() => {
    if (!hasFinePointer() || prefersReducedMotion()) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      anchors: true,
    });
    instance = lenis;

    let raf = 0;
    const loop = (time: number) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
      instance = null;
    };
  }, []);

  return null;
}
