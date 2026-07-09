"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

type Status = "live" | "in-progress" | "coming-soon";

const projects: {
  title: string;
  description: string;
  image: string;
  url: string; // displayed in the browser address bar
  tags: string[];
  demo: string;
  github: string;
  status: Status;
}[] = [
  {
    title: "Vendora",
    description:
      "A complete e-commerce platform with product catalog, shopping cart and an admin dashboard for managing store data.",
    image: "/images/projects/vendora.png",
    url: "vendora-store.vercel.app",
    tags: ["Next.js", "React", "Tailwind", "TypeScript"],
    demo: "https://vendora-store.vercel.app",
    github: "https://github.com/Amr-Suliman/vendora",
    status: "live",
  },
  {
    title: "LinkedPost",
    description:
      "A social media platform where users can create posts, interact with others and manage their profiles in real time.",
    image: "/images/projects/linked-posts.png",
    url: "linkedpost.dev",
    tags: ["React", "Vite", "HeroUI", "Axios"],
    demo: "#",
    github: "https://github.com/Amr-Suliman/linkedpost",
    status: "in-progress",
  },
  {
    title: "Next Project",
    description:
      "Something new is in the works — check back soon for the details.",
    image: "/images/projects/dashboard.png",
    url: "coming-soon",
    tags: ["TBA"],
    demo: "#",
    github: "#",
    status: "coming-soon",
  },
];

function StatusBadge({ status }: { status: Status }) {
  const config = {
    live: { label: "LIVE", dot: "bg-[#e84855]", pulse: true, text: "text-[#e84855]", border: "border-[#e84855]/40", bg: "bg-[#e84855]/10" },
    "in-progress": { label: "IN PROGRESS", dot: "bg-[#ffb020]", pulse: false, text: "text-[#ffb020]", border: "border-[#ffb020]/30", bg: "bg-[#ffb020]/10" },
    "coming-soon": { label: "COMING SOON", dot: "bg-gray-500", pulse: false, text: "text-gray-400", border: "border-white/10", bg: "bg-white/5" },
  }[status];

  return (
    <span className={`inline-flex items-center gap-1.5 border ${config.border} ${config.bg} px-2.5 py-1 text-[10px] font-medium tracking-wide ${config.text}`}>
      <span className={`h-1.5 w-1.5 rounded-full ${config.dot} ${config.pulse ? "animate-pulse" : ""}`} />
      {config.label}
    </span>
  );
}

/** Fake browser chrome wrapping the project screenshot */
function BrowserFrame({
  url,
  image,
  title,
}: {
  url: string;
  image: string;
  title: string;
}) {
  return (
    <div className="overflow-hidden border-b border-white/5">
      {/* top bar */}
      <div className="flex items-center gap-3 bg-[#0a0101] px-4 py-2.5">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#e84855]/60" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#ffb020]/60" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
        </div>
        <div className="flex-1 truncate rounded-sm bg-white/5 px-3 py-1 text-center font-mono text-[10px] text-gray-500 sm:text-[11px]">
          {url}
        </div>
      </div>

      {/* screenshot */}
      <div className="group relative h-48 overflow-hidden sm:h-52">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover object-top transition duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative min-h-screen overflow-hidden bg-[#0d0202] py-28"
    >
      {/* background glow */}
      <div className="absolute right-0 top-20 h-[400px] w-[400px] rounded-full bg-[#e84855]/20 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="mb-3 tracking-[4px] text-[#e84855]">FEATURED WORK</p>
          <h2 className="text-5xl font-bold text-white">My Projects</h2>
          <div className="mx-auto mt-4 h-1 w-16 bg-[#e84855]" />
        </motion.div>

        {/* CARDS */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group overflow-hidden border border-[#e84855]/20 bg-black/40 backdrop-blur-xl transition-all duration-300 hover:-translate-y-3 hover:border-[#e84855]/60 hover:shadow-[0_0_35px_rgba(232,72,85,0.25)]"
            >
              <BrowserFrame url={project.url} image={project.image} title={project.title} />

              {/* CONTENT */}
              <div className="p-6">
                <div className="mb-3 flex items-center justify-between gap-3">
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  <StatusBadge status={project.status} />
                </div>

                <p className="mb-5 text-sm leading-6 text-gray-400">
                  {project.description}
                </p>

                {/* TAGS */}
                <div className="mb-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="border border-[#e84855]/30 bg-[#e84855]/10 px-3 py-1 text-xs text-[#e84855]/90"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* BUTTONS */}
                <div className="flex gap-3">
                  <a
                    href={project.demo}
                    target={project.demo !== "#" ? "_blank" : undefined}
                    rel="noreferrer"
                    aria-disabled={project.demo === "#"}
                    className={`flex items-center gap-2 border border-[#e84855]/50 px-4 py-2 text-sm text-[#e84855] transition hover:bg-[#e84855] hover:text-white ${
                      project.demo === "#" ? "pointer-events-none opacity-40" : ""
                    }`}
                  >
                    Live Demo
                    <FaExternalLinkAlt size={12} />
                  </a>

                  <a
                    href={project.github}
                    target={project.github !== "#" ? "_blank" : undefined}
                    rel="noreferrer"
                    aria-disabled={project.github === "#"}
                    className={`flex items-center gap-2 border border-white/10 px-4 py-2 text-sm text-gray-300 transition hover:border-white/40 hover:text-white ${
                      project.github === "#" ? "pointer-events-none opacity-40" : ""
                    }`}
                  >
                    GitHub
                    <FaGithub />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}