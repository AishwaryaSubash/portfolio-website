import { professionalSkills, skills } from "../utils/constants";
import pageTransition from "../utils/pageTransition";

const Skills = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-lightBg text-lightText dark:bg-darkBg dark:text-darkText">
      <p className="text-6xl font-headingFont my-4">Skills</p>
      <div className="flex flex-col justify-center">
        <p className="text-4xl font-headingFont my-4 text-center text-lightHighlight dark:text-darkHighlight max-lg:px-4">
          Technical Skills
        </p>
        <div>
          {skills.map((skill, index) => {
            return (
              <div key={index}>
                <p className="text-2xl font-headingFont mt-6 max-lg:px-4">
                  {skill.skillType}
                </p>
                <div className="grid grid-cols-3 max-lg:grid-cols-2 max-lg:gap-x-8 max-md:grid-cols-2">
                  {skill.skillArray.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between m-4 p-4 gap-4 text-center font-textFont border border-lightText dark:border-darkText rounded-xl max-md:flex-col"
                    >
                      <div
                        dangerouslySetInnerHTML={{ __html: item.svg }}
                        className="w-16 h-16"
                      />
                      <h3>{item.name}</h3>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col justify-center">
        <p className="text-4xl font-headingFont mt-12 mb-4 text-center text-lightHighlight dark:text-darkHighlight max-lg:px-4">
          Professional Skills
        </p>
        <div>
          <div className="grid grid-cols-3 max-lg:grid-cols-2 max-lg:gap-x-8 max-md:grid-cols-2">
            {professionalSkills.map((item, index) => (
              <div
                key={index}
                className="flex w-[256px] items-center justify-between m-4 p-4 gap-4 text-center break-words font-textFont border border-lightText dark:border-darkText rounded-xl max-md:flex-col max-md:w-[176px]"
              >
                <div
                  dangerouslySetInnerHTML={{ __html: item.svg }}
                  className="w-16 h-16"
                />
                <h3>{item.name.replace(" ", "\n")}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default pageTransition(Skills);
