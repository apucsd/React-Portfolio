import { useState } from "react";
import { useForm } from "react-hook-form";
import CreatableSelect from "react-select/creatable";
import getImageURL from "../../utils/getImageURL";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
const AdminLayout = () => {
  const [loading, setLoading] = useState(false);
  const { handleSubmit, reset, register, setValue } = useForm();
  const onSubmit = async (data) => {
    setLoading(true);

    const projectImg = await getImageURL(data.projectImg[0]);
    console.log(data);
    data.projectImg = projectImg;
    if (projectImg) {
      fetch("https://my-portfolio-server-mocha.vercel.app/projects", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => {
          setLoading(false);
          if (data.insertedId) {
            toast.success("Project added successfully");
          }
        });
      reset();
    } else {
      setLoading(false);
      toast.error("Something went wrong");
    }
  };

  const techUsed = [
    { value: "javascript", label: "JavaScript" },
    { value: "react", label: "React" },
    { value: "nextjs", label: "Next.js" },
    { value: "html", label: "HTML" },
    { value: "css", label: "CSS" },
    { value: "typescript", label: "TypeScript" },
    { value: "redux", label: "Redux" },
    { value: "tailwindcss", label: "Tailwind CSS" },
    { value: "bootstrap", label: "Bootstrap" },
    { value: "styled-components", label: "Styled Components" },
    { value: "node-js", label: "Node.js" },
    { value: "express", label: "Express.js" },
    { value: "mongodb", label: "MongoDB" },
    { value: "jwt-token", label: "JWT Token" },

    { value: "rest-api", label: "REST API" },
    { value: "docker", label: "Docker" },

    { value: "sass", label: "Sass" },

    { value: "eslint", label: "ESLint" },
    { value: "prettier", label: "Prettier" },
    { value: "git", label: "Git" },
    { value: "github", label: "GitHub" },
    { value: "gitlab", label: "GitLab" },
    { value: "netlify", label: "Netlify" },
    { value: "vercel", label: "Vercel" },
    { value: "aws", label: "Amazon Web Services (AWS)" },
    { value: "azure", label: "Microsoft Azure" },
    { value: "google-cloud", label: "Google Cloud Platform (GCP)" },
    { value: "heroku", label: "Heroku" },
  ];
  const categoryData = [
    { value: "react", label: "React" },
    { value: "js", label: "JavaScript" },
    { value: "nextjs", label: "Next.js" },
    { value: "html", label: "HTML" },
  ];
  return (
    <div className="bg-[#001D6D] h-full text-black pb-20">
      <h2 className="text-3xl font-bold leading-tight text-center py-10 text-[#00ADB5] sm:text-4xl lg:text-5xl">
        Add New Projects🚩
      </h2>
      <Link to={"/"}>
        {" "}
        <button className="bg-[#00ADB5] hover:bg-[#268386] text-white text-sm py-2 mt-2 px-4 ms-2 shadow-xl rounded">
          Back Home
        </button>
      </Link>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-[#F3F4F6] lg:max-w-3xl md:max-w-4xl w-full mx-auto shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2"
      >
        <div className="-mx-3 md:flex mb-6">
          <div className="md:w-1/2 px-3 mb-6 md:mb-0">
            <input
              type="text"
              {...register("title")}
              placeholder="Project Title Name"
              className="w-full rounded-md h-10 px-6 bg-white text-sm outline-none"
            />
          </div>
          <div className="md:w-1/2 px-3">
            <input
              type="text"
              {...register("description")}
              placeholder="Short Project Description"
              className="w-full rounded-md h-10 px-6 bg-white text-sm outline-none"
            />
          </div>
        </div>
        <div className="-mx-3 md:flex mb-6">
          <div className="md:w-1/2 px-3 mb-6 md:mb-0">
            <input
              type="text"
              {...register("livelink")}
              placeholder="Project Live Link"
              className="w-full rounded-md h-10 px-6 bg-white text-sm outline-none"
            />
          </div>
          <div className="md:w-1/2 px-3">
            <input
              type="text"
              {...register("githublink_client")}
              placeholder="Project Github Link"
              className="w-full rounded-md h-10 px-6 bg-white text-sm outline-none"
            />
          </div>
        </div>
        <div className="-mx-3 md:flex mb-6">
          <div className="md:w-1/2 px-3 mb-6 md:mb-0">
            <input
              type="text"
              {...register("githublink_server")}
              placeholder="Project Server Github Link"
              className="w-full rounded-md h-10 px-6 bg-white text-sm outline-none"
            />
          </div>
          <div className="md:w-1/2 px-3">
            <input type="file" {...register("projectImg")} className="" />
          </div>
        </div>

        <div className="-mx-3 md:flex mb-6">
          <div className="md:w-full px-3">
            <label className="label" htmlFor="tools">
              Used Tools
            </label>
            {/* <input
          required type="hidden" {...register("features")} /> */}
            <CreatableSelect
              options={techUsed}
              onChange={(selectedOptions) => {
                setValue(
                  "used_tools",
                  selectedOptions.map((option) => option.label)
                );
              }}
              isMulti
              styles={{
                control: (baseStyles, state) => ({
                  ...baseStyles,
                  borderColor: state.isFocused ? "grey" : "#5901CB",
                  padding: state.isFocused ? "2px" : "2px",
                }),
              }}
            />
          </div>
          <div className="md:w-full px-3">
            <label className="label" htmlFor="description">
              Category
            </label>
            {/* <input
          required type="hidden" {...register("features")} /> */}
            <CreatableSelect
              options={categoryData}
              onChange={(selectedOptions) => {
                setValue(
                  "category",
                  selectedOptions.map((option) => option.label)
                );
              }}
              isMulti
              styles={{
                control: (baseStyles, state) => ({
                  ...baseStyles,
                  borderColor: state.isFocused ? "grey" : "#5901CB",
                  padding: state.isFocused ? "2px" : "2px",
                }),
              }}
            />
          </div>
        </div>
        <p className="text-red text-xs italic">Please fill out this field.</p>
        <button
          disabled={loading}
          className="bg-[#00ADB5] hover:bg-[#268386] text-white text-sm py-2 mt-2 px-4 ms-2 shadow-xl rounded"
          type="submit"
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>

      <Toaster></Toaster>
    </div>
  );
};

export default AdminLayout;
