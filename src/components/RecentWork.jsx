import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import ProjectCard from "./ProjectCard";
import { useState } from "react";

const RecentWork = () => {
  const projects = [
    {
      projectImg: "https://i.ibb.co/cXNyWdQ/Screenshot-2023-06-28-185204.jpg",
      title: "BabelLingua",
      used_tools: ["React", "StripeJs", "Node.js", "JWT token", "MongoDB"],
      Livelink: "https://babellingua-f05e9.web.app/",
      githublink_client: "https://github.com/apucsd/BabelLingua-Client",
      githublink_server: "https://github.com/apucsd/BabelLingua-Server",
      category: "mern",
    },
    {
      projectImg: "https://i.ibb.co/9g3xJyH/Screenshot-2023-06-28-192404.jpg",
      title: "Toy BaZaar",
      used_tools: ["React", "Firebase", "Node.js", "MongoDB"],
      Livelink: "https://toy-bazaar.web.app/",
      githublink_client: "https://github.com/apucsd/Toy-BaZaar",
      githublink_server: "https://github.com/apucsd/Toy-BaZaar-Server",
      category: "mern",
    },
    {
      projectImg: "https://i.ibb.co/gv3FBz4/Screenshot-2023-06-18-221031.jpg",
      title: "Kitchen Master",
      used_tools: ["React", "React-Router", "Firebase", "TailwindCSS"],
      Livelink: "https://kitchen-master-284e7.web.app/",
      githublink_client: "https://github.com/apucsd/Kitchen-Master",
      category: "react",
    },
    {
      projectImg: "https://i.ibb.co/k8wRPn7/Screenshot-2023-06-18-221905.jpg",
      title: "IndeedJobs",
      used_tools: ["React", "React-Router", "Firebase", "TailwindCSS"],
      Livelink: "https://stellular-sprite-cf2f65.netlify.app/",
      githublink_client: "https://github.com/apucsd/IndeedJob",
      category: "react",
    },
    {
      projectImg: "https://i.ibb.co/ZKC2n9c/Screenshot-2023-06-18-223739.jpg",
      title: "Code Hub",
      used_tools: ["javascript", "TailwindCSS", "daisyui", "Sweetalert2"],
      Livelink: "https://poetic-fudge-86e63a.netlify.app/",
      githublink_client: "https://github.com/apucsd/Code-Hub",
      category: "javascript",
    },
    {
      projectImg: "https://i.ibb.co/8NHBkrD/Screenshot-2023-06-18-224500.jpg",
      title: "Ai Universe Hub",
      used_tools: ["javascript", "Bootstrap"],
      Livelink: "https://splendid-rabanadas-c0aeed.netlify.app/",
      githublink_client: "https://github.com/apucsd/Ai-Universe-Hub",
      category: "javascript",
    },
    {
      projectImg: "https://i.ibb.co/9ZK8Njg/Screenshot-2023-06-26-205524.jpg",
      title: "G3 Architect",
      used_tools: ["Html", "Css"],
      Livelink: "https://main--stellular-melba-e2d50f.netlify.app/",
      githublink_client: "https://github.com/apucsd/g3-architects",
      category: "others",
    },
    {
      projectImg: "https://i.ibb.co/1r6qSj9/Screenshot-2023-06-26-200443.jpg",
      title: "Basic Calculator",
      used_tools: ["javascript", "Html", "Css"],
      Livelink: "https://genuine-marzipan-31da67.netlify.app/",
      githublink_client: "https://github.com/apucsd/Calculator-Projects",
      category: "javascript",
    },
  ];

  const [showAll, setShowAll] = useState(false);

  const merns = projects.filter((project) => project.category == "mern");
  const reacts = projects.filter((project) => project.category == "react");
  const javascripts = projects.filter(
    (project) => project.category == "javascript"
  );
  const others = projects.filter((project) => project.category == "others");
  return (
    <div id="projects" data-aos="fade-up" className="py-8 text-[#a9b8d2]">
      <h2 className="text-3xl text-center font-bold leading-tight text-[#00ADB5] sm:text-4xl lg:text-5xl">
        Recent Works 🚩
      </h2>
      <br />
      <div className="p-4">
        <Tabs>
          <TabList>
            <Tab>All Projects </Tab>
            <Tab>MERN</Tab>
            <Tab>React</Tab>
            <Tab>JavaScript</Tab>
            <Tab>Others</Tab>
          </TabList>

          <TabPanel>
            <div>
              <div className="grid md:grid-cols-3">
                {projects
                  .slice(0, showAll ? projects.length : 3)
                  .map((project) => (
                    <ProjectCard
                      key={project.title}
                      project={project}
                    ></ProjectCard>
                  ))}
              </div>
              <div
                onClick={() => setShowAll(!showAll)}
                className="flex justify-center items-center my-4"
              >
                {showAll ? (
                  <button className="bg-[#00ADB5] hover:bg-[#00ADB5] text-white text-sm py-2 px-4 rounded">
                    See Less Projects
                  </button>
                ) : (
                  <button className="bg-[#00ADB5] hover:bg-[#00ADB5] text-white text-sm py-2 px-4 rounded">
                    See All Projects
                  </button>
                )}
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid md:grid-cols-3">
              {merns.map((project) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                ></ProjectCard>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid md:grid-cols-3">
              {reacts.map((project) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                ></ProjectCard>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid md:grid-cols-3">
              {javascripts.map((project) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                ></ProjectCard>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid md:grid-cols-3">
              {others.map((project) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                ></ProjectCard>
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default RecentWork;
