import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import DestaqueInfraSection from "@/components/DestaqueInfraSection";
import ServicesSection from "@/components/ServicesSection";
import DifferentialsSection from "@/components/DifferentialsSection";
import VantagensSection from "@/components/VantagensSection";
import NormasCompromissoSection from "@/components/NormasCompromissoSection";
import PlansSection from "@/components/PlansSection";
import ParallaxPosPlanosSection from "@/components/ParallaxPosPlanosSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import GallerySection from "@/components/GallerySection";
import ContactSection from "@/components/ContactSection";
import TrabalheConoscoSection from "@/components/TrabalheConoscoSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      {/* Camada acima do fundo fixo da hero — parallax: Sobre e demais seções sobem cobrindo a imagem */}
      <div className="relative z-10">
        <AboutSection />
        <DestaqueInfraSection />
        {/* <ServicesSection /> */}
        <DifferentialsSection />
        <VantagensSection />
        <GallerySection />
        <ParallaxPosPlanosSection />

        <PlansSection />
        <NormasCompromissoSection />
        <TestimonialsSection />
        <TrabalheConoscoSection />
        {/* <ContactSection /> */}

        <Footer />
      </div>
      <WhatsAppButton />
    </div>
  );
};

export default Index;
