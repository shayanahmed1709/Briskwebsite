"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "99.9%", label: "Uptime SLA" },
  { value: "< 15m", label: "Mean response" },
  { value: "500+", label: "Assets guarded" },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div className="bg-brisk-navy py-[120px]">
      <div
        ref={ref}
        className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-16 px-6 md:grid-cols-2 md:px-10"
      >
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-8 bg-brisk-cyan" />
            <span className="font-display text-xs tracking-[0.15em] text-brisk-cyan" style={{ fontWeight: 500 }}>
              About BRISK
            </span>
          </div>

          <h2
            className="font-display text-3xl leading-tight text-brisk-white md:text-4xl"
            style={{ fontWeight: 700 }}
          >
            Security engineered for speed, clarity, and control.
          </h2>

          <p className="mt-5 max-w-md font-body text-sm leading-relaxed text-white/60">
            BRISK fuses human expertise with autonomous AI agents to close the
            gap between detection and action. We harden your stack, hunt
            emerging threats, and give your team a single pane of truth —
            without the noise.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-full border border-white/10 px-5 py-2.5"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                }}
              >
                <span className="font-display text-sm text-brisk-cyan" style={{ fontWeight: 600 }}>
                  {stat.value}
                </span>
                <span className="ml-2 font-body text-xs text-white/50">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          className="relative flex min-h-[340px] items-center justify-center rounded-2xl border border-white/10 p-10"
          style={{
            background: "rgba(255,255,255,0.06)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
          }}
        >
          <div className="relative flex h-56 w-56 items-center justify-center">
            <span className="absolute inset-0 animate-ping rounded-full border border-brisk-cyan/20 [animation-duration:3s]" />
            <span className="absolute inset-4 animate-ping rounded-full border border-brisk-cyan/30 [animation-duration:2.5s] [animation-delay:0.4s]" />
            <span className="absolute inset-10 animate-ping rounded-full border border-brisk-cyan/40 [animation-duration:2s] [animation-delay:0.8s]" />
            <span className="absolute inset-[72px] rounded-full bg-brisk-cyan/20" />
            <span className="relative z-10 h-4 w-4 rounded-full bg-brisk-cyan shadow-[0_0_20px_rgba(0,194,255,0.8)]" />
          </div>
          <p className="absolute bottom-8 left-0 right-0 text-center font-display text-sm tracking-wide text-brisk-white/80" style={{ fontWeight: 600 }}>
            Threat Radar
          </p>
        </motion.div>
      </div>
    </div>
  );
}
