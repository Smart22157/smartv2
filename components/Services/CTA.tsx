"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-black py-36">

      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600/20 blur-[200px]" />

      {/* Top Border */}
      <div className="absolute top-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-red-500 to-transparent" />

      <div className="relative mx-auto max-w-5xl px-6 text-center">

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="uppercase tracking-[0.7em] text-red-500"
        >
          READY TO CREATE?
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: .2 }}
          className="mt-8 text-5xl font-black leading-tight md:text-7xl"
        >
          Let's Tell
          <br />
          Your Story.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: .4 }}
          className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-gray-400"
        >
          Whether it's a wedding, graduation, corporate event,
          church service or commercial production,
          SmartLens is ready to capture every unforgettable moment.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: .6 }}
          className="mt-12 flex flex-col justify-center gap-5 sm:flex-row"
        >
          <Link
            href="/contact"
            className="rounded-full bg-red-600 px-10 py-4 font-semibold transition hover:bg-red-700"
          >
            Book Your Session
          </Link>

          <Link
            href="/portfolio"
            className="rounded-full border border-white/20 px-10 py-4 font-semibold transition hover:border-red-500 hover:text-red-500"
          >
            View Portfolio
          </Link>
        </motion.div>

      </div>

    </section>
  );
}