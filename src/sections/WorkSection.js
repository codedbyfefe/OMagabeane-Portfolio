
import { Link } from "react-router-dom";

function WorkSection() {
  const projects = [
    {
      title: "Absa Family",
      description: "Absa Design Hackathon project.",
      image: "/images/absa fam.jpeg",
      slug: "absa-family",
    },
    {
      title: "The Semantic Brancher",
      description: "An experimental research probe.",
      image: "/images/SB.png",
      slug: "the-semantic-brancher",
    },
  ];

  return (
    <section
      id="portfolio"
      className="bg-black text-white px-6 md:px-16 py-16 md:py-20"
    >
      <div className="max-w-6xl mx-auto">

     
{/* Heading */}
<div className="mb-9 text-center">

  <h2 className="text-3xl md:text-4xl font-light">
    Recent <span className="font-semibold text-purple-400">Projects</span>
  </h2>
  <div className="mt-5 h-px max-w-6xl mx-auto bg-gradient-to-r from-transparent via-purple-500/60 to-transparent" />
</div>


        {/* Project cards  */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <Link
              key={project.slug}
              to={`/projects/${project.slug}`}
              className="group rounded-xl overflow-hidden border border-white/10 bg-[#111111] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/50 hover:shadow-[0_8px_30px_rgba(139,92,246,0.10)]"
            >
              <div className="w-full h-64 bg-[#171717] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <div className="px-5 py-5 text-left">
                <div className="flex items-center justify-between gap-3">
                    <h3 className="text-xl font-semibold text-white group-hover:text-purple-300 transition-colors">
      {project.title}
    </h3>
  </div>

  <p className="text-white text-sm mt-2">
    {project.description}
  </p>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}

export default WorkSection;
