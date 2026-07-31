"use client";

import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [ready, setReady] = useState(false);
  const [muted, setMuted] = useState(false);

  useEffect(() => {
    function startOnOpen() {
      const audio = audioRef.current;
      if (!audio) return;
      // fired from the seal tap — a real user gesture, so autoplay-with-sound is allowed
      audio.volume = 0.5;
      audio.play().catch(() => {
        // browser still blocked it — the toggle button lets the guest start it manually
      });
      setReady(true);
    }

    window.addEventListener("invitation:opened", startOnOpen);
    return () => window.removeEventListener("invitation:opened", startOnOpen);
  }, []);

  function toggleMute() {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      audio.play().catch(() => {});
      setMuted(false);
      return;
    }
    audio.muted = !audio.muted;
    setMuted(audio.muted);
  }

  return (
    <>
      {/* Drop your track at public/music/intro-music.mp3 */}
      <audio ref={audioRef} src="/music/intro-music.mp3" loop preload="none" />

      <button
        type="button"
        onClick={toggleMute}
        aria-label={muted ? "Unmute music" : "Mute music"}
        className={`fixed top-5 right-5 z-[60] flex h-10 w-10 items-center justify-center rounded-full border border-[#B08D57]/50 bg-[#F8F3EA]/75 text-[#651B2A] backdrop-blur-sm transition-opacity duration-700 ${
          ready ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        {muted ? <VolumeX size={16} /> : <Volume2 size={16} />}
      </button>
    </>
  );
}
