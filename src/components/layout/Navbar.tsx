"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const navLinks = [
  { name: "HOME", href: "/", id: "home" },
  { name: "ABOUT", href: "/#about", id: "about" },
  { name: "SKILLS", href: "/#skills", id: "skills" },
  { name: "SERVICES", href: "/#services", id: "services" },
  { name: "EXPERIENCE", href: "/#experience", id: "experience" },
  { name: "PROJECTS", href: "/#projects", id: "projects" },
  { name: "CONTACT", href: "/#contact", id: "contact" },
];

const socialLinks = [
  { icon: <FaGithub />, href: "https://github.com/Amr-Suliman", label: "GitHub" },
  { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/amr-suleiman", label: "LinkedIn" },
  { icon: <FaWhatsapp />, href: "https://wa.me/201206005983", label: "WhatsApp" },
];

const menuVariants = {
  hidden: { opacity: 0, x: "100%" },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 30,
      when: "beforeChildren",
      staggerChildren: 0.06,
      delayChildren: 0.1,
    } as const,
  },
  exit: {
    opacity: 0,
    x: "100%",
    transition: {
      duration: 0.35,
      ease: [0.4, 0, 0.2, 1],
      when: "afterChildren",
      staggerChildren: 0.03,
      staggerDirection: -1,
    } as const,
  },
};

const linkVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 } as const,
  },
  exit: { opacity: 0, x: 20, transition: { duration: 0.2 } },
};

const iconContainerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.25 },
  },
  exit: {
    transition: { staggerChildren: 0.04, staggerDirection: -1 },
  },
};

const iconVariants = {
  hidden: { opacity: 0, y: 16, scale: 0.85 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 260, damping: 20 } as const,
  },
  exit: { opacity: 0, y: 12, scale: 0.85, transition: { duration: 0.15 } },
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeId, setActiveId] = useState("home");

  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.id).filter((id) => id !== "home");
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        // Section counts as active once it crosses the middle band of the viewport
        rootMargin: "-45% 0px -50% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));

    // fall back to "home" when scrolled to the very top
    const handleScroll = () => {
      if (window.scrollY < 80) setActiveId("home");
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="fixed left-0 top-0 z-50 w-full border-b border-[#e84855]/20 bg-black/70 backdrop-blur-md"
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          {/* Logo */}
          <Link href="/">
            <h1 className="text-2xl font-bold text-white transition duration-300 hover:text-[#e84855]">
              Amr<span className="text-[#e84855]">.dev</span>
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden items-center gap-10 md:flex">
            {navLinks.map((link) => {
              const isActive = activeId === link.id;
              return (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className={`group relative pb-1 transition-colors duration-300 ${
                      isActive ? "text-white" : "text-gray-300 hover:text-white"
                    }`}
                  >
                    {link.name}
                    <span
                      className={`absolute bottom-0 left-0 h-[2px] bg-[#e84855] transition-all duration-300 ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Desktop Social Icons */}
          <div className="hidden items-center gap-5 md:flex">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="text-xl text-gray-300 transition-all duration-300 hover:scale-110 hover:text-[#e84855] hover:drop-shadow-[0_0_8px_rgba(232,72,85,0.8)]"
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button (Hamburger Icon) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-lg border border-[#e84855]/20 bg-black/40 text-white outline-none md:hidden"
            aria-label="Toggle Menu"
          >
            <motion.div
              animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 } as const}
              className="h-[2px] w-6 bg-gray-300"
            />
            <motion.div
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.2 }}
              className="h-[2px] w-6 bg-gray-300"
            />
            <motion.div
              animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 } as const}
              className="h-[2px] w-6 bg-gray-300"
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-30 bg-black/60 backdrop-blur-sm md:hidden"
            />

            <motion.div
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed right-0 top-0 z-40 h-screen w-4/5 max-w-sm border-l border-[#e84855]/20 bg-black/95 p-6 pt-28 shadow-[-10px_0_30px_rgba(0,0,0,0.5)] backdrop-blur-xl md:hidden"
            >
              <ul className="flex flex-col gap-6 pl-4">
                {navLinks.map((link) => {
                  const isActive = activeId === link.id;
                  return (
                    <motion.li key={link.name} variants={linkVariants}>
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className={`text-lg font-medium tracking-wider transition-colors duration-300 ${
                          isActive ? "text-[#e84855]" : "text-gray-300 hover:text-[#e84855]"
                        }`}
                      >
                        {link.name}
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>

              <motion.div
                variants={iconContainerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="absolute bottom-20 left-0 flex w-full justify-center gap-8 border-t border-[#e84855]/15 pt-6"
              >
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    variants={iconVariants}
                    whileHover={{ y: -4, scale: 1.15 }}
                    whileTap={{ scale: 0.9 }}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                    className="text-2xl text-gray-400 transition-colors duration-300 hover:text-[#e84855] hover:drop-shadow-[0_0_8px_rgba(232,72,85,0.8)]"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}