import Contact from "@/components/sections/Contact";

export default function ContactPage() {
  return (
    <main className="pt-28">
      <section className="mx-auto max-w-5xl px-6 pb-10 text-center">
        <p className="mb-3 tracking-[6px] uppercase text-primary">
          Contact
        </p>

        <h1 className="text-5xl font-bold">
          Let's Work Together
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-neutral-400">
          Have a project in mind or just want to say hello?
          I'd love to hear from you.
        </p>
      </section>

      <Contact />
    </main>
  );
}