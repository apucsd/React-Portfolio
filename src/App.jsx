import { useEffect, useState } from "react";
import "./App.css";
import About from "./components/About";
import Banner from "./components/Banner";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import RecentWork from "./components/RecentWork";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "./components/Footer";
import BottomNav from "./components/BottomNav";
import ScrollToTop from "react-scroll-to-top";
import Service from "./components/Service";

function App() {
  const [showProfile, setShowProfile] = useState(false);
  useEffect(() => {
    AOS.init({});
  }, []);

  const handleShow = () => {
    setShowProfile(!showProfile);
  };
  console.log(showProfile);
  return (
    <div className="w-full font-primaryFont">
      <div
        onClick={handleShow}
        className="fixed bottom-16 left-4 z-20 md:hidden"
      >
        <label className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full ring-4 ring-fuchsia-500 ring-opacity-100">
            <img src="https://i.ibb.co/jbCPQ9W/IMG-20220407-WA0002-1-01.jpg" />
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
        <Contact></Contact>
        <Footer></Footer>
        <ScrollToTop smooth />
        <BottomNav></BottomNav>
      </div>
    </div>
  );
}

export default App;
