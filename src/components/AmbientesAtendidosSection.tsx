import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ServerCrash, Building2, RefreshCw, Droplets } from "lucide-react";

const ambientes = [
  {
    icon: ServerCrash,
    titulo: "Ambientes Críticos",
    descricao:
      "Infraestrutura elétrica dedicada a ambientes que exigem funcionamento contínuo, com foco em estabilidade, segurança e confiabilidade operacional.",
    exemplos: ["Salas técnicas", "Ambientes com energia contínua", "Operações sensíveis"],
  },
  {
    icon: Building2,
    titulo: "Obras Comerciais e Industriais",
    descricao:
      "Execução de sistemas técnicos em obras de médio e grande porte, garantindo organização, qualidade na implantação e base sólida para o funcionamento das operações.",
    exemplos: ["Prédios comerciais", "Galpões", "Estruturas industriais"],
  },
  {
    icon: RefreshCw,
    titulo: "Operações com Continuidade",
    descricao:
      "Suporte à infraestrutura técnica de ambientes em funcionamento, assegurando estabilidade, eficiência e continuidade operacional ao longo do tempo.",
    exemplos: ["Manutenção contínua", "Gestão preventiva", "Monitoramento técnico"],
  },
  {
    icon: Droplets,
    titulo: "Sistemas Complementares",
    descricao:
      "Implementação de sistemas de apoio, como infraestrutura hidráulica, com planejamento e padrão técnico alinhado às necessidades do projeto.",
    exemplos: ["Infraestrutura hidráulica", "Sistemas de apoio", "Projetos integrados"],
  },
];

const AmbientesAtendidosSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="ambientes"
      className="scroll-mt-28 border-t border-border bg-gradient-to-b from-muted/40 via-background to-background py-12 sm:py-16 md:py-24"
      ref={ref}
    >
      <div className="container mx-auto">
        {/* Cabeçalho */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="mx-auto mb-10 max-w-3xl text-center sm:mb-14"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[hsl(193_57%_29%)] sm:text-sm">
            Ambientes Atendidos
          </span>
          <h2 className="mt-3 font-display text-2xl font-bold leading-tight text-foreground sm:text-3xl md:text-4xl lg:text-[2.35rem]">
            Soluções técnicas para{" "}
            <span className="text-gradient-gold">cada cenário operacional</span>
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
            Atuamos em diferentes contextos operacionais, oferecendo infraestrutura técnica com padrão
            profissional, organização e confiabilidade.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-4">
          {ambientes.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.titulo}
                initial={{ opacity: 0, y: 28 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: 0.08 * i }}
                className="group flex h-full flex-col rounded-2xl border border-[hsl(193_57%_29%)]/12 bg-white p-5 shadow-sm transition-all duration-300 hover:border-[hsl(193_57%_29%)]/28 hover:shadow-md sm:p-6"
              >
                <div className="mb-4 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[hsl(193_57%_29%)]/10 transition-colors group-hover:bg-[hsl(193_57%_29%)]/15">
                  <Icon className="h-6 w-6 text-[hsl(193_57%_29%)]" aria-hidden />
                </div>

                <h3 className="mb-2 font-display text-base font-bold leading-snug text-foreground sm:text-lg">
                  {item.titulo}
                </h3>

                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                  {item.descricao}
                </p>

                <ul className="mt-auto space-y-2 border-t border-border/80 pt-4">
                  {item.exemplos.map((ex) => (
                    <li
                      key={ex}
                      className="flex items-center gap-2 text-sm text-foreground/80"
                    >
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[hsl(193_57%_29%)]" />
                      {ex}
                    </li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </div>

        {/* Frase final */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mx-auto mt-10 max-w-2xl text-center text-sm leading-relaxed text-muted-foreground sm:mt-14 md:text-base"
        >
          Independentemente do ambiente, nosso compromisso é garantir uma base técnica segura,
          organizada e preparada para operar com eficiência.
        </motion.p>
      </div>
    </section>
  );
};

export default AmbientesAtendidosSection;
