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
    <section id="diferenciais" className="py-24 bg-card" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-gold uppercase tracking-widest">Diferenciais</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mt-3">
            Por que escolher a{" "}
            <span className="text-gradient-gold">Luminous</span>?
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentials.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group text-center p-8 rounded-2xl border border-border hover:border-gold/30 bg-background/50 transition-all duration-500"
            >
              <div className="w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-gold/20 transition-colors">
                <item.icon className="w-7 h-7 text-gold" />
              </div>
              <h3 className="text-lg font-display font-bold mb-3 text-foreground">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
