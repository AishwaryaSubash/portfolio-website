import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ProjectsInterface } from "../utils/types";

const ProjectCards = ({
  projectsList,
  scale,
  initialOpacity,
  isProjectsPage,
}: {
  projectsList: ProjectsInterface[];
  scale: number;
  initialOpacity: number;
  isProjectsPage: boolean;
}) => {
  return (
    <>
      {projectsList.map((item, index) => (
        <Link to={`/projects/${item.route}`}>
          <motion.div
            initial={{ opacity: initialOpacity }}
            transition={{ duration: 0.25, delay: 0.25 }}
            whileHover={{ scale: scale, opacity: 1 }}
            key={index}
            className="flex flex-col gap-4 rounded-2xl p-4 cursor-pointer border-2 border-transparent"
          >
            <img
              src={item.websiteImg}
              alt={item.title}
              className={`rounded-2xl ${
                isProjectsPage ? "max-sm:rounded-xl" : "max-tablet:rounded-xl"
              }`}
            />
            <div className="flex flex-col gap-1">
              <p
                className={`font-textFont text-lightText dark:text-darkText font-semibold text-2xl ${
                  isProjectsPage ? "max-sm:text-lg" : "max-lg:text-xl"
                }`}
              >
                {item.title}
              </p>
              <p
                className={`font-textFont text-lg text-lightText dark:text-darkText ${
                  isProjectsPage ? "max-sm:text-base" : "max-lg:text-base"
                }`}
              >
                {item.oneLineDescription}
              </p>
              <p
                className={`font-textFont text-sm text-lightText dark:text-darkText rounded-md py-1 px-3 mt-1 bg-lightHighlightBg dark:bg-[#3333339A] w-fit max-sm:text-xs max-sm:px-2`}
              >
                {item.category}
              </p>
            </div>
          </motion.div>
        </Link>
      ))}
    </>
  );
};

export default ProjectCards;
