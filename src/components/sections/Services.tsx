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

const codeLines = [
  { indent: 0, content: [{ t: "function ", c: "kw" }, { t: "Hero", c: "fn" }, { t: "() {", c: "p" }] },
  { indent: 1, content: [{ t: "return (", c: "p" }] },
  { indent: 2, content: [{ t: "<", c: "tag" }, { t: "motion.div", c: "tag" } ] },
  { indent: 3, content: [{ t: "initial", c: "prop" }, { t: "={{ ", c: "p" }, { t: "opacity: 0", c: "str" }, { t: " }}", c: "p" }] },
  { indent: 3, content: [{ t: "animate", c: "prop" }, { t: "={{ ", c: "p" }, { t: "opacity: 1", c: "str" }, { t: " }}", c: "p" }] },
  { indent: 2, content: [{ t: "/>", c: "tag" }] },
  { indent: 1, content: [{ t: ");", c: "p" }] },
  { indent: 0, content: [{ t: "}", c: "p" }] },
];

const codeColor: Record<string, string> = {
  kw: "text-[#e84855]",
  fn: "text-[#ffb020]",
  tag: "text-[#e84855]",
  prop: "text-[#ffb020]/90",
  str: "text-gray-300",
  p: "text-gray-500",
};

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#0d0202] py-20 md:py-28"
    >
      {/* ambient glow */}
      <div className="absolute left-1/2 top-0 h-[280px] w-[280px] -translate-x-1/2 rounded-full bg-[#e84855]/20 blur-[110px] md:h-[450px] md:w-[450px] md:blur-[160px]" />

      {/* watermark open tag */}
      <span className="pointer-events-none absolute left-4 top-6 select-none font-mono text-[13px] tracking-wide text-white/[0.06] sm:left-8 sm:text-[15px] md:text-[17px]">
        &lt;Services&gt;
      </span>

      {/* gutter line numbers - desktop only */}
      <div className="pointer-events-none absolute left-6 top-40 hidden select-none flex-col gap-8 font-mono text-[11px] text-white/10 lg:flex">
        {["01", "02", "03", "04"].map((n) => (
          <span key={n}>{n}</span>
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="mb-3 font-mono text-xs tracking-[4px] text-[#e84855] sm:text-sm">
            // WHAT-I-DO
          </p>

          <h2 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            My Services
          </h2>

          <div className="mx-auto mt-5 h-1 w-16 bg-[#e84855]" />
        </motion.div>

        {/* Featured card - Frontend Development */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="group relative mt-14 overflow-hidden border border-[#e84855]/25 bg-black/40 backdrop-blur-xl transition-all duration-300 hover:border-[#e84855]/60 hover:shadow-[0_0_40px_rgba(232,72,85,0.2)] md:mt-16"
        >
          <div className="grid gap-8 p-6 sm:p-8 md:grid-cols-2 md:p-10">
            {/* left: content */}
            <div className="flex flex-col justify-center">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center bg-[#e84855]/10 text-2xl text-[#e84855] transition group-hover:scale-110">
                  <FaCode />
                </div>
                <span className="font-mono text-xs text-[#ffb020]/80">
                  &lt;Frontend /&gt;
                </span>
              </div>

              <h3 className="mb-3 text-2xl font-bold text-white sm:text-[26px]">
                Frontend Development
              </h3>

              <p className="max-w-md text-sm leading-7 text-gray-400 sm:text-[15px]">
                Building modern, scalable web applications using React,
                Next.js and TypeScript — with clean, maintainable code that
                reads as well as it runs.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {["React & Next.js", "Reusable Components", "API Integration", "Modern Architecture"].map(
                  (f) => (
                    <span
                      key={f}
                      className="border border-[#e84855]/25 px-3 py-1 font-mono text-[11px] text-gray-300"
                    >
                      {f}
                    </span>
                  )
                )}
              </div>
            </div>

            {/* right: live code snippet */}
            <div className="relative border border-white/5 bg-[#0a0101] p-5 font-mono text-[13px] leading-6 sm:p-6">
              <div className="mb-4 flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-[#e84855]/60" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#ffb020]/60" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
              </div>

              {codeLines.map((line, i) => (
                <div key={i} style={{ paddingLeft: `${line.indent * 16}px` }}>
                  {line.content.map((part, j) => (
                    <span key={j} className={codeColor[part.c]}>
                      {part.t}
                    </span>
                  ))}
                </div>
              ))}
              <span className="inline-block h-4 w-[7px] animate-pulse bg-[#e84855]/70 align-middle" />
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
              className="group border border-[#e84855]/15 bg-black/30 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-[#e84855]/50 hover:shadow-[0_0_25px_rgba(232,72,85,0.15)]"
            >
              <div className="mb-4 flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center bg-[#e84855]/10 text-xl text-[#e84855] transition group-hover:scale-110">
                  {service.icon}
                </div>
                <span className="font-mono text-[11px] text-[#ffb020]/70">
                  {service.tag}
                </span>
              </div>

              <h3 className="mb-2 text-lg font-bold text-white">
                {service.title}
              </h3>

              <p className="text-sm leading-6 text-gray-400">
                {service.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-1.5">
                {service.features.map((feature) => (
                  <span
                    key={feature}
                    className="border border-white/10 px-2.5 py-1 font-mono text-[10px] text-gray-400"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* watermark close tag */}
        <div className="mt-10 text-center">
          <span className="pointer-events-none select-none font-mono text-[13px] text-white/[0.06] sm:text-[15px]">
            &lt;/Services&gt;
          </span>
        </div>
      </div>
    </section>
  );
}