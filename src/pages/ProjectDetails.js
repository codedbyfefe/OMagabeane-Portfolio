import { useParams } from "react-router-dom";
import projects from "../data/projects";

function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) return <div className="text-center text-white py-20">Project not found</div>;

  return (
    
   <div className="bg-[#0c0c0c] text-white px-6 py-16">
    <div className="max-w-6xl mx-auto space-y-12">
      {/* Back to Portfolio Button */}
      <div className="mb-4">
        <a
          href="/portfolio"
          className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-200 bg-[#1a1a1a] rounded-full border border-gray-700 hover:bg-gray-800 hover:text-white transition duration-200"
        >
          ← Back to Portfolio
        </a>
      </div>

      {/* Title + Meta */}
      <div className="text-center space-y-2">
        <h1 className="text-4xl font-bold">{project.title}</h1>
        <p className="text-sm text-gray-400">{project.description}</p>
      </div>

        {/* Smaller Hero Image */}
        {project.screens.length > 0 && (
          <div className="max-w-4xl mx-auto">
            <img
              src={project.screens[0]}
              alt={`${project.title} main screen`}
              className="w-full h-auto rounded-lg border border-gray-800 shadow-lg"
            />
          </div>
        )}

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-10">
          {/* Left Column - Info */}
          <div className="md:col-span-2 space-y-10">
            <div className="space-y-3 text-sm text-gray-400 border-b border-gray-700 pb-6">
              <p><span className="font-semibold text-white">Role:</span> {project.role}</p>
              <p><span className="font-semibold text-white">Tools:</span> {project.tools}</p>
            </div>

            {/* Content Sections */}
            <div className="space-y-10 text-base leading-relaxed text-gray-300">
              <section>
                <h2 className="text-lg font-semibold text-white mb-2">Problem</h2>
                <p>{project.problem}</p>
              </section>
              <section>
                <h2 className="text-lg font-semibold text-white mb-2">Process</h2>
                <p>{project.process}</p>
              </section>
              <section>
                <h2 className="text-lg font-semibold text-white mb-2">Outcome</h2>
                <p>{project.outcome}</p>
              </section>
            </div>
          </div>

          {/* Right Column - Screenshots Gallery */}
          <div className="space-y-6">
            {project.screens.slice(1).map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`${project.title} screenshot ${i + 2}`}
                className="w-full rounded-lg border border-gray-800"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetail;
