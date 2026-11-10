"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="contact" className="bg-brisk-mist py-[120px]">
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
            <span className="h-px w-8 bg-brisk-blue" />
            <span className="section-eyebrow">Contact</span>
            <span className="h-px w-8 bg-brisk-blue" />
          </div>

          <h2 className="font-display text-4xl tracking-wide text-brisk-ink md:text-5xl">
            Ready to get protected?
          </h2>
          <p className="mx-auto mt-4 max-w-md font-body text-sm leading-relaxed text-brisk-steel">
            Tell us about your environment. We&apos;ll map the risks and show
            you how BRISK closes them — fast.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="mailto:hello@briskcyber.com"
              className="inline-flex items-center rounded-full bg-brisk-lime px-7 py-3 font-body text-sm font-semibold text-brisk-ink shadow-soft transition-transform duration-200 hover:scale-[1.03]"
            >
              Email Us
            </a>
            <a
              href="#services"
              className="inline-flex items-center rounded-full border border-white/80 bg-white/60 px-7 py-3 font-body text-sm font-semibold text-brisk-ink shadow-soft backdrop-blur-md transition-colors duration-200 hover:border-brisk-blue/40 hover:text-brisk-blue"
            >
              View Solutions
            </a>
          </div>

          <div className="mt-12 space-y-3 font-body text-sm text-brisk-steel">
            <p>
              <a
                href="mailto:hello@briskcyber.com"
                className="transition-colors hover:text-brisk-blue"
              >
                hello@briskcyber.com
              </a>
            </p>
            <p>
              <a
                href="https://linkedin.com/company/brisk-cyber"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-brisk-blue"
              >
                linkedin.com/company/brisk-cyber
              </a>
            </p>
            <p>
              <a
                href="https://github.com/shayanahmed1709/Briskwebsite"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-brisk-blue"
              >
                github.com/shayanahmed1709/Briskwebsite
              </a>
            </p>
          </div>
        </motion.div>

        <footer className="mt-20 w-full border-t border-brisk-ink/10 pt-8">
          <p className="font-body text-xs tracking-wide text-brisk-steel/70">
            © 2026 BRISK. All rights reserved.
          </p>
        </footer>
      </div>
    </section>
  );
}
