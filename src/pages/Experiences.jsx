import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeExperience, setActiveExperience] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const experiences = [
    {
      id: 1,
      role: "Trainee Developer (IoT & Backend)",
      company: "College Placement Company",
      period: "7th Semester - Present",
      type: "Selected & Offered Trainee Role",
      status: "current",
      icon: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
      achievements: [
        "Selected in campus placement drive during 7th semester",
        "Working on live IoT projects combining backend and IoT technologies",
        "Received stipend during internship period",
        "Offered trainee role based on performance"
      ],
      technologies: ["Node.js", "IoT", "Express", "MQTT", "REST APIs"],
      color: "from-purple-600 to-purple-400",
      gradient: "from-purple-600/20 to-purple-400/5"
    },
    {
      id: 2,
      role: "Backend Developer Intern",
      company: "100 Days Internship Program",
      period: "During College",
      type: "Live Project Experience",
      status: "completed",
      icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
      achievements: [
        "Worked on live IoT-based project integrating hardware with backend",
        "Developed RESTful APIs for IoT device communication",
        "Implemented data processing pipelines for sensor data"
      ],
      technologies: ["Node.js", "Express", "MongoDB", "IoT Sensors", "Data Processing"],
      color: "from-blue-600 to-cyan-400",
      gradient: "from-blue-600/20 to-cyan-400/5"
    }
  ];

  const achievements = [
    {
      icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
      title: "100+ Days",
      description: "Intensive internship experience"
    },
    {
      icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
      title: "Live Projects",
      description: "Real-world IoT implementations"
    },
    {
      icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
      title: "Team Collaboration",
      description: "Worked with IoT & backend teams"
    },
    {
      icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
      title: "Stipend Received",
      description: "Recognized for performance"
    }
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-[#0a0a0f] to-[#030014] text-white px-4 sm:px-6 py-20 pt-24 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gradient orbs */}
        <div className="absolute top-20 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-20 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[100px] animate-pulse-slow" style={{ animationDelay: '2s' }} />
        
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
          <span className="text-purple-400 font-mono text-sm tracking-wider">PROFESSIONAL JOURNEY</span>
        </div>

        {/* Title with animation */}
        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600">
              Work Experience
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mb-12">
            My professional journey in backend development and IoT, working on real-world projects 
            and gaining valuable industry experience.
          </p>
        </div>

        {/* Achievement Stats */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {achievements.map((stat, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-[#111118] to-[#1a1a24] p-6 rounded-2xl border border-purple-500/10 hover:border-purple-500/30 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 to-purple-400/0 group-hover:from-purple-600/10 group-hover:to-purple-400/10 rounded-2xl transition-all duration-300" />
              <div className="relative text-center">
                <div className="w-12 h-12 mx-auto mb-3 bg-purple-500/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={stat.icon} />
                  </svg>
                </div>
                <h3 className="text-sm font-semibold text-white mb-1">{stat.title}</h3>
                <p className="text-xs text-gray-400">{stat.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Timeline Experience */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-600 via-purple-400 to-transparent" />

          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className={`relative mb-12 transform transition-all duration-1000 delay-${index * 300} ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
              }`}
              onMouseEnter={() => setActiveExperience(exp.id)}
              onMouseLeave={() => setActiveExperience(null)}
            >
              {/* Timeline dot */}
              <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1/2">
                <div className={`relative w-5 h-5 rounded-full bg-gradient-to-r ${exp.color} ${
                  exp.status === 'current' ? 'animate-ping' : ''
                }`}>
                  <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${exp.color} blur-sm`} />
                </div>
              </div>

              {/* Content card - alternating layout */}
              <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:ml-auto md:pl-12' : 'md:mr-auto md:pr-12'} pl-20 md:pl-0`}>
                <div className="group relative">
                  {/* Glow effect */}
                  <div className={`absolute -inset-1 bg-gradient-to-r ${exp.color} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`} />
                  
                  {/* Main card */}
                  <div className={`relative bg-gradient-to-br from-[#111118] to-[#1a1a24] p-8 rounded-2xl border border-purple-500/10 group-hover:border-purple-500/30 transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-purple-600/20`}>
                    {/* Status badge */}
                    <div className="absolute top-4 right-4">
                      <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                        exp.status === 'current' 
                          ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                          : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                      }`}>
                        {exp.status === 'current' ? '● Current' : '✓ Completed'}
                      </span>
                    </div>

                    {/* Header with icon */}
                    <div className="flex items-start gap-4 mb-6">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${exp.gradient} p-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={exp.icon} />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h2 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors">
                          {exp.role}
                        </h2>
                        <p className="text-purple-400 text-lg mb-2">{exp.company}</p>
                        <div className="flex items-center gap-3 text-sm">
                          <span className="text-gray-400 flex items-center gap-1">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            {exp.period}
                          </span>
                          <span className="w-1 h-1 bg-purple-500/30 rounded-full" />
                          <span className="text-purple-400">{exp.type}</span>
                        </div>
                      </div>
                    </div>

                    {/* Achievements */}
                    <div className="space-y-3 mb-6">
                      {exp.achievements.map((achievement, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-3 text-gray-300 group/item"
                        >
                          <div className="mt-1.5">
                            <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                          <span className="text-sm group-hover/item:text-purple-300 transition-colors">
                            {achievement}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Technologies used */}
                    <div className="pt-4 border-t border-purple-500/10">
                      <h3 className="text-sm text-purple-400 mb-3 font-semibold">Technologies:</h3>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1.5 bg-purple-500/10 text-purple-400 text-xs rounded-lg border border-purple-500/20 hover:bg-purple-500/20 hover:border-purple-500/30 transition-all duration-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Experience level indicator */}
                    {activeExperience === exp.id && (
                      <div className="absolute -bottom-3 left-8 right-8 h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent rounded-full animate-pulse" />
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Key Highlights Section */}
        <div className={`mt-20 transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">
              Key Highlights
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* IoT Integration Card */}
            <div className="group relative bg-gradient-to-br from-[#111118] to-[#1a1a24] p-8 rounded-2xl border border-purple-500/10 hover:border-purple-500/30 transition-all duration-500 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 to-purple-400/0 group-hover:from-purple-600/10 group-hover:to-purple-400/10 rounded-2xl transition-all duration-500" />
              <div className="relative text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-purple-600/20 to-purple-400/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg className="w-10 h-10 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">IoT Integration</h3>
                <p className="text-gray-400 text-sm">
                  Successfully integrated hardware with backend systems for real-time data processing and device communication.
                </p>
              </div>
            </div>

            {/* API Development Card */}
            <div className="group relative bg-gradient-to-br from-[#111118] to-[#1a1a24] p-8 rounded-2xl border border-purple-500/10 hover:border-purple-500/30 transition-all duration-500 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 to-purple-400/0 group-hover:from-purple-600/10 group-hover:to-purple-400/10 rounded-2xl transition-all duration-500" />
              <div className="relative text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-purple-600/20 to-purple-400/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg className="w-10 h-10 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">RESTful APIs</h3>
                <p className="text-gray-400 text-sm">
                  Designed and developed robust RESTful APIs for seamless IoT device communication and data exchange.
                </p>
              </div>
            </div>

            {/* Data Processing Card */}
            <div className="group relative bg-gradient-to-br from-[#111118] to-[#1a1a24] p-8 rounded-2xl border border-purple-500/10 hover:border-purple-500/30 transition-all duration-500 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 to-purple-400/0 group-hover:from-purple-600/10 group-hover:to-purple-400/10 rounded-2xl transition-all duration-500" />
              <div className="relative text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-purple-600/20 to-purple-400/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg className="w-10 h-10 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Data Pipelines</h3>
                <p className="text-gray-400 text-sm">
                  Implemented efficient data processing pipelines for sensor data collection and analysis.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className={`mt-20 text-center transform transition-all duration-1000 delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-block p-8 bg-gradient-to-r from-purple-500/5 to-blue-500/5 rounded-2xl border border-purple-500/10 backdrop-blur-sm">
            <p className="text-gray-300 text-lg mb-4">
              Want to know more about my experience or discuss a project?
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-400 text-white font-medium rounded-lg hover:scale-105 transition-transform duration-300 shadow-lg shadow-purple-600/30 group"
            >
              Let's Talk
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
      `}</style>
    </section>
  );
};

export default Experience;