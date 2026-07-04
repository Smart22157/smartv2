"use client";

import BookingForm from "@/components/booking/BookingForm";

export default function NewBookingPage() {
  return (
    <div>

      <div className="mb-10">

        <h1 className="text-5xl font-black">
          New Booking
        </h1>

        <p className="mt-3 text-gray-400">
          Create a booking for a client.
        </p>

      </div>

      <BookingForm admin />

    </div>
  );
}