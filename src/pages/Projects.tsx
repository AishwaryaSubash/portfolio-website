import pageTransition from "../utils/pageTransition";
import { projectsList } from "../utils/constants";
import { useEffect, useState } from "react";

const Projects = () => {
  const [hovering] = useState(false);
  const [currentIndex, setCurrIndex] = useState<number>(0);

  function scrollToNext() {
    if (!hovering) {
      const length = projectsList.length - 1;
      if (currentIndex < length) {
        setCurrIndex((prevIndex) => prevIndex + 1);
        setTimeout(scrollToNext, 2000);
      } else {
        setCurrIndex(0);
        setTimeout(scrollToNext, 2000);
      }
    } else {
      setTimeout(scrollToNext, 2000);
    }
    console.log(currentIndex);
  }

  useEffect(() => {
    scrollToNext();
  });

  return (
    <div className="flex flex-col overflow-x-hidden justify-center items-center bg-lightBg text-lightText dark:bg-darkBg dark:text-darkText">
      <div className="flex flex-col items-center mb-8">
        <p className="text-6xl font-headingFont my-4">Projects</p>
        <p className="text-2xl font-headingFont my-4 text-lightHighlight dark:text-darkHighlight">
          Take a peek at what I've been building
        </p>
      </div>
      {/* <div className="h-screen w-full"> */}
      {/* <div className="overflow-x-hidden">
        <div className="flex w-full h-screen gap-4"> */}
      <div className="relative flex h-screen">
        <div className="flex gap-8 animate-marquee whitespace-nowrap">
          {/* animate-marquee whitespace-nowrap */}
          {projectsList.map((project, index) => {
            return (
              <div
                key={index}
                style={{
                  backgroundImage: `url(/${project.websiteImg})`,
                  width: "900px",
                  height: "400px",
                }}
                className={`group flex flex-col items-start justify-between overflow-hidden text-wrap rounded-2xl font-textFont`}
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
      {/* </div> */}
    </div>
  );
};

export default pageTransition(Projects);
