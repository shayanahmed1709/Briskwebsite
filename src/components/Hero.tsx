"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Soft light Bluebird atmosphere — video omitted; drop hero.mp4 later if desired */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(145deg, #F7FBFE 0%, #E3F1FB 38%, #F2F8FC 68%, #FFFFFF 100%)",
        }}
      />

      {/* Soft light blobs */}
      <div
        className="pointer-events-none absolute -left-20 top-24 h-[460px] w-[460px] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(30,200,255,0.28) 0%, rgba(47,107,255,0.08) 48%, transparent 72%)",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-16 bottom-10 h-[520px] w-[520px] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(47,107,255,0.18) 0%, rgba(200,255,65,0.08) 40%, transparent 70%)",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute left-1/3 top-1/4 h-[280px] w-[280px] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(255,255,255,0.9) 0%, transparent 70%)",
        }}
        aria-hidden
      />

      {/* Soft veil for readability */}
      <div
        className="absolute inset-0 z-[2]"
        style={{
          background:
            "linear-gradient(105deg, rgba(247,251,254,0.72) 28%, rgba(247,251,254,0.22) 62%, rgba(255,255,255,0.05) 100%)",
        }}
      />

      {/* Giant translucent watermark */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1, duration: 1.5 }}
        className="pointer-events-none absolute inset-x-0 bottom-[-4%] z-[1] select-none overflow-hidden text-center font-display"
        style={{
          fontSize: "clamp(140px, 22vw, 260px)",
          color: "rgba(47,107,255,0.06)",
          letterSpacing: "0.01em",
          lineHeight: 0.82,
        }}
        aria-hidden
      >
        BRISK
      </motion.div>

      {/* Left content */}
      <div className="absolute left-[6%] top-[48%] z-10 w-[min(560px,88%)] -translate-y-1/2">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-5 font-body text-[11px] font-semibold uppercase tracking-[0.22em] text-brisk-blue"
        >
          CYBERSECURITY REIMAGINED
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="font-display leading-[0.92]"
          style={{ fontSize: "clamp(56px, 7.2vw, 92px)" }}
        >
          <span className="block text-brisk-ink">Protect.</span>
          <span className="block text-brisk-blue/90">Automate.</span>
          <span className="block text-brisk-ink/80">Dominate.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.6 }}
          className="mt-5 max-w-[380px] font-body text-[15px] leading-[1.7] text-brisk-steel"
        >
          AI-native defense that detects threats in real time, automates
          response, and keeps your enterprise ahead of every attack surface.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-9 flex flex-wrap items-center gap-3"
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

      {/* Floating glass cards — Bluebird-style stack */}
      <div className="absolute right-[5%] top-[46%] z-10 hidden w-[300px] -translate-y-1/2 md:block lg:w-[340px]">
        {/* Top card — Active Protection with lock mark */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="glass-card relative z-[3] flex items-center gap-4 p-4 pr-5"
        >
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brisk-cyan/30 to-brisk-blue/20 shadow-soft">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
              <rect x="7" y="12" width="14" height="11" rx="3" stroke="#2F6BFF" strokeWidth="1.6" fill="rgba(255,255,255,0.55)" />
              <path d="M10 12V10a4 4 0 0 1 8 0v2" stroke="#2F6BFF" strokeWidth="1.6" strokeLinecap="round" />
              <circle cx="14" cy="17.5" r="1.4" fill="#2F6BFF" />
            </svg>
          </div>
          <div>
            <div className="mb-0.5 flex items-center gap-2">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
              <span className="font-body text-[10px] font-semibold uppercase tracking-[0.14em] text-brisk-steel">
                Live
              </span>
            </div>
            <p className="font-body text-[15px] font-semibold text-brisk-ink">
              Active Protection
            </p>
            <p className="font-body text-xs text-brisk-steel">
              24/7 monitoring engaged
            </p>
          </div>
        </motion.div>

        {/* Middle card — AI Agent badge, offset */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="glass-card relative z-[2] mt-3 ml-8 flex items-center gap-4 p-4"
        >
          <div className="relative flex h-14 w-14 shrink-0 items-center justify-center">
            <span className="absolute inset-0 rounded-full bg-brisk-blue/15 blur-md" />
            <span className="relative flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-brisk-blue to-brisk-cyan shadow-[0_8px_24px_rgba(47,107,255,0.35)]">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
                <circle cx="12" cy="12" r="3" fill="white" />
                <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </span>
          </div>
          <div>
            <span className="mb-1 inline-flex rounded-full bg-brisk-lime/80 px-2.5 py-0.5 font-body text-[10px] font-semibold text-brisk-ink">
              Perfect Security
            </span>
            <p className="font-body text-[15px] font-semibold text-brisk-ink">
              Integrated AI Agent
            </p>
            <p className="font-body text-xs text-brisk-steel">
              Autonomous threat correlation
            </p>
          </div>
        </motion.div>

        {/* Bottom metric card */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="glass-card relative z-[1] mt-3 w-[70%] p-5"
        >
          <p className="font-display text-[52px] leading-none tracking-wide text-brisk-cyan">
            98%
          </p>
          <p className="mt-2 font-body text-xs leading-snug text-brisk-steel">
            Threats neutralized in under 60s
          </p>
        </motion.div>
      </div>

      {/* Avatar cluster */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.5 }}
        className="absolute bottom-8 right-[6%] z-10 hidden items-center gap-3 md:flex"
      >
        <div className="flex -space-x-2.5">
          {[
            "linear-gradient(135deg,#2F6BFF,#1EC8FF)",
            "linear-gradient(135deg,#1EC8FF,#C8FF41)",
            "linear-gradient(135deg,#0B1B33,#2F6BFF)",
            "linear-gradient(135deg,#C8FF41,#2F6BFF)",
          ].map((bg, i) => (
            <div
              key={i}
              className="h-9 w-9 rounded-full border-[2.5px] border-white shadow-soft"
              style={{ background: bg }}
            />
          ))}
        </div>
        <p className="font-body text-sm font-medium text-brisk-steel">
          <span className="font-semibold text-brisk-ink">+1,200</span> Active
          Users
        </p>
      </motion.div>
    </section>
  );
}
