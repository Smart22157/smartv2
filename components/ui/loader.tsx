"use client";

import { motion } from "framer-motion";

const letters = "SMARTLENS".split("");

export default function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        transition: {
          duration: 1,
          ease: "easeInOut",
        },
      }}
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Background Glow */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.12, 0.22, 0.12],
        }}
        transition={{
          repeat: Infinity,
          duration: 4,
        }}
        className="absolute h-[650px] w-[650px] rounded-full bg-red-600 blur-[180px]"
      />

      <div className="relative text-center">

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          className="mb-8 text-xs uppercase tracking-[0.6em] text-gray-500"
        >
          VISUAL STORYTELLING
        </motion.p>

        {/* Letter Animation */}
        <div className="relative inline-flex overflow-hidden">

          {letters.map((letter, index) => (
            <motion.span
              key={index}
              initial={{
                opacity: 0,
                y: 50,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: index * 0.08,
                duration: .45,
              }}
              className="text-6xl font-black tracking-[0.12em] text-white md:text-8xl"
            >
              {letter}
            </motion.span>
          ))}

          {/* Red Sweep */}
          <motion.div
            initial={{
              x: "-150%",
            }}
            animate={{
              x: "250%",
            }}
            transition={{
              delay: 1,
              duration: 1.2,
            }}
            className="absolute inset-y-0 w-24 bg-gradient-to-r from-transparent via-red-500/70 to-transparent blur-xl"
          />

        </div>

        {/* MEDIA */}
        <motion.p
          initial={{
            opacity: 0,
            letterSpacing: "0.8em",
          }}
          animate={{
            opacity: 1,
            letterSpacing: "0.45em",
          }}
          transition={{
            delay: 1.2,
            duration: .7,
          }}
          className="mt-6 text-lg uppercase text-red-500"
        >
          MEDIA
        </motion.p>

        {/* Divider */}
        <motion.div
          initial={{
            width: 0,
          }}
          animate={{
            width: "260px",
          }}
          transition={{
            delay: 1.4,
            duration: .8,
          }}
          className="mx-auto mt-12 h-px bg-red-500"
        />

        {/* Bottom Text */}
        <motion.p
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: .75,
            y: 0,
          }}
          transition={{
            delay: 1.8,
          }}
          className="mt-8 text-xs uppercase tracking-[0.6em] text-gray-500"
        >
          EVERY FRAME MATTERS
        </motion.p>

      </div>
    </motion.div>
  );
}