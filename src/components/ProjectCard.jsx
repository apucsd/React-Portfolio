/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {
  FaCogs,
  FaExternalLinkAlt,
  FaGithub,
  FaReact,
  FaServer,
} from "react-icons/fa";
const ProjectCard = ({
  title,
  description,
  projectImg,
  githublink_client,
  githublink_server,
  livelink,
  used_tools,
}) => {
  return (
    <div>
      <div className="bg-black/10 rounded-md p-4 h-full  mx-auto">
        <div className="flex justify-between mb-2 gap-4">
          <div className="flex">
            <div className="h-3 w-3 rounded-full mr-2 bg-red-500" />
            <div className="h-3 w-3 rounded-full mr-2 bg-yellow-500" />
            <div className="h-3 w-3 rounded-full bg-green-500" />
          </div>
          <div title="Live Website Link">
            <a
              href={livelink}
              target="_blank"
              rel="noreferrer"
              className="text-xs shadow-xl shadow-white self-center"
            >
              <FaExternalLinkAlt className="w-5 h-5" />
            </a>
          </div>
        </div>
        <div className=" transition-all duration-300 md:rounded-xl">
          <h3 className="font-bold text-lg   mt-4">{title}</h3>
          <p className="leading-7  truncate max-w-[100ch]  font-light text-base mt-4">
            {description}
          </p>

          <div className="flex flex-grow gap-5">
            <div className="flex flex-wrap gap-3 items-center my-3">
              {used_tools.map((item) => (
                <div
                  key={item}
                  className="text-xs inline-flex items-center gap-2 font-bold leading-sm  px-3 py-1 bg-blue-200 text-blue-700 rounded-full"
                >
                  <FaCogs />
                  {item}
                </div>
              ))}
            </div>
            <div className="flex gap-6 my-3   font-medium">
              {githublink_server && (
                <a
                  href={githublink_server}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs shadow-xl shadow-white self-center"
                >
                  <FaServer className="w-5 h-5" />
                </a>
              )}
              <a
                href={githublink_client}
                target="_blank"
                rel="noreferrer"
                className="text-xs shadow-xl shadow-white self-center"
              >
                <FaGithub className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
