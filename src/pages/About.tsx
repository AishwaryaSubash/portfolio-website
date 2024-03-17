// import { Progress } from "@material-tailwind/react";
import { professionalSkills, skills } from "../utils/constants";
import pageTransition from "../utils/pageTransition";
import "../index.css";

const About = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-lightBg text-lightText dark:bg-darkBg dark:text-darkText">
      <p className="text-6xl font-headingFont my-4">About</p>
      <div className="flex flex-col justify-center">
        <p className="text-4xl font-headingFont my-4 text-center text-lightHighlight dark:text-darkHighlight max-lg:px-4">
          About Me
        </p>
      </div>
    </div>
  );
};

export default pageTransition(About);
