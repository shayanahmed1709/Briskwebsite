"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const industries = [
  "Finance",
  "Healthcare",
  "Technology",
  "Government",
  "Energy & Utilities",
  "Retail & eCommerce",
  "Manufacturing",
  "Legal & Compliance",
];

export default function Industries() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div className="bg-brisk-navy py-[120px]">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-8 bg-brisk-cyan" />
            <span className="font-display text-xs tracking-[0.15em] text-brisk-cyan" style={{ fontWeight: 500 }}>
              Industries
            </span>
          </div>
          <h2 className="font-display text-3xl text-brisk-white md:text-4xl" style={{ fontWeight: 700 }}>
            Built for regulated, high-stakes environments.
          </h2>
          <p className="mt-4 max-w-lg font-body text-sm leading-relaxed text-white/60">
            From capital markets to clinical systems — BRISK adapts controls to
            the risk profile of your sector.
          </p>
        </motion.div>

        <div className="hide-scrollbar mt-12 flex gap-4 overflow-x-auto pb-2">
          {industries.map((name, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.06 }}
              className="shrink-0 rounded-full border border-white/15 px-7 py-3 font-display text-sm text-brisk-white/80 transition-colors duration-200 hover:border-brisk-cyan hover:text-brisk-cyan"
              style={{
                fontWeight: 500,
                background: "rgba(255,255,255,0.06)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
              }}
            >
              {name}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
