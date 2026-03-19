import { Phone, MessageCircle } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5531973011770?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20pneus.";

const Header = () => {
  return (
    <header className="bg-brand-dark sticky top-0 z-50">
      <div className="container flex items-center justify-between py-3">
        <a href="#" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-brand-yellow flex items-center justify-center">
            <span className="font-heading text-brand-dark text-lg font-bold">MP</span>
          </div>
          <div className="leading-tight">
            <span className="font-heading text-brand-yellow text-xl font-bold tracking-wider">MACHADO</span>
            <span className="font-heading text-primary-foreground text-xl font-bold tracking-wider ml-1">PNEUS</span>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-primary-foreground/80">
          <a href="#medidas" className="hover:text-brand-yellow transition-colors">Medidas</a>
          <a href="#sobre" className="hover:text-brand-yellow transition-colors">Sobre</a>
          <a href="#contato" className="hover:text-brand-yellow transition-colors">Contato</a>
        </nav>

        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-whatsapp text-primary-foreground px-4 py-2 rounded-lg font-semibold text-sm hover:brightness-110 transition"
        >
          <MessageCircle className="w-4 h-4" />
          <span className="hidden sm:inline">WhatsApp</span>
        </a>
      </div>
    </header>
  );
};

export default Header;
