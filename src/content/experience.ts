export interface Experience {
  period: string;
  title: string;
  company: string;
  location: string;
  description: string;
  details: string[];
  current?: boolean;
}

/** Work history, newest first. */
export const experience: Experience[] = [
  {
    period: "Dec 2024 – Present",
    title: "Software Developer Engineer",
    company: "Volt Money",
    location: "Bengaluru, India",
    description:
      "Backend Developer utilizing Java, Spring Boot, PostgreSQL, AWS, and other backend technologies to develop, deploy, and maintain scalable microservices, ensuring high system availability, performance, and resilience.",
    details: [
      "Owned and managed multiple microservices within the Lending Stack Team (DSP)",
      "Integrated with PhonePe's Loan Against Mutual Fund (LAMF) flow",
      "Built secure, real-time APIs for end-to-end repayment lifecycle",
    ],
    current: true,
  },
  {
    period: "Jan 2024 – Jul 2024",
    title: "Software Engineer Intern",
    company: "Groww",
    location: "Bengaluru, India",
    description:
      "Developed centralized repository using Spring Boot, MySQL, Prometheus and GCP APIs, reducing dependency failure resolution time by 30%.",
    details: [
      "Architected MySQL schema with advanced indexing and partitioning, lowering query execution time by 40%",
      "Implemented session termination feature in logout flow, improving security compliance by 25%",
      "Integrated services with Argo, reducing deployment time by 35%",
      "Developed APIs and optimized code, resulting in 20% increase in processing speed",
    ],
  },
];
