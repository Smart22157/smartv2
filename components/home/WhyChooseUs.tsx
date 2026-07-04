"use client";

import { motion } from "framer-motion";
import {
  Camera,
  Video,
  Clock3,
  Users,
} from "lucide-react";

const features = [
  {
    icon: Camera,
    title: "Premium Photography",
    description:
      "Every image is carefully crafted with attention to detail, lighting and emotion.",
  },
  {
    icon: Video,
    title: "Cinematic Videography",
    description:
      "We create films that allow you to relive your biggest moments for years to come.",
  },
  {
    icon: Clock3,
    title: "Fast Delivery",
    description:
      "Professional editing with timely delivery, because your memories shouldn't wait.",
  },
  {
    icon: Users,
    title: "Trusted Experience",
    description:
      "From weddings to graduations and corporate events, clients trust SmartLens to tell their story.",
  },
];

export default function WhyChoose() {
  return (
    <section className="relative py-28 bg-[#050505] overflow-hidden">

      {/* Background Glow */}
      <div className="absolute left-1/2 top-40 h-96 w-96 -translate-x-1/2 rounded-full bg-red-600/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="text-center mb-20"
        >
          <p className="uppercase tracking-[0.5em] text-red-500 text-sm">
            WHY SMARTLENS
          </p>

          <h2 className="mt-4 text-4xl md:text-6xl font-bold">
            More Than A Camera.
          </h2>

          <p className="mt-6 text-gray-400 max-w-2xl mx-auto leading-8">
            We believe every frame should tell a story.
            That's why we combine creativity, technology and
            experience to create timeless memories.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: .7,
                  delay: index * .15,
                }}
                whileHover={{
                  y: -10,
                }}
                className="group rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 transition-all hover:border-red-500/40 hover:bg-white/10"
              >

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-red-600/10 transition-all group-hover:bg-red-600">

                  <Icon
                    size={30}
                    className="text-red-500 transition-all group-hover:text-white"
                  />

                </div>

                <h3 className="mt-8 text-2xl font-semibold">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-400">
                  {item.description}
                </p>

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}