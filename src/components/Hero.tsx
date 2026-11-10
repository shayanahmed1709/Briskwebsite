"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const [videoReady, setVideoReady] = useState(false);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-brisk-dark">
      {/* Layer 1 — video */}
      {/* DROP YOUR FLOW VIDEO AT /public/videos/hero.mp4 */}
      <motion.video
        autoPlay
        muted
        loop
        playsInline
        src="/videos/hero.mp4"
        onLoadedData={() => setVideoReady(true)}
        initial={{ opacity: 0 }}
        animate={{ opacity: videoReady ? 1 : 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute inset-0 h-full w-full object-cover"
        style={{ objectFit: "cover", height: "100vh", width: "100%" }}
      />

      {/* Layer 2 — gradient overlay */}
      <div
        className="absolute inset-0 z-[2]"
        style={{
          background:
            "linear-gradient(to right, rgba(5,8,16,0.85) 40%, rgba(5,8,16,0.3) 100%)",
        }}
      />

      {/* Layer 3 — bottom fade */}
      <div
        className="absolute inset-x-0 bottom-0 z-[3] h-40"
        style={{
          background:
            "linear-gradient(to top, #050810 0%, rgba(5,8,16,0) 100%)",
        }}
      />

      {/* Layer 4 — BRISK watermark */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1, duration: 1.5 }}
        className="pointer-events-none absolute bottom-0 left-0 right-0 z-[1] select-none text-center font-display"
        style={{
          fontSize: "clamp(120px, 20vw, 220px)",
          fontWeight: 900,
          color: "rgba(0,194,255,0.04)",
          letterSpacing: "-0.02em",
          lineHeight: 0.85,
        }}
        aria-hidden
      >
        BRISK
      </motion.div>

      {/* Layer 5 — content */}
      <div className="absolute left-[6%] top-1/2 z-10 w-[min(520px,88%)] -translate-y-1/2">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-4 font-display text-[11px] tracking-[0.2em] text-brisk-cyan"
          style={{ fontWeight: 500 }}
        >
          CYBERSECURITY REIMAGINED
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="font-display leading-[1.05]"
          style={{
            fontSize: "clamp(44px, 6vw, 80px)",
            fontWeight: 800,
          }}
        >
          <span className="block text-white">Protect.</span>
          <span className="block text-brisk-cyan">Automate.</span>
          <span className="block text-brisk-cyan">Dominate.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.6 }}
          className="mt-4 max-w-[380px] font-body text-sm leading-[1.7] text-white/60"
        >
          AI-native defense that detects threats in real time, automates
          response, and keeps your enterprise ahead of every attack surface.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-8 flex flex-wrap items-center gap-3"
        >
          <a
            href="#services"
            className="inline-flex items-center gap-2 rounded-full bg-brisk-cyan px-6 py-3 font-display text-sm text-brisk-dark transition-transform duration-200 hover:scale-[1.03]"
            style={{
              fontWeight: 600,
              boxShadow: "0 0 28px rgba(0,194,255,0.25)",
            }}
          >
            Our Solutions
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center rounded-full border border-white/30 px-6 py-3 font-display text-sm text-brisk-white transition-colors duration-200 hover:border-brisk-cyan hover:text-brisk-cyan"
            style={{ fontWeight: 600 }}
          >
            Contact Us
          </a>
        </motion.div>
      </div>

      {/* Layer 6 — 3 glass cards (blur 20px) */}
      <div className="absolute right-[6%] top-1/2 z-10 hidden -translate-y-1/2 flex-col gap-4 md:flex">
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="rounded-2xl border border-white/10 px-5 py-4"
          style={{
            background: "rgba(255,255,255,0.06)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
          }}
        >
          <div className="mb-1 flex items-center gap-2">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            <span className="font-body text-xs font-medium text-brisk-white/50">
              LIVE
            </span>
          </div>
          <p className="font-display text-base text-brisk-white" style={{ fontWeight: 600 }}>
            Active Protection
          </p>
          <p className="mt-1 font-body text-xs text-white/50">
            24/7 monitoring engaged
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="rounded-2xl border border-white/10 px-5 py-4"
          style={{
            marginLeft: 24,
            background: "rgba(255,255,255,0.06)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
          }}
        >
          <p className="font-display text-base text-brisk-cyan" style={{ fontWeight: 600 }}>
            Integrated AI Agent
          </p>
          <p className="mt-1 font-body text-xs text-white/50">
            Autonomous threat correlation
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="rounded-2xl border border-white/10 px-5 py-4"
          style={{
            background: "rgba(255,255,255,0.06)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
          }}
        >
          <p
            className="font-display text-brisk-cyan"
            style={{ fontSize: 32, fontWeight: 800 }}
          >
            98%
          </p>
          <p className="font-body text-xs text-white/50">
            Threats neutralized in under 60s
          </p>
        </motion.div>
      </div>

      {/* Layer 7 — avatar cluster */}
      <div className="absolute bottom-8 right-[6%] z-10 hidden items-center gap-3 md:flex">
        <div className="flex -space-x-2">
          {["#1A3A6E", "#00C2FF", "#3B82F6", "#0A0F1E"].map((color, i) => (
            <div
              key={i}
              className="h-8 w-8 rounded-full border-2 border-brisk-dark"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
        <p className="font-body text-xs font-medium text-brisk-white/70">
          Active Users <span className="text-brisk-cyan">+1,200</span>
        </p>
      </div>
    </div>
  );
}
