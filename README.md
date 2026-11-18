# Portfolio

Personal portfolio website of Yash Carpenter, Backend Developer.

## Tech stack

- Next.js 15 (App Router), React 19, TypeScript
- Tailwind CSS v4
- Motion (animations), Lenis (desktop smooth scroll)
- EmailJS (contact form)

## Getting started

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build (stop the dev server first; both use .next/)
npm run lint
```

Optional environment variables are listed in `.env.example`.

## Project structure

```
src/
  content/          All CV data. Edit these to update the site.
    site.ts         Name, role, contact details, résumé links, socials, navigation, headline stats
    home.ts         Hero phrases, tech strip, "What I do" cards, impact metrics
    about.ts        Story, values, education
    experience.ts   Work history (timeline)
    projects.ts     Projects + filter categories
    skills.ts       Skill categories
  app/              Routes only: thin server pages + per-page metadata, sitemap, robots, manifest
  components/
    layout/         Header, MobileMenu, Footer
    sections/       Page sections, grouped by page (home/, about/, work/, skills/, contact/)
    motion/         Animation building blocks (Reveal, ScrambleText, NodeField, RouteTransition…)
    ui/             Small reusable pieces (PageHero, SectionHeading, Icons, Marquee…)
  lib/              utils, SEO helpers, EmailJS client, hooks
```

Common edits:

- **Years of experience / stats**: `stats` in `src/content/site.ts` (used by the hero, About page and meta description).
- **Add a project**: append to `projects` in `src/content/projects.ts`. Set `githubUrl` / `liveUrl` to show their buttons.
- **Add a job**: prepend to `experience` in `src/content/experience.ts`.

## Deployment

Deployed on Vercel from `master`. See `EMAILJS_SETUP.md` for the contact form.

## Contact

- Email: yashcarpenter@outlook.com
- GitHub: [yashcarpenter](https://github.com/yashcarpenter)
- LinkedIn: [yashcarpenter](https://linkedin.com/in/yashcarpenter)
