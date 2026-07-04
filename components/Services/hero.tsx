"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black flex items-center justify-center">

      {/* Background Image */}
      <img
  src="/images/home/storyreveal/graduation1.jpg"
  alt="Services"
  className="absolute inset-0 h-full w-full object-cover"
/>
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Red Glow */}
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600/20 blur-[180px]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          className="uppercase tracking-[0.7em] text-red-500"
        >
          OUR SERVICES
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: .2 }}
          className="mt-8 text-5xl md:text-8xl font-black leading-tight"
        >
          We Create
          <br />
          Timeless Stories
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .6 }}
          className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-300"
        >
          Every event has a story worth remembering.
          From weddings and graduations to corporate productions,
          drone cinematography and livestreaming,
          we create visuals that stand the test of time.
        </motion.p>

        <motion.a
          href="#photography"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: .95 }}
          className="mt-12 inline-block rounded-full bg-red-600 px-10 py-4 font-semibold transition hover:bg-red-700"
        >
          Explore Services
        </motion.a>

      </div>

      {/* Scroll Indicator */}

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{
          repeat: Infinity,
          duration: 1.8,
        }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="flex h-12 w-7 justify-center rounded-full border border-white/30">
          <div className="mt-2 h-3 w-1 rounded-full bg-white" />
        </div>
      </motion.div>

    </section>
  );
}