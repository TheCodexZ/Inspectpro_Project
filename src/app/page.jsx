import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import AboutChecklist from "@/components/AboutChecklist";
import Checklist from "@/components/Checklist";
import FeatureCards from "@/components/FeatureCards";
import HowItWorks from "@/components/HowItWorks";
import Industries from "@/components/Industries";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900 flex flex-col">
      {/* 1. Header & Navigation (Desktop & Mobile) */}
      <Navbar />

      {/* 2. Hero Section with Mockup Preview (Desktop & Mobile) */}
      <Hero />

      {/* 3. Trusted By Logo Bar (Desktop & Mobile) */}
      <TrustBar />

      {/* Desktop-Only Sections:
          Hidden on Mobile (< md) so mobile view matches the right-hand phone mockup
          in the reference image (Hero -> Logos -> FAQ -> CTA -> Footer).
          Fully visible on Desktop & Tablet (>= md). */}
      <div className="hidden md:block">
        {/* 4. Definition & Regulatory Box */}
        <AboutChecklist />

        {/* 5. Interactive Checklist */}
        <Checklist />

        {/* 6. Feature Cards (4 Columns) */}
        <FeatureCards />

        {/* 7. How It Works (3 Steps) */}
        <HowItWorks />

        {/* 8. Industries / Use Cases (3 Cards) */}
        <Industries />
      </div>

      {/* 9. FAQ Section (Accordion - Desktop & Mobile) */}
      <FAQ />

      {/* 10. Call to Action Banner (Desktop & Mobile) */}
      <CTA />

      {/* 11. Dark Footer (Desktop & Mobile) */}
      <Footer />
    </main>
  );
}
