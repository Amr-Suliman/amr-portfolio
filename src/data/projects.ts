import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "ecommerce-platform",

    title: "E-Commerce Platform",

    description:
      "A modern e-commerce platform built with React, Next.js and TypeScript featuring authentication, product management and responsive design.",

    image: "/images/projects/ecommerce.png",

    stack: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "JSON Server",
    ],

    github: "https://github.com/Amr-Suliman",

    live: "#",

    featured: true,

    completed: "2025",

    category: "Web Application",
  },

  {
    slug: "linked-posts",

    title: "Linked Posts",

    description:
      "A social media application with authentication, posts, comments and user profiles.",

    image: "/images/projects/linked-posts.png",

    stack: [
      "React",
      "API",
      "TypeScript",
      "Tailwind CSS",
    ],

    github: "https://github.com/Amr-Suliman",

    live: "#",

    featured: true,

    completed: "2025",

    category: "Social App",
  },

  {
    slug: "dashboard",

    title: "Dashboard",

    description:
      "Modern analytics dashboard with charts, authentication and reusable UI components.",

    image: "/images/projects/dashboard.png",

    stack: [
      "Next.js",
      "Framer Motion",
      "Tailwind CSS",
    ],

    github: "https://github.com/Amr-Suliman",

    live: "#",

    featured: false,

    completed: "2025",

    category: "Dashboard",
  },
];