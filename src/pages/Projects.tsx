import pageTransition from "../utils/pageTransition";
import { projectsList } from "../utils/constants";

const Projects = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-lightBg text-lightText dark:bg-darkBg dark:text-darkText">
      <div className="flex flex-col items-center">
        <p className="text-6xl font-headingFont my-4">Projects</p>
        <p className="text-2xl font-headingFont my-4 text-lightHighlight dark:text-darkHighlight">
          Take a peek at what I've been building
        </p>
      </div>
      <div className="flex w-full h-full">
        {projectsList.map((project, index) => {
          return (
            <div key={index} className="">
              <img src={project.websiteImg} width={800} />
              <p>{project.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default pageTransition(Projects);
