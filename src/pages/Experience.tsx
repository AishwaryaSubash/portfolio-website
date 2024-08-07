import { educationDetails, workExperience } from "../utils/constants";
// import pageTransition from "../utils/pageTransition";

const Experience = () => {
  return (
    <div className="mt-32 flex flex-col gap-32 justify-center items-center bg-lightBg text-lightText dark:bg-darkBg dark:text-darkText">
      <div className="flex flex-col gap-16 justify-center items-center">
        <p className="font-headingFont text-5xl font-bold max-md:text-4xl max-sm:text-3xl">
          Work Experience
        </p>
        <div className="w-10/12 flex font-textFont gap-12">
          {workExperience.map((work, index) => {
            return (
              <div
                key={index}
                className="w-full flex flex-col gap-2 bg-gradient-to-br from-50% to-100%
              rounded-3xl max-md:rounded-3xl border border-darkHighlight p-4 max-sm:items-start max-sm:gap-4"
              >
                <div className="flex items-start justify-between">
                  <p className="text-[28px] leading-tight font-bold text-lightHighlight dark:text-darkHighlight">
                    {work.position}
                  </p>
                  <p className="font-textFont h-fit font-medium text-sm rounded-md py-1 px-3 mt-1 bg-[#333] w-fit">
                    {work.time}
                  </p>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col">
                    <div className="flex items-center justify-between max-sm:flex-col max-sm:items-start max-sm:gap-2"></div>
                    <p className="text-lg font-medium">{work.institution}</p>
                  </div>
                  <p className="text-lg text-lightBg">{work.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-10/12">
        <p className="font-headingFont text-center text-5xl font-bold my-8 max-md:text-4xl max-sm:text-3xl">
          Educational Details
        </p>
        <div className="w-full font-textFont">
          {educationDetails.map((edu, index) => {
            return (
              <div
                key={index}
                className="w-full flex flex-col p-4 m-4 rounded-3xl max-sm:gap-4"
              >
                <div className="flex items-center justify-between max-sm:flex-col max-sm:items-start max-sm:gap-2">
                  <p className="text-2xl">{edu.education}</p>
                  <div className="flex rounded-lg p-2 bg-lightText text-lightBg dark:bg-darkText dark:text-darkBg">
                    <p>{edu.time.from}</p>
                    <p>-</p>
                    <p>{edu.time.to}</p>
                  </div>
                </div>
                <p className="">{edu.institution}</p>
                <p className="text-lg text-lightHighlight dark:text-darkHighlight">
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
