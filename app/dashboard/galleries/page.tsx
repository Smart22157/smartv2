"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

type Gallery = {
  id: string;
  title: string;
  client_name: string;
  event_type: string | null;
  event_date: string | null;
  cover_image: string | null;
  status: string;
};

export default function GalleriesPage() {
  const [galleries, setGalleries] = useState<Gallery[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchGalleries();
  }, []);

  async function fetchGalleries() {
    const { data, error } = await supabase
      .from("galleries")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error && data) {
      setGalleries(data);
    }

    setLoading(false);
  }

  return (
    <div>

      <div className="mb-10 flex items-center justify-between">

        <div>

          <h1 className="text-5xl font-black">
            Galleries
          </h1>

          <p className="mt-3 text-gray-400">
            Manage all client galleries.
          </p>

        </div>

        <Link
          href="/dashboard/galleries/create"
          className="rounded-full bg-red-600 px-6 py-3 font-semibold hover:bg-red-700"
        >
          + Create Gallery
        </Link>

      </div>

      {loading ? (

        <p className="text-gray-400">
          Loading galleries...
        </p>

      ) : galleries.length === 0 ? (

        <div className="rounded-3xl border border-white/10 bg-white/5 p-12 text-center">

          <h2 className="text-2xl font-bold">
            No Galleries Yet
          </h2>

          <p className="mt-3 text-gray-400">
            Create your first gallery.
          </p>

        </div>

      ) : (

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {galleries.map((gallery) => (

            <div
              key={gallery.id}
              className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 transition hover:border-red-500"
            >

              <div className="flex h-52 items-center justify-center bg-black/40">

                {gallery.cover_image ? (

                  <img
                    src={gallery.cover_image}
                    alt={gallery.title}
                    className="h-full w-full object-cover"
                  />

                ) : (

                  <span className="text-7xl">
                    🖼️
                  </span>

                )}

              </div>

              <div className="p-6">

                <h2 className="text-2xl font-bold">
                  {gallery.title}
                </h2>

                <p className="mt-2 text-gray-400">
                  👤 {gallery.client_name}
                </p>

                <p className="text-gray-400">
                  🎉 {gallery.event_type || "Event"}
                </p>

                <p className="text-gray-400">
                  📅 {gallery.event_date}
                </p>

                <div className="mt-6 flex items-center justify-between">

                  <span
                    className={`rounded-full px-4 py-2 text-sm ${
                      gallery.status === "Published"
                        ? "bg-green-500/20 text-green-400"
                        : "bg-yellow-500/20 text-yellow-400"
                    }`}
                  >
                    {gallery.status}
                  </span>

                  <Link
                    href={`/dashboard/galleries/${gallery.id}`}
                    className="rounded-full bg-white/10 px-5 py-2 hover:bg-white/20"
                  >
                    Open
                  </Link>

                </div>

              </div>

            </div>

          ))}

        </div>

      )}

    </div>
  );
}