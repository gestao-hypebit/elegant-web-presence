import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useRef, useEffect } from "react";
import { Wrench, Users, CalendarCheck, ThumbsUp } from "lucide-react";

const stats = [
  {
    icon: CalendarCheck,
    value: 10,
    suffix: "+",
    label: "Anos de experiência",
    description: "Uma década transformando patrimônios com excelência técnica",
  },
  {
    icon: Users,
    value: 350,
    suffix: "+",
    label: "Clientes atendidos",
    description: "Condomínios, empresas e indústrias que confiam na Luminous",
  },
  {
    icon: Wrench,
    value: 2800,
    suffix: "+",
    label: "Projetos concluídos",
    description: "Serviços elétricos e hidráulicos entregues com qualidade",
  },
  {
    icon: ThumbsUp,
    value: 98,
    suffix: "%",
    label: "Satisfação dos clientes",
    description: "Índice de aprovação medido em pesquisas pós-atendimento",
  },
];

function AnimatedCounter({
  value,
  suffix,
  isInView,
}: {
  value: number;
  suffix: string;
  isInView: boolean;
}) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.floor(v).toLocaleString("pt-BR"));
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(count, value, { duration: 2, ease: "easeOut" });
    return controls.stop;
  }, [isInView, value, count]);

  return (
    <span className="text-5xl md:text-6xl font-display font-bold text-white tabular-nums">
      <motion.span ref={ref}>{rounded}</motion.span>
      <span className="text-white/70">{suffix}</span>
    </span>
  );
}

const NumerosSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="py-24 relative overflow-hidden"
      style={{ background: "var(--gradient-hero)" }}
    >
      {/* Decorative background shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-white/[0.03] blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-white/60 mb-3">
            Resultados que falam por si
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white">
            Luminous <span className="text-white/70">em números</span>
          </h2>
          <p className="mt-4 text-white/60 max-w-xl mx-auto text-sm leading-relaxed">
            Cada número representa um compromisso cumprido, um problema resolvido
            e um cliente que pode dormir tranquilo.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden shadow-elevated">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="flex flex-col items-center text-center p-10 bg-white/[0.06] backdrop-blur-sm hover:bg-white/[0.10] transition-colors duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center mb-6">
                <stat.icon className="w-6 h-6 text-white/90" />
              </div>

              <AnimatedCounter value={stat.value} suffix={stat.suffix} isInView={isInView} />

              <div className="mt-3 text-sm font-semibold text-white/90 uppercase tracking-wide">
                {stat.label}
              </div>
              <p className="mt-2 text-xs text-white/50 leading-relaxed max-w-[180px]">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NumerosSection;
