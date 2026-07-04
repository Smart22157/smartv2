"use client";

export default function Topbar() {
  return (
    <header className="sticky top-0 z-30 flex h-20 items-center justify-between border-b border-white/10 bg-[#050505]/80 px-10 backdrop-blur-xl">

      <div>

        <h2 className="text-2xl font-bold text-white">
          SmartLens Dashboard
        </h2>

        <p className="text-sm text-gray-400">
          Welcome back, Jeff 👋
        </p>

      </div>

      <div className="flex items-center gap-4">

        <button className="rounded-xl border border-white/10 bg-white/5 px-5 py-3 hover:bg-white/10">
          🔔
        </button>

        <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-2">

          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-600 font-bold">
            J
          </div>

          <div>

            <p className="font-semibold">
              Jeff
            </p>

            <p className="text-xs text-gray-400">
              Admin
            </p>

          </div>

        </div>

      </div>

    </header>
  );
}