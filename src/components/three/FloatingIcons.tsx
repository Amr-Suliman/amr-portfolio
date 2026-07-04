"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const icons = [
  {
    src: "/icons/react.svg",
    size: 62,
    top: "6%",
    left: "45%",
    duration: 7,
    rotate: 360,
  },

  {
    src: "/icons/nextjs.svg",
    size: 58,
    top: "22%",
    right: "8%",
    duration: 8,
    rotate: -360,
  },

  {
    src: "/icons/typescript.svg",
    size: 55,
    top: "62%",
    right: "0%",
    duration: 6,
    rotate: 360,
  },

  {
    src: "/icons/javascript.svg",
    size: 58,
    bottom: "8%",
    right: "22%",
    duration: 7,
    rotate: -360,
  },

  {
    src: "/icons/html.svg",
    size: 55,
    bottom: "12%",
    left: "18%",
    duration: 8,
    rotate: 360,
  },

  {
    src: "/icons/css.svg",
    size: 56,
    top: "52%",
    left: "-2%",
    duration: 7,
    rotate: -360,
  },

  {
    src: "/icons/tailwindcss.svg",
    size: 60,
    top: "18%",
    left: "5%",
    duration: 9,
    rotate: 360,
  },

  {
    src: "/icons/github.svg",
    size: 50,
    top: "72%",
    left: "42%",
    duration: 5,
    rotate: -360,
  },

  {
    src: "/icons/git.svg",
    size: 52,
    top: "42%",
    right: "-3%",
    duration: 6,
    rotate: 360,
  },

  {
    src: "/icons/figma.svg",
    size: 52,
    top: "-2%",
    left: "26%",
    duration: 7,
    rotate: -360,
  },
];

export default function FloatingIcons() {
  return (
    <div className="pointer-events-none absolute inset-0">
      {icons.map((icon, index) => (
        <motion.div
          key={index}
          style={{
            top: icon.top,
            bottom: icon.bottom,
            left: icon.left,
            right: icon.right,
          }}
          className="absolute"
          animate={{
            y: [0, -18, 0, 18, 0],

            x: [0, 8, 0, -8, 0],

            rotate: [0, icon.rotate],

            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: icon.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div
            className="
              rounded-full
              bg-white/5
              backdrop-blur-md
              border
              border-white/10
              p-3
              shadow-[0_0_35px_rgba(255,255,255,.08)]
            "
          >
            <Image
              src={icon.src}
              alt=""
              width={icon.size}
              height={icon.size}
              draggable={false}
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
}