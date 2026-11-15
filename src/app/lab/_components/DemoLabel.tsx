import { cn } from "../../lib/utils";

/** Small annotation explaining which technique a demo block uses. */
export default function DemoLabel({ num, title, uses, className }: { num: string; title: string; uses: string; className?: string }) {
  return (
    <div className={cn("flex flex-wrap items-center gap-3 font-mono text-xs", className)}>
      <span className="rounded-full bg-white px-2.5 py-1 font-semibold text-black">{num}</span>
      <span className="text-white">{title}</span>
      <span className="text-subtle">· {uses}</span>
    </div>
  );
}
