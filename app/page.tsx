"use client";

import OpeningScreen from "@/components/OpeningScreen";
import HeroV2 from "@/components/HeroV2";
import Countdown from "@/components/Countdown";
import Quote from "@/components/Quote";
import Events from "@/components/Events";
import Venue from "@/components/Venue";
import DressCode from "@/components/DressCode";
import MusicPlayer from "@/components/MusicPlayer";

export default function Home() {
  return (
    <>
      <OpeningScreen />
      <MusicPlayer />

      <main className="bg-[#F8F3EA]">
        <HeroV2 />
        <Countdown />
        <Quote />
        <Events />
        <DressCode />
      </main>
    </>
  );
}
