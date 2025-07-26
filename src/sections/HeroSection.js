import React from "react";

const Hero = () => {
  return (
    <section className="w-full h-screen bg-black text-white flex items-center justify-center overflow-hidden">
      <div className="max-w-7xl w-full h-full grid md:grid-cols-2">
        {/* Left side - Text/description */}
        <div className="flex flex-col justify-center px-8 md:px-16">
          <h1 className="text-4xl md:text-5xl font-light leading-snug mb-6">
            Heyy There, I’m a super-fun<br />
            Front-end developer & UI/UX designer based <br />
            in Johannesburg,SA .
          </h1>
          <p className="text-gray-400 text-sm">
            Lorem ipsum dolor sit amet, consectetur<br />
            adipiscing elit. Suspendisse aliqu adap.
          </p>
        </div>

        {/* Right side - Image*/}
        <div className="hidden md:block">
          <img
            src="/images/hero.jpg"
            alt="Portrait"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
