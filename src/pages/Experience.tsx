import pageTransition from "../utils/pageTransition";

const Experience = () => {
  return (
    <div className="flex justify-center items-center bg-lightBg text-lightText dark:bg-darkBg dark:text-darkText">
      <p className="text-6xl font-headingFont">Experience</p>
    </div>
  );
};

export default pageTransition(Experience);
