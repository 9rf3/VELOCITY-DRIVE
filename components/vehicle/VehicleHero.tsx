"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Car } from "@/lib/data";
import { staggerContainer, fadeUp } from "@/lib/animations";

interface VehicleHeroProps {
  car: Car;
}

export default function VehicleHero({ car }: VehicleHeroProps) {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <Image
          src={car.heroImage}
          alt={`${car.brand} ${car.name}`}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-r from-deep-black/90 via-deep-black/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-deep-black via-deep-black/20 to-transparent" />
      <div className="hero-vignette absolute inset-0" />
      <div className="noise-bg absolute inset-0" />

      <motion.div
        className="relative z-10 flex h-full items-center px-6 lg:px-16"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        <div className="max-w-2xl">
          <motion.span
            variants={fadeUp}
            className="font-spec text-[11px] tracking-[0.3em] text-silver/60 uppercase"
          >
            {car.brand}
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="font-heading mt-3 text-5xl font-bold text-platinum sm:text-7xl md:text-8xl"
          >
            {car.name}
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-gradient-blue mt-2 font-heading text-2xl font-semibold sm:text-3xl"
          >
            &ldquo;{car.tagline}&rdquo;
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-lg font-body text-base leading-relaxed text-silver/70"
          >
            {car.description}
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-wrap gap-6"
          >
            <div className="space-y-1">
              <span className="font-spec text-[10px] tracking-[0.2em] text-silver/40 uppercase">
                Horsepower
              </span>
              <p className="font-heading text-3xl font-bold text-platinum">
                {car.specs.horsepower.toLocaleString()}
                <span className="font-body text-sm font-normal text-silver/60 ml-1">
                  HP
                </span>
              </p>
            </div>
            <div className="space-y-1">
              <span className="font-spec text-[10px] tracking-[0.2em] text-silver/40 uppercase">
                0-60 mph
              </span>
              <p className="font-heading text-3xl font-bold text-platinum">
                {car.specs.zeroToSixty}
                <span className="font-body text-sm font-normal text-silver/60 ml-1">
                  s
                </span>
              </p>
            </div>
            <div className="space-y-1">
              <span className="font-spec text-[10px] tracking-[0.2em] text-silver/40 uppercase">
                Top Speed
              </span>
              <p className="font-heading text-3xl font-bold text-platinum">
                {car.specs.topSpeed}
                <span className="font-body text-sm font-normal text-silver/60 ml-1">
                  mph
                </span>
              </p>
            </div>
            <div className="space-y-1">
              <span className="font-spec text-[10px] tracking-[0.2em] text-silver/40 uppercase">
                Price
              </span>
              <p className="font-heading text-3xl font-bold text-accent-blue">
                ${(car.price / 1000000).toFixed(1)}
                <span className="font-body text-sm font-normal text-silver/60 ml-1">
                  M
                </span>
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
