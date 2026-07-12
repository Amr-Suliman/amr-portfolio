"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

type Status = "live" | "in-progress" | "coming-soon";

const projects: {
  title: string;
  description: string;
  image: string;
  url: string;
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
    live: {
      label: "LIVE",
      dot: "bg-accent",
      pulse: true,
      text: "text-accent",
      border: "border-accent/40",
    },
    "in-progress": {
      label: "IN PROGRESS",
      dot: "bg-foreground/60",
      pulse: false,
      text: "text-foreground/80",
      border: "border-foreground/20",
    },
    "coming-soon": {
      label: "COMING SOON",
      dot: "bg-muted",
      pulse: false,
      text: "text-muted",
      border: "border-foreground/10",
    },
  }[status];

  return (
    <span
      className={`inline-flex items-center gap-1.5 border ${config.border} px-2.5 py-1 text-[10px] font-medium tracking-wide ${config.text}`}
    >
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
    <div className="overflow-hidden border-b border-foreground/10">
      {/* top bar */}
      <div className="flex items-center gap-3 bg-background px-4 py-2.5">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        </div>
        <div className="flex-1 truncate rounded-sm border border-foreground/10 px-3 py-1 text-center font-mono text-[10px] text-muted sm:text-[11px]">
          {url}
        </div>
      </div>

      {/* screenshot — full color, this is the real proof of work */}
      <div className="group relative h-48 overflow-hidden sm:h-52">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover object-top transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative min-h-screen bg-background py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Kicker + Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <p className="mb-3 font-mono text-[11px] uppercase tracking-[2px] text-muted sm:text-xs">
            06 — Projects
          </p>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
            My Projects
          </h2>
          <div className="mt-4 h-[1px] w-16 bg-foreground/20" />
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
              className="overflow-hidden bg-surface shadow-[0_20px_40px_-28px_rgba(0,0,0,0.5)] transition-all duration-300 hover:-translate-y-1 hover:bg-surface-alt hover:shadow-[0_30px_50px_-20px_rgba(0,0,0,0.6)]"
            >
              <BrowserFrame url={project.url} image={project.image} title={project.title} />

              {/* CONTENT */}
              <div className="p-6">
                <div className="mb-3 flex items-center justify-between gap-3">
                  <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
                  <StatusBadge status={project.status} />
                </div>

                <p className="mb-5 text-sm leading-6 text-muted">{project.description}</p>

                {/* TAGS */}
                <div className="mb-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="border border-foreground/15 px-3 py-1 text-xs text-foreground/70"
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
                    className={`flex items-center gap-2 border border-foreground/25 px-4 py-2 text-sm text-foreground transition-colors duration-200 hover:bg-foreground hover:text-background ${
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
                    className={`flex items-center gap-2 border border-foreground/10 px-4 py-2 text-sm text-muted transition-colors duration-200 hover:border-foreground/40 hover:text-foreground ${
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