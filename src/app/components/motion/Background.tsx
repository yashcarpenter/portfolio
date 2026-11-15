/** Fixed, decorative aurora + grid + grain backdrop behind every page. */
export default function Background() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="blob animate-blob-1 -left-[10vw] -top-[15vh] h-[55vh] w-[55vh] bg-a1" />
      <div className="blob animate-blob-2 -right-[10vw] top-[5vh] h-[50vh] w-[50vh] bg-a2 !opacity-30" />
      <div className="blob animate-blob-3 bottom-[-20vh] left-[30vw] h-[45vh] w-[45vh] bg-a3 !opacity-25" />
      <div className="bg-grid absolute inset-0" />
      <div className="bg-noise absolute inset-0" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,var(--bg)_85%)]" />
    </div>
  );
}
