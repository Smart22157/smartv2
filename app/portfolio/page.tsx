"use client";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/home/Footer";

import { useState } from "react";
import PortfolioHero from "@/components/portfolio/portfolioHero";
import PortfolioFilters from "@/components/portfolio/PortfolioFilters";
import PortfolioGrid from "@/components/portfolio/PortfolioGrid";

export default function PortfolioPage() {
  const [category, setCategory] = useState("All");

  return (
    <main className="bg-black text-white">
      <Navbar />
      <PortfolioHero />

      <PortfolioFilters
        active={category}
        setActive={setCategory}
      />

      <PortfolioGrid
        category={category}
      />
            <Footer/>
    </main>
  );
}