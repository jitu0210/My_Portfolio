import React, { useState, useEffect } from "react";

const Certificates = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const certificatesData = [
    {
      id: 1,
      name: "KYP Certificate",
      organization: "Bihar Skill Development Mission",
      issuer: "Bihar Skill Development Mission",
      date: "Issued Jul 2022",
      credentialId: "KYP-BSDM-2022-001",
      driveLink: "https://drive.google.com/file/d/1KYP-certificate-view",
      skills: ["Soft Skills", "Information Technology"],
      category: "professional",
      gradient: "from-purple-900/40 to-purple-600/20",
      borderColor: "border-purple-500/30",
      icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
    },
    {
      id: 2,
      name: "Google Cloud AI",
      organization: "Google",
      issuer: "Google",
      date: "Issued Oct 2024",
      credentialId: "GCP-AI-2024-789",
      driveLink: "https://drive.google.com/file/d/1Google-cloud-ai-view",
      skills: ["Information Technology", "Cloud Storage", "Machine Learning", "AI Fundamentals", "TensorFlow", "Google Cloud"],
      category: "cloud",
      gradient: "from-blue-900/40 to-cyan-600/20",
      borderColor: "border-blue-500/30",
      icon: "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
    },
    {
      id: 3,
      name: "HackMivo Hackathon Participation Certificate",
      organization: "Admivo",
      issuer: "Admivo",
      date: "Issued May 2025",
      credentialId: "HACKMIVO-2025-456",
      driveLink: "https://drive.google.com/file/d/1HackMivo-certificate-view",
      skills: ["Node.js", "API Testing", "Team Collaboration", "Problem Solving", "Rapid Prototyping", "Presentation", "Innovation", "Coding"],
      category: "hackathon",
      gradient: "from-purple-900/40 to-pink-600/20",
      borderColor: "border-purple-500/30",
      icon: "M13 10V3L4 14h7v7l9-11h-7z"
    },
    {
      id: 4,
      name: "All India NCAT Test",
      organization: "Naukri.com",
      issuer: "Naukri.com",
      date: "Issued May 2025",
      credentialId: "683a1e35892c1f3133ab2898",
      driveLink: "https://drive.google.com/file/d/1NCAT-certificate-view",
      skills: ["Aptitude", "High Technical Aptitude", "Quantitative", "Logical Reasoning", "Verbal Ability"],
      category: "test",
      gradient: "from-emerald-900/40 to-teal-600/20",
      borderColor: "border-emerald-500/30",
      icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
    }
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-[#0a0a0f] to-[#030014] text-white px-4 sm:px-6 py-20 pt-24 relative overflow-hidden">
      {/* Animated background elements - subtle */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-0 w-96 h-96 bg-purple-600/5 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-20 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: '1s' }} />
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Decorative header - Left aligned */}
        <div className={`flex items-center gap-4 mb-8 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-purple-400 rounded-full" />
          <span className="text-purple-400 font-mono text-sm tracking-wider">CERTIFICATES</span>
        </div>

        {/* Title with animation - Left aligned */}
        <div className={`transform transition-all duration-1000 delay-200 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600">
              Licenses & certifications
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mb-12">
            Professional certifications and achievements that validate my skills and knowledge.
          </p>
        </div>

        {/* Stats Bar - Minimal - Left aligned */}
        <div className={`flex items-center gap-8 mb-16 transform transition-all duration-1000 delay-300 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="text-center">
            <div className="text-3xl font-light text-purple-400">4</div>
            <div className="text-xs text-gray-500 tracking-wider uppercase">Total</div>
          </div>
          <div className="w-px h-8 bg-purple-500/20" />
          <div className="text-center">
            <div className="text-3xl font-light text-purple-400">2022-25</div>
            <div className="text-xs text-gray-500 tracking-wider uppercase">Timeline</div>
          </div>
          <div className="w-px h-8 bg-purple-500/20" />
          <div className="text-center">
            <div className="text-3xl font-light text-purple-400">4</div>
            <div className="text-xs text-gray-500 tracking-wider uppercase">Issuers</div>
          </div>
        </div>

        {/* Certificates Grid - Masonry Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-fr">
          {certificatesData.map((cert, index) => (
            <div
              key={cert.id}
              className={`group transform transition-all duration-1000 delay-${index * 150} ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
              } ${index === 0 ? 'md:row-span-1' : ''}`}
            >
              {/* Certificate Card - Clean Design */}
              <div className={`h-full bg-gradient-to-br ${cert.gradient} backdrop-blur-sm rounded-2xl border ${cert.borderColor} p-6 relative overflow-hidden`}>
                {/* Minimal Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute inset-0" style={{
                    backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 20px)'
                  }} />
                </div>

                {/* Content */}
                <div className="relative">
                  {/* Header with Icon */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
                        <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={cert.icon} />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white leading-tight">
                          {cert.name}
                        </h3>
                        <p className="text-sm text-purple-400/80">{cert.organization}</p>
                      </div>
                    </div>
                    
                    {/* Category Tag */}
                    <span className="text-xs px-3 py-1 bg-purple-500/10 rounded-full border border-purple-500/20 text-purple-300">
                      {cert.category}
                    </span>
                  </div>

                  {/* Issuer & Date - Inline */}
                  <div className="flex items-center gap-4 text-xs text-gray-400 mb-4">
                    <span className="flex items-center gap-1">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z" />
                      </svg>
                      {cert.issuer}
                    </span>
                    <span className="w-1 h-1 bg-purple-500/30 rounded-full" />
                    <span className="flex items-center gap-1">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {cert.date}
                    </span>
                  </div>

                  {/* Credential ID */}
                  <div className="mb-4">
                    <span className="text-xs font-mono text-gray-500 bg-purple-500/5 px-3 py-1.5 rounded-lg border border-purple-500/10">
                      ID: {cert.credentialId}
                    </span>
                  </div>

                  {/* Skills - Compact Grid */}
                  <div className="mb-5">
                    <div className="flex flex-wrap gap-1.5">
                      {cert.skills.slice(0, 3).map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 bg-purple-500/5 text-purple-300 text-xs rounded-md border border-purple-500/10"
                        >
                          {skill}
                        </span>
                      ))}
                      {cert.skills.length > 3 && (
                        <span className="px-2.5 py-1 bg-purple-500/5 text-purple-300 text-xs rounded-md border border-purple-500/10">
                          +{cert.skills.length - 3}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Action Button - Clean */}
                  <div className="flex items-center justify-between pt-4 border-t border-purple-500/10">
                    <a
                      href={cert.driveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-purple-400 hover:text-purple-300 transition-colors"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                      <span>View Certificate</span>
                    </a>
                    
                    {cert.name.includes("HackMivo") && (
                      <span className="text-xs text-gray-500">
                        Participation
                      </span>
                    )}
                  </div>
                </div>

                {/* Corner Accent */}
                <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden">
                  <div className="absolute transform rotate-45 bg-purple-500/10 w-28 h-28 -top-14 -right-14" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-16 text-left">
          <p className="text-sm text-gray-500">
            All certificates are verified and available upon request
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.05; }
          50% { opacity: 0.1; }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        
        .delay-0 { transition-delay: 0ms; }
        .delay-150 { transition-delay: 150ms; }
        .delay-300 { transition-delay: 300ms; }
        .delay-450 { transition-delay: 450ms; }
      `}</style>
    </section>
  );
};

export default Certificates;