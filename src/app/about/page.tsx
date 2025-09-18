"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";

export default function AboutPage() {
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
              About Me
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
              Get to Know
              <span className="block text-blue-600 mt-2">Yash Carpenter</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
              A passionate backend developer with a love for building scalable systems and solving complex problems.
            </p>
            
            {/* Quick Stats */}
            {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-2">1+</div>
                <div className="text-gray-600 font-medium">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-purple-600 mb-2">5+</div>
                <div className="text-gray-600 font-medium">Projects Built</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-green-600 mb-2">100%</div>
                <div className="text-gray-600 font-medium">Dedicated</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-orange-600 mb-2">24/7</div>
                <div className="text-gray-600 font-medium">Passionate</div>
              </div>
            </div> */}
          </div>
        </section>

        {/* Personal Story Section */}
        <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white mt-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Personal Info */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">My Story</h2>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    I&apos;m Yash Carpenter, a passionate backend developer with 1+ years of experience in building 
                    scalable and high-performance systems. My journey in technology started with a curiosity 
                    about how things work behind the scenes, which led me to specialize in backend development.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    I believe in the power of clean code, robust architecture, and continuous learning. 
                    My experience spans across startups and fast-paced environments where I&apos;ve learned to 
                    adapt quickly and deliver solutions that make a real impact.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    When I&apos;m not coding, you&apos;ll find me exploring new technologies, contributing to open-source 
                    projects, or sharing knowledge with the developer community.
                  </p>
                </div>

                {/* Key Highlights */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-6 bg-gray-50 rounded-lg">
                    <div className="text-3xl font-bold text-blue-600 mb-2">1+</div>
                    <div className="text-gray-600">Years Experience</div>
                  </div>
                  <div className="text-center p-6 bg-gray-50 rounded-lg">
                    <div className="text-3xl font-bold text-blue-600 mb-2">5+</div>
                    <div className="text-gray-600">Projects Built</div>
                  </div>
                  <div className="text-center p-6 bg-gray-50 rounded-lg">
                    <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
                    <div className="text-gray-600">Dedicated</div>
                  </div>
                  <div className="text-center p-6 bg-gray-50 rounded-lg">
                    <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
                    <div className="text-gray-600">Learning</div>
                  </div>
                </div>
              </div>

              {/* Profile Image Placeholder */}
              <div className="flex justify-center">
                <div className="w-80 h-80 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-4xl font-bold text-white">YC</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Yash Carpenter</h3>
                    <p className="text-gray-600">Backend Developer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values & Approach Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 mt-16">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">My Values & Approach</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The principles that guide my work and drive my passion for technology
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Innovation</h3>
                <p className="text-gray-600 leading-relaxed">
                  I believe in pushing boundaries and finding creative solutions to complex problems. 
                  Every project is an opportunity to learn and innovate.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Performance</h3>
                <p className="text-gray-600 leading-relaxed">
                  I&apos;m obsessed with building fast, efficient systems that can handle scale. 
                  Performance optimization is at the core of everything I build.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Learning</h3>
                <p className="text-gray-600 leading-relaxed">
                  Technology evolves rapidly, and I&apos;m committed to staying current. 
                  Continuous learning is not just a habit, it&apos;s a way of life.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Collaboration</h3>
                <p className="text-gray-600 leading-relaxed">
                  Great software is built by great teams. I value open communication, 
                  knowledge sharing, and working together towards common goals.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Quality</h3>
                <p className="text-gray-600 leading-relaxed">
                  I believe in writing clean, maintainable code that stands the test of time. 
                  Quality is never an accident; it&apos;s always the result of intention.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Growth</h3>
                <p className="text-gray-600 leading-relaxed">
                  I&apos;m always looking for ways to improve, both personally and professionally. 
                  Growth comes from stepping outside comfort zones and embracing challenges.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white mt-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Ready to Work Together?
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              I&apos;m always excited to take on new challenges and collaborate on interesting projects. 
              Let&apos;s discuss how we can bring your ideas to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/work"
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors duration-200"
              >
                View My Work
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-md border-2 border-blue-600 hover:bg-blue-50 transition-colors duration-200"
              >
                Get In Touch
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
