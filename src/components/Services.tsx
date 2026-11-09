"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    title: "Managed Detection & Response",
    body: "Around-the-clock SOC coverage with AI-assisted triage that cuts alert noise and accelerates containment.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
        <circle cx="14" cy="14" r="10" stroke="#00C2FF" strokeWidth="1.5" />
        <circle cx="14" cy="14" r="4" stroke="#00C2FF" strokeWidth="1.5" />
        <path d="M14 2v3M14 23v3M2 14h3M23 14h3" stroke="#00C2FF" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Vulnerability Management",
    body: "Continuous scanning, prioritized remediation, and exposure scoring mapped to your real attack surface.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
        <path d="M14 3L4 8v7c0 6 4.5 10.5 10 12 5.5-1.5 10-6 10-12V8L14 3Z" stroke="#00C2FF" strokeWidth="1.5" />
        <path d="M10 14l3 3 5-6" stroke="#00C2FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Cloud Security Posture",
    body: "Lock down AWS, Azure, and GCP with misconfiguration detection, least-privilege drift alerts, and policy as code.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
        <path d="M8 18c-3 0-5-2-5-4.5S5.5 9 8.5 9c.5-3 3-5 6-5 3.5 0 6 2.5 6.3 5.8C23 10 25 12 25 14.5S23 19 20.5 19H8Z" stroke="#00C2FF" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Identity & Access Control",
    body: "Zero-trust identity pipelines — MFA enforcement, privileged access review, and anomalous login detection.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
        <circle cx="14" cy="10" r="4" stroke="#00C2FF" strokeWidth="1.5" />
        <path d="M6 23c0-4 3.5-7 8-7s8 3 8 7" stroke="#00C2FF" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Security Automation",
    body: "Playbooks that quarantine hosts, revoke tokens, and open tickets the moment a high-fidelity signal fires.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
        <path d="M8 6h12v4H8V6ZM8 12h12v4H8v-4ZM8 18h8v4H8v-4Z" stroke="#00C2FF" strokeWidth="1.5" strokeLinejoin="round" />
        <circle cx="21" cy="20" r="3" stroke="#00C2FF" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "Compliance & Governance",
    body: "Evidence collection and control mapping for SOC 2, ISO 27001, HIPAA, and PCI — audit-ready by design.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
        <rect x="5" y="4" width="18" height="20" rx="2" stroke="#00C2FF" strokeWidth="1.5" />
        <path d="M9 10h10M9 14h10M9 18h6" stroke="#00C2FF" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="services" className="bg-brisk-dark py-[120px]">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        <div className="mb-14 max-w-xl">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-8 bg-brisk-cyan" />
            <span className="font-display text-xs font-medium tracking-[0.15em] text-brisk-cyan">
              Services
            </span>
          </div>
          <h2 className="font-display text-3xl font-bold text-brisk-white md:text-4xl">
            Defense that covers every layer.
          </h2>
          <p className="mt-4 font-body text-sm leading-relaxed text-white/60">
            Six core offerings engineered to detect, contain, and recover —
            without slowing the business down.
          </p>
        </div>

        <div
          ref={ref}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service, i) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl border border-white/10 bg-brisk-glass p-7 backdrop-blur-sm transition-colors duration-200 hover:border-brisk-cyan/40"
            >
              <div className="mb-5">{service.icon}</div>
              <h3 className="font-display text-lg font-semibold text-brisk-white">
                {service.title}
              </h3>
              <p className="mt-3 font-body text-sm leading-relaxed text-white/55">
                {service.body}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
