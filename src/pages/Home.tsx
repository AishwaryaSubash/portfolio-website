import pageTransition from "../utils/pageTransition";

const Home = () => {
  return (
    <div className="flex justify-center items-center bg-lightBg text-lightText dark:bg-darkBg dark:text-darkText">
      <p className="text-6xl font-headingFont">Home</p>
    </div>
  );
};

export default pageTransition(Home);
