import { Link } from "react-router-dom";

function ProjectCard({ title, description, image, slug, category }) {
  return (
    <Link
      to={`/projects/${slug}`}
      className="group block transition-all duration-500 hover:-translate-y-2"
    >
      <div className="relative overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900/40 backdrop-blur-sm">

        {/* Category Tag */}
        <span className="absolute top-4 left-4 text-xs tracking-wider uppercase px-3 py-1 border border-white/20 text-white/70 bg-black/40 backdrop-blur-md">
          {category}
        </span>

        {/* Image */}
        <img
          src={image}
          alt={title}
          className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Subtle overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />
      </div>

      <div className="mt-6 space-y-2">
        <p className="text-xs text-gray-500 tracking-wide uppercase">
          {description}
        </p>

        <h3 className="text-xl font-semibold text-white group-hover:text-purple-400 transition-colors duration-300">
          {title}
        </h3>
      </div>
    </Link>
  );
}

export default ProjectCard;