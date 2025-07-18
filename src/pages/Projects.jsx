const projects = [
  {
    title: "Headphone Kart",
    tech: "HTML, CSS, Javascript",
    link: "https://github.com/ritik-only/Headphone-Kart",
    image: "https://images.pexels.com/photos/14541034/pexels-photo-14541034.jpeg"
  },
  {
    title: "Online Voting System",
    tech: "Java, MySQL",
    link: "https://github.com/ritik-only/onilne_university_voting_system",
    image: "https://images.pexels.com/photos/7103150/pexels-photo-7103150.jpeg"
  },
  {
    title: "DMOCIL (Agro Service)",
    tech: "React (Framer Motion), TailwindCSS",
    link: "https://dmocil.com/",
    image: "https://images.pexels.com/photos/1251026/pexels-photo-1251026.jpeg"
  }
];

const Projects = () => (
  <section id="projects" className="px-4 py-20 ">
    <h2 className="text-4xl font-semibold mb-10 text-white text-center transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-105">My Projects</h2>
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
      {projects.map((project, idx) => (
        <div
          key={idx}
          className="bg-gray-800 text-white rounded-lg overflow-hidden shadow-lg flex flex-col md:flex-row"
        >
        <div className="md:w-1/2 flex items-center justify-center">
  <img
    src={project.image}
    alt={project.title}
    className="w-40 h-40 object-cover rounded-full mx-auto my-4"
  />
</div>

          <div className="md:w-1/2 p-6 flex flex-col justify-center">
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p className="text-gray-300 mb-4">Tech Stack: {project.tech}</p>
            <a href={project.link} className="text-blue-400 hover:underline">
              View Project
            </a>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
