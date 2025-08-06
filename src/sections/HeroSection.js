import React from "react";

const Hero = () => {
  return (
    <section className="w-full h-screen bg-black text-white flex items-center justify-center overflow-hidden pt-20">
      <div className="max-w-7xl w-full h-full grid md:grid-cols-2">
        {/* Left side - Text/description */}
        <div className="flex flex-col justify-center px-8 md:px-16">
          <h1 className="text-4xl md:text-5xl font-light leading-snug mb-6">
            Heyy there, I’m Ofentse.<br />
            Front-end developer & UI/UX designer based <br />
            in Johannesburg, SA.
          </h1>
          <p className="text-gray-400 text-sm">
            Let's get to know me and explore my work!
          </p>
        </div>

        {/* Right side - Image */}
        <div className="hidden md:block">
          <img
            src="/images/grad.jpg"
            alt="Portrait"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

