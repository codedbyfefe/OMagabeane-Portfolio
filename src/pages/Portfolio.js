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
          Here’s a collection of projects I'm proud to present. These projects blend my love for thoughtful design, coding and a little bit of creative magic. From mobile app demos that make life easier, to game prototypes that spark playful strategy, and a personal portfolio that ties it all together — each project is a mix of problem-solving, storytelling, and design that puts the user first.
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

