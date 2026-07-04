interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export default function ProjectDetails({
  params,
}: ProjectPageProps) {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <h1 className="mb-4 text-5xl font-bold capitalize">
          {params.slug}
        </h1>

        <p className="text-neutral-400">
          Project details coming soon...
        </p>
      </div>
    </main>
  );
}