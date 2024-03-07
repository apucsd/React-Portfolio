/* eslint-disable react-hooks/exhaustive-deps */
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import ProjectCard from "./ProjectCard";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";

const RecentWork = () => {
  const [projects, setProjects] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;

  useEffect(() => {
    fetchProjects();
  }, [currentPage]);

  const fetchProjects = () => {
    fetch(
      `https://my-portfolio-server-vert-nine.vercel.app/projects?page=${currentPage}&perPage=${projectsPerPage}`
    )
      .then((res) => res.json())
      .then((data) => setProjects(data));
  };

  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  return (
    <div id="projects" className="py-8 text-[#a9b8d2]">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 mt-10">
        <h2 className="text-3xl text-start font-bold leading-tight text-[#00ADB5] sm:text-4xl lg:text-5xl">
          Recent Works 🚩
        </h2>
      </div>
      <br />
      <div className="p-4">
        <div className="grid md:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project}></ProjectCard>
          ))}
        </div>
        <div className="flex justify-end gap-3 mt-4">
          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <button
              onClick={prevPage}
              disabled={currentPage === 1}
              className="px-4 py-2  text-black bg-[#00ADB5] hover:text-white transition-all shadow-2xl rounded-md"
            >
              <FaArrowLeft></FaArrowLeft>
            </button>
          </Link>

          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <button
              onClick={nextPage}
              disabled={projects.length < projectsPerPage}
              className="px-4 py-2 text-black bg-[#00ADB5] hover:text-white transition-all shadow-2xl  rounded-md"
            >
              <FaArrowRight></FaArrowRight>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RecentWork;
