import type { ReactNode } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  MessageCircle,
  Zap,
  Droplets,
  Wrench,
  CalendarCheck,
  FileText,
  Building2,
  MapPin,
  Sparkles,
  HardHat,
  ClipboardList,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  introParagrafos,
  instalacaoEletricaItens,
  instalacaoHidraulicaItens,
  manutencaoEletricaItens,
  manutencaoHidraulicaItens,
  preventivaBeneficios,
  planosContrato,
  segmentosServicos,
} from "@/content/servicosInstitucional";
import heroBg from "@/assets/imghero.jpeg";
import { services } from "@/lib/services";

const CONTACT_WHATSAPP = "https://wa.me/5511999999999";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  "manutencao-eletrica-predial": Zap,
  "manutencao-hidraulica-predial": Droplets,
  "instalacoes-eletricas-e-hidraulicas": Wrench,
  "manutencao-preventiva-e-corretiva": CalendarCheck,
  "contratos-recorrentes": FileText,
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

const Servicos = () => {
  const [introLead, ...introRest] = introParagrafos;
  const introSecondary = introRest.join(" ");

  return (
    <div className="min-h-screen bg-background">
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
          <section className="relative flex min-h-[58vh] flex-col justify-end bg-transparent px-6 pb-16 pt-28 md:min-h-[62vh] md:pb-20 md:pt-32 lg:pt-36">
            <div className="container mx-auto max-w-5xl">
              <h1 className="mt-4 font-display text-3xl font-bold leading-tight text-white drop-shadow-md sm:text-4xl md:text-5xl">
                Luminous Instalações e Serviços: engenharia completa para{" "}
                <span className="text-white/95">sua infraestrutura</span>
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-white sm:text-lg">
                {introLead}
              </p>
            </div>
          </section>

          {/* Intro complementar */}
          {/* {introSecondary ? (
            <section className="border-y border-border bg-card py-16 md:py-20">
              <div className="container mx-auto max-w-3xl px-6">
                <Reveal>
                  <p className="text-center text-base leading-relaxed text-muted-foreground md:text-lg">
                    {introSecondary}
                  </p>
                </Reveal>
              </div>
            </section>
          ) : null} */}

          {/* Atalhos — duas frentes (como Missão/Visão na Sobre) */}
          <section className="border-b border-border bg-background py-16 md:py-24">
            <div className="container mx-auto grid gap-8 px-6 md:grid-cols-2 lg:gap-10">
              <Reveal>
                <a
                  href="#engenharia-instalacoes"
                  className="group block h-full rounded-2xl border border-border bg-card p-8 shadow-card transition-all duration-300 hover:border-gold/30 hover:shadow-md md:p-10"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 transition-colors group-hover:bg-gold/15">
                    <HardHat className="h-6 w-6 text-gold" />
                  </div>
                  <span className="text-lg font-semibold text-gold uppercase tracking-widest">
                    Projeto e obra
                  </span>
                  <h2 className="mt-3 font-display text-2xl font-bold text-foreground">
                    Engenharia de instalações
                  </h2>
                  <p className="mt-4 leading-relaxed text-muted-foreground">
                    Elétrica e hidráulica de alta complexidade, do planejamento ao comissionamento, com
                    equipe especializada e conformidade técnica.
                  </p>
                  <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-gold">
                    Ver detalhes <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </a>
              </Reveal>
              <Reveal delay={0.08}>
                <a
                  href="#gestao-manutencao"
                  className="group block h-full rounded-2xl border border-border bg-card p-8 shadow-card transition-all duration-300 hover:border-gold/30 hover:shadow-md md:p-10"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 transition-colors group-hover:bg-gold/15">
                    <ClipboardList className="h-6 w-6 text-gold" />
                  </div>
                  <span className="text-lg font-semibold text-gold uppercase tracking-widest">
                    Operação contínua
                  </span>
                  <h2 className="mt-3 font-display text-2xl font-bold text-foreground">
                    Manutenção e contratos
                  </h2>
                  <p className="mt-4 leading-relaxed text-muted-foreground">
                    Preventiva, corretiva e planos com SLA — menos paradas, mais previsibilidade e
                    segurança patrimonial.
                  </p>
                  <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-gold">
                    Ver detalhes <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </a>
              </Reveal>
            </div>
          </section>

          {/* Portfólio — mesma linguagem da home */}
          <section id="portfolio" className="scroll-mt-24 border-b border-border bg-card py-16 md:py-24">
            <div className="container mx-auto px-6">
              <Reveal className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
                <span className="text-lg font-semibold text-gold uppercase tracking-widest">
                  Linha de serviços
                </span>
                <h2 className="mt-3 font-display text-3xl font-bold text-foreground md:text-5xl">
                  Explore cada{" "}
                  <span className="text-gradient-gold">solução</span> em detalhe
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
                  Páginas dedicadas com escopo, benefícios e aplicações — o mesmo portfólio da página
                  inicial, com aprofundamento técnico.
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
                        <div className="relative overflow-hidden rounded-2xl border border-border bg-background shadow-card transition-all duration-500 hover:border-gold/30">
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
                        <div className="h-full rounded-2xl border border-border bg-background p-6 shadow-card transition-all duration-500 hover:border-gold/30">
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
            className="scroll-mt-24 border-b border-border bg-background py-16 md:py-24"
          >
            <div className="container mx-auto px-6">
              <Reveal className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
                <span className="text-lg font-semibold text-gold uppercase tracking-widest">
                  Engenharia de instalações
                </span>
                <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-foreground md:text-5xl">
                  Construindo a base da sua{" "}
                  <span className="text-gradient-gold">operação</span>
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
                  Execução de projetos elétricos e hidráulicos de alta complexidade, do planejamento à
                  entrega, em conformidade com normas técnicas rigorosas.
                </p>
              </Reveal>

              <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
                <Reveal>
                  <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-8 shadow-card md:p-10">
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10">
                      <Zap className="h-6 w-6 text-gold" />
                    </div>
                    <h3 className="font-display text-xl font-bold text-foreground">
                      Instalações elétricas: potência e segurança
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                      Projetamos e executamos instalações prediais e industriais eficientes e seguras, com
                      rigor técnico para otimizar energia e reduzir riscos operacionais.
                    </p>
                    <Accordion type="multiple" className="mt-6 w-full border-t border-border">
                      <AccordionItem value="eletrica-detalhes" className="border-b-0">
                        <AccordionTrigger className="text-left text-base text-foreground hover:no-underline">
                          Ver detalhes dos serviços de instalação elétrica
                        </AccordionTrigger>
                        <AccordionContent>
                          <BulletList items={instalacaoEletricaItens} />
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </Reveal>
                <Reveal delay={0.08}>
                  <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-8 shadow-card md:p-10">
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10">
                      <Droplets className="h-6 w-6 text-gold" />
                    </div>
                    <h3 className="font-display text-xl font-bold text-foreground">
                      Instalações hidráulicas: fluxo contínuo e eficiência
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                      Sistemas prediais e industriais com foco em eficiência, durabilidade e
                      sustentabilidade no abastecimento, descarte e tratamento de água.
                    </p>
                    <Accordion type="multiple" className="mt-6 w-full border-t border-border">
                      <AccordionItem value="hidraulica-detalhes" className="border-b-0">
                        <AccordionTrigger className="text-left text-base text-foreground hover:no-underline">
                          Ver detalhes dos serviços de instalação hidráulica
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
                <p className="rounded-2xl border border-border bg-card/80 p-6 text-center leading-relaxed text-muted-foreground shadow-card backdrop-blur-sm md:p-8">
                  <span className="font-semibold text-foreground">Mão de obra especializada: </span>
                  equipe qualificada e certificada, com experiência em grandes projetos, integrando
                  instalações ao projeto estrutural desde a obra até o comissionamento.
                </p>
              </Reveal>
            </div>
          </section>

          {/* Gestão de manutenção */}
          <section
            id="gestao-manutencao"
            className="scroll-mt-24 border-b border-border bg-card py-16 md:py-24"
          >
            <div className="container mx-auto px-6">
              <Reveal className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
                <span className="text-lg font-semibold text-gold uppercase tracking-widest">
                  Gestão de manutenção
                </span>
                <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-foreground md:text-5xl">
                  Continuidade operacional e{" "}
                  <span className="text-gradient-gold">prevenção de prejuízos</span>
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
                  Manutenção elétrica e hidráulica predial com foco em prevenção, eficiência energética e
                  conformidade regulatória.
                </p>
              </Reveal>

              <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-3">
                <Reveal>
                  <div className="flex h-full flex-col rounded-2xl border border-border bg-background p-6 shadow-card md:p-8">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10">
                      <Zap className="h-6 w-6 text-gold" />
                    </div>
                    <h3 className="font-display text-lg font-bold text-foreground">Manutenção elétrica predial</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      Priorizamos prevenção e otimização para segurança, eficiência e conformidade jurídica.
                    </p>
                    <div className="mt-5 flex-1">
                      <BulletList items={manutencaoEletricaItens} />
                    </div>
                  </div>
                </Reveal>
                <Reveal delay={0.06}>
                  <div className="flex h-full flex-col rounded-2xl border border-border bg-background p-6 shadow-card md:p-8">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10">
                      <Droplets className="h-6 w-6 text-gold" />
                    </div>
                    <h3 className="font-display text-lg font-bold text-foreground">Manutenção hidráulica predial</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      Abordagem proativa contra vazamentos, infiltrações e entupimentos.
                    </p>
                    <div className="mt-5 flex-1">
                      <BulletList items={manutencaoHidraulicaItens} />
                    </div>
                  </div>
                </Reveal>
                <Reveal delay={0.12}>
                  <div className="flex h-full flex-col rounded-2xl border border-border bg-background p-6 shadow-card md:p-8">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10">
                      <CalendarCheck className="h-6 w-6 text-gold" />
                    </div>
                    <h3 className="font-display text-lg font-bold text-foreground">
                      Manutenção preventiva: longevidade e custos
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      Planos preditivos e preventivos sob medida. Benefícios:
                    </p>
                    <div className="mt-5 flex-1">
                      <BulletList items={preventivaBeneficios} />
                    </div>
                  </div>
                </Reveal>
              </div>

              <Reveal className="mx-auto mt-14 max-w-3xl text-center">
                <div className="mb-2 flex justify-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10">
                    <FileText className="h-6 w-6 text-gold" />
                  </div>
                </div>
                <h3 className="font-display text-xl font-bold text-foreground">Contratos técnicos de manutenção</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                  Acompanhamento contínuo e suporte especializado, com planos alinhados à criticidade da sua
                  operação.
                </p>
              </Reveal>

              <div className="mx-auto mt-8 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {planosContrato.map((plano, i) => (
                  <Reveal key={plano.nome} delay={i * 0.05}>
                    <div className="flex h-full flex-col rounded-xl border border-border bg-background p-5 shadow-card transition-shadow hover:shadow-md">
                      <h4 className="font-display text-sm font-bold leading-snug text-foreground md:text-base">
                        {plano.nome}
                      </h4>
                      <p className="mt-2 flex-1 text-xs leading-relaxed text-muted-foreground md:text-sm">
                        {plano.texto}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          {/* Faixa valor — como Normas/Diferencial na Sobre */}
          <section className="bg-gradient-gold py-16 md:py-24">
            <div className="container mx-auto px-6">
              <Reveal className="mb-12 text-center">
                <span className="text-lg font-semibold uppercase tracking-[0.2em] text-white/70">
                  Entrega integrada
                </span>
                <h2 className="mt-3 font-display text-3xl font-bold text-white md:text-4xl lg:text-5xl">
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
                      <p className="text-base font-medium leading-snug text-white">{item}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          {/* Segmentos — chips como Sobre */}
          <section id="segmentos" className="scroll-mt-24 border-b border-border bg-background py-16 md:py-24">
            <div className="container mx-auto px-6">
              <Reveal className="mb-10 text-center md:text-left">
                <MapPin className="mx-auto mb-3 h-7 w-7 text-gold md:mx-0" />
                <span className="text-lg font-semibold text-gold uppercase tracking-widest">Segmentos</span>
                <h2 className="mt-3 font-display text-3xl font-bold text-foreground md:text-5xl">
                  Expertise para cada desafio
                </h2>
                <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-muted-foreground md:mx-0">
                  A Luminous adapta soluções às especificidades de cada tipo de cliente:
                </p>
              </Reveal>
              <div className="flex flex-wrap justify-center gap-3 md:justify-start">
                {segmentosServicos.map((s, i) => (
                  <Reveal key={s} delay={i * 0.03}>
                    <span className="inline-flex items-center rounded-full border border-gold/25 bg-gold/5 px-4 py-2 text-sm font-medium text-foreground">
                      <Building2 className="mr-2 h-3.5 w-3.5 text-gold" />
                      {s}
                    </span>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          {/* Compromisso */}
          <section className="border-t border-border bg-card py-16 md:py-20">
            <div className="container mx-auto max-w-3xl px-6 text-center">
              <Reveal>
                <span className="text-lg font-semibold text-gold uppercase tracking-widest">Próximo passo</span>
                <h2 className="mt-3 font-display text-3xl font-bold text-foreground md:text-5xl">
                  Vamos desenhar o escopo ideal
                </h2>
                <p className="mt-6 leading-relaxed text-muted-foreground">
                  Combine instalações, manutenção e contrato no mesmo parceiro — com transparência, SLA e
                  responsabilidade técnica de ponta a ponta.
                </p>
              </Reveal>
            </div>
          </section>

          {/* CTA parallax */}
          <section className="relative bg-transparent px-6 py-16 md:py-20">
            <div className="container mx-auto max-w-2xl text-center">
              <Reveal>
                <h2 className="mt-3 font-display text-xl font-bold text-white drop-shadow-md sm:text-2xl md:text-5xl">
                  Sua próxima decisão estratégica
                </h2>
                <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-white drop-shadow md:text-lg">
                  Não deixe segurança e eficiência ao acaso. Solicite uma proposta personalizada ou fale com
                  um especialista.
                </p>
                <div className="mt-8 flex flex-col flex-wrap items-center justify-center gap-3 sm:flex-row sm:gap-4">
                  <Link
                    to="/#contato"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-gold px-8 py-3.5 text-sm font-semibold text-primary-foreground shadow-gold transition-opacity hover:opacity-90 sm:w-auto"
                  >
                    Solicitar proposta agora
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <a
                    href={CONTACT_WHATSAPP}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-white/35 bg-white/10 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/15 sm:w-auto"
                  >
                    <MessageCircle className="h-4 w-4" />
                    WhatsApp
                  </a>
                  <Link
                    to="/sobre"
                    className="inline-flex w-full items-center justify-center rounded-lg border border-white/35 bg-white/10 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/15 sm:w-auto"
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
