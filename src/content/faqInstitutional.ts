export const faqIntro = {
  title: "FAQ — Luminous Instalações e Serviços",
  lead:
    "Este FAQ foi desenvolvido para sanar dúvidas técnicas e comerciais, transformando incertezas em confiança. As respostas foram redigidas em estilo Corporate High-Level, focando em valor agregado, segurança e continuidade operacional, abrangendo tanto a gestão de manutenção quanto a execução de instalações de engenharia.",
};

export type FaqGroup = {
  heading: string;
  items: { q: string; a: string }[];
};

export const faqGroups: FaqGroup[] = [
  {
    heading: "🏢 Condomínios e Síndicos: Gestão Patrimonial e Tranquilidade",
    items: [
      {
        q: "A Luminous atende exclusivamente condomínios residenciais?",
        a: "Não. Embora sejamos especialistas em condomínios de alto padrão, nossa estrutura de engenharia atende com a mesma excelência empresas, indústrias, centros comerciais e operações corporativas complexas, adaptando o rigor técnico a cada necessidade específica.",
      },
      {
        q: "Quais são os serviços críticos realizados em condomínios?",
        a: "Nossa atuação abrange a gestão completa da infraestrutura elétrica e hidráulica predial. Realizamos desde inspeções termográficas em quadros de energia até a manutenção preventiva de barriletes e sistemas de recalque, garantindo que a estrutura funcione sem interrupções. Além disso, executamos instalações elétricas e hidráulicas para novas áreas ou modernizações, sempre em conformidade com as normas.",
      },
      {
        q: "A manutenção preventiva realmente gera economia para o condomínio?",
        a: "Absolutamente. A manutenção preventiva é um investimento estratégico que reduz em até 40% os custos com chamados de emergência. Além de evitar rateios extras inesperados, ela garante a valorização do patrimônio e a segurança jurídica do síndico perante as normas técnicas.",
      },
      {
        q: "Como é a dinâmica de atendimento no dia a dia do condomínio?",
        a: "Através de nossos contratos recorrentes, estabelecemos um cronograma de visitas técnicas programadas. Nossa equipe atua de forma proativa, identificando desgastes em componentes elétricos e hidráulicos antes que eles evoluam para falhas críticas, mantendo o síndico sempre informado via relatórios de status.",
      },
      {
        q: "Como funciona o suporte para emergências em condomínios?",
        a: "Nossos parceiros contratuais possuem prioridade absoluta. Dependendo do plano escolhido, oferecemos canais de acionamento ágil para contingenciamento de falhas elétricas ou hidráulicas, garantindo que o impacto para os moradores seja o menor possível.",
      },
    ],
  },
  {
    heading: "🏭 Indústrias e Operações Corporativas: Disponibilidade e Risco Zero",
    items: [
      {
        q: "A Luminous possui estrutura para atender operações industriais de grande porte?",
        a: "Sim. Estamos preparados para gerir demandas técnicas complexas que exigem alta confiabilidade. Atendemos indústrias, centros logísticos e data centers, focando na mitigação de riscos e na manutenção da infraestrutura que sustenta a produção. Nossa expertise se estende à execução de instalações elétricas e hidráulicas industriais, incluindo quadros de alta carga, sistemas galvanizados e redes de fluidos específicos.",
      },
      {
        q: "Como funciona o SLA (Service Level Agreement) de atendimento?",
        a: "A previsibilidade é um dos nossos pilares. Trabalhamos com SLAs rigorosos de atendimento emergencial, que variam de 6 a 12 horas nos planos Premium, chegando a até 2 horas no PLANO ELITE 24/7, garantindo que sua operação crítica nunca fique desamparada.",
      },
      {
        q: "Qual o nível de suporte contínuo oferecido para empresas?",
        a: "Oferecemos uma gestão de facilities completa em elétrica e hidráulica. Através de contratos técnicos, garantimos acompanhamento recorrente por especialistas, suporte consultivo para melhoria de eficiência energética e execução de cronogramas de manutenção preditiva. Além disso, somos parceiros na expansão e modernização de infraestruturas, com serviços de instalação que garantem a conformidade e a performance.",
      },
      {
        q: "É possível garantir a continuidade em operações que não podem parar?",
        a: "Sim, este é o nosso core business. Para hospitais, shoppings e indústrias, oferecemos o PLANO ELITE 24/7, que inclui equipes de plantão ou sobreaviso imediato, garantindo disponibilidade total e risco zero de interrupção por falhas de infraestrutura.",
      },
      {
        q: "A Luminous fornece documentação técnica para auditorias e seguros?",
        a: "Sim. Emitimos relatórios técnicos detalhados e laudos de conformidade após cada intervenção ou inspeção periódica. Essa documentação é essencial para processos de auditoria interna, certificações de qualidade e para a manutenção de apólices de seguro patrimonial. Para instalações, fornecemos ART (Anotação de Responsabilidade Técnica) e toda a documentação de projeto e comissionamento.",
      },
    ],
  },
  {
    heading: "🏗️ Instalações e Projetos de Engenharia: Construindo o Futuro",
    items: [
      {
        q: "A Luminous realiza apenas manutenção ou também executa novas instalações?",
        a: "Nossa expertise abrange o ciclo completo da infraestrutura. Somos especializados tanto na gestão de manutenção (preventiva, preditiva e corretiva) quanto na execução de projetos de instalações elétricas e hidráulicas para novas construções, reformas e modernizações, em ambientes prediais e industriais.",
      },
      {
        q: "Quais tipos de instalações elétricas a Luminous executa?",
        a: "Realizamos desde a montagem de quadros de distribuição e disjuntores de baixa e média tensão, infraestrutura para cabeamento (perfilados, eletrodutos, canaletas galvanizadas), sistemas de aterramento e SPDA, até instalações elétricas industriais específicas para maquinário pesado e subestações, sempre em conformidade com NBR 5410 e NR-10.",
      },
      {
        q: "E em relação às instalações hidráulicas?",
        a: "Executamos redes de água fria e quente, sistemas de esgoto e águas pluviais, além de sistemas de combate a incêndio (hidrantes e sprinklers) conforme NBR 5626 e NBR 13714. Também atuamos em instalações hidráulicas industriais, como redes de ar comprimido e fluidos específicos, garantindo estanqueidade e eficiência.",
      },
      {
        q: "A Luminous trabalha em parceria com arquitetos, engenheiros e construtoras?",
        a: "Sim, ativamente. Buscamos parcerias estratégicas para atuar como o braço técnico executor de confiança. Oferecemos consultoria desde a fase de projeto, garantindo que a execução das instalações siga o mais alto rigor técnico, otimizando prazos e custos, e evitando retrabalhos.",
      },
      {
        q: "Qual o diferencial da Luminous na execução de projetos de instalação?",
        a: "Nosso diferencial é a mão de obra altamente qualificada e certificada, composta por engenheiros e técnicos com vasta experiência em projetos de grande porte. Garantimos a conformidade com as normas, a segurança na execução (NR-10) e a entrega de uma infraestrutura robusta e duradoura, desde o início da obra até o comissionamento final.",
      },
    ],
  },
  {
    heading: "💼 Contratos e Gestão Comercial: Transparência e Parceria",
    items: [
      {
        q: "É obrigatório o fechamento de um contrato mensal recorrente?",
        a: "Não é obrigatório, mas é o modelo que gera maior valor e segurança. O contrato recorrente transforma a manutenção em um processo inteligente, reduzindo custos fixos, garantindo prioridade de atendimento e, principalmente, evitando prejuízos causados por falhas inesperadas. Para instalações, oferecemos contratos por projeto, com garantia de execução e pós-venda.",
      },
      {
        q: "O que está rigorosamente incluso em um contrato de manutenção Luminous?",
        a: "Nossos contratos de manutenção englobam visitas técnicas programadas, inspeções preventivas sistemáticas, suporte técnico especializado e, conforme o plano, cobertura de materiais de pequeno porte e atendimento emergencial prioritário com SLA garantido.",
      },
      {
        q: "Como é calculado o investimento de um contrato de manutenção ou de um projeto de instalação?",
        a: "O valor é personalizado. Para manutenção, realizamos uma Avaliação Técnica Inicial para entender o porte da estrutura, a idade das instalações e a criticidade da operação. Para instalações, o orçamento é baseado no escopo detalhado do projeto, materiais, complexidade e prazos. Em ambos os casos, apresentamos uma proposta que equilibra custo-benefício e segurança operacional.",
      },
      {
        q: "Existe um plano pré-definido para o meu tipo de negócio?",
        a: "Sim. Para manutenção, desenvolvemos quatro níveis de planos (Básico, Profissional, Premium e Elite 24/7) que cobrem desde comércios locais até indústrias de alta complexidade. Para instalações, nossos projetos são customizados, mas sempre alinhados às melhores práticas de engenharia para o seu segmento.",
      },
      {
        q: "Posso solicitar uma personalização total do meu plano de serviços ou projeto?",
        a: "Com certeza. Entendemos que cada operação e projeto possuem particularidades. Desenvolvemos escopos de trabalho customizados para atender demandas específicas de engenharia, horários diferenciados de manutenção ou níveis de SLA ultra-agressivos para contratos, e soluções de instalação sob medida para a sua obra.",
      },
      {
        q: "Qual o procedimento para solicitar um orçamento ou visita técnica?",
        a: "O processo é ágil e profissional. Você pode solicitar uma proposta diretamente através do nosso formulário no site ou iniciar um atendimento imediato via WhatsApp com um de nossos consultores técnicos. Para projetos de instalação, agendamos uma reunião para levantamento de requisitos e análise de projeto.",
      },
    ],
  },
];

export const faqClosing = {
  title: "Ainda restam dúvidas sobre como proteger e construir seu patrimônio?",
  text: "A gestão de infraestrutura e a execução de projetos não devem ser uma preocupação para você. Deixe a complexidade técnica com quem é especialista em Disponibilidade, Segurança e Excelência em Engenharia.",
};
