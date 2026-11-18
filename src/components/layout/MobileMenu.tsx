"use client";

import { useEffect, type CSSProperties } from "react";
import Link from "next/link";
import { homeNavItem, navItems, site } from "@/content/site";
import { useCopyToClipboard } from "@/lib/useCopyToClipboard";
import { cn } from "@/lib/utils";
import SocialLinks from "@/components/ui/SocialLinks";
import { ArrowUpRight, Check, Mail } from "@/components/ui/Icons";

const items = [homeNavItem, ...navItems];

interface MobileMenuProps {
  open: boolean;
  pathname: string | null;
  onClose: () => void;
}

/** Full-screen mobile navigation: glass sheet over the node field with staggered rows. */
export default function MobileMenu({ open, pathname, onClose }: MobileMenuProps) {
  const { copied, copy, reset } = useCopyToClipboard();

  useEffect(() => {
    if (!open) reset();
  }, [open, reset]);

  // Stagger helper: each element enters a bit after the previous one, and leaves instantly.
  const stagger = (i: number): CSSProperties => ({ transitionDelay: open ? `${120 + i * 55}ms` : "0ms" });
  const enter = open ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0";

  // Navigating to another page: keep the menu open; Header closes it once the new route renders,
  // so the menu wipes away to reveal the new page instead of collapsing mid-transition.
  const onLinkClick = (href: string) => {
    if (href === pathname) onClose();
  };

  return (
    <>
    {/* Frosted backdrop on its own layer: backdrop-filter can't see through the clip-path panel */}
    <div
      aria-hidden="true"
      className={cn(
        "fixed inset-0 z-40 bg-[#06060a]/75 backdrop-blur-2xl transition-opacity duration-500 md:hidden",
        open ? "opacity-100" : "pointer-events-none opacity-0"
      )}
    />
    <div
      id="mobile-menu"
      role="dialog"
      aria-modal="true"
      aria-label="Site menu"
      aria-hidden={!open}
      inert={!open}
      data-lenis-prevent
      className={cn(
        "fixed inset-0 z-40 overflow-y-auto overscroll-contain md:hidden",
        "transition-[clip-path] duration-700 ease-[var(--ease)]",
        open
          ? "[clip-path:circle(150%_at_calc(100%-2.75rem)_2.75rem)]"
          : "pointer-events-none [clip-path:circle(0%_at_calc(100%-2.75rem)_2.75rem)]"
      )}
    >
      <div aria-hidden="true" className="pointer-events-none fixed -right-24 -top-24 h-72 w-72 rounded-full bg-a1/25 blur-[90px]" />
      <div aria-hidden="true" className="pointer-events-none fixed -bottom-24 -left-20 h-64 w-64 rounded-full bg-a2/15 blur-[90px]" />

      <div className="relative flex min-h-full flex-col px-5 pb-8 pt-24">
        {/* Status */}
        <div className={cn("flex items-center justify-between transition-all duration-700 ease-[var(--ease)]", enter)} style={stagger(0)}>
          <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-subtle">Menu</span>
          <span className="eyebrow !py-1 !text-[11px]">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping-soft absolute inline-flex h-full w-full rounded-full bg-emerald-400" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
            </span>
            Open to work
          </span>
        </div>

        {/* Links */}
        <nav aria-label="Mobile" className="mt-5">
          <ul className="overflow-hidden rounded-[1.75rem] border border-white/[0.08] bg-white/[0.025]">
            {items.map((item, i) => {
              const active = item.href === "/" ? pathname === "/" : pathname?.startsWith(item.href);
              return (
                <li
                  key={item.href}
                  className={cn("border-b border-white/[0.06] transition-all duration-700 ease-[var(--ease)] last:border-b-0", enter)}
                  style={stagger(i + 1)}
                >
                  <Link
                    href={item.href}
                    onClick={() => onLinkClick(item.href)}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "group relative flex items-center gap-4 px-5 py-4 transition-colors duration-300 active:bg-white/[0.06]",
                      active && "bg-gradient-to-r from-a1/[0.14] to-transparent"
                    )}
                  >
                    {active && <span aria-hidden="true" className="absolute inset-y-3 left-0 w-[3px] rounded-r-full bg-gradient-to-b from-a1 to-a2" />}
                    <span className={cn("w-6 font-mono text-xs", active ? "text-a2" : "text-subtle")}>0{i + 1}</span>
                    <span className="min-w-0 flex-1">
                      <span className={cn("block text-[1.65rem] font-semibold leading-tight tracking-tight", active ? "text-white" : "text-white/80")}>
                        {item.name}
                      </span>
                      <span className="mt-0.5 block text-[13px] text-subtle">{item.description}</span>
                    </span>
                    <span
                      className={cn(
                        "flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border transition-all duration-500 ease-[var(--ease)]",
                        active ? "border-transparent bg-white text-black" : "border-white/10 text-muted group-active:rotate-45"
                      )}
                    >
                      {active ? <span className="h-1.5 w-1.5 rounded-full bg-black" /> : <ArrowUpRight className="h-4 w-4" />}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Actions */}
        <div className={cn("mt-6 space-y-3 transition-all duration-700 ease-[var(--ease)]", enter)} style={stagger(items.length + 1)}>
          <Link href="/contact" onClick={() => onLinkClick("/contact")} className="btn btn-primary w-full">
            <span className="relative">Let&apos;s talk</span>
            <ArrowUpRight className="btn-arrow relative h-4 w-4" />
          </Link>
          <button
            type="button"
            onClick={() => copy(site.email, `mailto:${site.email}`)}
            className="flex w-full items-center gap-3 rounded-2xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-left"
          >
            <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-a1/25 to-a2/10 text-white">
              {copied ? <Check className="h-4 w-4 text-emerald-300" /> : <Mail className="h-4 w-4" />}
            </span>
            <span className="min-w-0 flex-1">
              <span className="block text-sm font-medium text-white [overflow-wrap:anywhere]">{site.email}</span>
              <span className="block text-xs text-subtle">{copied ? "Copied to clipboard" : "Tap to copy"}</span>
            </span>
          </button>
        </div>

        {/* Footer */}
        <div
          className={cn("mt-auto flex items-center justify-between gap-4 pt-8 transition-all duration-700 ease-[var(--ease)]", enter)}
          style={stagger(items.length + 2)}
        >
          <SocialLinks size="sm" />
          <span className="text-right text-xs leading-snug text-subtle">
            {site.location}
            <br />
            {site.role}
          </span>
        </div>
      </div>
    </div>
    </>
  );
}
