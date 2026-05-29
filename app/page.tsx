import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhatIsWorkint from "@/components/WhatIsWorkint";
import WorkLinks from "@/components/WorkLinks";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import ForBothSides from "@/components/ForBothSides";
import SneakPeek from "@/components/SneakPeek";
import EarlyAccess from "@/components/EarlyAccess";
import SocialProof from "@/components/SocialProof";
import FAQ from "@/components/FAQ";
import VisitorCount from "@/components/VisitorCount";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <WhatIsWorkint />
      <WorkLinks />
      <Features />
      <HowItWorks />
      <ForBothSides />
      <SneakPeek />
      <EarlyAccess />
      <SocialProof />
      <FAQ />
      <VisitorCount />
      <Footer />
    </main>
  );
}
