import NavBar from "@/components/global/Navbar";
import HeroComponent from "./_components/Hero";
import InfinityScrollComponent from "./_components/Infinity-scroll";
import HeroParallaxComponent from "./_components/Hero-parallax";
import PricingComponent from "./_components/Pricing";
import Footer from "@/components/global/Footer";
import FaqComponent from "./_components/Faqs";

export default function Home() {
  return (
    <main>
      <NavBar />
      <HeroComponent />
      <InfinityScrollComponent />
      <HeroParallaxComponent />
      <PricingComponent />
      <FaqComponent />
      <Footer />
    </main>
  );
}
