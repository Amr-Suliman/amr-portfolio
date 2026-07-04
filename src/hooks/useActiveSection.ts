"use client";

import { useEffect, useState } from "react";

const sections = [
  "home",
  "about",
  "skills",
  "services",
  "experience",
  "projects",
  "contact",
];

export function useActiveSection() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.scrollY + 150;

      sections.forEach((section) => {
        const element = document.getElementById(section);

        if (!element) return;

        if (
          scroll >= element.offsetTop &&
          scroll < element.offsetTop + element.offsetHeight
        ) {
          setActive(section);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return active;
}