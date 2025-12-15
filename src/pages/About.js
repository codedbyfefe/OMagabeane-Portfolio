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
<div className="order-2 lg:order-1 flex justify-center lg:justify-start lg:pl-32">
  <img
    src="/images/grad2.jpg"
    alt="Creative portrait"
    className="
      w-[85%]
      max-w-lg
      h-auto
      object-cover
      rounded-md
      shadow-xl
    "
  />
</div>

        {/* Bio text on the right */}
<div className="order-1 lg:order-2 max-w-xl lg:ml-auto">
  <h1 className="text-4xl lg:text-5xl font-light leading-tight mb-8">
    I’m <span className="font-medium">Ofentse</span>,<br />
    a developer<br />
    crafting thoughtful digital experiences.
  </h1>

  {/* Intro paragraph */}
  <p className="text-gray-300 text-lg leading-relaxed mb-6">
    I began my journey in design and development at the University of
    Witwatersrand, driven by curiosity around how interactive systems work and
    how people experience them.
  </p>

  {/* Body text */}
  <p className="text-gray-400 leading-relaxed mb-6">
    Since then, I’ve explored design systems, built application demos, created
    digital game prototypes, conducted research, and collaborated on creative
    projects. Based in Johannesburg, South Africa, I enjoy merging design and
    technology to bring ideas to life with clarity and intention.
  </p>

  <p className="text-gray-400 leading-relaxed">
    Outside of coding and designing, I’m usually learning new tools, refining my
    craft, or pushing myself to build better projects — sometimes after an
    intense workout, sometimes while stressing over a missing semicolon. I
    believe in storytelling through design, strong visual systems, and the power
    of simplicity.
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
