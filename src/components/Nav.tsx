"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Industries", href: "#industries" },
  { label: "Threat Intelligence", href: "#threat-intelligence" },
  { label: "Contact", href: "#contact" },
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
          ? "rgba(5,8,16,0.90)"
          : "rgba(5,8,16,0)",
      }}
      transition={{ duration: 0.3 }}
      style={{
        backdropFilter: scrolled ? "blur(16px)" : "blur(0px)",
        WebkitBackdropFilter: scrolled ? "blur(16px)" : "blur(0px)",
        borderBottom: scrolled
          ? "1px solid rgba(255,255,255,0.06)"
          : "1px solid transparent",
      }}
    >
      <nav className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-6 md:px-10">
        <a
          href="#home"
          className="flex items-center gap-2 font-display text-lg font-bold tracking-tight text-brisk-cyan"
          style={{ fontWeight: 800 }}
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden
          >
            <path
              d="M12 2L3.5 6.5V12C3.5 17.25 7.4 21.74 12 23C16.6 21.74 20.5 17.25 20.5 12V6.5L12 2Z"
              stroke="#00C2FF"
              strokeWidth="1.5"
              fill="rgba(0,194,255,0.08)"
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
                className="font-body text-[13px] font-normal text-brisk-white/70 transition-colors duration-200 hover:text-brisk-cyan"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="#case-studies"
            className="hidden rounded-full border border-white/25 bg-transparent px-5 py-2 font-body text-sm font-medium text-brisk-white/80 transition-all duration-200 hover:border-brisk-cyan hover:text-brisk-cyan sm:inline-flex"
          >
            Resources
          </a>
          <a
            href="#contact"
            className="rounded-full bg-brisk-cyan px-5 py-2 font-body text-sm font-semibold text-brisk-dark transition-all duration-200 hover:brightness-110"
          >
            Get Protected
          </a>
        </div>
      </nav>
    </motion.header>
  );
}
