import { useParams } from "react-router-dom";
import { projectsList } from "../utils/constants";
import { ProjectsInterface } from "../utils/types";
import { useEffect, useState } from "react";
import pageTransition from "../utils/pageTransition";
import ProjectCards from "../components/ProjectCards";

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
    const projectsSet = new Set<ProjectsInterface>(); // Use a set to ensure uniqueness

    while (projectsSet.size < count) {
      const index = Math.floor(Math.random() * length);
      projectsSet.add(projectsList[index]);
    }

    projectsSet.forEach((project) => projects.push(project)); // Convert set to array
    return projects;
  };

  useEffect(() => {
    setSubProjectList(generateRandomIndices(projectsList.length));
  }, [projectsList.length]);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="pt-3 pb-10 w-full flex flex-col items-center gap-8 overflow-hidden bg-lightBg text-lightText dark:bg-darkBg dark:text-darkText">
      <img
        src={project.websiteImg}
        alt={project.title}
        className="w-9/12 rounded-2xl"
      />
      <div className="w-9/12 px-6 pt-40 flex items-start gap-20">
        <div className="text-3xl font-headingFont">{project.title}</div>
        <div className="flex flex-col gap-12">
          <div className="text-xl">{project.detailedDescription}</div>
          <div className="grid grid-cols-3 text-lg">
            <p>Team</p>
            <p>Duration</p>
            <p>Time</p>
            <p>{project.team}</p>
            <p>{project.duration} Months</p>
            <p>{project.time}</p>
          </div>
          <div className="flex items-start gap-12">
            <div className="w-[185px] text-3xl font-headingFont">
              <p>Tech Stack</p>
            </div>
            <div className="flex flex-wrap gap-3">
              {project.techStack.map((item, index) => (
                <div key={index} className="text-lg">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="pt-40 flex flex-col items-center gap-10">
        <p className="text-5xl font-headingFont font-bold">Other Projects</p>
        <div className="w-11/12 flex items-center justify-between gap-6">
          <ProjectCards projectsList={subProjectList} scale={1} initialOpacity={0.5}/>
        </div>
      </div>
    </div>
  );
};

export default pageTransition(ProjectPage);
