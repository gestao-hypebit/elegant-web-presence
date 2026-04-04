import type { ReactNode } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "@/components/HashLink";
import { ArrowRight, CheckCircle2, Target, Eye, Building2, MapPin, Sparkles } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import heroBg from "@/assets/imghero.jpeg";
import sobreimg from "@/assets/sobreimg.jpeg";
import {
  heroEyebrow,
  heroTitulo,
  heroSubtitulo,
  heroChips,
  quemSomosParagrafos,
  missaoTitulo,
  missaoTexto,
  visaoTitulo,
  visaoTexto,
  valoresTitulo,
  valoresItens,
  diferencialTitulo,
  diferencialIntro,
  diferencialItens,
  atuacaoTitulo,
  atuacaoIntro,
  atuacaoSegmentos,
  compromissoTitulo,
  compromissoParagrafos,
} from "@/content/sobreInstitucional";

const sectionDark = "bg-[hsl(193_70%_13%)] text-white";
const sectionDarkBorder = "border-white/10";
const accent = "text-[hsl(193_57%_29%)]";
const accentBg = "bg-[hsl(193_57%_29%)]/10";
const ringAccent = "border-[hsl(193_57%_29%)]/20";

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
    <div className="min-h-screen bg-muted/40">
      <div className="pointer-events-none fixed inset-0 z-0 h-[100dvh] w-full" aria-hidden>
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
          <section className="relative flex min-h-[46vh] sm:min-h-[52vh] flex-col justify-end bg-transparent pb-10 pt-24 sm:pb-14 sm:pt-28 md:min-h-[50vh] md:pb-16 md:pt-32 lg:pt-36">
            <div className="container mx-auto max-w-4xl">
              <p className="mb-3 inline-flex rounded-full border border-white/25 bg-black/25 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white/90 backdrop-blur-sm">
                {heroEyebrow}
              </p>
              <h1 className="mt-1 font-display text-2xl font-bold leading-[1.15] text-white drop-shadow-md sm:text-3xl md:text-4xl lg:text-[2.65rem]">
                {heroTitulo}
              </h1>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/95 sm:text-base md:text-lg">
                {heroSubtitulo}
              </p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {heroChips.map((c) => (
                  <li
                    key={c}
                    className="rounded-lg border border-white/20 bg-black/25 px-3 py-2 text-xs font-medium text-white/95 backdrop-blur-sm sm:text-sm"
                  >
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Quem somos — identidade */}
          <section id="quem-somos" className="border-b border-border bg-white py-12 sm:py-16 md:py-24">
            <div className="container mx-auto grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
              <Reveal className="order-2 lg:order-1">
                <div className={`overflow-hidden rounded-2xl shadow-elevated ring-1 ${ringAccent}`}>
                  <img
                    src={sobreimg}
                    alt="Operações e equipe Luminous"
                    className="h-[300px] w-full object-cover lg:h-[460px]"
                    loading="lazy"
                  />
                </div>
              </Reveal>
              <Reveal className="order-1 lg:order-2" delay={0.06}>
                <span className={`text-xs font-semibold uppercase tracking-[0.2em] ${accent}`}>
                  Institucional
                </span>
                <h2 className="mt-3 font-display text-2xl font-bold leading-tight text-foreground sm:text-3xl md:text-4xl">
                  Confiança e execução de ponta a ponta
                </h2>
                <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground md:text-base">
                  {quemSomosParagrafos.map((p) => (
                    <p key={p.slice(0, 40)}>{p}</p>
                  ))}
                </div>
              </Reveal>
            </div>
          </section>

          {/* Missão + Visão */}
          <section className={`border-b ${sectionDarkBorder} py-12 sm:py-16 md:py-20 ${sectionDark}`}>
            <div className="container mx-auto grid gap-6 sm:gap-8 md:grid-cols-2 lg:gap-10">
              <Reveal>
                <div className="flex h-full flex-col rounded-2xl border border-white/15 bg-white p-6 text-foreground shadow-elevated sm:p-8">
                  <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl ${accentBg}`}>
                    <Target className={`h-6 w-6 ${accent}`} />
                  </div>
                  <span className={`text-xs font-semibold uppercase tracking-widest ${accent}`}>Missão</span>
                  <h3 className="mt-2 font-display text-xl font-bold sm:text-2xl">{missaoTitulo}</h3>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">{missaoTexto}</p>
                </div>
              </Reveal>
              <Reveal delay={0.08}>
                <div className="flex h-full flex-col rounded-2xl border border-white/15 bg-white p-6 text-foreground shadow-elevated sm:p-8">
                  <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl ${accentBg}`}>
                    <Eye className={`h-6 w-6 ${accent}`} />
                  </div>
                  <span className={`text-xs font-semibold uppercase tracking-widest ${accent}`}>Visão</span>
                  <h3 className="mt-2 font-display text-xl font-bold sm:text-2xl">{visaoTitulo}</h3>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">{visaoTexto}</p>
                </div>
              </Reveal>
            </div>
          </section>

          {/* Valores */}
          <section id="valores" className="border-b border-border bg-muted/50 py-12 sm:py-16 md:py-24">
            <div className="container mx-auto">
              <Reveal className="mx-auto mb-10 max-w-2xl text-center">
                <span className={`text-xs font-semibold uppercase tracking-[0.2em] ${accent}`}>Valores</span>
                <h2 className="mt-3 font-display text-2xl font-bold text-foreground sm:text-3xl md:text-4xl">
                  {valoresTitulo}
                </h2>
              </Reveal>
              <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {valoresItens.map((v, i) => (
                  <Reveal key={v.titulo} delay={i * 0.05}>
                    <div
                      className={`flex h-full flex-col rounded-2xl border ${ringAccent} bg-white p-5 shadow-card transition-shadow hover:shadow-md sm:p-6`}
                    >
                      <CheckCircle2 className={`mb-3 h-7 w-7 shrink-0 ${accent}`} />
                      <h3 className="font-display text-base font-bold text-foreground">{v.titulo}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.texto}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          {/* Diferencial */}
          <section id="diferencial" className="bg-gradient-gold py-12 sm:py-16 md:py-24">
            <div className="container mx-auto">
              <Reveal className="mb-8 text-center sm:mb-12">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/75">Diferencial</span>
                <h2 className="mt-3 font-display text-2xl font-bold text-white sm:text-3xl md:text-4xl lg:text-5xl">
                  {diferencialTitulo}
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/90 md:text-base">
                  {diferencialIntro}
                </p>
              </Reveal>
              <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2 sm:gap-5">
                {diferencialItens.map((item, i) => (
                  <Reveal key={item.slice(0, 36)} delay={i * 0.06}>
                    <div className="flex h-full gap-3 rounded-xl border border-white/20 bg-white/10 p-4 backdrop-blur-sm sm:gap-4 sm:p-5">
                      <Sparkles className="mt-0.5 h-5 w-5 shrink-0 text-white" />
                      <p className="text-sm font-medium leading-snug text-white sm:text-base">{item}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          {/* Área de atuação */}
          <section id="atuacao" className="border-b border-border bg-white py-12 sm:py-16 md:py-24">
            <div className="container mx-auto">
              <Reveal className="mb-10 text-center md:text-left">
                <MapPin className={`mx-auto mb-3 h-7 w-7 md:mx-0 ${accent}`} />
                <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl md:text-4xl">
                  {atuacaoTitulo}
                </h2>
                <p className="mx-auto mt-3 max-w-2xl text-muted-foreground md:mx-0">{atuacaoIntro}</p>
              </Reveal>
              <div className=" grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {atuacaoSegmentos.map((s, i) => (
                  <Reveal key={s.titulo} delay={i * 0.03}>
                    <div
                      className={`flex h-full gap-3 rounded-2xl border ${ringAccent} bg-gradient-to-br from-muted/70 to-white p-4 sm:p-5`}
                    >
                      <Building2 className={`mt-0.5 h-5 w-5 shrink-0 ${accent}`} />
                      <div>
                        <h3 className="font-display text-sm font-bold text-foreground">{s.titulo}</h3>
                        <p className="mt-1 text-xs leading-relaxed text-muted-foreground sm:text-sm">{s.texto}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          {/* Compromisso */}
          <section id="compromisso" className={`border-t ${sectionDarkBorder} py-12 sm:py-16 md:py-20 ${sectionDark}`}>
            <div className="container mx-auto max-w-2xl text-center">
              <Reveal>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">Compromisso</span>
                <h2 className="mt-3 font-display text-2xl font-bold text-white sm:text-3xl md:text-4xl">
                  {compromissoTitulo}
                </h2>
                <div className="mt-6 space-y-4 text-sm leading-relaxed text-white/85 md:text-base">
                  {compromissoParagrafos.map((p) => (
                    <p key={p.slice(0, 40)}>{p}</p>
                  ))}
                </div>
              </Reveal>
            </div>
          </section>

          {/* CTA */}
          <section className="relative bg-transparent py-12 sm:py-16 md:py-20">
            <div className="container mx-auto max-w-2xl text-center">
              <Reveal>
                <h2 className="font-display text-lg font-bold leading-tight text-white drop-shadow-md sm:text-xl md:text-3xl lg:text-4xl">
                  Pronto para o próximo passo?
                </h2>
                <p className="mx-auto mt-3 max-w-xl text-sm text-white/95 drop-shadow md:text-lg">
                  Fale com a equipe e solicite uma proposta alinhada à sua operação.
                </p>
                <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
                  <HashLink
                    to="/#contato"
                    className="inline-flex w-full min-h-[44px] items-center justify-center gap-2 rounded-lg bg-gradient-gold px-6 py-3 text-sm font-semibold text-primary-foreground shadow-gold transition-opacity hover:opacity-90 sm:w-auto sm:px-8 sm:py-3.5"
                  >
                    Ir para contato
                    <ArrowRight className="h-4 w-4" />
                  </HashLink>
                  <Link
                    to="/servicos"
                    className="inline-flex w-full min-h-[44px] items-center justify-center rounded-lg border border-white/35 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/15 sm:w-auto sm:px-8 sm:py-3.5"
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
