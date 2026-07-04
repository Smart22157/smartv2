"use client";

import { motion } from "framer-motion";
import { services } from "@/data/service";

export default function Services() {
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
            Our Services
          </p>

          <h2 className="text-5xl md:text-7xl font-black">
            WHAT WE
            <br />
            CREATE
          </h2>

        </motion.div>

        <div className="space-y-10">

          {services.map((service, index) => (

            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: .8,
                delay: index * .15,
              }}
              whileHover={{ scale: 1.01 }}
              className="group overflow-hidden rounded-[35px] bg-white/5 border border-white/10"
            >

              <div className="grid lg:grid-cols-2">

                <div className="overflow-hidden">

                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-[420px] w-full object-cover transition duration-700 group-hover:scale-110"
                  />

                </div>

                <div className="flex flex-col justify-center p-12">

                  <h3 className="text-4xl font-black">
                    {service.title}
                  </h3>

                  <p className="mt-6 text-gray-400 leading-8 text-lg">
                    {service.description}
                  </p>

                  <button className="mt-10 w-fit rounded-full bg-red-600 px-8 py-4 transition hover:bg-red-500">
                    Learn More →
                  </button>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}