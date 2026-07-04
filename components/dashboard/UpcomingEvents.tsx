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

export default function UpcomingEvents({ bookings }: Props) {
  const upcoming = [...bookings]
    .filter(
      (booking) =>
        booking.event_date &&
        new Date(booking.event_date) >= new Date()
    )
    .sort(
      (a, b) =>
        new Date(a.event_date!).getTime() -
        new Date(b.event_date!).getTime()
    )
    .slice(0, 5);

  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

      <div className="mb-6 flex items-center justify-between">

        <h2 className="text-2xl font-bold">
          📅 Upcoming Events
        </h2>

        <span className="rounded-full bg-red-600 px-3 py-1 text-sm">
          {upcoming.length}
        </span>

      </div>

      {upcoming.length === 0 ? (

        <p className="text-gray-500">
          No upcoming events.
        </p>

      ) : (

        <div className="space-y-4">

          {upcoming.map((booking) => (

            <div
              key={booking.id}
              className="rounded-2xl border border-white/10 bg-black/30 p-5 transition hover:border-red-500/40"
            >

              <div className="flex items-center justify-between">

                <div>

                  <h3 className="font-bold text-lg">
                    {booking.full_name}
                  </h3>

                  <p className="text-red-400">
                    {booking.event_type}
                  </p>

                </div>

                <div className="text-right">

                  <p className="font-semibold">
                    {booking.event_date}
                  </p>

                  <p className="text-gray-400 text-sm">
                    {booking.event_location || "Location not provided"}
                  </p>

                </div>

              </div>

            </div>

          ))}

        </div>

      )}

    </div>
  );
}