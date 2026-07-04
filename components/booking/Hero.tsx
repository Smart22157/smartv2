"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-black py-32">

      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600/10 blur-[220px]" />

      <div className="relative mx-auto max-w-7xl px-6 text-center">

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="uppercase tracking-[0.6em] text-red-500"
        >
          BOOK SMARTLENS
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="mt-8 text-5xl font-black leading-tight md:text-7xl"
        >
          Let's Tell
          <br />
          <span className="text-red-500">Your Story.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-400"
        >
          Every event deserves to be remembered beautifully.
          Share your vision with us and let SmartLens create
          timeless memories through photography, videography,
          drone coverage and cinematic storytelling.
        </motion.p>

      </div>
    </section>
  );
}