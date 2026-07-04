import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/home/Footer";

import Hero from "@/components/booking/Hero";
import BookingForm from "@/components/booking/BookingForm";
import WhyBookUs from "@/components/booking/WhyBookUs";
import FAQ from "@/components/booking/FAQ";

export default function BookingPage() {
  return (
    <main className="bg-black text-white min-h-screen">
      <Navbar />

      <Hero />

      <BookingForm />

      <WhyBookUs />

      <FAQ />

      <Footer />
    </main>
  );
}