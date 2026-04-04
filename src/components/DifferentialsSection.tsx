import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  TrendingDown,
  HeartHandshake,
  Eye,
  BarChart3,
  UserCheck,
  Repeat,
  Check,
} from "lucide-react";
import {
  diferenciaisTitulo,
  diferenciaisIntro,
  diferenciaisItens,
} from "@/content/diferenciaisInstitucional";

const icons = [TrendingDown, HeartHandshake, Eye, BarChart3, UserCheck, Repeat];

const DifferentialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="diferenciais"
      className="scroll-mt-28 border-t border-border bg-gradient-to-b from-muted/50 via-background to-background py-12 sm:py-16 md:py-24"
      ref={ref}
    >
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="mx-auto mb-10 max-w-3xl text-center sm:mb-14"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[hsl(193_57%_29%)] sm:text-sm">
            Diferenciais
          </span>
          <h2 className="mt-3 font-display text-2xl font-bold leading-tight text-foreground sm:text-3xl md:text-4xl lg:text-[2.35rem]">
            {diferenciaisTitulo}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
            {diferenciaisIntro}
          </p>
        </motion.div>

        <div className="grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {diferenciaisItens.map((item, i) => {
            const Icon = icons[i] ?? TrendingDown;
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 28 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: 0.05 * i }}
                className="group flex h-full flex-col rounded-2xl border border-[hsl(193_57%_29%)]/12 bg-white p-5 shadow-sm transition-all duration-300 hover:border-[hsl(193_57%_29%)]/28 hover:shadow-md sm:p-6"
              >
                <div className="mb-4 flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[hsl(193_57%_29%)]/10 transition-colors group-hover:bg-[hsl(193_57%_29%)]/15">
                    <Icon className="h-6 w-6 text-[hsl(193_57%_29%)]" aria-hidden />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-display text-base font-bold leading-snug text-foreground sm:text-lg">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.tagline}</p>
                  </div>
                </div>
                <ul className="mt-auto space-y-2.5 border-t border-border/80 pt-4">
                  {item.bullets.map((line) => (
                    <li key={line} className="flex gap-2.5 text-sm leading-snug text-foreground/90">
                      <Check
                        className="mt-0.5 h-4 w-4 shrink-0 text-[hsl(193_57%_29%)]"
                        strokeWidth={2.5}
                        aria-hidden
                      />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
