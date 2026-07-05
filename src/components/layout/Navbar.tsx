"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const navLinks = [
  { name: "HOME", href: "/" },
  { name: "ABOUT", href: "/#about" },
  { name: "SKILLS", href: "/#skills" },
  { name: "SERVICES", href: "/#services" },
  { name: "PROJECTS", href: "/projects" },
  { name: "EXPERIENCE", href: "/#experience" },
  { name: "CONTACT", href: "/#contact" },
];

const socialLinks = [
  {
    icon: <FaGithub />,
    href: "https://github.com/Amr-Suliman",
    label: "GitHub",
  },
  {
    icon: <FaLinkedin />,
    href: "https://www.linkedin.com/in/amr-suleiman",
    label: "LinkedIn",
  },
  {
    icon: <FaWhatsapp />,
    href: "https://wa.me/201206005983",
    label: "WhatsApp",
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // أنيميشن القائمة الجانبية كاملة
  const menuVariants = {
    hidden: { x: "100%", opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        staggerChildren: 0.08, // بيخلي العناصر تظهر ورا بعضها بشكل فخم
        delayChildren: 0.2,
      },
    },
    exit: {
      x: "100%",
      opacity: 0,
      transition: { type: "tween", ease: "easeInOut", duration: 0.3 },
    },
  };

  // أنيميشن خاص بكل لينك والـ Icons عشان تطلع حركة توب
  const itemVariants = {
    hidden: { x: 30, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 120 } },
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="fixed left-0 top-0 z-50 w-full border-b border-red-900/30 bg-black/70 backdrop-blur-md"
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          {/* Logo */}
          <Link href="/">
            <h1 className="text-2xl font-bold text-white transition duration-300 hover:text-red-500">
              AMR<span className="text-red-500">.dev</span>
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden items-center gap-10 md:flex">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="group relative pb-1 text-gray-300 transition-colors duration-300 hover:text-white"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-red-500 transition-all duration-300 group-hover:w-full" />
                </Link>
              </li>
            ))}
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
                className="text-xl text-gray-300 transition-all duration-300 hover:scale-110 hover:text-red-500 hover:drop-shadow-[0_0_8px_rgba(239,68,68,0.8)]"
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-lg border border-red-500/20 bg-black/40 text-white outline-none md:hidden"
            aria-label="Toggle Menu"
          >
            <motion.div
              animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
              className="h-[2px] w-6 bg-gray-300"
            />
            <motion.div
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.2 }}
              className="h-[2px] w-6 bg-gray-300"
            />
            <motion.div
              animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
              className="h-[2px] w-6 bg-gray-300"
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed right-0 top-0 z-40 flex h-screen w-4/5 max-w-sm flex-col justify-between border-l border-red-950/50 bg-black/95 p-8 pt-28 backdrop-blur-xl md:hidden shadow-[-15px_0_40px_rgba(0,0,0,0.6)]"
          >
            {/* Nav Links */}
            <ul className="flex flex-col gap-7 pl-2">
              {navLinks.map((link) => (
                <motion.li key={link.name} variants={itemVariants}>
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-xl font-semibold tracking-wider text-gray-300 transition-colors duration-300 hover:text-red-500 active:text-red-400"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>

            {/* Social Icons - تم رفعها وتغيير الاستايل بالكامل */}
            <motion.div 
              variants={itemVariants}
              className="mb-12 flex flex-col gap-4 border-t border-red-900/20 pt-6"
            >
              <p className="text-xs font-medium tracking-widest text-gray-500 pl-2">FOLLOW ME</p>
              <div className="flex gap-5 pl-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                    className="flex h-12 w-12 items-center justify-center rounded-xl border border-red-500/20 bg-red-500/5 text-2xl text-gray-300 transition-all duration-300 hover:border-red-500 hover:text-red-500 hover:drop-shadow-[0_0_10px_rgba(239,68,68,0.6)]"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}