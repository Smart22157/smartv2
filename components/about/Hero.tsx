"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black">

      {/* Background */}
           <img
  src="/images/home/storyreveal/canva.jpg"
  alt="Services"
  className="absolute inset-0 h-full w-full object-cover"
/>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/75" />

      {/* Red Glow */}
      <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600/20 blur-[220px]" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          className="uppercase tracking-[0.7em] text-red-500"
        >
          ABOUT SMARTLENS
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: .2 }}
          className="mt-8 text-5xl font-black leading-tight md:text-8xl"
        >
          Every Frame
          <br />
          Has A Story.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .6 }}
          className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-300"
        >
          SmartLens Media exists to transform life's biggest
          moments into timeless visual stories through
          photography, cinematography and creative production.
        </motion.p>

      </div>

      <div className="absolute bottom-0 h-48 w-full bg-gradient-to-t from-black to-transparent" />

    </section>
  );
}