"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* DROP YOUR FLOW VIDEO AT /public/videos/hero.mp4 */}
      <video
        autoPlay
        muted
        loop
        playsInline
        src="/videos/hero.mp4"
        className="absolute inset-0 h-full w-full object-cover"
        style={{
          background:
            "linear-gradient(135deg, #050810 0%, #0A1628 50%, #050810 100%)",
        }}
      />

      <div
        className="absolute inset-0 z-[2]"
        style={{
          background:
            "linear-gradient(to right, rgba(5,8,16,0.85) 40%, rgba(5,8,16,0.3) 100%)",
        }}
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1, duration: 1.5 }}
        className="pointer-events-none absolute bottom-0 left-0 right-0 z-[1] select-none text-center font-display font-bold tracking-[-0.02em]"
        style={{
          fontSize: "clamp(120px, 20vw, 220px)",
          color: "rgba(0,194,255,0.04)",
          lineHeight: 0.85,
        }}
        aria-hidden
      >
        BRISK
      </motion.div>

      <div className="absolute left-[6%] top-1/2 z-10 w-[min(520px,88%)] -translate-y-1/2">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-4 font-display text-[11px] font-medium tracking-[0.2em] text-brisk-cyan"
        >
          CYBERSECURITY REIMAGINED
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="font-display font-bold leading-[1.05]"
          style={{ fontSize: "clamp(44px, 6vw, 80px)" }}
        >
          <span className="block text-white">Protect.</span>
          <span className="block text-brisk-cyan">Automate. Dominate.</span>
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
            className="inline-flex items-center gap-2 rounded-full bg-brisk-cyan px-6 py-3 font-display text-sm font-semibold text-brisk-dark transition-transform duration-200 hover:scale-[1.03]"
            style={{
              boxShadow: "0 0 0 0 rgba(0,194,255,0)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow =
                "0 0 28px rgba(0,194,255,0.45)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow =
                "0 0 0 0 rgba(0,194,255,0)";
            }}
          >
            Our Solutions
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden
            >
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
            className="inline-flex items-center rounded-full border border-white/30 px-6 py-3 font-display text-sm font-semibold text-brisk-white transition-colors duration-200 hover:border-brisk-cyan hover:text-brisk-cyan"
          >
            Contact Us
          </a>
        </motion.div>
      </div>

      <div className="absolute right-[6%] top-1/2 z-10 hidden -translate-y-1/2 flex-col gap-4 md:flex">
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="rounded-2xl border border-white/10 bg-brisk-glass px-5 py-4 backdrop-blur-md"
        >
          <div className="mb-1 flex items-center gap-2">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            <span className="font-display text-xs font-medium text-brisk-white/50">
              LIVE
            </span>
          </div>
          <p className="font-display text-base font-semibold text-brisk-white">
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
          className="ml-6 rounded-2xl border border-white/10 bg-brisk-glass px-5 py-4 backdrop-blur-md"
          style={{ marginLeft: 24 }}
        >
          <p className="font-display text-base font-semibold text-brisk-cyan">
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
          className="rounded-2xl border border-white/10 bg-brisk-glass px-5 py-4 backdrop-blur-md"
        >
          <p
            className="font-display font-bold text-brisk-cyan"
            style={{ fontSize: 32 }}
          >
            98%
          </p>
          <p className="font-body text-xs text-white/50">
            Threats neutralized in under 60s
          </p>
        </motion.div>
      </div>

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
        <p className="font-display text-xs font-medium text-brisk-white/70">
          Active Users{" "}
          <span className="text-brisk-cyan">+1,200</span>
        </p>
      </div>
    </section>
  );
}
