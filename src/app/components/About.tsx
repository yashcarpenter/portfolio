export default function About() {
  const experience = [
    {
      year: "Dec 2024 - Present",
      title: "Software Developer Engineer",
      company: "Volt Money",
      location: "Bengaluru, India",
      description: "Backend Developer utilizing Java, Spring Boot, PostgreSQL, AWS, and other backend technologies to develop, deploy, and maintain scalable microservices, ensuring high system availability, performance, and resilience.",
      achievements: [
        "Owned and managed multiple microservices within the Lending Stack Team (DSP)",
        "Integrated with PhonePe's Loan Against Mutual Fund (LAMF) flow",
        "Built secure, real-time APIs for end-to-end repayment lifecycle"
      ]
    },
    {
      year: "Jan 2024 - Jul 2024",
      title: "Software Engineer Intern",
      company: "Groww",
      location: "Bengaluru, India",
      description: "Developed centralized repository using Spring Boot, MySQL, Prometheus and GCP APIs, reducing dependency failure resolution time by 30%.",
      achievements: [
        "Architected MySQL schema with advanced indexing and partitioning, lowering query execution time by 40%",
        "Implemented session termination feature in logout flow, improving security compliance by 25%",
        "Integrated services with Argo, reducing deployment time by 35%",
        "Developed APIs and optimized code, resulting in 20% increase in processing speed"
      ]
    }
  ];

  const skills = [
    { name: "Java", level: 90, color: "from-orange-400 to-orange-600" },
    { name: "Spring Boot", level: 85, color: "from-green-400 to-green-600" },
    { name: "MySQL", level: 80, color: "from-blue-400 to-blue-600" },
    { name: "PostgreSQL", level: 75, color: "from-purple-400 to-purple-600" },
    { name: "AWS", level: 70, color: "from-yellow-400 to-yellow-600" },
    { name: "Redis", level: 80, color: "from-red-400 to-red-600" }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 text-sm font-medium mb-6">
            About Me
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Professional Experience
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Backend Developer with hands-on experience in building scalable and high-performance systems in fast-paced startup environments.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Content - Experience Timeline */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Work Experience</h3>
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-300"></div>
              
              {experience.map((item, index) => (
                <div key={index} className="relative flex items-start space-x-6 mb-8">
                  {/* Timeline Dot */}
                  <div className="relative z-10 flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-md">
                          {item.year}
                        </span>
                      </div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h4>
                      <p className="text-sm font-medium text-gray-600 mb-2">{item.company} • {item.location}</p>
                      <p className="text-gray-600 leading-relaxed mb-4">{item.description}</p>
                      
                      {/* Achievements */}
                      <ul className="space-y-2">
                        {item.achievements.map((achievement, idx) => (
                          <li key={idx} className="text-sm text-gray-600 flex items-center">
                            <span className="w-1.5 h-1.5 bg-gray-400 rounded-full bullet-margin flex-shrink-0 mt-0.5"></span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Skills & Summary */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Technical Skills</h3>
            
            {/* Skills Progress Bars */}
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-sm font-semibold text-gray-700">{skill.name}</span>
                    <span className="text-sm text-gray-500 font-medium">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                      style={{ 
                        width: `${skill.level}%`,
                        animationDelay: `${index * 200}ms`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Summary */}
            <div className="mt-8 p-6 bg-white rounded-lg border border-gray-200">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Summary</h4>
              <p className="text-gray-600 leading-relaxed">
                Demonstrated ability to design, develop, and optimize backend architectures, contributing to rapid product iterations and growth. 
                Passionate about learning new technologies, solving complex backend challenges, and driving system efficiency.
              </p>
            </div>

            {/* Education */}
            <div className="mt-8 p-6 bg-white rounded-lg border border-gray-200">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Education</h4>
              <div className="space-y-3">
                <div>
                  <h5 className="font-medium text-gray-900">Bachelor of Technology in Information Technology</h5>
                  <p className="text-sm text-gray-600">Shri G.S. Institute of Technology and Science, Indore</p>
                  <p className="text-sm text-gray-500">2020 - 2024</p>
                </div>
                <div>
                  <h5 className="font-medium text-gray-900">XII</h5>
                  <p className="text-sm text-gray-600">Ideal Convent H.S. School, Biaora</p>
                  <p className="text-sm text-gray-500">2018 - 2019</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}