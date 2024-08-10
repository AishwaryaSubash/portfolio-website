import pageTransition from "../utils/pageTransition";
import { contactDetails } from "../utils/constants";
import { motion } from "framer-motion";
// import { buttonHover } from "../utils/motion";

const Contact = () => {
  return (
    // min-[1168px]:py-20
    <div className="pt-40 pb-20 flex flex-col gap-32 overflow-x-hidden justify-center items-center bg-lightBg text-lightText dark:bg-darkBg dark:text-darkText">
      {/* mt-6 mb-12 */}
      <div className="h-full w-9/12 flex items-center justify-center max-lg:flex-col max-lg:items-center max-lg:gap-8 max-lg:w-11/12">
        <div className="h-full flex flex-col justify-between items-start w-9/12 max-lg:items-center max-lg:gap-6 max-lg:mb-6 max-lg:w-full">
          {/* max-md:text-xl max-sm:text-lg max-sm:flex-col max-sm:text-center max-sm:gap-0 max-sm:leading-tight */}
          <div className="flex flex-col gap-4 font-headingFont text-5xl font-bold items-start mb-4 text-lightHighlight dark:text-darkText max-lg:flex-col max-lg:items-center max-lg:justify-center max-lg:w-full max-tablet:flex-col max-tablet:items-center max-md:text-4xl max-lg:mb-0 max-md:gap-2 max-sm:text-3xl">
            <p>Happy to connect.</p>
            <p>Feel free to reach out!</p>
          </div>
          <hr className="h-1 w-6/12 border-2 mt-2 mb-4 bg-black border-black rounded-full dark:bg-white dark:border-white max-lg:my-0" />
          <p className="w-10/12 font-textFont text-xl leading-relaxed py-6 max-lg:w-11/12 max-lg:text-justify max-lg:py-0 max-md:text-lg max-md:text-center max-sm:text-sm">
            As a full-stack developer, I'm passionate about crafting
            user-centric web applications. But my enthusiasm for collaboration
            goes beyond just projects. I believe in the power of exchanging
            ideas, fostering connections, and learning from each other. Whether
            you have a project in mind, a technical question to bounce around,
            or simply want to chat about the latest tech trends, I'm always
            happy to connect. Feel free to reach out - let's explore the
            possibilities together!
          </p>
          <div
            // variants={buttonHover}
            // initial="initial"
            // animate="animate"
            className="flex items-center gap-6 font-textFont font-semibold text-lg max-sm:gap-4 max-lg:justify-center"
          >
            <a
              href="#contact-form"
              // href={`mailto:${emailContact.link}`}
              // target="_blank"
              // rel="noopener noreferrer"
            >
              <motion.div
                // initial={{ backgroundColor: "" }}
                // transition={{ duration: 0.25, delay: 0.25 }}
                whileHover={{ transition: { duration: 0.25, delay: 0.25 } }}
                className="cursor-pointer py-2 px-4 rounded-xl text-lightBg bg-lightTextOpacity dark:text-darkBg dark:bg-darkHighlight dark:border-2 dark:border-darkHighlight dark:hover:bg-transparent dark:hover:border-2 dark:hover:border-darkHighlightOpacity dark:hover:text-darkHighlightOpacity max-sm:text-base"
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
            // src="contacts-light-image.png"
            src="contact-pg-dark.png"
            alt="Image"
            width={391}
            height={562}
            className="max-md:w-[300px] max-sm:w-[200px]"
          />
          {/* <img
            src="contacts-dark-image.png"
            alt="Image"
            width={341}
            height={512}
          /> */}
        </div>
      </div>
      <div id="contact-form" className="w-9/12 flex flex-col gap-8">
        <p className="font-headingFont text-5xl font-bold text-lightHighlight dark:text-darkText max-md:text-4xl max-sm:text-3xl">
          Contact Me
        </p>
        <div className="grid grid-cols-2 gap-x-8 gap-y-4 items-center font-textFont">
          <p className="text-lg">Name</p>
          <input
            type="text"
            placeholder="Enter your name"
            className="p-2 rounded-lg text-lightText dark:text-darkBg"
          />
          <p className="text-lg">Email</p>
          <input
            type="email"
            placeholder="Enter your email"
            className="p-2 rounded-lg text-lightText dark:text-darkBg"
          />
          <p className="text-lg">Message</p>
          <textarea
            placeholder="Enter your message"
            className="p-2 rounded-lg text-lightText dark:text-darkBg"
          />
        </div>
        <motion.div
          // initial={{ backgroundColor: "" }}
          // transition={{ duration: 0.25, delay: 0.25 }}
          whileHover={{ transition: { duration: 0.25, delay: 0.25 } }}
          className="cursor-pointer flex items-center gap-4 py-2 px-4 w-fit rounded-xl font-textFont font-semibold text-lg text-lightBg bg-lightTextOpacity dark:text-darkBg dark:bg-darkHighlight dark:border-2 dark:border-darkHighlight dark:hover:bg-transparent dark:hover:border-2 dark:hover:border-darkHighlightOpacity dark:hover:text-darkHighlightOpacity max-sm:text-base"
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
