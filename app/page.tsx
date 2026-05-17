import PageTransition from "@/components/ui/PageTransition";
import HeroSection from "@/components/landing/HeroSection";
import BrandShowcaseSlider from "@/components/landing/BrandShowcaseSlider";
import FeaturedGrid from "@/components/landing/FeaturedGrid";

export default function Home() {
  return (
    <PageTransition>
      <HeroSection />
      <BrandShowcaseSlider />
      <FeaturedGrid />
    </PageTransition>
  );
}
