import { motion } from "framer-motion";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Clock, Award, MessageCircle, ChevronDown } from "lucide-react";
import heroBg from "@/assets/imghero.jpeg";

const stats = [
  { icon: Shield, label: "Segurança", value: "100%" },
  { icon: Clock, label: "Disponibilidade", value: "24/7" },
  { icon: Award, label: "Anos de Experiência", value: "10+" },
];

const servicos = [
  "Manutenção Elétrica",
  "Manutenção Hidráulica",
  "Manutenção Preventiva",
  "Atendimento de Emergência",
  "Instalações Elétricas",
  "Outro",
];

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [servico, setServico] = useState("");

  const handleWhatsApp = () => {
    const msg = `Olá! Gostaria de solicitar um orçamento.\n\n*Nome:* ${nome}\n*Telefone:* ${telefone}\n*Serviço:* ${servico || "Não informado"}`;
    window.open(`https://wa.me/5511925333021?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <>
      {/* Fundo fixo na viewport: ao rolar, Sobre e as demais seções sobem por cima (parallax clássico) */}
      <div
        className="fixed inset-0 z-0 h-[100dvh] w-full pointer-events-none"
        aria-hidden
      >
        <img
          src={heroBg}
          alt=""
          className="h-full w-full object-cover object-center select-none"
          decoding="async"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <section
        ref={sectionRef}
        id="inicio"
        className="relative z-0 flex min-h-[72vh] scroll-mt-28 sm:min-h-[80vh] items-center bg-transparent"
      >
        <div className="container relative z-10 mx-auto pt-16 sm:pt-20 md:pt-24 lg:pt-36 pb-8 sm:pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">

          {/* Left — copy */}
          <div>
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-gradient-gold" />
              <span className="text-sm text-white/90 font-medium">Referência em manutenção predial em SP</span>
            </motion.div> */}

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold leading-[1.15] sm:leading-tight mb-4 sm:mb-6 text-white uppercase"
            >
             Gestão técnica em manutenção e instalações prediais
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-sm sm:text-base md:text-lg text-white/95 mb-6 sm:mb-8 leading-relaxed"
            >
             Soluções completas em manutenção preventiva e instalações elétricas e hidráulicas para condomínios, empresas e operações corporativas em São Paulo.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12"
            >
              <a
                href="#contato"
                className="w-full sm:w-auto min-h-[44px] inline-flex items-center justify-center gap-2 px-5 sm:px-8 py-3 sm:py-4 rounded-lg bg-gradient-gold text-white text-sm sm:text-base font-semibold hover:opacity-90 transition-opacity shadow-gold"
              >
                Solicitar Orçamento
                <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                to="/servicos"
                className="w-full sm:w-auto min-h-[44px] inline-flex items-center justify-center gap-2 px-5 sm:px-8 py-3 sm:py-4 rounded-lg border border-white/30 text-white text-sm sm:text-base font-semibold hover:bg-white/10 transition-colors backdrop-blur-sm"
              >
                Nossos Serviços
              </Link>
            </motion.div>

            {/* <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-6 md:gap-12"
            >
              {stats.map((stat) => (
                <div key={stat.label} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-white/10 border border-white/20 backdrop-blur-sm flex items-center justify-center">
                    <stat.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-xl font-bold text-white">{stat.value}</div>
                    <div className="text-xs text-white/60">{stat.label}</div>
                  </div>
                </div>
              ))}
            </motion.div> */}
          </div>

          {/* Right — quick quote card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="hidden lg:block"
          >
            <div className="relative rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md p-8 shadow-elevated">
              {/* Top badge */}
              <div className="flex items-center gap-2 mb-6">
                <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs font-semibold text-white/80 uppercase tracking-widest">Orçamento rápido — sem compromisso</span>
              </div>

              <h3 className="text-xl font-display font-bold text-white mb-1">
                Solicite agora pelo WhatsApp
              </h3>
              <p className="text-sm text-white/60 mb-6">
                Preencha os dados e nossa equipe retorna em até 1 hora.
              </p>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-white/70 mb-1.5 uppercase tracking-wide">
                    Seu nome
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: Carlos Silva"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm focus:outline-none focus:border-white/50 focus:bg-white/15 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-white/70 mb-1.5 uppercase tracking-wide">
                    Telefone / WhatsApp
                  </label>
                  <input
                    type="tel"
                    placeholder="(11) 92533-3021"
                    value={telefone}
                    onChange={(e) => setTelefone(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm focus:outline-none focus:border-white/50 focus:bg-white/15 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-white/70 mb-1.5 uppercase tracking-wide">
                    Tipo de serviço
                  </label>
                  <div className="relative">
                    <select
                      value={servico}
                      onChange={(e) => setServico(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-sm focus:outline-none focus:border-white/50 focus:bg-white/15 transition-colors appearance-none cursor-pointer"
                      style={{ color: servico ? "white" : "rgba(255,255,255,0.4)" }}
                    >
                      <option value="" disabled style={{ color: "#000" }}>Selecione o serviço</option>
                      {servicos.map((s) => (
                        <option key={s} value={s} style={{ color: "#000" }}>{s}</option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/50 pointer-events-none" />
                  </div>
                </div>

                <button
                  onClick={handleWhatsApp}
                  className="w-full flex items-center justify-center gap-3 py-4 rounded-lg bg-green-500 hover:bg-green-400 text-white font-bold text-sm transition-colors shadow-lg mt-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  Enviar pelo WhatsApp
                </button>
              </div>

              <p className="text-center text-xs text-white/40 mt-4">
                Atendimento em até 1 hora · Seg–Sáb 7h–20h
              </p>
            </div>
          </motion.div>

        </div>
      </div>
      </section>
    </>
  );
};

export default HeroSection;
