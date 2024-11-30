import ProjectCards from "../components/ProjectCards";
import { projectsList } from "../utils/constants";

const Projects = () => {
  return (
    <main className="pt-40 pb-20 flex flex-col gap-16 overflow-hidden justify-center items-center bg-lightBg text-lightHighlight dark:bg-darkBg dark:text-darkText max-md:gap-12 max-sm:gap-8 max-sm:pt-32">
      <div className="flex flex-col gap-4 items-center max-md:gap-3 max-sm:gap-2">
        <p className="font-headingFont text-5xl text-lightText dark:text-darkText font-bold max-md:text-4xl max-sm:text-3xl">
          My Projects
        </p>
        <div className="flex gap-2 text-2xl font-textFont text-lightText dark:text-darkText max-md:text-xl max-sm:text-lg max-sm:flex-col max-sm:text-center max-sm:gap-0 max-sm:leading-tight">
          <p>Take a peek at</p>
          <p>what I've been building</p>
        </div>
        {/* <div className="text-base font-medium font-textFont text-lightText dark:text-darkText max-md:text-sm max-sm:text-xs max-sm:text-center">
          <p>Each project has more to tell — </p>
          <p>click on a card to see the full story!</p>
        </div> */}
      </div>
      <div className="w-10/12 grid grid-cols-2 gap-y-12 gap-x-20 max-lg:grid-cols-1 max-sm:gap-y-8 max-xs:w-full">
        <ProjectCards
          isProjectsPage={false}
          projectsList={projectsList}
          scale={1.046}
          initialOpacity={0.9}
        />
      </div>
    </main>
  );
};

export default Projects;
