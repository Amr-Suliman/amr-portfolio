"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";

const navLinks = [
  { name: "HOME", href: "/" },
  { name: "ABOUT", href: "/#about" },
  { name: "SKILLS", href: "/#skills" },
  { name: "sERVICES", href: "/#services" },
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
  return (
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
            Amr<span className="text-red-500">.dev</span>
          </h1>
        </Link>

        {/* Navigation */}
        <ul className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="
                  group
                  relative
                  pb-1
                  text-gray-300
                  transition-colors
                  duration-300
                  hover:text-white
                "
              >
                {link.name}

                <span
                  className="
                    absolute
                    bottom-0
                    left-0
                    h-[2px]
                    w-0
                    bg-red-500
                    transition-all
                    duration-300
                    group-hover:w-full
                  "
                />
              </Link>
            </li>
          ))}
        </ul>

        {/* Social Icons */}
        <div className="hidden items-center gap-5 md:flex">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="
                text-xl
                text-gray-300
                transition-all
                duration-300
                hover:scale-110
                hover:text-red-500
                hover:drop-shadow-[0_0_8px_rgba(239,68,68,0.8)]
              "
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}