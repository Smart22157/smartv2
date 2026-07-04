"use client";

type Booking = {
  id: number;
  full_name: string;
  event_type: string;
  status: string | null;
  created_at: string;
};

type Props = {
  bookings: Booking[];
};

export default function RecentActivity({ bookings }: Props) {
  const recent = [...bookings]
    .sort(
      (a, b) =>
        new Date(b.created_at).getTime() -
        new Date(a.created_at).getTime()
    )
    .slice(0, 6);

  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

      <h2 className="mb-6 text-2xl font-bold">
        🔥 Recent Activity
      </h2>

      <div className="space-y-5">

        {recent.map((booking) => (

          <div
            key={booking.id}
            className="flex items-start gap-4 border-b border-white/5 pb-4 last:border-none"
          >

            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-600 text-xl">

              {booking.status === "Completed"
                ? "🎉"
                : booking.status === "Confirmed"
                ? "✅"
                : "🆕"}

            </div>

            <div>

              <p className="font-semibold">

                {booking.status === "Completed"
                  ? "Booking Completed"
                  : booking.status === "Confirmed"
                  ? "Booking Confirmed"
                  : "New Booking"}

              </p>

              <p className="text-gray-400">

                {booking.full_name}

                {" • "}

                {booking.event_type}

              </p>

              <p className="mt-1 text-xs text-gray-500">

                {new Date(
                  booking.created_at
                ).toLocaleString()}

              </p>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}