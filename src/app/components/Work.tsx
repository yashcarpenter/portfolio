"use client";

import { useState } from "react";

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  category: string;
  features: string[];
  impact: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Price Monitoring Application",
    description: "Developed and deployed a dynamic E-commerce Price Tracker on GCP, allowing over 10,000 users to receive timely price drop alerts and make informed purchasing decisions.",
    technologies: ["Spring Boot", "ReactJS", "Redis", "Apache Kafka", "MySQL", "GCP", "AWS"],
    category: "Full Stack",
    features: [
      "Dynamic price tracking for e-commerce products",
      "Real-time price drop alerts via email/SMS",
      "Price history visualization with interactive charts",
      "JWT token-based authentication system",
      "Redis caching for improved performance",
      "Multi-threading for concurrent request handling"
    ],
    impact: "Served 10,000+ users with seamless handling of thousands of daily requests"
  },
  {
    id: 2,
    title: "Centralized Repository System",
    description: "Developed a centralized repository using Spring Boot, MySQL, Prometheus and GCP APIs, reducing dependency failure resolution time by 30%.",
    technologies: ["Spring Boot", "MySQL", "Prometheus", "GCP", "Grafana"],
    category: "Backend",
    features: [
      "Centralized dependency management",
      "Real-time monitoring with Prometheus",
      "Advanced MySQL schema with indexing",
      "Automated failure detection and resolution",
      "Performance metrics dashboard"
    ],
    impact: "30% reduction in dependency failure resolution time"
  },
  {
    id: 3,
    title: "PhonePe LAMF Integration",
    description: "Integrated with PhonePe's Loan Against Mutual Fund (LAMF) flow, enabling mandate collection and processing of user repayments for loans disbursed via PhonePe.",
    technologies: ["Java", "Spring Boot", "PostgreSQL", "AWS", "REST APIs"],
    category: "Backend",
    features: [
      "Secure API integration with PhonePe",
      "Real-time mandate collection system",
      "Automated repayment processing",
      "End-to-end loan lifecycle management",
      "High availability microservice architecture"
    ],
    impact: "Enhanced customer experience and operational efficiency"
  },
  {
    id: 4,
    title: "Session Management System",
    description: "Implemented a session termination feature in the logout flow, improving security compliance by 25%.",
    technologies: ["Java", "Spring Boot", "Redis", "Security"],
    category: "Backend",
    features: [
      "Secure session termination on logout",
      "Redis-based session management",
      "Enhanced security compliance",
      "Multi-device session handling",
      "Audit logging for security events"
    ],
    impact: "25% improvement in security compliance"
  }
];

const categories = ["All", "Backend", "Full Stack"];

interface WorkProps {
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
}

export default function Work({ activeFilter, setActiveFilter }: WorkProps) {
  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="work" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-md bg-blue-100 text-blue-700 text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
            Portfolio
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Featured Projects
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A showcase of my best work, featuring innovative solutions and cutting-edge technologies
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-3 rounded-md font-semibold transition-colors duration-200 ${
                activeFilter === category
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* Project Header */}
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                  <span className="px-3 py-1 bg-gray-100 text-gray-600 text-sm font-medium rounded-md">
                    {project.category}
                  </span>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="bg-green-50 border border-green-200 rounded-md p-3">
                  <p className="text-sm text-green-700 font-medium">Impact: {project.impact}</p>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-center">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full bullet-margin flex-shrink-0 mt-0.5"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* View Project Button */}
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
                    <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </button>
                    <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors duration-200"
          >
            <span className="mr-2">View All Projects</span>
            <svg
              className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}