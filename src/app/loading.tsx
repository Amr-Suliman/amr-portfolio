export default function Loading() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-6">
        <div className="h-14 w-14 animate-spin rounded-full border-4 border-primary/20 border-t-primary" />

        <p className="text-sm tracking-[6px] text-red-400 uppercase">
          Loading...
        </p>
      </div>
    </main>
  );
}