import React from "react";

const Hero = () => {
  return (
    <section className="w-full min-h-screen bg-black text-white flex items-center pt-0">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 px-8 md:px-16 items-center gap-16">

        {/* Left – Text */}
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl font-light leading-tight mb-6">
            Front-end development,<br />
            shaped by design thinking.
          </h1>

          <p className="text-gray-400 text-lg leading-relaxed max-w-md">
            I’m a front-end software developer who builds thoughtful, visually
            refined interfaces — translating ideas into clean, usable digital
            experiences.
          </p>
        </div>

 {/* Right – Image */}
<div className="hidden md:flex justify-center items-start">
  <img
    src="/images/Heroimg.png"
    alt="Portrait"
    className="
      w-full
      max-w-xl
      h-auto
      object-cover
      rounded-sm
      shadow-xl
      -mt-8
    "
  />
</div>
      </div>
    </section>
  );
};

export default Hero;
