"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="relative overflow-hidden py-40 bg-black">

      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=2000&q=80"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/80" />

      {/* Red Glow */}
      <div className="absolute top-0 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-red-600/20 blur-[180px]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">

        <motion.h2
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="text-5xl md:text-7xl font-black leading-tight"
        >
          READY TO
          <br />
          TELL YOUR
          <br />
          STORY?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: .4 }}
          viewport={{ once: true }}
          className="mt-10 text-xl text-gray-300 max-w-3xl mx-auto leading-9"
        >
          Whether it's your wedding, graduation, corporate event,
          livestream or brand campaign, let's create something
          unforgettable together.
        </motion.p>

        <motion.div
          initial={{ opacity:0,y:40 }}
          whileInView={{ opacity:1,y:0 }}
          transition={{ delay:.6 }}
          viewport={{ once:true }}
          className="mt-14 flex flex-wrap justify-center gap-6"
        >

          <Link
            href="/contact"
            className="rounded-full bg-red-600 px-10 py-5 text-lg font-semibold transition hover:scale-105 hover:bg-red-500"
          >
            Book Your Session
          </Link>

          <Link
            href="/portfolio"
            className="rounded-full border border-white/20 bg-white/10 backdrop-blur-xl px-10 py-5 text-lg font-semibold transition hover:bg-white/20"
          >
            Explore Portfolio
          </Link>

        </motion.div>

      </div>

    </section>
  );
}