import React from "react";

const certificates = [
  {
    title: "Node.js Backend Development",
    issuer: "Coursera",
    year: "2024",
  },
  {
    title: "MongoDB Developer Certification",
    issuer: "MongoDB University",
    year: "2024",
  },
  {
    title: "Docker Fundamentals",
    issuer: "Udemy",
    year: "2025",
  },
];

const Certificates = () => {
  return (
    <section className="min-h-screen bg-[#0a0a0f] text-white px-6 py-20">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-4xl md:text-5xl font-bold text-purple-400 mb-14">
          Certificates
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {certificates.map((cert) => (
            <div
              key={cert.title}
              className="bg-[#111118] border border-purple-900/40 rounded-xl p-6 hover:border-purple-500 transition"
            >

              <h2 className="text-lg font-semibold mb-3">
                {cert.title}
              </h2>

              <p className="text-gray-400 text-sm">
                Issued by {cert.issuer}
              </p>

              <p className="text-purple-400 text-sm mt-2">
                {cert.year}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Certificates;