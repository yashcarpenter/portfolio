import type { IconName } from "@/components/ui/Icons";

/** Phrases the hero types after "Backend Developer building …". */
export const heroRoles = ["scalable microservices.", "high-throughput APIs.", "resilient fintech systems.", "event-driven pipelines."];

export const heroIntro =
  "Hands-on experience building scalable, high-performance systems in fast-paced startup environments. Proficient in Java, Spring Boot, MySQL and PostgreSQL, with a strong foundation in DSA.";

/** Scrolling strip under the hero. */
export const techStack = ["Java", "Spring Boot", "PostgreSQL", "MySQL", "Redis", "Kafka", "AWS", "Docker", "Kubernetes", "Hibernate", "Jenkins", "Argo CD", "ReactJS", "DynamoDB"];

export interface Service {
  icon: IconName;
  title: string;
  body: string;
  tags: string[];
  /** Spans two columns in the desktop bento grid. */
  wide?: boolean;
}

export const services: Service[] = [
  {
    icon: "code",
    title: "Backend Development",
    body: "Building scalable microservices, APIs, and database architectures using Java, Spring Boot, and modern cloud technologies.",
    tags: ["Java", "Spring Boot", "REST"],
    wide: true,
  },
  {
    icon: "bolt",
    title: "Performance Optimization",
    body: "Optimizing system performance, reducing response times, and ensuring high availability for mission-critical applications.",
    tags: ["Redis", "Indexing"],
  },
  {
    icon: "layers",
    title: "System Architecture",
    body: "Designing and implementing robust system architectures that can handle scale and growth while maintaining reliability.",
    tags: ["Kafka", "AWS", "Microservices"],
  },
];

export const highlights = [
  { metric: "40%", label: "faster queries", detail: "MySQL schema with indexing & partitioning at Groww" },
  { metric: "35%", label: "faster deploys", detail: "Services integrated with Argo CD" },
  { metric: "30%", label: "faster resolution", detail: "Dependency failures, via a centralized repository" },
];
