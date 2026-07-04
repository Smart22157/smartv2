"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

type PortfolioItem = {
  id: string;
  title: string;
  category: string;
  drive_file_id: string;
};
type Props = {
  category: string;
};

export default function PortfolioGrid({
  category,
}: Props) {
  const [portfolio, setPortfolio] = useState<PortfolioItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadPortfolio();
  }, []);

  async function loadPortfolio() {
    const { data, error } = await supabase
      .from("portfolio")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error(error);
      return;
    }

    setPortfolio(data || []);
    setLoading(false);
  }

  if (loading) {
    return (
      <section className="mx-auto max-w-7xl px-6 py-24 text-center">
        <h2 className="text-3xl font-bold">
          Loading Portfolio...
        </h2>
      </section>
    );
  }

  if (portfolio.length === 0) {
    return (
      <section className="mx-auto max-w-7xl px-6 py-24 text-center">
        <h2 className="text-3xl font-bold">
          Portfolio Coming Soon
        </h2>

        <p className="mt-4 text-gray-400">
          New work will appear here shortly.
        </p>
      </section>
    );
  }
const filteredPortfolio =
  category === "All"
    ? portfolio
    : portfolio.filter(
        (item) => item.category === category
      );
  return (
    <section className="mx-auto mt-16 max-w-7xl px-6 pb-24">

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

        {filteredPortfolio.map((item) => (

          <div
            key={item.id}
            className="group relative overflow-hidden rounded-3xl"
          >

            <img
              src={`https://drive.google.com/thumbnail?id=${item.drive_file_id}&sz=w1200`}
              alt={item.title}
              loading="lazy"
              className="h-[420px] w-full object-cover transition duration-500 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90" />

            <div className="absolute bottom-0 left-0 p-8">

              <span className="rounded-full bg-red-600 px-4 py-2 text-sm font-semibold">
                {item.category}
              </span>

              <h2 className="mt-4 text-3xl font-black">
                {item.title}
              </h2>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}