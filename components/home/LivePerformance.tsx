"use client";

import { motion } from "framer-motion";
import { PlayCircle } from "lucide-react";

export default function LivePerformance() {
  return (
    <section
      id="events"
      className="relative py-32 bg-gradient-to-b from-[#080808] to-black"
    >
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <p className="text-[#C8A045] tracking-[6px] uppercase">
            Experience Live
          </p>

          <h2 className="mt-4 text-5xl md:text-6xl font-bold">
            Live Performance
          </h2>

          <p className="max-w-3xl mx-auto mt-8 text-gray-400 leading-8">
            Every performance celebrates culture, community,
            tradition and the timeless rhythm of Igbo heritage.
          </p>

        </motion.div>

        <motion.div
          initial={{opacity:0,scale:.95}}
          whileInView={{opacity:1,scale:1}}
          transition={{duration:.8}}
          viewport={{once:true}}
          className="mt-20 relative rounded-3xl overflow-hidden"
        >

          <video
            className="w-full rounded-3xl"
            controls
            poster="/images/live-poster.jpg"
          >
            <source
              src="/videos/live-performance.mp4"
              type="video/mp4"
            />
          </video>

          <div className="absolute top-6 left-6 bg-black/60 backdrop-blur-md px-5 py-3 rounded-full flex items-center gap-3">

            <PlayCircle className="text-[#C8A045]" />

            <span>
              Prince Ezenwanta Live
            </span>

          </div>

        </motion.div>

      </div>
    </section>
  );
}
