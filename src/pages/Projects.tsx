import pageTransition from "../utils/pageTransition";
import { projectsList } from "../utils/constants";

const Projects = () => {
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
                <div className=" group-hover:visible w-full flex justify-between items-end">
                  <div className="flex flex-wrap gap-3 m-4 max-md:text-xs max-md:m-2">
                    {project.techStack.map((tech, index) => {
                      return (
                        <div
                          key={index}
                          className="bg-lightHighlight w-fit h-fit text-lightBg dark:bg-darkHighlight dark:text-darkBg px-2 py-1 rounded-lg"
                        >
                          <p>{tech}</p>
                        </div>
                      );
                    })}
                  </div>
                  <div className="flex flex-col m-2 text-black">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4.44c-.32-.07-.33-.68-.33-.89l.01-2.47c0-.84-.29-1.39-.61-1.67c2.01-.22 4.11-.97 4.11-4.44c0-.98-.35-1.79-.92-2.42c.09-.22.4-1.14-.09-2.38c0 0-.76-.23-2.48.93c-.72-.2-1.48-.3-2.25-.31c-.76.01-1.54.11-2.25.31c-1.72-1.16-2.48-.93-2.48-.93c-.49 1.24-.18 2.16-.09 2.38c-.57.63-.92 1.44-.92 2.42c0 3.47 2.1 4.22 4.1 4.47c-.26.2-.49.6-.57 1.18c-.52.23-1.82.63-2.62-.75c0 0-.48-.86-1.38-.93c0 0-.88 0-.06.55c0 0 .59.28 1 1.32c0 0 .52 1.75 3.03 1.21l.01 1.53c0 .21-.02.82-.34.89H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"
                        fill="currentColor"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="M10 3.007c-2.946.032-4.59.219-5.682 1.311C3 5.636 3 7.758 3 12c0 4.243 0 6.364 1.318 7.682C5.636 21 7.758 21 12 21c4.243 0 6.364 0 7.682-1.318c1.061-1.061 1.268-2.643 1.308-5.434M21 3h-6.75M21 3v6.75M21 3l-8.25 8.25"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default pageTransition(Projects);
