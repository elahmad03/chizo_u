import React from "react";
import { motion } from "framer-motion";
import chizoImg from "/img/chizo2.jpg";
import adamuImg from "/img/adamu.jpg";
import isaImg from "/img/isa.jpg";

const team = [
  {
    name: "Chizo germany",
    role: "Founder & CEO",
    image: chizoImg,
    description: "Visionary entrepreneur with a passion for innovation and leadership.",
  },
  {
    name: "Adamy hamisu",
    role: "Chairman",
    image: adamuImg,
    description: "Experienced leader dedicated to strategic development and growth.",
  },
  {
    name: "Isa Muhammad",
    role: "Secretary",
    image: isaImg,
    description: "Organized and detail-oriented professional ensuring smooth operations.",
  },
];

const TeamSection = () => (
  <section
    id="team"
    className="py-10 px-2 sm:px-2 lg:px-20 bg-gray-200 text-gray-800 text-center"
  >
    <div className="max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-4xl font-bold mb-12"
      >
        Meet the <span className="text-blue-600">Team</span>
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-15">
        {team.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className="bg-gray-100 rounded-2xl px-6 pt-16 pb-6 shadow-md hover:shadow-xl transition duration-300 relative flex flex-col items-center"
          >
            <div className="absolute -top-10">
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 sm:w-28 sm:h-28 object-cover rounded-b-full border-4 border-blue-500"
              />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mt-4">
              {member.name}
            </h3>
            <p className="text-blue-600 font-medium mb-2">{member.role}</p>
            <p className="text-sm text-gray-700">{member.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TeamSection;
