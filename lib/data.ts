export type PowerSource = "ICE" | "Hybrid" | "EV";

export interface CarSpecs {
  horsepower: number;
  topSpeed: number;
  zeroToSixty: number;
  weight: number;
  engine: string;
  type: PowerSource;
  transmission: string;
  drivetrain: string;
  torque: number;
  displacement?: string;
}

export interface Car {
  id: string;
  name: string;
  brand: string;
  tagline: string;
  description: string;
  price: number;
  heroImage: string;
  detailImage: string;
  engineImage: string;
  interiorImage: string;
  specs: CarSpecs;
  exclusivity: number;
  featured: boolean;
  features: string[];
}

export const cars: Car[] = [
  {
    id: "rimac-nevera",
    name: "Nevera",
    brand: "Rimac",
    tagline: "Redefining the Possible",
    description:
      "The Rimac Nevera is an electric hypercar that shatters every preconception of what's possible. With four independent motors delivering 1,914 horsepower, it rewrites the rules of performance, handling, and driver engagement.",
    price: 2200000,
    heroImage:
      "https://images.unsplash.com/photo-1614200187524-dc4b892acf16?w=1400&q=85",
    detailImage:
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1400&q=85",
    engineImage:
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=1400&q=85",
    interiorImage:
      "https://images.unsplash.com/photo-1614200187524-dc4b892acf16?w=1400&q=85",
    specs: {
      horsepower: 1914,
      topSpeed: 258,
      zeroToSixty: 1.85,
      weight: 2150,
      engine: "Four Permanent Magnet Synchronous Motors",
      type: "EV",
      transmission: "Single-Speed Direct Drive",
      drivetrain: "AWD (Torque Vectoring)",
      torque: 2360,
    },
    exclusivity: 10,
    featured: true,
    features: [
      "AI-Tuned Torque Vectoring",
      "Regenerative Braking 300kW",
      "Active Rear Spoiler",
      "Hydraulic Suspension",
    ],
  },
  {
    id: "bugatti-mistral",
    name: "Mistral",
    brand: "Bugatti",
    tagline: "The Last of Its Kind",
    description:
      "The Bugatti Mistral represents the final chapter for the legendary W16 engine. A roadster of unprecedented performance and elegance, it is a tribute to two decades of automotive mastery.",
    price: 5000000,
    heroImage:
      "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?w=1400&q=85",
    detailImage:
      "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?w=1400&q=85",
    engineImage:
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=1400&q=85",
    interiorImage:
      "https://images.unsplash.com/photo-1614200187524-dc4b892acf16?w=1400&q=85",
    specs: {
      horsepower: 1578,
      topSpeed: 261,
      zeroToSixty: 2.4,
      weight: 1995,
      engine: "8.0L Quad-Turbo W16",
      type: "ICE",
      transmission: "7-Speed Dual-Clutch",
      drivetrain: "AWD",
      torque: 1600,
      displacement: "8.0L",
    },
    exclusivity: 10,
    featured: true,
    features: [
      "Quad-Turbocharged W16",
      "Carbon Fiber Monocoque",
      "Hydraulic Rear Wing",
      "Titanium Exhaust System",
    ],
  },
  {
    id: "koenigsegg-gemera",
    name: "Gemera",
    brand: "Koenigsegg",
    tagline: "The Mega-GT Revolution",
    description:
      "The Koenigsegg Gemera is the world's first Mega-GT, combining hypercar performance with four-seat practicality. Its revolutionary TFG engine and hybrid powertrain deliver staggering output with unprecedented efficiency.",
    price: 1700000,
    heroImage:
      "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=1400&q=85",
    detailImage:
      "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=1400&q=85",
    engineImage:
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=1400&q=85",
    interiorImage:
      "https://images.unsplash.com/photo-1614200187524-dc4b892acf16?w=1400&q=85",
    specs: {
      horsepower: 2300,
      topSpeed: 248,
      zeroToSixty: 1.9,
      weight: 1749,
      engine: "2.0L Twin-Turbo TFG + 3 Electric Motors",
      type: "Hybrid",
      transmission: "9-Speed Direct Drive",
      drivetrain: "AWD (Torque Vectoring)",
      torque: 2750,
      displacement: "2.0L",
    },
    exclusivity: 9,
    featured: true,
    features: [
      "Freevalve Technology (No Camshaft)",
      "Full-Wire Drive-by-Wire",
      "Rear-Wheel Steering",
      "Carbon Fiber Monocoque",
    ],
  },
  {
    id: "pagani-utopia",
    name: "Utopia",
    brand: "Pagani",
    tagline: "Art in Motion",
    description:
      "The Pagani Utopia is a masterpiece of automotive artistry. With a twin-turbo V12 engineered by Mercedes-AMG and a manual transmission option, it represents the purest expression of the hypercar as sculpture.",
    price: 2500000,
    heroImage:
      "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=1400&q=85",
    detailImage:
      "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=1400&q=85",
    engineImage:
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=1400&q=85",
    interiorImage:
      "https://images.unsplash.com/photo-1614200187524-dc4b892acf16?w=1400&q=85",
    specs: {
      horsepower: 864,
      topSpeed: 217,
      zeroToSixty: 2.8,
      weight: 1280,
      engine: "6.0L Twin-Turbo V12",
      type: "ICE",
      transmission: "7-Speed Manual or Automated",
      drivetrain: "RWD",
      torque: 1100,
      displacement: "6.0L",
    },
    exclusivity: 10,
    featured: true,
    features: [
      "Mercedes-AMG V12 Engine",
      "Carbo-Titanium Monocoque",
      "Active Rear Spoiler",
      "Titanium Exhaust",
    ],
  },
  {
    id: "ferrari-sf90",
    name: "SF90 Stradale",
    brand: "Ferrari",
    tagline: "The Hybrid Assault",
    description:
      "The Ferrari SF90 Stradale is the marque's first plug-in hybrid production car, delivering unprecedented power from its V8 and three electric motors. It is a technological tour de force wrapped in Scaglietti-designed bodywork.",
    price: 524000,
    heroImage:
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=1400&q=85",
    detailImage:
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=1400&q=85",
    engineImage:
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=1400&q=85",
    interiorImage:
      "https://images.unsplash.com/photo-1614200187524-dc4b892acf16?w=1400&q=85",
    specs: {
      horsepower: 986,
      topSpeed: 211,
      zeroToSixty: 2.5,
      weight: 1600,
      engine: "4.0L Twin-Turbo V8 + 3 Electric Motors",
      type: "Hybrid",
      transmission: "8-Speed Dual-Clutch",
      drivetrain: "AWD (eAWD System)",
      torque: 800,
      displacement: "4.0L",
    },
    exclusivity: 7,
    featured: false,
    features: [
      "eAWD Hybrid System",
      "Assetto Fiorano Package",
      "Matrix LED Headlights",
      "Side Air Intakes Design",
    ],
  },
  {
    id: "lamborghini-revuelto",
    name: "Revuelto",
    brand: "Lamborghini",
    tagline: "The V12 Phoenix",
    description:
      "The Lamborghini Revuelto rises as the first HPEV (High Performance Electrified Vehicle) from Sant'Agata Bolognese. Its naturally aspirated V12, combined with three electric motors, creates a symphony of power that honors the brand's legacy.",
    price: 608000,
    heroImage:
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=1400&q=85",
    detailImage:
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=1400&q=85",
    engineImage:
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=1400&q=85",
    interiorImage:
      "https://images.unsplash.com/photo-1614200187524-dc4b892acf16?w=1400&q=85",
    specs: {
      horsepower: 1001,
      topSpeed: 217,
      zeroToSixty: 2.5,
      weight: 1772,
      engine: "6.5L Naturally Aspirated V12 + 3 Electric Motors",
      type: "Hybrid",
      transmission: "8-Speed Dual-Clutch",
      drivetrain: "AWD (eAWD)",
      torque: 725,
      displacement: "6.5L",
    },
    exclusivity: 8,
    featured: false,
    features: [
      "Naturally Aspirated V12",
      "eAWD Hybrid System",
      "Active Aerodynamics",
      "Brake-by-Wire",
    ],
  },
  {
    id: "mclaren-speedtail",
    name: "Speedtail",
    brand: "McLaren",
    tagline: "The Hyper-GT Pioneer",
    description:
      "The McLaren Speedtail is the ultimate expression of the brand's DNA. A hyper-GT that combines a 1,070-horsepower hybrid powertrain with a teardrop-shaped body, achieving 250 mph with central driving position.",
    price: 2250000,
    heroImage:
      "https://images.unsplash.com/photo-1614200187524-dc4b892acf16?w=1400&q=85",
    detailImage:
      "https://images.unsplash.com/photo-1614200187524-dc4b892acf16?w=1400&q=85",
    engineImage:
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=1400&q=85",
    interiorImage:
      "https://images.unsplash.com/photo-1614200187524-dc4b892acf16?w=1400&q=85",
    specs: {
      horsepower: 1070,
      topSpeed: 250,
      zeroToSixty: 2.8,
      weight: 1430,
      engine: "4.0L Twin-Turbo V8 + Hybrid Assist",
      type: "Hybrid",
      transmission: "7-Speed SSG",
      drivetrain: "RWD",
      torque: 1150,
      displacement: "4.0L",
    },
    exclusivity: 9,
    featured: false,
    features: [
      "Central Driving Position",
      "Active Aerodynamics",
      "Hydraulic Suspension",
      "Electrochromic Glass",
    ],
  },
  {
    id: "pininfarina-battista",
    name: "Battista",
    brand: "Pininfarina",
    tagline: "Italian Voltage",
    description:
      "The Pininfarina Battista is Italy's first pure-electric hypercar, named after the company's founder. With 1,900 horsepower and a bespoke carbon fiber chassis, it delivers electrifying performance with timeless Italian design.",
    price: 2200000,
    heroImage:
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1400&q=85",
    detailImage:
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1400&q=85",
    engineImage:
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=1400&q=85",
    interiorImage:
      "https://images.unsplash.com/photo-1614200187524-dc4b892acf16?w=1400&q=85",
    specs: {
      horsepower: 1900,
      topSpeed: 217,
      zeroToSixty: 1.86,
      weight: 2150,
      engine: "Four Permanent Magnet Synchronous Motors",
      type: "EV",
      transmission: "Single-Speed Direct Drive",
      drivetrain: "AWD (Torque Vectoring)",
      torque: 2340,
    },
    exclusivity: 9,
    featured: false,
    features: [
      "120 kWh T-Shaped Battery",
      "Active Rear Diffuser",
      "Carbon Fiber Monocoque",
      "Five Driving Modes",
    ],
  },
];

export const brands = [
  { name: "Bugatti", slug: "bugatti" },
  { name: "Koenigsegg", slug: "koenigsegg" },
  { name: "Pagani", slug: "pagani" },
  { name: "Rimac", slug: "rimac" },
  { name: "Ferrari", slug: "ferrari" },
  { name: "Lamborghini", slug: "lamborghini" },
  { name: "McLaren", slug: "mclaren" },
  { name: "Pininfarina", slug: "pininfarina" },
];

export function getCar(id: string): Car | undefined {
  return cars.find((c) => c.id === id);
}

export function getFeaturedCars(): Car[] {
  return cars.filter((c) => c.featured);
}

export const specLabels: Record<keyof Pick<
  Car["specs"],
  "horsepower" | "topSpeed" | "zeroToSixty" | "weight" | "torque"
>, string> = {
  horsepower: "Horsepower",
  topSpeed: "Top Speed (mph)",
  zeroToSixty: "0-60 mph (s)",
  weight: "Weight (kg)",
  torque: "Torque (Nm)",
};
