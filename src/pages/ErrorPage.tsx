import pageTransition from "../utils/pageTransition";

const ErrorPage = () => {
  return (
    <div className="h-screen flex flex-col items-center text-red-600 bg-lightBg dark:bg-darkBg">
      <p className="text-6xl font-headingFont my-4">Error</p>
      <p className="font-textFont p-4">
        This page is Not Found. Please navigate using the navigation menu.
      </p>
    </div>
  );
};

export default pageTransition(ErrorPage);
