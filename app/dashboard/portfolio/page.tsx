"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

type PortfolioItem = {
  id: string;
  title: string;
  category: string;
  drive_file_id: string;
  drive_link: string | null;
  created_at?: string;
};

export default function PortfolioDashboard() {
  const [items, setItems] = useState<PortfolioItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [importing, setImporting] = useState(false);

  useEffect(() => {
    loadPortfolio();
  }, []);

  async function loadPortfolio() {
    setLoading(true);

    const { data, error } = await supabase
      .from("portfolio")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error(error);
      alert(error.message);
    }

    setItems(data || []);
    setLoading(false);
  }

  async function importFromDrive() {
    const confirmed = confirm(
      "Import all new photos from Google Drive?"
    );

    if (!confirmed) return;

    setImporting(true);

    try {
      const res = await fetch("/api/portfolio/import", {
        method: "POST",
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.error || "Import failed.");
        setImporting(false);
        return;
      }

      alert(
        `✅ Import Complete!

Imported: ${data.imported}
Skipped: ${data.skipped}
Total Found: ${data.total}`
      );

      await loadPortfolio();

    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    }

    setImporting(false);
  }

  return (
    <div className="space-y-10">

      <div className="flex items-center justify-between">

        <div>

          <h1 className="text-5xl font-black">
            Portfolio
          </h1>

          <p className="mt-3 text-gray-400">
            Manage your public portfolio.
          </p>

        </div>

        <div className="flex gap-4">

          <button
            onClick={importFromDrive}
            disabled={importing}
            className="rounded-full bg-blue-600 px-8 py-4 font-semibold transition hover:bg-blue-700 disabled:opacity-50"
          >
            {importing
              ? "Importing..."
              : "☁️ Import From Drive"}
          </button>

          <Link
            href="/dashboard/portfolio/new"
            className="rounded-full bg-red-600 px-8 py-4 font-semibold transition hover:bg-red-700"
          >
            + Add Photo
          </Link>

        </div>

      </div>

      {loading ? (

        <div className="rounded-3xl border border-white/10 bg-white/5 p-16 text-center">

          <h2 className="text-3xl font-bold">
            Loading Portfolio...
          </h2>

        </div>

      ) : items.length === 0 ? (

        <div className="rounded-3xl border border-dashed border-white/10 p-16 text-center">

          <h2 className="text-3xl font-bold">
            No portfolio photos yet
          </h2>

          <p className="mt-4 text-gray-400">
            Upload your first portfolio image.
          </p>

        </div>

      ) : (

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

          {items.map((item) => (

            <div
              key={item.id}
              className="overflow-hidden rounded-3xl border border-white/10 bg-white/5"
            >

              <img
                src={`https://drive.google.com/thumbnail?id=${item.drive_file_id}&sz=w1000`}
                alt={item.title}
                className="aspect-square w-full object-cover"
              />

              <div className="p-6">

                <h2 className="text-xl font-bold">
                  {item.title}
                </h2>

                <p className="mt-2 text-gray-400">
                  {item.category}
                </p>

              </div>

            </div>

          ))}

        </div>

      )}

    </div>
  );
}