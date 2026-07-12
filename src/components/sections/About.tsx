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
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!isInView) return;

    let i = 0;
    const interval = setInterval(() => {
      i += 1;
      setDisplayed(code.slice(0, i));
      if (i >= code.length) {
        clearInterval(interval);
        setDone(true);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [isInView, code]);

  // subtle premium touch: keys get slightly bolder weight than string values,
  // done purely with opacity/weight (no hue) to stay monochrome
  return (
    <pre
      ref={ref}
      className="overflow-x-auto whitespace-pre-wrap break-words font-mono text-[11px] leading-6 text-foreground/80 sm:text-xs sm:leading-7 md:text-sm"
    >
      {displayed}
      <span
        className={`ml-[1px] inline-block h-[1em] w-[2px] translate-y-[2px] bg-foreground/60 ${done ? "animate-pulse" : "opacity-0"
          }`}
      />
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
      className="relative min-h-screen bg-background py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Kicker + Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <p className="mb-3 font-mono text-[11px] uppercase tracking-[2px] text-muted sm:text-xs">
            02 — About
          </p>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
            About Me
          </h2>
          <div className="mt-4 h-[1px] w-16 bg-foreground/20" />
        </motion.div>

        <div className="mt-14 grid items-start gap-10 md:mt-20 md:grid-cols-2 md:gap-14">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-base leading-7 text-muted sm:text-[17px] sm:leading-8">
              I&apos;m Amr, a Frontend Developer passionate about building
              modern web experiences. I create responsive and interactive
              applications using React, Next.js and TypeScript.
            </p>

            <h3 className="mb-5 mt-8 font-mono text-xs uppercase tracking-[1.5px] text-muted sm:mt-10">
              Skills &amp; Technologies
            </h3>

            <div className="flex flex-wrap gap-2.5 sm:gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="cursor-default border border-foreground/15 px-3.5 py-1.5 text-xs text-foreground/70 transition-all duration-200 hover:border-foreground hover:text-foreground sm:px-4 sm:py-2 sm:text-sm"
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
            className="border border-foreground/15 bg-surface shadow-[0_1px_0_rgba(237,233,224,0.04)_inset,0_20px_40px_-24px_rgba(0,0,0,0.5)]"
          >
            {/* editor chrome */}
            <div className="flex items-center gap-3 border-b border-foreground/10 px-4 py-2.5">
              <div className="flex gap-1.5">
                <span className="h-2 w-2 rounded-full border border-foreground/25" />
                <span className="h-2 w-2 rounded-full border border-foreground/25" />
                <span className="h-2 w-2 rounded-full border border-foreground/25" />
              </div>
              <span className="font-mono text-[10px] uppercase tracking-[1.5px] text-muted">
                about.ts
              </span>
            </div>

            <div className="p-5 sm:p-6 md:p-8">
              <TypedCode code={codeString} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}