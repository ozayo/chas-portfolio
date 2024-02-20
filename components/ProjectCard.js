import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({
  image,
  name,
  techs,
  description,
  gitlink,
  livelink,
}) => {
  return (
    <div className="group bg-slate-100 dark:bg-purple-50 rounded-lg shadow-lg hover:shadow-xl dark:shadow-white/20 p-4">
      <div className="overflow-hidden">
        <img
          src={image}
          alt={name}
          className="mb-4 rounded-lg group-hover:scale-110 transition duration-500 object-cover"
        />
      </div>
      <h2 className="text-xl mb-2 font-bold dark:text-black">{name}</h2>
      <div className="mb-4">
        {techs.map((tech) => (
          <span
            key={tech}
            className="mr-2 bg-violet-500 text-white px-2 py-1 rounded-md text-[11px] font-light"
          >
            {tech}
          </span>
        ))}
      </div>
      <p className="mb-4 dark:text-black text-sm">{description}</p>
      <div className="flex justify-between">
        <a
          href={gitlink}
          target="_blank"
          className="underline decoration-fuchsia-600 underline-offset-4 flex gap-1 items-center text-[14px] text-black hover:text-fuchsia-600 hover:decoration-3"
        >
          <FaGithub /> github link
        </a>
        <a
          href={livelink}
          target="_blank"
          className="underline decoration-fuchsia-600 underline-offset-4 flex gap-1 items-center text-[14px] text-black hover:text-fuchsia-600 hover:decoration-3"
        >
          <FaExternalLinkAlt /> see live
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
