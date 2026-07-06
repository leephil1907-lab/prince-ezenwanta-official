"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3500);
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <motion.div
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#080808]"
    >
      <div className="text-center">

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
          className="mx-auto flex h-28 w-28 items-center justify-center rounded-full border-2 border-[#C8A045]"
        >
          <span className="text-4xl font-bold text-[#C8A045]">
            PE
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .8 }}
          className="mt-8 text-4xl font-bold"
        >
          Prince Ezenwanta
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
          className="mt-3 text-[#C8A045]"
        >
          The Voice of Igbo Heritage
        </motion.p>

      </div>
    </motion.div>
  );
}
