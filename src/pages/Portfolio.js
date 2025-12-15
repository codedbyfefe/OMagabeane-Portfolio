import ProjectCard from '../components/ProjectCard';
import projects from '../data/projects';

function Portfolio() {
  return (
    <section className="bg-[#0c0c0c] text-white px-6 py-24">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl font-bold mb-4 text-center">Projects</h2>

        {/* Description */}
        <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-12 text-center">
         ✨ A Peek Into My Work ✨ <br/>
          From fun game prototypes to handy mobile apps, each project mixes clever design, clean code, and a spark of creativity — all to make experiences that are easy and enjoyable for users.
        </p>

        {/* Project Grid */}
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

