"use client";

import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function SkillsPage() {
  const [activeCategory, setActiveCategory] = useState("Programming");

  const skillCategories = [
    {
      id: "Programming",
      title: "Programming Languages",
      icon: "💻",
      description: "Core programming languages and concepts",
      skills: [
        { name: "Java", color: "from-orange-500 to-orange-600", description: "Advanced Java development with Spring ecosystem", icon: "☕" },
        { name: "C/C++", color: "from-blue-500 to-blue-600", description: "System programming and performance optimization", icon: "C++" },
        { name: "JavaScript", color: "from-yellow-500 to-yellow-600", description: "Frontend and backend JavaScript development", icon: "🟨" },
        { name: "HTML/CSS", color: "from-red-500 to-red-600", description: "Modern web development and responsive design", icon: "🌐" },
        { name: "Data Structures & Algorithms", color: "from-purple-500 to-purple-600", description: "Problem-solving and algorithmic thinking", icon: "🧮" },
        { name: "OOPs Concepts", color: "from-green-500 to-green-600", description: "Object-oriented design principles", icon: "🏗️" },
      ]
    },
    {
      id: "Backend",
      title: "Backend Technologies",
      icon: "⚙️",
      description: "Server-side development and frameworks",
      skills: [
        { name: "Spring Boot", color: "from-green-500 to-green-600", description: "Enterprise Java applications", icon: "🍃" },
        { name: "REST APIs", color: "from-blue-500 to-blue-600", description: "RESTful web services design", icon: "🔗" },
        { name: "Microservices", color: "from-purple-500 to-purple-600", description: "Distributed system architecture", icon: "🔧" },
        { name: "Hibernate", color: "from-indigo-500 to-indigo-600", description: "ORM and database mapping", icon: "🗃️" },
        { name: "Redis", color: "from-red-500 to-red-600", description: "Caching and session management", icon: "🔴" },
        { name: "Kafka", color: "from-orange-500 to-orange-600", description: "Event streaming and messaging", icon: "📨" },
      ]
    },
    {
      id: "Database",
      title: "Databases & Cloud",
      icon: "🗄️",
      description: "Database management and cloud platforms",
      skills: [
        { name: "MySQL", color: "from-blue-500 to-blue-600", description: "Relational database management", icon: "🐬" },
        { name: "PostgreSQL", color: "from-indigo-500 to-indigo-600", description: "Advanced SQL and performance tuning", icon: "🐘" },
        { name: "AWS", color: "from-orange-500 to-orange-600", description: "Cloud infrastructure and services", icon: "☁️" },
        { name: "GCP", color: "from-yellow-500 to-yellow-600", description: "Google Cloud Platform services", icon: "🌩️" },
        { name: "SQL", color: "from-green-500 to-green-600", description: "Database querying and optimization", icon: "📊" },
        { name: "DBMS", color: "from-purple-500 to-purple-600", description: "Database design and administration", icon: "🗄️" },
      ]
    },
    {
      id: "Tools",
      title: "Development Tools",
      icon: "🛠️",
      description: "Development environment and productivity tools",
      skills: [
        { name: "Git/GitHub", color: "from-gray-500 to-gray-600", description: "Version control and collaboration", icon: "📚" },
        { name: "IntelliJ IDEA", color: "from-blue-500 to-blue-600", description: "Java IDE and development environment", icon: "💡" },
        { name: "VS Code", color: "from-purple-500 to-purple-600", description: "Multi-language code editor", icon: "💻" },
        { name: "Postman", color: "from-orange-500 to-orange-600", description: "API testing and development", icon: "📮" },
        { name: "Jenkins", color: "from-red-500 to-red-600", description: "CI/CD pipeline automation", icon: "🔧" },
        { name: "Argo CD", color: "from-teal-500 to-teal-600", description: "GitOps continuous deployment", icon: "🚀" },
        { name: "Docker", color: "from-blue-500 to-blue-600", description: "Containerization and deployment", icon: "🐳" },
        { name: "Kubernetes", color: "from-blue-600 to-blue-700", description: "Container orchestration", icon: "⚓" },
        { name: "Maven", color: "from-yellow-500 to-yellow-600", description: "Build automation and dependency management", icon: "🏗️" },
        { name: "Linux/Ubuntu", color: "from-orange-500 to-orange-600", description: "Operating system and server management", icon: "🐧" },
      ]
    }
  ];

  const additionalSkills = [
    { name: "New Relic", icon: "📊", category: "Monitoring" },
    { name: "Grafana", icon: "📈", category: "Visualization" },
    { name: "Prometheus", icon: "🔥", category: "Metrics" },
    { name: "Docker", icon: "🐳", category: "Containerization" },
    { name: "Kubernetes", icon: "☸️", category: "Orchestration" },
    { name: "Linux", icon: "🐧", category: "Operating System" },
    { name: "MacOS", icon: "🍎", category: "Development" },
    { name: "Windows", icon: "🪟", category: "Platform" },
  ];

  const currentCategory = skillCategories.find(cat => cat.id === activeCategory) || skillCategories[0];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Hero Section */}
            <section 
              className="pt-20 pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-gray-100"
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
              A comprehensive showcase of my technical expertise across programming languages, 
              frameworks, and cutting-edge technologies that power modern applications.
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-2">4+</div>
                <div className="text-gray-600 font-medium">Skill Categories</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-purple-600 mb-2">25+</div>
                <div className="text-gray-600 font-medium">Technologies</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-green-600 mb-2">1+</div>
                <div className="text-gray-600 font-medium">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-orange-600 mb-2">100%</div>
                <div className="text-gray-600 font-medium">Dedicated</div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Categories Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white mt-16">
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

        {/* Additional Skills Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 mt-16">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Additional Expertise
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Specialized tools and technologies that enhance my development capabilities
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
              {additionalSkills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 text-center hover:shadow-md transition-shadow duration-300"
                >
                  <div className="w-12 h-12 mx-auto mb-4 bg-blue-100 rounded-lg flex items-center justify-center text-2xl text-blue-600">
                    {skill.icon}
                  </div>
                  <h4 className="text-sm font-bold text-gray-900 mb-1">{skill.name}</h4>
                  <p className="text-xs text-gray-500">{skill.category}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Education & Summary Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white mt-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Professional Summary */}
              <div className="bg-gray-50 rounded-lg p-8 shadow-sm border border-gray-200">
                <div className="flex items-center mb-6">
                  <div 
                    className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 text-xl font-bold mr-6"
                    style={{ marginRight: '24px' }}
                  >
                    💼
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Professional Summary</h3>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Demonstrated ability to design, develop, and optimize backend architectures, 
                  contributing to rapid product iterations and growth. Passionate about learning 
                  new technologies, solving complex backend challenges, and driving system efficiency.
                </p>
              </div>

              {/* Education */}
              <div className="bg-gray-50 rounded-lg p-8 shadow-sm border border-gray-200">
                <div className="flex items-center mb-6">
                  <div 
                    className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-green-600 text-xl font-bold mr-6"
                    style={{ marginRight: '24px' }}
                  >
                    🎓
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Education</h3>
                </div>
                <div className="space-y-6">
                  <div className="border-l-4 border-blue-500 pl-4" style={{ paddingLeft: '16px' }}>
                    <h4 className="text-lg font-bold text-gray-900 mb-1">B.Tech in Information Technology</h4>
                    <p className="text-gray-600 font-medium">Shri G.S. Institute of Technology and Science, Indore</p>
                    <p className="text-gray-500 text-sm">2020 - 2024</p>
                  </div>
                  <div className="border-l-4 border-green-500 pl-4" style={{ paddingLeft: '16px' }}>
                    <h4 className="text-lg font-bold text-gray-900 mb-1">XII (Higher Secondary)</h4>
                    <p className="text-gray-600 font-medium">Ideal Convent H.S. School, Biaora</p>
                    <p className="text-gray-500 text-sm">2018 - 2019</p>
                  </div>
                </div>
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
