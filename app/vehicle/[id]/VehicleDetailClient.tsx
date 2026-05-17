"use client";

import PageTransition from "@/components/ui/PageTransition";
import VehicleHero from "@/components/vehicle/VehicleHero";
import TheHeart from "@/components/vehicle/TheHeart";
import AeroInterior from "@/components/vehicle/AeroInterior";
import { Car } from "@/lib/data";

export default function VehicleDetailClient({ car }: { car: Car }) {
  return (
    <PageTransition>
      <VehicleHero car={car} />
      <TheHeart car={car} />
      <AeroInterior car={car} />
    </PageTransition>
  );
}
