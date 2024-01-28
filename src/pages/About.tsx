import pageTransition from "../utils/pageTransition";
import "../index.css";

const About = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-lightBg text-lightText dark:bg-darkBg dark:text-darkText">
      <p className="text-6xl font-headingFont">About</p>
      <p className="font-textFont p-4">
        Throughout my career, I have worked on various projects, including
        e-commerce platforms and customer relationship management systems.
      </p>
    </div>
  );
};

export default pageTransition(About);
