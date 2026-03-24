import serviceElectrical from "@/assets/service-electrical.jpg";
import serviceHydraulic from "@/assets/service-hydraulic.jpg";

export const services = [
  {
    slug: "manutencao-eletrica-predial",
    title: "Manutenção Elétrica Predial",
    shortDescription:
      "Inspeções, preventiva programada, correções e adequação às normas — segurança, eficiência e conformidade (NR-10, NBR 5410).",
    longDescription:
      "Realizamos inspeção completa, substituição de componentes defeituosos, readequação de quadros e aterramento, além de emitir relatórios técnicos com recomendações para economia de energia.",
    image: serviceElectrical,
  },
  {
    slug: "manutencao-hidraulica-predial",
    title: "Manutenção Hidráulica Predial",
    shortDescription:
      "Detecção de vazamentos, redes de água e esgoto, bombas e inspeções preventivas para proteger patrimônio e recursos.",
    longDescription:
      "Atuamos em detecção de vazamentos, recuperação de redes, testes de pressão, limpeza de caixas d'água e substituição de ramais, com garantia dos serviços executados.",
    image: serviceHydraulic,
  },
  {
    slug: "instalacoes-eletricas-e-hidraulicas",
    title: "Instalações Elétricas e Hidráulicas",
    shortDescription:
      "Projetos e execução de instalações elétricas e hidráulicas de alta complexidade, do planejamento ao comissionamento.",
    longDescription:
      "Entregamos projetos executivos compatibilizados, instalação de cabeamento, quadros, distribuição hidráulica e testes finais para liberação de uso.",
  },
  {
    slug: "manutencao-preventiva-e-corretiva",
    title: "Manutenção Preventiva e Corretiva",
    shortDescription:
      "Planos preditivos e preventivos sob medida: menos paradas, mais vida útil dos ativos e custos previsíveis.",
    longDescription:
      "Elaboramos cronogramas de inspeção, checklists personalizados e relatórios periódicos para acompanhamento e gestão de ativos prediais.",
  },
  {
    slug: "contratos-recorrentes",
    title: "Contratos Recorrentes",
    shortDescription:
      "Contratos com SLA, plantão e relatórios — do plano essencial ao Elite 24/7 para operações que não podem parar.",
    longDescription:
      "Planos mensais ou anuais com visitas programadas, SLA definido, suporte para chamados emergenciais e gestão documentada das intervenções.",
  },
];

export default services;
