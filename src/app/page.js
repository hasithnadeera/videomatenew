'use client';
import React, { useRef } from "react";
import Image from "next/image";

// Import all components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import TrustedBy from "./components/TrustedBy";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import CaseStudies from "./components/caseStudies";
import PricingSection from "./components/PricingSection";
import NewPricing from "./components/newpricing";
import Testimonials from "./components/Testimonials";

import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="font-sans min-h-screen bg-gradient-to-b from-[#150A28] to-black">
      <Navbar />
      <main>
        <div id="home">
          <Hero />
        </div>
        <div id="portfolio">
          <Portfolio />
        </div>
        <TrustedBy />
        <Features />
        <HowItWorks />
        <CaseStudies />
        <PricingSection />
        <NewPricing/>
        <div id="testimonials">
          <Testimonials />
        </div>
        <div id="FAQ">
          <FAQ />
        </div>
      </main>
      <Footer />
    </div>
  );
}
