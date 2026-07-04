"use client";

import { motion } from "framer-motion";

export default function Map() {
  return (
    <section className="relative bg-black py-32 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600/10 blur-[220px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="uppercase tracking-[0.6em] text-red-500">
            VISIT SMARTLENS
          </p>

          <h2 className="mt-6 text-5xl font-black md:text-6xl">
            Find Our Studio
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
            Whether you're planning a wedding, graduation,
            corporate event or creative production,
            we'd love to meet and discuss your vision.
          </p>
        </motion.div>

        {/* Map Container */}
        <div className="relative overflow-hidden rounded-[35px] border border-white/10 shadow-2xl">

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.0518704916935!2d37.00460517587262!3d-1.1230779354713947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f470e631f0def%3A0xdda8511b05fd49fc!2ssmartlens%20media%20.ke!5e0!3m2!1sen!2ske!4v1783011555277!5m2!1sen!2ske"
            width="100%"
            height="650"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
          />

          {/* Floating Contact Card */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="absolute bottom-8 right-8 max-w-sm rounded-3xl border border-white/10 bg-black/80 p-8 backdrop-blur-xl"
          >

            <h3 className="text-3xl font-bold">
              SmartLens Media
            </h3>

            <p className="mt-3 text-gray-400">
              Professional Photography, Videography,
              Drone Coverage & Livestream Production.
            </p>

            <div className="mt-8 space-y-5">

              <div>
                <p className="text-sm uppercase tracking-widest text-red-500">
                  Phone
                </p>

                <a
                  href="tel:+254116882878"
                  className="text-lg hover:text-red-500 transition"
                >
                  +254 116 882 878
                </a>
              </div>

              <div>
                <p className="text-sm uppercase tracking-widest text-red-500">
                  Email
                </p>

                <a
                  href="mailto:smartlens22157@gmail.com"
                  className="break-all hover:text-red-500 transition"
                >
                  smartlens22157@gmail.com
                </a>
              </div>

            </div>

            <div className="mt-8 flex flex-col gap-4">

              <a
                href="https://maps.app.goo.gl/GnJEbqeNv3WMT9so8"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-red-600 px-6 py-3 text-center font-semibold transition hover:bg-red-700"
              >
                📍 Open in Google Maps
              </a>

              <a
                href="https://wa.me/254116882878"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-green-500 px-6 py-3 text-center font-semibold text-green-400 transition hover:bg-green-600 hover:text-white"
              >
                💬 WhatsApp Us
              </a>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}