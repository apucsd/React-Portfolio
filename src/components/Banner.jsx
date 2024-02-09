/* eslint-disable react/no-unescaped-entities */
import { FaDownload } from "react-icons/fa";
import Typewriter from "typewriter-effect";
import resume from "/Apu_Sutra_Dhar's_Resume.pdf";
import { useScramble } from "use-scramble";
import myPic from "../assets/me.png";
import blob from "../assets/blob-shape.svg";
import "lazysizes";
const Banner = () => {
  const { ref, replay } = useScramble({
    text: "Apu Sutra Dhar",
  });

  return (
    <div id="home" className="w-full md:h-[100vh] md:mt-5 -mt-16  mb-10">
      <div className="px-4 mx-auto  lg:px-8 w-full md:max-w-7xl">
        <div className="flex justify-around md:flex-row flex-col-reverse gap-5 items-center">
          <div className=" flex justify-start ">
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
          <div className="relative overflow-hidden">
            <img
              className="absolute lazyload mx-auto inset-x-0 bottom-10 z-0 -mb-32 -translate-x-1/2 left-1/2"
              data-sizes="auto"
              src={blob}
              alt=""
            />

            <img
              className="filter lazyload brightness-125 w-[] mx-auto relative -bottom-20 xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110"
              src={myPic}
              loading="lazy"
              width="800"
              height="400"
              data-sizes="auto"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
