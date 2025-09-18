"use client";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        
        {/* Quick Overview Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 mt-16">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                What I Do
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                I specialize in building robust, scalable backend systems that power exceptional digital experiences.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-8 bg-white rounded-lg shadow-sm border border-gray-200">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Backend Development</h3>
                <p className="text-gray-600 leading-relaxed">
                  Building scalable microservices, APIs, and database architectures using Java, Spring Boot, and modern cloud technologies.
                </p>
              </div>

              <div className="text-center p-8 bg-white rounded-lg shadow-sm border border-gray-200">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Performance Optimization</h3>
                <p className="text-gray-600 leading-relaxed">
                  Optimizing system performance, reducing response times, and ensuring high availability for mission-critical applications.
                </p>
              </div>

              <div className="text-center p-8 bg-white rounded-lg shadow-sm border border-gray-200">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">System Architecture</h3>
                <p className="text-gray-600 leading-relaxed">
                  Designing and implementing robust system architectures that can handle scale and growth while maintaining reliability.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Stats */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white mt-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">1+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">5+</div>
                <div className="text-gray-600">Projects Built</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
                <div className="text-gray-600">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
                <div className="text-gray-600">Dedication</div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 mt-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Let's discuss your project and explore how we can work together to bring your ideas to life.
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
