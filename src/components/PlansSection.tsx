import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, Star, X } from "lucide-react";

const plans = [
  {
    id: "essencial",
    color: "green",
    name: "Plano Básico — Essencial",
    tagline: "Para pequenas empresas, comércios e condomínios simples",
    includes: [
      "Manutenção corretiva",
      "Até 4 chamados/mês",
      "Até 8 horas técnicas/mês",
      "Materiais de pequeno porte até R$ 1.000/mês",
      "Atendimento em horário comercial",
      "Prazo de atendimento: até 48h",
    ],
    excludes: ["Obras", "Ampliação elétrica", "Troca de quadro", "Materiais acima do limite"],
    note: "Ideal para volume e entrada de novos clientes.",
    featured: false,
  },
  {
    id: "profissional",
    color: "blue",
    name: "Plano Profissional — Padrão Ouro",
    tagline: "O plano que mais vende (e o mais saudável)",
    includes: [
      "Manutenção preventiva + corretiva",
      "Até 8 chamados/mês",
      "Até 16 horas técnicas/mês",
      "Materiais de pequeno porte até R$ 3.000/mês",
      "Atendimento prioritário",
      "Prazo de atendimento: até 24h",
      "Relatório mensal simples",
    ],
    excludes: ["Grandes reformas", "Materiais fora do teto"],
    note: "Esse plano é o equivalente ao B2G de R$ 25k, só que fracionado.",
    featured: true,
  },
  {
    id: "premium",
    color: "purple",
    name: "Plano Premium — Full Service",
    tagline: "Para indústrias, redes e empresas críticas",
    includes: [
      "Preventiva + corretiva + emergencial",
      "Chamados ilimitados",
      "Até 32 horas técnicas/mês",
      "Materiais de pequeno porte até R$ 5.000/mês",
      "Atendimento emergencial",
      "SLA de até 6–12h",
      "Relatório técnico detalhado",
      "Visitas preventivas programadas",
    ],
    excludes: ["Obras estruturais pesadas", "Materiais especiais/importados"],
    note: "Para indústrias, redes, empresas críticas.",
    featured: false,
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
          <span className="text-lg font-semibold text-gold uppercase tracking-widest">Planos</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mt-3">
            Contratos sob medida para sua{" "}
            <span className="text-gradient-gold">necessidade</span>
          </h2>
          <p className=" mt-4 max-w-lg mx-auto">
            Escolha o plano ideal e garanta manutenção contínua com previsibilidade de custos e máxima eficiência.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className={`relative flex flex-col rounded-2xl p-8 border transition-all duration-500 ${
                plan.featured
                  ? "border-gold/40 bg-gradient-to-b from-card to-card/95 shadow-lg scale-[1.02]"
                  : "border-border bg-card shadow-card hover:border-gold/20"
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-gold text-primary-foreground text-xs font-bold uppercase tracking-wider">
                  <Star className="w-3 h-3" />
                  Mais Popular
                </div>
              )}

              <div className="mb-6">
                <div className="flex items-start gap-4">
                
                  <div>
                    <h3 className="text-2xl font-display font-bold text-foreground">{plan.name}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{plan.tagline}</p>
                    <div className="text-xs text-muted-foreground mt-2">{plan.note}</div>
                  </div>
                </div>
              </div>

              <div className="mb-6 flex-1">
                <h4 className="text-sm font-semibold mb-3">Inclui</h4>
                <ul className="space-y-3">
                  {plan.includes.map((feat) => (
                    <li key={feat} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-foreground">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="text-sm font-semibold mb-2">Não inclui</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {plan.excludes.map((x) => (
                    <li key={x} className="flex items-center gap-2">
                      <X className="w-4 h-4 text-red-500" />
                      <span>{x}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-4">
                <a
                  href="#contato"
                  className={`w-full block py-3.5 rounded-full text-center font-semibold text-sm transition-all duration-300 ${
                    plan.featured
                      ? "bg-gradient-gold text-primary-foreground hover:opacity-95 shadow-lg"
                      : "border border-border text-foreground hover:border-gold/50 hover:text-gold"
                  }`}
                >
                  Solicite uma proposta
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlansSection;
