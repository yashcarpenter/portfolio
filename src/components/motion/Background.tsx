import NodeField from "@/components/motion/NodeField";

/**
 * Fixed, decorative backdrop behind every page: aurora glows, grid, interactive
 * node network, grain. Deliberately low-contrast so it never competes with content.
 */
export default function Background() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="blob animate-blob-1 -left-[30vw] -top-[15vh] h-[38vh] w-[38vh] bg-a1 !opacity-[0.10] sm:-left-[10vw] sm:h-[55vh] sm:w-[55vh] sm:!opacity-[0.16]" />
      <div className="blob animate-blob-2 -right-[10vw] top-[5vh] h-[34vh] w-[34vh] bg-a2 !opacity-[0.06] sm:h-[50vh] sm:w-[50vh] sm:!opacity-[0.08]" />
      <div className="blob animate-blob-3 bottom-[-20vh] left-[30vw] h-[30vh] w-[30vh] bg-a3 !opacity-[0.06] sm:h-[45vh] sm:w-[45vh] sm:!opacity-[0.08]" />
      <div className="bg-grid absolute inset-0 opacity-25" />
      <NodeField className="absolute inset-0 h-full w-full" />
      <div className="bg-noise absolute inset-0" />
      {/* Darken the edges and fade the whole field toward the page colour */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(6,6,10,0.08)_0%,rgba(6,6,10,0.4)_65%,var(--bg)_100%)]" />
    </div>
  );
}
