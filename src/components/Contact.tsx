"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="contact" className="bg-brisk-dark py-[120px]">
      <div
        ref={ref}
        className="mx-auto flex max-w-[720px] flex-col items-center px-6 text-center md:px-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-brisk-cyan" />
            <span className="font-display text-xs font-medium tracking-[0.15em] text-brisk-cyan">
              Contact
            </span>
            <span className="h-px w-8 bg-brisk-cyan" />
          </div>

          <h2 className="font-display text-3xl font-bold text-brisk-white md:text-4xl">
            Ready to get protected?
          </h2>
          <p className="mx-auto mt-4 max-w-md font-body text-sm leading-relaxed text-white/60">
            Tell us about your environment. We&apos;ll map the risks and show
            you how BRISK closes them — fast.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="mailto:hello@briskcyber.com"
              className="inline-flex items-center rounded-full bg-brisk-cyan px-7 py-3 font-display text-sm font-semibold text-brisk-dark transition-transform duration-200 hover:scale-[1.03]"
            >
              Email Us
            </a>
            <a
              href="#services"
              className="inline-flex items-center rounded-full border border-white/30 px-7 py-3 font-display text-sm font-semibold text-brisk-white transition-colors duration-200 hover:border-brisk-cyan hover:text-brisk-cyan"
            >
              View Solutions
            </a>
          </div>

          <div className="mt-12 space-y-3 font-body text-sm text-white/55">
            <p>
              <a
                href="mailto:hello@briskcyber.com"
                className="transition-colors hover:text-brisk-cyan"
              >
                hello@briskcyber.com
              </a>
            </p>
            <p>
              <a
                href="https://linkedin.com/company/brisk-cyber"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-brisk-cyan"
              >
                linkedin.com/company/brisk-cyber
              </a>
            </p>
            <p>
              <a
                href="https://github.com/shayanahmed1709/Briskwebsite"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-brisk-cyan"
              >
                github.com/shayanahmed1709/Briskwebsite
              </a>
            </p>
          </div>
        </motion.div>

        <footer className="mt-20 w-full border-t border-white/10 pt-8">
          <p className="font-display text-xs tracking-wide text-white/35">
            © 2026 BRISK. All rights reserved.
          </p>
        </footer>
      </div>
    </section>
  );
}
