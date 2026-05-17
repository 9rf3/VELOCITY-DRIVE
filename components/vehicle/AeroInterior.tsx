"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Car } from "@/lib/data";
import { fadeUp } from "@/lib/animations";
import { X } from "lucide-react";

interface AeroInteriorProps {
  car: Car;
}

const hotspots = [
  {
    id: "active-aero",
    name: "Active Aerodynamics",
    x: "35%",
    y: "25%",
    description:
      "Intelligent active aerodynamic elements continuously adjust to optimize downforce and drag, adapting to speed and driving conditions in milliseconds.",
    specs: "Adjustable angle of attack | 280 km/h activation threshold",
  },
  {
    id: "monocoque",
    name: "Carbon Monocoque",
    x: "65%",
    y: "50%",
    description:
      "A monocoque chassis crafted from aerospace-grade carbon fiber delivers exceptional torsional rigidity while maintaining an featherweight structure.",
    specs: "Torsional rigidity: 50,000 Nm/deg | Weight: < 70 kg",
  },
  {
    id: "suspension",
    name: "Active Suspension",
    x: "50%",
    y: "75%",
    description:
      "Hydraulically interconnected suspension system reads the road surface in real-time, delivering unparalleled handling precision without compromising ride comfort.",
    specs: "50 ms response time | 4-way adjustable dampers",
  },
];

export default function AeroInterior({ car }: AeroInteriorProps) {
  const [activeHotspot, setActiveHotspot] = useState<string | null>(null);

  return (
    <section className="relative min-h-screen bg-dark-black">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <motion.div
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <span className="font-spec text-[10px] tracking-[0.3em] text-silver/40 uppercase">
            Section 03
          </span>
          <h2 className="font-heading mt-3 text-4xl font-bold text-platinum sm:text-5xl">
            Engineering <span className="text-gradient-blue">Details</span>
          </h2>
        </motion.div>

        <div className="mt-12 grid gap-8 lg:grid-cols-5">
          <motion.div
            variants={fadeUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl lg:col-span-3"
          >
            <Image
              src={car.detailImage}
              alt={`${car.brand} ${car.name} details`}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 60vw"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-deep-black/60 via-transparent to-deep-black/20" />

            {hotspots.map((spot) => (
              <button
                key={spot.id}
                onClick={() =>
                  setActiveHotspot(
                    activeHotspot === spot.id ? null : spot.id,
                  )
                }
                className="group absolute z-10"
                style={{ left: spot.x, top: spot.y }}
              >
                <motion.span
                  className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-accent-blue/60 bg-accent-blue/20 backdrop-blur-sm transition-all duration-300 group-hover:bg-accent-blue/40 group-hover:scale-125"
                  animate={{
                    boxShadow: [
                      "0 0 0px rgba(0,168,255,0)",
                      "0 0 20px rgba(0,168,255,0.3)",
                      "0 0 0px rgba(0,168,255,0)",
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <span className="h-2 w-2 rounded-full bg-accent-blue" />
                </motion.span>
              </button>
            ))}

            <AnimatePresence>
              {activeHotspot && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute bottom-6 left-6 right-6 z-20 rounded-xl border border-white/10 bg-deep-black/90 p-5 backdrop-blur-xl"
                >
                  {(() => {
                    const spot = hotspots.find(
                      (h) => h.id === activeHotspot,
                    );
                    if (!spot) return null;
                    return (
                      <div className="relative">
                        <button
                          onClick={() => setActiveHotspot(null)}
                          className="absolute -right-1 -top-1 text-silver/40 transition-colors hover:text-platinum"
                        >
                          <X className="h-4 w-4" />
                        </button>
                        <h4 className="font-heading text-sm font-bold text-platinum">
                          {spot.name}
                        </h4>
                        <p className="mt-2 font-body text-xs leading-relaxed text-silver/60">
                          {spot.description}
                        </p>
                        <p className="mt-2 font-spec text-[10px] text-accent-blue/80">
                          {spot.specs}
                        </p>
                      </div>
                    );
                  })()}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="space-y-4 lg:col-span-2"
          >
            <div className="rounded-2xl border border-white/5 bg-carbon/50 p-6">
              <span className="font-spec text-[10px] tracking-[0.2em] text-silver/40 uppercase">
                Key Features
              </span>
              <ul className="mt-4 space-y-3">
                {car.features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 font-body text-sm text-silver/80"
                  >
                    <span className="h-1 w-1 rounded-full bg-accent-blue" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-white/5 bg-carbon/50 p-6">
              <span className="font-spec text-[10px] tracking-[0.2em] text-silver/40 uppercase">
                Exclusivity Tier
              </span>
              <div className="mt-4 flex items-center gap-3">
                <div className="flex gap-1">
                  {Array.from({ length: 10 }, (_, i) => (
                    <span
                      key={i}
                      className={`h-2 w-2 rounded-full ${
                        i < car.exclusivity
                          ? "bg-accent-blue"
                          : "bg-white/10"
                      }`}
                    />
                  ))}
                </div>
                <span className="font-spec text-xs text-silver/60">
                  {car.exclusivity}/10
                </span>
              </div>
              <p className="mt-3 font-body text-xs leading-relaxed text-silver/50">
                A rating reflecting rarity, craftsmanship, and engineering
                exclusivity.
              </p>
            </div>

            <div className="rounded-2xl border border-white/5 bg-carbon/50 p-6">
              <span className="font-spec text-[10px] tracking-[0.2em] text-silver/40 uppercase">
                Ask an Expert
              </span>
              <p className="mt-3 font-body text-xs leading-relaxed text-silver/60">
                Speak with a VelocityDrive concierge for a private viewing of
                the {car.brand} {car.name}.
              </p>
              <button className="mt-4 rounded-full border border-white/10 px-5 py-2 font-spec text-[11px] tracking-wider text-silver transition-all duration-300 hover:border-accent-blue/30 hover:bg-accent-blue/10 hover:text-accent-blue uppercase">
                Request Contact
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
