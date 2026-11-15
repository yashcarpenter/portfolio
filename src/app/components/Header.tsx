"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "../lib/site";
import { cn } from "../lib/utils";
import { ArrowUpRight } from "./ui/Icons";
import MobileMenu from "./MobileMenu";
import { setScrollLocked } from "./motion/SmoothScroll";

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);

  // Shrink on scroll; hide when scrolling down, reveal when scrolling up.
  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setIsScrolled(y > 24);
      setHidden(y > 300 && y > last + 4);
      if (y < last - 4) setHidden(false);
      last = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu on navigation and lock scroll while open.
  useEffect(() => setIsMenuOpen(false), [pathname]);
  useEffect(() => {
    if (!isMenuOpen) return;
    setScrollLocked(true);
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setIsMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      setScrollLocked(false);
      window.removeEventListener("keydown", onKey);
    };
  }, [isMenuOpen]);

  const isActive = (href: string) => pathname === href || pathname?.startsWith(`${href}/`);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 flex justify-center px-4 transition-all duration-700 ease-[var(--ease)]",
          isScrolled ? "pt-3" : "pt-5",
          hidden && !isMenuOpen ? "-translate-y-28" : "translate-y-0"
        )}
      >
        <div
          className={cn(
            "flex w-full items-center justify-between rounded-full border pl-5 pr-2 transition-all duration-700 ease-[var(--ease)]",
            isScrolled
              ? "h-14 max-w-4xl border-white/10 bg-[#0b0b12]/70 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.8)] backdrop-blur-xl"
              : "h-16 max-w-6xl border-transparent bg-transparent"
          )}
        >
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-2.5" aria-label="Yash Carpenter, home">
            <span className="ring-conic relative flex h-9 w-9 items-center justify-center rounded-full">
              <span className="flex h-full w-full items-center justify-center rounded-full bg-[#0b0b12] text-xs font-bold tracking-wider text-white">
                YC
              </span>
            </span>
            <span className="hidden font-semibold tracking-tight text-white sm:block">
              Yash Carpenter<span className="text-a2 transition-colors duration-500 group-hover:text-a3">.</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "group relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300",
                    active ? "text-white" : "text-muted hover:text-white"
                  )}
                >
                  <span
                    className={cn(
                      "absolute inset-0 rounded-full bg-white/[0.08] transition-all duration-500 ease-[var(--ease)]",
                      active ? "scale-100 opacity-100" : "scale-75 opacity-0 group-hover:scale-100 group-hover:opacity-60"
                    )}
                  />
                  <span className="relative">{item.name}</span>
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <Link href="/contact" data-magnetic="0.25" className="btn btn-primary hidden !h-10 !px-5 !text-sm md:inline-flex">
              <span className="relative">Let&apos;s talk</span>
              <ArrowUpRight className="btn-arrow relative h-4 w-4" />
            </Link>

            {/* Mobile toggle */}
            <button
              type="button"
              onClick={() => setIsMenuOpen((o) => !o)}
              className="relative flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 md:hidden"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              <span
                className={cn(
                  "absolute h-[1.5px] w-5 bg-white transition-transform duration-500 ease-[var(--ease)]",
                  isMenuOpen ? "rotate-45" : "-translate-y-1"
                )}
              />
              <span
                className={cn(
                  "absolute h-[1.5px] w-5 bg-white transition-transform duration-500 ease-[var(--ease)]",
                  isMenuOpen ? "-rotate-45" : "translate-y-1"
                )}
              />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu open={isMenuOpen} pathname={pathname} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}
