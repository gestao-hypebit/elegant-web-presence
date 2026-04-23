import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight, X, Grid3X3 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

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
import galeria13 from "@/assets/galeria/galeria13.jpeg";
import galeria14 from "@/assets/galeria/galeria14.jpeg";
import galeria15 from "@/assets/galeria/galeria15.jpeg";
import galeria16 from "@/assets/galeria/galeria16.jpeg";
import galeria17 from "@/assets/galeria/galeria17.jpeg";
import galeria18 from "@/assets/galeria/galeria18.jpeg";
import galeria19 from "@/assets/galeria/galeria19.jpeg";
import galeria20 from "@/assets/galeria/galeria20.jpeg";
import galeria21 from "@/assets/galeria/galeria21.jpeg";
import galeria22 from "@/assets/galeria/galeria22.jpeg";
import galeria23 from "@/assets/galeria/galeria23.jpeg";

type Category = "Todas" | "Obras" | "Data Centers" | "Nobreak" | "Sistema Hidráulico";

interface GalleryImage {
  src: string;
  category: Exclude<Category, "Todas">;
  alt: string;
}

const galleryImages: GalleryImage[] = [
  { src: galeria1, category: "Obras", alt: "Obra elétrica industrial" },
  { src: galeria2, category: "Obras", alt: "Instalação em campo" },
  { src: galeria3, category: "Data Centers", alt: "Infraestrutura de data center" },
  { src: galeria4, category: "Data Centers", alt: "Cabeamento estruturado" },
  { src: galeria5, category: "Nobreak", alt: "Sistema nobreak instalado" },
  { src: galeria6, category: "Nobreak", alt: "Manutenção de nobreak" },
  { src: galeria7, category: "Sistema Hidráulico", alt: "Sistema hidráulico de shopping" },
  { src: galeria8, category: "Sistema Hidráulico", alt: "Tubulação hidráulica" },
  { src: galeria9, category: "Obras", alt: "Execução de obra elétrica" },
  { src: galeria10, category: "Obras", alt: "Quadro de distribuição" },
  { src: galeria11, category: "Data Centers", alt: "Rack de servidores" },
  { src: galeria12, category: "Data Centers", alt: "Climatização de data center" },
  { src: galeria13, category: "Nobreak", alt: "Banco de baterias" },
  { src: galeria14, category: "Nobreak", alt: "Painel de nobreak" },
  { src: galeria15, category: "Sistema Hidráulico", alt: "Bombeamento hidráulico" },
  { src: galeria16, category: "Sistema Hidráulico", alt: "Instalação hidráulica comercial" },
  { src: galeria17, category: "Obras", alt: "Projeto elétrico em execução" },
  { src: galeria18, category: "Obras", alt: "Infraestrutura elétrica" },
  { src: galeria19, category: "Data Centers", alt: "Piso elevado data center" },
  { src: galeria20, category: "Data Centers", alt: "Energia de data center" },
  { src: galeria21, category: "Nobreak", alt: "Instalação de UPS" },
  { src: galeria22, category: "Sistema Hidráulico", alt: "Manutenção hidráulica" },
  { src: galeria23, category: "Obras", alt: "Finalização de obra" },
];

const categories: Category[] = ["Todas", "Obras", "Data Centers", "Nobreak", "Sistema Hidráulico"];

// Imagens em destaque na visualização principal (uma de cada categoria)
const heroImages = [galeria3, galeria1, galeria5, galeria7, galeria11, galeria17];

const GallerySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<Category>("Todas");
  const [dialogLightbox, setDialogLightbox] = useState<number | null>(null);

  const filteredImages =
    activeCategory === "Todas"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  const openLightbox = useCallback((index: number) => setLightboxIndex(index), []);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const navigateLightbox = useCallback(
    (dir: 1 | -1) => {
      setLightboxIndex((prev) => {
        if (prev === null) return null;
        const next = prev + dir;
        return next < 0 ? heroImages.length - 1 : next >= heroImages.length ? 0 : next;
      });
    },
    []
  );

  const openDialogLightbox = useCallback((index: number) => setDialogLightbox(index), []);
  const closeDialogLightbox = useCallback(() => setDialogLightbox(null), []);

  const navigateDialogLightbox = useCallback(
    (dir: 1 | -1) => {
      setDialogLightbox((prev) => {
        if (prev === null) return null;
        const next = prev + dir;
        return next < 0 ? filteredImages.length - 1 : next >= filteredImages.length ? 0 : next;
      });
    },
    [filteredImages.length]
  );

  return (
    <section id="galeria" className="scroll-mt-24 bg-background py-12 sm:py-16 md:py-24" ref={ref}>
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-6 sm:mb-8 text-center"
        >
          <span className="text-base sm:text-lg font-semibold uppercase tracking-widest text-gold">
            Galeria
          </span>
          <h2 className="mt-3 font-display text-2xl font-bold sm:text-3xl md:text-5xl px-1">
            Atuação em campo
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base mx-auto max-w-3xl">
            A Luminous atua diretamente em campo, executando serviços com
            responsabilidade técnica e foco em qualidade.
          </p>
        </motion.div>

        {/* Grid principal — layout estilo bento */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4 md:grid-rows-2 md:auto-rows-[220px]">
          {heroImages.map((src, i) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className={`group relative cursor-pointer overflow-hidden rounded-xl border border-border/60 bg-card shadow-sm ${
                i === 0
                  ? "col-span-2 row-span-2 h-64 sm:h-72 md:h-full"
                  : "h-40 sm:h-48 md:h-full"
              }`}
              onClick={() => openLightbox(i)}
            >
              <img
                src={src}
                alt={`Trabalho realizado pela Luminous — destaque ${i + 1}`}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>

        {/* Botão Ver Mais */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-8 flex justify-center"
        >
          <button
            onClick={() => {
              setActiveCategory("Todas");
              setDialogOpen(true);
            }}
            className="group inline-flex items-center gap-2.5 rounded-full border border-gold/30 bg-gold/5 px-7 py-3 text-sm font-semibold text-gold transition-all duration-300 hover:border-gold hover:bg-gold hover:text-white hover:shadow-lg hover:shadow-gold/20"
          >
            <Grid3X3 className="h-4 w-4" aria-hidden />
            Ver galeria completa
          </button>
        </motion.div>

        {/* Lightbox da visualização principal */}
        <AnimatePresence>
          {lightboxIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
              onClick={closeLightbox}
              role="dialog"
              aria-modal="true"
              aria-label="Visualização da imagem"
            >
              <button
                onClick={(e) => { e.stopPropagation(); navigateLightbox(-1); }}
                className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white backdrop-blur-sm transition hover:bg-white/20"
                aria-label="Imagem anterior"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              <motion.div
                key={lightboxIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="w-full max-w-5xl"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={heroImages[lightboxIndex]}
                  alt={`Destaque ${lightboxIndex + 1}`}
                  className="max-h-[85vh] w-full rounded-xl object-contain shadow-2xl"
                />
              </motion.div>

              <button
                onClick={(e) => { e.stopPropagation(); navigateLightbox(1); }}
                className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white backdrop-blur-sm transition hover:bg-white/20"
                aria-label="Próxima imagem"
              >
                <ChevronRight className="h-6 w-6" />
              </button>

              <button
                onClick={closeLightbox}
                className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white backdrop-blur-sm transition hover:bg-white/20"
                aria-label="Fechar"
              >
                <X className="h-5 w-5" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Dialog — Galeria completa com categorias */}
        <Dialog open={dialogOpen} onOpenChange={(open) => { setDialogOpen(open); if (!open) setDialogLightbox(null); }}>
          <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto p-4 sm:p-6">
            <DialogHeader>
              <DialogTitle className="font-display text-xl sm:text-2xl font-bold">
                Galeria de Projetos
              </DialogTitle>
              <DialogDescription>
                Explore nossos projetos por categoria
              </DialogDescription>
            </DialogHeader>

            {/* Filtros por categoria */}
            <div className="flex flex-wrap gap-2 mt-2 mb-4">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-200 ${
                    activeCategory === cat
                      ? "bg-gold text-white shadow-md shadow-gold/25"
                      : "bg-muted text-muted-foreground hover:bg-gold/10 hover:text-gold"
                  }`}
                >
                  {cat}
                  {cat !== "Todas" && (
                    <span className="ml-1.5 text-xs opacity-70">
                      ({galleryImages.filter((img) => img.category === cat).length})
                    </span>
                  )}
                </button>
              ))}
            </div>

            {/* Grid de imagens filtradas */}
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
              <AnimatePresence mode="popLayout">
                {filteredImages.map((img, i) => (
                  <motion.div
                    key={img.src}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3, delay: i * 0.03 }}
                    className="group relative cursor-pointer overflow-hidden rounded-lg border border-border/50 bg-card aspect-[4/3]"
                    onClick={() => openDialogLightbox(i)}
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <span className="absolute bottom-2 left-2 right-2 text-xs font-medium text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 truncate">
                      {img.category}
                    </span>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Lightbox dentro do dialog */}
            <AnimatePresence>
              {dialogLightbox !== null && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 z-[60] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
                  onClick={closeDialogLightbox}
                >
                  <button
                    onClick={(e) => { e.stopPropagation(); navigateDialogLightbox(-1); }}
                    className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white backdrop-blur-sm transition hover:bg-white/20"
                    aria-label="Imagem anterior"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </button>

                  <motion.div
                    key={dialogLightbox}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2 }}
                    className="w-full max-w-5xl"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <img
                      src={filteredImages[dialogLightbox]?.src}
                      alt={filteredImages[dialogLightbox]?.alt}
                      className="max-h-[85vh] w-full rounded-xl object-contain shadow-2xl"
                    />
                    <p className="mt-3 text-center text-sm text-white/70">
                      {filteredImages[dialogLightbox]?.category} — {dialogLightbox + 1} de {filteredImages.length}
                    </p>
                  </motion.div>

                  <button
                    onClick={(e) => { e.stopPropagation(); navigateDialogLightbox(1); }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white backdrop-blur-sm transition hover:bg-white/20"
                    aria-label="Próxima imagem"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </button>

                  <button
                    onClick={closeDialogLightbox}
                    className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white backdrop-blur-sm transition hover:bg-white/20"
                    aria-label="Fechar"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default GallerySection;
