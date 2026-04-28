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
import galeria24 from "@/assets/galeria/galeria24.jpeg";
import galeria25 from "@/assets/galeria/galeria25.jpeg";
import galeria26 from "@/assets/galeria/galeria26.jpeg";
import galeria27 from "@/assets/galeria/galeria27.jpeg";
import galeria28 from "@/assets/galeria/galeria28.jpeg";
import galeria29 from "@/assets/galeria/galeria29.jpeg";
import galeria30 from "@/assets/galeria/galeria30.jpeg";
import galeria31 from "@/assets/galeria/galeria31.jpeg";
import galeria32 from "@/assets/galeria/galeria32.jpeg";
import galeria33 from "@/assets/galeria/galeria33.jpeg";
import galeria34 from "@/assets/galeria/galeria34.jpeg";
import galeria35 from "@/assets/galeria/galeria35.jpeg";
import galeria36 from "@/assets/galeria/galeria36.jpeg";
import galeria37 from "@/assets/galeria/galeria37.jpeg";
import galeria38 from "@/assets/galeria/galeria38.jpeg";
import galeria39 from "@/assets/galeria/galeria39.jpeg";
import galeria40 from "@/assets/galeria/galeria40.jpeg";
import galeria41 from "@/assets/galeria/galeria41.jpeg";
import galeria42 from "@/assets/galeria/galeria42.jpeg";
import galeria43 from "@/assets/galeria/galeria43.jpeg";
import galeria44 from "@/assets/galeria/galeria44.jpeg";


type Category = "Todas" | "Obras" | "Data Centers" | "Energia Contínua (Nobreak)" | "Infraestrutura Hidráulica" | "Cabines Primárias e Distribuição de Energia" | "Infraestrutura em Implantação" | "Execução Técnica em Altura" | "Equipe Técnica Especializada" | "Ambientes Corporativos";

interface GalleryImage {
  src: string;
  category: Exclude<Category, "Todas">;
  alt: string;
}

const galleryImages: GalleryImage[] = [
  { src: galeria31, category: "Ambientes Corporativos", alt: "Ambiente corporativo" },
  { src: galeria32, category: "Ambientes Corporativos", alt: "Ambiente corporativo" },
  { src: galeria33, category: "Ambientes Corporativos", alt: "Ambiente corporativo" },
  { src: galeria34, category: "Ambientes Corporativos", alt: "Ambiente corporativo" },
  { src: galeria35, category: "Ambientes Corporativos", alt: "Ambiente corporativo" },
  { src: galeria36, category: "Ambientes Corporativos", alt: "Ambiente corporativo" },
  { src: galeria37, category: "Ambientes Corporativos", alt: "Ambiente corporativo" },
  { src: galeria38, category: "Data Centers", alt: "Cabeamento estruturado" },
  { src: galeria4, category: "Cabines Primárias e Distribuição de Energia", alt: "Obra elétrica industrial" },
  { src: galeria5, category: "Cabines Primárias e Distribuição de Energia", alt: "Sistema nobreak instalado" },
  { src: galeria6, category: "Cabines Primárias e Distribuição de Energia", alt: "Manutenção de nobreak" },
  { src: galeria7, category: "Cabines Primárias e Distribuição de Energia", alt: "Sistema hidráulico de shopping" },
  { src: galeria8, category: "Cabines Primárias e Distribuição de Energia", alt: "Tubulação hidráulica" },
  { src: galeria9, category: "Cabines Primárias e Distribuição de Energia", alt: "Execução de obra elétrica" },
  { src: galeria10, category: "Cabines Primárias e Distribuição de Energia", alt: "Quadro de distribuição" },
  { src: galeria11, category: "Cabines Primárias e Distribuição de Energia", alt: "Rack de servidores" },
  { src: galeria12, category: "Cabines Primárias e Distribuição de Energia", alt: "Climatização de data center" },
  // { src: galeria2, category: "Cabines Primárias e Distribuição de Energia", alt: "Instalação em campo" },
  { src: galeria13, category: "Infraestrutura Hidráulica", alt: "Banco de baterias" },
  // { src: galeria14, category: "Cabines Primárias e Distribuição de Energia", alt: "Painel de nobreak" },
  { src: galeria15, category: "Infraestrutura em Implantação", alt: "Bombeamento hidráulico" },
  { src: galeria16, category: "Infraestrutura em Implantação", alt: "Instalação hidráulica comercial" },
  { src: galeria17, category: "Infraestrutura em Implantação", alt: "Projeto elétrico em execução" },
  // { src: galeria18, category: "Data Centers", alt: "Infraestrutura elétrica" },
  { src: galeria16, category: "Obras", alt: "Infraestrutura elétrica" },
  { src: galeria39, category: "Data Centers", alt: "Piso elevado data center" },
  { src: galeria40, category: "Data Centers", alt: "Energia de data center" },
  { src: galeria21, category: "Infraestrutura Hidráulica", alt: "Instalação de UPS" },
  { src: galeria22, category: "Infraestrutura Hidráulica", alt: "Manutenção hidráulica" },
  { src: galeria23, category: "Infraestrutura Hidráulica", alt: "Finalização de obra" },
  { src: galeria41, category: "Energia Contínua (Nobreak)", alt: "Finalização de obra" },
  { src: galeria42, category: "Energia Contínua (Nobreak)", alt: "Finalização de obra" },
  { src: galeria43, category: "Energia Contínua (Nobreak)", alt: "Finalização de obra" },
  { src: galeria1, category: "Execução Técnica em Altura", alt: "Finalização de obra" },
  { src: galeria2, category: "Execução Técnica em Altura", alt: "Finalização de obra" },
  { src: galeria12, category: "Equipe Técnica Especializada", alt: "Finalização de obra" },
  { src: galeria14, category: "Equipe Técnica Especializada", alt: "Finalização de obra" },
  { src: galeria44, category: "Equipe Técnica Especializada", alt: "Finalização de obra" },
];

const categories: Category[] = ["Todas", "Ambientes Corporativos", "Cabines Primárias e Distribuição de Energia", "Data Centers", "Infraestrutura em Implantação", "Energia Contínua (Nobreak)", "Infraestrutura Hidráulica", "Execução Técnica em Altura", "Equipe Técnica Especializada"];

/** Texto exibido abaixo do título da categoria na galeria completa e no lightbox */
const categoryDescriptions: Record<Exclude<Category, "Todas">, string> = {
  "Ambientes Corporativos":
    "Infraestrutura elétrica aplicada a ambientes corporativos, garantindo organização, eficiência e condições adequadas para operação contínua.",
  "Cabines Primárias e Distribuição de Energia":
    "Sistemas de distribuição elétrica aplicados a ambientes críticos, com foco em segurança, controle e continuidade operacional.",
  "Data Centers":
    "Infraestrutura elétrica dedicada a ambientes críticos, com foco em fornecimento estável e continuidade das operações.",
  "Infraestrutura em Implantação":
    "Implantação de sistemas técnicos em obras, garantindo organização, padronização e uma base sólida para o funcionamento das operações.",
  "Energia Contínua (Nobreak)":
    "Suporte à infraestrutura elétrica de sistemas de energia contínua, assegurando confiabilidade e continuidade operacional em ambientes críticos.",
  "Infraestrutura Hidráulica":
    "Infraestrutura hidráulica executada com planejamento e padrão técnico, garantindo eficiência e funcionamento adequado das operações.",
  "Execução Técnica em Altura":
    "Operações técnicas em altura realizadas com planejamento, equipamentos adequados e foco total em segurança e qualidade na execução.",
  "Equipe Técnica Especializada":
    "Profissionais qualificados atuando com padrão técnico, organização e responsabilidade em cada etapa da execução.",
  Obras: "",
};

// 5 imagens de resumo — uma de cada categoria + 1 extra
const previewImages = [galeria3, galeria1, galeria5, galeria7, galeria11, galeria14];

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
        return next < 0 ? previewImages.length - 1 : next >= previewImages.length ? 0 : next;
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

        {/* Grid resumo — 3 em cima + 2 centralizadas embaixo */}
        <div className="space-y-3 sm:space-y-4">
          <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
            {previewImages.slice(0, 3).map((src, i) => (
              <motion.div
                key={src}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.07 * i }}
                className={`group relative cursor-pointer overflow-hidden rounded-xl border border-border bg-card h-48 sm:h-56 md:h-64 ${
                  i === 2 ? "col-span-2 md:col-span-1" : ""
                }`}
                onClick={() => openLightbox(i)}
              >
                <img
                  src={src}
                  alt={`Trabalho realizado pela Luminous — imagem ${i + 1}`}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </motion.div>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-3 sm:gap-4 md:mx-auto md:grid-cols-3 md:max-w-[86.666%]">
            {previewImages.slice(3).map((src, i) => (
              <motion.div
                key={src}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.07 * (i + 3) }}
                className="group relative cursor-pointer overflow-hidden rounded-xl border border-border bg-card h-48 sm:h-56 md:h-64"
                onClick={() => openLightbox(i + 3)}
              >
                <img
                  src={src}
                  alt={`Trabalho realizado pela Luminous — imagem ${i + 4}`}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </motion.div>
            ))}
          </div>
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
                  src={previewImages[lightboxIndex]}
                  alt={`Trabalho realizado — imagem ${lightboxIndex + 1}`}
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

            {activeCategory !== "Todas" && (
              <div className="mb-5 rounded-xl border border-border/60 bg-muted/30 px-4 py-3 sm:px-5 sm:py-4">
                <h3 className="font-display text-base font-semibold text-foreground sm:text-lg">
                  {activeCategory}
                </h3>
                {categoryDescriptions[activeCategory] ? (
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {categoryDescriptions[activeCategory]}
                  </p>
                ) : null}
              </div>
            )}

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
                    <div className="absolute bottom-2 left-2 right-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <span className="block text-xs font-medium text-white">{img.category}</span>
                      {categoryDescriptions[img.category] ? (
                        <span className="mt-1 block text-[11px] leading-snug text-white/90 line-clamp-3">
                          {categoryDescriptions[img.category]}
                        </span>
                      ) : null}
                    </div>
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
                    <div className="mt-3 space-y-2 text-center">
                      <p className="text-sm text-white/80">
                        {filteredImages[dialogLightbox]?.category} — {dialogLightbox + 1} de{" "}
                        {filteredImages.length}
                      </p>
                      {filteredImages[dialogLightbox] &&
                      categoryDescriptions[filteredImages[dialogLightbox].category] ? (
                        <p className="mx-auto max-w-2xl text-xs leading-relaxed text-white/65">
                          {categoryDescriptions[filteredImages[dialogLightbox].category]}
                        </p>
                      ) : null}
                    </div>
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
