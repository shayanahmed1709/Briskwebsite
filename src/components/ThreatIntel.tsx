"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const logs = [
  {
    time: "02:14:33",
    tag: "ANOMALY DETECTED",
    msg: "unusual outbound traffic from 10.0.4.22",
  },
  {
    time: "02:14:34",
    tag: "AI AGENT ENGAGED",
    msg: "correlating IOC signatures across endpoints",
  },
  {
    time: "02:14:35",
    tag: "THREAT CLASSIFIED",
    msg: "ransomware precursor (confidence 97%)",
  },
  {
    time: "02:14:36",
    tag: "AUTO-CONTAINMENT",
    msg: "endpoint isolated · lateral movement blocked",
  },
  {
    time: "02:14:37",
    tag: "ALERT SENT",
    msg: "SOC notified via Slack + email",
  },
];

export default function ThreatIntel() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div className="bg-brisk-dark py-[120px]">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-14 px-6 md:grid-cols-2 md:px-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-8 bg-brisk-cyan" />
            <span className="font-display text-xs tracking-[0.15em] text-brisk-cyan" style={{ fontWeight: 500 }}>
              Threat Intelligence
            </span>
          </div>
          <h2 className="font-display text-3xl text-brisk-white md:text-4xl" style={{ fontWeight: 700 }}>
            See the attack. Stop it. Prove it.
          </h2>
          <p className="mt-5 max-w-md font-body text-sm leading-relaxed text-white/60">
            Our AI agents watch every signal, correlate IOCs in milliseconds,
            and execute containment playbooks before an analyst opens the
            ticket. Full forensic trail included.
          </p>
        </motion.div>

        <div
          ref={ref}
          className="overflow-hidden rounded-2xl border border-white/10 bg-[#03060c] p-5 font-mono text-[12px] leading-relaxed shadow-[0_0_40px_rgba(0,194,255,0.06)] md:p-6"
          style={{
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
          }}
        >
          <div className="mb-4 flex items-center gap-2 border-b border-white/10 pb-3">
            <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
            <span className="ml-3 font-body text-[11px] text-white/40">
              brisk-soc — live feed
            </span>
          </div>

          <div className="space-y-3">
            {logs.map((line, i) => (
              <motion.p
                key={line.time}
                initial={{ opacity: 0, x: 12 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.3 }}
                className="text-white/70"
              >
                <span className="text-white/35">[{line.time}]</span>{" "}
                <span className="text-brisk-cyan">{line.tag}</span>
                {" — "}
                <span>{line.msg}</span>
              </motion.p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
