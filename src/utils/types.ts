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

export type {
  NavLinksInterface,
  HexPositionsInterface,
  TechSkillsInterface,
  SkillsInterface,
  EducationDetailsInterface,
  WorkExperienceInterface,
};
