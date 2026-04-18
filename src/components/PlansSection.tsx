import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Award,
  Building2,
  CalendarDays,
  Check,
  Clock,
  Layers,
  Shield,
  ShieldCheck,
  Star,
  X,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { HashLink } from "@/components/HashLink";
import {
  planosAncoragem,
  planosTituloMatriz,
  planosFlexibilizacao,
  planosSlaTitulo,
  planosSlaTexto,
} from "@/content/planosMatriz";

const WHATSAPP_ELITE = `https://wa.me/5511925333021?text=${encodeURIComponent(
  "Olá! Tenho interesse em falar com um especialista sobre o plano ELITE 24/7 da Luminous.",
)}`;

type Destaque = "none" | "recomendado" | "elite";

interface Feature {
  label: string;
  ok: boolean;
  note?: string;
}

interface Plan {
  id: string;
  nome: string;
  Icone: LucideIcon;
  descricao: string;
  sla: string;
  horario: string;
  visitas: string;
  features: Feature[];
  destaque: Destaque;
  ctaLabel: string;
  ctaHref: string;
  external?: boolean;
}

const plans: Plan[] = [
  {
    id: "essencial",
    nome: "Essencial",
    Icone: Building2,
    descricao: "Para pequenos comércios e escritórios com necessidades básicas de manutenção.",
    sla: "Até 24 horas",
    horario: "Comercial (seg–sex)",
    visitas: "1× por mês",
    features: [
      { label: "Manutenção corretiva", ok: true },
      { label: "Atendimento emergencial", ok: false, note: "sob orçamento" },
      { label: "Manutenção preditiva", ok: false },
      { label: "Relatórios técnicos", ok: false },
      { label: "Equipe dedicada", ok: false },
    ],
    destaque: "none",
    ctaLabel: "Solicitar proposta",
    ctaHref: "/#contato",
  },
  {
    id: "full-service",
    nome: "Full Service",
    Icone: Layers,
    descricao: "Para condomínios de grande porte e corporativos com alta demanda operacional.",
    sla: "Até 2 horas",
    horario: "Estendido (até 20h)",
    visitas: "1× por semana",
    features: [
      { label: "Manutenção corretiva", ok: true },
      { label: "Emergencial incluso", ok: true, note: "SLA até 4h" },
      { label: "Manutenção preditiva básica", ok: true },
      { label: "Relatórios técnicos detalhados", ok: true },
      { label: "Equipe parcial (consultoria)", ok: true },
    ],
    destaque: "recomendado",
    ctaLabel: "Solicitar proposta",
    ctaHref: "/#contato",
  },
  {
    id: "elite",
    nome: "ELITE 24/7",
    Icone: ShieldCheck,
    descricao: "Para hospitais, indústrias, data centers e shoppings com criticidade máxima.",
    sla: "Imediato (≤ 2h críticos)",
    horario: "24h / 7 dias",
    visitas: "2 a 5× por semana",
    features: [
      { label: "Manutenção corretiva", ok: true },
      { label: "Emergencial imediato incluso", ok: true },
      { label: "Preditiva avançada (termografia)", ok: true },
      { label: "Relatórios de conformidade", ok: true },
      { label: "Equipe dedicada (plantão)", ok: true },
    ],
    destaque: "elite",
    ctaLabel: "Falar com especialista",
    ctaHref: WHATSAPP_ELITE,
    external: true,
  },
  {
    id: "padrao-ouro",
    nome: "Padrão Ouro",
    Icone: Award,
    descricao: "Para empresas e prédios comerciais que precisam de atendimento prioritário.",
    sla: "Até 8 horas",
    horario: "Comercial prioritário",
    visitas: "2× por mês",
    features: [
      { label: "Manutenção corretiva", ok: true },
      { label: "Emergencial incluso", ok: true, note: "SLA até 12h" },
      { label: "Manutenção preditiva", ok: false },
      { label: "Relatórios mensais básicos", ok: true },
      { label: "Equipe dedicada", ok: false },
    ],
    destaque: "none",
    ctaLabel: "Solicitar proposta",
    ctaHref: "/#contato",
  },
];

function iconShell(destaque: Destaque) {
  const base =
    "inline-flex h-10 w-10 items-center justify-center rounded-xl ring-1 flex-shrink-0";
  if (destaque === "elite")
    return `${base} bg-[hsl(193_57%_29%)]/[0.1] text-[hsl(193_57%_29%)] ring-[hsl(193_57%_29%)]/25`;
  if (destaque === "recomendado")
    return `${base} bg-[hsl(193_57%_29%)]/[0.1] text-[hsl(193_57%_29%)] ring-[hsl(193_57%_29%)]/25`;
  return `${base} bg-muted/70 text-foreground/75 ring-border/80`;
}

function ctaBtnClass(destaque: Destaque) {
  const base =
    "flex min-h-[44px] w-full items-center justify-center rounded-xl px-4 py-2.5 text-sm font-semibold transition-all";
  if (destaque === "elite")
    return `${base} border border-border bg-background text-foreground hover:border-[hsl(193_57%_29%)]/40 hover:bg-muted/30`;
  if (destaque === "recomendado")
    return `${base} bg-[hsl(193_57%_29%)] text-white shadow-md shadow-[hsl(193_57%_29%)]/20 hover:bg-[hsl(193_70%_17%)]`;
  return `${base} border border-border bg-background text-foreground hover:border-[hsl(193_57%_29%)]/40 hover:bg-muted/30`;
}

function Stat({ icon: Icon, label }: { icon: LucideIcon; label: string }) {
  return (
    <div className="flex items-center gap-2">
      <Icon
        className="h-3.5 w-3.5 flex-shrink-0 text-[hsl(193_57%_29%)]"
        strokeWidth={2}
      />
      <span className="text-xs text-foreground/80">{label}</span>
    </div>
  );
}

function PlanCard({
  plan,
  index,
  isInView,
}: {
  plan: Plan;
  index: number;
  isInView: boolean;
}) {
  const isPopular = plan.destaque === "recomendado";
  const isElite = plan.destaque === "elite";
  const { Icone } = plan;

  const cardClass = [
    "relative flex flex-col overflow-hidden rounded-2xl w-full h-full",
    isPopular
      ? "ring-2 ring-[hsl(193_57%_29%)]/50 shadow-[0_32px_64px_-12px_hsl(193_57%_29%/0.35)] bg-card"
      : isElite
        ? "bg-card border-2 border-[hsl(193_57%_29%)]/40 shadow-[0_20px_60px_-8px_hsl(193_57%_29%/0.45)]"
        : "bg-card border border-border shadow-sm hover:shadow-md",
  ].join(" ");

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.08 + index * 0.09 }}
      className={[
        "flex flex-col w-full lg:w-1/4",
        (isPopular || isElite) ? "lg:-translate-y-8 lg:z-10 lg:self-stretch" : "",
      ].join(" ")}
    >
      <div className={cardClass}>
        {/* Faixa "Mais popular" no topo */}
        {isPopular && (
          <div className="bg-gradient-to-r from-[hsl(193_70%_17%)] to-[hsl(193_57%_29%)] px-6 py-3 text-center">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-white">
              <Star className="h-3.5 w-3.5 fill-white" aria-hidden />
              Mais popular
            </span>
          </div>
        )}

        {/* Faixa "ELITE 24/7" no topo */}
        {isElite && (
          <div className="bg-gradient-to-r from-zinc-500 to-zinc-400 px-6 py-3 text-center">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-white">
              <Shield className="h-3.5 w-3.5 fill-white" aria-hidden />
              Disponibilidade crítica
            </span>
          </div>
        )}

        <div className={`flex flex-1 flex-col p-6${(isPopular || isElite) ? " lg:py-10 lg:px-7" : ""}`}>

          {/* Ícone + Nome */}
          <div className="mb-3 flex items-center gap-3">
            <span className={iconShell(plan.destaque)} aria-hidden>
              <Icone className="h-5 w-5 text-gold" strokeWidth={1.75} />
            </span>
            <h3 className="font-display text-lg font-bold leading-tight text-gold">
              {plan.nome}
            </h3>
          </div>

          {/* Descrição */}
          <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
            {plan.descricao}
          </p>

          {/* Stats principais */}
          <div className="mb-5 space-y-2.5 rounded-xl bg-muted/40 p-4">
            <Stat icon={Zap} label={`SLA: ${plan.sla}`} />
            <Stat icon={Clock} label={plan.horario} />
            <Stat icon={CalendarDays} label={`Visitas: ${plan.visitas}`} />
          </div>

          {/* Lista de features */}
          <ul className="mb-6 flex-1 space-y-2.5">
            {plan.features.map((f) => (
              <li key={f.label} className="flex items-start gap-2 text-sm">
                {f.ok ? (
                  <Check
                    className="mt-0.5 h-4 w-4 flex-shrink-0 text-[hsl(193_57%_29%)]"
                    strokeWidth={2.5}
                  />
                ) : (
                  <X
                    className="mt-0.5 h-4 w-4 flex-shrink-0 text-muted-foreground/40"
                    strokeWidth={2}
                  />
                )}
                <span
                  className={f.ok ? "text-foreground/90" : "text-muted-foreground/55"}
                >
                  {f.label}
                  {f.note && (
                    <span className="ml-1 text-xs opacity-70">({f.note})</span>
                  )}
                </span>
              </li>
            ))}
          </ul>

          {/* CTA */}
          {plan.external ? (
            <a
              href={plan.ctaHref}
              target="_blank"
              rel="noopener noreferrer"
              className={ctaBtnClass(plan.destaque)}
            >
              {plan.ctaLabel}
            </a>
          ) : (
            <HashLink to={plan.ctaHref} className={ctaBtnClass(plan.destaque)}>
              {plan.ctaLabel}
            </HashLink>
          )}
        </div>
      </div>
    </motion.div>
  );
}

const PlansSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="planos"
      className="scroll-mt-28 bg-background py-12 sm:py-16 md:py-24"
      ref={ref}
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        {/* Ancoragem */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45 }}
          className="mx-auto mb-6 max-w-3xl text-center text-sm font-medium leading-relaxed text-[hsl(193_57%_29%)] md:text-base"
        >
          {planosAncoragem}
        </motion.p>

        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="mb-10 text-center sm:mb-14"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Planos
          </span>
          <h2 className="mt-3 px-1 font-display text-xl font-bold leading-tight text-foreground sm:text-2xl md:text-3xl lg:text-4xl">
            {planosTituloMatriz}
          </h2>
        </motion.div>

        {/* Cards — empilhados no mobile, grid 2×2 no tablet, linha no desktop */}
        <div className="flex flex-col gap-5 md:grid md:grid-cols-2 md:gap-5 lg:flex lg:flex-row lg:items-start lg:gap-4 lg:pb-8 lg:pt-8">
          {plans.map((plan, i) => (
            <PlanCard key={plan.id} plan={plan} index={i} isInView={isInView} />
          ))}
        </div>

        {/* Nota de flexibilização */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.45, delay: 0.5 }}
          className="mx-auto mt-10 max-w-3xl text-center text-sm leading-relaxed text-muted-foreground md:text-base"
        >
          {planosFlexibilizacao}
        </motion.p>

        {/* Bloco SLA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.55 }}
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
