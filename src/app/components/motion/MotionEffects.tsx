"use client";

import { useEffect, useRef } from "react";
import { hasFinePointer, prefersReducedMotion } from "../../lib/utils";

/** Damped spring state for one element's tilt / magnet values. */
interface SpringState {
  el: HTMLElement;
  kind: "tilt" | "magnet";
  // current values + velocities
  a: number;
  b: number;
  va: number;
  vb: number;
  // targets
  ta: number;
  tb: number;
}

// Low damping so motion overshoots slightly, then settles.
const STIFFNESS = 170;
const DAMPING = 14;

/**
 * Global, delegated pointer + scroll effects. Mounted once in the root layout.
 * - Scroll progress bar (all devices)
 * - Soft cursor glow, `.spotlight` highlight (mouse only)
 * - `[data-tilt]`: spring 3D tilt toward the cursor (mouse only)
 * - `[data-magnetic]`: spring drift toward the cursor (mouse only)
 */
export default function MotionEffects() {
  const progressRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduced = prefersReducedMotion();
    const fine = hasFinePointer();
    let scrollRaf = 0;

    // Scroll progress
    const onScroll = () => {
      cancelAnimationFrame(scrollRaf);
      scrollRaf = requestAnimationFrame(() => {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        const p = max > 0 ? window.scrollY / max : 0;
        if (progressRef.current) progressRef.current.style.transform = `scaleX(${p})`;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    if (!fine) {
      return () => {
        cancelAnimationFrame(scrollRaf);
        window.removeEventListener("scroll", onScroll);
        window.removeEventListener("resize", onScroll);
      };
    }

    // Spring simulation for tilt + magnet
    const springs = new Map<HTMLElement, SpringState>();
    let tiltEl: HTMLElement | null = null;
    let magnetEl: HTMLElement | null = null;
    let loopRaf = 0;
    let last = 0;

    const getSpring = (el: HTMLElement, kind: SpringState["kind"]) => {
      let s = springs.get(el);
      if (!s) {
        s = { el, kind, a: 0, b: 0, va: 0, vb: 0, ta: 0, tb: 0 };
        springs.set(el, s);
      }
      return s;
    };

    const apply = (s: SpringState) => {
      if (s.kind === "tilt") {
        s.el.style.setProperty("--rx", `${s.a.toFixed(2)}deg`);
        s.el.style.setProperty("--ry", `${s.b.toFixed(2)}deg`);
      } else {
        s.el.style.setProperty("--tx", `${s.a.toFixed(2)}px`);
        s.el.style.setProperty("--ty", `${s.b.toFixed(2)}px`);
      }
    };

    const loop = (now: number) => {
      const dt = Math.min(0.032, (now - (last || now)) / 1000);
      last = now;
      springs.forEach((s, el) => {
        s.va += ((s.ta - s.a) * STIFFNESS - s.va * DAMPING) * dt;
        s.vb += ((s.tb - s.b) * STIFFNESS - s.vb * DAMPING) * dt;
        s.a += s.va * dt;
        s.b += s.vb * dt;
        apply(s);
        const settled =
          s.ta === 0 && s.tb === 0 && Math.abs(s.a) < 0.01 && Math.abs(s.b) < 0.01 && Math.abs(s.va) < 0.01 && Math.abs(s.vb) < 0.01;
        if (settled) {
          s.a = s.b = 0;
          apply(s);
          springs.delete(el);
        }
      });
      loopRaf = springs.size ? requestAnimationFrame(loop) : 0;
      if (!loopRaf) last = 0;
    };
    const kick = () => {
      if (!loopRaf) loopRaf = requestAnimationFrame(loop);
    };

    const release = (el: HTMLElement | null, kind: SpringState["kind"]) => {
      if (!el) return;
      const s = getSpring(el, kind);
      s.ta = 0;
      s.tb = 0;
      if (kind === "magnet") el.classList.remove("is-magnetic");
      kick();
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
      if (tilt !== tiltEl) {
        release(tiltEl, "tilt");
        tiltEl = tilt;
      }
      if (tilt) {
        const r = tilt.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        const max = Number(tilt.dataset.tilt) || 6;
        const s = getSpring(tilt, "tilt");
        s.ta = -py * max;
        s.tb = px * max;
        kick();
      }

      const magnet = target?.closest<HTMLElement>("[data-magnetic]") ?? null;
      if (magnet !== magnetEl) {
        release(magnetEl, "magnet");
        magnetEl = magnet;
      }
      if (magnet) {
        const r = magnet.getBoundingClientRect();
        const strength = Number(magnet.dataset.magnetic) || 0.3;
        const s = getSpring(magnet, "magnet");
        s.ta = (e.clientX - (r.left + r.width / 2)) * strength;
        s.tb = (e.clientY - (r.top + r.height / 2)) * strength;
        magnet.classList.add("is-magnetic");
        kick();
      }
    };

    const onLeaveWindow = () => {
      release(tiltEl, "tilt");
      release(magnetEl, "magnet");
      tiltEl = magnetEl = null;
      if (glowRef.current) glowRef.current.style.opacity = "0";
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeaveWindow);

    return () => {
      cancelAnimationFrame(scrollRaf);
      cancelAnimationFrame(loopRaf);
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
