"use client";

import { motion } from "framer-motion";

const images = [
  "/images/home/storyreveal/cp4.jpg",,
  "/images/home/storyreveal/cp3.jpg",
"/images/home/storyreveal/cp2.jpg",
  "/images/home/storyreveal/cp11.jpg",
];

export default function StoryReveal() {
  return (
    <section className="relative bg-[#050505] py-40 overflow-hidden">

      {/* Glow */}
      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-red-600/10 blur-[140px]" />

      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="text-center"
        >

          <p className="uppercase tracking-[8px] text-red-500 mb-6">
            Our Philosophy
          </p>

          <h2 className="text-5xl md:text-7xl font-black leading-tight">
            WE DON'T JUST
            <br />
            CAPTURE MOMENTS.
          </h2>

          <h2 className="mt-6 text-5xl md:text-7xl font-black text-white/50">
            WE CREATE STORIES
            <br />
            PEOPLE RELIVE.
          </h2>

        </motion.div>

        <div className="mt-24 grid md:grid-cols-2 gap-8">

          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: .8,
                delay: index * .15,
              }}
              className="group relative overflow-hidden rounded-[32px]"
            >

              <img
                src={`${image}?auto=format&fit=crop&w=1200&q=80`}
                alt=""
                className="h-[450px] w-full object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />

              <div className="absolute bottom-8 left-8">

                <p className="text-white/70 mb-2">
                  SmartLens Story
                </p>

                <h3 className="text-3xl font-bold">
                  Every Moment Matters
                </h3>

              </div>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}