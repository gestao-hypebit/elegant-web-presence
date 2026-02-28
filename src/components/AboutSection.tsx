import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2 } from "lucide-react";
import aboutBg from "@/assets/about-bg.jpg";

const values = [
  "Foco estratégico em manutenção preventiva",
  "Transparência nos serviços prestados",
  "Posicionamento profissional e gestão organizada",
  "Atendimento personalizado conforme porte do cliente",
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="sobre" className="py-24 bg-card" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-elevated">
              <img src={aboutBg} alt="São Paulo" className="w-full h-[400px] object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-gradient-gold rounded-2xl p-6 shadow-gold">
              <div className="text-3xl font-display font-bold text-primary-foreground">10+</div>
              <div className="text-sm text-primary-foreground/80">Anos no mercado</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span className="text-sm font-semibold text-gold uppercase tracking-widest">Sobre Nós</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mt-3 mb-6">
              Compromisso com a{" "}
              <span className="text-gradient-gold">excelência</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              A Luminous Instalações e Serviços atua na manutenção elétrica e hidráulica predial para condomínios, empresas e indústrias em todo o estado de São Paulo, oferecendo soluções preventivas e corretivas com foco em segurança, eficiência e redução de custos operacionais.
            </p>

            <div className="space-y-4">
              {values.map((value) => (
                <div key={value} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                  <span className="text-black">{value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
