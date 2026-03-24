import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";
import { useRef, useEffect } from "react";
import aboutBg from "@/assets/sobreimg.jpeg";

const stats = [
  { value: 10, suffix: "+", label: "Anos de experiência" },
  { value: 350, suffix: "+", label: "Clientes atendidos" },
  { value: 2800, suffix: "+", label: "Projetos concluídos" },
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

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(count, value, { duration: 2, ease: "easeOut" });
    return () => controls.stop();
  }, [isInView, value, count]);

  return (
    <span className="text-3xl sm:text-4xl md:text-[2.75rem] font-display font-bold tabular-nums leading-none text-gold">
      <motion.span>{rounded}</motion.span>
      <span className="text-gold/80">{suffix}</span>
    </span>
  );
}

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="sobre" className="py-24 bg-card" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 lg:items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65 }}
            className="order-2 lg:order-1"
          >
            <div className="rounded-2xl overflow-hidden shadow-elevated ring-1 ring-border/60 h-full min-h-[320px] lg:min-h-[480px]">
              <img
                src={aboutBg}
                alt="Equipe e operações Luminous"
                className="w-full h-full min-h-[320px] lg:min-h-[480px] object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 28 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.06 }}
            className="order-1 lg:order-2 flex flex-col lg:justify-start"
          >
            <span className="text-lg font-semibold text-gold uppercase tracking-[0.2em]">
              Quem somos
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mt-3 mb-4 leading-tight">
              Engenharia completa para a{" "}
              <span className="text-gradient-gold">excelência</span> da sua infraestrutura
            </h2>
            <p className=" leading-relaxed mb-0">
              A Luminous vai além da manutenção predial: somos engenharia de instalações elétricas e
              hidráulicas em todo o ciclo — projeto, execução e manutenção preditiva — em São Paulo,
              com foco em segurança, conformidade e custos sob controle.
            </p>

            <div className="mt-6 pt-5 border-t border-border">
              <div className="grid grid-cols-2 gap-x-6 gap-y-8 lg:grid-cols-3 lg:gap-x-0 lg:gap-y-0">
                {stats.map((stat, i) => (
                  <div
                    key={stat.label}
                    className={`flex flex-col items-start lg:px-5 ${
                      i > 0 ? "lg:border-l lg:border-border" : ""
                    }`}
                  >
                    <AnimatedCounter
                      value={stat.value}
                      suffix={stat.suffix}
                      isInView={isInView}
                    />
                    <span className="mt-2 text-xs sm:text-sm font-bold text-foreground uppercase tracking-wide leading-snug">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
