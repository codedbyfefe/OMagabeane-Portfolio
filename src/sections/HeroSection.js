import React from "react";

const Hero = () => {
  return (
    <section className="w-full min-h-screen bg-black text-white flex items-center pt-0">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 px-8 md:px-16 items-center gap-16">

        {/* Left – Text */}
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl font-light leading-tight mb-6">
            Engineering front-end solutions with a<br />
           product mindset.
          </h1>

          <p className="text-gray-400 text-lg leading-relaxed max-w-md">
          I’m a Software Developer who loves building things that actually make sense to users. I focus on connecting solid frontend architecture with clean, thoughtful design.
          </p>
        </div>

 {/* Right – Image */}

<div className="hidden md:flex justify-center items-center relative">
  {/* Purple glow behind the image */}
  <div className="absolute inset-0 bg-purple-600/20 blur-3xl rounded-full scale-75" />

  <img
    src="/images/Heroimg.png"
    alt="Black woman coding in a neon-lit workspace"
    className="
      relative
      w-full
      max-w-2xl
      h-[480px]
      object-cover
      object-center
      rounded-sm
      shadow-[0_0_60px_rgba(139,92,246,0.15)]
      -mt-4
      z-10
    "
  />
</div>
      </div>
    </section>
  );
};

export default Hero;
