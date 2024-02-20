import ProjectCard from "./ProjectCard";
import Image from "next/image";

const projects = [
  {
    image: "./images/projects/pr01.png",
    name: "React Portfolio Site",
    techs: ["React", "NextJS", "TailwindCSS"],
    description: "React Portfolio Site with Theme Switching",
    gitlink: "https://github.com/ozayo/chas-portfolio",
    livelink: "https://chas-portfolio.vercel.app/",
  },
  {
    image: "./images/projects/pr06.png",
    name: "React Components Library",
    techs: ["React", "Vite", "Tailwind", "React Router"],
    description: "Created a component library with React.",
    gitlink: "https://github.com/ozayo/React-Components-Library",
    livelink: "https://components-library-nine.vercel.app/",
  },
  {
    image: "./images/projects/pr04.png",
    name: "React Clock",
    techs: ["React", "Vite"],
    description: "Buil cities clock & timer with React.",
    gitlink: "https://github.com/ozayo/chas_react-clock",
    livelink: "https://chas-react-clock-pi.vercel.app/",
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
