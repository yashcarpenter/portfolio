import Reveal from "@/components/motion/Reveal";
import LineReveal from "@/components/motion/LineReveal";
import SlotCounter from "@/components/ui/SlotCounter";
import { story, storyHighlights } from "@/content/about";
import { site, stats } from "@/content/site";

const aboutStats = [stats.experience, stats.dsa, stats.projects, stats.cpRating];

/** "My story" copy + stat tiles, with the tilting profile card alongside. */
export default function Story() {
  return (
    <section className="pb-28 sm:pb-36">
      <div className="container-x grid items-center gap-16 lg:grid-cols-[1fr_0.8fr]">
        <div>
          <Reveal>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">My story</h2>
          </Reveal>
          <div className="mt-6 space-y-5 text-lg leading-relaxed text-muted">
            {story.map((text, i) => (
              <LineReveal key={i} text={text} highlight={storyHighlights} delay={i * 80} />
            ))}
          </div>

          <div className="mt-12 grid grid-cols-2 gap-4">
            {aboutStats.map((s, i) => (
              <Reveal key={s.label} delay={i * 90}>
                <div className="spotlight p-6">
                  <SlotCounter value={s.value} suffix={s.suffix} className="text-4xl font-semibold tracking-tight text-white" />
                  <p className="mt-1 text-sm text-muted">{s.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <ProfileCard />
      </div>
    </section>
  );
}

function ProfileCard() {
  return (
    <Reveal variant="scale" delay={200} className="mx-auto w-full max-w-sm">
      <div data-tilt="12" className="relative aspect-[4/5]">
        <div className="ring-conic absolute inset-0 rounded-[2rem] p-px">
          <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-[calc(2rem-1px)] bg-[#0b0b12]">
            <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(124,92,255,0.35),transparent_55%),radial-gradient(circle_at_80%_90%,rgba(34,211,238,0.25),transparent_50%)]" />
            <div aria-hidden="true" className="bg-grid absolute inset-0 opacity-70" />
            <div className="relative flex h-36 w-36 items-center justify-center rounded-full bg-gradient-to-br from-a1 via-a2 to-a3 p-[2px]">
              <div className="flex h-full w-full items-center justify-center rounded-full bg-[#0b0b12] font-serif text-6xl italic text-white">
                YC
              </div>
            </div>
            <p className="relative mt-8 text-2xl font-semibold text-white">{site.name}</p>
            <p className="relative mt-1 text-muted">{site.role}</p>
            <div className="relative mt-6 flex gap-2">
              <span className="chip">{site.city}</span>
              <span className="chip">
                {site.currentRole.title} @ {site.currentRole.company}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
