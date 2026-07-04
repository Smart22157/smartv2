"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

type Booking = {
  id: number;
  full_name: string;
  email: string;
  phone: string;
  event_type: string;
  event_date: string | null;
  status: string | null;
};

export default function Bookings() {
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

    if (!error && data) {
      setBookings(data);
    }

    setLoading(false);
  }

  async function updateStatus(
    id: number,
    status: "Confirmed" | "Completed"
  ) {
    await supabase
      .from("bookings")
      .update({ status })
      .eq("id", id);

    fetchBookings();
  }

  return (
    <div>

      <div className="mb-10 flex items-center justify-between">

        <div>

          <h1 className="text-5xl font-black">
            Bookings
          </h1>

          <p className="mt-2 text-gray-400">
            Manage all client bookings.
          </p>

        </div>

      </div>

      <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5">

        <table className="w-full">

          <thead className="bg-white/5">

            <tr className="text-left">

              <th className="p-5">Client</th>

              <th className="p-5">Phone</th>

              <th className="p-5">Event</th>

              <th className="p-5">Date</th>

              <th className="p-5">Status</th>

              <th className="p-5">Action</th>

            </tr>

          </thead>

          <tbody>

            {loading ? (

              <tr>

                <td
                  colSpan={6}
                  className="p-10 text-center text-gray-400"
                >
                  Loading...
                </td>

              </tr>

            ) : bookings.length === 0 ? (

              <tr>

                <td
                  colSpan={6}
                  className="p-10 text-center text-gray-400"
                >
                  No bookings found.
                </td>

              </tr>

            ) : (

              bookings.map((booking) => (

                <tr
                  key={booking.id}
                  className="border-t border-white/10 hover:bg-white/5"
                >

                  <td className="p-5 font-semibold">
                    {booking.full_name}
                  </td>

                  <td className="p-5">
                    {booking.phone}
                  </td>

                  <td className="p-5">
                    {booking.event_type}
                  </td>

                  <td className="p-5">
                    {booking.event_date}
                  </td>

                  <td className="p-5">

                    <span
                      className={`rounded-full px-4 py-2 text-sm font-semibold
                      ${
                        booking.status === "Completed"
                          ? "bg-blue-500/20 text-blue-400"
                          : booking.status === "Confirmed"
                          ? "bg-green-500/20 text-green-400"
                          : "bg-yellow-500/20 text-yellow-400"
                      }`}
                    >
                      {booking.status || "New"}
                    </span>

                  </td>

                  <td className="p-5">

                    {!booking.status && (

                      <button
                        onClick={() =>
                          updateStatus(
                            booking.id,
                            "Confirmed"
                          )
                        }
                        className="rounded-xl bg-green-600 px-4 py-2 text-sm hover:bg-green-700"
                      >
                        Confirm
                      </button>

                    )}

                    {booking.status === "Confirmed" && (

                      <button
                        onClick={() =>
                          updateStatus(
                            booking.id,
                            "Completed"
                          )
                        }
                        className="rounded-xl bg-blue-600 px-4 py-2 text-sm hover:bg-blue-700"
                      >
                        Complete
                      </button>

                    )}

                    {booking.status === "Completed" && (

                      <span className="text-blue-400 font-semibold">
                        ✓ Done
                      </span>

                    )}

                  </td>

                </tr>

              ))

            )}

          </tbody>

        </table>

      </div>

    </div>
  );
}