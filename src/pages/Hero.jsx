// Hero.jsx
import React, { useState, useEffect } from "react";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  // Typing animation code
  const codeLines = [
    'const express = require("express");',
    "const app = express();",
    "",
    'app.get("/api/projects", (req, res) => {',
    '  res.json({ status: "Backend running..." });',
    "});",
    "",
    "app.listen(5000);",
    'console.log("Server ready 🚀");',
  ];

  const fullCode = codeLines.join("\n");

  // Intersection Observer for scroll animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    const heroSection = document.getElementById("hero-section");
    if (heroSection) {
      observer.observe(heroSection);
    }

    return () => {
      if (heroSection) {
        observer.unobserve(heroSection);
      }
    };
  }, []);

  // Typing effect
  useEffect(() => {
    let currentIndex = 0;
    let typingInterval;

    if (isVisible) {
      typingInterval = setInterval(() => {
        if (currentIndex <= fullCode.length) {
          setDisplayText(fullCode.slice(0, currentIndex));
          currentIndex++;
        } else {
          // Reset after reaching the end
          setTimeout(() => {
            currentIndex = 0;
            setDisplayText("");
          }, 2000);
        }
      }, 50);
    }

    return () => {
      if (typingInterval) {
        clearInterval(typingInterval);
      }
    };
  }, [isVisible, fullCode]);

  // Blinking cursor effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  const handleMemoriesDrive = () => {
    window.open(
      "https://drive.google.com/drive/folders/1JituMemories",
      "_blank",
    );
  };

  return (
    <section
      id="hero-section"
      className="relative min-h-screen bg-[#0a0a0f] overflow-hidden flex items-center"
    >
      {/* Background purple glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0f] via-[#0b0618] to-[#0a0a0f]" />

      {/* Radial glow behind hero text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none" />

      {/* Background coding effect */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating code lines */}
        <div className="absolute top-[10%] left-[5%] text-purple-500/5 text-xs font-mono animate-float-slow">
          {`{ status: "deploying" }`}
        </div>
        <div className="absolute bottom-[15%] right-[8%] text-purple-500/5 text-xs font-mono animate-float-delayed">
          {`db.connect()`}
        </div>
        <div className="absolute top-[30%] right-[12%] text-purple-500/5 text-xs font-mono animate-float">
          {`await server.start()`}
        </div>
        <div className="absolute bottom-[25%] left-[10%] text-purple-500/5 text-xs font-mono animate-float-slow">
          {`process.env.PORT`}
        </div>
        <div className="absolute top-[60%] left-[20%] text-purple-500/5 text-xs font-mono animate-float">
          {`() => fetchData()`}
        </div>

        {/* Network dots with connecting lines */}
        <svg className="absolute inset-0 w-full h-full opacity-10">
          <circle cx="15%" cy="20%" r="3" fill="#7c3aed" />
          <circle cx="85%" cy="30%" r="3" fill="#7c3aed" />
          <circle cx="25%" cy="80%" r="3" fill="#7c3aed" />
          <circle cx="75%" cy="70%" r="3" fill="#7c3aed" />
          <line
            x1="15%"
            y1="20%"
            x2="85%"
            y2="30%"
            stroke="#7c3aed"
            strokeWidth="0.5"
            strokeDasharray="4 4"
          />
          <line
            x1="25%"
            y1="80%"
            x2="75%"
            y2="70%"
            stroke="#7c3aed"
            strokeWidth="0.5"
            strokeDasharray="4 4"
          />
        </svg>
      </div>

      {/* Floating tech badges */}
      <div className="absolute top-[15%] right-[15%] hidden lg:block">
        <div className="flex gap-3 animate-float-slow">
          <span className="px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-xs font-mono">
            Node.js
          </span>
        </div>
      </div>
      <div className="absolute bottom-[20%] left-[12%] hidden lg:block">
        <div className="flex gap-3 animate-float-delayed">
          <span className="px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-xs font-mono">
            MongoDB
          </span>
        </div>
      </div>
      <div className="absolute top-[40%] left-[5%] hidden lg:block">
        <div className="flex gap-3 animate-float">
          <span className="px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-xs font-mono">
            Docker
          </span>
        </div>
      </div>
      <div className="absolute bottom-[30%] right-[10%] hidden lg:block">
        <div className="flex gap-3 animate-float-slow">
          <span className="px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-xs font-mono">
            REST API
          </span>
        </div>
      </div>

      {/* Code bracket decoration */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden xl:block text-purple-500/20 text-7xl font-mono">
        {"{"}
      </div>
      <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden xl:block text-purple-500/20 text-7xl font-mono">
        {"}"}
      </div>

      {/* Main content container */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-12 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Introduction */}
          <div
            className={`space-y-8 transition-all duration-1000 transform ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            {/* Glowing divider line */}
            <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-purple-400 rounded-full shadow-lg shadow-purple-600/50" />

            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white">
                Hi, I'm{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600 animate-pulse-glow">
                  Jitu
                </span>
              </h1>

              <h2 className="text-xl md:text-2xl text-purple-400 font-mono">
                Backend Developer | Node.js | REST APIs | MongoDB | Redis |
                Docker | System Design
              </h2>

              <p className="text-gray-400 text-lg max-w-xl leading-relaxed">
                I build scalable backend systems, RESTful APIs, and cloud-ready
                applications with a focus on performance, security, and clean
                architecture.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <button className="group relative px-8 py-3 bg-gradient-to-r from-purple-600 to-purple-500 rounded-lg text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-600/50">
                <span className="relative z-10">View Projects</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-purple-400 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>

              <button className="px-8 py-3 border border-purple-600 rounded-lg text-purple-400 font-medium transition-all duration-300 hover:bg-purple-600/10 hover:border-purple-500 hover:text-purple-300">
                Contact Me
              </button>

              <div className="group relative">
                <button
                  onClick={handleMemoriesDrive}
                  className="flex items-center gap-2 px-6 py-3 bg-purple-500/5 border border-purple-500/30 rounded-lg text-purple-400 font-medium backdrop-blur-sm transition-all duration-300 hover:bg-purple-500/10 hover:border-purple-400 hover:scale-105"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                    />
                  </svg>
                  Memories Drive
                </button>
                <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-gray-900 text-purple-400 text-sm rounded-md border border-purple-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
                  Open my memories drive
                </span>
              </div>
            </div>
          </div>

          {/* Right side - Terminal */}
          <div
            className={`transition-all duration-1000 transform ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-10 opacity-0"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            <div className="relative group">
              {/* Terminal glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/30 to-purple-400/30 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Terminal window */}
              <div className="relative bg-[#1a1a24] rounded-xl overflow-hidden border border-purple-500/20 shadow-2xl">
                {/* Terminal header */}
                <div className="flex items-center justify-between px-4 py-3 bg-[#0f0f17] border-b border-purple-500/20">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-500 font-mono">
                    <span className="text-purple-400">jitu@backend:~</span>
                  </div>
                  <div className="w-16" /> {/* Spacer */}
                </div>

                {/* Terminal content */}
                <div className="p-6 font-mono text-sm min-h-[320px] bg-[#0a0a0f]">
                  <div className="flex items-start gap-2 text-green-400 mb-3">
                    <span className="text-purple-400">$</span>
                    <span>cd projects/backend</span>
                  </div>

                  <div className="text-gray-300 whitespace-pre-wrap">
                    {displayText}
                    <span
                      className={`inline-block w-3 h-5 bg-purple-400 ml-1 ${
                        showCursor ? "opacity-100" : "opacity-0"
                      }`}
                      style={{ transition: "opacity 0.1s" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-purple-500/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-purple-500 rounded-full mt-2 animate-scroll" />
        </div>
      </div>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes float-slow {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        @keyframes float-delayed {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes pulse-glow {
          0%,
          100% {
            text-shadow: 0 0 20px rgba(168, 85, 247, 0.3);
          }
          50% {
            text-shadow: 0 0 40px rgba(168, 85, 247, 0.6);
          }
        }

        @keyframes scroll {
          0% {
            transform: translateY(0);
            opacity: 1;
          }
          75% {
            transform: translateY(20px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 0;
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 7s ease-in-out infinite;
        }

        .animate-pulse-glow {
          animation: pulse-glow 3s ease-in-out infinite;
        }

        .animate-scroll {
          animation: scroll 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
