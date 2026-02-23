import CallToAction from "@/components/modules/Home/CallToAction";
import Feature from "@/components/modules/Home/Feature";
import FeaturedDoctor from "@/components/modules/Home/FeaturedDoctor";
import HeroSection from "@/components/modules/Home/HeroSection";


export default function HomePage() {
  return (
    <div className="space-y-20">
      <HeroSection/>
      <Feature/>
      <FeaturedDoctor/>
      <CallToAction/>
    </div>
  );
}
