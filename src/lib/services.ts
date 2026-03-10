import serviceElectrical from "@/assets/service-electrical.jpg";
import serviceHydraulic from "@/assets/service-hydraulic.jpg";

export const services = [
  {
    slug: "manutencao-eletrica-predial",
    title: "Manutenção Elétrica Predial",
    shortDescription:
      "Diagnóstico, reparo e modernização de sistemas elétricos com foco em segurança e eficiência energética.",
    longDescription:
      "Realizamos inspeção completa, substituição de componentes defeituosos, readequação de quadros e aterramento, além de emitir relatórios técnicos com recomendações para economia de energia.",
    image: serviceElectrical,
  },
  {
    slug: "manutencao-hidraulica-predial",
    title: "Manutenção Hidráulica Predial",
    shortDescription:
      "Prevenção e correção de vazamentos, desentupimentos e manutenção de sistemas hidráulicos completos.",
    longDescription:
      "Atuamos em detecção de vazamentos, recuperação de redes, testes de pressão, limpeza de caixas d'água e substituição de ramais, com garantia dos serviços executados.",
    image: serviceHydraulic,
  },
  {
    slug: "instalacoes-eletricas-e-hidraulicas",
    title: "Instalações Elétricas e Hidráulicas",
    shortDescription: "Projetos e execução de instalações completas para edificações novas ou reformas.",
    longDescription:
      "Entregamos projetos executivos compatibilizados, instalação de cabeamento, quadros, distribuição hidráulica e testes finais para liberação de uso.",
  },
  {
    slug: "manutencao-preventiva-e-corretiva",
    title: "Manutenção Preventiva e Corretiva",
    shortDescription: "Planos de manutenção programada para evitar falhas e reduzir custos a longo prazo.",
    longDescription:
      "Elaboramos cronogramas de inspeção, checklists personalizados e relatórios periódicos para acompanhamento e gestão de ativos prediais.",
  },
  {
    slug: "contratos-recorrentes",
    title: "Contratos Recorrentes",
    shortDescription: "Gestão contínua de manutenção predial com acompanhamento técnico personalizado.",
    longDescription:
      "Planos mensais ou anuais com visitas programadas, SLA definido, suporte para chamados emergenciais e gestão documentada das intervenções.",
  },
];

export default services;
