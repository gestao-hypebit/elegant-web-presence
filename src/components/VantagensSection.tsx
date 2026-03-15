import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ShieldCheck, Zap, HardHat, Building2 } from "lucide-react";

const vantagens = [
  {
    icon: ShieldCheck,
    text: "Supervisão técnica especializada em cada serviço elétrico e hidráulico executado;",
  },
  {
    icon: Zap,
    text: "Atendimento emergencial ágil para falhas elétricas e hidráulicas no seu patrimônio;",
  },
  {
    icon: HardHat,
    text: "Equipe técnica qualificada, regularizada e com experiência em manutenção predial;",
  },
  {
    icon: Building2,
    text: "Gestão completa da manutenção do seu condomínio ou empresa, sem preocupações operacionais.",
  },
];

const VantagensSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="vantagens" className="py-20 bg-gradient-gold" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white">
            Vantagens de ser um cliente{" "}
            <span className="text-white/80">Luminous</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {vantagens.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="flex items-center gap-5"
            >
              <div className="shrink-0 w-16 h-16 rounded-full border-2 border-white/40 bg-white/15 flex items-center justify-center backdrop-blur-sm">
                <item.icon className="w-7 h-7 text-white" />
              </div>
              <p className="text-white text-base font-medium leading-snug">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VantagensSection;
