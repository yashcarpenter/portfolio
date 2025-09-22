"use client";

import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function SkillsPage() {
  const [activeCategory, setActiveCategory] = useState("TechStack");
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { ref: skillsRef, isVisible: skillsVisible } = useScrollAnimation();

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

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Hero Section */}
            <section 
              ref={heroRef}
              className={`pt-20 pb-4 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-gray-100 transition-all duration-1000 ${
                heroVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ paddingTop: '80px' }}
            >
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-8 shadow-sm">
              Technical Skills & Expertise
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
              Skills That
              <span className="block text-blue-600 mt-2">Drive Innovation</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
              A comprehensive showcase of my backend development expertise across Java, Spring Boot, 
              databases, cloud technologies, and modern development tools that power scalable applications.
            </p>
          </div>
        </section>

        {/* Skills Categories Section */}
        <section 
          ref={skillsRef}
          className={`py-8 px-4 sm:px-6 lg:px-8 bg-white mt-16 transition-all duration-1000 ${
            skillsVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Technical Skills
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Click on different categories to explore my expertise across various domains
              </p>
            </div>

            {/* Category Tabs */}
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              {skillCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-3 rounded-md font-semibold transition-colors duration-200 ${
                    activeCategory === category.id
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  <span className="mr-2">{category.icon}</span>
                  {category.title}
                </button>
              ))}
            </div>

            {/* Active Category Content */}
            <div className="bg-gray-50 rounded-lg p-8 shadow-sm border border-gray-200">
              <div className="text-center mb-12">
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center text-2xl text-blue-600">
                  {currentCategory.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{currentCategory.title}</h3>
                <p className="text-gray-600 max-w-2xl mx-auto">{currentCategory.description}</p>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {currentCategory.skills.map((skill, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="flex items-center mb-4">
                      <div 
                        className="w-10 h-10 flex items-center justify-center text-lg mr-3 ml-2"
                        style={{ marginLeft: '8px', marginRight: '12px' }}
                      >
                        {skill.icon}
                      </div>
                      <h4 className="text-lg font-bold text-gray-900">{skill.name}</h4>
                    </div>
                    
                    <p className="text-gray-600 text-sm leading-relaxed">{skill.description}</p>
                  </div>
                ))}
              </div>
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
