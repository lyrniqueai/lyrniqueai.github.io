import MainNav from "@/components/layout/MainNav";
import MainFooter from "@/components/layout/MainFooter";
import ScrollProgress from "@/components/layout/ScrollProgress";
import CursorGlow from "@/components/layout/CursorGlow";
import HeroSection from "@/components/sections/HeroSection";
import SocialProofBar from "@/components/sections/SocialProofBar";
import ChallengeSection from "@/components/sections/ChallengeSection";
import DifferentiatorSection from "@/components/sections/DifferentiatorSection";
import ServicesSection from "@/components/sections/ServicesSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import WhySection from "@/components/sections/WhySection";
import HowWeWorkSection from "@/components/sections/HowWeWorkSection";
import CaseStudiesSection from "@/components/sections/CaseStudiesSection";
import AboutSection from "@/components/sections/AboutSection";
import FAQSection from "@/components/sections/FAQSection";
import CTABand from "@/components/sections/CTABand";
import ContactSection from "@/components/sections/ContactSection";
import SectionDivider from "@/components/common/SectionDivider";
import BackToTop from "@/components/layout/BackToTop";

export default function MainSite() {
  return (
    <div style={{ background: "var(--bg)", color: "var(--text)" }}>
      <ScrollProgress />
      <CursorGlow />
      <BackToTop />
      <MainNav />

      <HeroSection />
      <SectionDivider />
      <SocialProofBar />
      <ChallengeSection />
      <SectionDivider />
      <DifferentiatorSection />
      <SectionDivider />
      <ServicesSection />
      <SectionDivider />
      <TestimonialsSection />
      <SectionDivider />
      <WhySection />
      <SectionDivider />
      <HowWeWorkSection />
      <CaseStudiesSection />
      <SectionDivider />
      <AboutSection />
      <SectionDivider />
      <FAQSection />
      <CTABand />
      <SectionDivider />
      <ContactSection />
      <MainFooter />
    </div>
  );
}
