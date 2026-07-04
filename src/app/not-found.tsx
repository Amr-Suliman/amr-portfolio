import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background px-6 text-center">
      <h1 className="text-8xl font-black text-primary">
        404
      </h1>

      <h2 className="mt-6 text-3xl font-bold text-white">
        Page Not Found
      </h2>

      <p className="mt-4 max-w-md text-gray-400">
        The page you are looking for doesn't exist or has been moved.
      </p>

      <Link
        href="/"
        className="
          mt-10
          rounded-xl
          border
          border-primary
          px-8
          py-3
          font-semibold
          text-primary
          transition-all
          duration-300
          hover:bg-primary
          hover:text-white
        "
      >
        Back Home
      </Link>
    </main>
  );
}