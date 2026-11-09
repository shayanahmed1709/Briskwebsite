"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = [
  { label: "Home", href: "#" },
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

  const scrollTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 w-full"
      animate={{
        backgroundColor: scrolled
          ? "rgba(5,8,16,0.85)"
          : "rgba(5,8,16,0)",
      }}
      transition={{ duration: 0.3 }}
      style={{
        backdropFilter: scrolled ? "blur(12px)" : "blur(4px)",
        WebkitBackdropFilter: scrolled ? "blur(12px)" : "blur(4px)",
      }}
    >
      <nav className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-6 md:px-10">
        <a
          href="#"
          onClick={scrollTop}
          className="flex items-center gap-2 font-display text-lg font-bold tracking-tight text-brisk-cyan"
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
                onClick={
                  link.href === "#"
                    ? scrollTop
                    : undefined
                }
                className="font-display text-[13px] font-normal text-brisk-white/70 transition-colors duration-200 hover:text-brisk-cyan"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="rounded-full border border-brisk-cyan bg-transparent px-5 py-2 font-display text-sm font-semibold text-brisk-cyan transition-all duration-200 hover:bg-brisk-cyan hover:text-brisk-dark"
        >
          Get Protected
        </a>
      </nav>
    </motion.header>
  );
}
