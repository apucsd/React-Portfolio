import {
  SiBootstrap,
  SiCss3,
  SiExpress,
  SiFacebook,
  SiFirebase,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiLinkedin,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiTwitter,
  SiTypescript,
} from "react-icons/si";
import { FaLanguage } from "react-icons/fa";
import { Slide } from "react-awesome-reveal";
import me from "../assets/Apu-sutra-dhar.png";

const Profile = () => {
  return (
    <div
      id="profile"
      className="relative text-md md:p-4 px-10 pt-10 text-center  h-[100vh] md:w-[270px] w-full   text-white"
    >
      <img
        className="w-20 h-20 rounded-full mx-auto ring-1 ring-[#00ADB5] brightness-125"
        src={me}
        alt="me"
      />

      <h2 className="font-semibold my-2">Apu Sutra Dhar</h2>
      <p className="text-slate-400 text-sm my-2">Full Stack Developer</p>
      <div className="flex flex-wrap gap-3 text-md justify-center text-[#00ADB5]">
        <p>JavaScript</p>
        <div className="border-r-2"></div>
        <p>React</p>
        <div className="border-r-2"></div>
        <p>NextJs</p>
        <div className="border-r-2"></div>
        <p>Node</p>
        <div className="border-r-2"></div>
        <p>Express</p>
        <div className="border-r-2"></div>
        <p>MongoDB</p>
      </div>
      <div className=" text-start mt-auto">
        <ul className="py-4 px-4 mt-6 overflow-y-auto overflow-hidden h-[45vh] duration-300 ease-in-out">
          <li className="text-start md:text-lg text-xl font-semibold my-3 uppercase">
            <Slide>Skills</Slide>
          </li>
          <li>
            <Slide>
              <p className="flex justify-between border-b py-3">
                HTML5
                <SiHtml5 className="text-2xl text-orange-500"></SiHtml5>
              </p>
            </Slide>
          </li>
          <li>
            <Slide>
              <p className="flex justify-between border-b py-3">
                CSS
                <SiCss3 className="text-2xl text-blue-500"></SiCss3>
              </p>
            </Slide>
          </li>
          <li>
            <Slide>
              <p className="flex justify-between border-b py-3">
                {" "}
                JavaScript
                <SiJavascript className="text-2xl text-yellow-500"></SiJavascript>
              </p>
            </Slide>
          </li>
          <li>
            <Slide>
              <p className="flex justify-between border-b py-3">
                TypeScript
                <SiTypescript className="text-2xl text-blue-500"></SiTypescript>
              </p>
            </Slide>
          </li>
          <li>
            <Slide>
              <p className="flex justify-between border-b py-3">
                {" "}
                TailwindCSS
                <SiTailwindcss className="text-2xl text-blue-500"></SiTailwindcss>
              </p>
            </Slide>
          </li>
          <li>
            <Slide>
              <p className="flex justify-between border-b py-3">
                Bootstrap
                <SiBootstrap className="text-2xl text-pink-500"></SiBootstrap>
              </p>
            </Slide>
          </li>
          <li>
            <Slide>
              <p className="flex justify-between border-b py-3">
                React Js
                <SiReact className="text-2xl text-blue-500"></SiReact>
              </p>
            </Slide>
          </li>
          <li>
            <Slide>
              <p className="flex justify-between border-b py-3">
                Next Js
                <SiNextdotjs className="text-2xl text-white"></SiNextdotjs>
              </p>
            </Slide>
          </li>
          <li>
            <Slide>
              <p className="flex justify-between border-b py-3">
                Redux
                <SiRedux className="text-2xl text-fuchsia-400"></SiRedux>
              </p>
            </Slide>
          </li>
          <li>
            <Slide>
              <p className="flex justify-between border-b py-3">
                {" "}
                Firebase
                <SiFirebase className="text-2xl text-yellow-500"></SiFirebase>
              </p>
            </Slide>
          </li>
          <li>
            <Slide>
              <p className="flex justify-between border-b py-3">
                Node Js
                <SiNodedotjs className="text-2xl text-green-500"></SiNodedotjs>
              </p>
            </Slide>
          </li>
          <li>
            <Slide>
              <p className="flex justify-between border-b py-3">
                Express Js
                <SiExpress className="text-2xl text-white"></SiExpress>
              </p>
            </Slide>
          </li>
          <li>
            <Slide>
              <p className="flex justify-between border-b py-3">
                MongoDB
                <SiMongodb className="text-2xl text-green-500"></SiMongodb>
              </p>
            </Slide>
          </li>

          {/* next line */}
          <li className="text-start text-lg font-semibold my-3 uppercase">
            <Slide>Language</Slide>
          </li>
          <li>
            <Slide>
              <p className="flex justify-between border-b py-3">
                {" "}
                Bengali
                <FaLanguage className="text-2xl text-orange-500"></FaLanguage>
              </p>
            </Slide>
          </li>
          <li>
            <Slide>
              <p className="flex justify-between border-b py-3">
                English
                <FaLanguage className="text-2xl text-orange-500"></FaLanguage>
              </p>
            </Slide>
          </li>
        </ul>
      </div>

      <div className="relative space-y-4">
        <h2 className="font-semibold md:mt-4 mt-8">Get In Touch</h2>
        <div className="flex flex-wrap justify-center gap-3">
          <a href="https://github.com/apucsd">
            <SiGithub className="text-lg"></SiGithub>
          </a>
          <a href="https://www.linkedin.com/in/apu-sutra-dhar-0a9667243/">
            <SiLinkedin className="text-lg"></SiLinkedin>
          </a>
          <a href="https://twitter.com/sk_sutra">
            <SiTwitter className="text-lg"></SiTwitter>
          </a>
          <a href="https://www.facebook.com/apusutradhar.1710">
            <SiFacebook className="text-lg"></SiFacebook>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Profile;
