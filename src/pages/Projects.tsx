// import { useState } from "react";
// import pageTransition from "../utils/pageTransition";
// import { motion } from "framer-motion";
import { projectsList } from "../utils/constants";
// import { Link } from "react-router-dom";
import ProjectCards from "../components/ProjectCards";

const Projects = () => {
  // const [isHovered, setIsHovered] = useState<boolean[]>(
  //   Array(projectsList.length).fill(false)
  // );

  // const handleHover = (index: number) => {
  //   const updatedArray = [...isHovered];
  //   updatedArray[index] = true;
  //   // setIsHovered(updatedArray);
  //   setIsHovered((prevState) => {
  //     return prevState.map((value, idx) => {
  //       if (idx === index) {
  //         return true;
  //       } else {
  //         return value;
  //       }
  //     });
  //   });
  //   console.log(updatedArray);
  //   console.log("hover", index);
  //   console.log(isHovered);
  // };

  // const handleLeave = (index: number) => {
  //   const updatedArray = [...isHovered];
  //   updatedArray[index] = false;
  //   setIsHovered(updatedArray);
  //   console.log("leave", index);
  //   console.log(isHovered);
  // };

  return (
    <div className="pt-40 flex flex-col gap-16 overflow-hidden justify-center items-center bg-lightBg text-lightText dark:bg-darkBg dark:text-darkText max-md:gap-12 max-sm:gap-8">
      <div className="flex flex-col gap-4 items-center max-md:gap-3 max-sm:gap-2">
        <p className="font-headingFont text-5xl font-bold max-md:text-4xl max-sm:text-3xl">
          My Projects
        </p>
        <div className="flex gap-2 text-2xl font-textFont text-lightHighlight dark:text-darkText max-md:text-xl max-sm:text-lg max-sm:flex-col max-sm:text-center max-sm:gap-0 max-sm:leading-tight">
          <p>Take a peek at</p>
          <p>what I've been building</p>
        </div>
      </div>
      {/* <div className="z-0 font-textFont w-full h-full grid grid-cols-2 justify-items-center gap-8 max-md:grid-cols-1">
        {projectsList.map((project, index) => {
          return (
            <div
              key={index}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleLeave(index)}
              className="relative flex flex-col justify-between items-center p-4 w-11/12 h-full rounded-2xl bg-lightTextOpacity text-lightBg dark:bg-darkTextOpacity dark:text-darkBg"
            >
              {isHovered[index] && (
                <div className="absolute top-1/3 left-1/2">
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="64"
                      height="64"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4.44c-.32-.07-.33-.68-.33-.89l.01-2.47c0-.84-.29-1.39-.61-1.67c2.01-.22 4.11-.97 4.11-4.44c0-.98-.35-1.79-.92-2.42c.09-.22.4-1.14-.09-2.38c0 0-.76-.23-2.48.93c-.72-.2-1.48-.3-2.25-.31c-.76.01-1.54.11-2.25.31c-1.72-1.16-2.48-.93-2.48-.93c-.49 1.24-.18 2.16-.09 2.38c-.57.63-.92 1.44-.92 2.42c0 3.47 2.1 4.22 4.1 4.47c-.26.2-.49.6-.57 1.18c-.52.23-1.82.63-2.62-.75c0 0-.48-.86-1.38-.93c0 0-.88 0-.06.55c0 0 .59.28 1 1.32c0 0 .52 1.75 3.03 1.21l.01 1.53c0 .21-.02.82-.34.89H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"
                        fill="currentColor"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="64"
                      height="64"
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
              )}
              <img
                src={project.websiteImg}
                className={`w-10/12 max-md:w-10/12 rounded-xl ${
                  isHovered[index] && "blur-sm"
                }`}
              />
              <div className="flex flex-col mt-4 gap-2">
                <p className="text-2xl font-semibold max-md:text-base">
                  {project.title}
                </p>
                <p className="max-md:text-sm">{project.detailedDescription}</p>
              </div>
            </div>
          );
        })}
      </div> */}
      <div className="w-10/12 grid grid-cols-2 gap-y-12 gap-x-20 max-lg:grid-cols-1 max-sm:gap-y-8">
        <ProjectCards
          isProjectsPage={true}
          projectsList={projectsList}
          scale={1.046}
          initialOpacity={0.75}
        />
      </div>
    </div>
  );
};

export default Projects;
