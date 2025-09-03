import { useParams } from "react-router-dom";
import projects from "../data/projects";

function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project)
    return <div className="text-center text-white py-20">Project not found</div>;

  return (
    <div className="bg-[#0c0c0c] text-white px-6 py-16">
      <div className="max-w-6xl mx-auto space-y-20">
        {/* Back Button */}
        <div>
          <a
            href="/portfolio"
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-300 bg-[#1a1a1a] rounded-full border border-gray-800 hover:bg-gray-800 hover:text-white transition duration-200"
          >
            ← Back to Portfolio
          </a>
        </div>

        {/* Title & Description */}
        <div className="text-center space-y-5">
          <h1 className="text-5xl font-extrabold tracking-tight bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            {project.title}
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Main Image */}
        {project.screens.length > 0 && (
          <div className="max-w-4xl mx-auto">
            <img
              src={project.screens[0]}
              alt={`${project.title} main`}
              className="w-full rounded-2xl border border-gray-800 shadow-xl hover:scale-[1.01] transition-transform duration-500"
            />
          </div>
        )}

        {/* Role & Tools */}
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-start md:items-center gap-6 border-b border-gray-800 pb-6">
          <p className="text-gray-300">
            <span className="font-semibold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Role:
            </span>{" "}
            {project.role}
          </p>
          <p className="text-gray-300">
            <span className="font-semibold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Tools:
            </span>{" "}
            {project.tools}
          </p>
        </div>

        {/* Project Sections */}
        <div className="space-y-16">
          {/* Overview */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Overview
            </h2>
            <p className="text-gray-300 leading-relaxed">{project.overview}</p>
          </section>

          {/* Problem Section (Bullets + Image Right) */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mb-3">
                Problem
              </h2>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                {project.problem
                  .split(".")
                  .filter((item) => item.trim() !== "")
                  .map((item, idx) => (
                    <li key={idx}>{item.trim()}</li>
                  ))}
              </ul>
            </div>
            {project.screens[1] && (
              <img
                src={project.screens[1]}
                alt={`${project.title} problem`}
                className="rounded-xl border border-gray-800 shadow-lg hover:scale-[1.02] transition duration-300"
              />
            )}
          </section>

          {/* Solution Section (Bullets + Image Left) */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {project.screens[2] && (
              <img
                src={project.screens[2]}
                alt={`${project.title} solution`}
                className="rounded-xl border border-gray-800 shadow-lg hover:scale-[1.02] transition duration-300 order-last md:order-first"
              />
            )}
            <div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-pink-400 bg-clip-text text-transparent mb-3">
                Solution
              </h2>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                {project.solution
                  .split(".")
                  .filter((item) => item.trim() !== "")
                  .map((item, idx) => (
                    <li key={idx}>{item.trim()}</li>
                  ))}
              </ul>
            </div>
          </section>

          {/* Process (Bullets) */}
          <section>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-4">
              Process
            </h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              {project.process
                .split(".")
                .filter((step) => step.trim() !== "")
                .map((step, idx) => (
                  <li key={idx}>{step.trim()}</li>
                ))}
            </ul>
          </section>

          {/* Outcome (Bullets) */}
          <section>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Outcome
            </h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              {project.outcome
                .split(".")
                .filter((item) => item.trim() !== "")
                .map((item, idx) => (
                  <li key={idx}>{item.trim()}</li>
                ))}
            </ul>
          </section>

          {/* Reflection */}
          <section className="border-t border-gray-800 pt-6">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
              Reflection
            </h2>
            <p className="text-gray-300 leading-relaxed">
              {project.reflection}
            </p>
          </section>
        </div>

        {/* Gallery */}
        {project.screens.length > 3 && (
          <div className="border-t border-gray-800 pt-10">
            <h3 className="text-2xl font-semibold bg-gradient-to-r from-blue-400 to-pink-400 bg-clip-text text-transparent mb-6">
              Gallery
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {project.screens.slice(3).map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`${project.title} screenshot ${i + 4}`}
                  className="rounded-lg border border-gray-800 shadow-lg hover:scale-[1.03] transition-transform duration-300"
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProjectDetail;
