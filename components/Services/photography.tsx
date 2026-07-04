"use client";

import { motion } from "framer-motion";

export default function Photography() {
  return (
    <section
      id="photography"
      className="relative bg-black py-24 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600/10 blur-[150px]" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-16 px-6 lg:flex-row">

        {/* Image */}

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="flex-1"
        >
          <img
               
  src="/images/home/storyreveal/photography.jpg"
            alt="Photography"
            className="h-[650px] w-full rounded-3xl object-cover shadow-2xl"
          />
        </motion.div>

        {/* Content */}

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="flex-1"
        >

          <p className="uppercase tracking-[0.5em] text-red-500">
            Photography
          </p>

          <h2 className="mt-6 text-5xl font-black leading-tight">
            Capturing
            <br />
            Moments That
            <br />
            Last Forever.
          </h2>

          <p className="mt-8 text-lg leading-8 text-gray-400">
            From weddings and graduations to portraits and corporate
            events, every image is captured with precision,
            creativity and emotion.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-5">

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              💍 Weddings
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              🎓 Graduations
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              👤 Portraits
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              🏢 Corporate
            </div>

          </div>

          <a
            href="/portfolio"
            className="mt-12 inline-flex rounded-full bg-red-600 px-8 py-4 font-semibold transition hover:bg-red-700"
          >
            View Photography Portfolio →
          </a>

        </motion.div>

      </div>
    </section>
  );
}