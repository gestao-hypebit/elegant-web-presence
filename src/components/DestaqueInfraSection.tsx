import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const DestaqueInfraSection = () => {
  return (
    <section
      id="destaque-infraestrutura"
      className="relative flex items-center justify-center bg-transparent px-6 py-12 md:py-24"
    >
      <div className="max-w-2xl text-center">
   
        <h2 className="mt-3 font-display text-xl font-bold text-white drop-shadow-md sm:text-2xl md:text-5xl">
          Sua operação não pode depender de improviso
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-white drop-shadow md:text-lg">
          Engenharia de instalações, manutenção preventiva e contratos recorrentes para condomínios,
          empresas e indústrias em São Paulo — com foco em segurança, conformidade e previsibilidade
          de custos.
        </p>
        {/* <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <a
                href="#contato"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-lg bg-gradient-gold text-white font-semibold hover:opacity-90 transition-opacity shadow-gold"
              >
                Solicitar Orçamento
                <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                to="/servicos"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-lg border border-white/30 text-white font-semibold hover:bg-white/10 transition-colors backdrop-blur-sm"
              >
                Nossos Serviços
              </Link>
            </motion.div> */}
        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
          <a
            href="/#contato"
           className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-lg bg-gradient-gold text-white font-semibold hover:opacity-90 transition-opacity shadow-gold"
          >
            Solicitar contato
            <ArrowRight className="h-4 w-4" />
          </a>
          <Link
            to="/servicos"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-lg border border-white/30 text-white font-semibold hover:bg-white/10 transition-colors backdrop-blur-sm"
          >
            Conheça nossos serviços
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DestaqueInfraSection;
