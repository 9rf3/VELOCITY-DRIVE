"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/fleet", label: "Explore Fleet" },
  { href: "/compare", label: "Compare" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-deep-black/90 backdrop-blur-xl shadow-[0_1px_0_rgba(255,255,255,0.05)]"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        <Link href="/" className="group relative z-10">
          <span className="font-heading text-xl font-bold tracking-[0.15em] text-platinum">
            VELOCITY
            <span className="text-accent-blue ml-0.5">DRIVE</span>
          </span>
        </Link>

        <div className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-body text-sm font-medium tracking-wider text-silver transition-colors duration-300 hover:text-platinum"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/fleet"
            className="relative overflow-hidden rounded-full border border-white/10 px-6 py-2.5 font-body text-xs font-semibold tracking-[0.15em] uppercase text-platinum transition-all duration-300 hover:border-accent-blue/50 hover:bg-accent-blue/10"
          >
            Enquire
          </Link>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="relative z-10 flex md:hidden"
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <X className="h-6 w-6 text-platinum" />
          ) : (
            <Menu className="h-6 w-6 text-platinum" />
          )}
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="fixed inset-0 z-0 flex flex-col items-center justify-center gap-8 bg-deep-black/98 backdrop-blur-2xl md:hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-heading text-3xl tracking-wider text-platinum transition-colors hover:text-accent-blue"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/fleet"
              onClick={() => setMenuOpen(false)}
              className="mt-4 rounded-full border border-white/20 px-8 py-3 font-body text-sm tracking-[0.15em] uppercase text-platinum"
            >
              Enquire
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
