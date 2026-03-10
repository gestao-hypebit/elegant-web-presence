import { motion } from "framer-motion";
import { ArrowRight, Shield, Clock, Award } from "lucide-react";
import heroBg from "@/assets/hero-image.jpg";

const stats = [
  { icon: Shield, label: "Segurança", value: "100%" },
  { icon: Clock, label: "Disponibilidade", value: "24/7" },
  { icon: Award, label: "Anos de Experiência", value: "10+" },
];

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-[70vh] md:min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="Edifício comercial moderno" className="w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/75 to-background/40 md:from-background/70 md:via-background/60 md:to-background/30" />
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-20 md:pt-24">
        <div className="max-w-xl sm:max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/30 bg-gold/5 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-gradient-gold" />
            <span className="text-sm text-gold font-medium">Referência em manutenção predial em SP</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6"
          >
            Excelência em{" "}
            <span className="text-gradient-gold">Manutenção</span>{" "}
            Elétrica e Hidráulica
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base sm:text-lg text-muted-foreground mb-8 leading-relaxed max-w-xl"
          >
            Soluções preventivas e corretivas para condomínios, empresas e indústrias em todo o estado de São Paulo. Segurança, eficiência e redução de custos operacionais.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <a
              href="#contato"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-lg bg-gradient-gold text-primary-foreground font-semibold hover:opacity-90 transition-opacity shadow-gold"
            >
              Solicitar Orçamento
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#servicos"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-lg border border-border text-foreground font-semibold hover:border-gold/50 border-gold/50 text-gold transition-colors"
            >
              Nossos Serviços
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-6 md:gap-12"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                  <stat.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
