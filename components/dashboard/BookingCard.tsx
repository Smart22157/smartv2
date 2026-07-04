"use client";

import { supabase } from "@/lib/supabase";

type Booking = {
  id: number;
  full_name: string;
  email: string;
  phone: string;
  event_type: string;
  event_date: string | null;
  event_location: string |null;
  guests: number | null;
  budget: string | null;
  message: string | null;
  status: string | null;
};

type Props = {
  booking: Booking;
  refresh: () => void;
};

export default function BookingCard({
  booking,
  refresh,
}: Props) {

  async function updateStatus(status: string) {
    const { error } = await supabase
      .from("bookings")
      .update({ status })
      .eq("id", booking.id);

    if (!error) refresh();
  }

  async function deleteBooking() {

    const confirmDelete = window.confirm(
      "Delete this booking?"
    );

    if (!confirmDelete) return;

    const { error } = await supabase
      .from("bookings")
      .delete()
      .eq("id", booking.id);

    if (!error) refresh();
  }

  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

      <div className="flex flex-col justify-between gap-8 lg:flex-row">

        <div>

          <h3 className="text-2xl font-bold">
            {booking.full_name}
          </h3>

          <p className="mt-2 text-red-500">
            {booking.event_type}
          </p>

          <div className="mt-6 space-y-2 text-gray-400">

            <p>📅 {booking.event_date}</p>

            <p>📍 {booking.event_location}</p>

            <p>📞 {booking.phone}</p>

            <p>✉ {booking.email}</p>

            <p>👥 {booking.guests}</p>

            <p>💰 {booking.budget}</p>

          </div>

        </div>

        <div className="flex flex-col gap-3">

          <span
            className={`rounded-full px-4 py-2 text-center font-semibold
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

          <button
            onClick={() => updateStatus("Confirmed")}
            className="rounded-xl bg-green-600 px-5 py-3 hover:bg-green-700"
          >
            ✓ Confirm
          </button>

          <button
            onClick={() => updateStatus("Completed")}
            className="rounded-xl bg-blue-600 px-5 py-3 hover:bg-blue-700"
          >
            ✔ Complete
          </button>

          <a
            href={`tel:${booking.phone}`}
            className="rounded-xl bg-white/10 px-5 py-3 text-center hover:bg-white/20"
          >
            📞 Call
          </a>

          <a
            href={`mailto:${booking.email}`}
            className="rounded-xl bg-white/10 px-5 py-3 text-center hover:bg-white/20"
          >
            ✉ Email
          </a>

          <button
            onClick={deleteBooking}
            className="rounded-xl bg-red-600 px-5 py-3 hover:bg-red-700"
          >
            🗑 Delete
          </button>

        </div>

      </div>

    </div>
  );
}