/** Copy e dados da matriz de planos — seção #planos */

export const planosAncoragem =
  "Planos flexíveis que se adaptam com precisão ao nível de criticidade e à demanda operacional da sua infraestrutura.";

export const planosTituloMatriz =
  "Matriz de Soluções Luminous: escolha o nível de continuidade que seu negócio exige";

export const planosFlexibilizacao =
  "Os planos apresentados são flexíveis e podem ser personalizados conforme a necessidade específica do cliente, após uma análise técnica aprofundada de sua infraestrutura.";

export const planosSlaTitulo = "SLA garantido: nosso compromisso com a sua continuidade";

export const planosSlaTexto =
  "Todos os planos da Luminous operam sob um rigoroso Acordo de Nível de Serviço (SLA), com níveis de prioridade claramente definidos. Isso garante agilidade, organização e segurança operacional, transformando a manutenção em um investimento estratégico que protege seu patrimônio e sua produtividade.";

export type PlanoId = "essencial" | "padrao-ouro" | "full-service" | "elite";

export const planosColunas: {
  id: PlanoId;
  nomeCurto: string;
  nomeCompleto: string;
  destaque: "none" | "recomendado" | "elite";
}[] = [
  { id: "essencial", nomeCurto: "Essencial", nomeCompleto: "Essencial", destaque: "none" },
  { id: "padrao-ouro", nomeCurto: "Padrão Ouro", nomeCompleto: "Padrão Ouro", destaque: "none" },
  {
    id: "full-service",
    nomeCurto: "Full Service",
    nomeCompleto: "Full Service",
    destaque: "recomendado",
  },
  {
    id: "elite",
    nomeCurto: "ELITE 24/7",
    nomeCompleto: "ELITE 24/7",
    destaque: "elite",
  },
];

/** Linhas da matriz: primeira coluna = rótulo; demais = texto por plano */
export const planosMatrizLinhas: { label: string; valores: [string, string, string, string] }[] = [
  {
    label: "Perfil de operação",
    valores: [
      "Pequenos comércios e escritórios",
      "Empresas e prédios comerciais",
      "Condomínios de grande porte / corporativo",
      "Hospitais, indústrias, data centers, shoppings",
    ],
  },
  {
    label: "Horário de atendimento",
    valores: [
      "Comercial (seg. a sex.)",
      "Comercial prioritário",
      "Estendido (até 20h)",
      "24 horas por dia, 7 dias por semana",
    ],
  },
  {
    label: "Tempo de resposta (SLA)",
    valores: ["Até 24 horas", "Até 8 horas", "Até 2 horas", "Imediato (até 2h para críticos)"],
  },
  {
    label: "Tempo de atendimento",
    valores: [
      "Até 48 horas",
      "Até 24 horas",
      "Até 6 horas",
      "Até 2 horas (solução ou contenção)",
    ],
  },
  {
    label: "Atendimento emergencial",
    valores: [
      "Sob demanda (orçamento adicional)",
      "Incluso (SLA de até 12h)",
      "Incluso (SLA de até 4h)",
      "Incluso (SLA imediato)",
    ],
  },
  {
    label: "Visitas preventivas",
    valores: ["1× mês", "2× mês", "1× semana", "2 a 5× por semana (preditiva)"],
  },
  {
    label: "Manutenção corretiva",
    valores: ["✔️", "✔️", "✔️", "✔️"],
  },
  {
    label: "Manutenção preditiva",
    valores: ["❌", "❌", "✔️ (básica)", "✔️ (avançada: termografia, análise)"],
  },
  {
    label: "Relatórios técnicos",
    valores: ["❌", "Básico (mensal)", "✔️ (detalhado)", "✔️ (conformidade e auditoria)"],
  },
  {
    label: "Prioridade de atendimento",
    valores: ["Padrão", "✔️ (elevada)", "✔️ (alta)", "✔️ (máxima e dedicada)"],
  },
  {
    label: "Equipe dedicada",
    valores: ["❌", "❌", "Parcial (consultoria)", "✔️ (plantão / sobreaviso)"],
  },
  {
    label: "Gestão de manutenção",
    valores: ["❌", "❌", "✔️ (parcial)", "✔️ (completa e estratégica)"],
  },
];
