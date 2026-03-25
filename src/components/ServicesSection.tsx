import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Zap, Droplets, Wrench, CalendarCheck, FileText, ArrowRight } from "lucide-react";
import services from "@/lib/services";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
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
    <section id="servicos" className="scroll-mt-24 bg-background py-12 sm:py-16 md:py-24" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-10 max-w-3xl text-center sm:mb-12 md:mb-16"
        >
          <span className="text-base sm:text-lg font-semibold uppercase tracking-widest text-gold">Serviços</span>
          <h2 className="mt-3 font-display text-2xl font-bold sm:text-3xl md:text-4xl px-1">
            Engenharia completa para a{" "}
            <span className="text-gradient-gold">sua infraestrutura</span>
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
            Da concepção e instalação de sistemas elétricos e hidráulicos de alta complexidade à gestão
            preditiva da manutenção — com foco em continuidade operacional, segurança patrimonial e
            conformidade. Atendemos condomínios, empresas e operações críticas em todo o estado de São
            Paulo.
          </p>
        </motion.div>

        <div className="mb-6 grid gap-4 sm:gap-6 md:grid-cols-2">
          {services.slice(0, 2).map((service, i) => {
            const Icon = iconMap[service.slug];
            const hideHomeImage = [
              "manutencao-eletrica-predial",
              "manutencao-hidraulica-predial",
            ].includes(service.slug);

            return (
              <Link
                key={service.slug}
                to={`/servico/${service.slug}`}
                className="group block"
                aria-label={`Abrir detalhes de ${service.title}`}
              >
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-all duration-500 hover:border-gold/30"
                >
                  {!hideHomeImage && service.image && (
                    <div className="h-52 overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                  )}
                  <div className="p-5 sm:p-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10">
                      {Icon && <Icon className="h-6 w-6 text-gold" />}
                    </div>
                    <h3 className="mb-2 font-display text-lg sm:text-xl font-bold text-foreground">{service.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{service.shortDescription}</p>
                    <div className="mt-3 text-sm font-semibold text-gold">Leia mais →</div>
                  </div>
                </motion.div>
              </Link>
            );
          })}
        </div>

        <div className="mb-10 grid gap-4 sm:gap-6 md:grid-cols-3">
          {services.slice(2).map((service, i) => {
            const Icon = iconMap[service.slug];
            return (
              <Link
                key={service.slug}
                to={`/servico/${service.slug}`}
                className="group block"
                aria-label={`Abrir detalhes de ${service.title}`}
              >
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: (i + 2) * 0.15 }}
                  className="rounded-2xl border border-border bg-card p-5 sm:p-6 shadow-card transition-all duration-500 hover:border-gold/30"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10">
                    {Icon && <Icon className="h-6 w-6 text-gold" />}
                  </div>
                  <h3 className="mb-2 font-display text-lg font-bold text-foreground">{service.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{service.shortDescription}</p>
                  <div className="mt-3 text-sm font-semibold text-gold">Leia mais →</div>
                </motion.div>
              </Link>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col items-center justify-center gap-3 border-t border-border pt-10 sm:flex-row sm:gap-4"
        >
          <Link
            to="/servicos"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-gold px-8 py-3.5 text-sm font-semibold text-primary-foreground shadow-gold transition-opacity hover:opacity-90"
          >
            Portfólio completo e normas técnicas
            <ArrowRight className="h-4 w-4" />
          </Link>
          <p className="max-w-md text-center text-xs text-muted-foreground sm:text-left">
            Na página Serviços você encontra o detalhamento institucional: instalações, manutenção,
            preventiva, contratos e segmentos atendidos.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
