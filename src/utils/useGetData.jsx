import { useState, useEffect } from "react";

export const useGetData = () => {
  const [projectData, setProjectData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `https://my-portfolio-server-vert-nine.vercel.app/projects?page=1&perPage=20`
        );
        const data = await res.json();

        setProjectData(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching project data:", error);
      }
    };

    fetchData();
  }, []);

  return { projectData, loading };
};
