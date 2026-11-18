import type { IconName } from "@/components/ui/Icons";
import { experienceText } from "./site";

/** "My story" paragraphs. Words listed in `storyHighlights` render in white. */
export const story = [
  `I'm Yash Carpenter, a passionate backend developer with ${experienceText} of experience crafting enterprise-grade, scalable systems that power millions of transactions. I graduated with distinction in 2024 from Shri G.S. Institute of Technology and Science, Indore, with a Bachelor of Technology in Information Technology.`,
  "My professional journey began with a transformative internship at Groww, India's leading investment platform, where I contributed to backend systems handling millions of users. This experience led to my current role as a Software Development Engineer at Volt Money, where I architect and develop robust financial technology solutions that process high-volume transactions with 99.9% uptime.",
  "When I'm not coding, you'll find me watching movies, hanging out or playing games.",
];

export const storyHighlights = ["Groww", "Volt", "Money"];

export interface Value {
  icon: IconName;
  title: string;
  body: string;
}

export const values: Value[] = [
  {
    icon: "lightbulb",
    title: "Innovation",
    body: "I believe in pushing boundaries and finding creative solutions to complex problems. Every project is an opportunity to learn and innovate.",
  },
  {
    icon: "bolt",
    title: "Performance",
    body: "I'm obsessed with building fast, efficient systems that can handle scale. Performance optimization is at the core of everything I build.",
  },
  {
    icon: "book",
    title: "Learning",
    body: "Technology evolves rapidly, and I'm committed to staying current. Continuous learning is not just a habit, it's a way of life.",
  },
  {
    icon: "users",
    title: "Collaboration",
    body: "Great software is built by great teams. I value open communication, knowledge sharing, and working together towards common goals.",
  },
  {
    icon: "shieldCheck",
    title: "Quality",
    body: "I believe in writing clean, maintainable code that stands the test of time. Quality is never an accident; it's always the result of intention.",
  },
  {
    icon: "trendingUp",
    title: "Growth",
    body: "I'm always looking for ways to improve, both personally and professionally. Growth comes from stepping outside comfort zones and embracing challenges.",
  },
];

export interface Education {
  degree: string;
  school: string;
  period: string;
  note: string;
}

export const education: Education[] = [
  {
    degree: "B.Tech in Information Technology",
    school: "Shri G.S. Institute of Technology and Science, Indore",
    period: "2020 – 2024",
    note: "Graduated with distinction in Information Technology",
  },
  {
    degree: "XII (Higher Secondary)",
    school: "Ideal Convent H.S. School, Biaora",
    period: "2018 – 2019",
    note: "Completed higher secondary education with focus on science and mathematics, laying the foundation for technical studies and problem-solving skills.",
  },
];
