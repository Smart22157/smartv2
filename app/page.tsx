import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import StoryReveal from "@/components/home/StoryReveal";
import Stats from "@/components/home/stats";
import FeaturedWork from "@/components/home/featuredwork";
import Portfolio from "@/components/home/Portfolio";
import Services from "@/components/home/services";
import Testimonials from "@/components/home/Testimonials";
import CTA from "@/components/home/CTA";
import Footer from "@/components/home/Footer";
import WhyChoose from "@/components/home/WhyChooseUs";

export default function Home() {
  return (
    <main className="bg-[#050505] text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <StoryReveal />
      <Stats />
      <FeaturedWork />
      <Portfolio />
      <Services />
      <Testimonials />
      <CTA />
      <WhyChoose />
      <Footer />
      
    </main>
  );
}