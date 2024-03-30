import { interests, longTermGoals, shortTermGoals } from "../utils/constants";
import pageTransition from "../utils/pageTransition";

const About = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-lightBg text-lightText dark:bg-darkBg dark:text-darkText">
      <p className="text-6xl font-headingFont my-4">About Me</p>
      <div>
        {shortTermGoals.map((goal, index) => (
          <div key={index} className="flex">
            <div
              dangerouslySetInnerHTML={{ __html: goal.image }}
              className="w-16 h-16 cursor-pointer max-sm:w-12 max-sm:h-12"
            />
            <p>{goal.content}</p>
          </div>
        ))}
      </div>
      <div>
        {longTermGoals.map((goal, index) => (
          <div key={index} className="flex">
            <div
              dangerouslySetInnerHTML={{ __html: goal.image }}
              className="w-16 h-16 cursor-pointer max-sm:w-12 max-sm:h-12"
            />
            <p>{goal.content}</p>
          </div>
        ))}
      </div>
      <div>
        {interests.map((goal, index) => (
          <div key={index} className="flex">
            <div
              dangerouslySetInnerHTML={{ __html: goal.image }}
              className="w-16 h-16 cursor-pointer max-sm:w-12 max-sm:h-12"
            />
            <p>{goal.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default pageTransition(About);
