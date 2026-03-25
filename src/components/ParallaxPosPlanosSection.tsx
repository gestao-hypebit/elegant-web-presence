import { ArrowRight, ShieldCheck } from "lucide-react";

const ParallaxPosPlanosSection = () => {
  return (
    <section
      id="pos-planos"
      className="relative flex items-center justify-center bg-transparent px-4 sm:px-6 py-10 sm:py-12 md:py-24"
    >
      <div className="max-w-3xl text-center">
      
        <h2 className="mt-3 font-display text-lg font-bold leading-tight text-white drop-shadow-md sm:text-xl md:text-3xl lg:text-5xl px-1">
          O plano certo para a criticidade do seu patrimônio
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-white/95 drop-shadow md:text-lg px-1">
          Além dos planos apresentados, dimensionamos escopo, visitas preventivas e tempos de resposta à sua
          operação — de condomínios a indústrias e data centers. Solicite uma proposta alinhada ao seu
          nível de risco e disponibilidade.
        </p>
        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
          <a
            href="/#contato"
             className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-lg bg-gradient-gold text-white font-semibold hover:opacity-90 transition-opacity shadow-gold"
          >
            Personalizar proposta
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="/#depoimentos"
           className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-lg border border-white/30 text-white font-semibold hover:bg-white/10 transition-colors backdrop-blur-sm"
          >
            Ver resultados de clientes
          </a>
        </div>
      </div>
    </section>
  );
};

export default ParallaxPosPlanosSection;
