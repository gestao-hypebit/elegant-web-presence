import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { HardHat, Zap, Wrench, Droplets, ArrowRight } from "lucide-react";

const TrabalheConoscoSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const whatsappMessage = encodeURIComponent(
    "Olá! Tenho interesse em trabalhar na Luminous. Gostaria de saber mais sobre as vagas disponíveis."
  );
  const whatsappLink = `https://wa.me/5511999999999?text=${whatsappMessage}`;

  const icons = [
    { icon: HardHat, delay: 0.3, top: "10%", left: "10%" },
    { icon: Zap, delay: 0.4, top: "15%", right: "20%" },
    { icon: Wrench, delay: 0.5, bottom: "20%", left: "20%" },
    { icon: Droplets, delay: 0.6, bottom: "15%", right: "10%" },
  ];

  return (
    <section id="trabalhe-conosco" className="bg-gradient-gold overflow-hidden" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between min-h-[220px] sm:min-h-[260px] gap-6 sm:gap-8 py-12 sm:py-16 md:py-24">

          {/* Left — text + CTA */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="flex-1 text-white"
          >
            <p className="text-white/70 text-sm sm:text-lg font-semibold uppercase tracking-widest mb-2 sm:mb-3">
              Faça parte do time
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold leading-tight mb-6 sm:mb-8 text-center md:text-left">
              Quero trabalhar<br />
              <span className="text-white/80">na Luminous</span>
            </h2>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white text-gold font-semibold text-sm hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:gap-3 group"
            >
              Fale conosco!
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>
          </motion.div>

          {/* Right — decorative icon cluster */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hidden md:flex flex-1 items-center justify-center"
          >
            <div className="relative w-64 h-64">
              {/* Central circle */}
              <div className="absolute inset-0 m-auto w-28 h-28 rounded-full bg-white/15 border-2 border-white/30 flex items-center justify-center backdrop-blur-sm">
                <HardHat className="w-12 h-12 text-white" />
              </div>

              {/* Orbiting icons */}
              {[
                { icon: Zap, top: "0%", left: "50%", delay: 0.35 },
                { icon: Wrench, top: "50%", left: "100%", delay: 0.45 },
                { icon: Droplets, top: "100%", left: "50%", delay: 0.55 },
                { icon: Wrench, top: "50%", left: "0%", delay: 0.65 },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: item.delay }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/10 border border-white/25 flex items-center justify-center backdrop-blur-sm"
                  style={{ top: item.top, left: item.left }}
                >
                  <item.icon className="w-6 h-6 text-white/80" />
                </motion.div>
              ))}

              {/* Dashed orbit ring */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-white/20" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TrabalheConoscoSection;
