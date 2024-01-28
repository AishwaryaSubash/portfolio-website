import pageTransition from "../utils/pageTransition";

const Projects = () => {
  return (
    <div className="flex justify-center items-center bg-lightBg text-lightText dark:bg-darkBg dark:text-darkText">
      <p className="text-6xl font-headingFont my-4">Projects</p>
    </div>
  );
};

export default pageTransition(Projects);
