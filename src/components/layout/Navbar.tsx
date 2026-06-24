"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaGithub, FaInstagram, FaFacebook } from "react-icons/fa";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/#about" },
  { name: "Skills", href: "/skills" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Experience", href: "/experience" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 z-50 w-full border-b border-red-900/30 bg-black/70 backdrop-blur-md"
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link href="/">
          <h1 className="text-2xl font-bold text-white">
            Amr<span className="text-red-500">.dev</span>
          </h1>
        </Link>

        <ul className="hidden gap-10 md:flex">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="relative text-gray-300 transition hover:text-red-500"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-5 text-xl text-gray-300 md:flex">
          <FaGithub className="cursor-pointer hover:text-red-500" />
          <FaInstagram className="cursor-pointer hover:text-red-500" />
          <FaFacebook className="cursor-pointer hover:text-red-500" />
        </div>
      </div>
    </motion.nav>
  );
}