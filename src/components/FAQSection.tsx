import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect, RefObject } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Qual o prazo de atendimento para chamados?",
    a: "Atendemos chamados emergenciais em até 4 horas na região metropolitana; para serviços agendados, combinamos data conforme disponibilidade.",
  },
  {
    q: "Vocês fazem manutenção emergencial 24/7?",
    a: "Oferecemos plano de SLA para atendimento emergencial fora do horário comercial como opção contratual.",
  },
  {
    q: "Como funciona o contrato de manutenção?",
    a: "Elaboramos um contrato com escopo, periodicidade de visitas, registro de ordens de serviço e prazos de atendimento acordados.",
  },
  {
    q: "Vocês emitem relatórios e laudos técnicos?",
    a: "Sim — relatórios periódicos e laudos técnicos podem ser entregues conforme necessidade do cliente.",
  },
];

function useMeasure(ref: RefObject<HTMLElement | null>, open: boolean) {
  const [height, setHeight] = useState<number>(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () => setHeight(el.scrollHeight);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, [ref]);

  return open ? height : 0;
}

const FAQSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="duvidas" className="py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <span className="text-sm font-semibold text-gold uppercase tracking-widest">Dúvidas</span>
          <h2 className="text-3xl font-display font-bold mt-3">Perguntas frequentes</h2>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              q={f.q}
              a={f.a}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const AccordionItem = ({ q, a, isOpen, onToggle }: { q: string; a: string; isOpen: boolean; onToggle: () => void }) => {
  const contentRef = useRef<HTMLDivElement | null>(null);
  const measured = useMeasure(contentRef, isOpen);

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-card border border-border rounded-lg overflow-hidden"
    >
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full text-left p-4 flex items-center justify-between gap-4"
      >
        <div className="font-semibold text-foreground">{q}</div>
        <ChevronDown
          className={`text-gold transition-transform duration-200 ${isOpen ? "rotate-180" : "rotate-0"}`}
          aria-hidden
        />
      </button>

      <div style={{ maxHeight: measured, transition: "max-height 260ms ease", overflow: "hidden" }}>
        <div
          ref={contentRef}
          className="text-sm text-muted-foreground"
          style={{ padding: isOpen ? "0 1rem 1rem" : "0 1rem 0", opacity: isOpen ? 1 : 0, transition: "opacity 200ms ease, padding 200ms ease" }}
        >
          {a}
        </div>
      </div>
    </motion.div>
  );
};

export default FAQSection;
