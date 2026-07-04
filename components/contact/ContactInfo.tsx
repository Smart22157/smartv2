"use client";

import { motion } from "framer-motion";

export default function ContactInfo() {
  return (
    <section className="bg-[#050505] py-28">

      <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-2 xl:grid-cols-4">

        <motion.a
          whileHover={{ y: -8 }}
          href="tel:+254116882878"
          className="rounded-3xl border border-white/10 bg-white/5 p-8"
        >
          <div className="text-5xl">📞</div>

          <h3 className="mt-6 text-2xl font-bold">
            Call Us
          </h3>

          <p className="mt-4 text-gray-400">
            +254 116 882 878
          </p>

        </motion.a>

        <motion.a
          whileHover={{ y: -8 }}
          href="https://wa.me/254116882878"
          target="_blank"
          className="rounded-3xl border border-white/10 bg-white/5 p-8"
        >
          <div className="text-5xl">💬</div>

          <h3 className="mt-6 text-2xl font-bold">
            WhatsApp
          </h3>

          <p className="mt-4 text-gray-400">
            Chat with us instantly
          </p>

        </motion.a>

        <motion.a
          whileHover={{ y: -8 }}
          href="mailto:smartlens22157@gmail.com"
          className="rounded-3xl border border-white/10 bg-white/5 p-8"
        >
          <div className="text-5xl">✉️</div>

          <h3 className="mt-6 text-2xl font-bold">
            Email
          </h3>

          <p className="mt-4 text-gray-400 break-all">
            smartlens22157@gmail.com
          </p>

        </motion.a>

        <motion.div
          whileHover={{ y: -8 }}
          className="rounded-3xl border border-white/10 bg-white/5 p-8"
        >
          <div className="text-5xl">🕒</div>

          <h3 className="mt-6 text-2xl font-bold">
            Availability
          </h3>

          <p className="mt-4 text-gray-400">
            Available by appointment. Reach out anytime to discuss your project.
          </p>

        </motion.div>

      </div>

    </section>
  );
}