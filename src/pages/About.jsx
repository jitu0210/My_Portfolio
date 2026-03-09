import React from "react";

const About = () => {
  return (
    <section className="min-h-screen bg-[#0a0a0f] text-white px-6 py-20">
      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-purple-400 mb-10">
          About Me
        </h1>

        {/* Intro */}
        <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mb-12">
          Hi, I'm <span className="text-purple-400 font-semibold">Jitu</span>, a 
          backend developer focused on building scalable and reliable systems.  
          I enjoy designing efficient APIs, managing databases, and building 
          server-side applications that power modern web platforms.
        </p>

        <p className="text-gray-400 max-w-3xl mb-16">
          My main expertise lies in Node.js backend development, database design, 
          REST API architecture, and system scalability. I am passionate about 
          clean architecture, performance optimization, and building cloud-ready 
          applications.
        </p>

        {/* Tech Stack */}
        <h2 className="text-2xl font-semibold text-purple-400 mb-8">
          Tech Stack
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          {[
            "Node.js",
            "Express.js",
            "MongoDB",
            "REST APIs",
            "Docker",
            "Git & GitHub",
            "System Design",
            "JavaScript",
          ].map((tech) => (
            <div
              key={tech}
              className="border border-purple-900/40 bg-[#111118] rounded-lg p-4 text-center hover:border-purple-500 transition"
            >
              {tech}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default About;