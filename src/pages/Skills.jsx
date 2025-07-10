const skills = [
  { name: "HTML5", icon: "https://img.icons8.com/color/48/html-5.png" },
  { name: "CSS3", icon: "https://img.icons8.com/color/48/css3.png" },
  { name: "JavaScript", icon: "https://img.icons8.com/color/48/javascript.png" },
  { name: "React", icon: "https://img.icons8.com/officel/48/react.png" },
  { name: "Python", icon: "https://img.icons8.com/color/48/python.png" },
  { name: "Tailwind CSS", icon: "https://img.icons8.com/color/48/tailwindcss.png" },
  { name: "Git", icon: "https://img.icons8.com/color/48/git.png" },
  { name: "GitHub", icon: "https://img.icons8.com/ios-filled/48/github.png" },
  { name: "MySQL", icon: "https://img.icons8.com/ios-filled/48/mysql-logo.png" },
  { name: "SQL", icon: "https://img.icons8.com/ios-filled/48/sql.png" },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-20 px-4 text-center "
    >
      <h2 className="text-4xl font-bold text-white mb-10 transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-105">Technical Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="bg-gray-800 backdrop-blur-lg text-white rounded-lg shadow p-6 flex flex-col items-center hover:scale-105 transition-transform duration-300"
          >
            <img src={skill.icon} alt={skill.name} width={48} height={48} />
            <p className="mt-4 font-semibold">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
