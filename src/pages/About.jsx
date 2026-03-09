import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("experience");
  const [hoveredTech, setHoveredTech] = useState(null);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const educationData = [
    {
      level: "Graduation",
      degree: "B.Tech in Computer Science Engineering",
      institution: "Radharaman Institute of Technology, Bhopal, MP",
      board: "RGPV University",
      duration: "2022 - 2026",
      score: "CGPA: 7.32/10",
      icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
      highlights: ["Data Structures & Algorithms", "System Design", "Database Management", "Cloud Computing"]
    },
    {
      level: "Class XII",
      degree: "Senior Secondary Education",
      institution: "U.R. College, Bihar",
      board: "Bihar School Examination Board (BSEB)",
      duration: "2021 - 2022",
      score: "Percentage: 64.8%",
      icon: "M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25M9 16.5v.75m3-3v3M15 12v5.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z",
      highlights: ["Science Stream (PCM)", "Mathematics", "Physics", "Chemistry"]
    },
    {
      level: "Class X",
      degree: "Secondary Education",
      institution: "CD Fort Public School, Bihar",
      board: "Central Board of Secondary Education (CBSE)",
      duration: "2019 - 2020",
      score: "Percentage: 88.4%",
      icon: "M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 10.443m-7.007 6.287H4.5c-.207 0-.416.008-.623.016",
      highlights: ["Science & Mathematics", "Hindi", "English", "Social Studies"]
    }
  ];

  const experienceData = [
    {
      role: "Trainee Developer (IoT & Backend)",
      company: "College Placement Company",
      duration: "February 2026 - Present",
      type: "Selected & Offered Trainee Role",
      icon: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
      achievements: [
        "Worked on live IoT-based project integrating hardware with backend",
        "Developed RESTful APIs for IoT device communication",
        "Implemented data processing pipelines for sensor data",
        "Collaborated with IoT team for seamless integration"
      ]
    },
    {
      role: "Backend Developer Intern",
      company: "100 Days Internship Program",
      duration: "August 2025 - February 2026",
      type: "Live Project Experience",
      icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
      achievements: [
        "Selected in campus placement drive during 7th semester",
        "Working on live IoT projects combining backend and IoT technologies",
        "Received stipend during internship period",
        "Offered trainee role based on performance"
      ]
    }
  ];

  const hackathonData = [
    {
      name: "HackMive",
      organizer: "Admiive Company, Indore",
      achievement: "Participated & Gained Live Experience",
      description: "Participated in HackMive organized by Admiive Company in Indore, working on real-world problems and collaborating with talented developers",
      icon: "M13 10V3L4 14h7v7l9-11h-7z",
      skills: ["Team Collaboration", "Problem Solving", "Rapid Prototyping", "Presentation", "Innovation"]
    }
  ];

  const techStack = [
    { name: "Node.js", icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253", category: "backend", level: 90 },
    { name: "Express.js", icon: "M3 12l2-2 2 2 2-2 2 2 2-2 2 2 2-2 2 2", category: "backend", level: 85 },
    { name: "MongoDB", icon: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4", category: "database", level: 88 },
    { name: "REST APIs", icon: "M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z", category: "backend", level: 92 },
    { name: "Docker", icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10", category: "devops", level: 75 },
    { name: "Git", icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4", category: "tools", level: 85 },
    { name: "System Design", icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z", category: "architecture", level: 80 },
    { name: "JavaScript", icon: "M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z", category: "language", level: 95 },
    { name: "IoT", icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z", category: "specialization", level: 82 },
    { name: "Python", icon: "M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z", category: "language", level: 70 },
    { name: "PostgreSQL", icon: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4", category: "database", level: 78 },
    { name: "Redis", icon: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4", category: "database", level: 72 },
    { name: "AWS", icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10", category: "devops", level: 65 },
    { name: "GraphQL", icon: "M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z", category: "backend", level: 70 },
    { name: "Kubernetes", icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10", category: "devops", level: 60 }
  ];

  const categories = [
    { id: "all", label: "All" },
    { id: "backend", label: "Backend" },
    { id: "database", label: "Database" },
    { id: "devops", label: "DevOps" },
    { id: "architecture", label: "Architecture" },
    { id: "specialization", label: "IoT" },
    { id: "language", label: "Languages" },
    { id: "tools", label: "Tools" }
  ];

  const [filter, setFilter] = useState("all");
  const filteredTech = filter === "all" ? techStack : techStack.filter(tech => tech.category === filter);

  // Auto-scroll animation for tech stack
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 0;
    const scrollStep = 1; // pixels per frame
    const scrollDelay = 50; // ms between frames

    const scrollInterval = setInterval(() => {
      if (scrollContainer) {
        scrollAmount += scrollStep;
        if (scrollAmount >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
          scrollAmount = 0;
        }
        scrollContainer.scrollTo({
          left: scrollAmount,
          behavior: 'smooth'
        });
      }
    }, scrollDelay);

    return () => clearInterval(scrollInterval);
  }, [filter]); // Reset animation when filter changes

  return (
    <section className="min-h-screen bg-gradient-to-b from-[#0a0a0f] to-[#030014] text-white px-4 sm:px-6 py-20 pt-24 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gradient orbs */}
        <div className="absolute top-20 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-20 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: '1s' }} />
        
        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-purple-400/20 rounded-full animate-float" />
        <div className="absolute top-3/4 right-1/4 w-2 h-2 bg-blue-400/20 rounded-full animate-float-delayed" />
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-pink-400/20 rounded-full animate-float-slow" />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, purple 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Decorative header */}
        <div className="flex items-center gap-4 mb-8">
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-purple-400 rounded-full" />
          <span className="text-purple-400 font-mono text-sm tracking-wider">ABOUT_ME</span>
        </div>

        {/* Title with animation */}
        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600">
              About Me
            </span>
          </h1>
        </div>

        {/* Intro section with profile summary */}
        <div className={`grid lg:grid-cols-3 gap-8 mb-16 transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {/* Main intro */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-gradient-to-r from-purple-500/5 to-transparent p-6 rounded-2xl border border-purple-500/10 backdrop-blur-sm">
              <p className="text-gray-300 text-lg leading-relaxed">
                Hi, I'm <span className="text-purple-400 font-semibold text-xl">Jitu</span>, a passionate 
                backend developer with a strong foundation in building scalable and reliable systems. 
                My journey in tech started at <span className="text-purple-400">Radharaman Institute of Technology, Bhopal</span>, 
                where I pursued my B.Tech in Computer Science Engineering.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-[#111118] p-5 rounded-xl border border-purple-500/10 hover:border-purple-500/30 transition-all duration-300">
                <div className="flex items-center gap-2 mb-2">
                  <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z" />
                  </svg>
                  <span className="text-purple-400 font-semibold">Education</span>
                </div>
                <p className="text-gray-300 text-sm">B.Tech CSE from Radharaman Institute of Technology, Bhopal (2020-2024)</p>
              </div>

              <div className="bg-[#111118] p-5 rounded-xl border border-purple-500/10 hover:border-purple-500/30 transition-all duration-300">
                <div className="flex items-center gap-2 mb-2">
                  <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-purple-400 font-semibold">Achievement</span>
                </div>
                <p className="text-gray-300 text-sm">Selected in campus placement (7th semester) & Completed 100-day internship</p>
              </div>
            </div>
          </div>

          {/* Quick stats */}
          <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 p-6 rounded-2xl border border-purple-500/20 backdrop-blur-sm">
            <h3 className="text-purple-400 font-semibold mb-4 flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Quick Stats
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center pb-2 border-b border-purple-500/10">
                <span className="text-gray-400">Experience</span>
                <span className="text-white font-semibold">2+ Years</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-purple-500/10">
                <span className="text-gray-400">Projects</span>
                <span className="text-white font-semibold">15+</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-purple-500/10">
                <span className="text-gray-400">Hackathons</span>
                <span className="text-white font-semibold">HackMive</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Internship</span>
                <span className="text-white font-semibold">100 Days + Stipend</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs for Experience, Education & Hackathon */}
        <div className="mb-8">
          <div className="flex gap-4 border-b border-purple-500/20 pb-4 overflow-x-auto scrollbar-hide">
            {['experience', 'education', 'hackathon'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-lg font-medium capitalize transition-all duration-300 whitespace-nowrap ${
                  activeTab === tab
                    ? 'bg-gradient-to-r from-purple-600 to-purple-400 text-white shadow-lg shadow-purple-600/30'
                    : 'text-gray-400 hover:text-purple-400 hover:bg-purple-500/5'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Experience Section */}
        {activeTab === 'experience' && (
          <div className={`grid md:grid-cols-2 gap-6 mb-16 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            {experienceData.map((exp, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-[#111118] to-[#1a1a24] p-6 rounded-2xl border border-purple-500/10 hover:border-purple-500/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-600/20"
              >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 to-purple-400/0 group-hover:from-purple-600/10 group-hover:to-purple-400/10 rounded-2xl transition-all duration-500" />
                
                <div className="relative">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={exp.icon} />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white group-hover:text-purple-400 transition-colors">
                        {exp.role}
                      </h3>
                      <p className="text-purple-400 text-sm">{exp.company}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs px-2 py-1 bg-purple-500/10 text-purple-400 rounded-full border border-purple-500/20">
                          {exp.duration}
                        </span>
                        <span className="text-xs px-2 py-1 bg-green-500/10 text-green-400 rounded-full border border-green-500/20">
                          {exp.type}
                        </span>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                        <span className="text-purple-400 mt-1">•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Education Section */}
        {activeTab === 'education' && (
          <div className={`mb-16 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="space-y-6">
              {educationData.map((edu, index) => (
                <div
                  key={index}
                  className="group relative bg-gradient-to-br from-[#111118] to-[#1a1a24] p-6 rounded-2xl border border-purple-500/10 hover:border-purple-500/30 transition-all duration-500"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 to-purple-400/0 group-hover:from-purple-600/5 group-hover:to-purple-400/5 rounded-2xl transition-all duration-500" />
                  
                  <div className="relative flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/4">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={edu.icon} />
                          </svg>
                        </div>
                        <div>
                          <span className="text-xs text-purple-400 font-mono">{edu.level}</span>
                          <h3 className="text-lg font-semibold text-white">{edu.degree}</h3>
                        </div>
                      </div>
                    </div>

                    <div className="md:w-2/4">
                      <p className="text-purple-400 text-sm">{edu.institution}</p>
                      <p className="text-gray-400 text-xs mt-1">{edu.board}</p>
                      <div className="flex items-center gap-3 mt-2">
                        <span className="text-xs px-2 py-1 bg-purple-500/10 text-purple-400 rounded-full border border-purple-500/20">
                          {edu.duration}
                        </span>
                        <span className="text-xs px-2 py-1 bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20">
                          {edu.score}
                        </span>
                      </div>
                    </div>

                    <div className="md:w-1/4">
                      <h4 className="text-purple-400 text-xs font-semibold mb-2">Key Subjects</h4>
                      <div className="flex flex-wrap gap-1">
                        {edu.highlights.map((highlight, i) => (
                          <span key={i} className="text-xs text-gray-300 bg-purple-500/5 px-2 py-1 rounded-full border border-purple-500/10">
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Hackathon Section */}
        {activeTab === 'hackathon' && (
          <div className={`mb-16 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            {hackathonData.map((hack, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-[#111118] to-[#1a1a24] p-8 rounded-2xl border border-purple-500/10 hover:border-purple-500/30 transition-all duration-500"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 to-purple-400/0 group-hover:from-purple-600/5 group-hover:to-purple-400/5 rounded-2xl transition-all duration-500" />
                
                <div className="relative flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/3">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 bg-purple-500/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={hack.icon} />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-2xl font-semibold text-white">{hack.name}</h3>
                        <p className="text-purple-400">{hack.organizer}</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {hack.description}
                    </p>
                  </div>

                  <div className="md:w-2/3">
                    <h4 className="text-purple-400 font-semibold mb-3">Skills Gained</h4>
                    <div className="flex flex-wrap gap-2">
                      {hack.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-purple-500/10 text-purple-400 text-xs rounded-full border border-purple-500/20 hover:bg-purple-500/20 transition-colors duration-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                    
                    <div className="mt-6 p-4 bg-gradient-to-r from-purple-500/5 to-transparent rounded-xl border border-purple-500/10">
                      <p className="text-gray-300 text-sm italic">
                        "Participated in HackMive organized by Admiive Company in Indore, gaining valuable hands-on experience in collaborative problem-solving and rapid prototyping."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tech Stack with Unique Scrollable Animation */}
        <div className="mb-8">
          <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">
              Tech Stack
            </h2>
            
            {/* Filter buttons */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setFilter(cat.id)}
                  className={`px-4 py-2 text-xs font-medium rounded-lg transition-all duration-300 ${
                    filter === cat.id
                      ? 'bg-gradient-to-r from-purple-600 to-purple-400 text-white shadow-lg shadow-purple-600/30'
                      : 'bg-purple-500/5 text-gray-400 hover:text-purple-400 border border-purple-500/10 hover:border-purple-500/30'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Scrollable Tech Stack Container */}
          <div className="relative">
            {/* Gradient overlays for scroll effect */}
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#0a0a0f] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#0a0a0f] to-transparent z-10 pointer-events-none" />
            
            {/* Scrollable container */}
            <div
              ref={scrollContainerRef}
              className="overflow-x-auto scrollbar-hide py-4 px-2"
              style={{ scrollBehavior: 'smooth' }}
            >
              <div className="flex gap-4 w-max">
                {filteredTech.map((tech, index) => (
                  <div
                    key={index}
                    className="group relative"
                    onMouseEnter={() => setHoveredTech(index)}
                    onMouseLeave={() => setHoveredTech(null)}
                  >
                    {/* Main card */}
                    <div className="relative w-64 bg-gradient-to-br from-[#111118] to-[#1a1a24] p-5 rounded-xl border border-purple-500/10 hover:border-purple-500/30 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-600/20">
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 to-purple-400/0 group-hover:from-purple-600/5 group-hover:to-purple-400/5 rounded-xl transition-all duration-300" />
                      
                      <div className="relative flex items-center gap-4">
                        <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={tech.icon} />
                          </svg>
                        </div>
                        
                        <div className="flex-1">
                          <span className="text-sm font-medium text-gray-300 group-hover:text-purple-400 transition-colors">
                            {tech.name}
                          </span>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="text-xs text-purple-500/50">{tech.category}</span>
                            <span className="w-1 h-1 bg-purple-500/30 rounded-full" />
                            <span className="text-xs text-green-400">{tech.level}%</span>
                          </div>
                        </div>
                      </div>

                      {/* Proficiency bar */}
                      <div className="mt-3 w-full h-1 bg-purple-500/10 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-purple-600 to-purple-400 rounded-full transition-all duration-500"
                          style={{ width: hoveredTech === index ? `${tech.level}%` : '0%' }}
                        />
                      </div>
                    </div>

                    {/* Hover details card */}
                    {hoveredTech === index && (
                      <div className="absolute top-full left-0 mt-2 w-64 p-3 bg-[#1a1a24] rounded-lg border border-purple-500/30 shadow-2xl z-20 animate-fade-in">
                        <div className="text-xs text-gray-300">
                          <div className="flex justify-between mb-1">
                            <span className="text-purple-400">Proficiency:</span>
                            <span>{tech.level}%</span>
                          </div>
                          <div className="w-full h-1 bg-purple-500/20 rounded-full mb-2">
                            <div className="h-full bg-gradient-to-r from-purple-600 to-purple-400 rounded-full" style={{ width: `${tech.level}%` }} />
                          </div>
                          <p className="text-gray-400">
                            {tech.level >= 80 ? 'Expert' : tech.level >= 60 ? 'Intermediate' : 'Learning'}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="flex justify-center gap-1 mt-4">
            <div className="w-16 h-1 bg-purple-500/20 rounded-full overflow-hidden">
              <div className="w-1/3 h-full bg-gradient-to-r from-purple-600 to-purple-400 rounded-full animate-slide" />
            </div>
            <span className="text-xs text-purple-400/50 font-mono">scroll →</span>
          </div>
        </div>

        {/* Call to action */}
        <div className={`mt-16 text-center transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-block p-8 bg-gradient-to-r from-purple-500/5 to-blue-500/5 rounded-2xl border border-purple-500/10 backdrop-blur-sm">
            <p className="text-gray-300 text-lg mb-4">
              Interested in working together? Let's build something amazing!
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-400 text-white font-medium rounded-lg hover:scale-105 transition-transform duration-300 shadow-lg shadow-purple-600/30"
            >
              Get in Touch
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-30px) translateX(-10px); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-15px) translateX(15px); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.2; }
        }
        
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slide {
          0% { transform: translateX(-100%); }
          50% { transform: translateX(100%); }
          100% { transform: translateX(200%); }
        }
        
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        
        .animate-float-slow {
          animation: float-slow 12s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 10s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
        
        .animate-slide {
          animation: slide 2s linear infinite;
        }
        
        /* Hide scrollbar but keep functionality */
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default About;