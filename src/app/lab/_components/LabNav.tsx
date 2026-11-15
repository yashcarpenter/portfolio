"use client";

import { usePathname } from "next/navigation";
import { cn } from "../../lib/utils";
import { CurtainLink } from "../../components/motion/Curtain";

const items = [
  { href: "/lab", label: "Lab" },
  { href: "/lab/scroll", label: "Scroll" },
  { href: "/lab/hero", label: "Hero" },
  { href: "/lab/transitions", label: "Transitions" },
  { href: "/lab/micro", label: "Micro" },
];

/** Floating bottom pill for jumping between lab demos (uses the curtain wipe). */
export default function LabNav() {
  const pathname = usePathname();
  return (
    <nav
      aria-label="Motion lab"
      className="fixed bottom-5 left-1/2 z-50 flex max-w-[calc(100vw-2rem)] -translate-x-1/2 gap-1 overflow-x-auto rounded-full border border-white/10 bg-[#0b0b12]/80 p-1.5 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.9)] backdrop-blur-xl"
    >
      {items.map((item) => {
        const active = pathname === item.href;
        return (
          <CurtainLink
            key={item.href}
            href={item.href}
            className={cn(
              "whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300",
              active ? "bg-white text-black" : "text-muted hover:bg-white/[0.06] hover:text-white"
            )}
          >
            {item.label}
          </CurtainLink>
        );
      })}
    </nav>
  );
}
