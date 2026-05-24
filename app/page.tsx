import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhatIsWorkint from "@/components/WhatIsWorkint";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import ForBothSides from "@/components/ForBothSides";
import Pricing from "@/components/Pricing";
import SneakPeek from "@/components/SneakPeek";
import EarlyAccess from "@/components/EarlyAccess";
import SocialProof from "@/components/SocialProof";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <WhatIsWorkint />
      <Features />
      <HowItWorks />
      <ForBothSides />
      <Pricing />
      <SneakPeek />
      <EarlyAccess />
      <SocialProof />
      <FAQ />
      <Footer />
    </main>
  );
}
