import ProjectCard from '../components/ProjectCard'

const projects = [
  { title: "Project One", description: "Description for project one.", image: "/images/project-1.jpg" },
  { title: "Project Two", description: "Description for project two.", image: "/images/project-2.jpg" },
]

export default function Portfolio() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-24">
      <h2 className="text-3xl font-bold mb-6">Portfolio</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((proj, i) => (
          <ProjectCard key={i} {...proj} />
        ))}
      </div>
    </section>
  )
}
