"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown, Play, Calendar } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#080808]">

      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C8A045]/10 blur-[180px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(200,160,69,0.06),transparent_70%)]" />
      </div>

      {/* Decorative circles */}
      <div className="absolute top-20 left-20 h-72 w-72 rounded-full border border-[#C8A045]/10 animate-pulse" />
      <div className="absolute bottom-20 right-20 h-56 w-56 rounded-full border border-[#C8A045]/10 animate-pulse" />

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 pt-24 lg:grid-cols-2">

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <span className="inline-block rounded-full border border-[#C8A045]/40 px-4 py-2 text-sm tracking-[0.3em] text-[#C8A045]">
            OFFICIAL WEBSITE
          </span>

          <h1 className="mt-8 text-5xl font-bold leading-tight text-white md:text-7xl">
            Prince
            <br />
            <span className="text-[#C8A045]">Ezenwanta</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-gray-300">
            The Voice of Igbo Heritage. Preserving culture through timeless
            music, unforgettable performances, and a lifelong commitment to
            tradition.
          </p>

          <div className="mt-10 flex flex-wrap gap-5">
            <button className="flex items-center gap-3 rounded-full bg-[#C8A045] px-8 py-4 font-semibold text-black transition hover:scale-105">
              <Play size={20} />
              Listen Now
            </button>

            <button className="flex items-center gap-3 rounded-full border border-[#C8A045] px-8 py-4 text-white transition hover:bg-[#C8A045] hover:text-black">
              <Calendar size={20} />
              Book Performance
            </button>
          </div>

          <div className="mt-16 flex items-center gap-3 text-[#C8A045]">
            <ChevronDown className="animate-bounce" />
            <span className="text-sm uppercase tracking-[0.25em]">
              Scroll to Discover
            </span>
          </div>
        </motion.div>

        {/* Portrait */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="relative flex justify-center"
        >
          <div className="absolute h-[520px] w-[520px] rounded-full bg-[#C8A045]/20 blur-[120px]" />

          <Image
            src="/images/prince-ezenwanta.png"
            alt="Prince Ezenwanta"
            width={700}
            height={900}
            priority
            className="relative z-10 max-h-[820px] w-auto object-contain drop-shadow-[0_0_60px_rgba(200,160,69,0.35)]"
          />
        </motion.div>
      </div>
    </section>
  );
}
