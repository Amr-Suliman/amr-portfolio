"use client";

import { motion } from "framer-motion";
import { FaCode, FaPaintBrush, FaMobileAlt, FaRocket } from "react-icons/fa";

const secondaryServices = [
  {
    tag: "<UI />",
    icon: <FaPaintBrush />,
    title: "UI Implementation",
    description:
      "Transforming Figma designs into pixel-perfect, animated interfaces.",
    features: ["Figma → Code", "Design Systems", "Micro-interactions"],
  },
  {
    tag: "<Responsive />",
    icon: <FaMobileAlt />,
    title: "Responsive Experiences",
    description:
      "Interfaces that hold up perfectly across every screen size.",
    features: ["Mobile First", "Cross Browser", "Accessibility"],
  },
  {
    tag: "<Performance />",
    icon: <FaRocket />,
    title: "Performance & Optimization",
    description:
      "Faster loads, leaner bundles, smoother rendering — measured, not guessed.",
    features: ["Core Web Vitals", "Code Splitting", "Best Practices"],
  },
];

export default function Services() {
  return (
    <section id="services" className="relative bg-background py-20 md:py-28">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        {/* Kicker + Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <p className="mb-3 font-mono text-[11px] uppercase tracking-[2px] text-muted sm:text-xs">
            04 — Services
          </p>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
            My Services
          </h2>
          <div className="mt-4 h-[1px] w-16 bg-foreground/20" />
        </motion.div>

        {/* Featured card - Frontend Development */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative mt-14 bg-surface shadow-[0_20px_40px_-28px_rgba(0,0,0,0.5)] transition-all duration-300 hover:-translate-y-1 hover:bg-surface-alt hover:shadow-[0_30px_50px_-20px_rgba(0,0,0,0.6)] md:mt-16"
        >
          <div className="grid gap-8 p-6 sm:p-8 md:grid-cols-2 md:p-10">
            {/* left: content */}
            <div className="flex flex-col justify-center">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center border border-foreground/15 text-2xl text-foreground/80">
                  <FaCode />
                </div>
                <span className="font-mono text-xs text-muted">
                  &lt;Frontend /&gt;
                </span>
              </div>

              <h3 className="mb-3 text-2xl font-bold text-foreground sm:text-[26px]">
                Frontend Development
              </h3>

              <p className="max-w-md text-sm leading-7 text-muted sm:text-[15px]">
                Building modern, scalable web applications using React,
                Next.js and TypeScript — with clean, maintainable code that
                reads as well as it runs.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {["React & Next.js", "Reusable Components", "API Integration", "Modern Architecture"].map(
                  (f) => (
                    <span
                      key={f}
                      className="cursor-default border border-foreground/15 px-3 py-1 font-mono text-[11px] text-foreground/70"
                    >
                      {f}
                    </span>
                  )
                )}
              </div>
            </div>

            {/* right: static code badge, monochrome */}
            <div className="relative flex items-center border border-foreground/10 p-5 font-mono text-[12px] leading-6 sm:text-[13px]">
              <div className="w-full">
                <div className="mb-2 flex gap-1.5">
                  <span className="h-2 w-2 rounded-full border border-foreground/25" />
                  <span className="h-2 w-2 rounded-full border border-foreground/25" />
                  <span className="h-2 w-2 rounded-full border border-foreground/25" />
                </div>
                <div className="text-foreground/60">
                  <span className="text-foreground/80">export</span>{" "}
                  <span className="text-foreground/80">default</span>{" "}
                  <span className="text-muted">function</span>{" "}
                  <span className="text-foreground/80">Component</span>
                  <span className="text-muted">() {"{"}</span>
                </div>
                <div className="pl-4 text-muted">
                  <span className="text-foreground/70">return</span> ...
                </div>
                <div className="text-muted">{"}"}</div>
                <span className="mt-1 inline-block h-3.5 w-[6px] animate-pulse bg-foreground/40 align-middle" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Secondary services */}
        <div className="mt-6 grid gap-6 sm:grid-cols-3 md:mt-8">
          {secondaryServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              viewport={{ once: true }}
              className="bg-surface p-6 shadow-[0_20px_40px_-28px_rgba(0,0,0,0.5)] transition-all duration-300 hover:-translate-y-1 hover:bg-surface-alt hover:shadow-[0_30px_50px_-20px_rgba(0,0,0,0.6)]"
            >
              <div className="mb-4 flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center border border-foreground/15 text-xl text-foreground/70">
                  {service.icon}
                </div>
                <span className="font-mono text-[11px] text-muted">
                  {service.tag}
                </span>
              </div>

              <h3 className="mb-2 text-lg font-bold text-foreground">
                {service.title}
              </h3>

              <p className="text-sm leading-6 text-muted">
                {service.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-1.5">
                {service.features.map((feature) => (
                  <span
                    key={feature}
                    className="border border-foreground/10 px-2.5 py-1 font-mono text-[10px] text-muted"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}