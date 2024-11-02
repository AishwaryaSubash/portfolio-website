import { motion } from "framer-motion";

const Resume = () => {
  const handlePreview = () => {
    window.open(
      "https://drive.google.com/file/d/1ln2wG-KjNx0MATWe5e6AkaTXHXIIyOD-/view?usp=drive_link",
      "_blank"
    );
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Resume - Aishwarya Subash.pdf";
    link.download = "Aishwarya Subash.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <main className="pt-40 pb-20 flex gap-20 items-center justify-center bg-lightBg text-lightText dark:bg-darkBg dark:text-darkText max-sm:pt-32">
      <div className="flex flex-col gap-16 items-end">
        <p className="text-5xl font-headingFont font-bold">My Resume</p>
        <div className="flex items-center justify-center gap-6 text-lightHighlight dark:text-darkHighlight max-lg:justify-evenly">
          <motion.div
            onClick={handlePreview}
            whileHover={{ transition: { duration: 0.25, delay: 0.25 } }}
            className="cursor-pointer flex items-center gap-4 py-2 px-4 w-fit rounded-xl font-textFont font-semibold text-lg border-2 border-lightHighlight text-lightBg bg-lightHighlight hover:bg-transparent hover:text-lightHighlight dark:text-darkBg dark:bg-darkHighlight dark:border-2 dark:border-darkHighlight dark:hover:bg-transparent dark:hover:border-darkHighlightOpacity dark:hover:text-darkHighlight max-sm:text-base"
          >
            <p>View Resume</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 26 26"
            >
              <g fill="currentColor">
                <path d="M5 6a1 1 0 0 1 1-1h4a1 1 0 1 0 0-2H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-4a1 1 0 1 0-2 0v4a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6zm10-3a1 1 0 1 0 0 2h2.586l-6.293 6.293a1 1 0 0 0 1.414 1.414L19 6.414V9a1 1 0 1 0 2 0V4a1 1 0 0 0-1-1h-5z" />
              </g>
            </svg>
          </motion.div>
          <motion.div
            onClick={handleDownload}
            whileHover={{ transition: { duration: 0.25, delay: 0.25 } }}
            className="cursor-pointer flex items-center gap-4 py-2 px-4 w-fit rounded-xl font-textFont font-semibold text-lg border-2 border-lightHighlight text-lightBg bg-lightHighlight hover:bg-transparent hover:text-lightHighlight dark:text-darkBg dark:bg-darkHighlight dark:border-2 dark:border-darkHighlight dark:hover:bg-transparent dark:hover:border-darkHighlightOpacity dark:hover:text-darkHighlight max-sm:text-base"
          >
            <p>Download Resume</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M12 15.575q-.2 0-.375-.062T11.3 15.3l-3.6-3.6q-.3-.3-.288-.7t.288-.7q.3-.3.713-.312t.712.287L11 12.15V5q0-.425.288-.712T12 4t.713.288T13 5v7.15l1.875-1.875q.3-.3.713-.288t.712.313q.275.3.288.7t-.288.7l-3.6 3.6q-.15.15-.325.213t-.375.062M6 20q-.825 0-1.412-.587T4 18v-2q0-.425.288-.712T5 15t.713.288T6 16v2h12v-2q0-.425.288-.712T19 15t.713.288T20 16v2q0 .825-.587 1.413T18 20z"
              />
            </svg>
          </motion.div>
        </div>
      </div>
      <div className="cursor-pointer rounded-xl border-4 border-lightHighlightBg dark:border-darkHighlightBg bg-lightHighlightBg dark:bg-darkHighlightBg">
        <img
          onClick={handlePreview}
          src="resume.png"
          alt="Resume"
          draggable="false"
          className="w-[350px] h-[485px] rounded-2xl border-4 border-lightHighlightBg dark:border-darkHighlightBg bg-lightHighlightBg dark:bg-darkHighlightBg"
        />
      </div>
    </main>
  );
};

export default Resume;
