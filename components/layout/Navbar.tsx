"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { name: "Home", href: "/" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/70 backdrop-blur-xl border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">

        <Link
          href="/"
          className="text-2xl font-black tracking-wider"
        >
          SMART<span className="text-red-500">LENS</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">

          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:text-red-500 transition"
            >
              {link.name}
            </Link>
          ))}

          <Link
            href="/booking"
            className="rounded-full bg-red-600 px-6 py-3 hover:bg-red-500 transition"
          >
            Book Now
          </Link>

        </div>

        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>

      </nav>

      <AnimatePresence>

        {open && (
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            className="md:hidden bg-black border-t border-white/10"
          >
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block px-6 py-4 border-b border-white/5"
                onClick={() => setOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}

      </AnimatePresence>
    </header>
  );
}