"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
  FaCheck,
  FaRegCopy,
} from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<{
    loading: boolean;
    success: boolean | null;
    message: string;
  }>({
    loading: false,
    success: null,
    message: "",
  });
  const [copied, setCopied] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ loading: true, success: null, message: "" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus({ loading: false, success: true, message: "Message sent successfully!" });
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus({ loading: false, success: false, message: data.message || "Something went wrong." });
      }
    } catch {
      setStatus({ loading: false, success: false, message: "Failed to send message. Please try again." });
    }
  };

  const handleCopy = async (value: string, key: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(key);
      setTimeout(() => setCopied(null), 1800);
    } catch {
      // clipboard not available, fail silently
    }
  };

  const socials = [
    { icon: <FaGithub />, link: "https://github.com/Amr-Suliman", label: "GitHub" },
    { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/amr-suleiman", label: "LinkedIn" },
    { icon: <FaWhatsapp />, link: "https://wa.me/201206005983", label: "WhatsApp" },
  ];

  const contactRows = [
    {
      key: "email",
      icon: <FaEnvelope />,
      value: "amrelgohary573@gmail.com",
      copyable: true,
    },
    {
      key: "phone",
      icon: <FaWhatsapp />,
      value: "+20 120 600 5983",
      copyValue: "+201206005983",
      copyable: true,
    },
    {
      key: "location",
      icon: <FaMapMarkerAlt />,
      value: "Egypt",
      copyable: false,
    },
  ];

  return (
    <section
      id="contact"
      className="relative min-h-screen overflow-hidden bg-[#0d0202] py-28"
    >
      {/* Background Glow */}
      <div className="absolute left-[-150px] top-1/3 h-[450px] w-[450px] rounded-full bg-[#e84855]/20 blur-[160px]" />
      <div className="absolute right-[-100px] bottom-0 h-[350px] w-[350px] rounded-full bg-[#e84855]/15 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="mb-3 tracking-[4px] text-[#e84855]">LET&apos;S CONNECT</p>
          <h2 className="text-5xl font-bold text-white">Get In Touch</h2>
          <div className="mx-auto mt-4 h-1 w-16 bg-[#e84855]" />
        </motion.div>

        <div className="mt-20 grid gap-12 md:grid-cols-2">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            {/* status badge — mirrors the Hero */}
            <div className="mb-6 inline-flex items-center gap-2 border border-[#e84855]/40 bg-[#e84855]/10 px-4 py-1.5 text-xs text-[#e84855] sm:text-sm">
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#e84855]" />
              Available for work
            </div>

            <p className="max-w-md leading-7 text-gray-400">
              Let&apos;s collaborate! I&apos;m always open to discussing exciting
              projects, new ideas and opportunities.
            </p>

           <div className="mt-8 space-y-3">
  <div className="flex items-center justify-between gap-4 border border-white/5 bg-white/[0.03] px-4 py-3.5 transition hover:border-red-500/30 hover:bg-white/[0.05]">
    <div className="flex items-center gap-4 text-gray-300">
      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-red-500/10 text-red-500">
        <FaEnvelope />
      </span>
      amrelgohary573@gmail.com
    </div>
    <button
      type="button"
      onClick={() => handleCopy("amrelgohary573@gmail.com", "email")}
      aria-label="Copy email"
      className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-gray-500 transition hover:bg-red-500/10 hover:text-red-400"
    >
      {copied === "email" ? <FaCheck className="text-red-500" /> : <FaRegCopy />}
    </button>
  </div>

  <div className="flex items-center justify-between gap-4 border border-white/5 bg-white/[0.03] px-4 py-3.5 transition hover:border-red-500/30 hover:bg-white/[0.05]">
    <div className="flex items-center gap-4 text-gray-300">
      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-red-500/10 text-red-500">
        <FaWhatsapp />
      </span>
      +20 120 600 5983
    </div>
    <button
      type="button"
      onClick={() => handleCopy("+201206005983", "phone")}
      aria-label="Copy phone number"
      className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-gray-500 transition hover:bg-red-500/10 hover:text-red-400"
    >
      {copied === "phone" ? <FaCheck className="text-red-500" /> : <FaRegCopy />}
    </button>
  </div>

  <div className="flex items-center gap-4 border border-white/5 bg-white/[0.03] px-4 py-3.5 text-gray-300">
    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-red-500/10 text-red-500">
      <FaMapMarkerAlt />
    </span>
    Egypt
  </div>
</div>

            {/* socials */}
            <div className="mt-10 flex gap-4">
              {socials.map((item) => (
                <a
                  key={item.label}
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={item.label}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-[#e84855]/30 bg-black/40 text-xl text-gray-300 transition hover:scale-110 hover:border-[#e84855] hover:text-[#e84855] hover:shadow-[0_0_25px_rgba(232,72,85,0.5)]"
                >
                  {item.icon}
                </a>
              ))}
            </div>

            <p className="mt-6 text-xs text-gray-500">
              Usually responds within 24 hours.
            </p>
          </motion.div>

          {/* FORM */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="border border-[#e84855]/20 bg-black/40 p-8 shadow-[0_0_40px_rgba(232,72,85,0.15)] backdrop-blur-xl"
          >
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your Name"
              className="mb-5 w-full border border-[#e84855]/20 bg-black/60 px-5 py-4 text-white outline-none placeholder:text-gray-500 focus:border-[#e84855]"
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Your Email"
              className="mb-5 w-full border border-[#e84855]/20 bg-black/60 px-5 py-4 text-white outline-none placeholder:text-gray-500 focus:border-[#e84855]"
            />

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Your Message"
              rows={5}
              className="mb-6 w-full resize-none border border-[#e84855]/20 bg-black/60 px-5 py-4 text-white outline-none placeholder:text-gray-500 focus:border-[#e84855]"
            />

            <button
              type="submit"
              disabled={status.loading}
              className="border border-[#e84855] bg-[#e84855]/10 px-8 py-3 font-semibold text-[#e84855] transition hover:text-white hover:shadow-[0_0_30px_rgba(232,72,85,0.5)] disabled:cursor-not-allowed disabled:opacity-50"
            >
              {status.loading ? "SENDING..." : "SEND MESSAGE"}
            </button>

            {status.message && (
              <p
                className={`mt-4 text-sm font-medium ${
                  status.success ? "text-green-400" : "text-red-400"
                }`}
              >
                {status.message}
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}