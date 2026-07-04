"use client";

import { motion } from "framer-motion";

export default function Story() {
  return (
    <section className="relative overflow-hidden bg-black py-32">

      {/* Background Glow */}
      <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-red-600/10 blur-[180px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="uppercase tracking-[0.5em] text-red-500">
            Our Story
          </p>

          <h2 className="mt-6 text-5xl font-black leading-tight">
            More Than
            <br />
            Just A Camera.
          </h2>

          <p className="mt-8 text-lg leading-8 text-gray-400">
            SmartLens Media was built on a passion for preserving life's
            most meaningful moments. Every photograph, every film and
            every livestream is created with creativity, precision and
            genuine care.
          </p>

          <p className="mt-6 text-lg leading-8 text-gray-400">
            We believe every event deserves to be remembered beautifully,
            whether it's an intimate wedding, a graduation ceremony,
            a church event or a corporate production.
          </p>
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <img
           src="/images/home/storyreveal/crew.jpg"
            alt="Our Story"
            className="h-[350px] w-full rounded-2xl object-cover shadow-2xl"
          />
        </motion.div>

      </div>

    </section>
  );
}