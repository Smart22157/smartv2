import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/Services/hero";
import Photography from "@/components/Services/photography";
import Videography from "@/components/Services/videography";
import Drone from "@/components/Services/drone";
import Livestream from "@/components/Services/Livestream";
import CTA from "@/components/Services/CTA";


export default function ServicesPage() {
  return (
    <>
      <Navbar />

      <Hero />

      <Photography />

      <Videography />

      <Drone />

      <Livestream />

      <CTA/>
    </>
  );
}