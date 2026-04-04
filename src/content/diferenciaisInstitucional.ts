/** Copy da seção Diferenciais (home) — base no briefing, sintetizada */

export const diferenciaisTitulo = "Nossos diferenciais que transformam sua gestão";

export const diferenciaisIntro =
  "Na Luminous, excelência em engenharia é técnica aliada a parceria e resultados mensuráveis. Conheça os pilares que sustentam nossa atuação na sua infraestrutura:";

export type DiferencialItem = {
  title: string;
  tagline: string;
  bullets: string[];
};

export const diferenciaisItens: DiferencialItem[] = [
  {
    title: "Redução inteligente de custos",
    tagline: "Da manutenção reativa ao investimento estratégico — preditiva e preventiva para interceptar problemas antes da emergência.",
    bullets: [
      "Menos reparos urgentes e caros",
      "Maior vida útil de equipamentos e instalações",
      "Consumo de energia e água mais eficiente",
      "Custos previsíveis com planos e contratos claros",
    ],
  },
  {
    title: "Atendimento personalizado",
    tagline: "Cada operação é única: diagnóstico e plano alinhados ao porte, à criticidade e às suas metas.",
    bullets: [
      "Análise aprofundada da infraestrutura e pontos críticos",
      "Contratos flexíveis — do essencial ao PLANO ELITE 24/7",
      "Canal direto com clareza e agilidade",
      "Projetos e manutenção sob medida para o seu cenário",
    ],
  },
  {
    title: "Transparência total",
    tagline: "Confiança vem da informação: você acompanha o que foi feito, com quanto custou e o que vem a seguir.",
    bullets: [
      "Relatórios por visita ou intervenção",
      "Comunicação honesta sobre prazos e escopo",
      "Propostas e orçamentos item a item",
      "Visibilidade do status da infraestrutura",
    ],
  },
  {
    title: "Gestão organizada",
    tagline: "Processos definidos do agendamento à execução — menos atrito, mais previsibilidade.",
    bullets: [
      "Fluxos pensados para agilidade",
      "Equipe técnica coordenada e prazos combinados",
      "Histórico de intervenções para auditoria e planejamento",
      "Padronização que mantém qualidade em todo o portfólio",
    ],
  },
  {
    title: "Acompanhamento técnico contínuo",
    tagline: "Além de serviços pontuais: monitoramento e especialistas que tratam seu patrimônio como prioridade.",
    bullets: [
      "Inspeções periódicas e prevenção de falhas",
      "Ferramentas como termografia e análise de cargas",
      "Consultoria para melhorar desempenho e segurança",
      "Parceria estável para qualquer demanda técnica",
    ],
  },
  {
    title: "Contratos recorrentes",
    tagline: "Previsibilidade em cenários imprevisíveis — manutenção programada e SLA que protegem operação e orçamento.",
    bullets: [
      "Intervenções agendadas, com menos surpresa operacional",
      "Visibilidade de custo recorrente",
      "Prioridade de atendimento e tempos acordados",
      "Foco em prevenção e relacionamento de longo prazo",
    ],
  },
];
