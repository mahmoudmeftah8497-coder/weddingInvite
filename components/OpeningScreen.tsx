"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Seal from "./Seal";

type Stage = "silence" | "card" | "closed";

export default function OpeningScreen() {
  const [stage, setStage] = useState<Stage>("silence");
  const [cracking, setCracking] = useState(false);

  function handleSealTap() {
    if (cracking) return;
    setCracking(true);

    // let MusicPlayer (and anything else) start on this real user gesture
    window.dispatchEvent(new CustomEvent("invitation:opened"));

    // card scales up and dissolves into the site behind it
    setTimeout(() => setStage("closed"), 1100);
  }

  return (
    <AnimatePresence>
      {stage !== "closed" && (
        <motion.section
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#F8F3EA] overflow-hidden"
        >
          {/* ambient paper light */}
          <motion.div
            aria-hidden
            className="pointer-events-none absolute -inset-1/4 rounded-full blur-3xl"
            style={{
              background:
                "radial-gradient(circle at 30% 25%, rgba(255,252,240,.9), transparent 55%)",
            }}
            animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* faint Tunisian geometric pattern */}
          <svg
            aria-hidden
            className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.06]"
          >
            <defs>
              <pattern
                id="tunisianStar"
                width="64"
                height="64"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M32 4 L40 20 L58 22 L44 34 L48 52 L32 42 L16 52 L20 34 L6 22 L24 20 Z"
                  fill="none"
                  stroke="#B08D57"
                  strokeWidth="1"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#tunisianStar)" />
          </svg>

          <AnimatePresence mode="wait">
            {stage === "silence" && (
              <motion.button
                key="silence"
                type="button"
                onClick={() => setStage("card")}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.9 }}
                className="relative z-10 text-center"
                aria-label="Continue to the invitation card"
              >
                <motion.span
                  className="mx-auto mb-6 block text-xl text-[#B08D57]"
                  animate={{ opacity: [0.55, 1, 0.55], y: [0, -2, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                >
                  ✦
                </motion.span>

                <h1
                  className="text-[clamp(2.4rem,7vw,4rem)] font-normal tracking-[0.03em] text-[#3B2325]"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Mahmoud &amp; Ons
                </h1>

                <p className="mt-4 text-sm uppercase tracking-[0.35em] text-[#78805B]">
                  Wedding Invitation
                </p>

                <motion.p
                  className="mt-14 text-xs tracking-[0.1em] text-[#3B2325]/50"
                  animate={{ opacity: [0.3, 0.65, 0.3] }}
                  transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
                >
                  With love — tap to open
                </motion.p>
              </motion.button>
            )}

            {stage === "card" && (
              <motion.div
                key="card"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={
                  cracking
                    ? { scale: 7, opacity: 0, transition: { duration: 0.75, ease: [0.6, 0.05, 0.15, 1] } }
                    : { opacity: 0 }
                }
                transition={{ duration: 0.8 }}
                className="relative z-10 flex aspect-[5/7] w-[min(78vw,320px)] flex-col items-center justify-between px-7 py-9 text-center"
              >
                {/* hand-roughened gold border */}
                <svg
                  aria-hidden
                  className="pointer-events-none absolute inset-0 h-full w-full"
                  viewBox="0 0 320 448"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <filter id="roughen">
                      <feTurbulence
                        type="fractalNoise"
                        baseFrequency="0.012"
                        numOctaves="2"
                        result="turb"
                      />
                      <feDisplacementMap in="SourceGraphic" in2="turb" scale="6" />
                    </filter>
                  </defs>
                  <rect
                    x="10"
                    y="10"
                    width="300"
                    height="428"
                    rx="2"
                    fill="none"
                    stroke="#B08D57"
                    strokeWidth="1.1"
                    style={{ filter: "url(#roughen)" }}
                  />
                </svg>

                <p
                  className="text-2xl text-[#78805B]"
                  style={{ fontFamily: "var(--font-script)" }}
                >
                  With love,
                </p>

                <div>
                  <div
                    className="text-3xl text-[#3B2325]"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    Mahmoud
                  </div>
                  <span
                    className="my-1 block text-2xl text-[#B08D57]"
                    style={{ fontFamily: "var(--font-script)" }}
                  >
                    &amp;
                  </span>
                  <div
                    className="text-3xl text-[#3B2325]"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    Ons
                  </div>
                  <div className="mt-4 text-sm uppercase tracking-[0.28em] text-[#78805B]">
                    31 October 2026
                  </div>
                </div>

                <Seal onTap={handleSealTap} cracking={cracking} />
              </motion.div>
            )}
          </AnimatePresence>

          {/* flash at the moment of opening */}
          <AnimatePresence>
            {cracking && (
              <motion.div
                key="flash"
                className="pointer-events-none fixed inset-0 z-20"
                style={{
                  background:
                    "radial-gradient(circle at 50% 55%, rgba(255,250,235,1), rgba(255,250,235,0) 60%)",
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 0.9, times: [0, 0.35, 1] }}
              />
            )}
          </AnimatePresence>
        </motion.section>
      )}
    </AnimatePresence>
  );
}
