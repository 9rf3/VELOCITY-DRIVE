import { notFound } from "next/navigation";
import { cars } from "@/lib/data";
import VehicleDetailClient from "./VehicleDetailClient";

export async function generateStaticParams() {
  return cars.map((car) => ({ id: car.id }));
}

export default async function VehicleDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const car = cars.find((c) => c.id === id);

  if (!car) {
    notFound();
  }

  return <VehicleDetailClient car={car} />;
}
