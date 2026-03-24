import { Zap } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-gold flex items-center justify-center">
              <Zap className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="font-display font-bold text-foreground">Luminous</span>
          </div>

          <div className="flex flex-wrap justify-center gap-6 md:gap-8 text-sm text-muted-foreground">
            <a href="/#inicio" className="hover:text-gold transition-colors">Início</a>
            <a href="/sobre" className="hover:text-gold transition-colors">Sobre</a>
            <a href="/servicos" className="hover:text-gold transition-colors">Serviços</a>
            <a href="/duvidas" className="hover:text-gold transition-colors">Dúvidas</a>
            <a href="/#contato" className="hover:text-gold transition-colors">Contato</a>
          </div>

          <p className="text-sm text-muted-foreground">
            © 2026 Luminous. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
