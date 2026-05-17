"use client";

import { motion } from "framer-motion";
import ScrollIndicator from "@/components/ui/ScrollIndicator";

function ease(c1: number, c2: number, c3: number, c4: number) {
  return [c1, c2, c3, c4] as [number, number, number, number];
}

const containerVariants = {
  initial: {},
  animate: {
    transition: { staggerChildren: 0.2, delayChildren: 0.5 },
  },
};

const childVariants = {
  initial: { opacity: 0, y: 40 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: ease(0.25, 0.1, 0.25, 1) },
  },
};

const letterVariants = {
  initial: { opacity: 0, y: 80, rotateX: -40 },
  animate: (i: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.04,
      ease: ease(0.25, 0.1, 0.25, 1),
    },
  }),
};

function SplitText({ text, className }: { text: string; className?: string }) {
  return (
    <span className={className}>
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          custom={i}
          variants={letterVariants}
          initial="initial"
          animate="animate"
          className="inline-block"
          style={{ transformOrigin: "50% 100%" }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
}

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0 bg-deep-black">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,168,255,0.08)_0%,transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(139,92,246,0.05)_0%,transparent_50%)]" />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative h-full w-full overflow-hidden">
            <motion.div
              className="absolute -inset-4"
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.6 }}
              transition={{ duration: 2, ease: ease(0.25, 0.1, 0.25, 1) }}
            >
              <div className="h-full w-full bg-[url('https://images.unsplash.com/photo-1614200187524-dc4b892acf16?w=1920&q=85')] bg-cover bg-center" />
            </motion.div>

            <div className="absolute inset-0 bg-gradient-to-r from-deep-black/80 via-transparent to-deep-black/60" />
            <div className="absolute inset-0 bg-gradient-to-t from-deep-black via-deep-black/20 to-transparent" />
            <div className="hero-vignette absolute inset-0" />
            <div className="noise-bg absolute inset-0" />
          </div>
        </div>
      </div>

      <motion.div
        className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center"
        variants={containerVariants}
        initial="initial"
        animate="animate"
      >
        <motion.p
          variants={childVariants}
          className="font-spec mb-6 text-[11px] tracking-[0.3em] text-silver/60 uppercase"
        >
          The World&apos;s Finest Hypercar Marketplace
        </motion.p>

        <h1 className="font-heading text-5xl font-bold leading-[0.95] tracking-tight text-platinum sm:text-7xl md:text-8xl lg:text-9xl">
          <SplitText text="ENGINEERING" />
          <br />
          <span className="text-gradient mt-2 block">
            <SplitText text="THE UNREACHBLE" />
          </span>
        </h1>

        <motion.p
          variants={childVariants}
          className="mt-8 max-w-lg font-body text-base leading-relaxed text-silver/70 sm:text-lg"
        >
          Where engineering excellence meets artistic vision. Explore the most
          extraordinary machines ever conceived by human hands.
        </motion.p>

        <motion.div variants={childVariants} className="mt-10 flex gap-4">
          <a
            href="/fleet"
            className="group relative overflow-hidden rounded-full bg-platinum px-8 py-3 font-body text-xs font-semibold tracking-[0.15em] text-deep-black uppercase transition-all duration-300 hover:bg-white"
          >
            <span className="relative z-10">Explore Fleet</span>
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
          </a>
          <a
            href="/compare"
            className="rounded-full border border-white/10 px-8 py-3 font-body text-xs tracking-[0.15em] text-platinum uppercase transition-all duration-300 hover:border-white/20 hover:bg-white/5"
          >
            Compare
          </a>
        </motion.div>
      </motion.div>

      <ScrollIndicator />
    </section>
  );
}
