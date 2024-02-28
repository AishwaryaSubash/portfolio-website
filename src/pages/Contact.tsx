import pageTransition from "../utils/pageTransition";
import { projectsList } from "../utils/constants";

const Contact = () => {
  return (
    <div className="flex flex-col overflow-x-hidden justify-center items-center bg-lightBg text-lightText dark:bg-darkBg dark:text-darkText">
      <div className="flex flex-col items-center mb-8">
        <p className="text-6xl font-headingFont my-4">Projects</p>
        <p className="text-2xl font-headingFont my-4 text-lightHighlight dark:text-darkHighlight">
          Take a peek at what I've been building
        </p>
      </div>
      <div className="z-0 relative flex justify-center">
        <div className="grid grid-cols-2 w-11/12 gap-8 max-md:grid-cols-1 max-md:justify-items-center">
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
                  <p className="text-2xl font-semibold">{project.title}</p>
                  <p className="">{project.description}</p>
                </div>
                <div className="invisible group-hover:visible flex flex-wrap gap-3 m-4">
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
