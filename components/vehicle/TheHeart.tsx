"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Car } from "@/lib/data";
import { fadeUp, slideInLeft, slideInRight } from "@/lib/animations";

interface TheHeartProps {
  car: Car;
}

const specItems: {
  key: string;
  label: string;
  suffix?: string;
}[] = [
  { key: "engine", label: "Powertrain" },
  { key: "transmission", label: "Transmission" },
  { key: "drivetrain", label: "Drivetrain" },
  { key: "torque", label: "Torque", suffix: " Nm" },
  { key: "displacement", label: "Displacement" },
];

export default function TheHeart({ car }: TheHeartProps) {
  return (
    <section className="relative min-h-screen bg-deep-black">
      <div className="mx-auto grid min-h-screen max-w-7xl flex-col items-center gap-12 px-6 py-24 lg:grid-cols-2 lg:px-8">
        <motion.div
          variants={slideInLeft}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl"
        >
          <Image
            src={car.engineImage}
            alt={`${car.brand} ${car.name} engine`}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-deep-black/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-deep-black/60 via-transparent to-transparent" />

          <motion.div
            className="absolute inset-0 border border-white/5 rounded-2xl"
            animate={{
              boxShadow: [
                "inset 0 0 0px rgba(0,168,255,0)",
                "inset 0 0 60px rgba(0,168,255,0.03)",
                "inset 0 0 0px rgba(0,168,255,0)",
              ],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        <motion.div
          variants={slideInRight}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-8"
        >
          <div>
            <motion.span
              variants={fadeUp}
              className="font-spec text-[10px] tracking-[0.3em] text-silver/40 uppercase"
            >
              Section 02
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="font-heading mt-3 text-4xl font-bold text-platinum sm:text-5xl"
            >
              The <span className="text-gradient-blue">Heart</span>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-4 font-body text-base leading-relaxed text-silver/60"
            >
              At the core of every great machine lies a masterpiece of
              engineering. The {car.brand} {car.name}&apos;s powertrain is a
              testament to human ingenuity.
            </motion.p>
          </div>

          <motion.div
            variants={fadeUp}
            className="space-y-4 rounded-2xl border border-white/5 bg-dark-black/50 p-6"
          >
            {specItems.map(({ key, label, suffix }) => {
              const value = car.specs[key as keyof typeof car.specs];
              if (!value) return null;
              return (
                <div
                  key={key}
                  className="flex items-center justify-between border-b border-white/5 pb-3 last:border-b-0 last:pb-0"
                >
                  <span className="font-spec text-[11px] tracking-wider text-silver/50 uppercase">
                    {label}
                  </span>
                  <span className="font-spec text-sm text-platinum text-right ml-4">
                    {String(value)}
                    {suffix || ""}
                  </span>
                </div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
