import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { TrendingDown, HeartHandshake, Eye, BarChart3, UserCheck, Repeat } from "lucide-react";

const differentials = [
  {
    icon: TrendingDown,
    title: "Redução de Custos",
    description: "Foco em manutenção preventiva que reduz significativamente os custos operacionais no médio e longo prazo.",
  },
  {
    icon: HeartHandshake,
    title: "Atendimento Personalizado",
    description: "Soluções adaptadas ao porte e necessidades específicas de cada cliente.",
  },
  {
    icon: Eye,
    title: "Transparência Total",
    description: "Relatórios detalhados e comunicação clara em cada etapa dos serviços prestados.",
  },
  {
    icon: BarChart3,
    title: "Gestão Organizada",
    description: "Processos profissionais e estruturados para máxima eficiência operacional.",
  },
  {
    icon: UserCheck,
    title: "Acompanhamento Técnico",
    description: "Equipe técnica dedicada ao acompanhamento contínuo do seu patrimônio.",
  },
  {
    icon: Repeat,
    title: "Contratos Recorrentes",
    description: "Relacionamento de longo prazo com manutenção programada e previsível.",
  },
];

const DifferentialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="diferenciais"
      className="scroll-mt-28 border-t border-border bg-white py-12 sm:py-16 md:py-24"
      ref={ref}
    >
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center sm:mb-16"
        >
          <span className="text-base font-semibold uppercase tracking-widest text-gold sm:text-lg">
            Diferenciais
          </span>
          <h2 className="mt-3 px-1 font-display text-2xl font-bold text-foreground sm:text-3xl md:text-5xl">
            Por que escolher a{" "}
            <span className="text-gradient-gold">Luminous</span>?
          </h2>
        </motion.div>

        <div className="grid gap-4 sm:gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
          {differentials.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group rounded-2xl border border-primary/25 bg-primary p-5 text-center shadow-card transition-all duration-500 hover:border-primary/40 hover:bg-primary sm:p-8"
            >
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-primary/30 bg-secondary/15 transition-colors group-hover:border-primary/45 group-hover:bg-secondary/25">
                <item.icon className="h-7 w-7 text-white" />
              </div>
              <h3 className="mb-3 font-display text-lg font-bold text-white">{item.title}</h3>
              <p className="text-sm leading-relaxed text-white">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
