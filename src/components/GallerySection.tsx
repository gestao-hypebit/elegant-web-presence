import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import galeria1 from "@/assets/galeria/galeria1.jpeg";
import galeria2 from "@/assets/galeria/galeria2.jpeg";
import galeria3 from "@/assets/galeria/galeria3.jpeg";
import galeria4 from "@/assets/galeria/galeria4.jpeg";
import galeria5 from "@/assets/galeria/galeria5.jpeg";
import galeria6 from "@/assets/galeria/galeria6.jpeg";
import galeria7 from "@/assets/galeria/galeria7.jpeg";
import galeria8 from "@/assets/galeria/galeria8.jpeg";
import galeria9 from "@/assets/galeria/galeria9.jpeg";
import galeria10 from "@/assets/galeria/galeria10.jpeg";
import galeria11 from "@/assets/galeria/galeria11.jpeg";
import galeria12 from "@/assets/galeria/galeria12.jpeg";

const photos = [
  galeria1,
  galeria2,
  galeria3,
  galeria4,
  galeria5,
  galeria6,
  galeria7,
  galeria8,
  galeria9,
  galeria10,
  galeria11,
  galeria12,
];

const GallerySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="galeria" className="scroll-mt-24 bg-background py-12 sm:py-16 md:py-24" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-6 sm:mb-8 text-center"
        >
          <span className="text-base sm:text-lg font-semibold uppercase tracking-widest text-gold">Galeria</span>
          <h2 className="mt-3 font-display text-2xl font-bold sm:text-3xl md:text-5xl px-1">Atuação em campo</h2>
        </motion.div>

        <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base text-center mx-auto max-w-3xl mb-8">
        A Luminous atua diretamente em campo, executando serviços com responsabilidade técnica e foco em qualidade.
        </p>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 md:grid-flow-dense">
          {photos.map((src, i) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.04 }}
              className={`relative cursor-pointer overflow-hidden rounded-lg border border-border bg-card ${
                i === 0
                  ? "h-72 sm:h-80 md:col-span-2 md:row-span-2 md:h-[min(28rem,70vh)]"
                  : "h-44 sm:h-48 md:h-44"
              }`}
              onClick={() => setOpenIndex(i)}
            >
              <img
                src={src}
                alt={`Trabalho realizado pela Luminous — imagem ${i + 1}`}
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>

        {openIndex !== null && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
            onClick={() => setOpenIndex(null)}
            role="dialog"
            aria-modal="true"
            aria-label="Visualização da imagem"
          >
            <div className="w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
              <img
                src={photos[openIndex]}
                alt={`Trabalho realizado — imagem ${openIndex + 1}`}
                className="max-h-[85vh] w-full rounded-lg object-contain shadow-xl"
              />
              <p className="mt-3 text-center text-sm text-white/80">Clique fora para fechar</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;
