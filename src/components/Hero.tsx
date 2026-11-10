"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const cardBase = {
  position: "relative" as const,
  backdropFilter: "blur(24px)",
  WebkitBackdropFilter: "blur(24px)",
  borderRadius: 16,
  padding: "14px 18px",
  boxShadow: "0 8px 32px rgba(0,0,0,0.25)",
};

export default function Hero() {
  const [videoReady, setVideoReady] = useState(false);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-[#EAF3FB]">
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

      {/* Layer 2 — soft light veil (does not crush video / watermark) */}
      <div
        className="absolute inset-0 z-[2]"
        style={{
          background:
            "linear-gradient(105deg, rgba(245,249,252,0.55) 28%, rgba(245,249,252,0.18) 58%, rgba(255,255,255,0.05) 100%)",
        }}
      />

      {/* Layer 3 — soft bottom fade into page */}
      <div
        className="absolute inset-x-0 bottom-0 z-[3] h-36"
        style={{
          background:
            "linear-gradient(to top, #F5F9FC 0%, rgba(245,249,252,0) 100%)",
        }}
      />

      {/* Layer 4 — BRISK watermark (clearly visible like BLUEBIRD) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1, duration: 1.5 }}
        className="pointer-events-none absolute inset-x-0 bottom-[-2%] z-[1] select-none overflow-hidden text-center font-display"
        style={{
          fontSize: "clamp(140px, 22vw, 260px)",
          fontWeight: 700,
          color: "rgba(11,27,51,0.10)",
          letterSpacing: "-0.02em",
          lineHeight: 0.82,
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
          className="font-display leading-[1.05] text-brisk-ink"
          style={{
            fontSize: "clamp(44px, 6vw, 80px)",
            fontWeight: 700,
          }}
        >
          <span className="block">Protect.</span>
          <span className="block text-brisk-cyan">Automate.</span>
          <span className="block text-brisk-blue">Dominate.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.6 }}
          className="mt-4 max-w-[380px] font-body text-sm leading-[1.7] text-brisk-steel"
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
            className="inline-flex items-center gap-3 rounded-full bg-brisk-blue py-2 pl-6 pr-2 font-body text-sm font-semibold text-white shadow-[0_14px_34px_rgba(47,107,255,0.35)] transition-transform duration-200 hover:scale-[1.03]"
          >
            Our Solutions
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-brisk-blue">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                <path
                  d="M3 8h9M8.5 4.5 12 8l-3.5 3.5"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center rounded-full border border-white/90 bg-white/55 px-6 py-3.5 font-body text-sm font-semibold text-brisk-ink shadow-soft backdrop-blur-md transition-colors duration-200 hover:bg-white/80"
          >
            Contact Us
          </a>
        </motion.div>
      </div>

      {/* Layer 6 — Bluebird offset glass card stack (exact layout) */}
      <div
        className="absolute z-10 hidden md:flex md:flex-col"
        style={{
          right: "5%",
          top: "50%",
          transform: "translateY(-50%)",
          width: 320,
          gap: 0,
          background: "none",
        }}
      >
        {/* Card 1 — Active Protection */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          style={{
            ...cardBase,
            marginLeft: 0,
            marginBottom: -8,
            width: 260,
            background: "rgba(255,255,255,0.12)",
            border: "1px solid rgba(255,255,255,0.25)",
          }}
        >
          <div className="mb-1 flex items-center gap-2">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            <span className="font-body text-[10px] font-semibold uppercase tracking-[0.14em] text-brisk-ink/60">
              LIVE
            </span>
          </div>
          <p className="font-display text-[15px] text-brisk-ink" style={{ fontWeight: 600 }}>
            Active Protection
          </p>
          <p className="mt-1 font-body text-xs text-brisk-steel">
            24/7 monitoring engaged
          </p>
        </motion.div>

        {/* Card 2 — Integrated AI Agent (KEY offset) */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          style={{
            ...cardBase,
            marginLeft: 48,
            marginBottom: -8,
            width: 240,
            background: "rgba(0,194,255,0.15)",
            border: "1px solid rgba(0,194,255,0.35)",
          }}
        >
          <span className="mb-2 inline-flex rounded-full bg-brisk-lime/90 px-2.5 py-0.5 font-body text-[10px] font-semibold uppercase tracking-wide text-brisk-ink">
            Perfect Security
          </span>
          <p className="font-display text-[15px] text-brisk-ink" style={{ fontWeight: 600 }}>
            Integrated AI Agent
          </p>
          <p className="mt-1 font-body text-xs text-brisk-steel">
            Autonomous threat correlation
          </p>
        </motion.div>

        {/* Card 3 — 98% */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          style={{
            ...cardBase,
            marginLeft: 16,
            width: 220,
            background: "rgba(255,255,255,0.08)",
            border: "1px solid rgba(255,255,255,0.18)",
          }}
        >
          <p
            className="font-display leading-none text-brisk-cyan"
            style={{ fontSize: 40, fontWeight: 700 }}
          >
            98%
          </p>
          <p className="mt-2 font-body text-xs leading-snug text-brisk-steel">
            Threats neutralized in under 60s, redefining enterprise defense.
          </p>
        </motion.div>
      </div>

      {/* Layer 7 — avatar cluster */}
      <div className="absolute bottom-8 right-[5%] z-10 hidden items-center gap-3 md:flex">
        <div className="flex -space-x-2">
          {["#2F6BFF", "#00C2FF", "#C8FF41", "#0B1B33"].map((color, i) => (
            <div
              key={i}
              className="h-8 w-8 rounded-full border-2 border-white"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
        <p className="font-body text-xs font-medium text-brisk-steel">
          Active Users <span className="font-semibold text-brisk-blue">+1,200</span>
        </p>
      </div>
    </div>
  );
}
