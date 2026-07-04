"use client";

type Props = {
  active: string;
  setActive: (category: string) => void;
};

const categories = [
  "All",
  "Weddings",
  "Graduations",
  "Corporate",
  "Portraits",
  "Drone",
  "Livestream",
];

export default function PortfolioFilters({
  active,
  setActive,
}: Props) {
  return (
    <section className="mx-auto mt-8 max-w-7xl px-6">

      <div className="flex flex-wrap justify-center gap-4">

        {categories.map((category) => (

          <button
            key={category}
            onClick={() => setActive(category)}
            className={`rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 ${
              active === category
                ? "bg-red-600 text-white shadow-lg shadow-red-600/30"
                : "border border-white/10 bg-white/5 text-gray-300 hover:bg-white/10"
            }`}
          >
            {category}
          </button>

        ))}

      </div>

    </section>
  );
}