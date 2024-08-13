import { useParams } from "react-router-dom";
import { projectsList } from "../utils/constants";
import { ProjectsInterface } from "../utils/types";
import { useEffect, useState } from "react";
import pageTransition from "../utils/pageTransition";
import ProjectCards from "../components/ProjectCards";
import ErrorPage from "./ErrorPage";

const ProjectPage = () => {
  const [subProjectList, setSubProjectList] = useState<ProjectsInterface[]>([]);
  const { id } = useParams<{ id: string }>();
  const project = projectsList.find(
    (project: ProjectsInterface) => project.route === id
  );

  const generateRandomIndices = (
    length: number,
    count: number = 3
  ): ProjectsInterface[] => {
    const projects: ProjectsInterface[] = [];
    const projectsSet = new Set<ProjectsInterface>();

    while (projectsSet.size < count) {
      const index = Math.floor(Math.random() * length);
      if (projectsList[index].route !== id) {
        projectsSet.add(projectsList[index]);
      }
    }

    projectsSet.forEach((project) => projects.push(project));
    return projects;
  };

  useEffect(() => {
    setSubProjectList(generateRandomIndices(projectsList.length));
  }, [projectsList.length]);

  if (!project) {
    return <ErrorPage />;
  }

  return (
    <div className="pt-40 pb-20 w-full flex flex-col items-center gap-8 overflow-hidden bg-lightBg text-lightText dark:bg-darkBg dark:text-darkText">
      <img
        src={project.websiteImg}
        alt={project.title}
        className="w-9/12 rounded-2xl max-[895px]:w-11/12"
      />
      <div className="w-9/12 pt-40 flex gap-4 items-start max-[895px]:w-11/12 max-[895px]:pt-32 max-[895px]:flex-col max-[895px]:items-center max-sm:pt-20 max-xs:pt-12">
        <div className="flex flex-col gap-8 max-[895px]:w-11/12 max-[895px]:flex-row max-[895px]:justify-between">
          <div className="text-4xl font-headingFont font-bold max-sm:text-3xl">
            {project.title}
          </div>
          <div className="flex gap-4">
            <a href={project.websiteUrl} target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 512 512"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-miterlimit="10"
                  stroke-width="32"
                  d="M256 48C141.13 48 48 141.13 48 256s93.13 208 208 208s208-93.13 208-208S370.87 48 256 48Z"
                />
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-miterlimit="10"
                  stroke-width="32"
                  d="M256 48c-58.07 0-112.67 93.13-112.67 208S197.93 464 256 464s112.67-93.13 112.67-208S314.07 48 256 48Z"
                />
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="32"
                  d="M117.33 117.33c38.24 27.15 86.38 43.34 138.67 43.34s100.43-16.19 138.67-43.34m0 277.34c-38.24-27.15-86.38-43.34-138.67-43.34s-100.43 16.19-138.67 43.34"
                />
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-miterlimit="10"
                  stroke-width="32"
                  d="M256 48v416m208-208H48"
                />
              </svg>
            </a>
            <a href={project.githubUrl} target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"
                />
              </svg>
            </a>
          </div>
        </div>
        <div className="w-[78%] flex flex-col gap-16 max-[895px]:w-11/12">
          <div className="flex flex-col gap-12 font-textFont">
            <div className="text-lg">
              {Array.isArray(project.detailedDescription) ? (
                project.detailedDescription.map((item, index) => (
                  <div key={index}>
                    <p>{item}</p>
                  </div>
                ))
              ) : (
                <p>{project.detailedDescription}</p>
              )}
            </div>

            {/* <MediaQuery maxWidth={894}>
              <div className="flex flex-col">
                <div className="flex gap-2">
                  <p>Team</p>
                  <p>{project.team}</p>
                </div>
                <div className="flex gap-2">
                  <p>Duration</p>
                  <p>{project.duration} Months</p>
                </div>
                <div className="flex gap-2">
                  <p>Time</p>
                  <p>{project.time}</p>
                </div>
              </div>
            </MediaQuery>
            <MediaQuery minWidth={895}> */}
            <div className="grid grid-cols-3 gap-4 text-lg max-[895px]:justify-items-center max-md:text-base max-[895px]:gap-x-3 max-[895px]:gap-y-1 max-sm:text-sm">
              <p>Team</p>
              <p>Duration</p>
              <p>Time</p>
              <p>{project.team}</p>
              <p>{project.duration} Months</p>
              <p>{project.time}</p>
            </div>
            {/* </MediaQuery> */}
          </div>
          <div className="flex flex-col items-start gap-4 max-sm:gap-3">
            <div className="w-[185px] text-3xl font-headingFont font-semibold max-md:text-2xl">
              Tech Stack
            </div>
            <div className="flex flex-wrap gap-3 font-textFont max-sm:gap-2">
              {project.techStack.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center gap-3 text-lg max-md:gap-2 max-sm:text-base max-sm:gap-1"
                >
                  <p>{item}</p>
                  {index !== project.techStack.length - 1 && <p>|</p>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="pt-40 flex flex-col items-center gap-10">
        <p className="text-5xl font-headingFont font-bold">Other Projects</p>
        <div className="w-11/12 flex items-start justify-between gap-6 max-[895px]:flex-col">
          <ProjectCards
            isProjectsPage={false}
            projectsList={subProjectList}
            scale={1}
            initialOpacity={0.5}
          />
        </div>
      </div>
    </div>
  );
};

export default pageTransition(ProjectPage);
