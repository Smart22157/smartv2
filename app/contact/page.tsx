import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/contact/Hero";
import ContactInfo from "@/components/contact/ContactInfo";
import Socials from "@/components/contact/Socials";
import Map from "@/components/contact/Map";
import CTA from "@/components/contact/CTA";

export default function ContactPage() {
  return (
    <main className="bg-black text-white overflow-x-hidden">

      <Navbar />

      <Hero />

      <ContactInfo />

        <Socials />

      <Map />

      <CTA />

    </main>
  );
}