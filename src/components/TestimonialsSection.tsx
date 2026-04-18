import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  useCarousel,
} from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Carlos Eduardo",
    company: "Condomínio Parque Real",
    role: "Síndico",
    initials: "CP",
    rating: 5,
    text: "A Luminous transformou a gestão de manutenção do nosso condomínio. Com o plano preventivo, reduzimos em 40% os chamados de emergência.",
  },
  {
    name: "Ana Paula Ferreira",
    company: "Tech Corp",
    role: "Gerente de Facilities",
    initials: "TC",
    rating: 5,
    text: "Profissionalismo e pontualidade excepcionais. A equipe técnica é altamente qualificada e o atendimento é sempre transparente.",
  },
  {
    name: "Roberto Mendes",
    company: "Indústria MetalSP",
    role: "Diretor industrial",
    initials: "M",
    rating: 5,
    text: "Desde que contratamos o serviço recorrente da Luminous, nossos custos com manutenção caíram significativamente. Recomendo fortemente.",
  },
];

const ratingLabel: Record<number, string> = {
  5: "Excelente",
  4: "Muito bom",
  3: "Bom",
};

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-0.5" aria-label={`${rating} de 5 estrelas`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className="h-5 w-5"
            strokeWidth={1.5}
            style={{
              fill: i < rating ? "#F59E0B" : "none",
              color: i < rating ? "#F59E0B" : "#D1D5DB",
            }}
          />
        ))}
      </div>
      <span className="text-base font-bold text-foreground tabular-nums">
        {rating.toFixed(1).replace(".", ",")}
      </span>
      <span className="text-sm font-medium text-amber-500">
        {/* {ratingLabel[rating] ?? ""} */}
      </span>
    </div>
  );
}

function TestimonialCarouselPrev() {
  const { scrollPrev, canScrollPrev } = useCarousel();
  return (
    <button
      type="button"
      onClick={scrollPrev}
      disabled={!canScrollPrev}
      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-muted-foreground transition-colors hover:text-foreground disabled:pointer-events-none disabled:opacity-25"
      aria-label="Depoimento anterior"
    >
      <ChevronLeft className="h-6 w-6" strokeWidth={1.25} />
    </button>
  );
}

function TestimonialCarouselNext() {
  const { scrollNext, canScrollNext } = useCarousel();
  return (
    <button
      type="button"
      onClick={scrollNext}
      disabled={!canScrollNext}
      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-muted-foreground transition-colors hover:text-foreground disabled:pointer-events-none disabled:opacity-25"
      aria-label="Próximo depoimento"
    >
      <ChevronRight className="h-6 w-6" strokeWidth={1.25} />
    </button>
  );
}

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="depoimentos" className="scroll-mt-28 bg-background py-12 sm:py-16 md:py-20 lg:py-28" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid items-start gap-8 sm:gap-12 lg:grid-cols-12 lg:gap-16"
        >
          <div className="lg:col-span-4">
            <span className="text-base sm:text-lg font-bold uppercase tracking-[0.2em] text-gold">Depoimentos</span>
            <h2 className="mt-3 sm:mt-4 font-display text-2xl font-bold leading-tight text-foreground sm:text-3xl md:text-5xl lg:leading-snug">
              O que nossos clientes dizem sobre nós
            </h2>
            <p className="mt-4 sm:mt-5 max-w-sm text-sm leading-relaxed md:text-base">
              Mais de 350 clientes atendidos e centenas de projetos concluídos.
            </p>
          </div>

          <div className="w-full lg:col-span-8 lg:self-center">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <div className="flex items-center gap-4 sm:gap-6 md:gap-10">
                <TestimonialCarouselPrev />

                <div className="min-w-0 flex-1">
                  <CarouselContent className="-ml-0">
                    {testimonials.map((t) => (
                      <CarouselItem key={t.name} className="basis-full pl-0">
                        <blockquote className="rounded-xl border border-border bg-card px-6 py-7 shadow-sm text-left">
                          <StarRating rating={t.rating} />
                          <p className="mt-5 text-base font-normal leading-relaxed text-foreground md:text-lg">
                            "{t.text}"
                          </p>
                          <footer className="mt-6 flex items-center gap-4 border-t border-border pt-5">
                            <div
                              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-border bg-muted text-xs font-bold uppercase tracking-wide text-muted-foreground"
                              aria-hidden
                            >
                              {t.initials}
                            </div>
                            <cite className="not-italic">
                              <span className="block text-sm font-bold text-foreground">{t.name}</span>
                              <span className="mt-0.5 block text-xs text-muted-foreground">
                                {t.role} · {t.company}
                              </span>
                            </cite>
                          </footer>
                        </blockquote>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                </div>

                <TestimonialCarouselNext />
              </div>
            </Carousel>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
