import type { IconType } from "react-icons";

export interface Experience {
  period: string;

  title: string;

  company: string;

  description: string;

  skills: string[];

  icon: IconType;
}