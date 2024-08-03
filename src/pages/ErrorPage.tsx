import pageTransition from "../utils/pageTransition";

const ErrorPage = () => {
  return (
    <div className="pt-10 h-screen flex flex-col gap-4 items-center text-red-600 bg-lightBg dark:bg-darkBg">
      <p className="text-5xl font-headingFont font-bold">Error</p>
      <div className="flex gap-2 text-2xl font-textFont max-lg:flex-col max-lg:text-center">
        <p>This page is Not Found.</p>
        <p>Please navigate using the navigation menu.</p>
      </div>
    </div>
    //   <div className="flex flex-col gap-4 items-center mb-16">
    //   <p className="text-5xl font-headingFont font-bold">My Projects</p>
    //   <div className="flex gap-2 text-2xl font-textFont text-lightHighlight dark:text-darkText max-sm:flex-col max-sm:text-center">
    //     <p>Take a peek at</p>
    //     <p>what I've been building</p>
    //   </div>
    // </div>
  );
};

export default pageTransition(ErrorPage);
