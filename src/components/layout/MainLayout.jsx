import AOS from "aos";
import "aos/dist/aos.css";

import { useEffect, useState } from "react";
import Profile from "../Profile";
import Navbar from "../Navbar";
import About from "../About";
import Service from "../Service";
import RecentWork from "../RecentWork";
import Contact from "../Contact";
import Footer from "../Footer";
import ScrollToTop from "react-scroll-to-top";
import BottomNav from "../BottomNav";
import Banner from "../Banner";
import Certificate from "../Certificate";
import Education from "../Education";
import me from "../../assets/Apu-sutra-dhar.png";
const MainLayout = () => {
  const [showProfile, setShowProfile] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      AOS.init({
        once: false,
      });
    }, 1000); // Adjust the delay time as needed
    return () => clearTimeout(timer);
  }, []);

  const handleShow = () => {
    setShowProfile(!showProfile);
  };
  return (
    <div className="w-full font-primaryFont">
      <div
        onClick={handleShow}
        className="fixed bottom-16 left-4 z-20 md:hidden"
      >
        <label className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full ring-4 ring-fuchsia-500 ring-opacity-100">
            <img src={me} />
          </div>
        </label>
      </div>

      <div
        className={`text-xs md:fixed top-0 h-screen md:block transition-all duration-1000 ${
          showProfile ? "block" : "hidden"
        }`}
      >
        <Profile></Profile>
      </div>

      <div
        className={`md:ps-[270px] overflow-hidden ${
          showProfile ? "hidden" : "block"
        }`}
      >
        <Navbar></Navbar>
        <Banner></Banner>
        <About></About>
        <Service></Service>
        <RecentWork></RecentWork>
        <Certificate></Certificate>
        <Education></Education>
        <Contact></Contact>
        <Footer></Footer>
        <ScrollToTop smooth />
        <BottomNav></BottomNav>
      </div>
    </div>
  );
};

export default MainLayout;
