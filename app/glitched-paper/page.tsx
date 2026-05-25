"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

export default function GlitchedPaper() {
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
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 border-b border-zinc-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link
            href="/"
            className="text-[#22ff88] hover:text-white transition font-bold"
          >
            ← HOME
          </Link>
          <h1 className="text-xl font-black tracking-tighter">
            THE GLITCHED PAPER
          </h1>
        </div>
      </nav>

      <div className="pt-20">
        {/* Hero Video + Title */}
        <section className="min-h-screen flex flex-col items-center justify-center relative px-6">
          <div className="absolute inset-0 bg-[radial-gradient(#22ff88_0.8px,transparent_1px)] bg-size-[25px_25px] opacity-10"></div>

          <div className="relative mb-8">
            <video
              ref={videoRef}
              src="/greencandle.mp4"
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

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-6 text-center">
            GLITCHED<span className="text-[#22ff88]">PAPER</span>
          </h1>
          <p className="text-2xl text-[#22ff88] mb-12">
            Official Chaos Manifesto of GlitchGreed
          </p>
        </section>

        {/* Content */}
        <section className="max-w-4xl mx-auto px-6 pb-24 space-y-16 text-lg leading-relaxed">
          <div>
            <h2 className="text-4xl font-bold mb-8">The Glitch Has Awakened</h2>
            <p className="mb-6">
              Out of the static. Out of the broken charts. Out of the endless
              sea of rugged degens...
              <br />
              <strong>HE RISES.</strong>
            </p>
            <p className="mb-6">
              A pixelated, money-obsessed, screen-tearing goblin who doesn’t
              just watch the chaos —<strong>he fucking eats it.</strong>
            </p>
            <p>
              He chews red candles for breakfast.
              <br />
              He shits green candles for dinner.
              <br />
              And he laughs in 8-bit while doing it.
            </p>
            <p className="mt-8 font-bold">
              This is GlitchGreed.
              <br />
              Not a coin.
              <br />A glitch in the fucking matrix that turns your worst rugs
              into wins.
            </p>
          </div>

          {/* First Image - Stronger watermark cover */}
          <div className="relative my-12">
            <Image
              src="/greencandle.jpg"
              alt="Green Candle Glitch"
              width={420}
              height={420}
              className="glitch rounded-2xl border-4 border-[#22ff88] w-full max-w-md h-auto mx-auto"
            />
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-linear-to-t from-black via-black/95 to-transparent pointer-events-none"></div>
          </div>

          <div>
            <h2 className="text-4xl font-bold mb-8">Our Twisted Philosophy</h2>
            <p>Crypto is pain. We turn pain into profit.</p>
            <p>
              You got rugged? Good. Send the screenshot. The Glitch is hungry.
            </p>
            <p>
              We don’t promise you’ll never lose money. We promise that when you
              do — the Glitch has your back.
            </p>
          </div>

          <div>
            <h2 className="text-4xl font-bold mb-8">
              Tokenomics — Transparent Chaos
            </h2>
            <p>
              <strong>Total Supply:</strong> 1,000,000,000 $GLITCH (Locked.
              Fixed. No bullshit.)
            </p>

            <div className="my-8 bg-zinc-900 p-8 rounded-3xl">
              <p className="font-bold mb-4">Creator Bag Split (200M):</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>120M</strong> → Glitch Vault (Staking rewards +
                  events)
                </li>
                <li>
                  <strong>80M</strong> → Marketing, giveaways, development, team
                  & rainy day fund
                </li>
              </ul>
            </div>

            <p>
              All wallet addresses will be posted publicly on this website — you
              can watch every single movement. Full transparency or we eat our
              own goblin.
            </p>
          </div>

          {/* Second Image - Stronger watermark cover */}
          <div className="relative my-12">
            <Image
              src="/rugged.png"
              alt="Rugged Moment"
              width={420}
              height={420}
              className="glitch rounded-2xl border-4 border-[#22ff88] w-full max-w-md h-auto mx-auto"
            />
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-linear-to-t from-black via-black/95 to-transparent pointer-events-none"></div>
          </div>

          <div>
            <h2 className="text-4xl font-bold mb-8">
              The Glitch Vault — Staking Mechanics
            </h2>
            <p>
              After Pump.fun graduation, we activate the Glitch Vault — our main
              utility engine.
            </p>
            <ul className="list-disc pl-6 space-y-3 mt-4">
              <li>
                Stake your $GLITCH to earn yield directly from the 120M
                dedicated treasury pool
              </li>
              <li>Rewards are emitted over time + boosted by Glitch Events</li>
              <li>
                <strong>Glitch Events</strong> (every 48-72 hours): Random token
                drops, buybacks, and redistributions — only to active stakers
              </li>
              <li>
                <strong>Worst Trade Club</strong>: Submit your most brutal rug
                screenshots → Top entries win major airdrops + NFTs
              </li>
              <li>
                Lock Tiers: Flexible (Base) • 7 days (1.5x) • 30 days (2.5x) •
                90 days (4x + exclusive perks)
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-4xl font-bold mb-8">
              Glitched Legends NFT Collection
            </h2>
            <p>
              A limited collection of Glitched Legend NFTs tied directly to the
              ecosystem:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>
                <strong>Common</strong> — Basic staking boost (+10-20% APY)
              </li>
              <li>
                <strong>Rare</strong> — Higher boost + access to special Glitch
                Events
              </li>
              <li>
                <strong>Epic / Legendary</strong> — Massive multipliers, revenue
                share, custom meme generator access, priority rewards
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-4xl font-bold mb-8">
              The Glitched Future (This Is NOT a Pump & Dump)
            </h2>
            <p>We’re building something that lives for years, not hours.</p>
            <p className="mt-6">
              <strong>Phase 1:</strong> The Awakening (Now)
            </p>
            <p>
              <strong>Phase 2:</strong> The Glitch Spreads
            </p>
            <p>
              <strong>Phase 3:</strong> The Infinite Glitch — Advanced DeFi,
              gamification, NFT marketplace, IRL events, and becoming the
              default chaos hub on Solana.
            </p>
          </div>

          <div className="text-center pt-12">
            <h2 className="text-4xl font-bold mb-6">
              Final Transmission from the Goblin
            </h2>
            <p className="text-xl">
              The charts will always bleed.
              <br />
              The bots will always snipe.
              <br />
              The rugs will always happen.
              <br />
              <br />
              But now… <strong>you have a glitch on your team.</strong>
              <br />
              <br />
              Load up. Hold through the noise.
              <br />
              Submit your worst trade like a badge of honor.
              <br />
              <br />
              Because when the Glitch eats enough pain…
              <br />
              <strong>we all feast.</strong>
            </p>
            <p className="text-3xl mt-12 text-[#22ff88]">
              Are you ready to get completely, beautifully, Glitched?
            </p>
            <p className="text-2xl mt-8">— GlitchGreed 🟩💀📈</p>
          </div>
        </section>
      </div>
    </main>
  );
}
