"use client";

import { motion } from "framer-motion";
import { testimonials } from "@/data/Testimonials";

export default function Testimonials() {
  return (
    <section className="bg-[#050505] py-36">

      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >

          <p className="uppercase tracking-[8px] text-red-500 mb-4">
            Testimonials
          </p>

          <h2 className="text-5xl md:text-7xl font-black">
            WHAT OUR
            <br />
            CLIENTS SAY
          </h2>

        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">

          {testimonials.map((client, index) => (

            <motion.div
              key={client.id}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.15,
                duration: 0.8,
              }}
              whileHover={{
                y: -10,
              }}
              className="rounded-[30px] border border-white/10 bg-white/5 backdrop-blur-xl p-8"
            >

              <div className="flex items-center gap-4">

                <img
                  src={client.image}
                  alt={client.name}
                  className="w-16 h-16 rounded-full object-cover"
                />

                <div>

                  <h3 className="font-bold text-xl">
                    {client.name}
                  </h3>

                  <p className="text-gray-400">
                    {client.role}
                  </p>

                </div>

              </div>

              <div className="flex text-yellow-400 text-xl mt-6">
                ★★★★★
              </div>

              <p className="mt-6 text-gray-300 leading-8">
                "{client.quote}"
              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}