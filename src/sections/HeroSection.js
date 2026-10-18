
import React from "react";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black text-white flex items-center py-20 md:py-12">

      {/* Ambient purple and blue background glow */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-700/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 px-6 md:px-12 lg:px-16 items-center gap-10 lg:gap-14">

        {/* Left — Hero Text */}
        <div className="max-w-xl">

          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-7">
            <span className="w-8 h-[2px] bg-gradient-to-r from-blue-400 to-fuchsia-500" />
            <span className="text-xs md:text-sm uppercase tracking-[0.3em] text-gray-300">
              Software Developer
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light leading-[1.12] tracking-tight mb-7">
            Engineering
            <span className="block font-semibold bg-gradient-to-r from-blue-400 via-violet-400 to-fuchsia-500 bg-clip-text text-transparent py-1">
              front-end solutions
            </span>
            <span className="block">
              with a product mindset.
            </span>
          </h1>

          {/* Description */}
          <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-lg mb-9">
            I’m a Software Developer who loves building things that
            actually make sense to users. I focus on connecting solid
            frontend architecture with clean, thoughtful design.
          </p>
          
        </div>

        {/* Right — Developer Image */}
        <div className="relative flex justify-center items-center min-w-0">

          {/* Neon glow behind the image */}
          <div className="absolute inset-8 bg-gradient-to-br from-violet-600/25 via-blue-500/15 to-fuchsia-600/25 blur-[70px] rounded-full" />

          {/* Image container */}
          <div className="relative w-full max-w-2xl">

            <img
              src="/images/home.png"
              alt="Black woman coding in a neon-lit workspace"
              className="
                relative
                block
                w-full
                h-[320px]
                sm:h-[420px]
                lg:h-[500px]
                object-cover
                object-center
                rounded-sm
                shadow-[0_0_50px_rgba(139,92,246,0.12)]
              "
            />

            {/* Subtle image blending */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-transparent pointer-events-none rounded-sm" />

          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
