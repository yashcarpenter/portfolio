"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { name: "About", href: "/about" },
    { name: "Work", href: "/work" },
    { name: "Skills", href: "/skills" },
    { name: "Contact", href: "/contact" },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/50" 
          : "bg-white/80 backdrop-blur-sm border-b border-gray-200/30"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
              <div className="flex-shrink-0">
                <Link
                  href="/"
                  className="group text-2xl font-bold text-gray-900 hover:text-blue-600 transition-all duration-300 transform hover:scale-105"
                >
                  <span className="relative">
                    Yash Carpenter
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </Link>
              </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="group relative px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 rounded-lg hover:bg-blue-50/50"
              >
                <span className="relative z-10">{item.name}</span>
                <span className="absolute inset-0 bg-blue-100 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 ease-out"></span>
                <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:left-0 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative p-2 text-gray-700 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-lg transition-all duration-300 hover:bg-gray-100"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 relative">
                <span 
                  className={`absolute top-1 left-0 w-6 h-0.5 bg-current transition-all duration-300 ${
                    isMenuOpen ? "rotate-45 translate-y-2" : "translate-y-0"
                  }`}
                ></span>
                <span 
                  className={`absolute top-3 left-0 w-6 h-0.5 bg-current transition-all duration-300 ${
                    isMenuOpen ? "opacity-0" : "opacity-100"
                  }`}
                ></span>
                <span 
                  className={`absolute top-5 left-0 w-6 h-0.5 bg-current transition-all duration-300 ${
                    isMenuOpen ? "-rotate-45 -translate-y-2" : "translate-y-0"
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-sm border-t border-gray-200/50 rounded-b-lg shadow-lg">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className="group block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg font-medium transition-all duration-300 transform hover:translate-x-2"
                onClick={() => setIsMenuOpen(false)}
                style={{
                  animationDelay: `${index * 100}ms`,
                  animation: isMenuOpen ? "slideInDown 0.3s ease-out forwards" : "none"
                }}
              >
                <span className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  {item.name}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}