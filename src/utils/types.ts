interface NavLinksInterface {
  title: string;
  href: string;
}

interface HexPositionsInterface {
  top: number;
  left: number;
}

interface TechSkillsInterface {
  name: string;
  svg: string;
  proficiency: number;
}

interface SkillsInterface {
  skillType: string;
  skillArray: TechSkillsInterface[];
}

interface TimeInterface {
  from: number;
  to: number;
}

interface EducationDetailsInterface {
  education: string;
  institution: string;
  grade: string;
  time: TimeInterface;
}

interface WorkExperienceInterface {
  position: string;
  institution: string;
  description: string;
  time: string;
}

interface ProjectsInterface {
  route: string;
  title: string;
  oneLineDescription: string;
  category: string;
  websiteUrl: string;
  githubUrl: string;
  websiteImg: string;
  websiteVideo?: string;
  detailedDescription: string;
  techStack: string[];
  team: string;
  duration: number;
  time: string;
}

interface ContactDetailsInterface {
  media: string;
  link: string;
  icon: string;
}

interface GoalsInterface {
  content: string;
  image: string;
}

export type {
  NavLinksInterface,
  HexPositionsInterface,
  TechSkillsInterface,
  SkillsInterface,
  EducationDetailsInterface,
  WorkExperienceInterface,
  ProjectsInterface,
  ContactDetailsInterface,
  GoalsInterface,
};
