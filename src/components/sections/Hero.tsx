"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

/* ─── Orbit Icon: each icon circles independently at its own speed ─── */
interface OrbitIconProps {
  src: string;
  alt: string;
  color: string;
  radius: number;
  startAngle: number;
  duration: number;
  direction?: 1 | -1;
}

function OrbitIcon({ src, alt, color, radius, startAngle, duration, direction = 1 }: OrbitIconProps) {
  return (
    <motion.div
      className="absolute left-1/2 top-1/2"
      style={{
        width: radius * 2,
        height: radius * 2,
        marginLeft: -radius,
        marginTop: -radius,
      }}
      initial={{ rotate: startAngle }}
      animate={{ rotate: startAngle + direction * 360 }}
      transition={{ duration, repeat: Infinity, ease: "linear" }}
    >
      <motion.div
        className="absolute"
        style={{ left: "50%", top: 0, transform: "translate(-50%, -50%)" }}
        initial={{ rotate: -startAngle }}
        animate={{ rotate: -startAngle - direction * 360 }}
        transition={{ duration, repeat: Infinity, ease: "linear" }}
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-full shadow-lg" title={alt}>
          <div
            style={{
              width: 100,
              height: 100,
              backgroundColor: color,
              WebkitMaskImage: `url(${src})`,
              maskImage: `url(${src})`,
              WebkitMaskSize: "contain",
              maskSize: "contain",
              WebkitMaskRepeat: "no-repeat",
              maskRepeat: "no-repeat",
              WebkitMaskPosition: "center",
              maskPosition: "center",
            }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ─── Main Hero ─── */
export default function Hero() {
  const techIcons = [
    { src: "/icons/react.svg", alt: "React", color: "#61DAFB", radius: 260, startAngle: 0, duration: 20, direction: 1 as const },
    { src: "/icons/nextdotjs.svg", alt: "Next.js", color: "#000000", radius: 210, startAngle: 33, duration: 14, direction: -1 as const },
    { src: "/icons/typescript.svg", alt: "TypeScript", color: "#3178C6", radius: 270, startAngle: 66, duration: 24, direction: 1 as const },
    { src: "/icons/tailwindcss.svg", alt: "Tailwind CSS", color: "#06B6D4", radius: 190, startAngle: 99, duration: 11, direction: -1 as const },
    { src: "/icons/javascript.svg", alt: "JavaScript", color: "#F7DF1E", radius: 250, startAngle: 132, duration: 22, direction: 1 as const },
    { src: "/icons/github.svg", alt: "GitHub", color: "#181717", radius: 245, startAngle: 198, duration: 19, direction: 1 as const },
    { src: "/icons/html5.svg", alt: "HTML5", color: "#E34F26", radius: 200, startAngle: 231, duration: 13, direction: -1 as const },
    { src: "/icons/css.svg", alt: "CSS3", color: "#663399", radius: 265, startAngle: 264, duration: 25, direction: 1 as const },
    { src: "/icons/bootstrap.svg", alt: "Bootstrap", color: "#7952B3", radius: 215, startAngle: 297, duration: 15, direction: -1 as const },
    { src: "/icons/figma.svg", alt: "Figma", color: "#F24E1E", radius: 235, startAngle: 330, duration: 18, direction: 1 as const },
  ];

  const containerVariants: Variants = {
    hidden: {
      opacity: 0
    },

    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12
      }
    }
  };


  const itemVariants: Variants = {

    hidden: {
      opacity: 0,
      y: 30
    },

    visible: {
      opacity: 1,
      y: 0,

      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }

  };

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-[#0a0000]">
      {/* ── Simple background glow ── */}
      <div
        className="pointer-events-none absolute left-[-10%] top-[-10%] h-[600px] w-[600px] rounded-full blur-[160px]"
        style={{ background: "rgba(192,57,43,0.12)" }}
      />

      {/* ── Content ── */}
      <div className="relative z-10 mx-auto grid w-full max-w-[1250px] grid-cols-1 items-center gap-16 px-6 py-20 md:grid-cols-2 md:px-12">

        {/* LEFT */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p
            variants={itemVariants}
            className="mb-3 inline-flex items-center gap-2 rounded-full border border-red-800/40 bg-red-950/30 px-4 py-1.5 text-sm text-red-300"
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-red-400" />
            Available for work
          </motion.p>

          <motion.p variants={itemVariants} className="mb-2 text-lg text-red-300/80">
            Hello, I&apos;m Amr 
          </motion.p>

          <motion.h1
            variants={itemVariants}
            className="mb-5 text-6xl font-bold tracking-tight text-white md:text-7xl"
          >
            Frontend
            <span className="block bg-gradient-to-r from-red-400 via-red-500 to-red-700 bg-clip-text text-transparent">
              Developer
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mb-10 max-w-lg text-base leading-relaxed text-gray-400"
          >
            Building modern web experiences using{" "}
            <span className="text-red-400">React</span>,{" "}
            <span className="text-red-400">Next.js</span>,{" "}
            <span className="text-red-400">TypeScript</span> and interactive
            animations.
          </motion.p>

          {/* CTA */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
            <a
              href="/resume/Amr-ElGohary-CV.pdf"
              download
              className="
              group relative inline-flex
              h-14 items-center justify-center
              border border-red-500/60
              bg-black/30
              px-10
              font-semibold
              text-white
              transition-all duration-300
              hover:scale-105
              hover:border-red-400
              hover:shadow-[0_0_20px_rgba(255,0,0,0.9)]
            "
            >
              Download CV
            </a>

            <a
              href="#projects"
              className="inline-flex h-13 items-center justify-center border border-white/10 bg-white/5 px-8 py-3 font-semibold text-gray-300 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:text-white"
            >
              View Projects
            </a>
          </motion.div>

          {/* Socials */}
          <motion.div variants={itemVariants} className="mt-10 flex gap-3">
            {[
              { href: "https://www.linkedin.com/in/amr-suleiman", icon: <FaLinkedin />, label: "LinkedIn" },
              { href: "mailto:amrelgohary573@gmail.com", icon: <MdEmail />, label: "Email" },
              { href: "https://wa.me/201206005983", icon: <FaWhatsapp />, label: "WhatsApp" },
              { href: "https://github.com/Amr-Suliman", icon: <FaGithub />, label: "GitHub" },
            ].map(({ href, icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                aria-label={label}
                className="group flex h-11 w-11 items-center justify-center rounded-full border border-red-500/20 bg-black/40 text-lg text-gray-400 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:border-red-500/60 hover:text-red-400 hover:shadow-[0_0_20px_rgba(192,57,43,0.3)]"
              >
                {icon}
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* RIGHT */}
        <div className="relative flex min-h-[600px] items-center justify-center">

          {/* Independently orbiting tech icons */}
          {techIcons.map((props, i) => (
            <OrbitIcon key={i} {...props} />
          ))}

          {/* Avatar (static) */}
          <div className="relative z-20">
            {/* Glow behind avatar */}
            <div className="absolute inset-0 rounded-full blur-[40px]" style={{ background: "rgba(192,57,43,0.35)" }} />

            {/* Ring border */}
            <div className="relative rounded-full p-[3px]" style={{ background: "linear-gradient(135deg, #c0392b, #7b1010, #c0392b)" }}>
              <div className="rounded-full bg-[#0a0000] p-1">
                <Image
                  src="/images/profile/amr.jpg"
                  alt="Amr"
                  width={220}
                  height={220}
                  className="rounded-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2"
        animate={{ opacity: [1, 0.3, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-xs tracking-widest text-red-900/60">SCROLL</span>
        <div className="h-8 w-[1px] bg-gradient-to-b from-red-800/60 to-transparent" />
      </motion.div>
    </section>
  );
}