import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, Star } from "lucide-react";

const plans = [
  {
    name: "Essencial",
    description: "Ideal para condomínios de pequeno porte",
    price: "Sob consulta",
    featured: false,
    features: [
      "Visitas técnicas mensais",
      "Manutenção preventiva básica",
      "Relatório mensal de atividades",
      "Atendimento em horário comercial",
      "Suporte por telefone e e-mail",
    ],
  },
  {
    name: "Profissional",
    description: "Para empresas e condomínios de médio porte",
    price: "Sob consulta",
    featured: true,
    features: [
      "Visitas técnicas quinzenais",
      "Manutenção preventiva e corretiva",
      "Relatório detalhado quinzenal",
      "Atendimento estendido",
      "Prioridade em chamados emergenciais",
      "Acompanhamento técnico dedicado",
    ],
  },
  {
    name: "Corporativo",
    description: "Para indústrias e grandes edificações",
    price: "Sob consulta",
    featured: false,
    features: [
      "Visitas técnicas semanais",
      "Manutenção completa elétrica e hidráulica",
      "Relatórios e dashboards em tempo real",
      "Atendimento 24/7",
      "Equipe técnica exclusiva",
      "Gestão integrada de facilities",
      "SLA garantido por contrato",
    ],
  },
];

const PlansSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="planos" className="py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-gold uppercase tracking-widest">Planos</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mt-3">
            Contratos sob medida para sua{" "}
            <span className="text-gradient-gold">necessidade</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
            Escolha o plano ideal e garanta manutenção contínua com previsibilidade de custos e máxima eficiência.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className={`relative flex flex-col rounded-2xl p-8 border transition-all duration-500 ${
                plan.featured
                  ? "border-gold/40 bg-card shadow-gold scale-[1.02]"
                  : "border-border bg-card shadow-card hover:border-gold/20"
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-gold text-primary-foreground text-xs font-bold uppercase tracking-wider">
                  <Star className="w-3 h-3" />
                  Mais Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-display font-bold text-foreground">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{plan.description}</p>
              </div>

              <div className="mb-8">
                <span className="text-lg font-semibold text-gold">{plan.price}</span>
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-black">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contato"
                className={`w-full py-3.5 rounded-xl text-center font-semibold text-sm transition-all duration-300 ${
                  plan.featured
                    ? "bg-gradient-gold text-primary-foreground hover:opacity-90 shadow-gold"
                    : "border border-border text-foreground hover:border-gold/50 hover:text-gold"
                }`}
              >
                Solicitar Proposta
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlansSection;
