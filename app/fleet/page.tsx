"use client";

import { useState, useMemo } from "react";
import { AnimatePresence } from "framer-motion";
import PageTransition from "@/components/ui/PageTransition";
import FleetFilters from "@/components/fleet/FleetFilters";
import CarCard from "@/components/fleet/CarCard";
import { cars, brands } from "@/lib/data";

interface Filters {
  type: "All" | "ICE" | "Hybrid" | "EV";
  brand: string;
  minPrice: number;
  maxPrice: number;
  sort: string;
}

export default function FleetPage() {
  const [filters, setFilters] = useState<Filters>({
    type: "All",
    brand: "",
    minPrice: 0,
    maxPrice: 0,
    sort: "default",
  });

  const filtered = useMemo(() => {
    let result = [...cars];

    if (filters.type !== "All") {
      result = result.filter((c) => c.specs.type === filters.type);
    }
    if (filters.brand) {
      result = result.filter(
        (c) =>
          c.brand.toLowerCase() === filters.brand.toLowerCase(),
      );
    }
    if (filters.minPrice > 0) {
      result = result.filter((c) => c.price >= filters.minPrice);
    }
    if (filters.maxPrice > 0) {
      result = result.filter((c) => c.price <= filters.maxPrice);
    }

    switch (filters.sort) {
      case "price-asc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        result.sort((a, b) => b.price - a.price);
        break;
      case "hp-desc":
        result.sort((a, b) => b.specs.horsepower - a.specs.horsepower);
        break;
      case "speed-desc":
        result.sort((a, b) => b.specs.topSpeed - a.specs.topSpeed);
        break;
    }

    return result;
  }, [filters]);

  return (
    <PageTransition>
      <div className="pt-32 pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-12">
            <span className="font-spec text-[10px] tracking-[0.3em] text-silver/40 uppercase">
              The Collection
            </span>
            <h1 className="font-heading mt-3 text-4xl font-bold text-platinum sm:text-5xl">
              Explore the <span className="text-gradient-blue">Fleet</span>
            </h1>
            <p className="mt-4 max-w-lg font-body text-base leading-relaxed text-silver/60">
              Every vehicle in our curated selection represents the pinnacle of
              automotive engineering and design.
            </p>
          </div>

          <FleetFilters
            filters={filters}
            setFilters={setFilters}
            brands={brands.map((b) => b.name)}
          />

          <AnimatePresence mode="wait">
            {filtered.length > 0 ? (
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {filtered.map((car, i) => (
                  <CarCard key={car.id} car={car} index={i} />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-24">
                <p className="font-heading text-xl text-silver/40">
                  No vehicles match your criteria
                </p>
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
                  className="mt-4 rounded-full border border-white/10 px-6 py-2 font-spec text-xs tracking-wider text-silver/60 transition-all hover:border-white/20 hover:text-platinum uppercase"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </AnimatePresence>

          <div className="mt-16 border-t border-white/5 pt-8 text-center">
            <p className="font-spec text-[10px] tracking-wider text-silver/30">
              Showing {filtered.length} of {cars.length} hypercars
            </p>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
