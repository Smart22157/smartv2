"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";

const stats = [
  {
    number: 4,
    suffix: "+",
    title: "Years Experience",
  },
  {
    number: 130,
    suffix: "+",
    title: "Events Covered",
  },
  {
    number: 70,
    suffix: "+",
    title: "Livestream Productions",
  },
  {
    number: 100,
    suffix: "%",
    title: "Client Satisfaction",
  },
];

export default function Stats() {
  return (
    <section className="relative bg-[#050505] py-36 overflow-hidden">

      {/* Glow */}
      <div className="absolute top-20 right-0 h-96 w-96 rounded-full bg-red-600/10 blur-[170px]" />

      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="text-center mb-24"
        >

          <p className="uppercase tracking-[8px] text-red-500 mb-4">
            SmartLens In Numbers
          </p>

          <h2 className="text-5xl md:text-7xl font-black">
            TRUSTED TO TELL
            <br />
            THOUSANDS OF STORIES.
          </h2>

        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {stats.map((stat, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: .8,
                delay: index * .15,
              }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-white/5 backdrop-blur-xl p-10"
            >

              <div className="absolute inset-0 bg-gradient-to-br from-red-600/0 to-red-600/10 opacity-0 transition duration-500 group-hover:opacity-100" />

              <h3 className="relative text-6xl md:text-7xl font-black text-white">

                <CountUp
                  end={stat.number}
                  duration={3}
                  enableScrollSpy
                  scrollSpyOnce
                />

                {stat.suffix}

              </h3>

              <p className="relative mt-4 text-gray-400 text-lg">
                {stat.title}
              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}