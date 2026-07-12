"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const roles = [
  "Frontend Developer",
  "React Specialist",
  "UI/UX Enthusiast",
  "Problem Solver",
  "Clean Code Advocate",
];


const socials = [
  { href: "https://www.linkedin.com/in/amr-suleiman", icon: <FaLinkedin />, label: "LinkedIn" },
  { href: "mailto:amrelgohary573@gmail.com", icon: <MdEmail />, label: "Email" },
  { href: "https://wa.me/201206005983", icon: <FaWhatsapp />, label: "WhatsApp" },
  { href: "https://github.com/Amr-Suliman", icon: <FaGithub />, label: "GitHub" },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

function RoleCrossfade() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % roles.length), 2400);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="relative inline-block min-h-[1.3em] min-w-[280px] align-bottom sm:min-w-[360px]">
      <AnimatePresence mode="wait">
        <motion.span
          key={roles[index]}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="absolute left-0 top-0 whitespace-nowrap italic"
        >
          {roles[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center bg-background pt-28 md:pt-24">
      <div className="mx-auto w-full max-w-[1250px] px-5 py-10 sm:px-8 md:px-12 md:py-16">
        {/* Kicker row — masthead metadata */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-10 flex items-center justify-between border-b border-foreground/10 pb-4 font-mono text-[11px] uppercase tracking-[2px] text-muted sm:text-xs md:mb-16"
        >
          <span>Portfolio — Cairo, Egypt</span>
          <span className="hidden items-center gap-2 sm:flex">
            <span className="h-1.5 w-1.5 rounded-full bg-foreground" />
            Available for work
          </span>
        </motion.div>

        <div className="grid grid-cols-1 gap-14 md:grid-cols-[1.4fr_1fr] md:gap-10">
          {/* LEFT — masthead */}
          <motion.div variants={containerVariants} initial="hidden" animate="visible">
            <motion.p variants={itemVariants} className="mb-3 text-base text-muted sm:text-lg">
              Hello, I&apos;m
            </motion.p>

            <motion.h1
              variants={itemVariants}
              className="text-[42px] font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl"
            >
              <span className="text-foreground">Amr </span>
              <span className="italic text-foreground">ElGohary</span>
            </motion.h1>

            <motion.p variants={itemVariants} className="mt-4 text-xl text-muted sm:text-2xl">
              <RoleCrossfade />
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="mt-6 max-w-md text-sm leading-relaxed text-muted sm:text-base"
            >
              Building modern web experiences with React, Next.js and
              TypeScript — clean code, considered interfaces, and
              interactions that feel intentional.
            </motion.p>

           {/* CTA */}
{/* CTA */}
<motion.div variants={itemVariants} className="mt-9 flex flex-row gap-4">
  <a
    href="/resume/Amr-ElGohary-CV.pdf"
    download
    className="inline-flex h-12 flex-1 items-center justify-center whitespace-nowrap bg-accent px-6 text-sm font-semibold text-foreground transition-colors duration-200 hover:bg-accent-hover sm:h-14 sm:min-w-[220px] sm:flex-none sm:px-12 sm:text-base"
  >
    Download CV
  </a>

  <a
    href="#projects"
    className="inline-flex h-12 flex-1 items-center justify-center whitespace-nowrap border border-foreground/20 px-6 text-sm font-semibold text-foreground transition-colors duration-200 hover:border-accent hover:text-accent sm:h-14 sm:min-w-[180px] sm:flex-none sm:px-10 sm:text-base"
  >
    View Projects
  </a>
</motion.div>

        {/* Socials */}
        <motion.div variants={itemVariants} className="mt-9 flex gap-5 sm:mt-11">
          {socials.map(({ href, icon, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              aria-label={label}
              className="text-lg text-muted transition-colors duration-200 hover:text-foreground"
            >
              {icon}
            </a>
          ))}
        </motion.div>
      </motion.div>

      {/* RIGHT — single unified spec-sheet object */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="md:items-start"
      >
        <div className="w-full max-w-[320px] border border-foreground/15">
          {/* photo */}
          <div className="relative aspect-[4/5] w-full overflow-hidden">
            <Image
              src="/images/profile/amr.jpg"
              alt="Amr ElGohary"
              fill
              className="object-cover grayscale"
              priority
            />
          </div>

          {/* caption + stack, same object as the photo */}
          <div className="border-t border-foreground/10 p-4">
            <p className="mb-3 font-mono text-[10px] uppercase tracking-[1.5px] text-muted">
              Amr — Frontend Developer
            </p>

          </div>
        </div>
      </motion.div>
    </div>
      </div >

    {/* Scroll indicator */ }
    <motion.div
  className = "absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 sm:flex"
  animate = {{ opacity: [1, 0.4, 1] }
}
transition = {{ duration: 2.4, repeat: Infinity }}
      >
        <span className="font-mono text-[10px] uppercase tracking-[3px] text-muted">Scroll</span>
        <div className="h-8 w-[1px] bg-foreground/20" />
      </motion.div >
    </section >
  );
}