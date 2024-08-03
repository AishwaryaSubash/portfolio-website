import { educationDetails, workExperience } from "../utils/constants";
// import pageTransition from "../utils/pageTransition";

const Experience = () => {
  return (
    <div className="mt-32 flex flex-col justify-center items-center bg-lightBg text-lightText dark:bg-darkBg dark:text-darkText">
      <p className="font-headingFont text-5xl font-bold my-8 max-md:text-4xl max-sm:text-3xl">
        Experience
      </p>
      <div className="w-10/12">
        <p className="text-4xl font-headingFont my-4 text-lightHighlight dark:text-darkHighlight">
          Work Experience
        </p>
        <div className="w-full font-textFont">
          {workExperience.map((work, index) => {
            return (
              <div
                key={index}
                className="w-full flex flex-col p-4 m-4 rounded-3xl max-sm:items-start max-sm:gap-4"
              >
                <div className="flex items-center justify-between max-sm:flex-col max-sm:items-start max-sm:gap-2">
                  <p className="text-2xl text-lightHighlight dark:text-darkHighlight">
                    {work.position}
                  </p>
                  <p className="flex rounded-lg p-2 bg-lightText text-lightBg dark:bg-darkText dark:text-darkBg">
                    {work.time}
                  </p>
                </div>
                <p className="">{work.institution}</p>
                <p className="text-lg">{work.description}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="mt-12 w-10/12">
        <p className="text-4xl font-headingFont my-4 text-lightHighlight dark:text-darkHighlight">
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
