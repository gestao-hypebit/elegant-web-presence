import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import img1 from "@/assets/service-electrical.jpg";
import img2 from "@/assets/service-hydraulic.jpg";

const photos = [img1, img2, img1, img2, img1];

const GallerySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="galeria" className="py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <span className="text-sm font-semibold text-gold uppercase tracking-widest">Galeria</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mt-3">Trabalhos realizados</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {photos.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className={`${i === 0 ? "md:col-span-2 md:row-span-2 h-96" : "h-44"} rounded-lg overflow-hidden bg-card border border-border relative cursor-pointer`}
              onClick={() => setOpenIndex(i)}
            >
              <img src={p} alt={`Projeto ${i + 1}`} className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105" />
              <div className="absolute bottom-3 left-3 bg-background/60 px-3 py-1 rounded-md text-xs font-semibold">Projeto {i + 1}</div>
            </motion.div>
          ))}
        </div>

        {openIndex !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60" onClick={() => setOpenIndex(null)}>
            <div className="max-w-4xl w-full px-4">
              <img src={photos[openIndex]} alt={`Projeto ${openIndex + 1}`} className="w-full h-auto rounded-lg shadow-xl" />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;
