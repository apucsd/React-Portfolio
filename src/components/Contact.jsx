import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { toast } from "react-hot-toast";
/* eslint-disable react/no-deprecated */
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_18cpi3l",
        "template_s8zeb6a",
        form.current,
        "LkEYGZbuMCHpLLtwc",
        {}
      )
      .then(
        (result) => {
          if (result.text) {
            toast.success("Thank You for sending your message");
            form.current.reset();
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div
      data-aos="fade-left"
      id="contact"
      className="relative text-sm p-4 flex items-top justify-center text-[#a9b8d2] sm:items-center sm:pt-0"
    >
      <div className=" mx-auto sm:px-6 lg:px-8">
        <div className="mt-8 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-6 mr-2 sm:rounded-lg text-white">
              <h2 className="text-3xl font-bold  text-[#00ADB5] sm:text-4xl lg:text-5xl">
                Get In Touch 🚩
              </h2>
              <p className="text-normal text-lg font-medium mt-2">
                Fill in the form to start a conversation
              </p>

              <div className="flex items-center mt-8  ">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  className="w-8 h-8 "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <div className="ml-4 text-md tracking-wide font-semibold w-40">
                  Dhaka, Kishorgonj
                </div>
              </div>

              <div className="flex items-center mt-4  ">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  className="w-8 h-8 "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <div className="ml-4 text-md tracking-wide font-semibold w-40">
                  +8801983276843
                </div>
              </div>

              <div className="flex items-center mt-2  ">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  className="w-8 h-8 "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <div className="ml-4 text-md tracking-wide font-semibold w-40">
                  apusutradhar77@gmail.com
                </div>
              </div>
            </div>

            <form
              ref={form}
              onSubmit={sendEmail}
              className="p-6 flex flex-col justify-center text-white"
            >
              <label htmlFor="name" className="hidden">
                Full Name
              </label>
              <input
                required
                type="name"
                name="user_name"
                id="from_name"
                placeholder="Full Name"
                className="w-100  bg-transparent text-white placeholder-white border border-white rounded-md p-2 outline-none focus:border-fuchsia-500"
              />

              <label htmlFor="email" className="hidden">
                Email
              </label>
              <input
                required
                type="email"
                name="user_email"
                id="user_email"
                placeholder="Email"
                className="w-100 bg-transparent text-white placeholder-white border border-white rounded-md p-2 outline-none focus:border-fuchsia-500 my-3"
              />

              <label htmlFor="tel" className="hidden">
                Message
              </label>
              <textarea
                required
                name="message"
                className="w-100 bg-transparent text-white placeholder-white border border-white rounded-md p-2 outline-none focus:border-fuchsia-500"
                placeholder="Message"
              ></textarea>

              <input
                className="bg-[#00ADB5] hover:bg-[#00ADB5] text-white text-sm py-3 my-4 px-4 rounded cursor-pointer"
                type="submit"
                value="Submit"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
