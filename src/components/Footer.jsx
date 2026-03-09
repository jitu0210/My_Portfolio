import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const [emailCopied, setEmailCopied] = useState(false);
  const location = useLocation();
  const currentYear = new Date().getFullYear();

  const handleEmailCopy = () => {
    navigator.clipboard.writeText("jitukumar0210@gmail.com");
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  const navigationLinks = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Skills', path: '/skills' },
    { name: 'Experience', path: '/experience' },
    { name: 'Contact', path: '/contact' },
  ];

  const resourceLinks = [
    { 
      name: 'Resume', 
      path: 'https://drive.google.com/drive/folders/1JituMemories', 
      icon: '',
      external: true 
    },
    { 
      name: 'GitHub', 
      path: 'https://github.com/jitu0210', 
      icon: '',
      external: true 
    },
    { 
      name: 'LinkedIn', 
      path: 'https://linkedin.com/in/jitukumar0210', 
      icon: '',
      external: true 
    },
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/jitu0210',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/jitukumar0210',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com/jitu0210',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
    },
    {
      name: 'Email',
      href: '#',
      onClick: handleEmailCopy,
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="relative bg-[#0a0a0f] border-t border-purple-900/30  overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-600/5 rounded-full blur-3xl" />
        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/5 rounded-full blur-3xl" />
        
        {/* Code snippets */}
        <div className="absolute bottom-10 left-10 text-purple-500/5 text-xs font-mono">
          {`<Footer />`}
        </div>
        <div className="absolute top-10 right-10 text-purple-500/5 text-xs font-mono">
          {`} // 2024`}
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-12">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Brand section */}
          <div className="col-span-1 md:col-span-1">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">
                  Jitu
                </span>
                <span className="px-2 py-1 bg-purple-500/10 text-purple-400 text-xs font-mono rounded border border-purple-500/20">
                  Backend Dev
                </span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Building scalable backend systems and robust APIs with modern technologies.
              </p>
              
              {/* Quick contact */}
              <div className="flex items-center gap-2 text-sm">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-gray-500">Available for opportunities</span>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="col-span-1">
            <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
              <span className="w-1 h-4 bg-purple-500 rounded-full" />
              Navigation
            </h3>
            <ul className="space-y-2">
              {navigationLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className={`text-sm flex items-center gap-2 group ${
                      location.pathname === link.path 
                        ? 'text-purple-400' 
                        : 'text-gray-400 hover:text-purple-400'
                    } transition-colors duration-300`}
                  >
                    <span className="w-1 h-1 bg-purple-500/50 rounded-full group-hover:bg-purple-400 transition-colors" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div className="col-span-1">
            <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
              <span className="w-1 h-4 bg-purple-500 rounded-full" />
              Resources
            </h3>
            <ul className="space-y-2">
              {resourceLinks.map((link) => (
                <li key={link.name}>
                  {link.external ? (
                    <a
                      href={link.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-purple-400 transition-colors duration-300 text-sm flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 bg-purple-500/50 rounded-full group-hover:bg-purple-400 transition-colors" />
                      <span>{link.icon}</span>
                      <span>{link.name}</span>
                      <svg className="w-3 h-3 ml-1 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  ) : (
                    <Link
                      to={link.path}
                      className="text-gray-400 hover:text-purple-400 transition-colors duration-300 text-sm flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 bg-purple-500/50 rounded-full group-hover:bg-purple-400 transition-colors" />
                      <span>{link.icon}</span>
                      <span>{link.name}</span>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1">
            <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
              <span className="w-1 h-4 bg-purple-500 rounded-full" />
              Get in Touch
            </h3>
            <div className="space-y-3">
              <p className="text-gray-400 text-sm flex items-center gap-2">
                <span className="text-purple-400"></span>
                jitukumar0210@gmail.com
              </p>
              <p className="text-gray-400 text-sm flex items-center gap-2">
                <span className="text-purple-400"></span>
                Bhopal, Madhya Pradesh, India
              </p>
              
            </div>
          </div>
        </div>

        {/* Divider with gradient */}
        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-purple-900/30"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="px-4 bg-[#0a0a0f] text-purple-400/50 text-xs font-mono">
              connect with me
            </span>
          </div>
        </div>

        {/* Bottom section with social links and copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Social Links with SVG icons */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                onClick={social.onClick}
                target={social.onClick ? undefined : "_blank"}
                rel={social.onClick ? undefined : "noopener noreferrer"}
                className="group relative"
              >
                <div className="w-10 h-10 bg-purple-500/5 border border-purple-500/20 rounded-lg flex items-center justify-center text-gray-400 hover:text-purple-400 hover:border-purple-500/40 hover:bg-purple-500/10 transition-all duration-300">
                  {social.icon}
                </div>
                
                {/* Tooltip */}
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-900 text-purple-400 text-xs rounded border border-purple-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
                  {social.name === 'Email' && emailCopied ? 'Copied!' : social.name}
                </span>
              </a>
            ))}
          </div>

          {/* Copyright with dynamic year */}
          <p className="text-gray-500 text-xs flex items-center gap-2">
            <span>© {currentYear}</span>
            <span className="w-1 h-1 bg-purple-500/30 rounded-full" />
            <span className="text-purple-400">Jitu Kumar</span>
            <span className="w-1 h-1 bg-purple-500/30 rounded-full" />
            <span>All rights reserved</span>
          </p>

          {/* Back to top button */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="group flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors duration-300 text-sm"
          >
            <span>Back to top</span>
            <svg 
              className="w-4 h-4 group-hover:-translate-y-1 transition-transform duration-300" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        </div>

        {/* Made with love message */}
        <div className="mt-6 text-center">
          <p className="text-gray-600 text-xs font-mono">
            {'<'} built with{' '}
            <span className="text-red-400 animate-pulse">❤️</span>
            {' '}using React & Tailwind {'/>'}
          </p>
        </div>
      </div>

      {/* Email copy notification */}
      {emailCopied && (
        <div className="fixed bottom-4 right-4 bg-purple-600 text-white px-4 py-2 rounded-lg shadow-lg animate-slide-up">
          Email copied to clipboard!
        </div>
      )}

      <style jsx>{`
        @keyframes slide-up {
          0% { transform: translateY(100%); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        
        .animate-slide-up {
          animation: slide-up 0.3s ease-out;
        }
      `}</style>
    </footer>
  );
};

export default Footer;