"use client";

import { useState } from "react";
import PageHero from "../components/ui/PageHero";
import SectionHeading from "../components/ui/SectionHeading";
import Reveal from "../components/motion/Reveal";
import Marquee from "../components/ui/Marquee";
import { cn, delay } from "../lib/utils";

export default function SkillsPage() {
  const [activeCategory, setActiveCategory] = useState("TechStack");

  const skillCategories = [
    {
      id: "TechStack",
      title: "Technology Stack",
      icon: "⭐",
      description: "My core technology stack and primary expertise",
      skills: [
        { name: "Java", color: "from-orange-500 to-orange-600", description: "Advanced Java development with Spring ecosystem", icon: "☕" },
        { name: "Spring Boot", color: "from-green-500 to-green-600", description: "Enterprise Java applications and microservices", icon: "🍃" },
        { name: "PostgreSQL", color: "from-indigo-500 to-indigo-600", description: "Advanced SQL and performance tuning", icon: "🐘" },
        { name: "MySQL", color: "from-blue-500 to-blue-600", description: "Relational database management and optimization", icon: "🐬" },
        { name: "AWS", color: "from-orange-500 to-orange-600", description: "Cloud infrastructure and services", icon: "☁️" },
        { name: "Redis", color: "from-red-500 to-red-600", description: "Caching and session management", icon: "🔴" },
        { name: "Kafka", color: "from-orange-500 to-orange-600", description: "Event streaming and messaging", icon: "📨" },
        { name: "Git/GitHub", color: "from-gray-500 to-gray-600", description: "Version control and collaboration", icon: "📚" },
        { name: "CI/CD", color: "from-purple-500 to-purple-600", description: "Continuous Integration and Deployment", icon: "🚀" },
      ]
    },
    {
      id: "Programming",
      title: "Programming",
      icon: "💻",
      description: "Programming languages and core concepts",
      skills: [
        { name: "C/C++", color: "from-blue-500 to-blue-600", description: "System programming and performance optimization", icon: "C++" },
        { name: "Java", color: "from-orange-500 to-orange-600", description: "Object-oriented programming and enterprise development", icon: "☕" },
        { name: "Data Structures", color: "from-purple-500 to-purple-600", description: "Problem-solving and algorithmic thinking", icon: "🧮" },
        { name: "OOPs", color: "from-green-500 to-green-600", description: "Object-oriented design principles", icon: "🏗️" },
        { name: "JavaScript", color: "from-yellow-500 to-yellow-600", description: "Frontend and backend JavaScript development", icon: "🟨" },
      ]
    },
    {
      id: "Backend",
      title: "Backend",
      icon: "⚙️",
      description: "Backend technologies and frameworks",
      skills: [
        { name: "Java", color: "from-orange-500 to-orange-600", description: "Backend development with Java", icon: "☕" },
        { name: "Spring Boot", color: "from-green-500 to-green-600", description: "Enterprise Java applications", icon: "🍃" },
        { name: "PostgreSQL", color: "from-indigo-500 to-indigo-600", description: "Advanced SQL database", icon: "🐘" },
        { name: "MySQL", color: "from-blue-500 to-blue-600", description: "Relational database management", icon: "🐬" },
        { name: "AWS", color: "from-orange-500 to-orange-600", description: "Cloud infrastructure and services", icon: "☁️" },
        { name: "Redis", color: "from-red-500 to-red-600", description: "Caching and session management", icon: "🔴" },
        { name: "Kafka", color: "from-orange-500 to-orange-600", description: "Event streaming and messaging", icon: "📨" },
        { name: "Git/GitHub", color: "from-gray-500 to-gray-600", description: "Version control and collaboration", icon: "📚" },
        { name: "CI/CD", color: "from-purple-500 to-purple-600", description: "Continuous Integration and Deployment", icon: "🚀" },
      ]
    },
    {
      id: "Frontend",
      title: "Frontend",
      icon: "🎨",
      description: "Frontend technologies and frameworks",
      skills: [
        { name: "ReactJS", color: "from-cyan-500 to-cyan-600", description: "Frontend development with React", icon: "⚛️" },
        { name: "HTML/CSS", color: "from-red-500 to-red-600", description: "Web markup and styling", icon: "🌐" },
        { name: "JavaScript", color: "from-yellow-500 to-yellow-600", description: "Frontend JavaScript development", icon: "🟨" },
      ]
    },
    {
      id: "Database",
      title: "Databases",
      icon: "🗄️",
      description: "Database technologies and management",
      skills: [
        { name: "MySQL", color: "from-blue-500 to-blue-600", description: "Relational database management", icon: "🐬" },
        { name: "PostgreSQL", color: "from-indigo-500 to-indigo-600", description: "Advanced SQL database", icon: "🐘" },
        { name: "DynamoDB", color: "from-yellow-500 to-yellow-600", description: "NoSQL database service", icon: "⚡" },
      ]
    },
    {
      id: "Cloud",
      title: "Cloud",
      icon: "☁️",
      description: "AWS cloud services and infrastructure",
      skills: [
        { name: "ECS", color: "from-blue-500 to-blue-600", description: "Elastic Container Service", icon: "🐳" },
        { name: "CloudWatch", color: "from-orange-500 to-orange-600", description: "Monitoring and observability", icon: "👁️" },
        { name: "EC2", color: "from-green-500 to-green-600", description: "Elastic Compute Cloud", icon: "💻" },
        { name: "S3", color: "from-yellow-500 to-yellow-600", description: "Simple Storage Service", icon: "📦" },
        { name: "RDS", color: "from-purple-500 to-purple-600", description: "Relational Database Service", icon: "🗄️" },
        { name: "Lambda", color: "from-red-500 to-red-600", description: "Serverless computing", icon: "⚡" },
        { name: "API Gateway", color: "from-indigo-500 to-indigo-600", description: "API management service", icon: "🔗" },
        { name: "VPC", color: "from-teal-500 to-teal-600", description: "Virtual Private Cloud", icon: "🏠" },
        { name: "IAM", color: "from-gray-500 to-gray-600", description: "Identity and Access Management", icon: "🔐" },
      ]
    },
    {
      id: "Frameworks",
      title: "Frameworks & Tools",
      icon: "🛠️",
      description: "Frameworks, libraries and development tools",
      skills: [
        { name: "Hibernate", color: "from-indigo-500 to-indigo-600", description: "ORM and database mapping", icon: "🗃️" },
        { name: "Bootstrap", color: "from-purple-500 to-purple-600", description: "CSS framework for responsive design", icon: "🎨" },
        { name: "Jenkins", color: "from-red-500 to-red-600", description: "CI/CD pipeline automation", icon: "🔧" },
        { name: "Argo CD", color: "from-teal-500 to-teal-600", description: "GitOps continuous deployment", icon: "🚀" },
        { name: "Postman", color: "from-orange-500 to-orange-600", description: "API testing and development", icon: "📮" },
        { name: "Maven", color: "from-yellow-500 to-yellow-600", description: "Build automation and dependency management", icon: "🏗️" },
        { name: "Docker", color: "from-blue-500 to-blue-600", description: "Containerization and deployment", icon: "🐳" },
        { name: "Kubernetes", color: "from-blue-600 to-blue-700", description: "Container orchestration", icon: "⚓" },
      ]
    },
    {
      id: "DevTools",
      title: "Development Tools",
      icon: "💻",
      description: "Development environment and productivity tools",
      skills: [
        { name: "IntelliJ IDEA", color: "from-blue-500 to-blue-600", description: "Java IDE and development environment", icon: "💡" },
        { name: "VS Code", color: "from-purple-500 to-purple-600", description: "Multi-language code editor", icon: "💻" },
        { name: "Git/GitHub", color: "from-gray-500 to-gray-600", description: "Version control and collaboration", icon: "📚" },
        { name: "Postman", color: "from-orange-500 to-orange-600", description: "API testing and development", icon: "📮" },
        { name: "Linux/Ubuntu", color: "from-orange-500 to-orange-600", description: "Operating system and server management", icon: "🐧" },
        { name: "MacOS", color: "from-gray-500 to-gray-600", description: "macOS development environment", icon: "🍎" },
        { name: "Windows", color: "from-blue-500 to-blue-600", description: "Windows development platform", icon: "🪟" },
        { name: "Sequel Ace", color: "from-blue-500 to-blue-600", description: "MySQL database management tool", icon: "🍎" },
      ]
    }
  ];


  const currentCategory = skillCategories.find(cat => cat.id === activeCategory) || skillCategories[0];
  // Unique skill names across all categories, for the marquee rows.
  const allSkills = Array.from(new Map(skillCategories.flatMap((c) => c.skills).map((s) => [s.name, s])).values());
  const half = Math.ceil(allSkills.length / 2);
  const rows = [allSkills.slice(0, half), allSkills.slice(half)];

  return (
    <>
      <PageHero
        eyebrow="Technical skills & expertise"
        title="Skills that"
        accent="drive innovation"
        description="A comprehensive showcase of my backend development expertise across Java, Spring Boot, databases, cloud technologies, and modern development tools that power scalable applications."
      />

      {/* Marquee rows */}
      <section aria-label="All skills" className="space-y-4 pb-24">
        {rows.map((row, r) => (
          <Marquee key={r} reverse={r === 1} duration={50 + r * 10}>
            {row.map((s) => (
              <span
                key={s.name}
                className="glass flex items-center gap-3 whitespace-nowrap rounded-2xl px-5 py-3 text-base font-medium text-white/80"
              >
                <span aria-hidden="true">{s.icon}</span>
                {s.name}
              </span>
            ))}
          </Marquee>
        ))}
      </section>

      {/* Categories */}
      <section className="py-24 sm:py-32">
        <div className="container-x">
          <SectionHeading
            eyebrow="Explore"
            title="Technical"
            accent="skills."
            description="Click on different categories to explore my expertise across various domains."
          />

          <Reveal className="mb-12">
            <div role="tablist" aria-label="Skill categories" className="flex flex-wrap justify-center gap-2">
              {skillCategories.map((category) => {
                const active = activeCategory === category.id;
                return (
                  <button
                    key={category.id}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    aria-controls="skills-panel"
                    onClick={() => setActiveCategory(category.id)}
                    className={cn(
                      "group relative flex items-center gap-2 overflow-hidden rounded-full border px-5 py-2.5 text-sm font-semibold transition-all duration-500 ease-[var(--ease)]",
                      active
                        ? "border-transparent bg-white text-black shadow-[0_10px_40px_-10px_rgba(124,92,255,0.8)]"
                        : "border-white/10 bg-white/[0.03] text-muted hover:border-white/25 hover:text-white"
                    )}
                  >
                    <span aria-hidden="true" className="transition-transform duration-500 group-hover:scale-125">
                      {category.icon}
                    </span>
                    {category.title}
                  </button>
                );
              })}
            </div>
          </Reveal>

          {/* Active panel; keyed so it replays the entrance on change */}
          <div key={currentCategory.id} id="skills-panel" role="tabpanel" className="glass rounded-[2rem] p-6 sm:p-10">
            <div className="pop-in mb-10 flex flex-col items-center gap-4 text-center sm:flex-row sm:text-left">
              <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-a1/30 to-a2/20 text-3xl" aria-hidden="true">
                {currentCategory.icon}
              </span>
              <div>
                <h3 className="text-2xl font-semibold tracking-tight text-white">{currentCategory.title}</h3>
                <p className="mt-1 text-muted">{currentCategory.description}</p>
              </div>
              <span className="font-mono text-sm text-subtle sm:ml-auto">
                {String(currentCategory.skills.length).padStart(2, "0")} skills
              </span>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {currentCategory.skills.map((skill, index) => (
                <div key={skill.name} className="pop-in" style={delay(80 + index * 55)}>
                  <div data-tilt="8" className="spotlight group h-full p-6">
                    <div className="flex items-center gap-4">
                      <span
                        aria-hidden="true"
                        className={cn(
                          "flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br text-xl font-bold text-white shadow-lg transition-transform duration-700 ease-[var(--ease)] group-hover:-rotate-6 group-hover:scale-110",
                          skill.color
                        )}
                      >
                        {skill.icon}
                      </span>
                      <h4 className="text-lg font-semibold text-white">{skill.name}</h4>
                    </div>
                    <p className="mt-4 text-sm leading-relaxed text-muted">{skill.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
