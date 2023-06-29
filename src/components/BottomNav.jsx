import { FcAbout, FcContacts, FcHome, FcTodoList } from "react-icons/fc";
import { Link } from "react-scroll";

const BottomNav = () => {
  return (
    <div className="bg-[#222831] md:hidden block bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg  p-4 fixed bottom-0 z-50 w-full">
      <div>
        <ul className="flex justify-center items-center gap-8 text-[#00ADB5]">
          <li>
            <Link
              className="text-sm text-gray-400 hover:text-gray-500 cursor-pointer"
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <FcHome className="text-2xl"></FcHome>
            </Link>
          </li>
          <li>
            <Link
              className="text-sm text-gray-400 hover:text-gray-500 cursor-pointer"
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <FcAbout className="text-2xl"></FcAbout>
            </Link>
          </li>
          <li>
            <Link
              className="text-sm text-gray-400 hover:text-gray-500 cursor-pointer"
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <FcTodoList className="text-2xl"></FcTodoList>
            </Link>
          </li>
          <li>
            <Link
              className="text-sm text-gray-400 hover:text-gray-500 cursor-pointer"
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <FcContacts className="text-2xl"></FcContacts>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BottomNav;
