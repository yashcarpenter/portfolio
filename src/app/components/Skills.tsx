export default function Skills() {
  const skillCategories = [
    {
      title: "Programming & Development",
      icon: "💻",
      skills: [
        { name: "Java", level: 90, color: "from-orange-400 to-orange-600" },
        { name: "C", level: 85, color: "from-blue-400 to-blue-600" },
        { name: "C++", level: 80, color: "from-purple-400 to-purple-600" },
        { name: "Data Structures & Algorithms", level: 85, color: "from-green-400 to-green-600" },
        { name: "OOPs", level: 90, color: "from-teal-400 to-teal-600" },
        { name: "JavaScript", level: 75, color: "from-yellow-400 to-yellow-600" },
        { name: "HTML", level: 80, color: "from-red-400 to-red-600" },
        { name: "CSS", level: 75, color: "from-pink-400 to-pink-600" }
      ]
    },
    {
      title: "Frameworks & Tools",
      icon: "⚙️",
      skills: [
        { name: "Spring Boot", level: 90, color: "from-green-400 to-green-600" },
        { name: "Redis", level: 80, color: "from-red-400 to-red-600" },
        { name: "Kafka", level: 75, color: "from-purple-400 to-purple-600" },
        { name: "Hibernate", level: 85, color: "from-blue-400 to-blue-600" },
        { name: "Bootstrap", level: 70, color: "from-indigo-400 to-indigo-600" },
        { name: "Git/GitHub", level: 90, color: "from-gray-400 to-gray-600" },
        { name: "Jenkins", level: 80, color: "from-orange-400 to-orange-600" },
        { name: "Argo (CI/CD)", level: 75, color: "from-cyan-400 to-cyan-600" },
        { name: "Postman", level: 85, color: "from-yellow-400 to-yellow-600" },
        { name: "IntelliJ", level: 90, color: "from-blue-400 to-blue-600" },
        { name: "VS Code", level: 85, color: "from-cyan-400 to-cyan-600" }
      ]
    },
    {
      title: "Databases & Cloud",
      icon: "🗄️",
      skills: [
        { name: "MySQL", level: 85, color: "from-blue-400 to-blue-600" },
        { name: "SQL", level: 90, color: "from-indigo-400 to-indigo-600" },
        { name: "DBMS", level: 85, color: "from-purple-400 to-purple-600" },
        { name: "PostgreSQL", level: 80, color: "from-cyan-400 to-cyan-600" },
        { name: "GCP", level: 75, color: "from-green-400 to-green-600" },
        { name: "AWS", level: 70, color: "from-orange-400 to-orange-600" },
        { name: "Sequel Ace", level: 80, color: "from-pink-400 to-pink-600" }
      ]
    },
    {
      title: "Monitoring & OS",
      icon: "📊",
      skills: [
        { name: "New Relic", level: 80, color: "from-green-400 to-green-600" },
        { name: "Grafana", level: 75, color: "from-orange-400 to-orange-600" },
        { name: "Prometheus", level: 80, color: "from-red-400 to-red-600" },
        { name: "MacOS", level: 90, color: "from-gray-400 to-gray-600" },
        { name: "Windows", level: 85, color: "from-blue-400 to-blue-600" },
        { name: "Linux", level: 80, color: "from-yellow-400 to-yellow-600" },
        { name: "Ubuntu", level: 75, color: "from-orange-400 to-orange-600" }
      ]
    }
  ];

  const additionalSkills = [
    { name: "RESTful APIs", icon: "🔗", color: "from-blue-500 to-blue-600" },
    { name: "Microservices", icon: "🏗️", color: "from-green-500 to-green-600" },
    { name: "JWT Authentication", icon: "🔐", color: "from-purple-500 to-purple-600" },
    { name: "Error Handling", icon: "⚠️", color: "from-red-500 to-red-600" },
    { name: "API Testing", icon: "🧪", color: "from-yellow-500 to-yellow-600" },
    { name: "Data Validation", icon: "✅", color: "from-green-500 to-green-600" },
    { name: "Environment Config", icon: "⚙️", color: "from-gray-500 to-gray-600" },
    { name: "Code Documentation", icon: "📚", color: "from-blue-500 to-blue-600" },
    { name: "Version Control", icon: "📝", color: "from-orange-500 to-orange-600" },
    { name: "Debugging", icon: "🐛", color: "from-red-500 to-red-600" },
    { name: "Problem Solving", icon: "💡", color: "from-yellow-500 to-yellow-600" },
    { name: "System Design", icon: "🏛️", color: "from-indigo-500 to-indigo-600" }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-md bg-blue-100 text-blue-700 text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
            Skills & Expertise
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Technical Mastery
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A comprehensive overview of my technical skills and expertise across different domains
          </p>
        </div>

        {/* Skills Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-white rounded-lg p-8 shadow-sm border border-gray-200"
            >
              {/* Category Header */}
              <div className="text-center mb-8">
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-lg flex items-center justify-center text-3xl">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{category.title}</h3>
              </div>

              {/* Skills Progress Bars */}
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-sm font-semibold text-gray-700">{skill.name}</span>
                      <span className="text-sm text-gray-500 font-medium">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{ 
                          width: `${skill.level}%`,
                          animationDelay: `${skillIndex * 200}ms`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Grid */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Additional Expertise</h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Specialized skills and methodologies that enhance my development capabilities
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
          {additionalSkills.map((skill, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 text-center hover:shadow-md transition-shadow duration-300"
            >
              <div className={`w-12 h-12 mx-auto mb-3 bg-gradient-to-r ${skill.color} rounded-lg flex items-center justify-center text-xl`}>
                {skill.icon}
              </div>
              <span className="text-sm font-semibold text-gray-700">
                {skill.name}
              </span>
            </div>
          ))}
        </div>

        {/* Skills Summary */}
        <div className="bg-white rounded-lg p-8 border border-gray-200">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Choose My Skills?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-lg flex items-center justify-center text-2xl">
                  🚀
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Performance Focused</h4>
                <p className="text-gray-600">Optimized solutions with 20-40% performance improvements</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-lg flex items-center justify-center text-2xl">
                  🔧
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Modern Technologies</h4>
                <p className="text-gray-600">Expertise in latest frameworks and cloud technologies</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-purple-100 rounded-lg flex items-center justify-center text-2xl">
                  📈
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Scalable Solutions</h4>
                <p className="text-gray-600">Built systems handling 10,000+ users efficiently</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}