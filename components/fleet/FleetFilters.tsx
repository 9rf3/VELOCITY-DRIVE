"use client";

import { motion } from "framer-motion";
import { PowerSource } from "@/lib/data";
import { SlidersHorizontal, X } from "lucide-react";
import { useState } from "react";

interface Filters {
  type: PowerSource | "All";
  brand: string;
  minPrice: number;
  maxPrice: number;
  sort: string;
}

interface FleetFiltersProps {
  filters: Filters;
  setFilters: (f: Filters) => void;
  brands: string[];
}

export default function FleetFilters({
  filters,
  setFilters,
  brands,
}: FleetFiltersProps) {
  const [open, setOpen] = useState(false);

  const typeOptions: (PowerSource | "All")[] = ["All", "ICE", "Hybrid", "EV"];
  const sortOptions = [
    { value: "default", label: "Featured" },
    { value: "price-asc", label: "Price: Low to High" },
    { value: "price-desc", label: "Price: High to Low" },
    { value: "hp-desc", label: "Horsepower" },
    { value: "speed-desc", label: "Top Speed" },
  ];

  const activeCount =
    (filters.type !== "All" ? 1 : 0) +
    (filters.brand ? 1 : 0) +
    (filters.minPrice > 0 || filters.maxPrice < 10000000 ? 1 : 0);

  return (
    <div className="mb-10">
      <div className="flex items-center justify-between">
        <button
          onClick={() => setOpen(!open)}
          className="group flex items-center gap-2 rounded-full border border-white/10 px-5 py-2.5 font-body text-xs tracking-wider text-silver transition-all duration-300 hover:border-white/20 hover:text-platinum"
        >
          <SlidersHorizontal className="h-3.5 w-3.5" />
          Filters
          {activeCount > 0 && (
            <span className="flex h-4 w-4 items-center justify-center rounded-full bg-accent-blue font-spec text-[9px] text-deep-black">
              {activeCount}
            </span>
          )}
        </button>

        <div className="flex items-center gap-3">
          <span className="font-spec text-[10px] tracking-wider text-silver/40 uppercase">
            Sort
          </span>
          <select
            value={filters.sort}
            onChange={(e) => setFilters({ ...filters, sort: e.target.value })}
            className="cursor-pointer rounded-lg border border-white/10 bg-dark-black px-4 py-2 font-spec text-xs text-silver outline-none transition-all duration-300 hover:border-white/20 focus:border-accent-blue/30"
          >
            {sortOptions.map((opt) => (
              <option key={opt.value} value={opt.value} className="bg-dark-black">
                {opt.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="mt-6 overflow-hidden"
        >
          <div className="rounded-2xl border border-white/5 bg-dark-black p-6">
            <div className="grid gap-8 sm:grid-cols-3">
              <div>
                <span className="font-spec text-[10px] tracking-[0.2em] text-silver/50 uppercase">
                  Powertrain
                </span>
                <div className="mt-3 flex flex-wrap gap-2">
                  {typeOptions.map((type) => (
                    <button
                      key={type}
                      onClick={() => setFilters({ ...filters, type })}
                      className={`rounded-full border px-4 py-2 font-spec text-[11px] tracking-wider uppercase transition-all duration-300 ${
                        filters.type === type
                          ? "border-accent-blue/30 bg-accent-blue/10 text-accent-blue"
                          : "border-white/10 text-silver/60 hover:border-white/20 hover:text-silver"
                      }`}
                    >
                      {type === "All" ? "All" : type}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <span className="font-spec text-[10px] tracking-[0.2em] text-silver/50 uppercase">
                  Brand
                </span>
                <div className="mt-3 flex flex-wrap gap-2">
                  <button
                    onClick={() => setFilters({ ...filters, brand: "" })}
                    className={`rounded-full border px-4 py-2 font-spec text-[11px] tracking-wider uppercase transition-all duration-300 ${
                      !filters.brand
                        ? "border-accent-blue/30 bg-accent-blue/10 text-accent-blue"
                        : "border-white/10 text-silver/60 hover:border-white/20 hover:text-silver"
                    }`}
                  >
                    All
                  </button>
                  {brands.map((brand) => (
                    <button
                      key={brand}
                      onClick={() =>
                        setFilters({
                          ...filters,
                          brand: filters.brand === brand ? "" : brand,
                        })
                      }
                      className={`rounded-full border px-4 py-2 font-spec text-[11px] tracking-wider uppercase transition-all duration-300 ${
                        filters.brand === brand
                          ? "border-accent-blue/30 bg-accent-blue/10 text-accent-blue"
                          : "border-white/10 text-silver/60 hover:border-white/20 hover:text-silver"
                      }`}
                    >
                      {brand}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <span className="font-spec text-[10px] tracking-[0.2em] text-silver/50 uppercase">
                  Price Range
                </span>
                <div className="mt-3 flex items-center gap-3">
                  <input
                    type="number"
                    placeholder="Min"
                    value={filters.minPrice || ""}
                    onChange={(e) =>
                      setFilters({
                        ...filters,
                        minPrice: Number(e.target.value),
                      })
                    }
                    className="w-full rounded-lg border border-white/10 bg-carbon px-4 py-2 font-spec text-xs text-platinum outline-none transition-all duration-300 focus:border-accent-blue/30 placeholder:text-silver/30"
                  />
                  <span className="font-body text-xs text-silver/40">to</span>
                  <input
                    type="number"
                    placeholder="Max"
                    value={filters.maxPrice || ""}
                    onChange={(e) =>
                      setFilters({
                        ...filters,
                        maxPrice: Number(e.target.value),
                      })
                    }
                    className="w-full rounded-lg border border-white/10 bg-carbon px-4 py-2 font-spec text-xs text-platinum outline-none transition-all duration-300 focus:border-accent-blue/30 placeholder:text-silver/30"
                  />
                </div>
              </div>
            </div>

            {activeCount > 0 && (
              <button
                onClick={() =>
                  setFilters({
                    type: "All",
                    brand: "",
                    minPrice: 0,
                    maxPrice: 0,
                    sort: "default",
                  })
                }
                className="mt-6 flex items-center gap-1.5 font-spec text-[11px] tracking-wider text-silver/50 transition-colors hover:text-accent-blue"
              >
                <X className="h-3 w-3" />
                Clear all filters
              </button>
            )}
          </div>
        </motion.div>
      )}
    </div>
  );
}
