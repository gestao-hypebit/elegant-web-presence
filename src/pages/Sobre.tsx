import type { ReactNode } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  Target,
  Eye,
  Building2,
  MapPin,
  Sparkles,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import heroBg from "@/assets/imghero.jpeg";
import sobreimg from "@/assets/sobreimg.jpeg";

const valores = [
  "Compromisso inegociável com a qualidade: cada serviço é executado com rigor técnico, atenção aos detalhes e responsabilidade profissional, superando expectativas.",
  "Transparência absoluta: comunicação clara, honesta e proativa, com relatórios e insights que fortalecem a confiança mútua.",
  "Eficiência operacional otimizada: soluções técnicas inovadoras que maximizam o desempenho das instalações, reduzem consumo de recursos e geram economia.",
  "Segurança como prioridade máxima: integridade das instalações e das pessoas no centro de todas as operações, em estrita aderência a normas e protocolos.",
  "Inovação contínua: investimento constante em tecnologias e metodologias para oferecer as soluções mais avançadas em execução e gestão de infraestrutura.",
];

const diferencialItens = [
  "Execução perfeita desde o início: infraestrutura construída com máxima qualidade e conformidade, evitando problemas futuros.",
  "Antecipação de falhas: identificação e correção de riscos antes que virem emergências custosas, preservando a continuidade operacional.",
  "Previsibilidade total: clareza sobre performance das instalações e custos de manutenção.",
  "Proteção patrimonial: prolongamento da vida útil dos ativos e otimização do desempenho.",
  "SLA garantido: contratos com acordos de nível de serviço claros, tempos de resposta e soluções alinhados às demandas mais críticas.",
];

const segmentos = [
  "Construtoras e incorporadoras",
  "Escritórios de arquitetura e engenharia",
  "Condomínios residenciais e comerciais",
  "Empresas e escritórios",
  "Indústrias",
  "Hospitais e clínicas",
  "Data centers",
  "Shoppings e centros logísticos",
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

const Sobre = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Parallax: mesmo princípio da home — fundo fixo; conteúdo rola por cima */}
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
          {/* Hero institucional */}
          <section className="relative flex min-h-[58vh] flex-col justify-end bg-transparent px-6 pb-16 pt-28 md:min-h-[50vh] md:pb-20 md:pt-32 lg:pt-36">
            <div className="container mx-auto max-w-5xl">
             
              <h1 className="mt-4 font-display text-3xl font-bold leading-tight text-white drop-shadow-md sm:text-4xl md:text-5xl">
                Engenharia completa para a excelência da sua infraestrutura
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-white sm:text-lg">
                Da concepção à manutenção preditiva — parceria técnica em São Paulo com segurança,
                conformidade e resultados mensuráveis.
              </p>
            </div>
          </section>

          {/* Missão + Visão — cards sobre fundo sólido */}
          <section className="border-y border-border bg-card py-16 md:py-20">
            <div className="container mx-auto grid gap-8 px-6 md:grid-cols-2 lg:gap-10">
              <Reveal>
                <div className="h-full rounded-2xl border border-border bg-background p-8 shadow-card md:p-10">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10">
                    <Target className="h-6 w-6 text-gold" />
                  </div>
                  <span className="text-lg font-semibold text-gold uppercase tracking-widest">Missão</span>
                  <h2 className="mt-3 font-display text-2xl font-bold text-foreground">
                    Elevando padrões, construindo futuros
                  </h2>
                  <p className="mt-4 leading-relaxed text-muted-foreground">
                    Oferecer soluções completas e estratégicas em engenharia de instalações e manutenção
                    predial, garantindo a segurança, a eficiência e a confiabilidade ininterrupta das
                    infraestruturas elétricas e hidráulicas de nossos clientes, contribuindo para a
                    sustentabilidade e o sucesso de suas operações.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={0.08}>
                <div className="h-full rounded-2xl border border-border bg-background p-8 shadow-card md:p-10">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10">
                    <Eye className="h-6 w-6 text-gold" />
                  </div>
                  <span className="text-lg font-semibold text-gold uppercase tracking-widest">Visão</span>
                  <h2 className="mt-3 font-display text-2xl font-bold text-foreground">
                    Liderança em infraestrutura crítica
                  </h2>
                  <p className="mt-4 leading-relaxed text-muted-foreground">
                    Ser reconhecida como a referência em engenharia de instalações e manutenção predial
                    para operações críticas, destacando-nos pela vanguarda tecnológica, pela confiabilidade
                    técnica superior e pela excelência na execução de projetos e na gestão do
                    relacionamento com o cliente.
                  </p>
                </div>
              </Reveal>
            </div>
          </section>

          {/* Quem somos — imagem + texto */}
          <section id="quem-somos" className="bg-background py-16 md:py-24">
            <div className="container mx-auto grid items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16">
              <Reveal className="order-2 lg:order-1">
                <div className="overflow-hidden rounded-2xl shadow-elevated ring-1 ring-border/60">
                  <img
                    src={sobreimg}
                    alt="Operações e equipe Luminous"
                    className="h-[320px] w-full object-cover lg:h-[480px]"
                    loading="lazy"
                  />
                </div>
              </Reveal>
              <Reveal className="order-1 lg:order-2" delay={0.06}>
                <span className="text-lg font-semibold text-gold uppercase tracking-[0.2em]">
                  Quem somos
                </span>
                <h2 className="mt-3 mb-4 font-display text-3xl font-bold leading-tight text-foreground md:text-5xl">
                  Pilar de <span className="text-gradient-gold">confiabilidade</span> e execução
                </h2>
                <div className="mt-6 space-y-4 leading-relaxed ">
                  <p>
                    A Luminous Instalações e Serviços transcende o conceito tradicional de manutenção
                    predial. Somos uma empresa de engenharia especializada em todo o ciclo de vida da
                    infraestrutura — da concepção e execução de instalações elétricas e hidráulicas de alta
                    complexidade à gestão proativa e preditiva da manutenção.
                  </p>
                  <p>
                    Nosso trabalho combina planejamento técnico rigoroso, soluções robustas e atendimento
                    recorrente que antecipa desafios, prolonga a vida dos ativos e reduz custos e riscos de
                    paradas.
                  </p>
                  <p className="">
                    Com a Luminous, você investe em parceria, responsabilidade técnica e instalações no pico
                    de performance.
                  </p>
                </div>
              </Reveal>
            </div>
          </section>

          {/* Valores — grid de cards */}
          <section id="valores" className="border-t border-border bg-card py-16 md:py-24">
            <div className="container mx-auto px-6">
              <Reveal className="mx-auto mb-12 max-w-3xl text-center">
                <span className="text-lg font-semibold text-gold uppercase tracking-widest">Valores</span>
                <h2 className="mt-3 font-display text-3xl font-bold text-foreground md:text-5xl">
                  Os pilares da nossa atuação
                </h2>
              </Reveal>
              <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {valores.map((v, i) => (
                  <Reveal key={v.slice(0, 36)} delay={i * 0.05}>
                    <div className="flex h-full flex-col rounded-2xl border border-border bg-background p-6 shadow-card transition-shadow hover:shadow-md md:p-7">
                      <CheckCircle2 className="mb-4 h-8 w-8 shrink-0 text-gold" />
                      <p className="text-sm leading-relaxed text-muted-foreground">{v}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          {/* Diferencial — faixa azul como Vantagens */}
          <section id="diferencial" className="bg-gradient-gold py-16 md:py-24">
            <div className="container mx-auto px-6">
              <Reveal className="mb-12 text-center">
                <span className="text-lg font-semibold uppercase tracking-[0.2em] text-white/70">
                  Diferencial
                </span>
                <h2 className="mt-3 font-display text-3xl font-bold text-white md:text-4xl lg:text-5xl">
                  Da concepção à continuidade operacional
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white md:text-base">
                  Engenharia de instalações, manutenção preditiva e contratos recorrentes em um modelo
                  integrado de longo prazo.
                </p>
              </Reveal>
              <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2">
                {diferencialItens.map((item, i) => (
                  <Reveal key={item.slice(0, 40)} delay={i * 0.06}>
                    <div className="flex gap-4 rounded-xl border border-white/20 bg-white/10 p-5 backdrop-blur-sm  h-full">
                      <Sparkles className="mt-0.5 h-5 w-5 shrink-0 text-white" />
                      <p className="text-base font-medium leading-snug text-white">{item}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          {/* Segmentos */}
          <section id="atuacao" className="bg-background py-16 md:py-24">
            <div className="container mx-auto px-6">
              <Reveal className="mb-10 text-center md:text-left">
                <MapPin className="mx-auto mb-3 h-7 w-7 text-gold md:mx-0" />
                <span className="text-lg font-semibold text-gold uppercase tracking-widest">Atuação</span>
                <h2 className="mt-3 font-display text-3xl font-bold text-foreground md:text-5xl">
                  Expertise em todo o estado de São Paulo
                </h2>
                <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-muted-foreground md:mx-0">
                  Soluções técnicas adaptadas a cada segmento:
                </p>
              </Reveal>
              <div className="flex flex-wrap justify-center gap-3 md:justify-start">
                {segmentos.map((s, i) => (
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
          <section id="compromisso" className="border-t border-border bg-card py-16 md:py-20">
            <div className="container mx-auto max-w-3xl px-6 text-center">
              <Reveal>
                <span className="text-lg font-semibold text-gold uppercase tracking-widest">Compromisso</span>
                <h2 className="mt-3 font-display text-3xl font-bold text-foreground md:text-5xl">
                  Sua confiança, nossa prioridade
                </h2>
                <p className="mt-6 leading-relaxed ">
                  Na Luminous, o compromisso vai além da prestação de serviços: construímos relacionamentos
                  duradouros baseados em confiança, transparência e resultados superiores. Escolher a
                  Luminous é ter um parceiro que entende a criticidade das suas operações e antecipa
                  riscos.
                </p>
                <p className="mt-4  ">
                  Transforme a gestão da sua infraestrutura em diferencial competitivo — da concepção à
                  manutenção contínua.
                </p>
              </Reveal>
            </div>
          </section>

          {/* CTA sobre imagem fixa (parallax) */}
          <section className="relative bg-transparent px-6 py-16 md:py-20">
            <div className="container mx-auto max-w-2xl text-center">
              <Reveal>
                <h2 className="mt-3 font-display text-xl font-bold text-white drop-shadow-md sm:text-2xl md:text-5xl">
                  Pronto para dar o próximo passo?
                </h2>
                <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-white drop-shadow md:text-lg">
                  Fale com nossa equipe e solicite uma proposta alinhada à sua operação.
                </p>
                <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
                  <Link
                    to="/#contato"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-gold px-8 py-3.5 text-sm font-semibold text-primary-foreground shadow-gold transition-opacity hover:opacity-90 sm:w-auto"
                  >
                    Ir para contato
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    to="/servicos"
                    className="inline-flex w-full items-center justify-center rounded-lg border border-white/35 bg-white/10 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/15 sm:w-auto"
                  >
                    Conhecer serviços
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

export default Sobre;
