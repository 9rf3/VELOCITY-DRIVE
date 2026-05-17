"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Car } from "@/lib/data";
import { ArrowUpRight } from "lucide-react";

interface CarCardProps {
  car: Car;
  index: number;
}

export default function CarCard({ car, index }: CarCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className="group"
    >
      <Link href={`/vehicle/${car.id}`} className="block">
        <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
          <motion.div
            className="absolute inset-0"
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.06 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <Image
              src={car.heroImage}
              alt={`${car.brand} ${car.name}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </motion.div>

          <div className="card-overlay absolute inset-0" />

          <div className="absolute inset-0 bg-gradient-to-l from-deep-black/40 via-transparent to-deep-black/20" />

          <div className="absolute inset-x-0 bottom-0 p-6">
            <div className="space-y-1">
              <span className="font-spec text-[10px] tracking-[0.2em] text-silver/50 uppercase">
                {car.brand}
              </span>
              <h3 className="font-heading text-2xl font-bold text-platinum">
                {car.name}
              </h3>
            </div>

            <motion.div
              className="mt-4 flex items-center gap-3 overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileHover={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center gap-4 font-spec text-[11px] text-silver/80">
                <span>{car.specs.horsepower} HP</span>
                <span className="h-3 w-px bg-white/10" />
                <span>0-60 {car.specs.zeroToSixty}s</span>
                <span className="h-3 w-px bg-white/10" />
                <span>${car.price.toLocaleString()}</span>
              </div>
            </motion.div>
          </div>

          <div className="absolute right-4 top-4">
            <div className="flex gap-2">
              {car.specs.type === "EV" && (
                <span className="rounded-full border border-accent-blue/20 bg-deep-black/60 px-3 py-1 font-spec text-[9px] tracking-wider text-accent-blue backdrop-blur-sm uppercase">
                  EV
                </span>
              )}
              {car.specs.type === "Hybrid" && (
                <span className="rounded-full border border-accent-purple/20 bg-deep-black/60 px-3 py-1 font-spec text-[9px] tracking-wider text-accent-purple backdrop-blur-sm uppercase">
                  Hybrid
                </span>
              )}
              {car.specs.type === "ICE" && (
                <span className="rounded-full border border-accent-amber/20 bg-deep-black/60 px-3 py-1 font-spec text-[9px] tracking-wider text-accent-amber backdrop-blur-sm uppercase">
                  ICE
                </span>
              )}
            </div>
          </div>

          <motion.div
            className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 opacity-0 backdrop-blur-sm transition-all duration-500 group-hover:opacity-100"
            whileHover={{ scale: 1.1 }}
          >
            <ArrowUpRight className="h-4 w-4 text-platinum" />
          </motion.div>
        </div>

        <div className="mt-4 space-y-1">
          <p className="font-body text-sm leading-relaxed text-silver/60 line-clamp-2">
            {car.tagline}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}
