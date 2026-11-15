import Link from "next/link";
import Reveal from "./motion/Reveal";
import Marquee from "./ui/Marquee";
import SocialLinks from "./ui/SocialLinks";
import { ArrowUpRight } from "./ui/Icons";
import { navItems, site } from "../lib/site";

export default function Footer() {
  return (
    <footer className="relative mt-32 overflow-hidden border-t border-white/[0.06]">
      {/* Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-a1/20 blur-[120px]"
      />

      {/* Big scrolling CTA */}
      <Link href="/contact" className="group block py-14 sm:py-20" aria-label="Contact me">
        <Marquee duration={28}>
          {Array.from({ length: 3 }).map((_, i) => (
            <span
              key={i}
              className="flex items-center gap-8 whitespace-nowrap text-6xl font-semibold tracking-tighter text-white/90 transition-colors duration-500 group-hover:text-white sm:text-8xl"
            >
              Let&apos;s build something
              <span className="font-serif font-normal italic text-gradient">great</span>
              <span className="inline-flex h-16 w-16 items-center justify-center rounded-full border border-white/15 transition-all duration-700 ease-[var(--ease)] group-hover:rotate-45 group-hover:bg-white group-hover:text-black sm:h-24 sm:w-24">
                <ArrowUpRight className="h-8 w-8 sm:h-10 sm:w-10" />
              </span>
            </span>
          ))}
        </Marquee>
      </Link>

      <div className="container-x pb-10">
        <Reveal className="grid gap-10 border-t border-white/[0.06] pt-10 md:grid-cols-3 md:items-center">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-a1 to-a2 text-sm font-bold text-white">
              YC
            </span>
            <div>
              <p className="font-semibold text-white">{site.name}</p>
              <p className="text-sm text-muted">{site.role} · {site.location}</p>
            </div>
          </div>

          <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2 md:justify-center">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="link-underline text-sm text-muted hover:text-white">
                {item.name}
              </Link>
            ))}
          </nav>

          <SocialLinks size="sm" className="md:justify-end" />
        </Reveal>

        <div className="mt-10 text-center text-xs text-subtle sm:text-left">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
