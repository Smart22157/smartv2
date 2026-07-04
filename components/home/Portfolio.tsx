"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolio } from "@/data/portfolio";

const filters = [
  "All",
  "Wedding",
  "Graduation",
  "Corporate",
  "Drone",
];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? portfolio
      : portfolio.filter(
          (item) => item.category === activeFilter
        );

  return (
    <section className="bg-[#050505] py-36">

      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{opacity:0,y:50}}
          whileInView={{opacity:1,y:0}}
          viewport={{once:true}}
          className="text-center"
        >

          <p className="uppercase tracking-[8px] text-red-500 mb-4">
            Portfolio
          </p>

          <h2 className="text-5xl md:text-7xl font-black">
            FEATURED
            <br />
            STORIES
          </h2>

          <p className="mt-8 max-w-2xl mx-auto text-gray-400 text-lg">
            Every photograph tells a story.
            Every story deserves to be remembered.
          </p>

        </motion.div>

        {/* Filters */}

        <div className="flex flex-wrap justify-center gap-4 mt-16">

          {filters.map((filter) => (

            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full px-6 py-3 transition-all duration-300 ${
                activeFilter === filter
                  ? "bg-red-600 text-white"
                  : "bg-white/5 border border-white/10 hover:bg-white/10"
              }`}
            >
              {filter}
            </button>

          ))}

        </div>

        {/* Grid */}

        <motion.div
          layout
          className="grid md:grid-cols-2 gap-8 mt-20"
        >

          <AnimatePresence>

            {filtered.map((item) => (

              <motion.div
                layout
                key={item.id}
                initial={{opacity:0,scale:.9}}
                animate={{opacity:1,scale:1}}
                exit={{opacity:0,scale:.9}}
                whileHover={{y:-10}}
                className="group relative overflow-hidden rounded-[35px]"
              >

                <img
                  src={item.image}
                  alt={item.title}
                  className="h-[550px] w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

                <div className="absolute bottom-8 left-8">

                  <p className="uppercase tracking-[5px] text-red-500">
                    {item.category}
                  </p>

                  <h3 className="mt-2 text-4xl font-black">
                    {item.title}
                  </h3>

                  <button className="mt-6 rounded-full border border-white/20 bg-white/10 px-6 py-3 backdrop-blur-xl transition hover:bg-red-600">
                    View Story →
                  </button>

                </div>

              </motion.div>

            ))}

          </AnimatePresence>

        </motion.div>

      </div>

    </section>
  );
}