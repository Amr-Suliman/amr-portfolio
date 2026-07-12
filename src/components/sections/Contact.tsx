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
    <section id="contact" className="relative min-h-screen bg-background py-28">
      <div className="mx-auto max-w-6xl px-6">
        {/* Kicker + Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="mb-3 font-mono text-[11px] uppercase tracking-[2px] text-muted sm:text-xs">
            07 — Contact
          </p>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
            Get In Touch
          </h2>
          <div className="mt-4 h-[1px] w-16 bg-foreground/20" />
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
            <div className="mb-6 inline-flex items-center gap-2 border border-accent/40 px-4 py-1.5 text-xs text-accent sm:text-sm">
              <span className="h-2 w-2 animate-pulse rounded-full bg-accent" />
              Available for work
            </div>

            <p className="max-w-md leading-7 text-muted">
              Let&apos;s collaborate! I&apos;m always open to discussing exciting
              projects, new ideas and opportunities.
            </p>

            <div className="mt-8 space-y-3">
              {contactRows.map((row) => (
                <div
                  key={row.key}
                  className="flex items-center justify-between gap-4 bg-surface px-4 py-3.5 transition-colors duration-200 hover:bg-surface-alt"
                >
                  <div className="flex items-center gap-4 text-foreground/80">
                    <span className="flex h-9 w-9 items-center justify-center border border-foreground/15 text-foreground/70">
                      {row.icon}
                    </span>
                    {row.value}
                  </div>

                  {row.copyable && (
                    <button
                      type="button"
                      onClick={() => handleCopy(row.copyValue ?? row.value, row.key)}
                      aria-label={`Copy ${row.value}`}
                      className="flex h-8 w-8 flex-shrink-0 items-center justify-center text-muted transition-colors duration-200 hover:text-foreground"
                    >
                      {copied === row.key ? <FaCheck className="text-accent" /> : <FaRegCopy />}
                    </button>
                  )}
                </div>
              ))}
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
                  className="flex h-12 w-12 items-center justify-center border border-foreground/20 text-xl text-muted transition-colors duration-200 hover:border-foreground hover:text-foreground"
                >
                  {item.icon}
                </a>
              ))}
            </div>

            <p className="mt-6 text-xs text-muted">
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
            className="bg-surface p-8 shadow-[0_20px_40px_-28px_rgba(0,0,0,0.5)]"
          >
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your Name"
              className="mb-5 w-full border border-foreground/15 bg-background px-5 py-4 text-foreground outline-none placeholder:text-muted transition-colors focus:border-foreground"
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Your Email"
              className="mb-5 w-full border border-foreground/15 bg-background px-5 py-4 text-foreground outline-none placeholder:text-muted transition-colors focus:border-foreground"
            />

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Your Message"
              rows={5}
              className="mb-6 w-full resize-none border border-foreground/15 bg-background px-5 py-4 text-foreground outline-none placeholder:text-muted transition-colors focus:border-foreground"
            />

            <button
              type="submit"
              disabled={status.loading}
              className="border border-accent bg-accent/10 px-8 py-3 font-semibold text-accent transition-colors duration-200 hover:bg-accent hover:text-background disabled:cursor-not-allowed disabled:opacity-50"
            >
              {status.loading ? "SENDING..." : "SEND MESSAGE"}
            </button>

            {status.message && (
              <p
                className={`mt-4 text-sm font-medium ${
                  status.success ? "text-accent" : "text-foreground"
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