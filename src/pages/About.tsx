// import Globe from "../components/Globe";
import { Link } from "react-router-dom";
import {
  aboutMeContent,
  interests,
  longTermGoals,
  shortTermGoals,
  // topSkills,
} from "../utils/constants";
import pageTransition from "../utils/pageTransition";
// import { circleStyles } from "../utils/style";

const About = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-lightBg text-lightText dark:bg-darkBg dark:text-darkText">
      <p className="text-6xl font-headingFont my-4">About Me</p>
      {/* <div className="relative flex items-center justify-center w-6/12">
        {topSkills.map((skill, index) => (
          <div key={index} className={`absolute flex ${circleStyles[index]}`}>
            <p className="flex items-center justify-center text-center bg-lightText text-lightBg dark:bg-darkText dark:text-darkBg p-4 w-40 h-40 rounded-full">
              {skill}
            </p>
          </div>
        ))}
      </div> */}
      {/* mt-44 */}
      <div className="w-11/12 flex items-center justify-center">
        <div className="flex flex-col gap-4 w-11/12 font-textFont text-lg">
          {aboutMeContent.map((item, index) => (
            <div className="w-11/12" key={index}>
              <p className="w-11/12 text-justify">{item}</p>
            </div>
          ))}
        </div>

        <div className="relative">
          <img
            src="/resume-pic.png"
            alt="Resume"
            className="w-[30rem] bg-darkBg dark:bg-lightHighlightBg p-4 rounded-3xl"
          />
          <Link
            to="https://drive.google.com/file/d/1vjBa5H13EjHev1FF7k6qrBN3013G6ORR/view?usp=sharing"
            target="_blank"
          >
            <svg
              className="absolute bottom-4 right-4 p-1 text-white w-10 h-10 bg-black rounded-lg"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g fill="currentColor">
                <path d="M5 6a1 1 0 0 1 1-1h4a1 1 0 1 0 0-2H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-4a1 1 0 1 0-2 0v4a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6zm10-3a1 1 0 1 0 0 2h2.586l-6.293 6.293a1 1 0 0 0 1.414 1.414L19 6.414V9a1 1 0 1 0 2 0V4a1 1 0 0 0-1-1h-5z" />
              </g>
            </svg>
          </Link>
        </div>
      </div>
      <div className="mt-12 flex flex-col w-11/12">
        <p className="text-4xl text-center text-lightHighlight dark:text-darkHighlight font-headingFont my-4 max-lg:px-4">
          Short Term Goals
        </p>
        <div className="grid grid-cols-3 items-center justify-items-center gap-8 font-textFont max-md:grid-cols-2 max-xs:grid-cols-1">
          {shortTermGoals.map((goal, index) => (
            <div
              key={index}
              className={`flex flex-col justify-between h-48 w-48 p-4 rounded-lg max-sm:h-36 max-sm:w-44 ${
                index % 2 === 0
                  ? "bg-lightHighlightBg text-lightAltHighlight dark:bg-darkHighlightBg dark:text-lightBg"
                  : "bg-lightAltHighlight text-lightBg dark:bg-darkAltHighlight dark:text-darkBg"
              }`}
            >
              <div
                dangerouslySetInnerHTML={{ __html: goal.image }}
                className="w-16 h-16 max-sm:w-10 max-sm:h-10"
              />
              <p className="text-base max-sm:text-sm">{goal.content}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-12 flex flex-col w-11/12 max-sm:mt-8">
        <p className="text-4xl text-center text-lightHighlight dark:text-darkHighlight font-headingFont my-4 max-lg:px-4">
          Long Term Goals
        </p>
        <div className="grid grid-cols-3 items-center justify-items-center gap-8 font-textFont max-md:grid-cols-2 max-xs:grid-cols-1">
          {longTermGoals.map((goal, index) => (
            <div
              key={index}
              className={`flex flex-col justify-between h-48 w-48 p-4 rounded-lg max-sm:h-36 max-sm:w-44 ${
                index % 2 === 0
                  ? "bg-lightAltHighlight text-lightBg dark:bg-darkAltHighlight dark:text-darkBg"
                  : "bg-lightHighlightBg text-lightAltHighlight dark:bg-darkHighlightBg dark:text-lightBg"
              }`}
            >
              <div
                dangerouslySetInnerHTML={{ __html: goal.image }}
                className="w-16 h-16 max-sm:w-10 max-sm:h-10"
              />
              <p className="text-base max-sm:text-sm">{goal.content}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-12 flex flex-col w-11/12 max-sm:mt-8">
        <p className="text-4xl text-center text-lightHighlight dark:text-darkHighlight font-headingFont my-4 max-lg:px-4">
          Interests
        </p>
        <div className="grid grid-cols-2 gap-4 max-md:grid-cols-1">
          {interests.map((goal, index) => (
            <div key={index} className="flex items-center justify-center gap-4">
              <div
                className={`relative w-60 p-6 font-textFont text-right rounded-xl ${
                  index % 2 === 1
                    ? "bg-lightHighlightBg text-lightAltHighlight dark:bg-darkHighlightBg dark:text-lightBg"
                    : "bg-lightAltHighlight text-lightBg dark:bg-darkAltHighlight dark:text-darkBg"
                }`}
              >
                <p>{goal.content}</p>
                <div
                  dangerouslySetInnerHTML={{ __html: goal.image }}
                  className={`absolute top-[4px] -left-[30px] w-16 h-16 p-2 rounded-full max-sm:w-12 max-sm:h-12 max-md:top-[5px] max-md:-left-[24px] max-sm:top-[10px] ${
                    index % 2 === 0
                      ? "bg-lightHighlightBg text-lightAltHighlight dark:bg-darkHighlightBg dark:text-lightBg"
                      : "bg-lightAltHighlight text-lightBg dark:bg-darkAltHighlight dark:text-darkBg"
                  }`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* <Globe width={1050} /> */}
    </div>
  );
};

export default pageTransition(About);
