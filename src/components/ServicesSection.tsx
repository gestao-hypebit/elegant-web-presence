import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, Droplets, Wrench, CalendarCheck, FileText } from "lucide-react";
import serviceElectrical from "@/assets/service-electrical.jpg";
import serviceHydraulic from "@/assets/service-hydraulic.jpg";

const services = [
  {
    icon: Zap,
    title: "Manutenção Elétrica Predial",
    description: "Diagnóstico, reparo e modernização de sistemas elétricos com foco em segurança e eficiência energética.",
    image: serviceElectrical,
  },
  {
    icon: Droplets,
    title: "Manutenção Hidráulica Predial",
    description: "Prevenção e correção de vazamentos, desentupimentos e manutenção de sistemas hidráulicos completos.",
    image: serviceHydraulic,
  },
  {
    icon: Wrench,
    title: "Instalações Elétricas e Hidráulicas",
    description: "Projetos e execução de instalações completas para edificações novas ou reformas.",
  },
  {
    icon: CalendarCheck,
    title: "Manutenção Preventiva e Corretiva",
    description: "Planos de manutenção programada para evitar falhas e reduzir custos a longo prazo.",
  },
  {
    icon: FileText,
    title: "Contratos Recorrentes",
    description: "Gestão contínua de manutenção predial com acompanhamento técnico personalizado.",
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="servicos" className="py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-gold uppercase tracking-widest">Serviços</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mt-3">
            Soluções completas em{" "}
            <span className="text-gradient-gold">manutenção predial</span>
          </h2>
        </motion.div>

        {/* Featured services with images */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {services.slice(0, 2).map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group relative rounded-2xl overflow-hidden bg-card border border-border hover:border-gold/30 transition-all duration-500 shadow-card"
            >
              {service.image && (
                <div className="h-52 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              )}
              <div className="p-6">
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-gold" />
                </div>
                <h3 className="text-xl font-display font-bold mb-2 text-foreground">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other services */}
        <div className="grid md:grid-cols-3 gap-6">
          {services.slice(2).map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: (i + 2) * 0.15 }}
              className="group rounded-2xl p-6 bg-card border border-border hover:border-gold/30 transition-all duration-500 shadow-card"
            >
              <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-4">
                <service.icon className="w-6 h-6 text-gold" />
              </div>
              <h3 className="text-lg font-display font-bold mb-2 text-foreground">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
