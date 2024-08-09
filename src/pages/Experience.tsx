import { educationDetails, workExperience } from "../utils/constants";
// import pageTransition from "../utils/pageTransition";

const Experience = () => {
  return (
    <div className="mt-32 flex flex-col gap-40 justify-center items-center bg-lightBg text-lightText dark:bg-darkBg dark:text-darkText">
      <div className="flex flex-col gap-20 justify-center items-center">
        <p className="font-headingFont text-5xl font-bold max-md:text-4xl max-sm:text-3xl">
          Work Experience
        </p>
        <div className="w-10/12 grid grid-cols-3 font-textFont gap-12 max-xl:grid-cols-2 max-lg:grid-cols-1">
          {workExperience.map((work, index) => {
            return (
              <div
                key={index}
                className="w-full flex flex-col gap-2 bg-gradient-to-br from-50% to-100% rounded-3xl border-2 border-darkHighlight p-4 max-md:rounded-2xl"
              >
                <div className="flex items-start justify-between">
                  <p className="text-[28px] leading-tight font-bold max-md:text-2xl max-sm:text-xl">
                    {work.position}
                  </p>
                  <p className="font-textFont h-fit font-medium text-sm rounded-md py-1 px-3 mt-1 text-lightText bg-lightHighlight dark:text-darkBg dark:bg-darkHighlight w-fit max-sm:text-xs">
                    {work.time}
                  </p>
                </div>
                <div className="flex flex-col gap-4 max-sm:gap-3">
                  <p className="text-lg font-semibold max-md:text-base max-sm:text-sm">
                    {work.institution}
                  </p>
                  <p className="text-lg text-lightBg max-md:text-base max-sm:text-sm">
                    {work.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-10/12 pb-12 flex flex-col items-center gap-20 max-xl:w-full">
        <p className="font-headingFont text-center text-5xl font-bold max-md:text-4xl max-sm:text-3xl">
          Educational Details
        </p>
        <div className="w-9/12 font-textFont flex flex-col gap-8 max-md:w-10/12">
          {educationDetails.map((edu, index) => {
            return (
              <div
                key={index}
                className="w-full flex flex-col p-4 rounded-3xl max-sm:gap-1"
              >
                <div className="flex items-center justify-between max-sm:items-start max-sm:gap-2">
                  <p className="text-[28px] font-bold text-lightHighlight dark:text-darkHighlight max-md:text-2xl max-sm:text-xl">
                    {edu.education}
                  </p>
                  <div className="flex rounded-lg p-2 font-medium text-sm bg-lightText text-lightBg dark:bg-darkHighlight dark:text-darkBg max-sm:text-xs">
                    <p>{edu.time.from}</p>
                    <p>-</p>
                    <p>{edu.time.to}</p>
                  </div>
                </div>
                <p className="text-lg font-semibold max-md:text-base max-sm:text-sm">
                  {edu.institution}
                </p>
                <p className="text-lg text-lightHighlight dark:text-darkHighlight max-md:text-base max-sm:text-sm">
                  {edu.grade}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Experience;
