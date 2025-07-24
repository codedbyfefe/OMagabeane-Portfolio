import React from "react";

const Hero = () => {
  return (
    <section className="w-full bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
            Hello, I’m a Creative Front-End Developer
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            I build elegant websites that blend beauty and functionality using React, Tailwind, and UX principles.
          </p>
          <a
            href="#portfolio"
            className="inline-block  text-white px-6 py-3 rounded-xl text-sm hover:bg-gray-800 transition"
          >
            View Portfolio
          </a>
        </div>

        <div>
          <img
            src="/images/hero.jpg"
            alt="Hero"
            className="w-full rounded-xl shadow-xl object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
