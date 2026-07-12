"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useInView } from "framer-motion";
import { FaGraduationCap, FaPalette, FaCode } from "react-icons/fa";

const experiences = [
  {
    date: "2025",
    title: "UI/UX Design Trainee",
    company: "NTI - National Telecommunication Institute",
    icon: <FaPalette />,
    status: "completed" as const,
    description:
      "Completed a 120-hour professional UI/UX training program focused on creating user-centered digital experiences and modern interfaces.",
    skills: ["UX Research", "User Flow", "Wireframing", "Prototyping", "Figma", "Design Systems"],
  },
  {
    date: "2025",
    title: "Frontend Development Diploma",
    company: "Route Academy",
    icon: <FaGraduationCap />,
    status: "completed" as const,
    description:
      "Completed a Frontend Development diploma focused on building modern web applications and strengthening frontend engineering skills.",
    skills: ["HTML", "CSS", "JavaScript", "React.js", "Next.js", "TypeScript", "APIs"],
  },
  {
    date: "2024 — Present",
    title: "Frontend Developer Journey",
    company: "Self Learning & Projects",
    icon: <FaCode />,
    status: "active" as const,
    description:
      "Building real-world applications and improving my skills through practical projects, focusing on clean code, responsive design and modern frontend architecture.",
    skills: ["React", "Next.js", "Tailwind", "Git", "Responsive Design"],
  },
];

function StatusBadge({ status }: { status: "completed" | "active" }) {
  if (status === "active") {
    return (
      <span className="inline-flex items-center gap-1.5 border border-accent/40 px-2.5 py-1 text-[10px] font-medium tracking-wide text-accent sm:text-[11px]">
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
        ACTIVE
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1.5 border border-foreground/10 px-2.5 py-1 text-[10px] font-medium tracking-wide text-muted sm:text-[11px]">
      <span className="h-1.5 w-1.5 rounded-full bg-muted" />
      COMPLETED
    </span>
  );
}

function TimelineItem({
  item,
  index,
}: {
  item: (typeof experiences)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      viewport={{ once: true }}
      className="relative"
    >
      {/* Icon node */}
      <motion.div
        animate={isInView ? { scale: 1 } : { scale: 0.85 }}
        transition={{ duration: 0.5, delay: index * 0.15 + 0.2 }}
        className="absolute -left-[49px] top-8 flex h-10 w-10 items-center justify-center border border-foreground bg-background text-foreground"
      >
        {item.icon}
      </motion.div>

      {/* Card */}
      <div className="bg-surface p-7 shadow-[0_20px_40px_-28px_rgba(0,0,0,0.5)] transition-all duration-300 hover:-translate-y-1 hover:bg-surface-alt hover:shadow-[0_30px_50px_-20px_rgba(0,0,0,0.6)]">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className="text-sm text-foreground">{item.date}</span>
          <StatusBadge status={item.status} />
        </div>

        <h3 className="mt-3 text-2xl font-bold text-foreground">{item.title}</h3>
        <p className="text-muted">{item.company}</p>
        <p className="mt-4 leading-7 text-muted">{item.description}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {item.skills.map((skill) => (
            <span
              key={skill}
              className="border border-foreground/15 px-3 py-1 text-xs text-foreground/80"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.4"],
  });

  const progressHeight = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 20,
    restDelta: 0.001,
  });

  return (
    <section id="experience" className="relative min-h-screen bg-background py-28">
      <div className="mx-auto max-w-5xl px-6">
        {/* Kicker + Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <p className="mb-3 font-mono text-[11px] uppercase tracking-[2px] text-muted sm:text-xs">
            05 — Experience
          </p>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
            Experience
          </h2>
          <div className="mt-4 h-[1px] w-16 bg-foreground/20" />
        </motion.div>

        {/* Timeline */}
        <div ref={containerRef} className="relative mt-16 space-y-10 pl-8">
          {/* base track */}
          <div className="absolute bottom-0 left-0 top-0 w-[1px] bg-foreground/10" />

          {/* animated fill that grows with scroll */}
          <motion.div
            style={{ scaleY: progressHeight }}
            className="absolute left-0 top-0 w-[1px] origin-top bg-foreground"
          />

          {experiences.map((item, index) => (
            <TimelineItem key={item.title} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}