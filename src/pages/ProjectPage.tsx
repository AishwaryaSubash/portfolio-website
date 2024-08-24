import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import pageTransition from "../utils/pageTransition";
import ProjectCards from "../components/ProjectCards";
import ErrorPage from "./ErrorPage";
import { ProjectsInterface } from "../utils/types";
import { projectsList } from "../utils/constants";

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
        <div className="min-w-[33%] flex flex-col gap-8 max-[895px]:w-11/12 max-[895px]:flex-row max-[895px]:justify-between">
          <div className="text-4xl font-headingFont font-bold max-sm:text-3xl">
            {project.title}
          </div>
          <div className="flex gap-4 text-white">
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
            {project.backendRepoUrl && (
              <a href={project.backendRepoUrl} target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    fill-rule="evenodd"
                    d="M3.516 15.725c.271-.019.618-.02 1.116-.02h14.736c.498 0 .845.001 1.117.02c.266.018.422.052.54.102c.387.161.695.47.855.86c.049.119.083.275.101.543c.019.273.019.622.019 1.123c0 .5 0 .85-.019 1.123c-.018.268-.052.424-.101.544c-.16.389-.468.698-.855.86c-.118.049-.274.083-.54.101c-.272.019-.619.019-1.117.019H4.632c-.498 0-.845 0-1.116-.019c-.267-.018-.423-.053-.541-.102a1.58 1.58 0 0 1-.855-.86c-.049-.119-.083-.275-.101-.543A18 18 0 0 1 2 18.353c0-.5 0-.85.019-1.123c.018-.268.052-.424.101-.544c.16-.389.468-.698.855-.86c.118-.049.274-.083.54-.101m1.116 3.687c.58 0 1.052-.474 1.052-1.06c0-.584-.471-1.058-1.052-1.058s-1.053.474-1.053 1.059s.471 1.059 1.053 1.059m.001-11.118c-.498 0-.845 0-1.116-.019c-.267-.018-.423-.052-.541-.102a1.58 1.58 0 0 1-.855-.86c-.049-.119-.083-.275-.101-.543A18 18 0 0 1 2 5.647c0-.5 0-.85.019-1.123c.018-.268.052-.424.101-.544c.16-.389.468-.698.855-.86c.118-.049.274-.083.54-.101A18 18 0 0 1 4.633 3h14.736c.498 0 .845 0 1.117.019c.266.018.422.052.54.102c.387.161.695.47.855.86c.049.119.083.275.101.543c.019.274.019.622.019 1.123c0 .5 0 .85-.019 1.123c-.018.268-.052.424-.101.544c-.16.389-.468.698-.855.86c-.118.049-.274.083-.54.101a18 18 0 0 1-1.117.02zm0 1.059c-.498 0-.845 0-1.116.019c-.267.018-.423.052-.541.102a1.58 1.58 0 0 0-.855.86c-.049.119-.083.275-.101.543C2 11.15 2 11.5 2 12s0 .85.019 1.123c.018.268.052.424.101.544c.16.389.468.698.855.86c.118.049.274.083.54.101c.272.019.619.02 1.117.02h14.736c.498 0 .845-.001 1.117-.02c.266-.018.422-.052.54-.102a1.58 1.58 0 0 0 .855-.86c.049-.119.083-.275.101-.543C22 12.85 22 12.5 22 12s0-.85-.019-1.123c-.018-.268-.052-.424-.101-.544a1.58 1.58 0 0 0-.855-.86c-.118-.049-.274-.083-.54-.101a18 18 0 0 0-1.117-.02zM5.684 12c0 .585-.471 1.059-1.052 1.059A1.056 1.056 0 0 1 3.579 12c0-.585.471-1.059 1.053-1.059c.58 0 1.052.474 1.052 1.059M4.632 6.706c.58 0 1.052-.474 1.052-1.059s-.471-1.059-1.052-1.059s-1.053.474-1.053 1.06c0 .584.471 1.058 1.053 1.058"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
            )}
          </div>
        </div>
        <div className="w-[78%] flex flex-col gap-16 max-[895px]:w-11/12">
          <div className="flex flex-col gap-12 font-textFont">
            <div className="text-lg max-sm:text-base">
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
            <div className="grid grid-cols-3 gap-3 text-lg max-[895px]:justify-items-center max-md:text-base max-[895px]:gap-x-3 max-[895px]:gap-y-1 max-sm:text-sm">
              <p className="font-medium">Team</p>
              <p className="font-medium">Duration</p>
              <p className="font-medium">Time</p>
              <p>{project.team}</p>
              <p>
                {project.duration}
                {project.durationType === 0
                  ? project.duration > 1
                    ? " Months"
                    : " Month"
                  : project.durationType === 1
                  ? project.duration > 1
                    ? " Weeks"
                    : " Week"
                  : project.duration > 1
                  ? " Days"
                  : " Day"}
              </p>
              <p>{project.time}</p>
            </div>
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
          <div>
            {project.myContribution && (
              <div className="flex flex-col items-start gap-4 max-sm:gap-3">
                <div className="w-56 text-3xl font-headingFont font-semibold max-md:text-2xl">
                  My Contribution
                </div>
                <div className="flex flex-wrap font-textFont text-lg max-sm:text-base">
                  {project.myContribution.map((item, index) => (
                    <p key={index}>{item}</p>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="pt-40 flex flex-col items-center gap-10">
        <p className="text-5xl font-headingFont font-bold">Other Projects</p>
        <div className="w-11/12 flex items-start justify-between gap-6 max-[895px]:flex-col">
          <ProjectCards
            isProjectsPage={true}
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
