"use client";

import { useEffect, useState } from "react";
import BookingCard from "@/components/dashboard/BookingCard";
import { supabase } from "@/lib/supabase";
import StatCard from "@/components/dashboard/StatsCard";
import UpcomingEvents from "@/components/dashboard/UpcomingEvents";
import RecentActivity from "@/components/dashboard/RecentActivity";
import TodaysSchedule from "@/components/dashboard/TodaysSchedule";


type Booking = {
  id: number;
  full_name: string;
  email: string;
  phone: string;
  event_type: string;
  event_date: string | null;
  event_location: string | null;
  guests: number | null;
  budget: string | null;
  message: string | null;
  status: string | null;
  created_at: string;
};

export default function DashboardPage() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBookings();
  }, []);

  async function fetchBookings() {
    const { data, error } = await supabase
      .from("bookings")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error(error);
    } else {
      setBookings(data || []);
    }

    setLoading(false);
  }
async function testFolder() {
  const res = await fetch("/api/google/create-folder", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      folderName: "SmartLens Test Folder",
    }),
  });

  const data = await res.json();

  console.log(data);

  if (data.webViewLink) {
    window.open(data.webViewLink, "_blank");
  } else {
    alert(JSON.stringify(data));
  }
}
  return (
    <main className="min-h-screen bg-[#050505] text-white">
    <div>

      <section className="mx-auto max-w-7xl px-6 py-24">

        {/* Header */}
        <div className="mb-16">
          <p className="uppercase tracking-[0.5em] text-red-500">
            SmartLens Admin
          </p>

          <h1 className="mt-4 text-6xl font-black">
            Dashboard
          </h1>

          <p className="mt-4 max-w-2xl text-gray-400">
            Manage bookings, clients, projects and deliveries from one place.
          </p>
        </div>

        {/* Statistics */}
       <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

  <StatCard
    title="Bookings"
    value={bookings.length}
    icon="📅"
    color="red"
  />

  <StatCard
    title="New"
    value={
      bookings.filter(
        (booking) =>
          !booking.status ||
          booking.status.toLowerCase() === "new"
      ).length
    }
    icon="🆕"
    color="yellow"
  />

  <StatCard
    title="Confirmed"
    value={
      bookings.filter(
        (booking) =>
          booking.status?.toLowerCase() === "confirmed"
      ).length
    }
    icon="✅"
    color="green"
  />


</div>
<div className="mt-12 grid gap-8 xl:grid-cols-2">

  <UpcomingEvents bookings={bookings} />

  <RecentActivity bookings={bookings} />

</div>
<div className="mt-8">
  <TodaysSchedule bookings={bookings} />
</div>

        {/* Recent Bookings */}

        <div className="mt-20">

          <h2 className="mb-8 text-3xl font-bold">
            Recent Bookings
          </h2>

          {loading ? (
            <p className="text-gray-400">
              Loading bookings...
            </p>
          ) : bookings.length === 0 ? (
            <div className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center">
              <p className="text-gray-500">
                No bookings found.
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              {bookings.map((booking) => (
                <BookingCard
                  key={booking.id}
                  booking={booking}
                  refresh={fetchBookings}
                />
              ))}
            </div>
          )}

        </div>
{/* Booking Calendar */}




      </section>
</div>
    </main>
  );
}