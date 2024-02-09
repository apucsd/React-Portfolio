const Certificate = () => {
  return (
    <section className=" ">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 mt-10">
        <h2 className="text-3xl font-bold leading-tight text-[#00ADB5] sm:text-4xl lg:text-5xl">
          Certificates 🚩
        </h2>
        <p className="max-w-[60ch] mt-4">
          Been a web developer since 2022, got two certificates to prove it,
          showing I know my stuff.
        </p>
      </div>
      <div className="container max-w-5xl px-4 py-12 mx-auto">
        <div className="grid mx-4 sm:grid-cols-12">
          <div className="col-span-12 sm:col-span-2"></div>

          <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
            <div className="col-span-12 space-y-3 relative px-4 sm:col-span-8 sm:space-y-3 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-[#00ADB5]">
              <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-[#00ADB5]">
                <a href="https://drive.google.com/file/d/1an6OdpXVroSSQ9PrkcNdIZZatSMNaFE0/view?usp=sharing">
                  <div className="bg-[#f3ebf5] text-white p-5 my-3  hover:bg-opacity-20  bg-opacity-10 backdrop-blur-lg rounded drop-shadow-lg">
                    <div className="flex gap-3 justify-start items-center">
                      <div>
                        <img
                          src="https://framerusercontent.com/images/IbZR4a5JkhX21W2XAXdXVoybpRs.jpeg"
                          alt
                          className="flex-none w-[40px] h-[40px] rounded-full object-cover"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                      <div className="mt-0.5">
                        <h1 className="text-xl font-medium">
                          Programming Hero
                        </h1>
                      </div>
                    </div>
                    <div className="mt-6">
                      <div className="mb-3 flex justify-between items-center">
                        <p>Black Belt Certification (BB)</p>
                        <p>Batch - 7th</p>
                      </div>
                      <p className=" text-sm">September 25, 2023</p>
                    </div>
                  </div>
                </a>
              </div>
              <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-[#00ADB5]">
                <a href="https://drive.google.com/file/d/1mMj7_F5ly15CFcpe6NRuVhcOCEoC56lu/view?usp=sharing">
                  <div className="bg-[#f3ebf5] text-white p-5 my-3  hover:bg-opacity-20  bg-opacity-10 backdrop-blur-lg rounded drop-shadow-lg">
                    <div className="flex gap-3 justify-start items-center">
                      <div>
                        <img
                          src="https://framerusercontent.com/images/IbZR4a5JkhX21W2XAXdXVoybpRs.jpeg"
                          alt
                          className="flex-none w-[40px] h-[40px] rounded-full object-cover"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                      <div className="mt-0.5">
                        <h1 className="text-xl font-medium">
                          Programming Hero
                        </h1>
                      </div>
                    </div>
                    <div className="mt-6">
                      <div className="mb-3 flex justify-between items-center">
                        <p>Complete Web Development</p>
                        <p>Batch - 7th</p>
                      </div>
                      <p className=" text-sm">October 16, 2023</p>
                    </div>
                  </div>
                </a>
              </div>
              <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-[#00ADB5]">
                <a href="#">
                  <div className="bg-[#f3ebf5] text-white p-5 my-3  hover:bg-opacity-20  bg-opacity-10 backdrop-blur-lg rounded drop-shadow-lg">
                    <div className="flex gap-3 justify-start items-center">
                      <div>
                        <img
                          src="https://framerusercontent.com/images/IbZR4a5JkhX21W2XAXdXVoybpRs.jpeg"
                          alt
                          className="flex-none w-[40px] h-[40px] rounded-full object-cover"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                      <div className="mt-0.5">
                        <h1 className="text-xl font-medium">
                          Programming Hero
                        </h1>
                      </div>
                    </div>
                    <div className="mt-6">
                      <div className="mb-3 flex justify-between items-center">
                        <p>Next Level Web Development</p>
                        <p>Batch - 2nd</p>
                      </div>
                      <p className=" text-sm">On Progress</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificate;
