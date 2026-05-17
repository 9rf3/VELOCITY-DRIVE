"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { getFeaturedCars } from "@/lib/data";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { ArrowUpRight } from "lucide-react";

const cars = getFeaturedCars();

const layoutClasses = [
  "col-span-2 row-span-2",
  "col-span-1 row-span-1",
  "col-span-1 row-span-2",
  "col-span-2 row-span-1",
];

export default function FeaturedGrid() {
  return (
    <section className="relative bg-deep-black py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <span className="font-spec text-[10px] tracking-[0.3em] text-silver/40 uppercase">
            The Collection
          </span>
          <h2 className="font-heading mt-3 text-3xl font-bold text-platinum sm:text-4xl">
            Featured <span className="text-gradient-blue">Hypercars</span>
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-50px" }}
        >
          {cars.map((car, index) => (
            <motion.div
              key={car.id}
              variants={fadeUp}
              className={`group relative overflow-hidden rounded-2xl ${layoutClasses[index] ?? "col-span-1 row-span-1"} min-h-[300px] md:min-h-[400px]`}
            >
              <Link href={`/vehicle/${car.id}`} className="block h-full w-full">
                <div className="relative h-full w-full overflow-hidden">
                  <motion.div
                    className="absolute inset-0"
                    initial={{ scale: 1.1 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                  >
                    <Image
                      src={car.heroImage}
                      alt={`${car.brand} ${car.name}`}
                      fill
                      className="object-cover transition-all duration-700"
                      sizes="(max-width: 768px) 50vw, 33vw"
                    />
                  </motion.div>

                  <div className="card-overlay absolute inset-0" />

                  <div className="absolute inset-0 bg-gradient-to-t from-deep-black/80 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="relative flex h-full flex-col justify-between p-6 md:p-8">
                    <div className="flex items-start justify-between">
                      <div className="space-y-1">
                        <span className="font-spec text-[10px] tracking-[0.2em] text-silver/50 uppercase">
                          {car.brand}
                        </span>
                        <h3 className="font-heading text-xl font-bold text-platinum md:text-2xl">
                          {car.name}
                        </h3>
                      </div>
                      <motion.div
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 opacity-0 backdrop-blur-sm transition-all duration-500 group-hover:opacity-100"
                        whileHover={{ scale: 1.1, borderColor: "rgba(0,168,255,0.3)" }}
                      >
                        <ArrowUpRight className="h-4 w-4 text-platinum" />
                      </motion.div>
                    </div>

                    <motion.div
                      className="translate-y-4 space-y-2 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100"
                    >
                      <div className="flex items-center gap-4 font-spec text-xs text-silver/80">
                        <span>{car.specs.horsepower} HP</span>
                        <span className="h-3 w-px bg-white/10" />
                        <span>0-60 in {car.specs.zeroToSixty}s</span>
                        <span className="h-3 w-px bg-white/10" />
                        <span>{car.specs.topSpeed} mph</span>
                      </div>
                      <div className="flex gap-2">
                        {car.specs.type === "EV" && (
                          <span className="rounded-full border border-accent-blue/20 bg-accent-blue/10 px-3 py-1 font-spec text-[9px] tracking-wider text-accent-blue uppercase">
                            EV
                          </span>
                        )}
                        {car.specs.type === "Hybrid" && (
                          <span className="rounded-full border border-accent-purple/20 bg-accent-purple/10 px-3 py-1 font-spec text-[9px] tracking-wider text-accent-purple uppercase">
                            Hybrid
                          </span>
                        )}
                        {car.specs.type === "ICE" && (
                          <span className="rounded-full border border-accent-amber/20 bg-accent-amber/10 px-3 py-1 font-spec text-[9px] tracking-wider text-accent-amber uppercase">
                            ICE
                          </span>
                        )}
                      </div>
                    </motion.div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link
            href="/fleet"
            className="group inline-flex items-center gap-2 rounded-full border border-white/10 px-8 py-3 font-body text-xs tracking-[0.15em] text-platinum uppercase transition-all duration-300 hover:border-white/20 hover:bg-white/5"
          >
            View Full Fleet
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
