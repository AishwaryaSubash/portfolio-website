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
              className="rounded-2xl max-sm:rounded-xl"
            />
            <div className="flex flex-col gap-1">
              <p className="font-textFont font-semibold text-2xl max-sm:text-lg">
                {item.title}
              </p>
              <p className="font-textFont text-lg max-sm:text-base">
                {item.oneLineDescription}
              </p>
              <p className="font-textFont text-sm rounded-md py-1 px-3 mt-1 bg-[#3333339A] w-fit max-sm:text-xs max-sm:px-2">
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
