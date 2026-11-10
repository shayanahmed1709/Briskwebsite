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
    <section id="case-studies" className="bg-brisk-sky py-[120px]">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        <div className="mb-14 max-w-xl">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-8 bg-brisk-blue" />
            <span className="section-eyebrow">Case Studies</span>
          </div>
          <h2 className="font-display text-4xl tracking-wide text-brisk-ink md:text-5xl">
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
              className="glass-card flex flex-col p-7"
            >
              <span className="mb-4 inline-flex w-fit rounded-full border border-brisk-blue/25 bg-brisk-blue/5 px-3 py-1 font-body text-[11px] font-medium tracking-wide text-brisk-blue">
                {c.tag}
              </span>
              <h3 className="font-body text-lg font-semibold text-brisk-ink">
                {c.title}
              </h3>
              <div className="mt-5">
                <p className="font-display text-5xl tracking-wide text-brisk-cyan">
                  {c.metric}
                </p>
                <p className="mt-1 font-body text-xs text-brisk-steel">
                  {c.metricLabel}
                </p>
              </div>
              <p className="mt-5 font-body text-sm leading-relaxed text-brisk-steel">
                {c.body}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
