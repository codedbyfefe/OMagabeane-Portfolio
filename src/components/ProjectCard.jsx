export default function ProjectCard({ title, description, image }) {
  return (
    <div className="rounded overflow-hidden shadow-md hover:shadow-xl transition">
      <img src={image} alt={title} className="w-full h-60 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  )
}
