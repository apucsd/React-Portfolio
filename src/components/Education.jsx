import npi from "../assets/npi.jpg";
import zRahman from "../assets/download.jpg";
const Education = () => {
  return (
    <section className=" ">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 mt-10">
        <h2 className="text-3xl font-bold leading-tight text-[#00ADB5] sm:text-4xl lg:text-5xl">
          Education
        </h2>
        <p className="max-w-[60ch] mt-4">
          Completed SSC and currently pursuing a diploma in Computer Science and
          Engineering.
        </p>
      </div>
      <div className="md:max-w-5xl md:px-4 py-12 mx-auto">
        <div className="grid mx-4 sm:grid-cols-12">
          <div className="col-span-12 sm:col-span-2"></div>

          <div className="relative col-span-12 md:px-4 space-y-6 sm:col-span-9">
            <div className="col-span-12 space-y-3 relative md:px-4 sm:col-span-8 sm:space-y-3 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-[#00ADB5]">
              <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-[#00ADB5]">
                <div
                  data-aos="zoom-in-left"
                  className="bg-[#f3ebf5] text-white p-5 my-3  hover:bg-opacity-20  bg-opacity-10 backdrop-blur-lg rounded drop-shadow-lg"
                >
                  <div className="flex gap-3 justify-start items-center">
                    <div>
                      <img
                        src={zRahman}
                        alt="zRahman"
                        className="flex-none w-[40px] h-[40px] rounded-full object-cover"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    <div className="mt-0.5">
                      <h1 className="text-xl font-medium">
                        Zillur Rahman Premier Bank School & College
                      </h1>
                    </div>
                  </div>
                  <div className="mt-6">
                    <div className="mb-3 text-xs md:text-sm  flex justify-between items-center">
                      <p>Secondary School Certificate (SSC)</p>
                      <p>Kishorgonj, Dhaka</p>
                    </div>
                    <p className=" text-sm">May 1, 2020</p>
                  </div>
                </div>
              </div>
              <div
                data-aos="zoom-in-left"
                className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-[#00ADB5]"
              >
                <div className="bg-[#f3ebf5] text-white p-5 my-3  hover:bg-opacity-20  bg-opacity-10 backdrop-blur-lg rounded drop-shadow-lg">
                  <div className="flex gap-3 justify-start items-center">
                    <div>
                      <img
                        src={npi}
                        alt="npi"
                        className="flex-none w-[40px] h-[40px] rounded-full object-cover"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    <div className="mt-0.5">
                      <h1 className="text-xl font-medium">
                        Narsingdi Polytechnic Institute
                      </h1>
                    </div>
                  </div>
                  <div className="mt-6">
                    <div className="mb-3 text-xs md:text-sm flex justify-between items-center">
                      <p>Diploma In Computer Engineering (CSE)</p>
                      <p>Narsingdi, Dhaka</p>
                    </div>
                    <p className=" text-sm">Running (2020-2024)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
