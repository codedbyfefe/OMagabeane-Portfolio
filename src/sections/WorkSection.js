import { useParams } from "react-router-dom";
import projects from "../data/projects";

function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) return <div className="text-center text-white">Project not found</div>;

  return (
    <div className="bg-[#0c0c0c] text-white px-6 py-24">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Header */}
        <div className="space-y-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">{project.title}</h1>
          <p className="text-sm text-gray-400">{project.type}</p>
        </div>

        {/* Info Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-gray-300 border-t border-b border-gray-700 py-6">
          <div>
            <p className="font-medium text-white">Role</p>
            <p>{project.role}</p>
          </div>
          <div>
            <p className="font-medium text-white">Tools Used</p>
            <p>{project.tools.join(", ")}</p>
          </div>
          <div>
            <p className="font-medium text-white">Date</p>
            <p>{project.date}</p>
          </div>
        </div>

        {/* Sections */}
        <div className="space-y-10 text-lg text-gray-300 leading-relaxed">
          <div>
            <h2 className="text-xl font-semibold text-white mb-2">Problem</h2>
            <p>{project.problem}</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-white mb-2">Process</h2>
            <p>{project.process}</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-white mb-2">Outcome</h2>
            <p>{project.outcome}</p>
          </div>
        </div>

        {/* Screenshots */}
        <div className="space-y-8">
          {project.images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`${project.title} screenshot ${i + 1}`}
              className="w-full rounded-lg border border-gray-800"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectDetail;
