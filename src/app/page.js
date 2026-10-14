import Hero from "@/components/home/Hero";
import PriceRiseSection from "@/components/home/PriceRiseSection";
import PricefallSection from "@/components/home/PricefallSection";
import AllProductsSection from "@/components/home/AllProductsSection";

export default function Home() {
  return (
    <div>
      <Hero />
      <PriceRiseSection />
      <PricefallSection />
      <AllProductsSection />
    </div>
  );
}
