"use client";

import { useEffect, useRef } from "react";
import { hasFinePointer, prefersReducedMotion } from "../../lib/utils";

/**
 * Global, delegated pointer + scroll effects. Mounted once in the root layout.
 * - Scroll progress bar
 * - Soft cursor glow
 * - `.spotlight` cards: sets --mx / --my for the radial highlight
 * - `[data-tilt]`: 3D tilt toward the cursor
 * - `[data-magnetic]`: element drifts toward the cursor
 */
export default function MotionEffects() {
  const progressRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduced = prefersReducedMotion();
    const fine = hasFinePointer();
    let raf = 0;

    // Scroll progress
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        const p = max > 0 ? window.scrollY / max : 0;
        if (progressRef.current) progressRef.current.style.transform = `scaleX(${p})`;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    // Pointer effects
    let tiltEl: HTMLElement | null = null;
    let magnetEl: HTMLElement | null = null;

    const resetTilt = () => {
      if (!tiltEl) return;
      tiltEl.style.setProperty("--rx", "0deg");
      tiltEl.style.setProperty("--ry", "0deg");
      tiltEl.style.transition = "transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)";
      tiltEl = null;
    };
    const resetMagnet = () => {
      if (!magnetEl) return;
      magnetEl.classList.remove("is-magnetic");
      magnetEl.style.setProperty("--tx", "0px");
      magnetEl.style.setProperty("--ty", "0px");
      magnetEl = null;
    };

    const onPointerMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      const target = e.target as Element | null;

      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
        glowRef.current.style.opacity = "1";
      }

      const spot = target?.closest<HTMLElement>(".spotlight");
      if (spot) {
        const r = spot.getBoundingClientRect();
        spot.style.setProperty("--mx", `${e.clientX - r.left}px`);
        spot.style.setProperty("--my", `${e.clientY - r.top}px`);
      }

      if (reduced) return;

      const tilt = target?.closest<HTMLElement>("[data-tilt]") ?? null;
      if (tilt !== tiltEl) resetTilt();
      if (tilt) {
        tiltEl = tilt;
        const r = tilt.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        const max = Number(tilt.dataset.tilt) || 6;
        tilt.style.transition = "transform 0.15s linear";
        tilt.style.setProperty("--rx", `${(-py * max).toFixed(2)}deg`);
        tilt.style.setProperty("--ry", `${(px * max).toFixed(2)}deg`);
      }

      const magnet = target?.closest<HTMLElement>("[data-magnetic]") ?? null;
      if (magnet !== magnetEl) resetMagnet();
      if (magnet) {
        magnetEl = magnet;
        const r = magnet.getBoundingClientRect();
        const strength = Number(magnet.dataset.magnetic) || 0.3;
        const dx = (e.clientX - (r.left + r.width / 2)) * strength;
        const dy = (e.clientY - (r.top + r.height / 2)) * strength;
        magnet.classList.add("is-magnetic");
        magnet.style.setProperty("--tx", `${dx.toFixed(1)}px`);
        magnet.style.setProperty("--ty", `${dy.toFixed(1)}px`);
      }
    };

    const onLeaveWindow = () => {
      resetTilt();
      resetMagnet();
      if (glowRef.current) glowRef.current.style.opacity = "0";
    };

    if (fine) {
      window.addEventListener("pointermove", onPointerMove, { passive: true });
      document.documentElement.addEventListener("pointerleave", onLeaveWindow);
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.removeEventListener("pointermove", onPointerMove);
      document.documentElement.removeEventListener("pointerleave", onLeaveWindow);
    };
  }, []);

  return (
    <>
      <div
        ref={progressRef}
        aria-hidden="true"
        className="fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-gradient-to-r from-a1 via-a2 to-a3"
        style={{ transform: "scaleX(0)" }}
      />
      <div
        ref={glowRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-0 -ml-[300px] -mt-[300px] h-[600px] w-[600px] rounded-full opacity-0 transition-opacity duration-700"
        style={{
          background: "radial-gradient(circle, rgba(124,92,255,0.10), rgba(34,211,238,0.05) 35%, transparent 65%)",
        }}
      />
    </>
  );
}
