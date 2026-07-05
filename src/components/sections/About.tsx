"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const codeString = `const developer = {

  name: "Amr",

  role: "Frontend Developer",

  stack: [
    "React",
    "Next.js",
    "TypeScript"
  ],

  passion:
    "Building beautiful digital
     experiences"

};`;

function TypedCode({ code }: { code: string }) {
  const ref = useRef<HTMLPreElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    if (!isInView) return;

    let i = 0;
    const interval = setInterval(() => {
      i += 1;
      setDisplayed(code.slice(0, i));
      if (i >= code.length) clearInterval(interval);
    }, 30);

    return () => clearInterval(interval);
  }, [isInView, code]);

  return (
    <pre
      ref={ref}
      className="overflow-x-auto whitespace-pre-wrap break-words text-[11px] leading-6 text-red-300 sm:text-xs sm:leading-7 md:text-sm"
    >
      {displayed}
    </pre>
  );
}

export default function About() {
  const skills = [
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind",
    "Node.js",
    "Git",
    "UI/UX",
    "Responsive Design",
  ];

  return (
    <section
      id="about"
      className="relative min-h-screen overflow-hidden bg-background py-20 md:py-28">
      {/* red glow */}
      <div
        className="absolute left-0 top-1/2 h-[250px] w-[250px] -translate-y-1/2 rounded-full bg-red-600/20 blur-[100px] md:h-[400px] md:w-[400px] md:blur-[150px]"/>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            About Me
          </h2>

          <div className="mx-auto mt-4 h-1 w-16 bg-red-500" />
        </motion.div>

        <div className="mt-14 grid items-center gap-10 md:mt-20 md:grid-cols-2 md:gap-14">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}>
            <p className="text-base leading-7 text-gray-400 sm:text-[17px] sm:leading-8">
              I&apos;m Amr, a Frontend Developer passionate about building
              modern web experiences. I create responsive and interactive
              applications using React, Next.js and TypeScript.
            </p>

            <h3 className="mb-5 mt-8 text-lg font-semibold text-white sm:mt-10 sm:text-xl">
              Skills & Technologies
            </h3>

            <div className="flex flex-wrap gap-2.5 sm:gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="border border-red-500/30 bg-red-500/10 px-3.5 py-1.5 text-xs text-red-300 backdrop-blur transition hover:bg-red-500/20 sm:px-4 sm:py-2 sm:text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* RIGHT CODE CARD */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="border border-red-500/20 bg-black/40 p-5 shadow-[0_0_40px_rgba(192,57,43,0.15)] backdrop-blur-xl sm:p-6 md:p-8"
          >
            <TypedCode code={codeString} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}