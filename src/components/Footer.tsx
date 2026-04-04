import { Link } from "react-router-dom";
import { HashLink } from "@/components/HashLink";
import {
  Zap,
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Linkedin,
  Instagram,
  ArrowUpRight,
} from "lucide-react";

const CONTACT = {
  phone: "(11) 99999-9999",
  phoneTel: "+5511999999999",
  email: "contato@luminous.com.br",
  whatsapp: "https://wa.me/5511999999999",
  linkedin: "https://www.linkedin.com",
  instagram: "https://www.instagram.com",
};

const linksInstitucional = [
  { label: "Início", href: "/#inicio" },
  { label: "Sobre a empresa", href: "/sobre" },
  { label: "Serviços", href: "/servicos" },
  { label: "Dúvidas frequentes", href: "/duvidas" },
  { label: "Contato", href: "/#contato" },
];

const linksSite = [
  { label: "Diferenciais", href: "/#diferenciais" },
  { label: "Planos e contratos", href: "/#planos" },
  { label: "Conformidade e normas", href: "/#conformidade" },
  { label: "Galeria de obras", href: "/#galeria" },
  { label: "Depoimentos", href: "/#depoimentos" },
  { label: "Trabalhe conosco", href: "/#trabalhe-conosco" },
];

const Footer = () => {
  return (
    <footer className="relative border-t border-white/10 bg-black text-white">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent"
        aria-hidden
      />

      <div className="">
        <div className=" container mx-auto grid gap-10 py-12 sm:gap-12 sm:py-14 lg:grid-cols-12 lg:gap-10 lg:py-16">
          {/* Marca e posicionamento */}
          <div className="lg:col-span-4">
            <HashLink
              to="/#inicio"
              className="inline-flex items-center gap-3 rounded-lg outline-none ring-offset-black transition-opacity hover:opacity-90 focus-visible:ring-2 focus-visible:ring-gold/50"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-gold shadow-md shadow-gold/20">
                <Zap className="h-5 w-5 text-primary-foreground" aria-hidden />
              </div>
              <div>
                <span className="font-display text-lg font-bold tracking-tight text-white sm:text-xl">
                  Luminous
                </span>
                <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-white/55">
                  Instalações & Serviços
                </span>
              </div>
            </HashLink>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/70">
              Engenharia de instalações elétricas e hidráulicas, manutenção predial e contratos técnicos
              com SLA — da concepção à operação contínua, com foco em segurança, normas e previsibilidade
              de custos em São Paulo e região.
            </p>
            <HashLink
              to="/#contato"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold transition-colors hover:text-white"
            >
              Solicitar proposta
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </HashLink>
          </div>

          {/* Navegação institucional */}
          <div className="sm:max-lg:col-span-6 lg:col-span-2">
            <h3 className="font-display text-xs font-bold uppercase tracking-[0.2em] text-gold">
              Institucional
            </h3>
            <ul className="mt-4 space-y-3">
              {linksInstitucional.map((item) => (
                <li key={item.href}>
                  {item.href.startsWith("/#") ? (
                    <HashLink
                      to={item.href}
                      className="text-sm text-white/65 transition-colors hover:text-white"
                    >
                      {item.label}
                    </HashLink>
                  ) : (
                    <Link
                      to={item.href}
                      className="text-sm text-white/65 transition-colors hover:text-white"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Seções da página inicial */}
          <div className="sm:max-lg:col-span-6 lg:col-span-3">
            <h3 className="font-display text-xs font-bold uppercase tracking-[0.2em] text-gold">
              No site
            </h3>
            <ul className="mt-4 space-y-3">
              {linksSite.map((item) => (
                <li key={item.href}>
                  <HashLink
                    to={item.href}
                    className="text-sm text-white/65 transition-colors hover:text-white"
                  >
                    {item.label}
                  </HashLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div className="lg:col-span-3">
            <h3 className="font-display text-xs font-bold uppercase tracking-[0.2em] text-gold">
              Fale conosco
            </h3>
            <ul className="mt-4 space-y-4 text-sm text-white/70">
              <li>
                <a
                  href={`tel:${CONTACT.phoneTel.replace(/\D/g, "")}`}
                  className="flex items-start gap-3 transition-colors hover:text-white"
                >
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden />
                  <span>{CONTACT.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="flex items-start gap-3 break-all transition-colors hover:text-white"
                >
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden />
                  <span>{CONTACT.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden />
                <span>Atendimento em todo o estado de São Paulo</span>
              </li>
            </ul>

            <div className="mt-6 flex flex-wrap items-center gap-2">
              <a
                href={CONTACT.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 bg-white/5 text-white/75 transition-colors hover:border-gold/50 hover:bg-white/10 hover:text-gold"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-4 w-4" />
              </a>
              <a
                href={CONTACT.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 bg-white/5 text-white/75 transition-colors hover:border-gold/50 hover:bg-white/10 hover:text-gold"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href={CONTACT.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 bg-white/5 text-white/75 transition-colors hover:border-gold/50 hover:bg-white/10 hover:text-gold"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Faixa inferior */}
        <div className="border-t border-white/10 bg-zinc-950 py-6 sm:py-7 w-full ">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between container mx-auto">
            <p className="text-center text-xs leading-relaxed text-white/55 sm:text-left">
              <span className="font-medium text-white/90">© {new Date().getFullYear()} Luminous Instalações e Serviços.</span>
              {" "}
              Todos os direitos reservados.
            </p>
            <div className="text-center text-[11px] leading-relaxed text-white/50 sm:text-right sm:text-xs">
              <p>
                CNPJ 00.000.000/0001-00 · Engenharia e manutenção predial · São Paulo/SP
              </p>
              <p className="mt-1 opacity-90">
                Execução em conformidade com NBR 5410, NR-10 e demais normas aplicáveis às instalações do
                seu patrimônio.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
