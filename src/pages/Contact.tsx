import pageTransition from "../utils/pageTransition";
import { contactDetails } from "../utils/constants";
import { motion } from "framer-motion";
import { useContext } from "react";
import { ThemeContext } from "../utils/contexts/ThemeContext";

const Contact = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="pt-40 pb-20 flex flex-col gap-32 overflow-x-hidden justify-center items-center bg-lightBg text-lightHighlight dark:bg-darkBg dark:text-darkText">
      <div className="h-full w-9/12 flex items-center justify-center max-lg:flex-col max-lg:items-center max-lg:gap-8 max-lg:w-11/12">
        <div className="h-full flex flex-col justify-between items-start w-9/12 max-lg:items-center max-lg:gap-6 max-lg:mb-6 max-lg:w-full">
          <div className="flex flex-col gap-4 font-headingFont text-5xl text-lightText dark:text-darkText font-bold items-start mb-4 max-lg:flex-col max-lg:items-center max-lg:justify-center max-lg:w-full max-tablet:flex-col max-tablet:items-center max-md:text-4xl max-lg:mb-0 max-md:gap-2 max-sm:text-3xl">
            <p>Happy to connect.</p>
            <p>Feel free to reach out!</p>
          </div>
          <hr className="h-1 w-6/12 border-2 mt-2 mb-4 bg-lightText border-lightText rounded-full dark:bg-white dark:border-white max-lg:my-0" />
          <p className="w-10/12 font-textFont text-xl text-lightText dark:text-darkText leading-relaxed py-6 max-lg:w-11/12 max-lg:text-justify max-lg:py-0 max-md:text-lg max-md:text-center max-sm:text-sm">
            As a full-stack developer, I'm passionate about crafting
            user-centric web applications. But my enthusiasm for collaboration
            goes beyond just projects. I believe in the power of exchanging
            ideas, fostering connections, and learning from each other. Whether
            you have a project in mind, a technical question to bounce around,
            or simply want to chat about the latest tech trends, I'm always
            happy to connect. Feel free to reach out - let's explore the
            possibilities together!
          </p>
          <div className="flex items-center gap-6 font-textFont font-semibold text-lg max-sm:gap-4 max-lg:justify-center">
            <a href="#contact-form">
              <motion.div
                whileHover={{ transition: { duration: 0.25, delay: 0.25 } }}
                className="py-2 px-4 bg-lightHighlight text-white border-2 border-lightHighlight hover:bg-transparent hover:border-2 hover:border-lightHighlight hover:text-lightHighlight dark:text-darkBg dark:bg-darkHighlight dark:border-2 dark:border-darkHighlight dark:hover:bg-transparent dark:hover:border-2 dark:hover:border-darkHighlightOpacity dark:hover:text-darkHighlightOpacity rounded-xl max-sm:text-base"
              >
                Get In Touch
              </motion.div>
            </a>
            <div className="flex items-center justify-center gap-6 text-lightHighlight dark:text-darkHighlight max-lg:justify-evenly">
              {contactDetails.map((item, index) => {
                return (
                  <div key={index}>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div
                        dangerouslySetInnerHTML={{ __html: item.icon }}
                        className="w-10 h-10 cursor-pointer dark:text-darkHighlight dark:hover:text-darkHighlightOpacity max-md:w-8 max-md:h-8"
                        title={item.media}
                      />
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="">
          <img
            src={
              theme === "dark" ? "contact-pg-dark.png" : "contact-pg-light.png"
            }
            alt="Image"
            width={391}
            height={562}
            className="max-md:w-[300px] max-sm:w-[200px]"
          />
        </div>
      </div>
      <div
        id="contact-form"
        className="w-6/12 bg-[#c0c0c0aa] dark:bg-[#202020] p-8 rounded-3xl flex flex-col items-center gap-12"
      >
        <div className="flex flex-col gap-2 items-center text-lightText dark:text-darkText">
          <p className="font-headingFont text-center text-5xl font-bold max-md:text-4xl max-sm:text-3xl">
            Contact Me
          </p>
          <p className="font-textFont text-lg text-center">
            Feel free to drop a message!
          </p>
        </div>
        <div className="w-full flex flex-col gap-8 items-center font-textFont text-lightText dark:text-darkText">
          <div className="w-full flex items-center justify-between gap-8">
            <div className="w-full flex flex-col gap-1">
              <p className="text-lg">Name</p>
              <input
                type="text"
                placeholder="Enter your name"
                className="p-2 rounded-lg text-lightHighlight dark:text-darkText border border-lightHighlightBg dark:border-darkHighlightBg bg-transparent focus:ring-2 focus:ring-darkHighlightBg"
              />
            </div>
            <div className="w-full flex flex-col gap-1">
              <p className="text-lg">Email</p>
              <input
                type="email"
                placeholder="Enter your email"
                className="p-2 rounded-lg text-lightHighlight dark:text-darkText border border-lightHighlightBg dark:border-darkHighlightBg bg-transparent focus:ring-2 focus:ring-darkHighlightBg"
              />
            </div>
          </div>
          <div className="w-full flex flex-col gap-1">
            <p className="text-lg">Message</p>
            <textarea
              placeholder="Enter your message"
              className="p-2 rounded-lg text-lightHighlight dark:text-darkText border border-lightHighlightBg dark:border-darkHighlightBg bg-transparent focus:ring-2 focus:ring-darkHighlightBg"
            />
          </div>
        </div>
        <motion.div
          whileHover={{ transition: { duration: 0.25, delay: 0.25 } }}
          className="cursor-pointer flex items-center gap-4 py-2 px-4 w-fit rounded-xl font-textFont font-semibold text-lg border-2 border-lightHighlight text-lightBg bg-lightHighlight hover:bg-transparent hover:text-lightHighlight dark:text-darkBg dark:bg-darkHighlight dark:border-2 dark:border-darkHighlight dark:hover:bg-transparent dark:hover:border-darkHighlightOpacity dark:hover:text-darkHighlight max-sm:text-base"
        >
          <p>Send Message</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M4.4 19.425q-.5.2-.95-.088T3 18.5V14l8-2l-8-2V5.5q0-.55.45-.837t.95-.088l15.4 6.5q.625.275.625.925t-.625.925z"
            />
          </svg>
        </motion.div>
      </div>
    </div>
  );
};

export default pageTransition(Contact);
