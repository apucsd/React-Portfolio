/* eslint-disable react/no-unescaped-entities */
import { FaDownload } from "react-icons/fa";
import Typewriter from "typewriter-effect";
import resume from "/Apu_Sutra_Dhar's_Resume.pdf";

const Banner = () => {
  return (
    <div id="home" className="w-full md:h-[100vh] md:mt-0 -mt-16 mb-10">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex justify-around md:flex-row flex-col-reverse gap-4 items-center">
          <div className="flex justify-start ">
            <div className="md:text-start text-center space-y-4 text-white">
              <h4
                className="bg-white text-fuchsia-500 font-semibold p-2"
                style={{ borderRadius: "10px 0 10px 0" }}
              >
                Hi 👋, I'm
              </h4>
              <h2 className="md:text-5xl text-4xl font-semibold text-[#00ADB5] uppercase">
                Apu Sutra Dhar
              </h2>
              <div className="text-yellow-400 text-end">
                <Typewriter
                  options={{
                    strings: [
                      "a Web Developer",
                      "a JavaScript Developer",
                      "a React Developer",
                      "a MERN Developer",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
                <button className="bg-[#00ADB5] hover:bg-[#268386] text-white text-sm py-2 mt-2 px-4 ms-2 shadow-xl rounded">
                  <a
                    href={resume}
                    download={resume}
                    className="flex gap-2 items-center"
                  >
                    Resume <FaDownload />
                  </a>
                </button>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden">
            <img
              className="absolute mx-auto inset-x-0 bottom-10 z-0 -mb-32 -translate-x-1/2 left-1/2"
              src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/blob-shape.svg"
              alt=""
            />

            <img
              className="filter brightness-125 w-[] mx-auto relative -bottom-20 xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110"
              src="https://i.ibb.co/2Fhfmvs/My-project-1-3.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
