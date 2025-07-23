import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "Budgeteer App",
      description: "A personal budgeting tool with category tracking.",
      tech: "React, Tailwind, Context API",
      link: "https://github.com/yourname/budgeteer",
    },
    {
      title: "Weather App",
      description: "Pulls real-time weather using OpenWeather API.",
      tech: "JavaScript, CSS, HTML",
      link: "#",
    },
  ];

  return (
    <section className="px-6 py-10">
      <h2 className="text-3xl font-bold mb-6">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((proj, i) => (
          <ProjectCard key={i} {...proj} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
