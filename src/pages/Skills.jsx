import React from "react";

const skills = [
  { name: "Node.js", level: 90 },
  { name: "Express.js", level: 85 },
  { name: "MongoDB", level: 85 },
  { name: "REST APIs", level: 90 },
  { name: "Docker", level: 70 },
  { name: "Git & GitHub", level: 85 },
  { name: "System Design", level: 75 },
  { name: "JavaScript", level: 90 },
];

const Skills = () => {
  return (
    <section className="min-h-screen bg-[#0a0a0f] text-white px-6 py-20">
      <div className="max-w-5xl mx-auto">

        <h1 className="text-4xl md:text-5xl font-bold text-purple-400 mb-12">
          Skills
        </h1>

        <div className="space-y-8">
          {skills.map((skill) => (
            <div key={skill.name}>
              <div className="flex justify-between mb-2 text-sm">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>

              <div className="w-full bg-[#1a1a24] rounded-full h-2">
                <div
                  className="bg-purple-500 h-2 rounded-full"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;