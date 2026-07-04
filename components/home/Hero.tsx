"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden bg-black">

      {/* Background Image */}
      <img
  src="/images/home/storyreveal/graduation.jpg"
  alt="Services"
  className="absolute inset-0 h-full w-full object-cover"
/>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Red Glow */}
      <div className="absolute -left-40 top-10 h-96 w-96 rounded-full bg-red-600/20 blur-[140px]" />

      {/* Orange Glow */}
      <div className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-orange-500/20 blur-[180px]" />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px),linear-gradient(90deg,rgba(255,255,255,.15) 1px,transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative z-20 mx-auto flex h-full max-w-7xl items-center px-8">

        <div className="max-w-4xl">

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .6 }}
            className="mb-6 tracking-[10px] uppercase text-red-500"
          >
            SmartLens Media
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .8 }}
            className="font-black leading-[0.9]"
          >
            <span className="block text-6xl md:text-8xl xl:text-[120px]">
              EVERY
            </span>

            <span className="block bg-gradient-to-r from-red-500 via-orange-400 to-red-500 bg-clip-text text-6xl md:text-8xl xl:text-[120px] text-transparent">
              STORY
            </span>

            <span className="block text-6xl md:text-8xl xl:text-[120px]">
              DESERVES
            </span>

            <span className="block text-6xl md:text-8xl xl:text-[120px]">
              TO LIVE.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: .7 }}
            className="mt-8 max-w-2xl text-lg leading-8 text-gray-300"
          >
            We craft cinematic photography, films, livestreams and
            unforgettable visual experiences for weddings,
            graduations, corporate events and brands.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="mt-12 flex flex-wrap gap-5"
          >

            <Link
              href="/portfolio"
              className="rounded-full bg-red-600 px-8 py-4 font-semibold transition duration-300 hover:scale-105 hover:bg-red-500"
            >
              View Portfolio
            </Link>

            <Link
              href="/contact"
              className="rounded-full border border-white/20 bg-white/10 px-8 py-4 font-semibold backdrop-blur-xl transition duration-300 hover:bg-white/20"
            >
              Book a Session
            </Link>

          </motion.div>

        </div>

      </div>

      {/* Scroll */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
        }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center">

          <p className="mb-3 text-xs tracking-[6px] uppercase text-white/70">
            Scroll
          </p>

          <div className="flex h-14 w-8 justify-center rounded-full border border-white/30">

            <motion.div
              animate={{ y: [4, 22, 4] }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
              }}
              className="mt-2 h-3 w-3 rounded-full bg-red-500"
            />

          </div>

        </div>
      </motion.div>

    </section>
  );
}