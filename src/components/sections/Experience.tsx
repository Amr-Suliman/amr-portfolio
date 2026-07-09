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
      <span className="inline-flex items-center gap-1.5 border border-[#e84855]/40 bg-[#e84855]/10 px-2.5 py-1 text-[10px] font-medium tracking-wide text-[#e84855] sm:text-[11px]">
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#e84855]" />
        ACTIVE
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1.5 border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] font-medium tracking-wide text-gray-400 sm:text-[11px]">
      <span className="h-1.5 w-1.5 rounded-full bg-gray-500" />
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
        animate={isInView ? { scale: 1, boxShadow: "0 0 25px rgba(232,72,85,0.35)" } : { scale: 0.85, boxShadow: "0 0 0px rgba(232,72,85,0)" }}
        transition={{ duration: 0.5, delay: index * 0.15 + 0.2 }}
        className="absolute -left-[49px] top-8 flex h-10 w-10 items-center justify-center rounded-full border border-[#e84855] bg-[#0d0202] text-[#e84855]"
      >
        {item.icon}
      </motion.div>

      {/* Card */}
      <div className="border border-[#e84855]/20 bg-black/40 p-7 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-[#e84855]/60 hover:shadow-[0_0_35px_rgba(232,72,85,0.25)]">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className="text-sm text-[#e84855]">{item.date}</span>
          <StatusBadge status={item.status} />
        </div>

        <h3 className="mt-3 text-2xl font-bold text-white">{item.title}</h3>
        <p className="text-[#ffb020]/90">{item.company}</p>
        <p className="mt-4 leading-7 text-gray-400">{item.description}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {item.skills.map((skill) => (
            <span
              key={skill}
              className="border border-[#e84855]/30 bg-[#e84855]/10 px-3 py-1 text-xs text-[#e84855]/90"
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
    <section
      id="experience"
      className="relative min-h-screen overflow-hidden bg-[#0d0202] py-28"
    >
      {/* Background Glow */}
      <div className="absolute right-0 top-20 h-[400px] w-[400px] rounded-full bg-[#e84855]/20 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-5xl px-6">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="mb-3 tracking-[4px] text-[#e84855]">MY JOURNEY</p>
          <h2 className="text-5xl font-bold text-white">Experience</h2>
          <div className="mx-auto mt-5 h-1 w-16 bg-[#e84855]" />
        </motion.div>

        {/* Timeline */}
        <div ref={containerRef} className="relative mt-16 space-y-10 pl-8">
          {/* base track */}
          <div className="absolute bottom-0 left-0 top-0 w-[1px] bg-white/10" />

          {/* animated fill that grows with scroll */}
          <motion.div
            style={{ scaleY: progressHeight }}
            className="absolute left-0 top-0 w-[1px] origin-top bg-gradient-to-b from-[#e84855] via-[#e84855] to-[#ffb020]/60"
          />

          {experiences.map((item, index) => (
            <TimelineItem key={item.title} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}