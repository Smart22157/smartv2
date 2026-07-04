"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-[#050505] py-36">

      <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600/20 blur-[200px]" />

      <div className="relative mx-auto max-w-5xl px-6 text-center">

        <motion.h2
          initial={{opacity:0,y:40}}
          whileInView={{opacity:1,y:0}}
          viewport={{once:true}}
          className="text-6xl font-black"
        >
          Ready To Capture
          <br />
          Your Story?
        </motion.h2>

        <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-400">
          Weddings, graduations, church services, corporate events,
          documentaries and everything in between.
          Let's create something unforgettable together.
        </p>

        <div className="mt-12 flex flex-col justify-center gap-5 sm:flex-row">

          <Link
            href="https://wa.me/254116882878"
            className="rounded-full bg-green-600 px-10 py-4 font-semibold transition hover:bg-green-700"
          >
            WhatsApp Us
          </Link>

          <Link
            href="tel:+254116882878"
            className="rounded-full border border-white/20 px-10 py-4 font-semibold transition hover:border-red-500 hover:text-red-500"
          >
            Call Now
          </Link>

        </div>

      </div>

    </section>
  );
}