"use client";

import { motion } from "framer-motion";

type TeamMember = {
  name: string;
  role: string;
  image: string;
  quote: string;
  channel?: string;
  link?: string;
};

const team: TeamMember[] = [
  {
    name: "Geoffrey Muchangi",
    role: "Creative Director • Photography & Videography",
    image: "/team/geoffrey.jpg",
    quote: "Every frame should tell a story worth remembering.",
  },
  {
    name: "Samuel Njuki",
    role: "Videographer & Photographer",
    image: "/team/samuel.jpg",
    quote: "Motion brings every memory back to life.",
  },
  {
    name: "James Njuki",
    role: "Videographer & livestream Specialist",
    image: "/team/james.jpg",
    quote: "Every scene deserves cinematic excellence.",
  },
  {
    name: "Virginia Ngotho",
    role: "Social Media Strategist",
    image: "/team/virginia.jpg",
    quote: "Sharing stories that inspire and connect.",
    channel: "Davney Talks",
    link: "https://youtu.be/K87CIaZC9a0?si=KKHKieWwl71pjClC",
  },
];

export default function Team() {
  return (
    <section className="bg-[#050505] py-32">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="mb-20 text-center">

          <p className="uppercase tracking-[0.6em] text-red-500">
            Meet The Team
          </p>

          <h2 className="mt-6 text-5xl font-black md:text-6xl">
            The People Behind
            <br />
            SmartLens
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-400">
            Behind every project is a passionate team dedicated to
            creating unforgettable visual experiences.
          </p>

        </div>

        {/* Team Grid */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{
                y: -12,
                scale: 1.02,
              }}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm"
            >

              {/* Image */}
              <div className="overflow-hidden">

                <img
                  src={member.image}
                  alt={member.name}
                  className="h-96 w-full object-cover transition duration-700 group-hover:scale-110"
                />

              </div>

              {/* Content */}
              <div className="p-8">

                <h3 className="text-2xl font-bold">
                  {member.name}
                </h3>

                <p className="mt-2 text-red-500 font-medium">
                  {member.role}
                </p>

                <div className="my-6 h-px bg-white/10" />

                <p className="italic text-gray-400">
                  "{member.quote}"
                </p>

                {/* Creator Badge */}
                {member.channel && member.link && (
                  <div className="mt-8">

                    <p className="mb-3 text-xs uppercase tracking-[0.3em] text-gray-500">
                      Featured Creator
                    </p>

                    <a
                      href={member.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-red-500/40 px-5 py-3 text-sm font-medium text-red-400 transition-all duration-300 hover:border-red-500 hover:bg-red-600 hover:text-white"
                    >
                      ▶ {member.channel}
                    </a>

                  </div>
                )}

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}