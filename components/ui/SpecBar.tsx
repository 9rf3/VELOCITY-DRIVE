"use client";

import { motion } from "framer-motion";

interface SpecBarProps {
  label: string;
  value: string;
  percentage: number;
  highlight?: boolean;
}

export default function SpecBar({
  label,
  value,
  percentage,
  highlight,
}: SpecBarProps) {
  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between">
        <span className="font-spec text-[11px] tracking-wider text-silver/70 uppercase">
          {label}
        </span>
        <span className="font-spec text-xs text-platinum">{value}</span>
      </div>
      <div className="relative h-[3px] w-full overflow-hidden bg-white/5">
        <motion.div
          className={`h-full ${highlight ? "bg-accent-blue" : "bg-white/30"}`}
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
        />
      </div>
    </div>
  );
}
