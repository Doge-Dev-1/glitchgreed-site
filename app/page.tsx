"use client";

import { useState, useRef } from "react";

export default function Home() {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleSound = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <main className="min-h-screen bg-black text-white overflow-hidden font-mono">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center relative px-6">
        <div className="absolute inset-0 bg-[radial-gradient(#22ff88_0.8px,transparent_1px)] bg-size-[25px_25px] opacity-10"></div>

        {/* Video Mascot */}
        <div className="relative mb-8">
          <video
            ref={videoRef}
            src="/glitch-mascot.mp4"
            autoPlay
            loop
            muted={isMuted}
            playsInline
            className="glitch rounded-2xl border-4 border-[#22ff88] shadow-2xl w-full max-w-md h-auto"
          />

          <div className="absolute bottom-0 left-0 right-0 h-16 bg-linear-to-t from-black via-black/90 to-transparent pointer-events-none"></div>

          <button
            onClick={toggleSound}
            className="absolute -bottom-4 right-4 bg-black/80 hover:bg-black text-white px-5 py-2 rounded-full text-sm flex items-center gap-2 border border-[#22ff88] transition z-10"
          >
            {isMuted ? "🔇 Sound Off" : "🔊 Sound On"}
          </button>
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-4 text-center">
          GLITCH<span className="text-[#22ff88]">GREED</span>
        </h1>

        <p className="text-3xl sm:text-4xl md:text-5xl mb-10 text-center neon-text">
          Rug yourself... into profit.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="https://pump.fun"
            target="_blank"
            className="bg-white text-black px-10 py-4 text-xl font-bold rounded-2xl hover:scale-105 transition text-center"
          >
            Launching Soon on Pump.fun
          </a>

          <a
            href="https://t.me/+2R_Go8SiD20xOGM1"
            target="_blank"
            className="bg-[#229ED9] text-white px-10 py-4 text-xl font-bold rounded-2xl hover:scale-105 transition text-center"
          >
            Join Telegram
          </a>

          <a
            href="https://x.com/GlitchGreed"
            target="_blank"
            className="bg-black border-2 border-white text-white px-10 py-4 text-xl font-bold rounded-2xl hover:scale-105 transition text-center"
          >
            Follow on X
          </a>
        </div>

        <p className="mt-12 text-lg sm:text-xl opacity-70 text-center max-w-md">
          The chaotic glitch goblin that turns your worst trades into gains 🟥 →
          🟩
        </p>
      </section>

      {/* Glitch Vault Teaser */}
      <section className="py-24 bg-zinc-950 border-t border-zinc-800">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-6">GLITCH VAULT</h2>
          <p className="text-2xl mb-12 text-[#22ff88]">
            Staking Rewards Coming After Launch
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-zinc-900 p-8 rounded-3xl">
              <h3 className="text-2xl mb-4">Earn $GLITCH</h3>
              <p className="text-zinc-400">
                Stake to earn from the 20% treasury
              </p>
            </div>
            <div className="bg-zinc-900 p-8 rounded-3xl">
              <h3 className="text-2xl mb-4">Glitch Events</h3>
              <p className="text-zinc-400">Random reward drops to stakers</p>
            </div>
            <div className="bg-zinc-900 p-8 rounded-3xl">
              <h3 className="text-2xl mb-4">Worst Trade Club</h3>
              <p className="text-zinc-400">Submit rugs → Win airdrops & NFTs</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 text-center border-t border-zinc-800">
        <p className="mb-4">Built with chaos on Solana</p>
        <div className="flex justify-center gap-6 text-lg">
          <a
            href="https://t.me/+2R_Go8SiD20xOGM1"
            target="_blank"
            className="text-[#229ED9] hover:underline"
          >
            Telegram
          </a>
          <a
            href="https://x.com/GlitchGreed"
            target="_blank"
            className="text-white hover:underline"
          >
            X / Twitter
          </a>
        </div>
      </footer>
    </main>
  );
}
