import ProjectCard from '../components/ProjectCard';
import projects from '../data/projects';


function Portfolio() {
  return (
    <section className="bg-[#0c0c0c] text-white px-6 py-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-16">
          {projects.map((proj, i) => (
            <ProjectCard key={i} {...proj} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
