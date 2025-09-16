import React from "react";

function About() {
  const skills = [
    { name: "HTML5", icon: "devicon-html5-plain" },
    { name: "CSS3 / Tailwind", icon: "devicon-tailwindcss-plain" },
    { name: "JavaScript", icon: "devicon-javascript-plain" },
    { name: "React", icon: "devicon-react-original" },
    { name: "React Native", icon: "devicon-react-original" },
    { name: "Node.js", icon: "devicon-nodejs-plain" },
    { name: "Figma", icon: "devicon-figma-plain" },
    { name: "Krita", icon: "devicon-photoshop-plain" }, // placeholder (no Krita icon in devicon)
    { name: "Git & GitHub", icon: "devicon-git-plain" },
    { name: "C# (Unity)", icon: "devicon-csharp-plain" },
  ];

  return (
    <section className="bg-black text-white px-6 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Image on the left */}
        <div className="order-2 lg:order-1">
          <img
            src="/images/grad2.jpg"
            alt="Creative portrait"
            className="w-full h-auto rounded-xl object-cover shadow-xl"
          />
        </div>

        {/* Bio text on the right */}
        <div className="order-1 lg:order-2">
          <h1 className="text-5xl font-light leading-tight mb-6">
            I’m Ofentse,<br />
            a designer & developer<br />
            passionate about creating great digital experiences.
          </h1>

          <p className="text-gray-400 text-lg leading-relaxed mb-8">
            I started my journey in design and development at the University of
            Witwatersrand with a curiosity for how things work in interactive
            media. Since then, I’ve explored various design systems, built
            application demos, digital game prototypes, research and collaborated
            on creative projects. I'm based in Johannesburg, South Africa and
            enjoy merging design with technology to bring ideas to life.
          </p>

          <p className="text-gray-400 leading-relaxed">
            Outside of coding and designing, you’ll find me learning new tools, conducting analyes,
            constantly pushing boundaries and challenging myself to build better
            projects, maybe even taking a nap after an intense workout, or
            stressing over a missing semi-colon or trying to visualise data to make my ideas make sesne. I believe in storytelling
            through design, merging visuals and technical components and the power of simplicity.
          </p>
        </div>
      </div>

      {/* Skills Section */}
      <div className="mt-28 max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-12 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
          Skills
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
          {skills.map((skill, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center p-6 rounded-xl border border-gray-800 bg-gradient-to-br from-[#1a1a1a] to-[#111] shadow-lg hover:shadow-pink-500/30 hover:scale-105 transition-all duration-300"
            >
              {/* Icon */}
              <i
                className={`${skill.icon} text-5xl mb-3 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 text-transparent bg-clip-text`}
              ></i>
              {/* Label */}
              <span className="font-medium text-gray-200 group-hover:text-white">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
