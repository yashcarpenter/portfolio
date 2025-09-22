"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function AboutPage() {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { ref: storyRef, isVisible: storyVisible } = useScrollAnimation();
  const { ref: valuesRef, isVisible: valuesVisible } = useScrollAnimation();
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation();

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Hero Section */}
            <section 
              ref={heroRef}
              className={`pt-20 pb-4 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-gray-100 relative overflow-hidden transition-all duration-1000 ${
                heroVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ paddingTop: '80px' }}
            >
              {/* Background Animation Elements */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
                <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" style={{ animationDelay: '2s' }}></div>
                <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" style={{ animationDelay: '4s' }}></div>
              </div>
              
              <div className="max-w-7xl mx-auto text-center relative z-10">
                <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 text-sm font-semibold mb-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></div>
                  About Me
                </div>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
                  Get to Know
                  <span className="block text-blue-600 mt-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-gradient-shift">Yash Carpenter</span>
                </h1>
                <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
                  Crafting enterprise-grade backend solutions that power millions of transactions. 
                  Specializing in microservices architecture, high-performance APIs, and scalable system design.
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
        <section 
          ref={storyRef}
          className={`py-8 px-4 sm:px-6 lg:px-8 bg-white mt-16 transition-all duration-1000 ${
            storyVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Personal Info */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6 group">
                    <span className="relative">
                      My Story
                      <span className="absolute -bottom-2 left-0 w-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-500"></span>
                    </span>
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    I&apos;m Yash Carpenter, a passionate backend developer with 1+ years of experience crafting 
                    enterprise-grade, scalable systems that power millions of transactions. I graduated with distinction 
                    in 2024 from Shri G.S. Institute of Technology and Science, Indore, with a Bachelor of Technology 
                    in Information Technology.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    My professional journey began with a transformative internship at Groww, India&apos;s leading 
                    investment platform, where I contributed to backend systems handling millions of users. This 
                    experience led to my current role as a Software Development Engineer at Volt Money, where I 
                    architect and develop robust financial technology solutions that process high-volume transactions 
                    with 99.9% uptime.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed">
                  When I&apos;m not coding, you&apos;ll find me watching movies, hanging out or playing games.
                  </p>
                </div>

                {/* Key Highlights */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-6 bg-gray-50 rounded-lg group hover:bg-gradient-to-br hover:from-blue-50 hover:to-purple-50 transition-all duration-500 hover:scale-105 hover:shadow-lg cursor-pointer">
                    <div className="text-3xl font-bold text-blue-600 mb-2 group-hover:text-purple-600 transition-colors duration-300">1+</div>
                    <div className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">Years Experience</div>
                  </div>
                  <div className="text-center p-6 bg-gray-50 rounded-lg group hover:bg-gradient-to-br hover:from-blue-50 hover:to-purple-50 transition-all duration-500 hover:scale-105 hover:shadow-lg cursor-pointer">
                    <div className="text-3xl font-bold text-blue-600 mb-2 group-hover:text-purple-600 transition-colors duration-300">500+</div>
                    <div className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">DSA Problems Solved</div>
                  </div>
                  <div className="text-center p-6 bg-gray-50 rounded-lg group hover:bg-gradient-to-br hover:from-blue-50 hover:to-purple-50 transition-all duration-500 hover:scale-105 hover:shadow-lg cursor-pointer">
                    <div className="text-3xl font-bold text-blue-600 mb-2 group-hover:text-purple-600 transition-colors duration-300">5+</div>
                    <div className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">Projects Built</div>
                  </div>
                  <div className="text-center p-6 bg-gray-50 rounded-lg group hover:bg-gradient-to-br hover:from-blue-50 hover:to-purple-50 transition-all duration-500 hover:scale-105 hover:shadow-lg cursor-pointer">
                    <div className="text-3xl font-bold text-blue-600 mb-2 group-hover:text-purple-600 transition-colors duration-300">1700+</div>
                    <div className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">CP Rating</div>
                  </div>
                </div>
              </div>

                  {/* Profile Image Placeholder */}
                  <div className="flex justify-center">
                <div className="w-80 h-80 bg-gradient-to-br from-blue-100 to-purple-200 rounded-full flex items-center justify-center group hover:scale-105 transition-all duration-500 hover:shadow-2xl cursor-pointer">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform duration-500">
                      <span className="text-4xl font-bold text-white">YC</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">Yash Carpenter</h3>
                    <p className="text-gray-600 group-hover:text-purple-600 transition-colors duration-300">Backend Developer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

            {/* Values & Approach Section */}
            <section 
              ref={valuesRef}
              className={`py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 mt-16 transition-all duration-1000 ${
                valuesVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6 group">
                <span className="relative">
                  My Values & Approach
                  <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-32 transition-all duration-500"></span>
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The principles that guide my work and drive my passion for technology
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 group hover:shadow-xl hover:scale-105 transition-all duration-500 cursor-pointer">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-500">
                  <svg className="w-8 h-8 text-blue-600 group-hover:text-purple-600 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">Innovation</h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                  I believe in pushing boundaries and finding creative solutions to complex problems. 
                  Every project is an opportunity to learn and innovate.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 group hover:shadow-xl hover:scale-105 transition-all duration-500 cursor-pointer">
                <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-blue-100 rounded-full flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-500">
                  <svg className="w-8 h-8 text-green-600 group-hover:text-blue-600 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors duration-300">Performance</h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                  I&apos;m obsessed with building fast, efficient systems that can handle scale. 
                  Performance optimization is at the core of everything I build.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 group hover:shadow-xl hover:scale-105 transition-all duration-500 cursor-pointer">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-500">
                  <svg className="w-8 h-8 text-purple-600 group-hover:text-pink-600 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors duration-300">Learning</h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                  Technology evolves rapidly, and I&apos;m committed to staying current. 
                  Continuous learning is not just a habit, it&apos;s a way of life.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 group hover:shadow-xl hover:scale-105 transition-all duration-500 cursor-pointer">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-red-100 rounded-full flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-500">
                  <svg className="w-8 h-8 text-orange-600 group-hover:text-red-600 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors duration-300">Collaboration</h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                  Great software is built by great teams. I value open communication, 
                  knowledge sharing, and working together towards common goals.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 group hover:shadow-xl hover:scale-105 transition-all duration-500 cursor-pointer">
                <div className="w-16 h-16 bg-gradient-to-br from-red-100 to-pink-100 rounded-full flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-500">
                  <svg className="w-8 h-8 text-red-600 group-hover:text-pink-600 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-red-600 transition-colors duration-300">Quality</h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                  I believe in writing clean, maintainable code that stands the test of time. 
                  Quality is never an accident; it&apos;s always the result of intention.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 group hover:shadow-xl hover:scale-105 transition-all duration-500 cursor-pointer">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-100 to-blue-100 rounded-full flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-500">
                  <svg className="w-8 h-8 text-teal-600 group-hover:text-blue-600 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-teal-600 transition-colors duration-300">Growth</h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                  I&apos;m always looking for ways to improve, both personally and professionally. 
                  Growth comes from stepping outside comfort zones and embracing challenges.
                </p>
              </div>
            </div>
          </div>
        </section>

            {/* Call to Action with Education */}
            <section 
              ref={ctaRef}
              className={`py-24 px-4 sm:px-6 lg:px-8 bg-white mt-0 transition-all duration-1000 ${
                ctaVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="max-w-7xl mx-auto">
                {/* Education Section */}
                <div className="mb-16">
                  <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                      Education
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                      My academic journey and educational background
                    </p>
                  </div>

                  <div className="max-w-4xl mx-auto">
                    <div className="bg-gray-50 rounded-lg p-8 shadow-sm border border-gray-200">
                      <div className="space-y-8">
                        <div className="border-l-4 border-blue-500 pl-6" style={{ paddingLeft: '16px' }}>
                          <h3 className="text-xl font-bold text-gray-900 mb-2">B.Tech in Information Technology</h3>
                          <p className="text-gray-600 font-medium mb-1">Shri G.S. Institute of Technology and Science, Indore</p>
                          <p className="text-gray-500 text-sm">2020 - 2024</p>
                          <p className="text-gray-600 mt-3 leading-relaxed">
                            Graduated with distinction in Information Technology
                          </p>
                        </div>
                        
                        <div className="border-l-4 border-green-500 pl-6" style={{ paddingLeft: '16px' }}>
                          <h3 className="text-xl font-bold text-gray-900 mb-2">XII (Higher Secondary)</h3>
                          <p className="text-gray-600 font-medium mb-1">Ideal Convent H.S. School, Biaora</p>
                          <p className="text-gray-500 text-sm">2018 - 2019</p>
                          <p className="text-gray-600 mt-3 leading-relaxed">
                            Completed higher secondary education with focus on science and mathematics, 
                            laying the foundation for technical studies and problem-solving skills.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Ready to Work Together */}
                <div className="max-w-4xl mx-auto text-center">
                  <h2 className="text-4xl font-bold text-gray-900 mb-6 group">
                    <span className="relative">
                      Ready to Work Together?
                      <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-64 transition-all duration-500"></span>
                    </span>
                  </h2>
                  <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                    I&apos;m always excited to take on new challenges and collaborate on interesting projects. 
                    Let&apos;s discuss how we can bring your ideas to life.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                      href="/work"
                      className="group inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
                    >
                      <span className="group-hover:translate-x-1 transition-transform duration-300">View My Work</span>
                      <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </a>
                    <a
                      href="/contact"
                      className="group inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-md border-2 border-blue-600 hover:bg-blue-50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
                    >
                      <svg className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                      <span className="group-hover:translate-x-1 transition-transform duration-300">Get In Touch</span>
                    </a>
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
