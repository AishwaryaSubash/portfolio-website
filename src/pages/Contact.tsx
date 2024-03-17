import pageTransition from "../utils/pageTransition";
import { emailContact, contactDetails } from "../utils/constants";

const Contact = () => {
  return (
    <div className="flex flex-col overflow-x-hidden justify-center items-center bg-lightBg text-lightText dark:bg-darkBg dark:text-darkText">
      <div className="flex flex-col items-center mb-8">
        <p className="text-6xl font-headingFont my-4">Contact</p>
      </div>
      <div className="h-full w-9/12 mt-6 mb-12 flex items-start justify-between max-lg:flex-col max-lg:items-center max-lg:gap-8">
        <div className="h-full flex flex-col justify-evenly items-start w-9/12 max-lg:w-11/12 max-lg:items-center max-lg:gap-6 max-lg:mb-6">
          <div className="flex gap-2 text-2xl items-start font-headingFont my-4 text-lightHighlight dark:text-darkHighlight max-xl:flex-col max-lg:text-center max-lg:flex-row max-lg:justify-center max-lg:w-full max-tablet:flex-col max-tablet:items-center">
            <p>Happy to connect.</p>
            <p>Feel free to reach out!</p>
          </div>
          <p className="w-10/12 font-textFont text-lg max-lg:w-11/12 max-lg:text-justify">
            As a full-stack developer, I'm passionate about crafting
            user-centric web applications. But my enthusiasm for collaboration
            goes beyond just projects. I believe in the power of exchanging
            ideas, fostering connections, and learning from each other. Whether
            you have a project in mind, a technical question to bounce around,
            or simply want to chat about the latest tech trends, I'm always
            happy to connect. Feel free to reach out - let's explore the
            possibilities together!
          </p>
          <div className="w-full flex items-center font-headingFont max-sm:flex-col max-sm:gap-4 max-lg:justify-center">
            <a
              href={`mailto:${emailContact.link}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="cursor-pointer text-2xl m-2 p-4 rounded-2xl text-lightBg bg-lightTextOpacity dark:text-darkBg dark:bg-darkTextOpacity max-sm:text-base">
                Get In Touch
              </div>
            </a>
            <div className="flex items-center justify-center gap-2 text-lightHighlight dark:text-darkHighlight max-lg:justify-evenly">
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
                        className="w-16 h-16 cursor-pointer max-sm:w-12 max-sm:h-12"
                        title={item.media}
                      ></div>
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="">
          <img
            src="contacts-light-image.png"
            alt="Image"
            width={341}
            height={512}
          />
          {/* <img
            src="contacts-dark-image.png"
            alt="Image"
            width={341}
            height={512}
          /> */}
        </div>
      </div>
    </div>
  );
};

export default pageTransition(Contact);
