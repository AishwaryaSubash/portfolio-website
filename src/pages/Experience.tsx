import { educationDetails, workExperience } from "../utils/constants";

const Experience = () => {
  return (
    <div className="mt-48 flex flex-col gap-40 justify-center items-center bg-lightBg text-lightHighlight dark:bg-darkBg dark:text-darkText max-sm:mt-36 max-sm:gap-32">
      <div className="w-10/12 flex flex-col gap-20 justify-center items-center max-xl:w-full max-md:gap-16 max-sm:gap-8">
        <p className="font-headingFont text-5xl text-lightText dark:text-darkText font-bold max-md:text-4xl max-sm:text-3xl">
          Work Experience
        </p>
        <div className="w-9/12 font-textFont flex flex-col gap-8 max-md:w-10/12 max-sm:gap-6">
          {workExperience.map((work, index) => {
            return (
              <div
                key={index}
                className="w-full flex flex-col p-4 rounded-3xl max-sm:gap-1"
              >
                <div className="flex items-center justify-between max-sm:items-start max-sm:gap-2">
                  <p className="text-[28px] text-lightText dark:text-darkText font-semibold leading-snug max-md:text-2xl max-sm:text-xl">
                    {work.position}
                  </p>
                  <div className="flex rounded-lg p-2 font-medium text-sm text-right bg-lightHighlight text-lightBg dark:bg-darkHighlight dark:text-darkBg max-[895px]:hidden">
                    <p>{work.time}</p>
                  </div>
                </div>
                <p className="text-lg text-lightHighlight dark:text-darkHighlight font-semibold max-md:text-base max-sm:text-sm">
                  {work.institution}
                </p>
                <p className="font-medium text-sm mt-1 text-lightText dark:text-darkText min-[895px]:hidden max-sm:text-xs max-sm:mt-0">
                  {work.time}
                </p>
                <p className="text-lg text-darkHighlightBg dark:text-lightHighlightBg mt-3 max-md:text-base max-sm:mt-2 max-sm:text-sm">
                  {work.description}
                </p>
              </div>
            );
          })}
        </div>
        {/* <div className="w-10/12 grid grid-cols-3 font-textFont gap-12 max-xl:grid-cols-2 max-lg:grid-cols-1 max-md:gap-8 max-sm:gap-6">
          {workExperience.map((work, index) => {
            return (
              <div
                key={index}
                className="w-full flex flex-col gap-2 bg-gradient-to-br from-50% to-100% rounded-3xl p-4 max-md:rounded-2xl"
              >
                <div className="flex items-start justify-between">
                  <p className="text-[28px] text-lightText dark:text-darkText leading-tight font-bold max-md:text-2xl max-sm:text-xl">
                    {work.position}
                  </p>
                  <p className="font-textFont h-fit font-medium text-sm text-right rounded-md py-1 px-3 mt-1 text-lightBg bg-lightHighlight dark:text-darkBg dark:bg-darkHighlight w-fit max-sm:text-xs">
                    {work.time}
                  </p>
                </div>
                <div className="flex flex-col gap-4 max-sm:gap-3">
                  <p className="text-lg text-lightText dark:text-darkText font-semibold max-md:text-base max-sm:text-sm">
                    {work.institution}
                  </p>
                  <p className="text-lg text-lightText dark:text-darkText max-md:text-base max-sm:text-sm">
                    {work.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div> */}
      </div>
      <div className="w-10/12 flex flex-col items-center gap-20 max-xl:w-full max-md:gap-16 max-sm:gap-8">
        <p className="font-headingFont text-center text-5xl text-lightText dark:text-darkText font-bold max-md:text-4xl max-sm:text-3xl">
          Educational Details
        </p>
        <div className="w-9/12 font-textFont flex flex-col gap-8 max-md:w-10/12 max-sm:gap-6">
          {educationDetails.map((edu, index) => {
            return (
              <div
                key={index}
                className="w-full flex flex-col p-4 rounded-3xl max-sm:gap-1"
              >
                <div className="flex items-center justify-between max-sm:items-start max-sm:gap-2">
                  <p className="text-[28px] text-lightText dark:text-darkText font-semibold leading-snug max-md:text-2xl max-sm:text-xl">
                    {edu.education}
                  </p>
                  <div className="flex rounded-lg p-2 font-medium text-sm text-right bg-lightHighlight text-lightBg dark:bg-darkHighlight dark:text-darkBg max-sm:text-xs">
                    <p>{edu.time.from}</p>
                    <p>-</p>
                    <p>{edu.time.to}</p>
                  </div>
                </div>
                <p className="text-lg text-darkHighlightBg dark:text-lightHighlightBg font-medium max-md:text-base max-sm:text-sm">
                  {edu.institution}
                </p>
                <div className="flex gap-1 items-center">
                  <p className="text-lg text-lightHighlight dark:text-darkHighlight mt-2 font-bold max-md:text-base max-sm:text-sm">
                    {edu.grade}
                  </p>
                  {edu.additional && (
                    <div className="flex gap-1 items-center">
                      <p className="font-semibold mt-2">-</p>
                      <p className="text-lg text-lightHighlight dark:text-darkHighlight mt-2 font-semibold max-md:text-base max-sm:text-sm">
                        {edu.additional}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Experience;
