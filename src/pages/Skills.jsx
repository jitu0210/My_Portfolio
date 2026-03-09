import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [viewMode, setViewMode] = useState("grid"); // grid, circle, bars
  const canvasRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Particle animation for background
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = () => {
      particles = [];
      const particleCount = 50;
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 2 + 1,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          color: `rgba(139, 92, 246, ${Math.random() * 0.3})`
        });
      }
    };

    const animateParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animateParticles);
    };

    resizeCanvas();
    createParticles();
    animateParticles();

    window.addEventListener('resize', resizeCanvas);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const skillCategories = [
    { id: "all", name: "All Skills", icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" },
    { id: "backend", name: "Backend Development", icon: "M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" },
    { id: "database", name: "Databases", icon: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" },
    { id: "devops", name: "DevOps & Cloud", icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" },
    { id: "frontend", name: "Frontend Basics", icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" },
    { id: "tools", name: "Tools & Methods", icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" },
  ];

  const skillsData = [
    // Backend
    { name: "Node.js", level: 92, category: "backend", icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253", color: "#339933", description: "Event-driven architecture, Non-blocking I/O" },
    { name: "Express.js", level: 88, category: "backend", icon: "M3 12l2-2 2 2 2-2 2 2 2-2 2 2 2-2 2 2", color: "#000000", description: "RESTful APIs, Middleware, Routing" },
    { name: "REST APIs", level: 95, category: "backend", icon: "M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z", color: "#FF6C37", description: "API Design, Versioning, Documentation" },
    { name: "MongoDB", level: 75, category: "backend", icon: "M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z", color: "#E10098", description: "Schemas, Resolvers, Apollo Server" },
    { name: "Redis", level: 70, category: "backend", icon: "M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z", color: "#3776AB", description: "Scripting, Automation, Basic Django" },
    
    // Database
    { name: "MongoDB", level: 88, category: "database", icon: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4", color: "#47A248", description: "Aggregation Pipeline, Indexing, Replica Sets" },
    // { name: "PostgreSQL", level: 78, category: "database", icon: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4", color: "#336791", description: "Complex Queries, Joins, Transactions" },
    { name: "Redis", level: 72, category: "database", icon: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4", color: "#DC382D", description: "Caching, Session Management, Pub/Sub" },
    { name: "MySQL", level: 50, category: "database", icon: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4", color: "#4479A1", description: "Database Design, Stored Procedures" },
    
    // DevOps
    { name: "Docker", level: 75, category: "devops", icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10", color: "#2496ED", description: "Containerization, Docker Compose" },
    { name: "AWS", level: 40, category: "devops", icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10", color: "#FF9900", description: "EC2, S3, Lambda Basics" },
    // { name: "Kubernetes", level: 60, category: "devops", icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10", color: "#326CE5", description: "Pods, Services, Deployments" },
    // { name: "CI/CD", level: 70, category: "devops", icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15", color: "#4285F4", description: "GitHub Actions, Jenkins Basics" },
    
    // Frontend Basics
    { name: "JavaScript", level: 90, category: "frontend", icon: "M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z", color: "#F7DF1E", description: "ES6+, Async/Await, Promises" },
    { name: "HTML/CSS", level: 85, category: "frontend", icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z", color: "#E34F26", description: "Responsive Design, Flexbox, Grid" },
    { name: "React", level: 70, category: "frontend", icon: "M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z", color: "#61DAFB", description: "Components, Hooks, State Management" },
    
    // Tools & Methods
    { name: "Git", level: 88, category: "tools", icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4", color: "#F05032", description: "Version Control, Branching, Merge" },
    { name: "System Design", level: 80, category: "tools", icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z", color: "#8A2BE2", description: "Scalability, Load Balancing, Caching" },
    { name: "IoT", level: 82, category: "tools", icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z", color: "#00A98F", description: "Sensor Integration, MQTT, Data Pipeline" },
    { name: "Testing", level: 70, category: "tools", icon: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z", color: "#6B8E23", description: "Unit Tests, Integration Tests" },
  ];

  const filteredSkills = activeCategory === "all" 
    ? skillsData 
    : skillsData.filter(skill => skill.category === activeCategory);

  // Circular view component
  const CircularView = () => (
    <div className="relative w-full max-w-4xl mx-auto h-[600px] flex items-center justify-center">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-64 h-64 rounded-full border-4 border-purple-500/30 animate-spin-slow" />
        <div className="absolute w-48 h-48 rounded-full border-4 border-purple-400/20 animate-spin-slower" />
        <div className="absolute w-32 h-32 rounded-full border-4 border-purple-300/10 animate-spin-slower-reverse" />
      </div>
      
      {filteredSkills.map((skill, index) => {
        const angle = (index / filteredSkills.length) * 2 * Math.PI;
        const radius = 200;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        
        return (
          <div
            key={skill.name}
            className="absolute group cursor-pointer"
            style={{
              transform: `translate(${x}px, ${y}px)`,
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={() => setHoveredSkill(skill.name)}
            onMouseLeave={() => setHoveredSkill(null)}
          >
            <div className={`relative p-4 rounded-xl bg-gradient-to-br from-[#111118] to-[#1a1a24] border-2 transition-all duration-300 ${
              hoveredSkill === skill.name ? 'border-purple-400 scale-110 shadow-2xl shadow-purple-600/30' : 'border-purple-500/20'
            }`}>
              <div className="w-16 h-16 flex items-center justify-center">
                <svg className="w-8 h-8" style={{ color: skill.color }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={skill.icon} />
                </svg>
              </div>
              
              {hoveredSkill === skill.name && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 p-3 bg-[#1a1a24] rounded-lg border border-purple-500/30 shadow-2xl z-20">
                  <p className="text-sm font-semibold text-purple-400">{skill.name}</p>
                  <p className="text-xs text-gray-400 mt-1">{skill.description}</p>
                  <div className="mt-2 w-full h-1 bg-purple-500/20 rounded-full">
                    <div className="h-full bg-gradient-to-r from-purple-600 to-purple-400 rounded-full" style={{ width: `${skill.level}%` }} />
                  </div>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );

  // Bars view component
  const BarsView = () => (
    <div className="space-y-4">
      {filteredSkills.map((skill) => (
        <div
          key={skill.name}
          className="group relative bg-gradient-to-br from-[#111118] to-[#1a1a24] p-4 rounded-xl border border-purple-500/10 hover:border-purple-500/30 transition-all duration-300"
          onMouseEnter={() => setHoveredSkill(skill.name)}
          onMouseLeave={() => setHoveredSkill(null)}
        >
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-purple-500/10 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5" style={{ color: skill.color }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={skill.icon} />
              </svg>
            </div>
            
            <div className="flex-1">
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm font-medium text-white">{skill.name}</span>
                <span className="text-xs text-purple-400">{skill.level}%</span>
              </div>
              
              <div className="w-full h-2 bg-purple-500/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-purple-600 to-purple-400 rounded-full transition-all duration-1000 relative"
                  style={{ 
                    width: hoveredSkill === skill.name ? `${skill.level}%` : '0%',
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
                </div>
              </div>
              
              {hoveredSkill === skill.name && (
                <p className="text-xs text-gray-400 mt-2">{skill.description}</p>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  // Grid view component (default)
  const GridView = () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredSkills.map((skill) => (
        <div
          key={skill.name}
          className="group relative bg-gradient-to-br from-[#111118] to-[#1a1a24] p-6 rounded-2xl border border-purple-500/10 hover:border-purple-500/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-600/20"
          onMouseEnter={() => setHoveredSkill(skill.name)}
          onMouseLeave={() => setHoveredSkill(null)}
        >
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 to-purple-400/0 group-hover:from-purple-600/10 group-hover:to-purple-400/10 rounded-2xl transition-all duration-500" />
          
          <div className="relative">
            {/* Header with icon and level */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6" style={{ color: skill.color }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={skill.icon} />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-purple-400 transition-colors">
                    {skill.name}
                  </h3>
                  <span className="text-xs text-purple-400/70">{skill.category}</span>
                </div>
              </div>
              
              {/* Level badge */}
              <div className="relative">
                <svg className="w-16 h-16 transform -rotate-90">
                  <circle
                    cx="32"
                    cy="32"
                    r="28"
                    fill="none"
                    stroke="#2d2d3a"
                    strokeWidth="4"
                  />
                  <circle
                    cx="32"
                    cy="32"
                    r="28"
                    fill="none"
                    stroke="url(#gradient)"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeDasharray={`${2 * Math.PI * 28}`}
                    strokeDashoffset={`${2 * Math.PI * 28 * (1 - skill.level / 100)}`}
                    className="transition-all duration-1000"
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#a855f7" />
                      <stop offset="100%" stopColor="#d946ef" />
                    </linearGradient>
                  </defs>
                </svg>
                <span className="absolute inset-0 flex items-center justify-center text-sm font-bold text-white">
                  {skill.level}%
                </span>
              </div>
            </div>
            
            {/* Description */}
            <p className="text-sm text-gray-400 mb-4 line-clamp-2">
              {skill.description}
            </p>
            
            {/* Proficiency bar */}
            <div className="w-full h-1.5 bg-purple-500/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-purple-600 to-purple-400 rounded-full transition-all duration-1000"
                style={{ width: hoveredSkill === skill.name ? `${skill.level}%` : '0%' }}
              />
            </div>
            
            {/* Tags */}
            <div className="mt-4 flex flex-wrap gap-1">
              <span className="text-xs px-2 py-1 bg-purple-500/10 text-purple-400 rounded-full border border-purple-500/20">
                {skill.category}
              </span>
              <span className="text-xs px-2 py-1 bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20">
                {skill.level >= 80 ? 'Expert' : skill.level >= 60 ? 'Intermediate' : 'Learning'}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <section className="min-h-screen bg-gradient-to-b from-[#0a0a0f] to-[#030014] text-white px-4 sm:px-6 py-20 pt-24 relative overflow-hidden">
      {/* Canvas for particle animation */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ opacity: 0.5 }}
      />

      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gradient orbs */}
        <div className="absolute top-20 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-20 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[100px] animate-pulse-slow" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Decorative header */}
        <div className="flex items-center gap-4 mb-8">
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-purple-400 rounded-full" />
          <span className="text-purple-400 font-mono text-sm tracking-wider">SKILLS & EXPERTISE</span>
        </div>

        {/* Title with animation */}
        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600">
              Technical Skills
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl">
            A comprehensive overview of my technical expertise and proficiency levels 
            across various domains of software development.
          </p>
        </div>

        {/* Category Filter and View Toggle */}
        <div className={`flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 my-12 transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {/* Category buttons */}
          <div className="flex flex-wrap gap-3">
            {skillCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`group relative px-5 py-3 rounded-xl transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-purple-600 to-purple-400 text-white shadow-lg shadow-purple-600/30'
                    : 'bg-[#111118] text-gray-400 hover:text-purple-400 border border-purple-500/10 hover:border-purple-500/30'
                }`}
              >
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={category.icon} />
                  </svg>
                  <span className="text-sm font-medium whitespace-nowrap">{category.name}</span>
                </div>
                
                {/* Count badge */}
                <span className={`absolute -top-2 -right-2 w-5 h-5 rounded-full text-xs flex items-center justify-center ${
                  activeCategory === category.id
                    ? 'bg-white text-purple-600'
                    : 'bg-purple-500/20 text-purple-400'
                }`}>
                  {category.id === 'all' ? skillsData.length : skillsData.filter(s => s.category === category.id).length}
                </span>
              </button>
            ))}
          </div>

          {/* View mode toggle */}
          <div className="flex gap-2 p-1 bg-[#111118] rounded-xl border border-purple-500/20">
            {['grid', 'circle', 'bars'].map((mode) => (
              <button
                key={mode}
                onClick={() => setViewMode(mode)}
                className={`px-4 py-2 rounded-lg capitalize transition-all duration-300 ${
                  viewMode === mode
                    ? 'bg-gradient-to-r from-purple-600 to-purple-400 text-white'
                    : 'text-gray-400 hover:text-purple-400'
                }`}
              >
                {mode}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Display */}
        <div className={`transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {viewMode === 'grid' && <GridView />}
          {viewMode === 'circle' && <CircularView />}
          {viewMode === 'bars' && <BarsView />}
        </div>

        {/* Skill Stats Summary */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="bg-gradient-to-br from-purple-500/10 to-transparent p-6 rounded-2xl border border-purple-500/20 backdrop-blur-sm">
            <div className="text-3xl font-bold text-white mb-2">{skillsData.length}+</div>
            <div className="text-sm text-gray-400">Total Skills</div>
          </div>
          
          <div className="bg-gradient-to-br from-purple-500/10 to-transparent p-6 rounded-2xl border border-purple-500/20 backdrop-blur-sm">
            <div className="text-3xl font-bold text-white mb-2">
              {skillsData.filter(s => s.level >= 80).length}
            </div>
            <div className="text-sm text-gray-400">Expert Level</div>
          </div>
          
          <div className="bg-gradient-to-br from-purple-500/10 to-transparent p-6 rounded-2xl border border-purple-500/20 backdrop-blur-sm">
            <div className="text-3xl font-bold text-white mb-2">
              {[...new Set(skillsData.map(s => s.category))].length}
            </div>
            <div className="text-sm text-gray-400">Categories</div>
          </div>
          
          <div className="bg-gradient-to-br from-purple-500/10 to-transparent p-6 rounded-2xl border border-purple-500/20 backdrop-blur-sm">
            <div className="text-3xl font-bold text-white mb-2">
              {Math.round(skillsData.reduce((acc, s) => acc + s.level, 0) / skillsData.length)}%
            </div>
            <div className="text-sm text-gray-400">Average Proficiency</div>
          </div>
        </div>

        {/* Call to action */}
        <div className={`mt-16 text-center transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-block p-8 bg-gradient-to-r from-purple-500/5 to-blue-500/5 rounded-2xl border border-purple-500/10 backdrop-blur-sm">
            <p className="text-gray-300 text-lg mb-4">
              Looking for a skilled backend developer? Let's discuss your project!
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-400 text-white font-medium rounded-lg hover:scale-105 transition-transform duration-300 shadow-lg shadow-purple-600/30 group"
            >
              Hire Me
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.2; }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes spin-slower {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        
        .animate-spin-slower {
          animation: spin-slower 30s linear infinite;
        }
        
        .animate-spin-slower-reverse {
          animation: spin-slower 40s linear infinite reverse;
        }
        
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default Skills;