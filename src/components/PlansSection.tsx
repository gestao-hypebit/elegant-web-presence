import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, Shield, Star } from "lucide-react";
import { HashLink } from "@/components/HashLink";
import {
  planosAncoragem,
  planosTituloMatriz,
  planosFlexibilizacao,
  planosSlaTitulo,
  planosSlaTexto,
  planosColunas,
  planosMatrizLinhas,
} from "@/content/planosMatriz";

const WHATSAPP = "https://wa.me/5511911094032";
const waElite = `${WHATSAPP}?text=${encodeURIComponent(
  "Olá! Tenho interesse em falar com um especialista sobre o plano ELITE 24/7 da Luminous.",
)}`;

function MatrizCell({ value, inverse }: { value: string; inverse?: boolean }) {
  if (value === "✔️") {
    return (
      <span className="inline-flex justify-center" aria-label="Sim">
        <Check
          className={`h-5 w-5 ${inverse ? "text-white" : "text-[hsl(193_57%_29%)]"}`}
          strokeWidth={2.5}
        />
      </span>
    );
  }
  if (value === "❌") {
    return (
      <span
        className={`tabular-nums ${inverse ? "text-white/45" : "text-muted-foreground"}`}
        aria-label="Não"
      >
        —
      </span>
    );
  }
  return <span className="leading-snug">{value}</span>;
}

const PlansSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const colClass = (i: number) => {
    if (i === 2) {
      return "bg-violet-500/[0.06] border-x border-violet-500/20";
    }
    if (i === 3) {
      return "bg-[hsl(193_70%_15%)] border-x-2 border-[hsl(193_57%_29%)] text-white";
    }
    return "";
  };

  const thClass = (i: number) => {
    const base = "px-3 py-4 text-center align-bottom sm:px-4";
    if (i === 2) return `${base} ${colClass(i)} rounded-t-lg`;
    if (i === 3) return `${base} ${colClass(i)} rounded-t-lg`;
    return `${base} bg-muted/30`;
  };

  const tdClass = (i: number) => {
    const base = "px-3 py-3 text-center text-sm sm:px-4 sm:text-[0.8125rem] sm:leading-snug";
    return `${base} ${colClass(i)}`;
  };

  return (
    <section id="planos" className="scroll-mt-28 bg-background py-12 sm:py-16 md:py-24" ref={ref}>
      <div className="container mx-auto max-w-7xl">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45 }}
          className="mx-auto mb-6 max-w-3xl text-center text-sm font-medium leading-relaxed text-[hsl(193_57%_29%)] md:text-base"
        >
          {planosAncoragem}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="mb-8 text-center sm:mb-10"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Planos
          </span>
          <h2 className="mt-3 px-1 font-display text-xl font-bold leading-tight text-foreground sm:text-2xl md:text-3xl lg:text-4xl">
            {planosTituloMatriz}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="-mx-4 overflow-x-auto px-4 sm:mx-0 sm:px-0"
        >
          <table className="w-full min-w-[900px] border-collapse text-foreground">
            <thead>
              <tr className="border-b border-border">
                <th
                  scope="col"
                  className="sticky left-0 z-20 min-w-[140px] bg-background px-3 py-4 text-left text-xs font-semibold uppercase tracking-wide text-muted-foreground shadow-[4px_0_12px_-4px_rgba(0,0,0,0.06)] sm:min-w-[180px] sm:px-4"
                >
                  Recursos / Plano
                </th>
                {planosColunas.map((plano, i) => (
                  <th key={plano.id} scope="col" className={thClass(i)}>
                    <div className="flex flex-col items-center gap-2">
                      {plano.destaque === "recomendado" && (
                        <span className="inline-flex items-center gap-1 rounded-full bg-[hsl(193_57%_29%)] px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">
                          <Star className="h-3 w-3" aria-hidden />
                          Mais popular
                        </span>
                      )}
                      {plano.destaque === "elite" && (
                        <span className="inline-flex items-center gap-1 rounded-full border border-white/25 bg-white/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">
                          <Shield className="h-3 w-3" aria-hidden />
                          Disponibilidade crítica
                        </span>
                      )}
                      <span className="text-lg sm:text-xl" aria-hidden>
                        {plano.emoji}
                      </span>
                      <span
                        className={`font-display text-sm font-bold leading-tight sm:text-base ${
                          plano.destaque === "elite" ? "text-white" : ""
                        }`}
                      >
                        {plano.nomeCompleto}
                      </span>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {planosMatrizLinhas.map((row) => (
                <tr key={row.label} className="border-b border-border/80 hover:bg-muted/20">
                  <th
                    scope="row"
                    className="sticky left-0 z-10 bg-background px-3 py-3 text-left text-xs font-semibold text-foreground shadow-[4px_0_12px_-4px_rgba(0,0,0,0.06)] sm:px-4 sm:text-sm"
                  >
                    {row.label}
                  </th>
                  {row.valores.map((cell, i) => (
                    <td
                      key={`${row.label}-${planosColunas[i].id}`}
                      className={`${tdClass(i)} ${i === 3 ? "text-white/95" : "text-foreground/90"}`}
                    >
                      <MatrizCell value={cell} inverse={i === 3} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4"
        >
          <HashLink
            to="/#contato"
            className="flex min-h-[48px] items-center justify-center rounded-xl border border-border bg-card px-4 py-3 text-center text-sm font-semibold text-foreground transition-colors hover:border-[hsl(193_57%_29%)]/40 hover:bg-muted/40"
          >
            Solicitar proposta — Essencial
          </HashLink>
          <HashLink
            to="/#contato"
            className="flex min-h-[48px] items-center justify-center rounded-xl border border-border bg-card px-4 py-3 text-center text-sm font-semibold text-foreground transition-colors hover:border-[hsl(193_57%_29%)]/40 hover:bg-muted/40"
          >
            Solicitar proposta — Padrão Ouro
          </HashLink>
          <HashLink
            to="/#contato"
            className="flex min-h-[48px] items-center justify-center rounded-xl border-2 border-violet-500/35 bg-violet-500/[0.07] px-4 py-3 text-center text-sm font-semibold text-foreground shadow-sm transition-colors hover:border-violet-500/55"
          >
            Solicitar proposta — Full Service
          </HashLink>
          <a
            href={waElite}
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-[48px] items-center justify-center rounded-xl border-2 border-[hsl(193_57%_29%)] bg-[hsl(193_70%_15%)] px-4 py-3 text-center text-sm font-semibold text-white transition-opacity hover:opacity-95"
          >
            Falar com especialista Elite
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.45, delay: 0.2 }}
          className="mx-auto mt-8 max-w-3xl text-center text-sm leading-relaxed text-muted-foreground md:text-base"
        >
          {planosFlexibilizacao}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.22 }}
          className="mt-12 rounded-2xl border border-[hsl(193_57%_29%)]/20 bg-gradient-to-br from-muted/50 to-background p-6 sm:p-8 md:p-10"
        >
          <div className="mx-auto max-w-3xl text-center">
            <h3 className="font-display text-lg font-bold text-foreground sm:text-xl md:text-2xl">
              {planosSlaTitulo}
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
              {planosSlaTexto}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PlansSection;
