import { ArrowRight } from "lucide-react";
import { HashLink } from "@/components/HashLink";

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
          <HashLink
            to="/#contato"
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-gold px-6 py-3 font-semibold text-white shadow-gold transition-opacity hover:opacity-90 sm:w-auto sm:px-8 sm:py-4"
          >
            Personalizar proposta
            <ArrowRight className="h-4 w-4" />
          </HashLink>
          <HashLink
            to="/#depoimentos"
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-white/30 px-6 py-3 font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/10 sm:w-auto sm:px-8 sm:py-4"
          >
            Ver resultados de clientes
          </HashLink>
        </div>
      </div>
    </section>
  );
};

export default ParallaxPosPlanosSection;
