"use client";

import { motion } from "framer-motion";

export default function Videography() {
  return (
    <section className="bg-[#050505] py-24 overflow-hidden">

      <div className="mx-auto flex max-w-7xl flex-col-reverse items-center gap-16 px-6 lg:flex-row">

        {/* Content */}

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="flex-1"
        >
          <p className="uppercase tracking-[0.5em] text-red-500">
            Videography
          </p>

          <h2 className="mt-6 text-5xl font-black leading-tight">
            Turning
            <br />
            Moments Into
            <br />
            Cinematic Films.
          </h2>

          <p className="mt-8 text-lg leading-8 text-gray-400">
            Every video is carefully filmed and edited to preserve
            the emotion, atmosphere and energy of your event.
            We don't just record—we tell stories.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-5">

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              💒 Weddings
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              🎓 Graduations
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              🏢 Corporate
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              🎬 Highlights
            </div>

          </div>

          <a
            href="/portfolio"
            className="mt-12 inline-flex rounded-full bg-red-600 px-8 py-4 font-semibold transition hover:bg-red-700"
          >
            Watch Our Films →
          </a>

        </motion.div>

        {/* Image */}

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="flex-1"
        >
       
                <img
  src="/images/home/storyreveal/videography.jpg"
  alt="Videography"
            className="h-[650px] w-full rounded-3xl object-cover shadow-2xl"
/>
        </motion.div>

      </div>

    </section>
  );
}