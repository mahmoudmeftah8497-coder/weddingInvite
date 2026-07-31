"use client";

import { motion } from "framer-motion";

type Props = {
  onTap: () => void;
  cracking: boolean;
};

export default function Seal({ onTap, cracking }: Props) {
  return (
    <motion.button
      type="button"
      onClick={onTap}
      whileHover={!cracking ? { scale: 1.05 } : undefined}
      whileTap={!cracking ? { scale: 0.96 } : undefined}
      animate={cracking ? { x: [0, -2, 2, 0] } : { x: 0 }}
      transition={{ duration: 0.4 }}
      className="relative mt-1 h-[78px] w-[78px] cursor-pointer"
      style={{
        filter: "drop-shadow(0 7px 10px rgba(40,15,20,.45))",
      }}
      aria-label="Break the seal to open the invitation"
    >
      <motion.svg
        viewBox="0 0 100 100"
        className="h-full w-full"
        animate={
          cracking
            ? { opacity: 0, scale: 0.75 }
            : { opacity: 1, scale: 1 }
        }
        transition={{
          duration: 0.6,
          delay: cracking ? 0.3 : 0,
        }}
      >
        <defs>
          <radialGradient id="wax" cx="35%" cy="30%">
            <stop offset="0%" stopColor="#9b4053" />
            <stop offset="45%" stopColor="#702335" />
            <stop offset="100%" stopColor="#40121d" />
          </radialGradient>

          <radialGradient id="edge">
            <stop offset="70%" stopColor="rgba(0,0,0,0)" />
            <stop offset="100%" stopColor="rgba(0,0,0,.25)" />
          </radialGradient>
        </defs>

        {/* Wax seal */}
        <motion.path
          d="
          M50 7
          C72 7 89 24 91 48
          C94 70 76 89 53 91
          C29 93 10 77 9 53
          C8 28 27 8 50 7Z
          "
          fill="url(#wax)"
          animate={
            cracking
              ? { x: 7, rotate: 7 }
              : { x: 0, rotate: 0 }
          }
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          style={{
            transformOrigin: "center",
          }}
        />

        {/* Dark soft edge */}
        <circle
          cx="50"
          cy="50"
          r="41"
          fill="url(#edge)"
        />

        {/* Small natural wax highlight */}
        <path
          d="
          M30 25
          C40 17 55 17 65 23
          "
          fill="none"
          stroke="rgba(255,255,255,.18)"
          strokeWidth="3"
          strokeLinecap="round"
        />

        {/* Empty center */}
        <circle
          cx="50"
          cy="52"
          r="19"
          fill="rgba(30,5,10,.08)"
        />

        {/* Crack appears on opening */}
        <motion.path
          d="
          M50 10
          C47 30 53 50 49 90
          "
          stroke="#2b0c13"
          strokeWidth="1.5"
          fill="none"
          animate={{
            opacity: cracking ? 1 : 0,
          }}
        />
      </motion.svg>
    </motion.button>
  );
}