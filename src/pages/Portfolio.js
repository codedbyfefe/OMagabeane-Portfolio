import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects";

function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Apps", "Games", "Websites", "UI/UX"];

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((proj) => proj.category === activeCategory);

  return (
    <section className="bg-[#0c0c0c] text-white px-6 py-28">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-light tracking-tight mb-6 bg-gradient-to-r from-blue-400 via-violet-400 to-fuchsia-500 bg-clip-text text-transparent">
           Projects
          </h2>

          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            I design systems. I build interfaces. I prototype interactive worlds and experiences.
            My work sits at the intersection of front-end engineering,
            UI/UX thinking, and game systems design.
          </p>
        </div>


           {/* Category filters */}
        <div className="flex justify-center flex-wrap gap-3 md:gap-4 mb-12 md:mb-16">
          {categories.map((category) => {
            const isActive = activeCategory === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                aria-pressed={isActive}
                className={`
                  relative rounded-full px-5 py-2.5 text-xs md:text-sm
                  uppercase tracking-[0.12em]
                  border transition-all duration-300
                  focus-visible:outline-none focus-visible:ring-2
                  focus-visible:ring-purple-400 focus-visible:ring-offset-2
                  focus-visible:ring-offset-black
                  ${
                    isActive
                      ? "border-transparent bg-gradient-to-r from-blue-500 via-violet-500 to-fuchsia-500 text-white shadow-[0_0_20px_rgba(139,92,246,0.2)]"
                      : "border-white/10 bg-white/[0.03] text-gray-400 hover:text-white hover:border-purple-400/50 hover:bg-purple-500/[0.08]"
                  }
                `}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-20 transition-all duration-500">
          {filteredProjects.map((proj) => (
            <ProjectCard key={proj.slug} {...proj} />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Portfolio;