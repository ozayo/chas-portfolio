import ProjectCard from "./ProjectCard";
import Image from "next/image";

const projects = [
  {
    image: "./images/projects/pr01.png",
    name: "React Porfollio",
    techs: ["React", "NextJS", "TailwindCSS"],
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    gitlink: "https://github.com/project1",
    livelink: "https://project1.com",
  },
  {
    image: "./images/projects/pr05.png",
    name: "Proje 3",
    techs: ["VueJS", "NuxtJS", "Bootstrap"],
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    gitlink: "https://github.com/project2",
    livelink: "https://project2.com",
  },
  {
    image: "./images/projects/pr04.png",
    name: "Proje 3",
    techs: ["VueJS", "NuxtJS", "Bootstrap"],
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    gitlink: "https://github.com/project2",
    livelink: "https://project2.com",
  },
];

const HomeProjects = () => {
  return (
    <div className="py-14 px-4">
      <div className="text-center mb-14">
        <h3 className="text-3xl font-extrabold mb-3">Latest Projects</h3>
        <p>
          You can see some of my recent projects below. To see all of my
          projects, please visit my{" "}
          <a
            className="underline decoration-fuchsia-600 hover:decoration-4 underline-offset-4"
            href="/projects"
          >
            projects page.
          </a>
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.name} {...project} />
        ))}
      </div>
    </div>
  );
};

export default HomeProjects;
