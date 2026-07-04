"use client";

type Booking = {
  id: number;
  full_name: string;
  event_type: string;
  event_date: string | null;
  event_location: string | null;
  status: string | null;
};

type Props = {
  bookings: Booking[];
};

export default function TodaysSchedule({ bookings }: Props) {
  const today = new Date().toISOString().split("T")[0];

  const todaysBookings = bookings.filter(
    (booking) => booking.event_date === today
  );

  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold">
          📅 Today's Schedule
        </h2>

        <span className="rounded-full bg-red-600 px-3 py-1 text-sm">
          {todaysBookings.length}
        </span>
      </div>

      {todaysBookings.length === 0 ? (
        <div className="rounded-2xl bg-black/20 p-6 text-center">
          <p className="text-gray-400">
            🎉 No events scheduled for today.
          </p>
        </div>
      ) : (
        <div className="space-y-4">

          {todaysBookings.map((booking) => (

            <div
              key={booking.id}
              className="rounded-2xl border border-white/10 bg-black/30 p-5 transition hover:border-red-500/40"
            >
              <h3 className="text-lg font-bold">
                {booking.full_name}
              </h3>

              <p className="mt-2 text-red-400">
                {booking.event_type}
              </p>

              <p className="mt-2 text-gray-400">
                📍 {booking.event_location || "Location not provided"}
              </p>

              <span
                className={`mt-4 inline-block rounded-full px-4 py-2 text-sm ${
                  booking.status === "Completed"
                    ? "bg-blue-500/20 text-blue-400"
                    : booking.status === "Confirmed"
                    ? "bg-green-500/20 text-green-400"
                    : "bg-yellow-500/20 text-yellow-400"
                }`}
              >
                {booking.status || "New"}
              </span>
            </div>

          ))}

        </div>
      )}

    </div>
  );
}