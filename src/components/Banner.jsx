/* eslint-disable react/no-unescaped-entities */
import { FaDownload } from "react-icons/fa";
import Typewriter from "typewriter-effect";
import resume from "/Apu_Sutra_Dhar's_Resume.pdf";
import { useScramble } from "use-scramble";

import TechOrbit from "./TechOrbit";
const Banner = () => {
  const { ref, replay } = useScramble({
    text: "Apu Sutra Dhar",
    scramble: 3,
    step: 1,
  });

  return (
    <div id="home" className="w-full  md:h-[100vh] mb-10">
      <div className="px-4 mx-auto  lg:px-8 w-full md:max-w-7xl">
        <div className="flex md:flex-row flex-col-reverse gap-5 justify-center items-center">
          <div className=" flex justify-start">
            <div className="text-start md:text-end space-y-4 text-white">
              <h4
                className="bg-white/10 backdrop:blur-lg text-end font-semibold p-2"
                style={{ borderRadius: "10px 0 10px 0" }}
              >
                Hi 👋, I'm
              </h4>
              <h2
                ref={ref}
                onMouseOver={replay}
                onFocus={replay}
                className="md:text-4xl text-3xl   font-semibold text-[#00ADB5] uppercase"
              >
                Apu Sutra Dhar
              </h2>
              <div className="text-yellow-400 ">
                <Typewriter
                  options={{
                    strings: [
                      "a MERN Developer",
                      "a Nextjs Developer",
                      "a React Developer",
                      "a Web Developer",
                      "a JavaScript Developer",
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
                <br />
                <br />
                <br />
                <br />
                <div className="quote text-sm md:whitespace-nowrap">
                  <span className="quote-mark">&lt;</span>The expert in anything
                  was once a beginner.<span className="quote-mark">&gt;</span>
                  <br />
                  <span className="font-bold mt-3 inline-block">
                    - Helen Hayes
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <TechOrbit />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
