import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect, RefObject } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, MessageCircle } from "lucide-react";
import { faqIntro, faqGroups, faqClosing } from "@/content/faqInstitutional";

const WHATSAPP_URL = "https://wa.me/5511999999999";

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

const AccordionItem = ({
  q,
  a,
  isOpen,
  onToggle,
}: {
  q: string;
  a: string;
  isOpen: boolean;
  onToggle: () => void;
}) => {
  const contentRef = useRef<HTMLDivElement | null>(null);
  const measured = useMeasure(contentRef, isOpen);

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="overflow-hidden rounded-lg border border-border bg-card"
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-start justify-between gap-3 sm:gap-4 p-4 sm:p-5 text-left min-h-[48px]"
      >
        <span className="text-sm sm:text-base font-semibold text-foreground pr-2">{q}</span>
        <ChevronDown
          className={`mt-0.5 shrink-0 text-gold transition-transform duration-200 ${isOpen ? "rotate-180" : "rotate-0"}`}
          aria-hidden
        />
      </button>

      <div
        style={{
          maxHeight: measured,
          transition: "max-height 260ms ease",
          overflow: "hidden",
        }}
      >
        <div
          ref={contentRef}
          className="text-sm leading-relaxed text-muted-foreground"
          style={{
            padding: isOpen ? "0 1rem 1rem" : "0 1rem 0",
            opacity: isOpen ? 1 : 0,
            transition: "opacity 200ms ease, padding 200ms ease",
          }}
        >
          {a}
        </div>
      </div>
    </motion.div>
  );
};

const FAQSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openKey, setOpenKey] = useState<string | null>(null);

  return (
    <section id="duvidas" className="bg-background py-12 sm:py-16 md:py-24" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-8 max-w-3xl text-center sm:mb-12 md:mb-14"
        >
          <span className="text-sm sm:text-base font-semibold uppercase tracking-widest text-gold">Dúvidas</span>
          <h2 className="mt-3 font-display text-xl font-bold leading-tight text-foreground sm:text-2xl md:text-4xl lg:text-5xl px-1">
            {faqIntro.title}
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground md:text-base">{faqIntro.lead}</p>
        </motion.div>

        <div className="mx-auto max-w-3xl space-y-10">
          {faqGroups.map((group, gi) => (
            <div key={group.heading}>
              <h3 className="mb-4 font-display text-lg font-bold text-foreground md:text-xl">
                {group.heading}
              </h3>
              <div className="space-y-3">
                {group.items.map((item, ii) => {
                  const key = `${gi}-${ii}`;
                  return (
                    <AccordionItem
                      key={key}
                      q={item.q}
                      a={item.a}
                      isOpen={openKey === key}
                      onToggle={() => setOpenKey(openKey === key ? null : key)}
                    />
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mx-auto mt-16 max-w-3xl border-t border-border pt-12 text-center"
        >
          <h3 className="font-display text-xl font-bold text-foreground md:text-2xl">{faqClosing.title}</h3>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
            {faqClosing.text}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Link
              to="/#contato"
              className="inline-flex w-full items-center justify-center rounded-lg bg-gradient-gold px-8 py-3.5 text-sm font-semibold text-primary-foreground shadow-gold transition-opacity hover:opacity-90 sm:w-auto"
            >
              Solicitar proposta estratégica
            </Link>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-border bg-card px-8 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-gold/40 sm:w-auto"
            >
              <MessageCircle className="h-4 w-4 text-gold" />
              Falar com um especialista via WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
