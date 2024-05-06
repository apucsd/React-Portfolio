import { useState } from "react";
import ProjectCard from "./ProjectCard";
import { useGetData } from "../utils/useGetData";
import { Link } from "react-scroll";
const RecentWork = () => {
  const { projectData, loading } = useGetData();
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;

  if (loading) {
    return <p>Loading...</p>;
  }

  // Calculate total pages
  const totalPages = Math.ceil(projectData.length / projectsPerPage);

  // Slice data for current page
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projectData.slice(
    indexOfFirstProject,
    indexOfLastProject
  );

  const nextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  return (
    <div id="projects" className="my-10 p-5">
      <h2 className="text-3xl my-5 font-bold leading-tight text-[#00ADB5] sm:text-4xl lg:text-5xl">
        Projects 🚩
      </h2>
      <div className="grid grid-cols-1  md:grid-cols-2 gap-5">
        {currentProjects.map((project) => (
          <ProjectCard {...project} key={project._id} />
        ))}
      </div>
      <div className="flex justify-center text-center mt-4">
        <Link
          to="projects"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <button onClick={prevPage} disabled={currentPage === 1}>
            Previous
          </button>
        </Link>
        <span className="mx-4">
          Page {currentPage} of {totalPages}
        </span>

        <Link
          to="projects"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <button onClick={nextPage} disabled={currentPage === totalPages}>
            Next
          </button>
        </Link>
      </div>
    </div>
  );
};

export default RecentWork;
