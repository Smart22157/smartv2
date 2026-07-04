"use client";

import { motion } from "framer-motion";

const socials = [
  {
    name: "YouTube",
    icon: "▶",
    link: "https://youtube.com/@smartlens22157?si=PKjpHkbUZANAzkoO",
    text: "Watch our latest films",
  },
  {
    name: "Instagram",
    icon: "📸",
    link: "https://www.instagram.com/smart_lens.ke?igsh=eHd0eXNjeWJscTdz",
    text: "Behind the scenes & highlights",
  },
  {
    name: "TikTok",
    icon: "🎵",
    link: "https://www.tiktok.com/@smart_lens.ke?is_from_webapp=1&sender_device=pc",
    text: "Creative reels & trends",
  },
];

export default function Socials() {
  return (
    <section className="bg-[#050505] py-28">

      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center mb-16">

          <p className="uppercase tracking-[0.5em] text-red-500">
            STAY CONNECTED
          </p>

          <h2 className="mt-6 text-5xl font-black">
            Follow SmartLens
          </h2>

        </div>

        <div className="grid gap-8 md:grid-cols-3">

          {socials.map((social,index)=>(
            <motion.a
              key={social.name}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{opacity:0,y:50}}
              whileInView={{opacity:1,y:0}}
              transition={{delay:index*.15}}
              whileHover={{y:-10}}
              className="rounded-3xl border border-white/10 bg-white/5 p-10"
            >

              <div className="text-5xl">
                {social.icon}
              </div>

              <h3 className="mt-6 text-3xl font-bold">
                {social.name}
              </h3>

              <p className="mt-5 text-gray-400">
                {social.text}
              </p>

            </motion.a>
          ))}

        </div>

      </div>

    </section>
  );
}