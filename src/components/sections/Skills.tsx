"use client";

import { motion } from "framer-motion";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaCube,
  FaSitemap,
  FaChartLine,
  FaProjectDiagram,
  FaPuzzlePiece,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiFramer,
  SiPostman,
  SiCplusplus,
} from "react-icons/si";

type Level = "Basics" | "Intermediate" | "Advanced";

const levelStrength: Record<Level, number> = {
  Basics: 2,
  Intermediate: 3,
  Advanced: 4,
};

const skillGroups = [
  {
    title: "Computer Science Foundations",
    description: "Core concepts behind writing efficient, well-structured code.",
    skills: [
      { name: "C++", icon: <SiCplusplus />, level: "Intermediate" as Level },
      { name: "OOP", icon: <FaCube />, level: "Intermediate" as Level },
      { name: "Data Structures", icon: <FaSitemap />, level: "Basics" as Level },
      { name: "Algorithms", icon: <FaChartLine />, level: "Basics" as Level },
      { name: "System Design", icon: <FaProjectDiagram />, level: "Basics" as Level },
      { name: "Problem Solving", icon: <FaPuzzlePiece />, level: "Advanced" as Level },
    ],
  },
  {
    title: "Frontend Development",
    description: "Building modern, scalable and interactive web applications.",
    skills: [
      { name: "React", icon: <FaReact />, level: "Advanced" as Level },
      { name: "Next.js", icon: <SiNextdotjs />, level: "Advanced" as Level },
      { name: "TypeScript", icon: <SiTypescript />, level: "Intermediate" as Level },
      { name: "JavaScript", icon: <FaJs />, level: "Advanced" as Level },
      { name: "HTML5", icon: <FaHtml5 />, level: "Advanced" as Level },
      { name: "CSS3", icon: <FaCss3Alt />, level: "Advanced" as Level },
    ],
  },
  {
    title: "UI Engineering & Tools",
    description: "Crafting premium interfaces and working efficiently with dev tools.",
    skills: [
      { name: "Tailwind", icon: <SiTailwindcss />, level: "Advanced" as Level },
      { name: "Framer Motion", icon: <SiFramer />, level: "Intermediate" as Level },
      { name: "Figma", icon: <FaFigma />, level: "Intermediate" as Level },
      { name: "Git", icon: <FaGitAlt />, level: "Advanced" as Level },
      { name: "GitHub", icon: <FaGithub />, level: "Advanced" as Level },
      { name: "Postman", icon: <SiPostman />, level: "Intermediate" as Level },
    ],
  },
];

function LevelDots({ level }: { level: Level }) {
  const strength = levelStrength[level];

  return (
    <div className="flex items-center gap-2">
      <span className="hidden font-mono text-[10px] uppercase tracking-[1px] text-muted sm:inline">
        {level}
      </span>
      <div className="flex items-center gap-1">
        {Array.from({ length: 4 }).map((_, i) => (
          <span
            key={i}
            className={`h-1.5 w-1.5 rounded-full sm:h-2 sm:w-2 ${
              i < strength ? "bg-foreground" : "bg-foreground/15"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Kicker + Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="mb-3 font-mono text-[11px] uppercase tracking-[2px] text-muted sm:text-xs">
            03 — Skills
          </p>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
            Technologies I Use
          </h2>
          <div className="mt-4 h-[1px] w-16 bg-foreground/20" />
        </motion.div>

        {/* cards */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 md:mt-16 md:grid-cols-3 md:gap-8">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              className="bg-surface p-5 shadow-[0_20px_40px_-28px_rgba(0,0,0,0.5)] transition-all duration-300 hover:-translate-y-1 hover:bg-surface-alt hover:shadow-[0_30px_50px_-20px_rgba(0,0,0,0.6)] sm:p-6 md:p-7"
            >
              <h3 className="mb-3 text-lg font-bold text-foreground sm:text-xl">
                {group.title}
              </h3>

              <p className="mb-6 text-sm leading-6 text-muted sm:mb-8">
                {group.description}
              </p>

              <div className="space-y-3 sm:space-y-4">
                {group.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center justify-between border border-foreground/10 p-3 sm:p-4"
                  >
                    <div className="flex items-center gap-3 sm:gap-4">
                      <span className="text-xl text-foreground/70 sm:text-2xl">
                        {skill.icon}
                      </span>

                      <span className="text-sm font-medium text-foreground sm:text-base">
                        {skill.name}
                      </span>
                    </div>

                    <LevelDots level={skill.level} />
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}