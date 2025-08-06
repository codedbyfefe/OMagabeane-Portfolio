import React from "react";

function About() {
  return (
    <section className="bg-black text-white px-6 py-24 min-h-screen">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Left Column */}
        <div>
          <h1 className="text-5xl font-light leading-snug mb-6">
            Hello, I’m a super‑fun<br />
            front-end developer and designer<br />
            based in South Africa.
          </h1>
          <p className="text-lg text-gray-400 mb-8">
            I’m passionate about crafting clean, elegant, and user-friendly digital experiences.
            I focus on merging design and development to build modern, responsive websites that work beautifully.
          </p>

          <h2 className="text-2xl font-semibold mb-4">My Story</h2>
          <p className="text-gray-400 leading-relaxed mb-8">
            I started my journey in design and development at the University of Witwatersrand with a curiosity for how things work in interactive media.
            Since then, I’ve explored various design systems, built full-stack application demos,digital game prototypes and school project websites
            and collaborated on creative projects. My goal is to create digital solutions that are not only visually
            appealing but also meaningful and functional.
          </p>
        </div>

        {/* Right Column – Image */}
        <div className="hidden md:block">
          <img
            src="/images/grad.jpg" // change image-find a different image to use
            alt="Portrait or creative graphic"
            className="w-full rounded-xl shadow-lg object-cover"
          />
        </div>
      </div>

      {/* Services Section */}
      <div className="mt-20 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Services</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-2">Web Design</h3>
            <p className="text-gray-400 leading-relaxed">
              Intuitive, responsive, and minimal interfaces with a focus on user experience.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Front-end Development</h3>
            <p className="text-gray-400 leading-relaxed">
              Clean, maintainable code using HTML5, CSS3, React, Tailwind CSS, and JavaScript.
            </p>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="mt-20 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-sm text-gray-300">
          <div className="bg-gray-800 py-4 rounded">HTML5</div>
          <div className="bg-gray-800 py-4 rounded">CSS3 / Tailwind</div>
          <div className="bg-gray-800 py-4 rounded">JavaScript</div>
          <div className="bg-gray-800 py-4 rounded">React</div>
          <div className="bg-gray-800 py-4 rounded">Next.js</div>
          <div className="bg-gray-800 py-4 rounded">Figma</div>
          <div className="bg-gray-800 py-4 rounded">C# Unity-based</div>
          <div className="bg-gray-800 py-4 rounded">Git / GitHub</div>
          <div className="bg-gray-800 py-4 rounded">Firebase</div>
        </div>
      </div>
    </section>
  );
}

export default About;
