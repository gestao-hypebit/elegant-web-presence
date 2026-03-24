import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BookOpen, Shield, FileText, BadgeCheck } from "lucide-react";

const pilares = [
  {
    icon: BookOpen,
    text: "Execução e manutenção alinhadas às NBR 5410, NR-10 e demais normas aplicáveis às instalações elétricas do seu patrimônio.",
  },
  {
    icon: Shield,
    text: "Sistemas hidráulicos, SPDA (NBR 5419) e exigências de combate a incêndio tratados com rigor e documentação técnica.",
  },
  {
    icon: FileText,
    text: "Relatórios, registros e evidências para síndicos, facilities e auditorias — gestão transparente da infraestrutura.",
  },
  {
    icon: BadgeCheck,
    text: "Responsabilidade técnica e equipe regularizada: segurança jurídica e operacional em cada serviço.",
  },
];

const NormasCompromissoSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="conformidade" className="bg-gradient-gold py-20" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <span className="text-lg font-semibold uppercase tracking-[0.2em] text-white/70">
            Excelência técnica
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Rigor de normas e{" "}
            <span className="text-white/85">compromisso com a segurança</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white md:text-base">
            Além dos planos e do atendimento, a Luminous entrega tranquilidade regulatória: obras e
            manutenções pensadas para conformidade, rastreabilidade e proteção do seu patrimônio.
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-3xl grid-cols-1 gap-8 sm:grid-cols-2">
          {pilares.map((item, i) => (
            <motion.div
              key={item.text.slice(0, 40)}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="flex items-start gap-5"
            >
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-2 border-white/40 bg-white/15 backdrop-blur-sm">
                <item.icon className="h-7 w-7 text-white" />
              </div>
              <p className="text-base font-medium leading-snug text-white">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NormasCompromissoSection;
