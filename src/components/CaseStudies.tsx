"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const cases = [
  {
    tag: "Finance",
    title: "Global payments platform",
    metric: "92%",
    metricLabel: "faster containment",
    body: "Cut mean-time-to-contain from 4 hours to under 20 minutes by wiring BRISK playbooks into their existing SIEM and endpoint fleet.",
  },
  {
    tag: "Healthcare",
    title: "Regional hospital network",
    metric: "0",
    metricLabel: "ransomware dwell days",
    body: "Blocked a lateral ransomware attempt mid-spread. Auto-isolation + identity freeze kept clinical systems online through the incident.",
  },
  {
    tag: "Technology",
    title: "Series C SaaS unicorn",
    metric: "40%",
    metricLabel: "SOC ticket reduction",
    body: "AI triage filtered low-fidelity noise so analysts focused on real threats — unlocking SOC 2 Type II without adding headcount.",
  },
];

export default function CaseStudies() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div className="bg-brisk-navy py-[120px]">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        <div className="mb-14 max-w-xl">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-8 bg-brisk-cyan" />
            <span className="font-display text-xs tracking-[0.15em] text-brisk-cyan" style={{ fontWeight: 500 }}>
              Case Studies
            </span>
          </div>
          <h2 className="font-display text-3xl text-brisk-white md:text-4xl" style={{ fontWeight: 700 }}>
            Outcomes that speak in metrics.
          </h2>
        </div>

        <div ref={ref} className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {cases.map((c, i) => (
            <motion.article
              key={c.title}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="flex flex-col rounded-2xl border border-white/10 p-7"
              style={{
                background: "rgba(255,255,255,0.06)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
              }}
            >
              <span className="mb-4 inline-flex w-fit rounded-full border border-brisk-cyan/40 px-3 py-1 font-body text-[11px] font-medium tracking-wide text-brisk-cyan">
                {c.tag}
              </span>
              <h3 className="font-display text-lg text-brisk-white" style={{ fontWeight: 600 }}>
                {c.title}
              </h3>
              <div className="mt-5">
                <p className="font-display text-4xl text-brisk-cyan" style={{ fontWeight: 800 }}>
                  {c.metric}
                </p>
                <p className="mt-1 font-body text-xs text-white/50">
                  {c.metricLabel}
                </p>
              </div>
              <p className="mt-5 font-body text-sm leading-relaxed text-white/55">
                {c.body}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
