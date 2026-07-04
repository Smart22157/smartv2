"use client";

type Props = {
  title: string;
  value: string | number;
  icon: string;
  color:
    | "red"
    | "green"
    | "blue"
    | "yellow"
    | "purple";
};

export default function StatCard({
  title,
  value,
  icon,
  color,
}: Props) {
  const colors = {
    red: "from-red-600 to-red-500",
    green: "from-green-600 to-green-500",
    blue: "from-blue-600 to-blue-500",
    yellow: "from-yellow-500 to-orange-500",
    purple: "from-purple-600 to-indigo-600",
  };

  return (
    <div className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 transition duration-300 hover:-translate-y-1 hover:border-red-500/40 hover:shadow-2xl">

      <div className={`h-2 bg-gradient-to-r ${colors[color]}`} />

      <div className="p-8">

        <div className="flex items-center justify-between">

          <div>

            <p className="text-sm uppercase tracking-widest text-gray-500">
              {title}
            </p>

            <h2 className="mt-4 text-5xl font-black">
              {value}
            </h2>

          </div>

          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-3xl transition group-hover:scale-110">
            {icon}
          </div>

        </div>

      </div>

    </div>
  );
}