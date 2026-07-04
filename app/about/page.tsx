import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/about/Hero";
import Story from "@/components/about/Story";
import Team from "@/components/about/Team";
import Process from "@/components/about/Process";

export default function AboutPage() {
  return (
    <main className="bg-black text-white overflow-x-hidden">
      <Navbar />

      <Hero />

      <Story />

      <Team />

      <Process />

    </main>
  );
}