import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Clock, Users, ClipboardCheck } from "lucide-react";
import aboutBg from "@/assets/sobreimg.jpeg";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="sobre" className="bg-card py-12 sm:py-16 md:py-24" ref={ref}>
      <div className="container mx-auto">
        <div className="grid items-stretch gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65 }}
            className="order-2 lg:order-1"
          >
            <div className="relative h-full min-h-[280px] overflow-hidden rounded-2xl shadow-elevated ring-1 ring-border/60 lg:min-h-[420px]">
              <img
                src={aboutBg}
                alt="Equipe e operações Luminous"
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent"
                aria-hidden
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.06 }}
            className="order-1 flex flex-col justify-center lg:order-2"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[hsl(193_57%_29%)] sm:text-sm">
              Quem somos
            </span>
            <h2 className="mt-3 font-display text-2xl font-bold leading-tight text-foreground sm:text-3xl md:text-4xl lg:text-[2.35rem]">
              Engenharia completa para a{" "}
              <span className="text-gradient-gold">excelência</span> da sua infraestrutura
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              A Luminous vai além da manutenção predial: somos engenharia de instalações elétricas e
              hidráulicas em todo o ciclo — projeto, execução e manutenção preditiva — em São Paulo,
              com foco em segurança, conformidade e custos sob controle.
            </p>

            <div className="mt-8">
              <div className="overflow-hidden rounded-2xl border border-[hsl(193_57%_29%)]/20 bg-white shadow-[0_12px_40px_-16px_rgba(0,0,0,0.12)] ring-1 ring-black/[0.03]">
                <div className="border-b border-[hsl(193_57%_29%)]/10 bg-gradient-to-r from-[hsl(193_57%_29%)]/[0.06] via-white to-white px-5 py-6 sm:px-7 sm:py-7">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
                    <div className="flex shrink-0 items-center">
                      <span className="font-display text-5xl font-extrabold leading-none tracking-tight text-[hsl(193_57%_29%)] sm:text-6xl md:text-7xl">
                        2+
                      </span>
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="font-display text-xl font-bold leading-tight text-foreground sm:text-2xl md:text-[1.65rem]">
                        anos de atuação no mercado
                      </p>
                      <p className="mt-2 text-base font-medium leading-relaxed text-[hsl(193_57%_29%)] sm:text-lg">
                        Experiência em instalações e manutenção técnica
                      </p>
                    </div>
                    <div className="hidden shrink-0 sm:flex sm:h-16 sm:w-px sm:bg-[hsl(193_57%_29%)]/15" aria-hidden />
                    <div className="flex shrink-0 justify-start sm:justify-center">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[hsl(193_57%_29%)]/12 shadow-inner">
                        <Clock className="h-7 w-7 text-[hsl(193_57%_29%)]" strokeWidth={2} aria-hidden />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid divide-y divide-border sm:grid-cols-2 sm:divide-x sm:divide-y-0">
                  <div className="flex gap-4 px-5 py-5 sm:px-7 sm:py-6">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[hsl(193_57%_29%)]/10">
                      <Users className="h-6 w-6 text-[hsl(193_57%_29%)]" strokeWidth={2} aria-hidden />
                    </div>
                    <p className="flex items-center font-display text-base font-bold leading-snug text-foreground sm:text-lg">
                      Dezenas de clientes atendidos
                    </p>
                  </div>
                  <div className="flex gap-4 px-5 py-5 sm:px-7 sm:py-6">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[hsl(193_57%_29%)]/10">
                      <ClipboardCheck className="h-6 w-6 text-[hsl(193_57%_29%)]" strokeWidth={2} aria-hidden />
                    </div>
                    <p className="flex items-center font-display text-base font-bold leading-snug text-foreground sm:text-lg">
                      Centenas de serviços realizados
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
