import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Zap, Droplets, Wrench, CalendarCheck, FileText } from "lucide-react";
import services from "@/lib/services";

const iconMap: Record<string, any> = {
  "manutencao-eletrica-predial": Zap,
  "manutencao-hidraulica-predial": Droplets,
  "instalacoes-eletricas-e-hidraulicas": Wrench,
  "manutencao-preventiva-e-corretiva": CalendarCheck,
  "contratos-recorrentes": FileText,
};

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
          {services.slice(0, 2).map((service, i) => {
            const Icon = iconMap[service.slug];
            const hideHomeImage = [
              "manutencao-eletrica-predial",
              "manutencao-hidraulica-predial",
            ].includes(service.slug);

            return (
              <Link key={service.slug} to={`/servico/${service.slug}`} className="group block" aria-label={`Abrir detalhes de ${service.title}`}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  className="relative rounded-2xl overflow-hidden bg-card border border-border hover:border-gold/30 transition-all duration-500 shadow-card"
                >
                  {!hideHomeImage && service.image && (
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
                      {Icon && <Icon className="w-6 h-6 text-gold" />}
                    </div>
                    <h3 className="text-xl font-display font-bold mb-2 text-foreground">{service.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{service.shortDescription}</p>
                    <div className="text-sm mt-3 text-gold font-semibold">Leia mais →</div>
                  </div>
                </motion.div>
              </Link>
            );
          })}
        </div>

        {/* Other services */}
        <div className="grid md:grid-cols-3 gap-6">
          {services.slice(2).map((service, i) => {
            const Icon = iconMap[service.slug];
            const hideHomeImage = [
              "manutencao-eletrica-predial",
              "manutencao-hidraulica-predial",
            ].includes(service.slug);
            return (
              <Link key={service.slug} to={`/servico/${service.slug}`} className="group block" aria-label={`Abrir detalhes de ${service.title}`}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: (i + 2) * 0.15 }}
                  className="rounded-2xl p-6 bg-card border border-border hover:border-gold/30 transition-all duration-500 shadow-card"
                >
                  <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-4">
                    {Icon && <Icon className="w-6 h-6 text-gold" />}
                  </div>
                  <h3 className="text-lg font-display font-bold mb-2 text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{service.shortDescription}</p>
                  <div className="text-sm mt-3 text-gold font-semibold">Leia mais →</div>
                </motion.div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
