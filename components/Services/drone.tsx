"use client";

import { motion } from "framer-motion";

export default function Drone() {
  return (
    <section className="relative overflow-hidden bg-black py-32">

      {/* Background Glow */}

      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#080808] to-black" />

      <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600/10 blur-[220px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="text-center"
        >

          <p className="uppercase tracking-[0.6em] text-red-500">
            Drone Cinematography
          </p>

          <h2 className="mt-6 text-5xl font-black md:text-7xl">
            A Different
            <br />
            Perspective.
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-400">
            Capture breathtaking aerial visuals that transform
            ordinary moments into extraordinary cinematic memories.
          </p>

        </motion.div>

        {/* Image */}

        <motion.div
          initial={{ opacity: 0, scale: .9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: .3 }}
          className="mt-20"
        >

        
      <img
  src="/images/home/storyreveal/drone.jpg"
 alt="Drone"
 className="h-[700px] w-full rounded-[40px] object-cover shadow-2xl"
/>
        </motion.div>

        {/* Bottom Cards */}

        <div className="mt-16 grid gap-6 md:grid-cols-3">

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            🌍
            <h3 className="mt-5 text-2xl font-bold">
              Aerial Coverage
            </h3>

            <p className="mt-4 text-gray-400">
              Wide cinematic shots that showcase your venue
              from a whole new perspective.
            </p>

          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            🚁
            <h3 className="mt-5 text-2xl font-bold">
              Smooth Flight
            </h3>

            <p className="mt-4 text-gray-400">
              Professional drone movements that create
              premium cinematic visuals.
            </p>

          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            🎬
            <h3 className="mt-5 text-2xl font-bold">
              4K Footage
            </h3>

            <p className="mt-4 text-gray-400">
              Crystal-clear aerial videos ready for films,
              documentaries and commercial productions.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}