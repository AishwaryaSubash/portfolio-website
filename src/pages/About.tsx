import {
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

      <div className="flex flex-col w-11/12">
        <p className="text-4xl text-center text-lightHighlight dark:text-darkHighlight font-headingFont my-4 max-lg:px-4">
          Short Term Goals
        </p>
        <div className="grid grid-cols-3 items-center justify-items-center gap-8 font-textFont max-md:grid-cols-2">
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
        <div className="grid grid-cols-3 items-center justify-items-center gap-8 font-textFont max-md:grid-cols-2">
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
      <div>
        {interests.map((goal, index) => (
          <div key={index} className="flex">
            <div
              dangerouslySetInnerHTML={{ __html: goal.image }}
              className="w-16 h-16 max-sm:w-12 max-sm:h-12"
            />
            <p>{goal.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default pageTransition(About);
