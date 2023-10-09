import {
  FaAccessibleIcon,
  FaCode,
  FaLaptopCode,
  FaMobileAlt,
} from "react-icons/fa";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Service = () => {
  return (
    <div id="service">
      <h2 className="text-3xl ms-8 my-4 font-bold leading-tight text-[#00ADB5] sm:text-4xl lg:text-5xl">
        Services 🚩
      </h2>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<FaLaptopCode />}
        >
          <h3 className="vertical-timeline-element-title text-3xl">
            Full Stack Developer
          </h3>

          <p>
            I provide MERN development services, using MongoDB, Express, React
            and Node to create user-friendly , fully start to end , responsive
            web interfaces.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<FaCode />}
        >
          <h3 className="vertical-timeline-element-title text-3xl">
            E-Commerce Website
          </h3>
          <p>
            Integration of eCommerce payment gateways (stripe) custom product
            templates many more.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<FaAccessibleIcon />}
        >
          <h3 className="vertical-timeline-element-title text-3xl">
            Convert UI / UX To Website
          </h3>

          <p>
            Convert Figma, Xd, & Photoshop Design to react Clean, modern designs
            optimized
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<FaMobileAlt />}
        >
          <h3 className="vertical-timeline-element-title text-3xl">
            Mobile responsive
          </h3>

          <p>
            I can make web application in to mobile responsive using css
            framework like Bootstrap, react bootstrap and TailwindCSS
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Service;
