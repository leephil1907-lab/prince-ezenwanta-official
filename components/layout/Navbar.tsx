"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Journey", href: "#journey" },
  { name: "Music", href: "#music" },
  { name: "Gallery", href: "#gallery" },
  { name: "Events", href: "#events" },
  { name: "Book", href: "#booking" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-black/80 backdrop-blur-xl border-b border-[#C8A045]/20"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between">

          <Link href="/" className="flex items-center gap-3">

            <div className="w-12 h-12 rounded-full border border-[#C8A045] flex items-center justify-center">

              <span className="text-[#C8A045] text-xl font-bold">
                PE
              </span>

            </div>

            <div>

              <h1 className="text-white font-bold text-lg">
                Prince Ezenwanta
              </h1>

              <p className="text-xs text-[#C8A045]">
                Official Website
              </p>

            </div>

          </Link>

          <nav className="hidden lg:flex gap-8 text-white">

            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="hover:text-[#C8A045] transition"
              >
                {item.name}
              </Link>
            ))}

          </nav>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-white"
          >
            {open ? <X size={30} /> : <Menu size={30} />}
          </button>

        </div>
      </header>

      <AnimatePresence>

        {open && (

          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: .4 }}
            className="fixed inset-0 bg-[#090909] z-40 pt-32 px-10"
          >

            <div className="flex flex-col gap-8">

              {navItems.map((item) => (

                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-3xl text-white hover:text-[#C8A045]"
                >
                  {item.name}
                </Link>

              ))}

            </div>

          </motion.div>

        )}

      </AnimatePresence>

    </>
  );
}
