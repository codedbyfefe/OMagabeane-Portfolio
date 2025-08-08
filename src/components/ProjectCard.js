import { Link } from "react-router-dom";

function ProjectCard({ title, description, image, slug }) {
  return (
    <Link to={`/projects/${slug}`} className="group cursor-pointer transition-transform duration-300 hover:scale-[1.02]">
      <div className="relative overflow-hidden rounded-lg border border-gray-800">
        <img src={image} alt={title} className="w-full h-auto object-cover" />
      </div>
      <p className="mt-4 text-sm text-gray-400 tracking-wide uppercase">{description}</p>
      <h3 className="text-xl font-semibold text-white mt-1">{title}</h3>
    </Link>
  );
}

export default ProjectCard;
