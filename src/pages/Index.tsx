import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import DifferentialsSection from "@/components/DifferentialsSection";
import VantagensSection from "@/components/VantagensSection";
import PlansSection from "@/components/PlansSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import NumerosSection from "@/components/NumerosSection";
import GallerySection from "@/components/GallerySection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import TrabalheConoscoSection from "@/components/TrabalheConoscoSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <DifferentialsSection />
      <VantagensSection />
      <PlansSection />
      <TestimonialsSection />
      <NumerosSection />
      <GallerySection />
      <FAQSection />
      <ContactSection />
      <TrabalheConoscoSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
