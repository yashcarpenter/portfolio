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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        isScrolled 
          ? "bg-white/95 backdrop-blur-md shadow-xl border-b border-gray-200/50 transform -translate-y-0" 
          : "bg-white/80 backdrop-blur-sm border-b border-gray-200/30 transform -translate-y-0"
      }`}
      style={{
        backdropFilter: isScrolled ? 'blur(12px)' : 'blur(8px)',
        WebkitBackdropFilter: isScrolled ? 'blur(12px)' : 'blur(8px)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
              <div className="flex-shrink-0">
                <Link
                  href="/"
                  className="group text-2xl font-bold text-gray-900 hover:text-blue-600 transition-all duration-500 transform hover:scale-105 relative overflow-hidden"
                >
                  <span className="relative z-10">
                    Yash Carpenter
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-500 group-hover:w-full"></span>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform scale-x-0 group-hover:scale-x-100 origin-left"></div>
                </Link>
              </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="group relative px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition-all duration-500 rounded-lg hover:bg-blue-50/50 overflow-hidden"
              >
                <span className="relative z-10 group-hover:translate-x-1 transition-transform duration-300">{item.name}</span>
                <span className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-500 ease-out"></span>
                <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-500 group-hover:left-0 group-hover:w-full"></span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="group relative p-2 text-gray-700 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-lg transition-all duration-500 hover:bg-gray-100 hover:scale-110"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 relative">
                <span 
                  className={`absolute top-1 left-0 w-6 h-0.5 bg-current transition-all duration-500 ease-out ${
                    isMenuOpen ? "rotate-45 translate-y-2" : "translate-y-0"
                  }`}
                ></span>
                <span 
                  className={`absolute top-3 left-0 w-6 h-0.5 bg-current transition-all duration-500 ease-out ${
                    isMenuOpen ? "opacity-0 scale-x-0" : "opacity-100 scale-x-100"
                  }`}
                ></span>
                <span 
                  className={`absolute top-5 left-0 w-6 h-0.5 bg-current transition-all duration-500 ease-out ${
                    isMenuOpen ? "-rotate-45 -translate-y-2" : "translate-y-0"
                  }`}
                ></span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-500 ease-out ${
            isMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-sm border-t border-gray-200/50 rounded-b-lg shadow-xl">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="group block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 rounded-lg font-medium transition-all duration-500 transform hover:translate-x-2 hover:scale-105 relative overflow-hidden"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="flex items-center relative z-10">
                  <span className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-125"></span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">{item.name}</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-x-0 group-hover:scale-x-100 origin-left"></div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}