import React from "react";

const projects = [
  {
    title: "AI PPT Generator",
    description:
      "An AI-powered application that generates PowerPoint presentations automatically using text prompts.",
    tech: "Node.js, Express, MongoDB, OpenAI API",
    github: "#",
  },
  {
    title: "URL Shortener API",
    description:
      "A scalable backend API to shorten URLs and track analytics using MongoDB.",
    tech: "Node.js, Express, MongoDB",
    github: "#",
  },
  {
    title: "Cloud Image Upload System",
    description:
      "Image upload backend using Cloudinary with secure REST APIs and file handling.",
    tech: "Node.js, Cloudinary, MongoDB",
    github: "#",
  },
];

const Projects = () => {
  return (
    <section className="min-h-screen bg-[#0a0a0f] text-white px-6 py-20">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-4xl md:text-5xl font-bold text-purple-400 mb-14">
          Projects
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-[#111118] border border-purple-900/40 rounded-xl p-6 hover:border-purple-500 transition"
            >

              <h2 className="text-xl font-semibold mb-3">
                {project.title}
              </h2>

              <p className="text-gray-400 text-sm mb-4">
                {project.description}
              </p>

              <p className="text-purple-400 text-sm mb-5">
                {project.tech}
              </p>

              <a
                href={project.github}
                className="text-sm border border-purple-500 px-4 py-2 rounded-lg hover:bg-purple-600 transition"
              >
                View Code
              </a>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Projects;