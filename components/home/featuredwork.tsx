"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function FeaturedWork() {
  return (
    <section className="bg-[#050505] py-36">
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="mb-16"
        >
          <p className="uppercase tracking-[8px] text-red-500 mb-4">
            Featured Project
          </p>

          <h2 className="text-5xl md:text-7xl font-black">
            STORIES
            <br />
            THAT LAST
            <br />
            FOREVER.
          </h2>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.01 }}
          className="group relative overflow-hidden rounded-[40px]"
        >

          <img
            src=" /images/home/storyreveal/cp5.jpg"
            className="h-[700px] w-full object-cover transition duration-700 group-hover:scale-110"
            alt="Featured Project"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

          <div className="absolute bottom-0 left-0 p-10 md:p-16">

            <p className="text-red-500 uppercase tracking-[6px] mb-4">
              Graduation
            </p>

            <h3 className="text-4xl md:text-6xl font-black">
              JKUAT CLASS
              <br />
              OF 2025
            </h3>

            <p className="mt-6 max-w-xl text-lg text-gray-300 leading-8">
              Complete graduation coverage including photography,
              videography, livestream production and drone footage.
            </p>

            <Link
              href="/portfolio"
              className="inline-flex items-center mt-8 rounded-full bg-red-600 px-8 py-4 font-semibold hover:bg-red-500 transition"
            >
              View Project →
            </Link>

          </div>

        </motion.div>

      </div>
    </section>
  );
}