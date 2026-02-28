import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Carlos Eduardo",
    role: "Síndico - Condomínio Parque Real",
    text: "A Luminous transformou a gestão de manutenção do nosso condomínio. Com o plano preventivo, reduzimos em 40% os chamados de emergência.",
  },
  {
    name: "Ana Paula Ferreira",
    role: "Gerente de Facilities - Tech Corp",
    text: "Profissionalismo e pontualidade excepcionais. A equipe técnica é altamente qualificada e o atendimento é sempre transparente.",
  },
  {
    name: "Roberto Mendes",
    role: "Diretor - Indústria MetalSP",
    text: "Desde que contratamos o serviço recorrente da Luminous, nossos custos com manutenção caíram significativamente. Recomendo fortemente.",
  },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="depoimentos" className="py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-gold uppercase tracking-widest">Depoimentos</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mt-3">
            O que nossos clientes{" "}
            <span className="text-gradient-gold">dizem</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="relative p-8 rounded-2xl bg-card border border-border shadow-card"
            >
              <Quote className="w-8 h-8 text-gold/20 mb-4" />
              <p className="text-black leading-relaxed mb-6 text-sm">{t.text}</p>
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              <div>
                <div className="font-semibold text-foreground">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
