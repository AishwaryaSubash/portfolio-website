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

export type {
  NavLinksInterface,
  HexPositionsInterface,
  TechSkillsInterface,
  SkillsInterface,
};
