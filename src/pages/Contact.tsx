import pageTransition from "../utils/pageTransition";

const Contact = () => {
  return (
    <div className="flex justify-center items-center text-6xl bg-lightBg text-lightText dark:bg-darkBg dark:text-darkText">
      <p>Contact</p>
    </div>
  );
};

export default pageTransition(Contact);
