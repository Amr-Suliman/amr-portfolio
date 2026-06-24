import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from '../components/sections/About';
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Services from "@/components/sections/Services";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills/>
      <Services/>
      <Projects />
      <Experience/>
      <Contact/>
    </>
  );
}