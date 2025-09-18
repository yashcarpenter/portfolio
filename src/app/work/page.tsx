"use client";

import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  category: string;
  impact: string;
  features: string[];
  image?: string;
  liveUrl?: string;
  githubUrl?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Price Monitoring Application",
    description: "Developed and deployed a dynamic E-commerce Price Tracker on GCP, allowing over 10,000 users to receive timely price drop alerts and make informed purchasing decisions.",
    technologies: ["Spring Boot", "ReactJS", "Redis", "Apache Kafka", "MySQL", "GCP", "AWS"],
    category: "Full Stack",
    impact: "Served 10,000+ users with seamless handling of thousands of daily requests",
    features: [
      "Dynamic price tracking for e-commerce products",
      "Real-time price drop alerts via email/SMS",
      "Price history visualization with interactive charts",
      "JWT token-based authentication system",
      "Redis caching for improved performance",
      "Multi-threading for concurrent request handling"
    ],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 2,
    title: "Centralized Repository System",
    description: "Developed a centralized repository using Spring Boot, MySQL, Prometheus and GCP APIs, reducing dependency failure resolution time by 30%.",
    technologies: ["Spring Boot", "MySQL", "Prometheus", "GCP", "Grafana"],
    category: "Backend",
    impact: "30% reduction in dependency failure resolution time",
    features: [
      "Centralized dependency management",
      "Real-time monitoring with Prometheus",
      "Advanced MySQL schema with indexing",
      "Automated failure detection and resolution",
      "Performance metrics dashboard"
    ],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 3,
    title: "PhonePe LAMF Integration",
    description: "Integrated with PhonePe's Loan Against Mutual Fund (LAMF) flow, enabling mandate collection and processing of user repayments for loans disbursed via PhonePe.",
    technologies: ["Java", "Spring Boot", "PostgreSQL", "AWS", "REST APIs"],
    category: "Backend",
    impact: "Enhanced customer experience and operational efficiency",
    features: [
      "Secure API integration with PhonePe",
      "Real-time mandate collection system",
      "Automated repayment processing",
      "End-to-end loan lifecycle management",
      "High availability microservice architecture"
    ],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 4,
    title: "Session Management System",
    description: "Implemented a session termination feature in the logout flow, improving security compliance by 25%.",
    technologies: ["Java", "Spring Boot", "JWT", "Redis"],
    category: "Backend",
    impact: "25% improvement in security compliance",
    features: [
      "Secure session termination on logout",
      "JWT token invalidation",
      "Improved user data protection",
      "Compliance with security best practices"
    ],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 5,
    title: "Microservices Architecture",
    description: "Designed and implemented a scalable microservices architecture for a fintech application, improving system reliability and maintainability.",
    technologies: ["Spring Boot", "Docker", "Kubernetes", "PostgreSQL", "Redis", "AWS"],
    category: "Backend",
    impact: "Improved system reliability by 40% and reduced deployment time by 60%",
    features: [
      "Containerized microservices with Docker",
      "Kubernetes orchestration for scalability",
      "Service mesh implementation",
      "Distributed logging and monitoring",
      "API gateway for request routing"
    ],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 6,
    title: "Real-time Analytics Dashboard",
    description: "Built a real-time analytics dashboard for monitoring system performance and user behavior, providing actionable insights to stakeholders.",
    technologies: ["ReactJS", "Node.js", "WebSocket", "MongoDB", "Chart.js"],
    category: "Full Stack",
    impact: "Reduced decision-making time by 50% through real-time insights",
    features: [
      "Real-time data visualization",
      "Interactive charts and graphs",
      "Customizable dashboard widgets",
      "Export functionality for reports",
      "Role-based access control"
    ],
    liveUrl: "#",
    githubUrl: "#"
  }
];

const categories = ["All", "Backend", "Full Stack"];

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = activeFilter === "All"
    ? projects
    : projects.filter(project => project.category === activeFilter);

  const timeline = [
    {
      year: "Dec 2024 – Present",
      title: "Software Developer Engineer",
      company: "Volt Money",
      location: "Bengaluru, India",
      description: "Backend Developer utilizing Java, Spring Boot, PostgreSQL, AWS, and other backend technologies to develop, deploy, and maintain scalable microservices, ensuring high system availability, performance, and resilience.",
      details: [
        "Owned and managed multiple microservices within the Lending Stack Team (DSP)",
        "Integrated with PhonePe's Loan Against Mutual Fund (LAMF) flow",
        "Built secure, real-time APIs for end-to-end repayment lifecycle"
      ]
    },
    {
      year: "Jan 2024 – Jul 2024",
      title: "Software Engineer Intern",
      company: "Groww",
      location: "Bengaluru, India",
      description: "Developed centralized repository using Spring Boot, MySQL, Prometheus and GCP APIs, reducing dependency failure resolution time by 30%.",
      details: [
        "Architected MySQL schema with advanced indexing and partitioning, lowering query execution time by 40%",
        "Implemented session termination feature in logout flow, improving security compliance by 25%",
        "Integrated services with Argo, reducing deployment time by 35%",
        "Developed APIs and optimized code, resulting in 20% increase in processing speed"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Hero Section */}
            <section 
              className="pt-20 pb-4 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-gray-100"
              style={{ paddingTop: '80px' }}
            >
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-8 shadow-sm">
              Portfolio & Experience
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
              My Work &
              <span className="block text-blue-600 mt-2">Professional Journey</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
              A showcase of my professional experience and projects, featuring innovative solutions and cutting-edge technologies that solve real-world problems.
            </p>
            
            {/* Quick Stats */}
            {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-2">6+</div>
                <div className="text-gray-600 font-medium">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-purple-600 mb-2">1+</div>
                <div className="text-gray-600 font-medium">Companies</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-green-600 mb-2">100%</div>
                <div className="text-gray-600 font-medium">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-orange-600 mb-2">24/7</div>
                <div className="text-gray-600 font-medium">Innovation</div>
              </div>
            </div> */}
          </div>
        </section>

        {/* Professional Experience Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white mt-0">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                Professional Experience
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                My journey in backend development across different companies and roles
              </p>
            </div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-300"></div>

              {timeline.map((item, index) => (
                <div key={index} className="relative flex items-start space-x-6 group mb-12">
                  {/* Timeline Dot */}
                  <div className="relative z-10 flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="bg-gray-50 rounded-lg p-8 shadow-sm border border-gray-200">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-md">
                          {item.year}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-lg font-medium text-gray-600 mb-4">{item.company} • {item.location}</p>
                      <p className="text-gray-600 leading-relaxed mb-6 text-lg">{item.description}</p>
                      <ul className="space-y-3">
                        {item.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="text-gray-600 flex items-center">
                            <span className="w-2 h-2 bg-blue-500 rounded-full bullet-margin flex-shrink-0 mt-0.5"></span>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 mt-16">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                Featured Projects
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                A collection of projects that showcase my technical skills and problem-solving abilities
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`px-6 py-3 rounded-md font-semibold transition-colors duration-200 ${
                    activeFilter === category
                      ? "bg-blue-600 text-white"
                      : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  {/* Project Image Placeholder */}
                  <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-200 rounded-t-lg flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                      </div>
                      <span className="text-sm font-medium text-gray-600">{project.category}</span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                      <span className="px-3 py-1 bg-gray-100 text-gray-600 text-sm font-medium rounded-md">
                        {project.category}
                      </span>
                    </div>
                    
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {project.description}
                    </p>
                    
                    <div className="bg-green-50 border border-green-200 rounded-md p-3 mb-6">
                      <p className="text-sm text-green-700 font-medium">
                        Impact: {project.impact}
                      </p>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Features</h4>
                      <ul className="space-y-2">
                        {project.features.slice(0, 3).map((feature, index) => (
                          <li key={index} className="text-sm text-gray-600 flex items-center">
                            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full bullet-margin flex-shrink-0 mt-0.5"></span>
                            {feature}
                          </li>
                        ))}
                        {project.features.length > 3 && (
                          <li className="text-sm text-gray-500">
                            +{project.features.length - 3} more features
                          </li>
                        )}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-900 mb-3">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 4).map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-md"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 4 && (
                          <span className="px-3 py-1 bg-gray-100 text-gray-500 text-sm font-medium rounded-md">
                            +{project.technologies.length - 4} more
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <button className="flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                        <span className="mr-2">View Details</span>
                        <svg
                          className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </button>
                      <div className="flex space-x-2">
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 text-gray-400 hover:text-blue-600 transition-colors"
                            title="Live Demo"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </a>
                        )}
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 text-gray-400 hover:text-blue-600 transition-colors"
                            title="GitHub Repository"
                          >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* View All Projects Button */}
            <div className="text-center mt-16">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors duration-200"
              >
                <span className="mr-2">Interested in Working Together?</span>
                
              </a>
            </div>
          </div>
        </section>
      </main>
      <div className="mt-16">
        <Footer />
      </div>
    </div>
  );
}
