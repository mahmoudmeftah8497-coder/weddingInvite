"use client";

import { motion } from "framer-motion";
import Decorations from "./Decorations";
import GoldDivider from "./GoldDivider";
import { wedding } from "@/data/wedding";

export default function HeroV2() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#F8F3EA] flex items-center justify-center px-6">

      <Decorations />

      {/* Soft light */}
      <div className="absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-[#B08D57]/10 blur-3xl" />

      {/* Invitation Card */}
      <motion.div
        initial={{ opacity: 0, scale: .95, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="
        relative
        w-full
        max-w-4xl
        rounded-[40px]
        border
        border-[#B08D57]/30
        bg-white/80
        backdrop-blur-xl
        p-10
        md:p-20
        shadow-[0_25px_80px_rgba(0,0,0,.08)]
        "
      >
                <div className="absolute left-8 top-8 h-8 w-8 border-l-2 border-t-2 border-[#B08D57]" />
        <div className="absolute right-8 top-8 h-8 w-8 border-r-2 border-t-2 border-[#B08D57]" />
        <div className="absolute bottom-8 left-8 h-8 w-8 border-l-2 border-b-2 border-[#B08D57]" />
        <div className="absolute bottom-8 right-8 h-8 w-8 border-r-2 border-b-2 border-[#B08D57]" />

        <p className="text-center uppercase tracking-[8px] text-[#B08D57] text-sm">
          Together with our families
        </p>

        <GoldDivider />

        <h1 className="text-center text-6xl md:text-8xl text-[#3B2325]">
          Mahmoud
        </h1>

        <p
          className="my-6 text-center text-4xl text-[#B08D57]"
          style={{ fontFamily: "var(--font-script)" }}
        >
          &amp;
        </p>

        <h2 className="text-center text-6xl md:text-8xl text-[#3B2325]">
          Ons
        </h2>

        <GoldDivider />

        <p className="mx-auto max-w-xl text-center text-lg leading-9 text-gray-600">
          request the honour of your presence
          as we celebrate our marriage
          and begin a beautiful journey together.
        </p>

        <div className="mt-14 text-center">

          <p className="uppercase tracking-[6px] text-[#B08D57]">
            Saturday
          </p>

          <h3 className="mt-3 text-5xl text-[#3B2325]">
            {wedding.weddingDate.toLocaleDateString("en-GB", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </h3>

          <p className="mt-3 text-gray-600">{wedding.venue.name}</p>

        </div>
              </motion.div>

      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="flex h-14 w-8 justify-center rounded-full border border-[#B08D57]">
          <div className="mt-3 h-3 w-3 rounded-full bg-[#B08D57]" />
        </div>
      </motion.div>

    </section>
  );
}