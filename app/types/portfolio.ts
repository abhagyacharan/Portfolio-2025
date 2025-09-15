// app/types/portfolio.ts
import type { JSX } from "react";

export type SocialLink = {
  label: string;
  href: string;
  icon: JSX.Element;
};

export type ExperienceEntry = {
  role: string;
  company: string;
  period: string;
  summary: string;
};

export type EducationEntry = {
  degree: string;
  institution: string;
  period: string;
  location: string;
};

export type Project = {
  title: string;
  description: string;
  tech: string[];
  link: string;
  live?: string;
};

export type TechStack = Record<string, string[]>;

export type Profile = {
  name: string;
  accentName?: string;
  title: string;
  location: string;
  email: string;
  resumeUrl: string;
};

export type About = {
  summary: string;
  highlights?: string[];
};

export type PortfolioData = {
  profile: Profile;
  about: About;
  experience: ExperienceEntry[];
  education: EducationEntry;
  social: SocialLink[];
  techStack: TechStack;
  projects: Project[];
};
