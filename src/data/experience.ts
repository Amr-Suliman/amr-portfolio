import type { Experience } from "@/types/experience";

import { FaCode, FaGraduationCap, FaPalette } from "react-icons/fa";

export const experiences: Experience[] = [
  {
    period: "2025",

    title: "UI/UX Design Trainee",

    company: "NTI - National Telecommunication Institute",

    description:
      "Completed a 120-hour professional UI/UX training program focused on creating user-centered digital experiences and modern interfaces.",

    skills: [
      "UX Research",
      "User Flow",
      "Wireframing",
      "Prototyping",
      "Figma",
      "Design Systems",
    ],

    icon: FaPalette,
  },

  {
    period: "2025",
    title: "Frontend Development Diploma",

    company: "Route Academy",

    description:
      "Completed a Frontend Development diploma focused on building modern web applications and strengthening frontend engineering skills.",

    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React.js",
      "Next.js",
      "TypeScript",
      "APIs",
    ],

    icon: FaGraduationCap,
  },

  {
    period: "2024 - Present",

    title: "Frontend Developer Journey",

    company: "Self Learning & Projects",

    description:
      "Building real-world applications and improving my skills through practical projects, focusing on clean code, responsive design and modern frontend architecture.",

    skills: ["React", "Next.js", "Tailwind CSS", "Git", "Responsive Design"],

    icon: FaCode,
  },
];
