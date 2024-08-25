import pageTransition from "../utils/pageTransition";

const ErrorPage = () => {
  return (
    <div className="pt-40 h-screen flex flex-col gap-4 items-center text-red-600 bg-lightBg dark:bg-darkBg max-sm:pt-32">
      <p className="text-5xl font-headingFont font-bold">Error</p>
      <div className="flex gap-2 text-2xl font-textFont max-lg:flex-col max-lg:text-center">
        <p>This page is Not Found.</p>
        <p>Please navigate using the navigation menu.</p>
      </div>
    </div>
  );
};

export default pageTransition(ErrorPage);
