"use client";

import { motion } from "framer-motion";
import { brands } from "@/lib/data";
import { fadeUp } from "@/lib/animations";

const duplicatedBrands = [...brands, ...brands, ...brands];

export default function BrandShowcaseSlider() {
  return (
    <section className="relative overflow-hidden bg-dark-black py-20">
      <div className="mx-auto mb-12 max-w-7xl px-6 lg:px-8">
        <motion.div
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center"
        >
          <span className="font-spec text-[10px] tracking-[0.3em] text-silver/40 uppercase">
            The Elite Circle
          </span>
          <h2 className="font-heading mt-3 text-3xl font-bold text-platinum sm:text-4xl">
            Masters of <span className="text-gradient-blue">Speed</span>
          </h2>
        </motion.div>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-dark-black to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-dark-black to-transparent" />

        <motion.div
          className="flex gap-16"
          initial={{ x: 0 }}
          animate={{ x: "-33.33%" }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {duplicatedBrands.map((brand, i) => (
            <div
              key={`${brand.slug}-${i}`}
              className="group flex cursor-pointer items-center justify-center"
            >
              <motion.div
                className="flex h-24 w-40 items-center justify-center rounded-2xl border border-white/5 bg-white/[0.02] px-8 transition-all duration-500 group-hover:border-accent-blue/20 group-hover:bg-accent-blue/5"
                whileHover={{ scale: 1.08 }}
                transition={{ type: "spring", stiffness: 200, damping: 12 }}
              >
                <span className="font-heading text-lg font-bold tracking-wider text-silver/60 transition-all duration-500 group-hover:text-platinum group-hover:drop-shadow-[0_0_12px_rgba(0,168,255,0.3)]">
                  {brand.name}
                </span>
              </motion.div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
