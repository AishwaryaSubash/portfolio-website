import { skills } from "../utils/constants";
import pageTransition from "../utils/pageTransition";

const Skills = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-lightBg text-lightText dark:bg-darkBg dark:text-darkText">
      <p className="text-6xl font-headingFont">Skills</p>
      <div className="flex flex-col justify-center">
        <p className="text-4xl font-headingFont">Technical Skills</p>
        <div>
          {skills.map((skill, index) => {
            return (
              <div key={index}>
                <p className="text-2xl font-headingFont">{skill.skillType}</p>
                <div className="grid grid-cols-3">
                  {skill.skillArray.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between m-4 p-4 gap-4 font-textFont border border-lightText dark:border-darkText rounded-xl"
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
    </div>
  );
};

export default pageTransition(Skills);
