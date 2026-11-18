export interface Skill {
  name: string;
  /** Tailwind gradient stops for the icon tile, e.g. "from-orange-500 to-orange-600". */
  color: string;
  description: string;
  icon: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  icon: string;
  description: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
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

/** Every skill once (first occurrence wins), e.g. for the scrolling rows. */
export const uniqueSkills: Skill[] = Array.from(new Map(skillCategories.flatMap((c) => c.skills).map((s) => [s.name, s])).values());
