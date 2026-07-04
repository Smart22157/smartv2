"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

type Booking = {
  id: string;
  full_name: string;
  event_type: string;
  status: string;
  created_at: string;
};

type Gallery = {
  id: string;
  title: string;
  status: string;
  created_at: string;
};

export default function AnalyticsPage() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [galleries, setGalleries] = useState<Gallery[]>([]);
  const [published, setPublished] = useState(0);

  useEffect(() => {
    loadAnalytics();
  }, []);

  async function loadAnalytics() {
    const { data: bookingData } = await supabase
      .from("bookings")
      .select("*")
      .order("created_at", { ascending: false });

    const { data: galleryData } = await supabase
      .from("galleries")
      .select("*")
      .order("created_at", { ascending: false });

    setBookings(bookingData || []);
    setGalleries(galleryData || []);

    setPublished(
      (galleryData || []).filter(
        (g) => g.status === "Published"
      ).length
    );
  }

  return (
    <div className="space-y-10">

      {/* Header */}

      <div>

        <h1 className="text-5xl font-black">
          Analytics
        </h1>

        <p className="mt-3 text-gray-400">
          Welcome back to SmartLens Media.
        </p>

      </div>

      {/* Cards */}

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

          <p className="text-gray-400">
            📅 Total Bookings
          </p>

          <h2 className="mt-3 text-5xl font-black">
            {bookings.length}
          </h2>

        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

          <p className="text-gray-400">
            🖼 Total Galleries
          </p>

          <h2 className="mt-3 text-5xl font-black">
            {galleries.length}
          </h2>

        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

          <p className="text-gray-400">
            🟢 Published Galleries
          </p>

          <h2 className="mt-3 text-5xl font-black">
            {published}
          </h2>

        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

          <p className="text-gray-400">
            ☁ Google Drive
          </p>

          <h2 className="mt-3 text-3xl font-bold text-green-400">
            Connected
          </h2>

        </div>

      </div>

      {/* Two Columns */}

      <div className="grid gap-8 lg:grid-cols-2">

        {/* Recent Bookings */}

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

          <h2 className="text-2xl font-bold">
            Recent Bookings
          </h2>

          <div className="mt-8 space-y-4">

            {bookings.slice(0, 5).map((booking) => (

              <div
                key={booking.id}
                className="rounded-xl bg-black/30 p-4"
              >

                <h3 className="font-semibold">
                  {booking.full_name}
                </h3>

                <p className="text-sm text-gray-400">
                  {booking.event_type}
                </p>

                <span className="mt-2 inline-block rounded-full bg-red-600/20 px-3 py-1 text-sm text-red-400">
                  {booking.status}
                </span>

              </div>

            ))}

            {bookings.length === 0 && (

              <p className="text-gray-500">
                No bookings yet.
              </p>

            )}

          </div>

        </div>

        {/* Recent Galleries */}

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

          <h2 className="text-2xl font-bold">
            Recent Galleries
          </h2>

          <div className="mt-8 space-y-4">

            {galleries.slice(0, 5).map((gallery) => (

              <div
                key={gallery.id}
                className="rounded-xl bg-black/30 p-4"
              >

                <h3 className="font-semibold">
                  {gallery.title}
                </h3>

                <p className="text-sm text-gray-400">
                  {gallery.status}
                </p>

              </div>

            ))}

            {galleries.length === 0 && (

              <p className="text-gray-500">
                No galleries yet.
              </p>

            )}

          </div>

        </div>

      </div>

    </div>
  );
}