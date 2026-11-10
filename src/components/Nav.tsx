"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = [
  { label: "home", href: "#home" },
  { label: "about", href: "#about" },
  { label: "services", href: "#services" },
  { label: "industries", href: "#industries" },
  { label: "threat intelligence", href: "#threat-intelligence" },
  { label: "contact", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 w-full"
      animate={{
        backgroundColor: scrolled
          ? "rgba(255,255,255,0.78)"
          : "rgba(255,255,255,0)",
      }}
      transition={{ duration: 0.3 }}
      style={{
        backdropFilter: scrolled ? "blur(16px)" : "blur(0px)",
        WebkitBackdropFilter: scrolled ? "blur(16px)" : "blur(0px)",
        borderBottom: scrolled
          ? "1px solid rgba(11,27,51,0.06)"
          : "1px solid transparent",
        boxShadow: scrolled ? "0 8px 30px rgba(11,27,51,0.05)" : "none",
      }}
    >
      <nav className="mx-auto flex h-[72px] max-w-[1400px] items-center justify-between px-6 md:px-10">
        <a
          href="#home"
          className="flex items-center gap-2.5 font-display text-[22px] tracking-tight text-brisk-ink"
          style={{ fontWeight: 700 }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path
              d="M12 2L3.5 6.5V12C3.5 17.25 7.4 21.74 12 23C16.6 21.74 20.5 17.25 20.5 12V6.5L12 2Z"
              stroke="#00C2FF"
              strokeWidth="1.5"
              fill="rgba(0,194,255,0.12)"
            />
            <path
              d="M12 7V13M12 16.5V17"
              stroke="#00C2FF"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
          BRISK
        </a>

        <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-7 lg:flex">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="font-body text-[13px] font-medium text-brisk-steel transition-colors duration-200 hover:text-brisk-ink"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="#case-studies"
            className="hidden rounded-full border border-white/80 bg-white/55 px-5 py-2.5 font-body text-sm font-semibold text-brisk-ink shadow-soft backdrop-blur-md transition-colors duration-200 hover:bg-white/80 sm:inline-flex"
          >
            Resources
          </a>
          <a
            href="#contact"
            className="rounded-full bg-brisk-lime px-5 py-2.5 font-body text-sm font-semibold text-brisk-ink shadow-soft transition-transform duration-200 hover:scale-[1.03]"
          >
            Get Protected
          </a>
        </div>
      </nav>
    </motion.header>
  );
}
