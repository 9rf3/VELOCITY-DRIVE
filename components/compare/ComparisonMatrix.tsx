"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { cars, Car, specLabels } from "@/lib/data";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { X, Plus } from "lucide-react";
import SpecBar from "@/components/ui/SpecBar";

const statKeys = [
  "horsepower",
  "topSpeed",
  "zeroToSixty",
  "weight",
  "torque",
] as const;

function getMaxValue(key: (typeof statKeys)[number]): number {
  return Math.max(...cars.map((c) => c.specs[key]));
}

function getSpecValue(car: Car, key: (typeof statKeys)[number]): number {
  return car.specs[key];
}

export default function ComparisonMatrix() {
  const [selected, setSelected] = useState<Car[]>([cars[0], cars[1]]);

  const addCar = (car: Car) => {
    if (selected.length < 3 && !selected.find((c) => c.id === car.id)) {
      setSelected([...selected, car]);
    }
  };

  const removeCar = (id: string) => {
    setSelected(selected.filter((c) => c.id !== id));
  };

  const available = cars.filter(
    (car) => !selected.find((s) => s.id === car.id),
  );

  return (
    <section className="bg-deep-black py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="font-spec text-[10px] tracking-[0.3em] text-silver/40 uppercase">
            Hypercar Comparison
          </span>
          <h2 className="font-heading mt-3 text-4xl font-bold text-platinum sm:text-5xl">
            The <span className="text-gradient-blue">Matrix</span>
          </h2>
          <p className="mt-4 max-w-lg font-body text-base leading-relaxed text-silver/60">
            Compare up to three vehicles side by side. Differences are
            highlighted automatically.
          </p>
        </motion.div>

        <div className="mb-12 flex flex-wrap items-center gap-4">
          {selected.map((car) => (
            <motion.div
              key={car.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="group relative flex items-center gap-3 rounded-full border border-white/10 bg-dark-black px-4 py-2 pr-10"
            >
              <div className="relative h-8 w-8 overflow-hidden rounded-full">
                <Image
                  src={car.heroImage}
                  alt={car.name}
                  fill
                  className="object-cover"
                  sizes="32px"
                />
              </div>
              <div>
                <span className="font-spec text-[10px] text-silver/40">
                  {car.brand}
                </span>
                <p className="font-body text-xs text-platinum">{car.name}</p>
              </div>
              <button
                onClick={() => removeCar(car.id)}
                className="absolute right-3 text-silver/40 transition-colors hover:text-red-400"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            </motion.div>
          ))}

          {selected.length < 3 && (
            <div className="group relative">
              <div className="flex cursor-pointer items-center gap-2 rounded-full border border-dashed border-white/10 px-5 py-3 transition-all duration-300 hover:border-accent-blue/30 hover:bg-accent-blue/5">
                <Plus className="h-4 w-4 text-silver/40" />
                <span className="font-spec text-[11px] tracking-wider text-silver/40 uppercase">
                  Add Vehicle
                </span>
              </div>

              <div className="absolute left-0 top-full z-20 mt-2 hidden w-64 rounded-xl border border-white/10 bg-dark-black/95 p-2 backdrop-blur-xl group-hover:block">
                <div className="max-h-48 space-y-1 overflow-y-auto">
                  {available.length > 0 ? (
                    available.map((car) => (
                      <button
                        key={car.id}
                        onClick={() => addCar(car)}
                        className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left transition-colors hover:bg-white/5"
                      >
                        <div className="relative h-8 w-8 overflow-hidden rounded-lg">
                          <Image
                            src={car.heroImage}
                            alt={car.name}
                            fill
                            className="object-cover"
                            sizes="32px"
                          />
                        </div>
                        <div>
                          <span className="font-spec text-[9px] text-silver/40">
                            {car.brand}
                          </span>
                          <p className="font-body text-xs text-platinum">
                            {car.name}
                          </p>
                        </div>
                      </button>
                    ))
                  ) : (
                    <p className="px-3 py-4 font-body text-xs text-center text-silver/40">
                      All vehicles added
                    </p>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={selected.map((c) => c.id).join("-")}
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="overflow-x-auto"
          >
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="sticky left-0 z-10 min-w-[180px] bg-deep-black px-6 py-4 text-left">
                    <span className="font-spec text-[10px] tracking-[0.2em] text-silver/40 uppercase">
                      Specification
                    </span>
                  </th>
                  {selected.map((car) => (
                    <th
                      key={car.id}
                      className="min-w-[220px] px-6 py-4 text-left"
                    >
                      <div className="flex items-center gap-3">
                        <div className="relative h-12 w-20 overflow-hidden rounded-lg">
                          <Image
                            src={car.heroImage}
                            alt={car.name}
                            fill
                            className="object-cover"
                            sizes="80px"
                          />
                        </div>
                        <div>
                          <span className="font-spec text-[10px] text-silver/40">
                            {car.brand}
                          </span>
                          <p className="font-heading text-sm font-bold text-platinum">
                            {car.name}
                          </p>
                        </div>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td
                    colSpan={selected.length + 1}
                    className="border-t border-white/5"
                  >
                    <div className="h-6" />
                  </td>
                </tr>

                <tr>
                  <td className="px-6 py-3">
                    <span className="font-spec text-[10px] tracking-[0.2em] text-silver/40 uppercase">
                      Powertrain
                    </span>
                  </td>
                  {selected.map((car) => (
                    <td key={car.id} className="px-6 py-3">
                      <span
                        className={`rounded-full border px-3 py-1 font-spec text-[10px] tracking-wider uppercase ${
                          car.specs.type === "EV"
                            ? "border-accent-blue/20 bg-accent-blue/10 text-accent-blue"
                            : car.specs.type === "Hybrid"
                              ? "border-accent-purple/20 bg-accent-purple/10 text-accent-purple"
                              : "border-accent-amber/20 bg-accent-amber/10 text-accent-amber"
                        }`}
                      >
                        {car.specs.type}
                      </span>
                    </td>
                  ))}
                </tr>

                {statKeys.map((key) => {
                  const maxVal = getMaxValue(key);
                  const values = selected.map((car) =>
                    getSpecValue(car, key),
                  );
                  const isLowerBetter =
                    key === "zeroToSixty" || key === "weight";
                  const bestVal = isLowerBetter
                    ? Math.min(...values)
                    : Math.max(...values);

                  return (
                    <tr key={key} className="group border-t border-white/5">
                      <td className="sticky left-0 z-10 bg-deep-black px-6 py-5">
                        <span className="font-spec text-[11px] tracking-wider text-silver/70">
                          {specLabels[key]}
                        </span>
                      </td>
                      {selected.map((car) => {
                        const val = getSpecValue(car, key);
                        const isBest = val === bestVal;
                        const pct = (val / maxVal) * 100;

                        return (
                          <td key={car.id} className="px-6 py-5">
                            <SpecBar
                              label={specLabels[key]}
                              value={
                                key === "zeroToSixty" || key === "weight"
                                  ? val.toLocaleString()
                                  : val.toLocaleString()
                              }
                              percentage={pct}
                              highlight={isBest}
                            />
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}

                <tr>
                  <td className="border-t border-white/5" colSpan={selected.length + 1}>
                    <div className="h-6" />
                  </td>
                </tr>

                <tr>
                  <td className="px-6 py-3">
                    <span className="font-spec text-[10px] tracking-[0.2em] text-silver/40 uppercase">
                      Engine
                    </span>
                  </td>
                  {selected.map((car) => (
                    <td key={car.id} className="px-6 py-3">
                      <span className="font-body text-sm text-silver/80">
                        {car.specs.engine}
                      </span>
                    </td>
                  ))}
                </tr>

                <tr className="border-t border-white/5">
                  <td className="px-6 py-3">
                    <span className="font-spec text-[11px] tracking-wider text-silver/70">
                      Transmission
                    </span>
                  </td>
                  {selected.map((car) => (
                    <td key={car.id} className="px-6 py-3">
                      <span className="font-body text-sm text-silver/80">
                        {car.specs.transmission}
                      </span>
                    </td>
                  ))}
                </tr>

                <tr className="border-t border-white/5">
                  <td className="px-6 py-3">
                    <span className="font-spec text-[11px] tracking-wider text-silver/70">
                      Drivetrain
                    </span>
                  </td>
                  {selected.map((car) => (
                    <td key={car.id} className="px-6 py-3">
                      <span className="font-body text-sm text-silver/80">
                        {car.specs.drivetrain}
                      </span>
                    </td>
                  ))}
                </tr>

                <tr className="border-t border-white/5">
                  <td className="px-6 py-3">
                    <span className="font-spec text-[11px] tracking-wider text-silver/70">
                      Price
                    </span>
                  </td>
                  {selected.map((car) => (
                    <td key={car.id} className="px-6 py-3">
                      <span className="font-heading text-lg font-bold text-platinum">
                        ${car.price.toLocaleString()}
                      </span>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </motion.div>
        </AnimatePresence>

        {selected.length < 2 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-12 text-center font-body text-sm text-silver/40"
          >
            Add at least 2 vehicles to see a comparison.
          </motion.p>
        )}
      </div>
    </section>
  );
}
