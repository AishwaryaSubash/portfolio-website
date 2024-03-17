import { Link } from "react-router-dom";
import pageTransition from "../utils/pageTransition";
// import "../index.css";

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-start bg-lightBg text-lightText dark:bg-darkBg dark:text-darkText">
      {/* <p className="text-6xl font-headingFont my-4">Home</p> */}
      <div className="z-10 relative flex ml-64 mb-44">
        <p className="absolute -left-40 top-72 text-4xl font-headingFont my-4 text-center text-[#867571] dark:text-[#AB8F6C] max-lg:px-4">
          About Me
        </p>
        <img
          src="Picture.jpg"
          alt="Picture"
          className="w-[313px] h-[422px] rounded-3xl bg-black dark:shadow-2xl-dark shadow-light"
        />
        <div className="w-[530px] flex flex-col gap-2 absolute left-[17rem] bottom-20 p-8 rounded-3xl dark:drop-shadow-md-dark drop-shadow-light font-textFont bg-lightBg text-darkBg dark:bg-darkBg dark:text-lightBg">
          <div className="flex gap-2 font-headingFont text-3xl">
            <p> Hi there!! This is</p>
            <p className="text-[#867571] dark:text-[#AB8F6C]">Aishwarya</p>
          </div>
          <hr className="h-1 border-2 bg-black border-black rounded-full dark:bg-white dark:border-white" />
          <p>
            Fueled by a passion for coding and innovation, I'm a skilled
            Full-Stack Developer crafting dynamic and scalable solutions. I love
            tackling complex problems and exploring new technologies. But code
            isn't everything - I believe in collaboration and fostering a shared
            knowledge environment for collective success.
          </p>
          <Link to="/about">
            <div className="flex items-center justify-center gap-2 w-fit py-2 px-3 mt-2 rounded-2xl text-white dark:text-black bg-[#867571] dark:bg-[#AB8F6C] text-lg">
              <p>My Profile</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="m12.2 13l-.9.9q-.275.275-.275.7t.275.7q.275.275.7.275t.7-.275l2.6-2.6q.3-.3.3-.7t-.3-.7l-2.6-2.6q-.275-.275-.7-.275t-.7.275q-.275.275-.275.7t.275.7l.9.9H9q-.425 0-.712.288T8 12q0 .425.288.713T9 13zm-.2 9q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12q0-3.35-2.325-5.675T12 4Q8.65 4 6.325 6.325T4 12q0 3.35 2.325 5.675T12 20m0-8"
                />
              </svg>
            </div>
          </Link>
        </div>
      </div>
      {/* <div className="z-0 relative w-full h-full">
        <img
          src="Dark Mainpage Design.png"
          alt="Design"
          className="absolute bottom-0 left-0"
        />
      </div> */}
    </div>
  );
};

export default pageTransition(Home);
