"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We begin by understanding your event, vision and expectations so every important moment is planned for.",
  },
  {
    number: "02",
    title: "Plan",
    description:
      "Our team prepares the equipment, schedule and creative approach to ensure a smooth production.",
  },
  {
    number: "03",
    title: "Create",
    description:
      "Using professional photography, videography, drones and livestream technology, we capture every unforgettable moment.",
  },
  {
    number: "04",
    title: "Deliver",
    description:
      "Every project is carefully edited and delivered with quality, precision and attention to detail.",
  },
];

export default function Process() {
  return (
    <section className="relative bg-black py-32 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600/10 blur-[220px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        <div className="text-center">

          <p className="uppercase tracking-[0.6em] text-red-500">
            HOW WE WORK
          </p>

          <h2 className="mt-6 text-5xl md:text-6xl font-black">
            Simple.
            <br />
            Creative.
            <br />
            Professional.
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg text-gray-400 leading-8">
            Every successful project follows a carefully planned process
            that ensures your memories are captured beautifully.
          </p>

        </div>

        <div className="mt-24 grid gap-10 md:grid-cols-2 xl:grid-cols-4">

          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.2,
                duration: 0.8,
              }}
              whileHover={{
                y: -12,
              }}
              className="relative rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm"
            >

              <span className="text-6xl font-black text-red-600/30">
                {step.number}
              </span>

              <h3 className="mt-6 text-3xl font-bold">
                {step.title}
              </h3>

              <p className="mt-6 leading-8 text-gray-400">
                {step.description}
              </p>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}