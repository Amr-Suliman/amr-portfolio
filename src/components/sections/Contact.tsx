"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Contact() {
  // 1. Form States
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

  // 2. Handle Input Change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 3. Handle Submit to your API Route
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
        setStatus({
          loading: false,
          success: true,
          message: "Message sent successfully!",
        });
        setFormData({ name: "", email: "", message: "" }); // Reset form
      } else {
        setStatus({
          loading: false,
          success: false,
          message: data.message || "Something went wrong.",
        });
      }
    } catch (error) {
      setStatus({
        loading: false,
        success: false,
        message: "Failed to send message. Please try again.",
      });
    }
  };

  const socials = [
    {
      icon: <FaGithub />,
      link: "#",
    },
    {
      icon: <FaLinkedin />,
      link: "#",
    },
    {
      icon: <FaWhatsapp />,
      link: "#",
    },
  ];

  return (
    <section
      id="contact"
      className="relative min-h-screen overflow-hidden bg-background py-28"
    >
      {/* Background Glow */}
      <div className="absolute left-[-150px] top-1/3 h-[450px] w-[450px] rounded-full bg-red-600/20 blur-[160px]" />
      <div className="absolute right-[-100px] bottom-0 h-[350px] w-[350px] rounded-full bg-red-800/20 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-5xl font-bold text-white">Get In Touch</h2>
          <div className="mx-auto mt-4 h-1 w-16 bg-red-500" />
        </motion.div>

        <div className="mt-20 grid gap-12 md:grid-cols-2">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <p className="max-w-md leading-7 text-gray-400">
              Let's collaborate! I'm always open to discussing exciting
              projects, new ideas and opportunities.
            </p>

            <div className="mt-8 space-y-5">
              <div className="flex items-center gap-4 text-gray-300">
                <span className="text-red-500">
                  <FaEnvelope />
                </span>
                amrelgohary573@gmail.com
              </div>

              <div className="flex items-center gap-4 text-gray-300">
                <span className="text-red-500">
                  <FaWhatsapp />
                </span>
                +20 120 600 5983
              </div>

              <div className="flex items-center gap-4 text-gray-300">
                <span className="text-red-500">
                  <FaMapMarkerAlt />
                </span>
                Egypt
              </div>
            </div>

            {/* socials */}
            <div className="mt-10 flex gap-4">
              {socials.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-red-500/30 bg-black/40 text-xl text-gray-300 transition hover:scale-110 hover:border-red-500 hover:text-red-400 hover:shadow-[0_0_25px_rgba(192,57,43,.5)]"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* FORM */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-red-500/20 bg-black/40 p-8 backdrop-blur-xl shadow-[0_0_40px_rgba(192,57,43,.15)]"
          >
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your Name"
              className="mb-5 w-full rounded-lg border border-red-500/20 bg-black/60 px-5 py-4 text-white outline-none placeholder:text-gray-500 focus:border-red-500"
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Your Email"
              className="mb-5 w-full rounded-lg border border-red-500/20 bg-black/60 px-5 py-4 text-white outline-none placeholder:text-gray-500 focus:border-red-500"
            />

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Your Message"
              rows={5}
              className="mb-6 w-full rounded-lg border border-red-500/20 bg-black/60 px-5 py-4 text-white outline-none resize-none placeholder:text-gray-500 focus:border-red-500"
            />

            <button
              type="submit"
              disabled={status.loading}
              className="border border-red-500 bg-red-500/10 px-8 py-3 font-semibold text-red-400 transition hover:text-white hover:shadow-[0_0_30px_rgba(192,57,43,.5)] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status.loading ? "SENDING..." : "SEND MESSAGE"}
            </button>

            {/* Status Feedback Message */}
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