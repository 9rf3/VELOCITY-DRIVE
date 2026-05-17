"use client";

import { motion } from "framer-motion";

export default function ScrollIndicator() {
  return (
    <motion.div
      className="absolute bottom-10 left-1/2 -translate-x-1/2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2, duration: 1 }}
    >
      <motion.div
        className="flex flex-col items-center gap-2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="font-spec text-[10px] tracking-[0.2em] text-silver/50 uppercase">
          Scroll
        </span>
        <div className="flex flex-col items-center gap-1">
          <span className="block h-8 w-px bg-gradient-to-b from-silver/30 to-transparent" />
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            className="text-silver/30"
          >
            <path
              d="M6 0v10M2 6l4 4 4-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            />
          </svg>
        </div>
      </motion.div>
    </motion.div>
  );
}
