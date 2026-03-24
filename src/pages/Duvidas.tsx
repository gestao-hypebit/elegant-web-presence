import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import FAQSection from "@/components/FAQSection";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Duvidas = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <div className="border-b border-border bg-card pt-24 md:pt-28 lg:pt-36">
          <div className="container mx-auto px-6 py-6 md:py-8">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm font-medium text-gold transition-opacity hover:opacity-80"
            >
              <ArrowLeft className="h-4 w-4" />
              Voltar ao início
            </Link>
          </div>
        </div>
        <FAQSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Duvidas;
