import { Link } from "react-scroll";
import animLog from "../assets/webDev.json";
import Lottie from "lottie-react";

/* eslint-disable react/no-unescaped-entities */
const About = () => {
  return (
    <section id="about" className="py-10 overflow-hidden md:py-10">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid items-center grid-cols-1 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold leading-tight text-[#00ADB5] sm:text-4xl lg:text-5xl">
              About Me 🚩
            </h2>

            <p className="max-w-lg mt-3 text-sm leading-relaxed text-[#a9b8d2] md:mt-8">
              Hello guys!! I am <b>Apu Sutra Dhar</b> from Bangladesh. Currently
              I'm a Diploma student of CST (Computer Science & Technology). I'm
              a passionate web developer with a keen eye for detail, and a drive
              to create elegant, efficient, and user-friendly web app. With over
              1+ years of experience in web development, I've honed my skills in
              a variety of technologies, including ReactJs, NextJs,
              Nodejs,ExpressJs,Firebase, Javascript es6+ and MongoDb. Now I am
              learning <b>Redux</b>.
            </p>

            <p className="mt-4 text-xl text-gray-600 md:mt-8">
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <button className="bg-[#00ADB5] hover:bg-[#00ADB5] text-white text-sm py-2 px-4 rounded">
                  Contact Me
                </button>
              </Link>
            </p>
          </div>

          <div>
            <Lottie animationData={animLog} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
