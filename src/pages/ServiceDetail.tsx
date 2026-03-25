import { useParams, Link } from "react-router-dom";
import services from "@/lib/services";
import { motion } from "framer-motion";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Check, Shield } from "lucide-react";

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (service) document.title = `${service.title} — Luminous`;
    return () => {
      document.title = "Luminous";
    };
  }, [service]);

  if (!service) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto py-16 sm:py-20 text-center px-2">
          <h2 className="text-2xl font-bold mb-4">Serviço não encontrado</h2>
          <Link to="/" className="text-gold font-semibold">Voltar à página inicial</Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto pt-24 sm:pt-28 lg:pt-36 pb-12 sm:pb-20">
        <motion.header
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="mb-8"
        >
          <nav className="text-sm text-muted-foreground mb-3">
            <Link to="/" className="hover:underline">Início</Link>
            <span className="mx-2">/</span>
            <Link to="/servicos" className="hover:underline">Serviços</Link>
            <span className="mx-2">/</span>
            <span className="font-semibold">{service.title}</span>
          </nav>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold leading-tight">{service.title}</h1>
          {service.shortDescription && <p className="text-muted-foreground mt-3 max-w-3xl">{service.shortDescription}</p>}
        </motion.header>

        {service.image && (
          <div className="mb-8 overflow-hidden rounded-lg">
            <img src={service.image} alt={service.title} className="w-full h-72 md:h-96 object-cover" />
          </div>
        )}

        <div className="grid md:grid-cols-3 gap-10">
          <article className="md:col-span-2">
            <motion.section
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.05 }}
              className="prose max-w-none text-foreground"
            >
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">{service.longDescription}</p>

              <div className="mt-6 grid md:grid-cols-2 gap-6">
                <div className="bg-card border border-border rounded-xl p-6">
                  <h3 className="text-lg font-semibold mb-3">O que entregamos</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                      <span>Visita técnica e diagnóstico completo</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                      <span>Relatório com escopo e orçamento detalhado</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                      <span>Execução com garantia técnica e registro fotográfico</span>
                    </li>
                  </ul>
                </div>

                <div className="rounded-xl p-6 bg-gradient-to-b from-card/60 to-card/40 border border-border">
                  <h4 className="text-lg font-semibold mb-3">Benefícios</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="text-sm text-foreground">Redução de chamados emergenciais</div>
                    <div className="text-sm text-foreground">Economia com manutenção preventiva</div>
                    <div className="text-sm text-foreground">Relatórios para gestão</div>
                    <div className="text-sm text-foreground">Equipe técnica qualificada</div>
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-card border border-border rounded-xl p-6 flex items-start gap-4">
                <div className="pt-1">
                  <Shield className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <h4 className="font-semibold">Documentação & Garantia</h4>
                  <p className="text-sm text-muted-foreground mt-1">Fornecemos relatórios e laudos técnicos quando aplicável, e garantia dos serviços executados conforme contrato.</p>
                </div>
              </div>
            </motion.section>
          </article>

          <aside className="md:col-span-1">
            <div className="sticky top-28 space-y-6">
              <div className="bg-card border border-border rounded-xl p-6">
                <h4 className="font-semibold mb-3">Solicitar orçamento</h4>
                <p className="text-sm text-muted-foreground mb-4">Entre em contato para um orçamento detalhado e personalizado.</p>
                <a href="/#contato" className="block w-full text-center py-3 rounded-full bg-gradient-gold text-primary-foreground font-semibold">Solicitar</a>
                <Link to="/servicos" className="block text-center mt-3 text-sm text-muted-foreground hover:underline">Voltar aos serviços</Link>
              </div>

              <div className="bg-card border border-border rounded-xl p-4">
                <h5 className="font-semibold mb-2">Resumo rápido</h5>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li><strong>Atendimento:</strong> horário comercial / emergencial (conforme plano)</li>
                  <li><strong>Prazos:</strong> conforme contrato</li>
                  <li><strong>Garantia:</strong> serviços técnicos garantidos</li>
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ServiceDetail;
