import pageTransition from "../utils/pageTransition";

const About = () => {
  return (
    <div className="flex flex-col justify-center items-end bg-lightBg text-lightText dark:bg-darkBg dark:text-darkText">
      {/* <p className="text-6xl font-headingFont my-4">Home</p> */}
      <div className="z-10 relative flex mr-10 mb-44">
        <p className="absolute -left-40 text-4xl font-headingFont my-4 text-center text-lightHighlight dark:text-darkHighlight max-lg:px-4">
          About Me
        </p>
        <img
          src="Picture.jpg"
          alt="Picture"
          className="w-[313px] h-[422px] rounded-3xl"
        />
        <div className="w-[530px] flex flex-col gap-2 absolute -left-[28rem] -bottom-32 p-8 rounded-3xl font-textFont bg-lightBg text-darkBg dark:bg-darkBg dark:text-lightBg">
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
        </div>
      </div>
      <div className="z-0 relative w-full h-full">
        <img
          src="Dark Mainpage Design.png"
          alt="Design"
          className="absolute bottom-0 left-0"
        />
      </div>
    </div>
  );
};

export default pageTransition(About);
