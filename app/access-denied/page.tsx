import Link from "next/link";

export default function AccessDeniedPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#050505] px-6 text-white">
      <div className="max-w-lg rounded-3xl border border-white/10 bg-white/5 p-10 text-center">

        <div className="mb-6 text-6xl">
          🔒
        </div>

        <h1 className="text-4xl font-black">
          Access Restricted
        </h1>

        <p className="mt-4 text-gray-400">
          This dashboard is reserved for SmartLens administrators only.
          If you believe this is a mistake, please sign in using the
          authorized administrator Google account.
        </p>

        <Link
          href="/"
          className="mt-8 inline-block rounded-full bg-red-600 px-8 py-4 font-semibold transition hover:bg-red-700"
        >
          Return to Home
        </Link>

      </div>
    </main>
  );
}