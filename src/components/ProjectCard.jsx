import { FaCode, FaLink } from "react-icons/fa";

/* eslint-disable react/prop-types */
const ProjectCard = ({ project }) => {
  return (
    <div
      key={project.title}
      className="max-w-sm overflow-hidden group p-2 bg-[#222831] bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg"
    >
      <img
        className="w-full h-52 cursor-pointer"
        src={project.projectImg}
        alt=""
        loading="lazy"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-[#00ADB5]">
          {project.title}
        </div>
      </div>
      <div className="px-6 pt-4 pb-2 flex flex-wrap justify-center text-xs">
        {project?.used_tools.map((tool, i) => (
          <span
            key={i}
            className="inline-block  bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-[#00ADB5] mr-2 mb-2"
          >
            {tool}
          </span>
        ))}
      </div>
      <div className="flex justify-center gap-10 my-2">
        <a
          href={project.Livelink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 text-[#00ADB5] hover:text-[#1eecf7]"
        >
          <FaLink></FaLink>
          <span>Live</span>
        </a>
        <a
          href={project.githublink_client}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 text-[#00ADB5] hover:text-[#1eecf7]"
        >
          <FaCode></FaCode>
          <span>Code</span>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
