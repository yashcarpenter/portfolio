"use client";

import { useEffect, useRef } from "react";
import { hasFinePointer, prefersReducedMotion } from "../../lib/utils";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  hub: boolean;
}

const LINK = 130; // max link distance (px)
const PUSH = 140; // cursor / finger repulsion radius (px)

/**
 * Site-wide "microservice network" background: drifting nodes linked when close,
 * pushed away by the cursor (desktop) or finger (mobile), with pink packets
 * travelling between hub nodes.
 *
 * Mobile-friendly: fewer nodes, 30fps, pauses when the tab is hidden, and the
 * address bar showing/hiding doesn't respawn the field.
 */
export default function NodeField({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const reduced = prefersReducedMotion();
    const fine = hasFinePointer();
    const dpr = Math.min(window.devicePixelRatio || 1, fine ? 2 : 1.5);
    const frameInterval = fine ? 0 : 1000 / 30;

    let w = 0;
    let h = 0;
    let nodes: Node[] = [];
    const pointer = { x: -9999, y: -9999 };
    const packets: Array<{ a: number; b: number; t: number }> = [];

    const spawn = () => {
      const count = Math.round(Math.min(fine ? 140 : 56, Math.max(30, (w * h) / (fine ? 9000 : 6000))));
      nodes = Array.from({ length: count }, () => {
        const hub = Math.random() < 0.12;
        return {
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.35,
          vy: (Math.random() - 0.5) * 0.35,
          r: hub ? 2.6 : 1.5,
          hub,
        };
      });
      packets.length = 0;
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const widthChanged = Math.abs(rect.width - w) > 1;
      w = rect.width;
      h = rect.height;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      // Height-only changes (mobile address bar) keep the existing nodes.
      if (widthChanged || !nodes.length) spawn();
      else nodes.forEach((n) => (n.y = Math.min(n.y, h)));
    };

    const setPointer = (x: number, y: number) => {
      const rect = canvas.getBoundingClientRect();
      pointer.x = x - rect.left;
      pointer.y = y - rect.top;
    };
    const clearPointer = () => {
      pointer.x = pointer.y = -9999;
    };
    const onPointerMove = (e: PointerEvent) => e.pointerType === "mouse" && setPointer(e.clientX, e.clientY);
    const onTouch = (e: TouchEvent) => {
      const t = e.touches[0];
      if (t) setPointer(t.clientX, t.clientY);
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);

      if (!reduced) {
        for (const n of nodes) {
          const dx = n.x - pointer.x;
          const dy = n.y - pointer.y;
          const d = Math.hypot(dx, dy);
          if (d < PUSH) {
            const f = (1 - d / PUSH) * 0.6;
            n.vx += (dx / (d + 0.01)) * f;
            n.vy += (dy / (d + 0.01)) * f;
          }
          n.vx = n.vx * 0.96 + (Math.random() - 0.5) * 0.02;
          n.vy = n.vy * 0.96 + (Math.random() - 0.5) * 0.02;
          n.x += n.vx;
          n.y += n.vy;
          if (n.x < 0 || n.x > w) n.vx *= -1;
          if (n.y < 0 || n.y > h) n.vy *= -1;
          n.x = Math.max(0, Math.min(w, n.x));
          n.y = Math.max(0, Math.min(h, n.y));
        }
      }

      // Links (cyan near the pointer, violet elsewhere)
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d >= LINK) continue;
          const near = Math.hypot((a.x + b.x) / 2 - pointer.x, (a.y + b.y) / 2 - pointer.y) < 180;
          ctx.strokeStyle = near ? `rgba(34,211,238,${0.45 * (1 - d / LINK)})` : `rgba(124,92,255,${0.15 * (1 - d / LINK)})`;
          ctx.lineWidth = near ? 0.9 : 0.6;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
          if (!reduced && a.hub && Math.random() < 0.002 && packets.length < 25) packets.push({ a: i, b: j, t: 0 });
        }
      }

      // Packets travelling along links
      ctx.fillStyle = "rgba(244,114,182,0.6)";
      ctx.shadowColor = "#f472b6";
      ctx.shadowBlur = 6;
      for (let k = packets.length - 1; k >= 0; k--) {
        const p = packets[k];
        p.t += fine ? 0.02 : 0.04;
        const a = nodes[p.a];
        const b = nodes[p.b];
        if (!a || !b || p.t >= 1) {
          packets.splice(k, 1);
          continue;
        }
        ctx.beginPath();
        ctx.arc(a.x + (b.x - a.x) * p.t, a.y + (b.y - a.y) * p.t, 1.8, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.shadowBlur = 0;

      // Nodes
      for (const n of nodes) {
        ctx.fillStyle = n.hub ? "rgba(34,211,238,0.8)" : "rgba(255,255,255,0.5)";
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    let raf = 0;
    let last = 0;
    const loop = (now: number) => {
      raf = requestAnimationFrame(loop);
      if (now - last < frameInterval) return;
      last = now;
      draw();
    };
    const start = () => {
      if (!raf) raf = requestAnimationFrame(loop);
    };
    const stop = () => {
      cancelAnimationFrame(raf);
      raf = 0;
    };
    const onVisibility = () => (document.hidden ? stop() : start());

    resize();
    if (reduced) draw();
    else start();

    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("touchstart", onTouch, { passive: true });
    window.addEventListener("touchmove", onTouch, { passive: true });
    window.addEventListener("touchend", clearPointer, { passive: true });
    document.documentElement.addEventListener("pointerleave", clearPointer);
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      stop();
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("touchstart", onTouch);
      window.removeEventListener("touchmove", onTouch);
      window.removeEventListener("touchend", clearPointer);
      document.documentElement.removeEventListener("pointerleave", clearPointer);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden="true" className={className} />;
}
