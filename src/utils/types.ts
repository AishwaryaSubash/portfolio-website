interface NavLinksInterface {
  title: string;
  href: string;
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
  additional?: string;
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
  backendRepoUrl?: string;
  websiteImg: string;
  websiteVideo?: string;
  detailedDescription: string | string[];
  techStack: string[];
  team: string;
  duration: number;
  durationType: number; // 0-months, 1-weeks, 2-days
  time: string;
  myContribution?: string[];
}

interface ContactDetailsInterface {
  media: string;
  link: string;
  icon: string;
}

// interface GoalsInterface {
//   content: string;
//   image: string;
// }

interface SnackbarProps {
  message: string;
  duration?: number;
}

interface ContactFormData {
  senderName: string;
  senderEmail: string;
  message: string;
  // date: number;
}

export type {
  NavLinksInterface,
  TechSkillsInterface,
  SkillsInterface,
  EducationDetailsInterface,
  WorkExperienceInterface,
  ProjectsInterface,
  ContactDetailsInterface,
  SnackbarProps,
  ContactFormData,
};
