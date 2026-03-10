import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Zap } from "lucide-react";

const navItems = [
  { label: "Início", href: "/#inicio" },
  { label: "Sobre", href: "/#sobre" },
  { label: "Serviços", href: "/#servicos" },
  { label: "Diferenciais", href: "/#diferenciais" },
  { label: "Planos", href: "/#planos" },
  { label: "Depoimentos", href: "/#depoimentos" },
  { label: "Contato", href: "/#contato" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/#inicio" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg bg-gradient-gold flex items-center justify-center">
            <Zap className="w-5 h-5 text-primary-foreground" />
          </div>
          <div>
            <span className="font-display text-lg font-bold text-foreground">Luminous</span>
            <span className="block text-[10px] tracking-[0.2em] uppercase text-muted-foreground -mt-1">
              Instalações & Serviços
            </span>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground hover:text-gold transition-colors duration-300"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contato"
            className="px-5 py-2.5 text-sm font-semibold rounded-lg bg-gradient-gold text-primary-foreground hover:opacity-90 transition-opacity"
          >
            Solicitar Orçamento
          </a>
        </nav>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-foreground"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden bg-card border-t border-border overflow-hidden"
          >
            <div className="container mx-auto px-6 py-4 flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-medium text-muted-foreground hover:text-gold transition-colors py-2"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contato"
                onClick={() => setIsOpen(false)}
                className="px-5 py-2.5 text-sm font-semibold rounded-lg bg-gradient-gold text-primary-foreground text-center"
              >
                Solicitar Orçamento
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
