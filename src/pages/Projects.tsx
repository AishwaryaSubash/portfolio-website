import pageTransition from "../utils/pageTransition";
import { projectsList } from "../utils/constants";

const Projects = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-lightBg text-lightText dark:bg-darkBg dark:text-darkText">
      <div className="flex flex-col items-center mb-8">
        <p className="text-6xl font-headingFont my-4">Projects</p>
        <p className="text-2xl font-headingFont my-4 text-lightHighlight dark:text-darkHighlight">
          Take a peek at what I've been building
        </p>
      </div>
      {/* <div className="h-screen w-full"> */}
      <div className="overflow-x-hidden">
        <div className="flex w-full h-screen gap-4">
          {projectsList.map((project, index) => {
            return (
              <div
                key={index}
                style={{
                  backgroundImage: `url(../public/${project.websiteImg})`,
                  // width: "1000px",
                }}
                className={`flex flex-col items-start justify-between w-[500px] h-[400px] overflow-hidden bg-black text-white rounded-2xl font-textFont`}
              >
                {/* <img src={project.websiteImg} height={1500} /> */}
                <div className="flex flex-col p-4 bg-gray-600">
                  <p className="text-2xl font-semibold">{project.title}</p>
                  <p className="">{project.description}</p>
                </div>
                <div className="flex flex-wrap gap-3 m-4">
                  {project.techStack.map((tech, index) => {
                    return (
                      <div
                        key={index}
                        className="bg-white text-black w-max px-2 py-1 rounded-lg"
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
      {/* </div> */}
    </div>
  );
};

export default pageTransition(Projects);
