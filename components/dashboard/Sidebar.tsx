"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";

const links = [
  { name: "Dashboard", href: "/dashboard", icon: "🏠" },
  { name: "Bookings", href: "/dashboard/bookings", icon: "📅" },
  { name: "New Booking", href: "/dashboard/new-booking", icon: "➕" },
  { name: "Clients", href: "/dashboard/clients", icon: "👥" },
  { name: "Galleries", href: "/dashboard/galleries", icon: "🖼️" },
  { name: "Analytics", href: "/dashboard/analytics", icon: "📊" },
  { name: "Settings", href: "/dashboard/settings", icon: "⚙️" },
  { name: "Portfolio", href: "/dashboard/portfolio", icon: "🕵️‍♂️" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 h-screen w-72 border-r border-white/10 bg-[#0a0a0a] flex flex-col">

      {/* Logo */}
      <div className="border-b border-white/10 p-8">
        <h1 className="text-3xl font-black text-white">
          SmartLens
        </h1>

        <p className="mt-2 text-sm text-gray-500">
          Studio Management
        </p>
      </div>

      {/* Navigation */}
      <nav className="mt-6 flex-1 px-4">

        {links.map((link) => {

          const active = pathname === link.href;

          return (
            <Link
              key={link.href}
              href={link.href}
              className={`mb-2 flex items-center gap-4 rounded-2xl px-5 py-4 transition ${
                active
                  ? "bg-red-600 text-white"
                  : "text-gray-400 hover:bg-white/5 hover:text-white"
              }`}
            >
              <span className="text-xl">
                {link.icon}
              </span>

              <span>
                {link.name}
              </span>
            </Link>
          );

        })}

      </nav>

      {/* Footer */}
      <div className="border-t border-white/10 p-4">

        <div className="mb-4 rounded-2xl bg-white/5 p-5">

          <h3 className="font-bold text-white">
            Jeff
          </h3>

          <p className="mt-1 text-sm text-gray-400">
            Administrator
          </p>

        </div>

        <button
          onClick={() => signOut({ callbackUrl: "/" })}
          className="flex w-full items-center justify-center gap-3 rounded-2xl bg-red-600 px-5 py-4 font-semibold text-white transition hover:bg-red-700"
        >
          🚪 Logout
        </button>

      </div>

    </aside>
  );
}