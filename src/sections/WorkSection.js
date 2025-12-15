import { Link } from "react-router-dom";

function WorkSection() {
  const projects = [
    {
      title: "Elevyn App",
      description: "A Balanced Lifestyle App for Student-Athletes.",
      image: "/images/Elevyn Poster.jpg",
      slug: "elevyn-app",
    },
    {
      title: "UNII Student App",
      description: "A student lifestyle app.",
      image: "/images/UNII1.png",
      slug: "UNII-App",
    },
  ];

  return (
    <section className="px-6 py-20 bg-white text-center">
      <h2 className="text-3xl font-bold mb-6">Projects</h2>
      <p className="text-gray-600 max-w-2xl mx-auto mb-12">
        A showcase of my latest projects across design and development.
      </p>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <Link
            key={index}
            to={`/projects/${project.slug}`} // Internal route using slug
            className="group rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-1"
          >
            <div className="w-full h-64 bg-gray-100 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="bg-white px-6 py-4 text-left">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 text-sm">{project.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default WorkSection;

