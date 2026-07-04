import type { Service } from "@/types/service";

import {
  FaCode,
  FaPalette,
  FaMobileAlt,
} from "react-icons/fa";

export const services: Service[] = [
  {
    title: "Frontend Development",

    description:
      "Building fast, scalable and modern web applications using React, Next.js and TypeScript.",

    icon: FaCode,
  },

  {
    title: "UI / UX Design",

    description:
      "Designing clean, intuitive and user-focused interfaces with attention to detail.",

    icon: FaPalette,
  },

  {
    title: "Responsive Design",

    description:
      "Creating websites that work seamlessly across desktops, tablets and mobile devices.",

    icon: FaMobileAlt,
  },
];