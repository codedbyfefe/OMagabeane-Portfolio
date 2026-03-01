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
          <h2 className="text-5xl font-light tracking-tight mb-6">
            Hybrid Work
          </h2>

          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            I design systems. I build interfaces. I prototype interactive worlds.
            My work sits at the intersection of front-end engineering,
            UI/UX thinking, and game systems design.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center flex-wrap gap-8 mb-20 border-b border-neutral-800 pb-6">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`text-sm tracking-widest uppercase transition-all duration-300 ${
                activeCategory === category
                  ? "text-white border-b border-white pb-2"
                  : "text-gray-500 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
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