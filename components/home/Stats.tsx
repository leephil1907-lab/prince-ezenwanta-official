"use client";

import { motion } from "framer-motion";

const stats = [
  ["40+", "Years Performing"],
  ["150+", "Live Events"],
  ["30+", "Traditional Songs"],
  ["Thousands", "Fans"],
];

export default function Stats() {
  return (
    <section className="py-28 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              className="text-center p-10 rounded-3xl bg-[#111111] border border-[#C8A04520]"
            >
              <h2 className="text-5xl font-bold text-[#C8A045]">{item[0]}</h2>
              <p className="mt-5 text-gray-400">{item[1]}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
