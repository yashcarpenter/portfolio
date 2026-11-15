"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import DemoLabel from "../_components/DemoLabel";
import { projects, timeline } from "../_lib/data";
import { prefersReducedMotion } from "../../lib/utils";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollDemo() {
  const root = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      /* 1. Pinned hero exit: headline shrinks/blurs, card lifts away */
      gsap
        .timeline({
          scrollTrigger: { trigger: "[data-hero]", start: "top top", end: "+=120%", scrub: 0.6, pin: true },
        })
        .to("[data-hero-title]", { scale: 0.72, yPercent: -30, opacity: 0, filter: "blur(14px)", ease: "none" }, 0)
        .to("[data-hero-sub]", { yPercent: -120, opacity: 0, ease: "none" }, 0)
        .to("[data-hero-card]", { yPercent: -60, rotate: -8, scale: 0.85, opacity: 0, ease: "none" }, 0.1)
        .to("[data-hero-ring]", { scale: 2.2, opacity: 0, ease: "none" }, 0);

      /* 2. Parallax depth: each layer moves at its own speed */
      gsap.utils.toArray<HTMLElement>("[data-speed]").forEach((el) => {
        const speed = Number(el.dataset.speed);
        gsap.fromTo(
          el,
          { y: speed * 220 },
          {
            y: speed * -220,
            ease: "none",
            scrollTrigger: { trigger: "[data-parallax]", start: "top bottom", end: "bottom top", scrub: true },
          }
        );
      });

      /* 3. Timeline line draws with scroll; items light up as it passes */
      gsap.fromTo(
        "[data-line]",
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: { trigger: "[data-timeline]", start: "top 60%", end: "bottom 60%", scrub: true },
        }
      );
      gsap.utils.toArray<HTMLElement>("[data-tl-item]").forEach((el) => {
        ScrollTrigger.create({
          trigger: el,
          start: "top 60%",
          onEnter: () => el.classList.add("is-lit"),
          onLeaveBack: () => el.classList.remove("is-lit"),
        });
      });

      /* 4. Horizontal project gallery: vertical scroll drives the track sideways */
      const track = document.querySelector<HTMLElement>("[data-track]");
      if (track) {
        const distance = () => track.scrollWidth - window.innerWidth;
        gsap.to(track, {
          x: () => -distance(),
          ease: "none",
          scrollTrigger: {
            trigger: "[data-horizontal]",
            start: "top top",
            end: () => `+=${distance()}`,
            scrub: 0.5,
            pin: true,
            invalidateOnRefresh: true,
          },
        });
        gsap.to("[data-progress]", {
          scaleX: 1,
          ease: "none",
          scrollTrigger: { trigger: "[data-horizontal]", start: "top top", end: () => `+=${distance()}`, scrub: true },
        });
      }
    }, root);

    // Template entrance animation shifts layout briefly; re-measure after it.
    const t = setTimeout(() => ScrollTrigger.refresh(), 900);
    return () => {
      clearTimeout(t);
      ctx.revert();
    };
  }, []);

  return (
    <div ref={root}>

      {/* 1. Pinned hero exit */}
      <section data-hero className="relative flex h-screen items-center overflow-hidden">
        <div data-hero-ring aria-hidden="true" className="pointer-events-none absolute left-1/2 top-1/2 h-[70vmin] w-[70vmin] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/10" />
        <div className="container-x relative">
          <DemoLabel num="01" title="Pinned hero exit + Lenis smooth scroll" uses="GSAP ScrollTrigger (pin + scrub)" />
          <h1 data-hero-title className="mt-8 origin-left text-[clamp(3rem,9vw,8rem)] font-semibold leading-[0.92] tracking-[-0.045em] text-white">
            Hi, I&apos;m <span className="font-serif font-normal italic text-gradient">Yash</span>
            <br />
            Carpenter
          </h1>
          <p data-hero-sub className="mt-8 max-w-lg text-xl text-muted">
            Scroll slowly. The hero shrinks, blurs and hands off to the next section instead of simply scrolling away.
          </p>
          <div data-hero-card className="glass absolute right-8 top-1/2 hidden w-72 -translate-y-1/2 rounded-3xl p-6 lg:block">
            <p className="font-mono text-xs text-subtle">RepaymentController.java</p>
            <p className="mt-4 font-mono text-sm text-a3">@PostMapping(&quot;/repay&quot;)</p>
            <p className="mt-1 font-mono text-sm text-white">lending.process(req)</p>
            <p className="mt-6 flex items-center gap-2 font-mono text-xs text-emerald-300">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> 200 OK · 38ms
            </p>
          </div>
        </div>
      </section>

      {/* 2. Parallax depth */}
      <section data-parallax className="relative h-[130vh] overflow-hidden">
        <div className="container-x relative h-full">
          <DemoLabel num="02" title="Parallax depth" uses="GSAP scrub, 4 layers at different speeds" className="pt-24" />
          <div data-speed="-1.2" aria-hidden="true" className="absolute left-[8%] top-[30%] h-72 w-72 rounded-full bg-a1/40 blur-[80px]" />
          <div data-speed="0.8" aria-hidden="true" className="absolute right-[10%] top-[45%] h-80 w-80 rounded-full bg-a2/30 blur-[90px]" />
          <div data-speed="1.4" className="glass absolute left-[4%] top-[68%] rounded-2xl px-5 py-4">
            <p className="text-xs text-subtle">Uptime</p>
            <p className="text-2xl font-semibold text-white">99.9%</p>
          </div>
          <div data-speed="-0.9" className="glass absolute right-[6%] top-[22%] rounded-2xl px-5 py-4">
            <p className="text-xs text-subtle">Faster queries</p>
            <p className="text-2xl font-semibold text-white">40%</p>
          </div>
          <div data-speed="0.3" className="absolute inset-x-0 top-1/2 -translate-y-1/2 text-center">
            <h2 className="text-[clamp(2.5rem,7vw,6rem)] font-semibold leading-none tracking-tight text-white">
              Systems with <span className="font-serif font-normal italic text-gradient">depth.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-md text-muted">Background glows, cards and headline all travel at different speeds.</p>
          </div>
        </div>
      </section>

      {/* 3. Scroll-drawn timeline */}
      <section data-timeline className="py-32">
        <div className="container-x">
          <DemoLabel num="03" title="Scroll-drawn timeline" uses="GSAP scrub + toggle classes" />
          <h2 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-6xl">
            The <span className="font-serif font-normal italic text-gradient">journey</span> so far.
          </h2>
          <div className="relative mt-20">
            <div aria-hidden="true" className="absolute bottom-0 left-6 top-0 w-px bg-white/10" />
            <div data-line aria-hidden="true" className="absolute bottom-0 left-6 top-0 w-px origin-top bg-gradient-to-b from-a1 via-a2 to-a3 shadow-[0_0_12px_1px] shadow-a2/60" />
            <ol className="space-y-24">
              {timeline.map((item) => (
                <li key={item.title} data-tl-item className="group relative pl-20 opacity-30 transition-opacity duration-700 [&.is-lit]:opacity-100">
                  <span className="absolute left-6 top-2 h-4 w-4 -translate-x-1/2 rounded-full border-2 border-white/20 bg-[#06060a] transition-all duration-700 group-[.is-lit]:scale-125 group-[.is-lit]:border-a2 group-[.is-lit]:bg-a2 group-[.is-lit]:shadow-[0_0_24px_4px] group-[.is-lit]:shadow-a2/60" />
                  <p className="font-mono text-xs text-a2">{item.year}</p>
                  <h3 className="mt-2 text-3xl font-semibold tracking-tight text-white">{item.title}</h3>
                  <p className="mt-1 text-white/70">{item.company}</p>
                  <p className="mt-4 max-w-2xl leading-relaxed text-muted">{item.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* 4. Horizontal project gallery */}
      <section data-horizontal className="relative flex h-screen flex-col justify-center overflow-hidden">
        <div className="container-x mb-10 flex items-end justify-between gap-6">
          <div>
            <DemoLabel num="04" title="Horizontal project gallery" uses="GSAP pin + x scrub" />
            <h2 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-6xl">
              Featured <span className="font-serif font-normal italic text-gradient">projects.</span>
            </h2>
          </div>
          <div className="hidden w-48 sm:block">
            <div className="h-px w-full bg-white/10">
              <div data-progress className="h-px w-full origin-left scale-x-0 bg-gradient-to-r from-a1 to-a2" />
            </div>
          </div>
        </div>
        <div data-track className="flex w-max gap-6 pl-[max(1.25rem,calc((100vw-76rem)/2+2rem))] pr-[10vw]">
          {projects.map((p) => (
            <article key={p.id} className="spotlight flex h-[52vh] w-[min(80vw,30rem)] flex-shrink-0 flex-col overflow-hidden">
              <div
                className="relative h-1/2 border-b border-white/[0.06]"
                style={{ background: `radial-gradient(circle at 30% 30%, hsla(${p.hue},90%,65%,0.45), transparent 60%), radial-gradient(circle at 80% 90%, hsla(${p.hue + 60},90%,60%,0.3), transparent 55%)` }}
              >
                <div aria-hidden="true" className="bg-grid absolute inset-0" />
                <span className="absolute bottom-5 left-6 font-mono text-6xl font-semibold text-white/20">0{p.id}</span>
                <span className="chip absolute bottom-6 right-6">{p.category}</span>
              </div>
              <div className="flex flex-1 flex-col p-7">
                <h3 className="text-2xl font-semibold tracking-tight text-white">{p.title}</h3>
                <p className="mt-3 leading-relaxed text-muted">{p.blurb}</p>
                <div className="mt-auto flex flex-wrap gap-2 pt-4">
                  {p.stack.map((s) => (
                    <span key={s} className="chip">{s}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
          <div className="flex w-[min(80vw,24rem)] flex-shrink-0 items-center justify-center">
            <p className="text-center font-serif text-4xl italic text-white/60">and more on the way…</p>
          </div>
        </div>
      </section>

      <section className="flex h-[60vh] items-center justify-center">
        <p className="max-w-md text-center text-muted">End of the scroll demo. Scroll back up to watch everything reverse.</p>
      </section>
    </div>
  );
}
