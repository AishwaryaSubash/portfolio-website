import pageTransition from "../utils/pageTransition";

const Projects = () => {
  return (
    <div className="flex justify-center items-center text-6xl bg-lightBg text-lightText dark:bg-darkBg dark:text-darkText">
      <p>Projects</p>
    </div>
  );
};

export default pageTransition(Projects);
