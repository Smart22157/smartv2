export default function PortfolioHero() {
  return (
    <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden">

      {/* Background */}

      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black" />

      {/* Content */}

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">

        <p className="mb-6 text-sm uppercase tracking-[0.4em] text-red-500">
          SmartLens Media
        </p>

        <h1 className="text-6xl font-black leading-tight md:text-8xl">

          Our

          <span className="block text-red-600">

            Portfolio

          </span>

        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-gray-400">

          Every image tells a story.

          Every frame preserves a memory.

          Explore our finest photography and
          videography work across weddings,
          graduations, corporate events,
          portraits, drone shoots and livestreams.

        </p>

      </div>

    </section>
  );
}