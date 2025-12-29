import HeroSlider from "@/components/home/HeroSlider";
import HomeCTA from "@/components/home/HomeCTA";
import HomeStats from "@/components/home/HomeStats";
import HomeWhyUs from "@/components/home/HomeWhyUs";
import Testimonials from "@/components/home/Testimonials";
import HomeSkills from "@/components/home/HomeSkills";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSlider />
      <HomeCTA />
      <HomeStats />
      <HomeWhyUs />
      <HomeSkills />
      <Testimonials />
    </main>
  );
}
