import type { ReactNode } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Link } from "react-router-dom";
import { HashLink } from "@/components/HashLink";
import {
  type LucideIcon,
  ArrowRight,
  MessageCircle,
  Zap,
  Droplets,
  Wrench,
  CalendarCheck,
  FileText,
  MapPin,
  Sparkles,
  HardHat,
  ClipboardList,
  Home,
  Briefcase,
  Factory,
  HeartPulse,
  Server,
  Warehouse,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { SegmentoIcon } from "@/content/servicosInstitucional";
import {
  introParagrafos,
  introDestaques,
  engenhariaSectionIntro,
  instalacaoEletricaTitulo,
  instalacaoEletricaIntro,
  instalacaoEletricaItens,
  instalacaoHidraulicaTitulo,
  instalacaoHidraulicaIntro,
  instalacaoHidraulicaItens,
  maoDeObraEspecializada,
  gestaoManutencaoIntro,
  manutencaoEletricaTitulo,
  manutencaoEletricaIntro,
  manutencaoEletricaSub,
  manutencaoEletricaItens,
  manutencaoEletricaFecho,
  manutencaoHidraulicaTitulo,
  manutencaoHidraulicaIntro,
  manutencaoHidraulicaSub,
  manutencaoHidraulicaItens,
  manutencaoHidraulicaFecho,
  preventivaTitulo,
  preventivaIntro,
  preventivaBeneficiosTitulo,
  preventivaBeneficios,
  contratosTitulo,
  contratosIntro,
  contratosPlanosTitulo,
  planosContrato,
  segmentosTitulo,
  segmentosIntro,
  segmentosServicos,
  compromissoTitulo,
  compromissoParagrafos,
} from "@/content/servicosInstitucional";
import heroBg from "@/assets/imghero.jpeg";
import { services } from "@/lib/services";

const CONTACT_WHATSAPP = "https://wa.me/5511925333021";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  "manutencao-eletrica-predial": Zap,
  "manutencao-hidraulica-predial": Droplets,
  "instalacoes-eletricas-e-hidraulicas": Wrench,
  "manutencao-preventiva-e-corretiva": CalendarCheck,
  "contratos-recorrentes": FileText,
};

const SEGMENTO_ICONS: Record<SegmentoIcon, LucideIcon> = {
  condominios: Home,
  empresas: Briefcase,
  industrias: Factory,
  saude: HeartPulse,
  "data-centers": Server,
  "retail-logistica": Warehouse,
};

const entregaDiferenciais = [
  "Instalações e manutenção alinhadas a NBR 5410, NR-10, NBR 5626 e exigências de combate a incêndio.",
  "Relatórios e rastreabilidade para facilities, síndicos e auditorias.",
  "Planos preventivos que reduzem paradas não programadas e custos corretivos.",
  "Contratos com SLA claro — do essencial ao Elite 24/7 para operações críticas.",
];

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function BulletList({ items, className = "" }: { items: string[]; className?: string }) {
  return (
    <ul className={`list-none space-y-3 pl-0 ${className}`}>
      {items.map((item) => (
        <li key={item.slice(0, 48)} className="flex gap-3">
          <span className="shrink-0 font-bold text-gold">•</span>
          <span className="text-sm leading-relaxed text-muted-foreground md:text-base">{item}</span>
        </li>
      ))}
    </ul>
  );
}

const sectionDark = "bg-[hsl(193_70%_17%)] text-white";
const sectionDarkBorder = "border-white/10";

const Servicos = () => {
  const [introLead] = introParagrafos;

  return (
    <div className="min-h-screen bg-muted/40">
      <div
        className="pointer-events-none fixed inset-0 z-0 h-[100dvh] w-full"
        aria-hidden
      >
        <img
          src={heroBg}
          alt=""
          className="h-full w-full object-cover object-center select-none"
          decoding="async"
        />
        <div className="absolute inset-0 bg-black/55" />
      </div>

      <div className="relative z-10">
        <Header />
        <main>
          {/* Hero */}
          <section className="relative flex min-h-[48vh] sm:min-h-[54vh] flex-col justify-end bg-transparent pb-10 pt-24 sm:pb-14 sm:pt-28 md:min-h-[58vh] md:pb-16 md:pt-32 lg:pt-36">
            <div className="container mx-auto max-w-4xl">
              <p className="mb-3 inline-flex rounded-full border border-white/25 bg-black/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white/90 backdrop-blur-sm">
                Instalações · manutenção · contratos
              </p>
              <h1 className="mt-2 font-display text-2xl font-bold leading-[1.15] text-white drop-shadow-md sm:text-3xl md:text-4xl lg:text-[2.75rem]">
                Engenharia completa para{" "}
                <span className="text-white">sua infraestrutura</span>
              </h1>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/95 sm:text-base md:text-lg">
                {introLead}
              </p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {introDestaques.map((d) => (
                  <li
                    key={d}
                    className="rounded-lg border border-white/20 bg-black/25 px-3 py-2 text-xs font-medium text-white/95 backdrop-blur-sm sm:text-sm"
                  >
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Atalhos — bloco escuro + cards claros */}
          <section className={`border-b ${sectionDarkBorder} py-12 sm:py-16 md:py-20 ${sectionDark}`}>
            <div className="container mx-auto grid gap-6 sm:gap-8 md:grid-cols-2 lg:gap-10">
              <Reveal>
                <a
                  href="#engenharia-instalacoes"
                  className="group flex h-full flex-col rounded-2xl border border-white/15 bg-white p-5 text-foreground shadow-elevated transition-all duration-300 hover:border-[hsl(193_57%_29%)]/40 hover:shadow-lg sm:p-8"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[hsl(193_57%_29%)]/12 transition-colors group-hover:bg-[hsl(193_57%_29%)]/18">
                    <HardHat className="h-6 w-6 text-[hsl(193_57%_29%)]" />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-[hsl(193_57%_29%)]">
                    Projeto e obra
                  </span>
                  <h2 className="mt-2 font-display text-xl font-bold sm:text-2xl">Engenharia de instalações</h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    Elétrica e hidráulica de alta complexidade — do projeto ao comissionamento, com normas e
                    equipe dedicada.
                  </p>
                  <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-[hsl(193_57%_29%)]">
                    Ver detalhes <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </a>
              </Reveal>
              <Reveal delay={0.08}>
                <a
                  href="#gestao-manutencao"
                  className="group flex h-full flex-col rounded-2xl border border-white/15 bg-white p-5 text-foreground shadow-elevated transition-all duration-300 hover:border-[hsl(193_57%_29%)]/40 hover:shadow-lg sm:p-8"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[hsl(193_57%_29%)]/12 transition-colors group-hover:bg-[hsl(193_57%_29%)]/18">
                    <ClipboardList className="h-6 w-6 text-[hsl(193_57%_29%)]" />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-[hsl(193_57%_29%)]">
                    Operação contínua
                  </span>
                  <h2 className="mt-2 font-display text-xl font-bold sm:text-2xl">Gestão de manutenção</h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    Preventiva, corretiva e contratos com SLA — menos paradas e mais segurança patrimonial.
                  </p>
                  <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-[hsl(193_57%_29%)]">
                    Ver detalhes <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </a>
              </Reveal>
            </div>
          </section>

          {/* Portfólio */}
          <section
            id="portfolio"
            className="scroll-mt-24 border-b border-border bg-white py-12 shadow-[inset_0_1px_0_0_hsl(193_57%_29%/0.08)] sm:py-16 md:py-24"
          >
            <div className="container mx-auto">
              <Reveal className="mx-auto mb-8 max-w-2xl text-center sm:mb-12 md:mb-14">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[hsl(193_57%_29%)]">
                  Linha de serviços
                </span>
                <h2 className="mt-3 font-display text-2xl font-bold text-foreground sm:text-3xl md:text-4xl">
                  Soluções em <span className="text-gradient-gold">detalhe</span>
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                  Páginas com escopo e benefícios — aprofunde cada frente de atuação.
                </p>
              </Reveal>

              <div className="mb-6 grid gap-6 md:grid-cols-2">
                {services.slice(0, 2).map((service, i) => {
                  const Icon = iconMap[service.slug];
                  const hideImage = ["manutencao-eletrica-predial", "manutencao-hidraulica-predial"].includes(
                    service.slug,
                  );
                  return (
                    <Reveal key={service.slug} delay={i * 0.06}>
                      <Link
                        to={`/servico/${service.slug}`}
                        className="group block"
                        aria-label={`Abrir detalhes de ${service.title}`}
                      >
                        <div className="relative overflow-hidden rounded-2xl border border-[hsl(193_57%_29%)]/15 bg-muted/30 shadow-card transition-all duration-500 hover:border-[hsl(193_57%_29%)]/35">
                          {!hideImage && service.image && (
                            <div className="h-52 overflow-hidden">
                              <img
                                src={service.image}
                                alt={service.title}
                                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                              />
                            </div>
                          )}
                          <div className="p-6">
                            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10">
                              {Icon && <Icon className="h-6 w-6 text-gold" />}
                            </div>
                            <h3 className="mb-2 font-display text-xl font-bold text-foreground">
                              {service.title}
                            </h3>
                            <p className="text-sm leading-relaxed text-muted-foreground">
                              {service.shortDescription}
                            </p>
                            <div className="mt-3 text-sm font-semibold text-gold">Leia mais →</div>
                          </div>
                        </div>
                      </Link>
                    </Reveal>
                  );
                })}
              </div>

              <div className="grid gap-6 md:grid-cols-3">
                {services.slice(2).map((service, i) => {
                  const Icon = iconMap[service.slug];
                  return (
                    <Reveal key={service.slug} delay={(i + 2) * 0.06}>
                      <Link
                        to={`/servico/${service.slug}`}
                        className="group block"
                        aria-label={`Abrir detalhes de ${service.title}`}
                      >
                        <div className="h-full rounded-2xl border border-[hsl(193_57%_29%)]/15 bg-muted/20 p-6 shadow-card transition-all duration-500 hover:border-[hsl(193_57%_29%)]/35">
                          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10">
                            {Icon && <Icon className="h-6 w-6 text-gold" />}
                          </div>
                          <h3 className="mb-2 font-display text-lg font-bold text-foreground">{service.title}</h3>
                          <p className="text-sm leading-relaxed text-muted-foreground">{service.shortDescription}</p>
                          <div className="mt-3 text-sm font-semibold text-gold">Leia mais →</div>
                        </div>
                      </Link>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Engenharia de instalações */}
          <section
            id="engenharia-instalacoes"
            className={`scroll-mt-24 border-b ${sectionDarkBorder} py-12 sm:py-16 md:py-24 ${sectionDark}`}
          >
            <div className="container mx-auto">
              <Reveal className="mx-auto mb-8 max-w-3xl text-center sm:mb-12 md:mb-14">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
                  Engenharia de instalações
                </span>
                <h2 className="mt-3 font-display text-2xl font-bold leading-tight sm:text-3xl md:text-4xl">
                  Base sólida para sua <span className="text-white">operação</span>
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-white/80 md:text-base">
                  {engenhariaSectionIntro}
                </p>
              </Reveal>

              <div className="mx-auto grid max-w-6xl gap-6 sm:gap-8 md:grid-cols-2">
                <Reveal>
                  <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-white p-5 text-foreground shadow-elevated sm:p-8">
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[hsl(193_57%_29%)]/10">
                      <Zap className="h-6 w-6 text-[hsl(193_57%_29%)]" />
                    </div>
                    <h3 className="font-display text-xl font-bold text-foreground">
                      {instalacaoEletricaTitulo}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                      {instalacaoEletricaIntro}
                    </p>
                    <Accordion type="multiple" className="mt-6 w-full border-t border-border/80">
                      <AccordionItem value="eletrica-detalhes" className="border-b-0">
                        <AccordionTrigger className="text-left text-sm text-foreground hover:no-underline sm:text-base">
                          Ver escopo elétrico
                        </AccordionTrigger>
                        <AccordionContent>
                          <BulletList items={instalacaoEletricaItens} />
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </Reveal>
                <Reveal delay={0.08}>
                  <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-white p-5 text-foreground shadow-elevated sm:p-8">
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[hsl(193_57%_29%)]/10">
                      <Droplets className="h-6 w-6 text-[hsl(193_57%_29%)]" />
                    </div>
                    <h3 className="font-display text-xl font-bold text-foreground">
                      {instalacaoHidraulicaTitulo}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                      {instalacaoHidraulicaIntro}
                    </p>
                    <Accordion type="multiple" className="mt-6 w-full border-t border-border/80">
                      <AccordionItem value="hidraulica-detalhes" className="border-b-0">
                        <AccordionTrigger className="text-left text-sm text-foreground hover:no-underline sm:text-base">
                          Ver escopo hidráulico
                        </AccordionTrigger>
                        <AccordionContent>
                          <BulletList items={instalacaoHidraulicaItens} />
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </Reveal>
              </div>

              <Reveal className="mx-auto mt-10 max-w-3xl">
                <p className="rounded-2xl border border-white/15 bg-white/10 p-5 text-center text-sm leading-relaxed text-white/90 backdrop-blur-sm sm:p-6 md:text-base">
                  <span className="font-semibold text-white">Equipe dedicada. </span>
                  {maoDeObraEspecializada}
                </p>
              </Reveal>
            </div>
          </section>

          {/* Gestão de manutenção */}
          <section
            id="gestao-manutencao"
            className="scroll-mt-24 border-b border-border bg-muted/60 py-12 sm:py-16 md:py-24"
          >
            <div className="container mx-auto">
              <Reveal className="mx-auto mb-8 max-w-2xl text-center sm:mb-12 md:mb-14">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[hsl(193_57%_29%)]">
                  Gestão de manutenção
                </span>
                <h2 className="mt-3 font-display text-2xl font-bold leading-tight text-foreground sm:text-3xl md:text-4xl">
                  Continuidade e{" "}
                  <span className="text-gradient-gold">prevenção</span>
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
                  {gestaoManutencaoIntro}
                </p>
              </Reveal>

              <div className="mx-auto grid max-w-6xl gap-6 sm:gap-8 lg:grid-cols-3">
                <Reveal>
                  <div className="flex h-full flex-col rounded-2xl border border-[hsl(193_57%_29%)]/20 bg-white p-5 shadow-card sm:p-6 md:p-8">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[hsl(193_57%_29%)]/10">
                      <Zap className="h-6 w-6 text-[hsl(193_57%_29%)]" />
                    </div>
                    <h3 className="font-display text-lg font-bold text-foreground">{manutencaoEletricaTitulo}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{manutencaoEletricaIntro}</p>
                    <p className="mt-3 text-sm font-medium text-foreground">{manutencaoEletricaSub}</p>
                    <div className="mt-4 flex-1">
                      <BulletList items={manutencaoEletricaItens} />
                    </div>
                    <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{manutencaoEletricaFecho}</p>
                  </div>
                </Reveal>
                <Reveal delay={0.06}>
                  <div className="flex h-full flex-col rounded-2xl border border-[hsl(193_57%_29%)]/20 bg-white p-5 shadow-card sm:p-6 md:p-8">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[hsl(193_57%_29%)]/10">
                      <Droplets className="h-6 w-6 text-[hsl(193_57%_29%)]" />
                    </div>
                    <h3 className="font-display text-lg font-bold text-foreground">{manutencaoHidraulicaTitulo}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{manutencaoHidraulicaIntro}</p>
                    <p className="mt-3 text-sm font-medium text-foreground">{manutencaoHidraulicaSub}</p>
                    <div className="mt-4 flex-1">
                      <BulletList items={manutencaoHidraulicaItens} />
                    </div>
                    <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{manutencaoHidraulicaFecho}</p>
                  </div>
                </Reveal>
                <Reveal delay={0.12}>
                  <div className="flex h-full flex-col rounded-2xl border border-[hsl(193_57%_29%)]/20 bg-white p-5 shadow-card sm:p-6 md:p-8">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[hsl(193_57%_29%)]/10">
                      <CalendarCheck className="h-6 w-6 text-[hsl(193_57%_29%)]" />
                    </div>
                    <h3 className="font-display text-lg font-bold text-foreground">{preventivaTitulo}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{preventivaIntro}</p>
                    <p className="mt-4 text-sm font-semibold text-foreground">{preventivaBeneficiosTitulo}</p>
                    <div className="mt-3 flex-1">
                      <BulletList items={preventivaBeneficios} />
                    </div>
                  </div>
                </Reveal>
              </div>

              <Reveal className="mx-auto mt-12 max-w-3xl text-center">
                <div className="mb-2 flex justify-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[hsl(193_57%_29%)]/10">
                    <FileText className="h-6 w-6 text-[hsl(193_57%_29%)]" />
                  </div>
                </div>
                <h3 className="font-display text-xl font-bold text-foreground">{contratosTitulo}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">{contratosIntro}</p>
                <p className="mt-5 text-sm font-semibold text-[hsl(193_57%_29%)] md:text-base">{contratosPlanosTitulo}</p>
              </Reveal>

              <div className="mx-auto mt-8 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {planosContrato.map((plano, i) => (
                  <Reveal key={plano.nome} delay={i * 0.05}>
                    <div className="flex h-full flex-col rounded-xl border border-[hsl(193_57%_29%)]/25 bg-[hsl(193_70%_17%)] p-5 text-white shadow-card transition-shadow hover:border-white/25">
                      <h4 className="font-display text-sm font-bold leading-snug md:text-base">{plano.nome}</h4>
                      <p className="mt-2 flex-1 text-xs leading-relaxed text-white/85 md:text-sm">{plano.texto}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          {/* Faixa valor — como Normas/Diferencial na Sobre */}
          <section className="bg-[hsl(193_70%_17%)] py-12 sm:py-16 md:py-24">
            <div className="container mx-auto">
              <Reveal className="mb-8 text-center sm:mb-12">
                <span className="text-base sm:text-lg font-semibold uppercase tracking-[0.2em] text-white/70">
                  Entrega integrada
                </span>
                <h2 className="mt-3 font-display text-2xl font-bold text-white sm:text-3xl md:text-4xl lg:text-5xl px-1">
                  Da obra à operação, um só padrão{" "}
                  <span className="text-white/85">Luminous</span>
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white md:text-base">
                  Normas, documentação e contratos pensados para quem não pode parar.
                </p>
              </Reveal>
              <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2">
                {entregaDiferenciais.map((item, i) => (
                  <Reveal key={item.slice(0, 40)} delay={i * 0.06}>
                    <div className="flex h-full gap-4 rounded-xl border border-white/20 bg-white/10 p-5 backdrop-blur-sm">
                      <Sparkles className="mt-0.5 h-5 w-5 shrink-0 text-white" />
                      <p className="text-sm sm:text-base font-medium leading-snug text-white">{item}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          {/* Segmentos */}
          <section
            id="segmentos"
            className="scroll-mt-24 border-b border-border bg-white py-12 sm:py-16 md:py-24"
          >
            <div className="container mx-auto">
              <Reveal className="mb-10 text-center md:text-left">
                <MapPin className="mx-auto mb-3 h-7 w-7 text-[hsl(193_57%_29%)] md:mx-0" />
                <h2 className="mt-1 font-display text-2xl font-bold text-foreground sm:text-3xl md:text-4xl">
                  {segmentosTitulo}
                </h2>
                <p className="mx-auto mt-3 max-w-2xl text-muted-foreground md:mx-0">{segmentosIntro}</p>
              </Reveal>
              <div className=" grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {segmentosServicos.map((s, i) => {
                  const Icon = SEGMENTO_ICONS[s.icon];
                  return (
                    <Reveal key={s.titulo} delay={i * 0.03}>
                      <div className="flex h-full gap-3 rounded-2xl border border-[hsl(193_57%_29%)]/12 bg-gradient-to-br from-muted/80 to-white p-4 sm:p-5">
                        <Icon className="mt-0.5 h-5 w-5 shrink-0 text-[hsl(193_57%_29%)]" />
                        <div>
                          <h3 className="font-display text-base font-bold text-foreground">{s.titulo}</h3>
                          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{s.texto}</p>
                        </div>
                      </div>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Compromisso */}
          <section className={`border-t ${sectionDarkBorder} py-12 sm:py-16 md:py-20 ${sectionDark}`}>
            <div className="container mx-auto max-w-2xl text-center">
              <Reveal>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">Contato</span>
                <h2 className="mt-3 font-display text-2xl font-bold text-white sm:text-3xl md:text-4xl">
                  {compromissoTitulo}
                </h2>
                <div className="mt-6 space-y-3 text-white/85">
                  {compromissoParagrafos.map((bloco) => (
                    <p key={bloco.slice(0, 48)} className="text-sm leading-relaxed md:text-base">
                      {bloco}
                    </p>
                  ))}
                </div>
              </Reveal>
            </div>
          </section>

          {/* CTA parallax */}
          <section className="relative bg-transparent py-12 sm:py-16 md:py-20">
            <div className="container mx-auto max-w-2xl text-center">
              <Reveal>
                <h2 className="mt-3 font-display text-lg font-bold leading-tight text-white drop-shadow-md sm:text-xl md:text-3xl lg:text-5xl px-1">
                  Pronto para dar o próximo passo?
                </h2>
                <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-white/95 drop-shadow md:text-lg px-1">
                  Solicite uma proposta ou fale com um especialista pelo WhatsApp.
                </p>
                <div className="mt-8 flex flex-col flex-wrap items-center justify-center gap-3 sm:flex-row sm:gap-4">
                  <HashLink
                    to="/#contato"
                    className="inline-flex w-full min-h-[44px] items-center justify-center gap-2 rounded-lg bg-gradient-gold px-6 py-3 text-sm font-semibold text-primary-foreground shadow-gold transition-opacity hover:opacity-90 sm:w-auto sm:px-8 sm:py-3.5"
                  >
                    Solicitar proposta agora
                    <ArrowRight className="h-4 w-4" />
                  </HashLink>
                  <a
                    href={CONTACT_WHATSAPP}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full min-h-[44px] items-center justify-center gap-2 rounded-lg border border-white/35 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/15 sm:w-auto sm:px-8 sm:py-3.5"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Falar com especialista via WhatsApp
                  </a>
                  <Link
                    to="/sobre"
                    className="inline-flex w-full min-h-[44px] items-center justify-center rounded-lg border border-white/35 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/15 sm:w-auto sm:px-8 sm:py-3.5"
                  >
                    Conhecer a empresa
                  </Link>
                </div>
              </Reveal>
            </div>
          </section>
        </main>
        <Footer />
      </div>
      <WhatsAppButton />
    </div>
  );
};

export default Servicos;
