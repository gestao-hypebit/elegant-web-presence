import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { HashLink } from "@/components/HashLink";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Zap, Phone, Mail, Linkedin, Instagram, MessageCircle } from "lucide-react";

const CONTACT = {
  phone: "(11) 91109-4032",
  phoneTel: "+5511911094032",
  email: "contato@ffluminous.com.br",
  whatsapp: "https://wa.me/5511911094032",
  linkedin: "https://www.linkedin.com",
  instagram: "https://www.instagram.com",
};

const navItems = [
  { label: "Início", href: "/#inicio" },
  { label: "Sobre", href: "/sobre" },
  { label: "Serviços", href: "/servicos" },
  { label: "Diferenciais", href: "/#diferenciais" },
  { label: "Planos", href: "/#planos" },
  { label: "Depoimentos", href: "/#depoimentos" },
  { label: "FAQ", href: "/duvidas" },
  { label: "Contato", href: "/#contato" },
];

const Header = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [isOpen, setIsOpen] = useState(false);
  const [scrolledPastHero, setScrolledPastHero] = useState(!isHome);

  useEffect(() => {
    if (!isHome) {
      setScrolledPastHero(true);
      return;
    }

    const update = () => {
      const hero = document.getElementById("inicio");
      if (!hero) {
        setScrolledPastHero(window.scrollY > 64);
        return;
      }
      const { bottom } = hero.getBoundingClientRect();
      setScrolledPastHero(bottom < 96);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [isHome]);

  const showSolid = !isHome || scrolledPastHero || isOpen;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,backdrop-filter,border-color,box-shadow] duration-300 ease-out ${
        showSolid
          ? "bg-background/95 backdrop-blur-xl border-b border-border shadow-sm"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      {/* Barra superior — contato e redes (desktop) */}
      <div
        className={`hidden lg:block transition-colors duration-300 ${
          showSolid ? "border-b border-border" : "border-b border-white/15"
        }`}
      >
        <div className="container mx-auto py-2 flex items-center justify-end gap-6 text-xs">
          <a
            href={`tel:${CONTACT.phoneTel.replace(/\D/g, "")}`}
            className={`flex items-center gap-2 font-medium transition-colors ${
              showSolid ? "text-muted-foreground hover:text-gold" : "text-white/85 hover:text-white"
            }`}
          >
            <Phone className={`w-3.5 h-3.5 ${showSolid ? "text-gold" : "text-gold"}`} />
            {CONTACT.phone}
          </a>
          <a
            href={`mailto:${CONTACT.email}`}
            className={`flex items-center gap-2 font-medium transition-colors ${
              showSolid ? "text-muted-foreground hover:text-gold" : "text-white/85 hover:text-white"
            }`}
          >
            <Mail className="w-3.5 h-3.5 text-gold" />
            {CONTACT.email}
          </a>
          <div className="flex items-center gap-2 pl-2">
            <a
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className={`w-8 h-8 rounded-md flex items-center justify-center transition-colors ${
                showSolid
                  ? "bg-muted text-foreground hover:bg-gold/15 hover:text-gold"
                  : "bg-white/10 text-white hover:bg-white/20"
              }`}
            >
              <MessageCircle className="w-4 h-4" />
            </a>
            <a
              href={CONTACT.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className={`w-8 h-8 rounded-md flex items-center justify-center transition-colors ${
                showSolid
                  ? "bg-muted text-foreground hover:bg-gold/15 hover:text-gold"
                  : "bg-white/10 text-white hover:bg-white/20"
              }`}
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={CONTACT.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className={`w-8 h-8 rounded-md flex items-center justify-center transition-colors ${
                showSolid
                  ? "bg-muted text-foreground hover:bg-gold/15 hover:text-gold"
                  : "bg-white/10 text-white hover:bg-white/20"
              }`}
            >
              <Instagram className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="container mx-auto py-3 sm:py-4 flex items-center justify-between gap-3">
        <HashLink to="/#inicio" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg bg-gradient-gold flex items-center justify-center shadow-lg shadow-black/10">
            <Zap className="w-5 h-5 text-primary-foreground" />
          </div>
          <div>
            <span
              className={`font-display text-base sm:text-lg font-bold transition-colors ${
                showSolid ? "text-foreground" : "text-white"
              }`}
            >
              Luminous
            </span>
            <span
              className={`block text-[10px] tracking-[0.2em] uppercase -mt-1 transition-colors ${
                showSolid ? "text-muted-foreground" : "text-white/65"
              }`}
            >
              Instalações & Serviços
            </span>
          </div>
        </HashLink>

        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) =>
            item.href.startsWith("/#") ? (
              <HashLink
                key={item.href}
                to={item.href}
                className={`text-sm font-medium transition-colors duration-300 ${
                  showSolid
                    ? "text-muted-foreground hover:text-gold"
                    : "text-white/90 hover:text-white"
                }`}
              >
                {item.label}
              </HashLink>
            ) : (
              <Link
                key={item.href}
                to={item.href}
                className={`text-sm font-medium transition-colors duration-300 ${
                  showSolid
                    ? "text-muted-foreground hover:text-gold"
                    : "text-white/90 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            ),
          )}
          <HashLink
            to="/#contato"
            className="px-5 py-2.5 text-sm font-semibold rounded-lg bg-gradient-gold text-primary-foreground hover:opacity-90 transition-opacity shadow-md"
          >
            Solicitar proposta personalizada
          </HashLink>
        </nav>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`lg:hidden p-2 rounded-lg transition-colors ${
            showSolid ? "text-foreground" : "text-white"
          }`}
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
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
            <div className="container mx-auto py-4 flex flex-col gap-1 sm:gap-2">
              {navItems.map((item) =>
                item.href.startsWith("/#") ? (
                  <HashLink
                    key={item.href}
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-sm font-medium text-muted-foreground hover:text-gold transition-colors py-3 min-h-[44px] flex items-center"
                  >
                    {item.label}
                  </HashLink>
                ) : (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-sm font-medium text-muted-foreground hover:text-gold transition-colors py-3 min-h-[44px] flex items-center"
                  >
                    {item.label}
                  </Link>
                ),
              )}
              <HashLink
                to="/#contato"
                onClick={() => setIsOpen(false)}
                className="px-5 py-2.5 text-sm font-semibold rounded-lg bg-gradient-gold text-primary-foreground text-center"
              >
                Solicitar proposta personalizada
              </HashLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
