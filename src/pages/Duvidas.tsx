import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import FAQSection from "@/components/FAQSection";
import SEO from "@/components/SEO";

const Duvidas = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Perguntas Frequentes"
        description="Tire suas dúvidas sobre instalações elétricas, hidráulicas e manutenção predial. Saiba como funcionam os contratos com SLA da Luminous em São Paulo."
        path="/duvidas"
      />
      <Header />
      <main className="pt-20 sm:pt-24 md:pt-28 lg:pt-36">
        <FAQSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Duvidas;
