"use client";

import { motion } from "framer-motion";

export default function Livestream() {
  return (
    <section className="relative overflow-hidden bg-[#050505] py-28">

      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600/10 blur-[220px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Content */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .8 }}
          >

            <div className="inline-flex items-center gap-3 rounded-full border border-red-500/30 bg-red-500/10 px-5 py-2">

              <div className="h-3 w-3 rounded-full bg-red-500 animate-pulse" />

              <span className="uppercase tracking-[0.4em] text-red-400 text-sm">
                LIVE
              </span>

            </div>

            <h2 className="mt-8 text-5xl font-black leading-tight md:text-6xl">
              Broadcast Your
              <br />
              Event To The
              <br />
              World.
            </h2>

            <p className="mt-8 text-lg leading-8 text-gray-400">
              From church services and conferences to weddings,
              graduations and corporate events, our professional
              livestream solutions ensure everyone can experience
              your event from anywhere.
            </p>

            <div className="mt-10 grid gap-4">

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                📡 Multi-Camera Production
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                🌍 Stream Anywhere
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                🔴 Full HD Live Broadcast
              </div>

            </div>

            <a
              href="/contact"
              className="mt-12 inline-flex rounded-full bg-red-600 px-8 py-4 font-semibold transition hover:bg-red-700"
            >
              Book Livestream →
            </a>

          </motion.div>

          {/* Image */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .8 }}
          >

          
      <img
  src="/images/home/storyreveal/livestream.png"
 alt="Livestream"
  className="h-[650px] w-full rounded-[40px] object-cover shadow-2xl"
/>
          </motion.div>

        </div>

      </div>

    </section>
  );
}