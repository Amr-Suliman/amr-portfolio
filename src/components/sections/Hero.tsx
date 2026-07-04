"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { useEffect, useRef } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiFramer,
} from "react-icons/si";
import { MdEmail } from "react-icons/md";

/* ─── Particle Canvas ─── */
function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const COUNT = 80;
    const particles = Array.from({ length: COUNT }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 1.5 + 0.5,
      alpha: Math.random() * 0.5 + 0.2,
    }));

    const LINK_DIST = 130;

    const tick = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(192,57,43,${p.alpha})`;
        ctx.fill();
      }

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < LINK_DIST) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(192,57,43,${0.12 * (1 - d / LINK_DIST)})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      animId = requestAnimationFrame(tick);
    };
    tick();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 opacity-60"
    />
  );
}

/* ─── Orbit Icon ─── */
interface OrbitIconProps {
  icon: React.ReactNode;
  angle: number;
  radius: number;
  duration: number;
  delay?: number;
  color: string;
}

function OrbitIcon({ icon, angle, radius, duration, delay = 0, color }: OrbitIconProps) {
  const rad = (angle * Math.PI) / 180;
  const x = Math.cos(rad) * radius;
  const y = Math.sin(rad) * radius;

  return (
    <motion.div
      className="absolute"
      style={{
        left: `calc(50% + ${x}px)`,
        top: `calc(50% + ${y}px)`,
        transform: "translate(-50%, -50%)",
      }}
      animate={{ rotate: -360 }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "linear",
        delay,
      }}
    >
      <div
        className="flex h-11 w-11 items-center justify-center rounded-full border text-xl shadow-lg"
        style={{
          background: `${color}18`,
          borderColor: `${color}50`,
          color: color,
          boxShadow: `0 0 18px ${color}40`,
        }}
      >
        {icon}
      </div>
    </motion.div>
  );
}

/* ─── Main Hero ─── */
export default function Hero() {
  const techIcons = [
    { icon: <FaReact />, angle: 0, color: "#61DAFB" },
    { icon: <SiNextdotjs />, angle: 60, color: "#ffffff" },
    { icon: <SiTypescript />, angle: 120, color: "#3178C6" },
    { icon: <SiTailwindcss />, angle: 180, color: "#38BDF8" },
    { icon: <SiFramer />, angle: 240, color: "#E847B0" },
    { icon: <FaNodeJs />, angle: 300, color: "#68A063" },
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
      {/* ── Particle Network ── */}
      <ParticleCanvas />

      {/* ── Aurora Blobs ── */}
      <motion.div
        className="absolute left-[-10%] top-[-5%] h-[500px] w-[500px] rounded-full blur-[160px]"
        style={{ background: "rgba(192,57,43,0.18)" }}
        animate={{ x: [0, 60, 0], y: [0, 40, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-10%] right-[-5%] h-[450px] w-[450px] rounded-full blur-[140px]"
        style={{ background: "rgba(120,20,10,0.22)" }}
        animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      />
      <motion.div
        className="absolute left-1/2 top-1/3 h-[300px] w-[300px] -translate-x-1/2 rounded-full blur-[120px]"
        style={{ background: "rgba(180,30,20,0.12)" }}
        animate={{ scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      {/* ── Grid Overlay ── */}
      <div
        className="absolute inset-0 z-[1] opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      {/* ── Scanline Shimmer ── */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(to bottom, transparent 0%, rgba(192,57,43,0.03) 50%, transparent 100%)",
          backgroundSize: "100% 6px",
        }}
        animate={{ backgroundPositionY: ["0px", "6px"] }}
        transition={{ duration: 0.15, repeat: Infinity, ease: "linear" }}
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
            Hello, I&apos;m Amr 👋
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
              href="/resume/Amr-Suleiman-CV.pdf"
              download
              className="group relative inline-flex h-13 items-center justify-center overflow-hidden  border border-red-500/60 bg-red-950/30 px-8 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:border-red-400 hover:bg-red-900/40 hover:shadow-[0_0_40px_rgba(192,57,43,0.6)]"
            >
              <span className="relative z-10">Download CV</span>
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/5 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
            </a>
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
              hover:shadow-[0_0_40px_rgba(255,0,0,0.9)]
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
        <div className="relative flex items-center justify-center">

          {/* Outer dashed rotating ring */}
          <motion.div
            className="absolute h-[420px] w-[420px] rounded-full border border-dashed border-red-800/30"
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          />

          {/* Inner solid ring */}
          <motion.div
            className="absolute h-[340px] w-[340px] rounded-full border border-red-900/20"
            animate={{ rotate: -360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />

          {/* Tech Icons Orbit */}
          <motion.div
            className="absolute h-[380px] w-[380px]"
            animate={{ rotate: 360 }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          >
            {techIcons.map(({ icon, angle, color }, i) => (
              <OrbitIcon
                key={i}
                icon={icon}
                angle={angle}
                radius={190}
                duration={18}
                color={color}
              />
            ))}
          </motion.div>

          {/* Avatar */}
          <motion.div
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-20"
          >
            {/* Glow behind avatar */}
            <div className="absolute inset-0 rounded-full blur-[40px]" style={{ background: "rgba(192,57,43,0.35)" }} />

            {/* Ring border */}
            <div className="relative rounded-full p-[3px]" style={{ background: "linear-gradient(135deg, #c0392b, #7b1010, #c0392b)" }}>
              <div className="rounded-full bg-[#0a0000] p-1">
                <Image
                  src="/images/amr.jpg"
                  alt="Amr"
                  width={220}
                  height={220}
                  className="rounded-full object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>
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