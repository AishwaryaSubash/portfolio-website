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
      <div className="z-0 relative flex justify-center">
        <div className="grid grid-cols-2 w-11/12 mb-6 gap-8 max-lg:grid-cols-1 max-lg:w-8/12 max-md:justify-items-center max-md:w-11/12">
          {projectsList.map((project, index) => {
            return (
              <div
                key={index}
                style={{
                  backgroundImage: `url(/${project.websiteImg})`,
                  // width: "900px",
                  // height: "400px",
                }}
                className={`group w-full h-96 flex flex-col items-start justify-between bg-no-repeat bg-center bg-cover overflow-hidden text-wrap rounded-2xl font-textFont max-xl:h-80 max-md:h-64 max-md:w-10/12`}
              >
                {/* <img src={project.websiteImg} height={1500} /> */}
                <div className="invisible group-hover:visible flex flex-col p-4 bg-lightTextOpacity text-lightBg dark:bg-darkTextOpacity dark:text-darkBg">
                  <p className="text-2xl font-semibold max-md:text-base">
                    {project.title}
                  </p>
                  <p className="max-md:text-sm">{project.description}</p>
                </div>
                <div className="invisible group-hover:visible flex flex-wrap gap-3 m-4 max-md:text-xs max-md:m-2">
                  {project.techStack.map((tech, index) => {
                    return (
                      <div
                        key={index}
                        className="bg-lightHighlight text-lightBg dark:bg-darkHighlight dark:text-darkBg w-max px-2 py-1 rounded-lg"
                      >
                        <p>{tech}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default pageTransition(Contact);
