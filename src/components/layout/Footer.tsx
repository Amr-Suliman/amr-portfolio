"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { HiArrowUp } from "react-icons/hi";

const quickLinks = [
  { name: "HOME", href: "/" },
  { name: "ABOUT", href: "/#about" },
  { name: "PROJECTS", href: "/#projects" },
  { name: "CONTACT", href: "/#contact" },
];

const socialLinks = [
  { icon: <FaGithub />, href: "https://github.com/Amr-Suliman" },
  { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/amr-suleiman" },
  { icon: <FaWhatsapp />, href: "https://wa.me/201206005983" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-[#e84855]/20 bg-black/70 backdrop-blur-md">
      {/* Glow */}
      <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-[#e84855]/10 blur-[120px]" />

      <div className="relative mx-auto flex max-w-7xl flex-col gap-10 px-6 py-12">
        <div className="flex flex-col justify-between gap-10 md:flex-row">
          {/* Left */}
          <div>
            <h2 className="text-3xl font-bold text-white">
              Amr<span className="text-[#e84855]">.dev</span>
            </h2>

            <p className="mt-4 max-w-sm leading-7 text-gray-400">
              Frontend Developer building modern, performant and interactive web
              applications with React, Next.js and TypeScript.
            </p>

            <p className="mt-4 font-mono text-xs text-gray-600">
              Built with Next.js · TypeScript · Framer Motion
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="mb-5 font-semibold text-white">Quick Links</h3>

            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 transition hover:text-[#e84855]"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="mb-5 font-semibold text-white">Connect</h3>

            <div className="flex gap-5">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  whileHover={{ y: -4, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl text-gray-400 transition hover:text-[#e84855] hover:drop-shadow-[0_0_10px_rgba(232,72,85,0.8)]"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-5 border-t border-[#e84855]/10 pt-6 md:flex-row">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Amr ElGohary. All rights reserved.
          </p>

          <motion.button
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 border border-[#e84855]/20 px-5 py-2 text-gray-300 transition hover:border-[#e84855] hover:text-[#e84855]"
          >
            Back to Top
            <HiArrowUp />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}