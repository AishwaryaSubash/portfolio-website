import pageTransition from "../utils/pageTransition";
import { projectsList } from "../utils/constants";

const Contact = () => {
  return (
    <div className="flex flex-col overflow-x-hidden justify-center items-center bg-lightBg text-lightText dark:bg-darkBg dark:text-darkText">
      <div className="flex flex-col items-center mb-8">
        <p className="text-6xl font-headingFont my-4">Projects</p>
        <div className="flex gap-2 text-2xl font-headingFont my-4 text-lightHighlight dark:text-darkHighlight max-sm:flex-col max-sm:text-center">
          <p>Take a peek at</p>
          <p>what I've been building</p>
        </div>
      </div>
      <div className="z-0 font-textFont grid grid-cols-2 justify-items-center gap-8 max-md:grid-cols-1">
        {projectsList.map((project, index) => {
          return (
            <div
              key={index}
              className="flex flex-col justify-between items-center p-4 w-11/12 rounded-2xl bg-lightTextOpacity text-lightBg dark:bg-darkTextOpacity dark:text-darkBg"
            >
              <img
                src={project.websiteImg}
                className="w-10/12 max-md:w-10/12 rounded-xl"
              />
              <div className="flex flex-col mt-4 gap-2">
                <p className="text-2xl font-semibold max-md:text-base">
                  {project.title}
                </p>
                <p className="max-md:text-sm">{project.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default pageTransition(Contact);
