"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { usePathname, useRouter } from "next/navigation";
import { prefersReducedMotion } from "@/lib/utils";
import { scrollToTopNow } from "@/components/motion/SmoothScroll";

type Phase = "idle" | "leaving" | "loading" | "done";

/** How long the current page fades out before navigating. */
const LEAVE_MS = 220;

/**
 * Lightweight route transition (mounted once in the root layout).
 *
 * Intercepts clicks on internal links (capture phase, so every <Link> gets it),
 * softly fades/blurs the current page out while a thin glowing bar runs across
 * the top, navigates, then lets the new page fade in (app/template.tsx).
 * No full-screen overlay, so it never feels like an extra page.
 */
export default function RouteTransition({ children }: { children: ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [phase, setPhase] = useState<Phase>("idle");
  const pending = useRef<string | null>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = (e.target as Element | null)?.closest<HTMLAnchorElement>("a[href]");
      if (!a || a.target === "_blank" || a.hasAttribute("download") || a.dataset.noTransition !== undefined) return;

      const url = new URL(a.href, window.location.href);
      if (url.origin !== window.location.origin) return;
      if (url.pathname === window.location.pathname) return; // same page / hash links
      if (prefersReducedMotion()) return;

      e.preventDefault();
      if (pending.current) return;

      const href = url.pathname + url.search + url.hash;
      pending.current = url.pathname;
      router.prefetch(href);
      document.documentElement.dataset.nav = "leaving";
      setPhase("leaving");
      setTimeout(() => {
        setPhase("loading");
        router.push(href, { scroll: false });
      }, LEAVE_MS);
      // Safety net: never leave the page faded out if navigation stalls or redirects elsewhere.
      setTimeout(() => {
        if (pending.current !== url.pathname) return;
        pending.current = null;
        delete document.documentElement.dataset.nav;
        setPhase("idle");
      }, 6000);
    };

    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, [router]);

  // New route rendered: jump to top while the content is still faded, then fade it back in.
  useEffect(() => {
    if (!pending.current || pathname !== pending.current) return;
    pending.current = null;
    scrollToTopNow();
    delete document.documentElement.dataset.nav;
    setPhase("done");
    const t = setTimeout(() => setPhase("idle"), 500);
    return () => clearTimeout(t);
  }, [pathname]);

  // Bar: grows quickly while leaving, creeps while loading, completes and fades when done.
  const scale = phase === "leaving" ? 0.45 : phase === "loading" ? 0.85 : phase === "done" ? 1 : 0;
  const duration = phase === "leaving" ? LEAVE_MS : phase === "loading" ? 2500 : phase === "done" ? 250 : 0;

  return (
    <>
      {children}
      <div aria-hidden="true" className="pointer-events-none fixed inset-x-0 top-0 z-[96] h-[2px]">
        <div
          className="h-full origin-left bg-gradient-to-r from-a1 via-a2 to-a3 shadow-[0_0_14px_2px] shadow-a2/60"
          style={{
            transform: `scaleX(${scale})`,
            opacity: phase === "idle" ? 0 : 1,
            transition: `transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1), opacity ${phase === "done" ? 400 : 150}ms ease ${phase === "done" ? 250 : 0}ms`,
          }}
        />
      </div>
    </>
  );
}

