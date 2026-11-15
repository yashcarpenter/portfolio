"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import { hasFinePointer, prefersReducedMotion } from "../../lib/utils";

type Mode = "default" | "link" | "label" | "text";

/**
 * Dot + trailing ring cursor. Mounted on a page, it hides the native cursor
 * until unmount. Reacts to:
 *  - a, button, [data-cursor="link"]  -> ring grows
 *  - [data-cursor-label="View"]       -> ring fills and shows the label
 *  - input, textarea                  -> thin text caret
 */
export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [mode, setMode] = useState<Mode>("default");
  const [label, setLabel] = useState("");
  const [down, setDown] = useState(false);
  const [visible, setVisible] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 380, damping: 32, mass: 0.6 });
  const ringY = useSpring(y, { stiffness: 380, damping: 32, mass: 0.6 });

  useEffect(() => {
    if (!hasFinePointer() || prefersReducedMotion()) return;
    setEnabled(true);
    document.documentElement.classList.add("has-custom-cursor");

    const detect = (t: Element | null) => {
      const labelled = t?.closest<HTMLElement>("[data-cursor-label]");
      if (labelled) {
        setMode("label");
        setLabel(labelled.dataset.cursorLabel ?? "");
      } else if (t?.closest("input, textarea, [contenteditable]")) {
        setMode("text");
      } else if (t?.closest("a, button, [data-cursor='link']")) {
        setMode("link");
      } else {
        setMode("default");
      }
    };
    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);
      detect(e.target as Element | null);
    };
    const onDown = () => setDown(true);
    // Clicks often swap what's under the pointer (modals, route changes) without a move: re-check.
    const onUp = (e: PointerEvent) => {
      setDown(false);
      setTimeout(() => detect(document.elementFromPoint(e.clientX, e.clientY)), 450);
    };
    const onLeave = () => setVisible(false);

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerdown", onDown);
    window.addEventListener("pointerup", onUp);
    document.documentElement.addEventListener("pointerleave", onLeave);
    return () => {
      document.documentElement.classList.remove("has-custom-cursor");
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
      document.documentElement.removeEventListener("pointerleave", onLeave);
    };
  }, [x, y]);

  if (!enabled) return null;

  const ring = {
    default: { width: 36, height: 36, borderRadius: 999, backgroundColor: "rgba(255,255,255,0)", borderColor: "rgba(255,255,255,0.5)" },
    link: { width: 64, height: 64, borderRadius: 999, backgroundColor: "rgba(124,92,255,0.15)", borderColor: "rgba(124,92,255,0.9)" },
    label: { width: 96, height: 96, borderRadius: 999, backgroundColor: "rgba(255,255,255,1)", borderColor: "rgba(255,255,255,1)" },
    text: { width: 3, height: 30, borderRadius: 2, backgroundColor: "rgba(34,211,238,1)", borderColor: "rgba(34,211,238,1)" },
  }[mode];

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[100]" style={{ opacity: visible ? 1 : 0, transition: "opacity 0.3s" }}>
      <motion.div
        className="fixed left-0 top-0 flex items-center justify-center border text-[13px] font-semibold text-black"
        style={{ x: ringX, y: ringY, translateX: "-50%", translateY: "-50%" }}
        animate={{ ...ring, scale: down ? 0.8 : 1 }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
      >
        {mode === "label" && (
          <motion.span initial={{ opacity: 0, scale: 0.6 }} animate={{ opacity: 1, scale: 1 }}>
            {label}
          </motion.span>
        )}
      </motion.div>
      <motion.div
        className="fixed left-0 top-0 h-1.5 w-1.5 rounded-full bg-white"
        style={{ x, y, translateX: "-50%", translateY: "-50%" }}
        animate={{ opacity: mode === "default" ? 1 : 0 }}
      />
    </div>
  );
}
