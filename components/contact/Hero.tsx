"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black">

      <img
         src="/images/home/storyreveal/hero.jpg"
        alt="Contact SmartLens"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-black/75" />

      <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600/20 blur-[220px]" />

      <div className="relative z-10 max-w-5xl text-center px-6">

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="uppercase tracking-[0.7em] text-red-500"
        >
          CONTACT US
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: .2 }}
          className="mt-8 text-5xl md:text-8xl font-black"
        >
          Let's Create
          <br />
          Something Amazing.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .5 }}
          className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-300"
        >
          Ready to tell your story? We'd love to hear about your
          wedding, graduation, event or creative project.
        </motion.p>

      </div>

    </section>
  );
}