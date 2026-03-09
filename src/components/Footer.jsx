import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0f] border-t border-purple-900/30 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-10 text-center">

        {/* Name */}
        <h2 className="text-xl font-semibold text-purple-400 mb-2">
          Jitu
        </h2>

        <p className="text-gray-400 text-sm mb-6">
          Backend Developer | Node.js | REST APIs | MongoDB | System Design
        </p>

        {/* Social Links */}
        <div className="flex justify-center gap-6 text-sm text-gray-400 mb-6">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 transition"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 transition"
          >
            LinkedIn
          </a>

          <a
            href="mailto:yourmail@gmail.com"
            className="hover:text-purple-400 transition"
          >
            Email
          </a>
        </div>

        {/* Divider */}
        <div className="h-px bg-purple-900/30 mb-4"></div>

        {/* Copyright */}
        <p className="text-gray-500 text-xs">
          © {new Date().getFullYear()} Jitu. All rights reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;