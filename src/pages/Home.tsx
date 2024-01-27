import pageTransition from "../utils/pageTransition";

const Home = () => {
  return (
    <div className="flex justify-center items-center text-6xl bg-lightBg text-lightText dark:bg-darkBg dark:text-darkText">
      <p>Home</p>
    </div>
  );
};

export default pageTransition(Home);
