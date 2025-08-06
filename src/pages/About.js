import React from "react";

function About() {
  return (
    <section className="bg-black text-white px-6 py-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Image on the left for large screens */}
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
            passionate about the creating digital experiences.
          </h1>

          <p className="text-gray-400 text-lg leading-relaxed mb-8">
           I started my journey in design and development at the University of Witwatersrand with a curiosity for how things work in interactive media.
            Since then, I’ve explored various design systems, built full-stack application demos, digital game prototypes, research and
            and collaborated on creative projects. I'm based in South Africa and enjoy merging design with technology to bring ideas to life.
          </p>

          <p className="text-gray-400 leading-relaxed">
            Outside of coding and designing, you’ll find me learning new tools,
            constantly pushing boundaries and challenging myself to build better projects, maybe even taking a nap after an intense workout. I believe in storytelling through design
            and the power of simplicity.
          </p>
        </div>
      </div>

      {/* Skills Section */}
      <div className="mt-28 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-sm text-gray-300">
          {[
            "HTML5",
            "CSS3 / Tailwind",
            "JavaScript",
            "React",
            "Node.js",
            "Figma",
            "Git & GitHub",
            "C# (Unity based)",
          ].map((skill) => (
            <div key={skill} className="bg-gray-800 py-4 rounded-lg shadow">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
