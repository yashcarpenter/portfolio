"use client";

import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send to an API endpoint)
    console.log("Form submitted:", formData);
    alert("Thank you for your message! I'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

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
              Get In Touch
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
              Let's Work
              <span className="block text-blue-600 mt-2">Together</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
              Ready to build something amazing? I'm always interested in new opportunities and exciting projects. 
              Let's discuss how we can bring your ideas to life.
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-2">24h</div>
                <div className="text-gray-600 font-medium">Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-purple-600 mb-2">100%</div>
                <div className="text-gray-600 font-medium">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-green-600 mb-2">Free</div>
                <div className="text-gray-600 font-medium">Consultation</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-orange-600 mb-2">24/7</div>
                <div className="text-gray-600 font-medium">Available</div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information & Form */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white mt-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>
                  <p className="text-lg text-gray-600 leading-relaxed mb-8">
                    Feel free to reach out through any of these channels. I typically respond within 24 hours.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                      <p className="text-gray-600">yashcarpenter@outlook.com</p>
                      <a href="mailto:yashcarpenter@outlook.com" className="text-blue-600 hover:text-blue-700 transition-colors">
                        Send me an email
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Phone</h3>
                      <p className="text-gray-600">+91 7693858303</p>
                      <a href="tel:+917693858303" className="text-blue-600 hover:text-blue-700 transition-colors">
                        Call me
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Location</h3>
                      <p className="text-gray-600">Bengaluru, India</p>
                      <p className="text-sm text-gray-500">Open to remote work</p>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="pt-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Connect with me</h3>
                  <div className="flex space-x-4">
                    <a
                      href="https://github.com/yashcarpenter"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 hover:text-gray-900 transition-colors duration-200"
                      aria-label="GitHub"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                    <a
                      href="https://linkedin.com/in/yashcarpenter"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 hover:text-gray-900 transition-colors duration-200"
                      aria-label="LinkedIn"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Resume Download */}
                <div className="resume-download-section" style={{
                  background: 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)',
                  borderRadius: '12px',
                  padding: '24px',
                  border: '1px solid #bfdbfe',
                  marginTop: '32px'
                }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                    <div style={{
                      width: '48px',
                      height: '48px',
                      backgroundColor: '#dbeafe',
                      borderRadius: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <svg style={{ width: '24px', height: '24px', color: '#2563eb' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div style={{ flex: 1 }}>
                      <h4 style={{
                        fontSize: '18px',
                        fontWeight: '600',
                        color: '#111827',
                        marginBottom: '8px',
                        margin: '0 0 8px 0'
                      }}>Download Resume</h4>
                      <p style={{
                        color: '#6b7280',
                        marginBottom: '16px',
                        margin: '0 0 16px 0',
                        lineHeight: '1.5'
                      }}>Get a copy of my detailed resume with all my experience and skills</p>
                      <div className="resume-buttons-container" style={{ 
                        display: 'flex', 
                        flexDirection: 'column', 
                        gap: '12px'
                      }}>
                        <a
                          href="https://drive.google.com/file/d/1vebeRj4MYRGcwlWqVaQ2UF0Enl71wO0z/view?usp=drive_link"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '12px 24px',
                            backgroundColor: '#2563eb',
                            color: '#ffffff',
                            fontWeight: '600',
                            borderRadius: '6px',
                            textDecoration: 'none',
                            transition: 'all 0.3s ease',
                            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                            transform: 'scale(1)',
                            border: 'none'
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = '#1d4ed8';
                            e.currentTarget.style.transform = 'scale(1.05)';
                            e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = '#2563eb';
                            e.currentTarget.style.transform = 'scale(1)';
                            e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
                          }}
                        >
                          <svg style={{ width: '20px', height: '20px', marginRight: '8px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                          View Resume
                        </a>
                        <a
                          href="https://drive.google.com/uc?export=download&id=1vebeRj4MYRGcwlWqVaQ2UF0Enl71wO0z"
                          download="Yash_Carpenter_Resume.pdf"
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '12px 24px',
                            backgroundColor: '#ffffff',
                            color: '#2563eb',
                            fontWeight: '600',
                            borderRadius: '6px',
                            textDecoration: 'none',
                            transition: 'all 0.2s ease',
                            border: '2px solid #2563eb'
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = '#eff6ff';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = '#ffffff';
                          }}
                        >
                          <svg style={{ width: '20px', height: '20px', marginRight: '8px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                          </svg>
                          Download PDF
                        </a>
                      </div>
                      <p style={{
                        fontSize: '14px',
                        color: '#6b7280',
                        marginTop: '12px',
                        margin: '12px 0 0 0',
                        display: 'flex',
                        alignItems: 'center'
                      }}>
                        <svg style={{ width: '16px', height: '16px', marginRight: '4px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Last updated: August 2025
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Send me a message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="What's this about?"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none"
                      placeholder="Tell me about your project or opportunity..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors duration-200"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Info Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 mt-16">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Let's Discuss Your Project
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                I'm always excited to work on new projects and challenges. Whether you have a specific project in mind 
                or just want to discuss possibilities, I'd love to hear from you.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-200">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Quick Response</h3>
                <p className="text-gray-600">I typically respond to all inquiries within 24 hours</p>
              </div>

              <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-200">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Free Consultation</h3>
                <p className="text-gray-600">Initial project discussion and planning is always free</p>
              </div>

              <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-200">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Flexible Hours</h3>
                <p className="text-gray-600">Available for projects across different time zones</p>
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
