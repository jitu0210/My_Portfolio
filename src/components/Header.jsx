import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Set active link based on pathname
  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const navLinks = [
    { path: "/", label: "Home", icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" },
    { path: "/about", label: "About", icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" },
    { path: "/skills", label: "Skills", icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" },
    { path: "/projects", label: "Projects", icon: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" },
    { path: "/certificates", label: "Certificates", icon: "M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" },
    { path: "/contact", label: "Contact", icon: "M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0a0a0f]/95 backdrop-blur-xl border-b border-purple-500/20 shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
          : "bg-[#0a0a0f]/80 backdrop-blur-md border-b border-purple-900/30"
      }`}
    >
      {/* Animated gradient line at top */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-purple-500 to-transparent animate-gradient-x" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo with animation */}
          <Link
            to="/"
            className="relative group"
          >
            {/* Glow effect */}
            <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 to-purple-400 rounded-lg blur opacity-0" />
            
            {/* Logo text */}
            <div className="relative flex items-center gap-1">
              <span className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600">
                &lt;Jitu
              </span>
              <span className="text-2xl md:text-3xl font-bold text-purple-400 animate-pulse-slow">
                /
              </span>
              <span className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-400">
                &gt;
              </span>
            </div>

            {/* Code bracket decoration */}
            <div className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-4 py-2 rounded-lg transition-all duration-300 group ${
                  activeLink === link.path
                    ? "text-purple-400"
                    : "text-gray-300 hover:text-purple-400"
                }`}
              >
                {/* Background effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 to-purple-400/0 group-hover:from-purple-600/10 group-hover:to-purple-400/10 rounded-lg transition-all duration-300" />
                
                {/* Active indicator */}
                {activeLink === link.path && (
                  <div className="absolute -bottom-[2px] left-0 w-full h-[2px] bg-gradient-to-r from-purple-600 to-purple-400 rounded-full animate-pulse-slow" />
                )}

                {/* Icon and label */}
                <div className="relative flex items-center gap-2">
                  <svg
                    className={`w-4 h-4 transition-transform duration-300 group-hover:scale-110 ${
                      activeLink === link.path ? "text-purple-400" : "text-gray-400"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={link.icon} />
                  </svg>
                  <span className="text-sm font-medium">{link.label}</span>
                </div>

                {/* Hover tooltip effect */}
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-900 text-purple-400 text-xs rounded border border-purple-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
                  {link.label}
                </div>
              </Link>
            ))}
          </nav>

          {/* Right side - Action buttons (Desktop) */}
          <div className="hidden lg:flex items-center gap-3">
            {/* GitHub button */}
            <a
              href="https://github.com/jitu0210"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-400 rounded-lg blur opacity-0 group-hover:opacity-50 transition duration-300" />
              <div className="relative w-9 h-9 bg-purple-500/5 border border-purple-500/20 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:border-purple-500/40 hover:bg-purple-500/10 transition-all duration-300">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </div>
            </a>

            {/* LinkedIn button */}
            <a
              href="https://linkedin.com/in/jitukumar0210"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg blur opacity-0 group-hover:opacity-50 transition duration-300" />
              <div className="relative w-9 h-9 bg-purple-500/5 border border-purple-500/20 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:border-blue-500/40 hover:bg-blue-500/10 transition-all duration-300">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </div>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden relative group"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-400 rounded-lg blur opacity-0 group-hover:opacity-50 transition duration-300" />
            <div className="relative w-10 h-10 bg-purple-500/5 border border-purple-500/20 rounded-lg flex items-center justify-center text-purple-400 hover:text-white hover:border-purple-500/40 hover:bg-purple-500/10 transition-all duration-300">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </div>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`lg:hidden transition-all duration-500 ease-in-out overflow-hidden ${
            menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-4 space-y-2 border-t border-purple-500/20">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 group ${
                  activeLink === link.path
                    ? "bg-gradient-to-r from-purple-600/20 to-purple-400/20 text-purple-400 border-l-2 border-purple-400"
                    : "text-gray-300 hover:bg-purple-500/5 hover:text-purple-400"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                <svg
                  className={`w-5 h-5 ${
                    activeLink === link.path ? "text-purple-400" : "text-gray-400"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={link.icon} />
                </svg>
                <span className="text-sm font-medium">{link.label}</span>
                
                {/* Active indicator dot */}
                {activeLink === link.path && (
                  <span className="ml-auto w-1.5 h-1.5 bg-purple-400 rounded-full animate-ping" />
                )}
              </Link>
            ))}

            {/* Mobile social links */}
            <div className="flex items-center justify-center gap-3 pt-4 mt-2 border-t border-purple-500/20">
              <a
                href="https://github.com/jitu0210"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-purple-500/5 border border-purple-500/20 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:border-purple-500/40 hover:bg-purple-500/10 transition-all duration-300"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com/in/jitukumar0210"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-purple-500/5 border border-purple-500/20 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:border-blue-500/40 hover:bg-blue-500/10 transition-all duration-300"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient-x {
          0%, 100% { transform: translateX(-100%); }
          50% { transform: translateX(100%); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
        
        .animate-gradient-x {
          animation: gradient-x 3s linear infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 2s ease-in-out infinite;
        }
      `}</style>
    </header>
  );
};

export default Header;