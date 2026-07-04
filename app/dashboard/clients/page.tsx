"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

type Client = {
  full_name: string;
  email: string;
  phone: string;
  bookings: number;
  last_booking: string | null;
};

export default function ClientsPage() {
  const [clients, setClients] = useState<Client[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchClients();
  }, []);

  async function fetchClients() {
    const { data, error } = await supabase
      .from("bookings")
      .select("*");

    if (error) {
      console.error(error);
      setLoading(false);
      return;
    }

    const grouped = new Map<string, Client>();

    data?.forEach((booking) => {
      const key = booking.email;

      if (grouped.has(key)) {
        const client = grouped.get(key)!;

        client.bookings += 1;

        if (
          booking.created_at &&
          (!client.last_booking ||
            booking.created_at > client.last_booking)
        ) {
          client.last_booking = booking.created_at;
        }

      } else {
        grouped.set(key, {
          full_name: booking.full_name,
          email: booking.email,
          phone: booking.phone,
          bookings: 1,
          last_booking: booking.created_at,
        });
      }
    });

    setClients(Array.from(grouped.values()));

    setLoading(false);
  }

  return (
    <div>

      <div className="mb-10">

        <h1 className="text-5xl font-black">
          Clients
        </h1>

        <p className="mt-3 text-gray-400">
          View all your customers.
        </p>

      </div>

      <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5">

        <table className="w-full">

          <thead className="bg-white/5">

            <tr>

              <th className="p-5 text-left">
                Client
              </th>

              <th className="p-5 text-left">
                Email
              </th>

              <th className="p-5 text-left">
                Phone
              </th>

              <th className="p-5 text-left">
                Bookings
              </th>

              <th className="p-5 text-left">
                Last Booking
              </th>

            </tr>

          </thead>

          <tbody>

            {loading ? (

              <tr>

                <td
                  colSpan={5}
                  className="p-8 text-center"
                >
                  Loading...
                </td>

              </tr>

            ) : clients.length === 0 ? (

              <tr>

                <td
                  colSpan={5}
                  className="p-8 text-center"
                >
                  No clients yet.
                </td>

              </tr>

            ) : (

              clients.map((client) => (

                <tr
                  key={client.email}
                  className="border-t border-white/10 hover:bg-white/5"
                >

                  <td className="p-5 font-semibold">
                    {client.full_name}
                  </td>

                  <td className="p-5">
                    {client.email}
                  </td>

                  <td className="p-5">
                    {client.phone}
                  </td>

                  <td className="p-5">
                    {client.bookings}
                  </td>

                  <td className="p-5">
                    {client.last_booking
                      ? new Date(
                          client.last_booking
                        ).toLocaleDateString()
                      : "-"}
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