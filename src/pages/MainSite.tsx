import MainNav from "@/components/layout/MainNav";
import MainFooter from "@/components/layout/MainFooter";
import HeroSection from "@/components/sections/HeroSection";
import SocialProofBar from "@/components/sections/SocialProofBar";
import WhySection from "@/components/sections/WhySection";
import ServicesSection from "@/components/sections/ServicesSection";
import SecurityTrustBar from "@/components/sections/SecurityTrustBar";
import HowWeWorkSection from "@/components/sections/HowWeWorkSection";
import CaseStudiesSection from "@/components/sections/CaseStudiesSection";
import AboutSection from "@/components/sections/AboutSection";
import CTABand from "@/components/sections/CTABand";
import FAQSection from "@/components/sections/FAQSection";
import ContactSection from "@/components/sections/ContactSection";

export default function MainSite() {
  return (
    <div style={{ background: "var(--bg)", color: "var(--text)" }}>
      <MainNav />
      <HeroSection />
      <SocialProofBar />
      <WhySection />
      <ServicesSection />
      <SecurityTrustBar />
      <HowWeWorkSection />
      <CaseStudiesSection />
      <AboutSection />
      <CTABand />
      <FAQSection />
      <ContactSection />
      <MainFooter />
    </div>
  );
}
