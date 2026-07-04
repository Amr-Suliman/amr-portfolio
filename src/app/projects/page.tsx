import Projects from "@/components/sections/Projects";

export default function ProjectsPage() {
  return (
    <main className="pt-28">
      <section className="mx-auto max-w-7xl px-6 pb-10 text-center">
        <p className="mb-3 tracking-[6px] text-primary uppercase">
          Portfolio
        </p>

        <h1 className="text-5xl font-bold">
          My Projects
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-neutral-400">
          A collection of projects focused on modern frontend development,
          performance, responsive design and user experience.
        </p>
      </section>

      <Projects />
    </main>
  );
}