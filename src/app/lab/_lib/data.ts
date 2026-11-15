/** Sample content for the motion lab, mirroring the real site's copy. */

export const labPages = [
  {
    href: "/lab/scroll",
    num: "01",
    title: "Scroll storytelling",
    body: "Lenis smooth scroll, pinned hero exit, parallax depth, a timeline that draws itself and horizontal project scrolling.",
    uses: ["GSAP ScrollTrigger", "Lenis"],
  },
  {
    href: "/lab/hero",
    num: "02",
    title: "Hero moments",
    body: "A code card that types itself, a scramble-decoding name and an interactive microservice node field.",
    uses: ["Canvas", "Vanilla"],
  },
  {
    href: "/lab/transitions",
    num: "03",
    title: "Page transitions",
    body: "Shared-element morphs with the View Transitions API and a gradient curtain wipe between routes.",
    uses: ["View Transitions API", "Motion"],
  },
  {
    href: "/lab/micro",
    num: "04",
    title: "Micro-interactions",
    body: "Custom cursor, text roll, spring physics, FLIP filter layouts, slot-machine stats and line-by-line text.",
    uses: ["Motion"],
  },
];

export const timeline = [
  {
    year: "Dec 2024 – Present",
    title: "Software Developer Engineer",
    company: "Volt Money",
    body: "Owning lending-stack microservices, the PhonePe LAMF integration and real-time repayment APIs.",
  },
  {
    year: "Jan 2024 – Jul 2024",
    title: "Software Engineer Intern",
    company: "Groww",
    body: "Centralized dependency repository, MySQL partitioning (40% faster queries) and Argo CD rollouts (35% faster deploys).",
  },
  {
    year: "2020 – 2024",
    title: "B.Tech, Information Technology",
    company: "SGSITS, Indore",
    body: "Graduated with distinction. 500+ DSA problems solved and a 1700+ competitive programming rating.",
  },
];

export const projects = [
  {
    id: 1,
    title: "Price Monitoring Application",
    category: "Full Stack",
    blurb: "E-commerce price tracker on GCP sending timely price-drop alerts to 10,000+ users.",
    stack: ["Spring Boot", "ReactJS", "Redis", "Kafka", "MySQL"],
    hue: 262,
  },
  {
    id: 2,
    title: "Centralized Repository System",
    category: "Backend",
    blurb: "Spring Boot + Prometheus repository that cut dependency failure resolution time by 30%.",
    stack: ["Spring Boot", "MySQL", "Prometheus", "GCP"],
    hue: 190,
  },
  {
    id: 3,
    title: "PhonePe LAMF Integration",
    category: "Backend",
    blurb: "Mandate collection and repayment processing for loans disbursed via PhonePe.",
    stack: ["Java", "Spring Boot", "PostgreSQL", "AWS"],
    hue: 320,
  },
  {
    id: 4,
    title: "Session Management System",
    category: "Backend",
    blurb: "Session termination in the logout flow, improving security compliance by 25%.",
    stack: ["Java", "Spring Boot", "JWT", "Redis"],
    hue: 150,
  },
];

export const skills = [
  { name: "Java", group: "Backend" },
  { name: "Spring Boot", group: "Backend" },
  { name: "Hibernate", group: "Backend" },
  { name: "Kafka", group: "Backend" },
  { name: "PostgreSQL", group: "Data" },
  { name: "MySQL", group: "Data" },
  { name: "Redis", group: "Data" },
  { name: "DynamoDB", group: "Data" },
  { name: "AWS", group: "Cloud" },
  { name: "Docker", group: "Cloud" },
  { name: "Kubernetes", group: "Cloud" },
  { name: "Argo CD", group: "Cloud" },
  { name: "ReactJS", group: "Frontend" },
  { name: "JavaScript", group: "Frontend" },
  { name: "HTML/CSS", group: "Frontend" },
];
