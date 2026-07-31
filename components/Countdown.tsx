"use client";

import { useEffect, useState } from "react";
import CountdownLib from "react-countdown";
import { wedding } from "@/data/wedding";

export default function Countdown() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <section className="py-24 bg-white">
        <div className="text-center">
          <h2 className="text-5xl text-[#3B2325]">
            Until Our Wedding Day
          </h2>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-white">
      <div className="text-center">

        <p className="uppercase tracking-[4px] text-[#b08d57]">
          Countdown
        </p>

        <h2 className="mt-4 text-5xl text-[#3B2325]">
          Until Our Wedding Day
        </h2>

        <div className="mt-12">
          <CountdownLib
            date={wedding.weddingDate}
            renderer={({ days, hours, minutes, seconds }) => (
              <div className="flex flex-wrap justify-center gap-8">
                <TimeCard value={days} label="Days" />
                <TimeCard value={hours} label="Hours" />
                <TimeCard value={minutes} label="Minutes" />
                <TimeCard value={seconds} label="Seconds" />
              </div>
            )}
          />
        </div>
      </div>
    </section>
  );
}

function TimeCard({
  value,
  label,
}: {
  value: number;
  label: string;
}) {
  return (
    <div className="luxury-card w-32 p-6 text-center">
      <div className="text-5xl text-[var(--burgundy)]">
        {String(value).padStart(2, "0")}
      </div>

      <div className="mt-2 uppercase tracking-[3px] gold-text text-sm">
        {label}
      </div>
    </div>
  );
}